from user.models import User, WatchList

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email']


class UUIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchList
        fields = ['user', 'uuid']
