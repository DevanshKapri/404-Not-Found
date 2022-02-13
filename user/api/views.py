from user.models import User, WatchList
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView,  RetrieveUpdateDestroyAPIView
from user.api.serializers import UserSerializer, UUIDSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


@api_view(['GET', ])
@permission_classes((IsAuthenticated,))
def get_uuid(request):
    user = request.user
    try:
        uuid = WatchList.objects.filter(user=user)
    except Watchlist.DoesnotExist:
        return Response(status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = UUIDSerializer(uuid)
        return Response(serializer.data)


@api_view(['POST', ])
@permission_classes((IsAuthenticated,))
def add_uuid(request):
    user = request.user
    if request.method == "POST":
        serializer = UUIDSerializer(user, data=request.data)
        data = {}
        if serializer.is_valid():
            serializer.save()
            data["sucess"] = "Addition sucessful"
            return Response(data=data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST', ])
@permission_classes((IsAuthenticated,))
def remove_uuid(request):
    user = request.user
    try:
        uuid = WatchList.objects.get(user, data=request.data)
    except Watchlist.DoesnotExist:
        return Response(status.HTTP_404_NOT_FOUND)

    if request.method == "DELETE":
        operation = uuid.delete()
        data = {}
        if operation:
            data["success"] = "delete sucessful"
        else:
            data["failure"] = "delete failure"
        return Response(data=data)
