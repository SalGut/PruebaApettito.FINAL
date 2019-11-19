from django.shortcuts import render
from .models import Menu

# Create your views here.

def index(request):
    return render(request, 'index.html', {})

def menu(request):
    return render(request, 'menu.html', {})

def formulario(request):
    return render(request, 'formulario.html', {})