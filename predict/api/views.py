from rest_framework import views
from rest_framework.response import Response
from rest_framework import generics
#from keras.models import model_from_json

from predict.api.serializers import PredictionSerializer


class PredictView(views.APIView):

    def post(self, request, *args, **kwargs):

        try:
            serializer = PredictionSerializer(data=request.data)
            if serializer.is_valid():

                days = serializer.data['days']
                symbol = serializer.data['symbol']

                if not days:
                    days = 30

                price = 1123

                return Response({
                    'error': '0',
                    'message': 'Successfull',
                    'days': days,
                    'symbol': symbol,
                    'price': price
                })

            return Response({
                'error': '1',
                'message': 'Invalid Parameters'
            })

        except Exception as e:
            return Response({
                'error': '2',
                "message": str(e)
            })


class CurrencyView(generics.RetrieveAPIView):

    def get(self, request, pk, *args, **kwargs):

        try:
            days = 30
            symbol = pk

            price = 1123

            return Response({
                'error': '0',
                'message': 'Successfull',
                'days': days,
                'symbol': symbol,
                'price': price
            })

        except Exception as e:
            return Response({
                'error': '2',
                "message": str(e)
            })
