import os,sys
import django
import requests
from bs4 import BeautifulSoup
import datetime
import csv
from multiprocessing import Pool, Process
import pandas as pd


BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(BASE_DIR)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'stockin.settings')
django.setup()

from core.models import News, Stock

url = 'https://search.naver.com/search.naver?&where=news&query={}&sm=tab_pge&sort=2&photo=0&field=1&reporter_article=&pd=3&ds={}&de={}&docid=&nso=so:dd,a:all&mynews=0&start={}&refresh_start=0'
headers={'User-Agent': 'Mozilla/5.0'}


def NewsCrawler_(stock, startDate, endDate):
    
    stockTitle = stock.title
    newsCount = 1
    oneDay = datetime.timedelta(days=1)
    dateIndex = startDate
    news_list=[]
    
    while dateIndex <= endDate:

        while True:
            date = dateIndex.strftime('%Y.%m.%d')
            raw = requests.get(url.format(stockTitle, date, date, newsCount), headers=headers)
            soup= BeautifulSoup(raw.text, 'html.parser')

            titles = soup.select('.news_tit')
            presses = soup.select('.info.press')
            
            for title, press in zip(titles, presses):
                
                # print(dateIndex.strftime('%Y-%m-%d'),stockTitle, press.text.split(' ')[0])
                news_list.append(
                    News(
                    stock=stock,
                    title=title.text,
                    press=press.text.split(' ')[0],
                    date=dateIndex.strftime('%Y-%m-%d'),
                    link=title['href']
                    )
                )
                
                
               

            if len(titles) < 10:
                break

            newsCount += 10

        print(dateIndex, stockTitle)
        dateIndex += oneDay
        newsCount = 1
        
    if len(news_list) != 0:
        News.objects.bulk_create(news_list)
        
def NewsCrawler(startDate, endDate, process=32):

    stocks = Stock.objects.all()
      
    pool = Pool(process)
    
    try:
        for stock in stocks:
            pool.apply_async(NewsCrawler_, args=(stock,startDate,endDate))
    finally:
        pool.close()
        pool.join()


def minMaxScaler(list_):
    min_ = min(list_)
    max_ = max(list_)
    return list(map(lambda x: (x-min_)/(max_-min_), list_))

def newsScaling_(stock, today, count=10):
 
    oneDay = datetime.timedelta(days=1)
    with open('./data/News_Scaling/news_data.csv','a', newline='') as file:
        wr = csv.DictWriter(file, fieldnames = ['title','startDate','endDate','raw','scale'])
        stockTitle = stock.title
        
        newsdata =[]
        dateIndex = today- datetime.timedelta(days=count)
        newsstart = 1
        newsend = 400
        allCount=0
        while dateIndex <= today:
            date = dateIndex.strftime('%Y.%m.%d')
            
            while True:
                middle = int((newsstart+newsend)/2)
                
                raw = requests.get(url.format(stockTitle, date, date, 10*(middle-1)+1, headers=headers))
                soup = BeautifulSoup(raw.text, 'html.parser')

                titles = soup.select('.news_tit')

                # 이진탐색
                if newsstart == middle:
                    allCount = len(titles) + (middle-1)*10
                    newsdata.append(allCount)
                    break

                if len(titles) == 0:
                    newsend = middle
                elif len(titles) == 10:
                    newsstart = middle
                else:
                    allCount = len(titles) + (middle-1)*10
                    newsdata.append(allCount)
                    break


            print(dateIndex.strftime('%Y.%m.%d'), stockTitle, allCount,"개")
            dateIndex += oneDay
            newsstart = 1
            newsend = 400

        
        scale = minMaxScaler(newsdata)
        
        wr.writerow({
                    'title':stockTitle,
                    'startDate':(today- datetime.timedelta(days=count)).strftime('%Y.%m.%d'),
                    'endDate':today.strftime('%Y.%m.%d'),
                    'raw': newsdata,
                    'scale': scale
                    })

def newsScaling(today, count=100, process=16):
    stocks = Stock.objects.all()
    with open('./data/News_Scaling/news_data.csv','w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames = ['title','startDate','endDate','raw','scale'])
        writer.writeheader()

      
    pool = Pool(process)
    
    try:
        for stock in stocks:
            pool.apply_async(newsScaling_, args=(stock, today, count))
    finally:
        pool.close()
        pool.join()

def newsScalingUpdate(today):
    with open('./data/News_Scaling/news_data.csv','r') as file:
        reader = csv.DictReader(file)
        
        for a in reader:
            endDate = a['endDate']
            






# a=datetime.date(2020,11,7)
# b=datetime.date(2020,11,1)


# NewsCrawler(b,a)
if __name__ == '__main__':
    # if len(sys.argv) !=3 :
    #     print('인자를 확인하십시오!')
    # elif len(sys.argv[1]) != 8 or len(sys.argv[2]) != 8:
    #     print('잘못된 날짜형식, 인자 확인!')
    # else:
    #     start = datetime.date(int(sys.argv[1][:4]), int(sys.argv[1][4:6]), int(sys.argv[1][6:]))
    #     end = datetime.date(int(sys.argv[2][:4]), int(sys.argv[2][4:6]), int(sys.argv[2][6:]))
    #     NewsCrawler(start, end)
   
    newsScaling(datetime.datetime.now()-datetime.timedelta(days=1))
    # newsScalingUpdate(1)
 