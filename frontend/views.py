# coding=utf-8
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render, redirect
from django.views.generic import TemplateView


def index(request):
    return render(request, 'frontend/index.html')


def registration(request):
    return render(request, 'frontend/registration.html')


def composition(request):
    return render(request, 'frontend/composition.html')


def upload(request):
    return render(request, 'frontend/upload.html')


class LogOutView(TemplateView):
    def re_render_to_response(self, context, request: HttpRequest):
        if 'status_code' in request.GET:
            context['error'] = request.GET['status_code']
        return self.render_to_response(context=context)

    def get(self, request, *args, **kwargs):
        response = redirect('http://127.0.0.1:8000', permanent=True)
        response.delete_cookie('login')
        response.delete_cookie('sessionid')
        response.delete_cookie('csrftoken')
        response["Cache-Control"] = "no-cache, no-store, must-revalidate"
        return response

    def post(self, request: HttpRequest) -> HttpResponse:
        response = redirect('http://127.0.0.1:8000', permanent=True)
        response.delete_cookie('login')
        response.delete_cookie('sessionid')
        response.delete_cookie('csrftoken')
        response["Cache-Control"] = "no-cache, no-store, must-revalidate"
        return response
