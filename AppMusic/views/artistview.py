import json
import uuid

from django.http import HttpRequest, HttpResponse
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from AppMusic.models import Artist, Composition
from AppMusic.serializers import ArtistSerializer, CompositionSerializer


class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    lookup_field = 'guid'

    permission_classes = (
        permissions.IsAuthenticated,
    )

    def perform_create(self, serializer):
        serializer.save(guid=str(uuid.uuid4()))

    @action(methods=['GET'], detail=True, url_path='composition')
    def composition(self, request: HttpRequest, guid: str):
        instance = Composition.objects.filter(artist=guid)
        serializer = CompositionSerializer(instance, many=True, context={'request': request})
        return Response(serializer.data)
