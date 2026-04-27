from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register),
    path('login/', views.login),
    path('cart/add/', views.add_to_cart),
    path('cart/', views.view_cart),
    path('cart/increase/', views.increase_quantity),
    path('cart/decrease/', views.decrease_quantity),
    path('cart/remove/<int:id>/', views.remove_from_cart),

]