# Create your views here.
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseNotAllowed, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model
from django.db.utils import IntegrityError
from django.core.exceptions import ObjectDoesNotExist
from django.utils import timezone
from django.core import serializers
from datetime import timedelta
from json import JSONDecodeError
import json, csv, os

from core.models import Stock, StockHistory, FinancialStat, News
from core.crawlers.preprocessors.score import base_score


def stock_fs(request, stock_id=''):
    if request.method == 'GET':
        
        # For debugging
        # print(FinancialStat.objects.all().explain())
        # print(FinancialStat.objects.filter(stock__id = stock_id).explain())

        response_list = []
        fs_list = FinancialStat.objects.filter(stock__id = stock_id)
        
        for fs in fs_list:
            response_dict = {'id': fs.id, 'stock_id': fs.stock.id, 'quarter': fs.quarter, 'sales': fs.sales, 'operatingProfit': fs.operatingProfit,
                             'netIncome': fs.netIncome, 'operatingMargin': fs.operatingMargin, 'netProfitMargin': fs.netProfitMargin, 'PER': fs.PER, 'PBR': fs.PBR, 'ROE': fs.ROE}
            response_list.append(response_dict)

        return JsonResponse(response_list, safe=False)

    else:
        return HttpResponseNotAllowed(['GET'])


def price_list(request, stock_id=""):
    if request.method == 'GET':
        get_object_or_404(Stock, id=stock_id)
        response_list = []
        for stock_history in StockHistory.objects.filter(stock_id=stock_id).iterator():
            response_list.append({'stock': stock_id, 'date': stock_history.date, 'open': stock_history.startPrice, 'high': stock_history.highestPrice, 'low': stock_history.lowestPrice, 'close': stock_history.endPrice, 'volume': stock_history.tradeVolume})
        return JsonResponse(response_list, safe=False)
        
    else :
        return HttpResponseNotAllowed(['GET'])


def stock_list(request):
    if request.method == 'GET':
        response_list = []
        stocks = [stock for stock in Stock.objects.all()]
        for stock in stocks : 
            response_dict = {'id' : stock.id, 'title' : stock.title, 'code' : stock.code, 'sector' : stock.sector}
            response_list.append(response_dict)

        return JsonResponse(response_list, safe=False)
    
    else :
        return HttpResponseNotAllowed(['GET'])


def stock_info(request, stock_id=''):
    if request.method == 'GET':
        target_stock = Stock.objects.get(id = stock_id)
        kospi = 'KOSDAQ'
        if target_stock.isKOSPI:
            kospi = 'KOSPI'
        response_dict = {
                        'title' : target_stock.title,
                        'code' : target_stock.code,
                        'sector' : target_stock.sector,
                        'price' : target_stock.price,
                        'highestPrice' : target_stock.highestPrice,
                        'lowestPrice' : target_stock.lowestPrice,
                        'tradeVolume' : target_stock.tradeVolume,
                        'tradeValue' : target_stock.tradeValue,
                        'startPrice' : target_stock.startPrice,
                        'yesterdayPrice' : target_stock.yesterdayPrice,
                        'amount' : target_stock.amount,
                        'isKOSPI' : kospi,
                        'saleGrowthRate' : target_stock.saleGrowthRate,
                        'saleGrowthRateAvg' : target_stock.saleGrowthRateAvg,
                        'operatingMarginRate' : target_stock.operatingMarginRate,
                        'operatingMarginRateAvg' : target_stock.operatingMarginRateAvg,
                        'crawledPER' : target_stock.crawledPER,
                        'crawledPERAvg' : target_stock.crawledPERAvg,
                        'debtRatio' : target_stock.debtRatio,
                        'score' : target_stock.score
                        }
        return HttpResponse(content=json.dumps(response_dict), status=203)
    
    else:
        return HttpResponseNotAllowed(['GET'])


def fs_score(request, stock_id=""):
    if request.method == 'GET':
        stock = get_object_or_404(Stock, id=stock_id)
        fs_stock = FinancialStat.objects.filter(stock_id=stock_id)
        op = ['','','','','']
        try:
            op[4] = fs_stock.get(quarter='20년 6월').operatingProfit
        except:
            pass
        try:
            op[3] = fs_stock.get(quarter='20년 3월').operatingProfit
        except:
            pass
        try:
            op[2] = fs_stock.get(quarter='19년 12월').operatingProfit
        except:
            pass
        try:
            op[1] = fs_stock.get(quarter='19년 6월').operatingProfit
        except:
            pass
        try:
            op[0] = fs_stock.get(quarter='19년 3월').operatingProfit
        except:
            pass
        for i in range(5):
            if op[i] == '-':
                op[i] = ''
        # liability rate

        # operatingCashflow
        script_dir = os.path.dirname(__file__) #<-- absolute dir the script is in
        rel_path = "../crawlers/data/Cash_Flow.csv"
        abs_file_path = os.path.join(script_dir, rel_path)
        f = open(abs_file_path, 'r', encoding='utf-8')
        rdr = csv.reader(f)
        operatingCashflow = []
        for line in rdr:
            if line[0] == stock.title and line[1] == '18년 12월':
                if line[2] == ' ':
                    operatingCashflow.append('')
                else:
                    operatingCashflow.append(float(str(line[2]).replace(',','')))
            elif line[0] == stock.title and line[1] == '19년 12월':
                if line[2] == ' ':
                    operatingCashflow.append('')
                else:
                    operatingCashflow.append(float(str(line[2]).replace(',','')))
                break
        f.close()  

        # response = {'score' : score, 'status': if score is None, operatingProfitNotEnough 1, operatingCashflowNotEnough 2, Both 3}
        response = base_score(op, operatingCashflow, stock.debtRatio, stock.crawledPER, stock.crawledPERAvg, stock.operatingMarginRate, stock.operatingMarginRateAvg)
        return JsonResponse(response, status=201)
    else:
        return HttpResponseNotAllowed(['GET'])


