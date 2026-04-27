from django.db import models

# Create your models here.

class Customer_table(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField()
    customer_password = models.CharField(max_length=100)
    customer_phn = models.CharField(max_length=15)

from adminapp.models import cake_tbl

class cart_tbl(models.Model):
    customer = models.ForeignKey(Customer_table, on_delete=models.CASCADE)
    cake = models.ForeignKey(cake_tbl, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def total_price(self):
        return self.quantity * self.cake.cake_price