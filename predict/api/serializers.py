from rest_framework import serializers


class PredictionSerializer(serializers.Serializer):
    symbol = serializers.CharField()
    days = serializers.IntegerField(blank=True)
