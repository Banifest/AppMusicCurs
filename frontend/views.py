# coding=utf-8

from django.shortcuts import render


def index(request):
    return render(request, 'frontend/index.html')


def composition(request):
    return render(request, 'frontend/composition.html')
