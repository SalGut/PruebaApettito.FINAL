from django.db import models

# Create your models here.

class Menu(models.Model):
	plate = models.ImageField(upload_to='img',default = 'apettito/menu/static')
	title = models.CharField(max_length=30)
	price= models.DecimalField(max_digits=10, decimal_places=0)
	ingredients = models.CharField(max_length=150)
	
	def __str__(self):
		return self.title