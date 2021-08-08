from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products


@api_view(['GET'])
def getRoutes(request):
    routes =['KKK']
    return Response(routes)


@api_view(['GET'])
def getProducts(request,pk):
    product=None 
    for i in products:
        if i['_id'] == pk:
            product = i
            break



    return Response(product)

    



