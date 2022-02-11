from user.models import ExtendUser
from rest_framework import viewsets

from user.api.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = ExtendUser.objects.all()
