import json
import uuid

from django.http import HttpRequest, Http404
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response

from AppMusic.models import Artist, Composition, composition
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

    @action(methods=['GET'], detail=False, url_path='composition_name')
    def composition_name(self, request: HttpRequest):
        if 'search_by_artist' not in request.query_params:
            compositions = Composition.objects.all()
        else:
            compositions = Composition.objects.filter(artist__name=request.query_params['search_by_artist'])
        if len(compositions) == 0:
            raise Http404()
        serializer = CompositionSerializer(compositions, many=True, context={'request': request})
        return Response(serializer.data)
