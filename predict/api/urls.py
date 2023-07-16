from rest_framework.routers import DefaultRouter
from django.urls import path

from predict.api.views import PredictView, CurrencyView


urlpatterns = [
    path('', PredictView.as_view(), name='predict'),
    path('<pk>/', CurrencyView.as_view(), name='add'),
]

app_name = 'predict'
