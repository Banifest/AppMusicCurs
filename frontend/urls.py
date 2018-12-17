# coding=utf-8

from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('composition/', views.composition),
    path('registration/', views.registration),
    path('upload/', views.upload),
    path('logout/', views.LogOutView.as_view(), name='LogOutView'),
]