def stock_top10(request):
    if request.method =='GET':
        stocks=Stock.objects.all().values_list('id','score').order_by('-score')[:10]
        response_list=[]
        for stock in stocks:
            response_list.append({
                'id': stock[0],
                'score':stock[1]
            })
        return JsonResponse(response_list, safe=False)
    else:
        return HttpResponseNotAllowed(['GET'])


def stock_bottom10(request):
    if request.method =='GET':
        stocks=Stock.objects.all().values_list('id','score').order_by('score')[:10]
        response_list=[]
        for stock in stocks:
            response_list.append({
                'id': stock[0],
                'score':stock[1]
            })
        return JsonResponse(response_list, safe=False)
    else:
        return HttpResponseNotAllowed(['GET'])


# For report page up tap
def stock_top100_stockinfo(request) :
    if request.method =='GET':
        response_list=[]
        
        stocks=Stock.objects.all().values('id','title','isKOSPI','code','price','yesterdayPrice','score').order_by('score')[0:100]
        
        cnt = 1
        for stock in stocks:
            response_list.append({
                'id': stock['id'],
                'rank' : cnt,
                'title' : stock['title'],
                'isKOSPI' : stock['isKOSPI'],
                'code' : stock['code'],
                'price' : stock['price'],
                'yesterdayPrice' : stock['yesterdayPrice'],
                'score' : stock['score'],
            })
            cnt = cnt + 1

        return JsonResponse(response_list, safe=False)

    else:
        return HttpResponseNotAllowed(['GET'])

def stock_top100_news(request) :
    if request.method =='GET':
        response_list=[]
        
        stocks=Stock.objects.all().values('id','score').order_by('score')[0:100]
        
        cnt = 1
        for stock in stocks:
            # Get News
            news_qs = News.objects.values('id', 'title', 'press', 'link', 'date').filter(stock__id = stock['id']).filter(date="2020-11-07")
            news_list = []
            for news in news_qs[:5]:
                news_list.append(news)

            response_list.append({
                'id' : stock['id'],
                'news' : news_list,
            })
            cnt = cnt + 1

        return JsonResponse(response_list, safe=False)

    else:
        return HttpResponseNotAllowed(['GET'])

def stock_top100_stockhistory(request) :
    if request.method =='GET':
        response_list=[]

        enddate = timezone.now().date()
        startdate = enddate - timedelta(days=30)

        stocks=Stock.objects.all().values('id','score').order_by('score')[0:100]
        
        cnt = 1
        for stock in stocks:
            # Get StockHistory(1 month)
            stockhis_qs = StockHistory.objects.values('id', 'date', 'endPrice').filter(stock__id = stock['id']).filter(date__range=[startdate, enddate])
            stockhis_list = []
            for stockhis in stockhis_qs :
                stockhis_list.append(stockhis)

            response_list.append({
                'id' : stock['id'],
                'stockhistory' : stockhis_list,
            })
            cnt = cnt + 1

        return JsonResponse(response_list, safe=False)

    else:
        return HttpResponseNotAllowed(['GET'])

# For report page down tap
def stock_bottom100_stockinfo(request) :
    if request.method =='GET':
        response_list=[]
        
        stocks=Stock.objects.all().values('id','title','isKOSPI','code','price','yesterdayPrice','score').order_by('-score')[0:100]
        
        cnt = 1
        for stock in stocks:
            response_list.append({
                'id': stock['id'],
                'rank' : cnt,
                'title' : stock['title'],
                'isKOSPI' : stock['isKOSPI'],
                'code' : stock['code'],
                'price' : stock['price'],
                'yesterdayPrice' : stock['yesterdayPrice'],
                'score' : stock['score'],
            })
            cnt = cnt + 1

        return JsonResponse(response_list, safe=False)

    else:
        return HttpResponseNotAllowed(['GET'])

def stock_bottom100_news(request) :
    if request.method =='GET':
        response_list=[]
        
        stocks=Stock.objects.all().values('id','score').order_by('-score')[0:100]
        
        cnt = 1
        for stock in stocks:
            # Get News
            news_qs = News.objects.values('id', 'title', 'press', 'link', 'date').filter(stock__id = stock['id']).filter(date="2020-11-07")
            news_list = []
            for news in news_qs[:5]:
                news_list.append(news)

            response_list.append({
                'id' : stock['id'],
                'news' : news_list,
            })
            cnt = cnt + 1

        return JsonResponse(response_list, safe=False)

    else:
        return HttpResponseNotAllowed(['GET'])

def stock_bottom100_stockhistory(request) :
    if request.method =='GET':
        response_list=[]

        enddate = timezone.now().date()
        startdate = enddate - timedelta(days=30)

        stocks=Stock.objects.all().values('id','score').order_by('-score')[0:100]
        
        cnt = 1
        for stock in stocks:
            # Get StockHistory(1 month)
            stockhis_qs = StockHistory.objects.values('id', 'date', 'endPrice').filter(stock__id = stock['id']).filter(date__range=[startdate, enddate])
            stockhis_list = []
            for stockhis in stockhis_qs :
                stockhis_list.append(stockhis)

            response_list.append({
                'id' : stock['id'],
                'stockhistory' : stockhis_list,
            })
            cnt = cnt + 1

        return JsonResponse(response_list, safe=False)

    else:
        return HttpResponseNotAllowed(['GET'])
