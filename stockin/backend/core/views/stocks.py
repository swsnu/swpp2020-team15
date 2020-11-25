# Create your views here.
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseNotAllowed, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model
from django.db.utils import IntegrityError
from django.core.exceptions import ObjectDoesNotExist
from json import JSONDecodeError
import json, csv, os

from core.models import Stock, StockHistory, FinancialStat
from core.preprocessors.score import base_score


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
                        }
        return HttpResponse(content=json.dumps(response_dict), status=203)
    
    else:
        return HttpResponseNotAllowed(['GET'])

def fs_score(request, stock_id=""):
    if request.method == 'GET':
        # ob
        # operatingProfit
        # cashflow //TODO:
        # liability ratio //TODO:
        # sub
        # PER //TODO:
        # operatingmargin //TODO:
        # extreme value 
        stock = get_object_or_404(Stock, id=stock_id)
        fs_stock = FinancialStat.objects.filter(stock_id=stock_id)
        op = []
        try:
            op[4] = fs_stock.get(quarter='19년 6월')['operatingProfit']
        except ObjectDoesNotExist as e:
            op[4] = ''
        try:
            op[3] = fs_stock.get(quarter='19년 9월')['operatingProfit']
        except ObjectDoesNotExist as e:
            op[3] = ''
        try:
            op[2] = fs_stock.get(quarter='19년 12월')['operatingProfit']
        except ObjectDoesNotExist as e:
            op[2] = ''
        try:
            op[1] = fs_stock.get(quarter='20년 3월')['operatingProfit']
        except ObjectDoesNotExist as e:
            op[1] = ''
        try:
            op[0] = fs_stock.get(quarter='20년 6월')['operatingProfit']
        except ObjectDoesNotExist as e:
            op[0] = ''



        # liability rate
        # operatingCashflow
        script_dir = os.path.dirname(__file__) #<-- absolute dir the script is in
        rel_path = "../crawlers/data/Cash_Flow.csv"
        abs_file_path = os.path.join(script_dir, rel_path)
        f = open(abs_file_path, 'r', encoding='utf-8')
        rdr = csv.reader(f)
        operatingCashflow = []
        for line in rdr:
            if line[0] == 'title':
                pass
            elif line[0] == stock.title and line[1] == '18년 12월':
                if line[3] == ' ':
                    operatingCashflow.append('')
                else:
                    operatingCashflow.append(float(str(line[3]).replace(',','')))
            elif line[0] == stock.title and line[1] == '19년 12월':
                if line[3] == ' ':
                    operatingCashflow.append('')
                else:
                    operatingCashflow.append(float(str(line[3]).replace(',','')))
                break
            


                
        f.close()  
        # (crawl PER, avgPER)
        # (crawl operationalProfitMargin, avg...)

        response = base_score(op, operatingCashflow, )
        return JsonResponse(response, status=201)


        
        
