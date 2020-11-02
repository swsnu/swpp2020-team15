from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseNotAllowed, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model
from json import JSONDecodeError
import json

from apps.groups.models import Group
from apps.stocks.models import Stock

 
## Group views
def group_list_and_create(request):
    if request.method == 'GET':
        # check if user is logged_in
        if not request.user.is_authenticated :
            return HttpResponse(status=401)

        response_list = []
        group_list = [group for group in Group.objects.all() if group.user == request.user]
        for group in group_list : 
            response_dict = {'id' : group.id, 'user' : group.user.email, 'name' : group.name}
            response_list.append(response_dict)

        return JsonResponse(response_list, safe=False)

    elif request.method == 'POST':
        # check if user is logged_in
        if not request.user.is_authenticated :
            return HttpResponse(status=401)

        try:
            body = request.body.decode()
            name = json.loads(body)['name']
            user = request.user
        except (KeyError, JSONDecodeError) as e:
            return HttpResponseBadRequest()
        
        group = Group(user=user, name=name)
        group.save()

        response_dict = {'id' : group.id, 'user': group.user.email, 'name' : group.name}
        return HttpResponse(content=json.dumps(response_dict), status = 201)
    
    else :
        return HttpResponseNotAllowed(['GET', 'POST'])


def group_edit(request, id='') :
    if request.method == 'PUT':
        # check user is logged_in
        if not request.user.is_authenticated :
            return HttpResponse(status=401)

        group = get_object_or_404(Group, id=id)

        # check user valid
        if group.user != request.user :
            return HttpResponse(status=403)

        try : 
            body = request.body.decode()
            name = json.loads(body)['name']
            user = request.user
        except (KeyError, JSONDecodeError) as e:
            return HttpResponseBadRequest()

        group.name = name
        group.save()

        response_dict = {'id' : group.id, 'user': group.user.email, 'name' : group.name}
        return HttpResponse(content=json.dumps(response_dict), status = 200)

    elif request.method == 'DELETE':
        # check user is logged_in
        if not request.user.is_authenticated :
            return HttpResponse(status=401)

        group = get_object_or_404(Group, id=id)

        # check user valid
        if group.user != request.user :
            return HttpResponse(status=403)

        # TODO : Delete fail handle
        group.delete()

        return HttpResponse(status=200)

    else :
        return HttpResponseNotAllowed(['PUT', 'DELETE'])


def group_stock_list(request, id=''):
    if request.method == 'GET':
        # check if user is logged_in
        if not request.user.is_authenticated :
            return HttpResponse(status=401)

        group = get_object_or_404(Group, id=id)
        # check user valid
        if group.user != request.user :
            return HttpResponse(status=403)

        response_list = []
        for stock in group.stocks.all():
            response_dict = {'id' : stock.id, 'title' : stock.title}
            response_list.append(response_dict)

        return JsonResponse(response_list, safe=False)

    elif request.method == 'POST':
        # check if user is logged_in
        if not request.user.is_authenticated :
            return HttpResponse(status=401)

        group = get_object_or_404(Group, id=id)
        # check user valid
        if group.user != request.user :
            return HttpResponse(status=403)

        try:
            body = request.body.decode()
            req_data = json.loads(body)
            user = request.user
        except (KeyError, JSONDecodeError) as e:
            return HttpResponseBadRequest()

        response_list = []
        for stock in req_data : 
            stock_id = stock['id']

            # if stock already exists, continue
            if group.stocks.filter(id=int(stock_id)) :
                continue
            
            # find record in stock model
            try:
                target_stock = Stock.objects.get(id=stock_id)
            except Stock.DoesNotExist:
                return HttpResponseBadRequest()
                
            # add
            group.stocks.add(target_stock)
            group.save()

            response_dict = {'id' : target_stock.id, 'title' : target_stock.title}
            response_list.append(response_dict)

        return HttpResponse(content=json.dumps(response_list), status = 201)
                
    else :
        return HttpResponseNotAllowed(['GET', 'POST'])


def group_stock_delete(request, group_id='', stock_id=''):
    if request.method == 'DELETE':
        # check if user is logged_in
        if not request.user.is_authenticated :
            return HttpResponse(status=401)

        group = get_object_or_404(Group, id=group_id)
        # check user valid
        if group.user != request.user :
            return HttpResponse(status=403)
        
        # get target stock
        target_stock = get_object_or_404(Stock, id=stock_id)
        # delete from group
        try :
            group.stock.remove(target_stock)
        except :
            return HttpResponse(status=404)

    else :
        return HttpResponseNotAllowed(['DELETE'])





