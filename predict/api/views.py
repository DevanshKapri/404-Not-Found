from rest_framework import views
from rest_framework.response import Response
from rest_framework import generics
from predict.prediction import predict_results
import json
from json import JSONEncoder
import numpy
#from keras.models import model_from_json

from predict.api.serializers import PredictionSerializer


class NumpyArrayEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, numpy.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)


class PredictView(views.APIView):

    def post(self, request, *args, **kwargs):

        try:
            serializer = PredictionSerializer(data=request.data)
            if serializer.is_valid():

                days = serializer.data['days']
                symbol = serializer.data['symbol']

                if not days:
                    days = 30

                res = predict_results(symbol, days)
                numpyData = {"array": res}
                encodedNumpyData = json.dumps(
                    numpyData, cls=NumpyArrayEncoder)
                return Response(encodedNumpyData)

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

            res = predict_results(symbol, days)
            numpyData = {"array": res}
            encodedNumpyData = json.dumps(
                numpyData, cls=NumpyArrayEncoder)
            return Response(encodedNumpyData)

        except Exception as e:
            return Response({
                'error': '2',
                "message": str(e)
            })
