from user.models import ExtendUser

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtendUser
        fields = ['id', 'username', 'email']
