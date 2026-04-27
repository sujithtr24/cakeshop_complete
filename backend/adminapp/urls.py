from django.urls import path
from . import views

urlpatterns = [
    path('cakes/', views.cakes),                
    path('cakes/<int:id>/', views.cake_detail), 
    path('customers/', views.customers),        
    path('customers/<int:id>/', views.delete_customer), 
]
