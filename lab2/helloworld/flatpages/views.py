from django.shortcuts import render

# Create your views here.
# coding: utf-8
from django.http import HttpResponse

def home(request):
    return render(request, 'static_handler.html', {})
