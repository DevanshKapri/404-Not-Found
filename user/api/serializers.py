from user.models import ExtendUser,WatchList

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtendUser
        fields = ['id', 'username', 'email']


class UUIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchList
        fields = ['user', 'uuid']