from user.models import User, WatchList
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView,  RetrieveUpdateDestroyAPIView
from user.api.serializers import UserSerializer, UUIDSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


@api_view(['GET', ])
def get_uuid(request, slug):
    try:
        uuid = WatchList.objects.get(slug=slug)
    except Watchlist.DoesnotExist:
        return Response(status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = UUIDSerializer(uuid)
        return Response(serializer.data)


@api_view(['POST', ])
def add_uuid(request):
    uuid = User(email="ank")
    if request.method == "POST":
        serializer = UUIDSerializer(uuid, data=request.data)
        data = {}
        if serializer.is_valid():
            serializer.save()
            data["sucess"] = "Addition sucessful"
            return Response(data=data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE', ])
def remove_uuid(request, slug):
    try:
        uuid = WatchList.objects.get(slug=slug)
    except Watchlist.DoesnotExist:
        return Response(status.HTTP_404_NOT_FOUND)

    if request.method == "DELETE":
        operation = uuid.delete()
        data = {}
        if operation:
            data["success"] = "delete sucessful"
        else:
            data["failure"] = "delelte failure"
        return Response(data=data)
