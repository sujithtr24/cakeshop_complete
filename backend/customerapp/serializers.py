from rest_framework import serializers
from .models import Customer_table, cart_tbl

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer_table
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = cart_tbl
        fields = '__all__'