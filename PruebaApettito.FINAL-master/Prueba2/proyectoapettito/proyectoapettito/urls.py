from django.contrib import admin
from django.urls import path
from django.urls import include
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic.base import TemplateView

urlpatterns=[
    path('admin/',admin.site.urls),
    path('index/',include('AppApettito.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    path('', TemplateView.as_view(template_name='prueba.html'), name='prueba'),
]