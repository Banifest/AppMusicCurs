import json
import uuid

from django.http import HttpResponse, HttpRequest
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response

from AppMusic.models import Composition
from AppMusic.serializers import CompositionSerializer


class CompositionViewSet(viewsets.ModelViewSet):
    queryset = Composition.objects.all()
    serializer_class = CompositionSerializer
    lookup_field = 'guid'

    permission_classes = (
        permissions.IsAuthenticated,
    )

    @action(methods=['POST'], detail=False, url_path='upload_file')
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

    def perform_create(self, serializer):
        guid: str = str(uuid.uuid4())
        self.request.data['composition_url'].name = guid + ".mp3"
        serializer.save(
            guid=guid,
        )

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

