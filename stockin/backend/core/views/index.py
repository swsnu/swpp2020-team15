import json, csv, os
from core.crawlers.preprocessors.score import base_score

def getFSInfo(stock, fs_stock) :
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

    return response