from django.db import models

# Create your models here.
class cake_tbl(models.Model):
    cake_name = models.CharField(max_length=100)
    cake_price = models.IntegerField()
    cake_category = models.CharField(max_length=50)
    cake_description = models.TextField()
    cake_image = models.FileField(upload_to='images/')