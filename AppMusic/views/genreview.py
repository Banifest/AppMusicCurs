import json

from django.http import HttpRequest, HttpResponse
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from AppMusic.models import Genre, Composition
from AppMusic.serializers import GenreSerializer, CompositionSerializer


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    lookup_field = 'name'

    permission_classes = (
        permissions.IsAuthenticated,
    )

    @action(methods=['GET'], detail=False, url_path='composition_name')
    def composition_name(self, request: HttpRequest):
        if 'search_by_genre' not in request.query_params:
            compositions = Composition.objects.all()
        else:
            compositions = Composition.objects.filter(genre__name=request.query_params['search_by_genre'])
        if len(compositions) == 0:
            HttpResponse(
                json.dumps({'detail': "Not found composition"}),
                status=400,
                content_type='application/json'
            )
        serializer = CompositionSerializer(compositions, many=True, context={'request': request})
        return Response(serializer.data)
