from user.api.views import UserViewSet, get_uuid, add_uuid, remove_uuid
from rest_framework.routers import DefaultRouter
from django.urls import path


router = DefaultRouter()
router.register(r'', UserViewSet, basename='users')
urlpatterns = router.urls


app_name = 'user'

urlpatterns = [
    path('add/', add_uuid, name='add'),
    path('remove/', remove_uuid, name='remove'),
    path('get/', get_uuid, name='uuid'),

]
