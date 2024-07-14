from django.shortcuts import render, redirect

def home(request):
    return render(request, 'index.html')

def Services(request):
    return render(request, 'services.html')

def About(request):
    return render(request, 'about.html')

def Inquiry(request):
    return render(request, 'inquiry.html')

def Contact(request):
    return render(request, 'contact.html')