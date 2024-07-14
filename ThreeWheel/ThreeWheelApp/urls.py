from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name= 'home'),
    path('Home', views.home, name= 'home'),
    path('Services', views.Services, name= 'Services'),
    path('About', views.About, name= 'About'),
    path('Inquiry', views.Inquiry, name= 'Inquiry'),
    path('Contact', views.Contact, name= 'Contact'),
]
