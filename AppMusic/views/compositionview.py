import uuid

from rest_framework import viewsets, permissions

from AppMusic.models import Composition
from AppMusic.serializers import CompositionSerializer


class CompositionViewSet(viewsets.ModelViewSet):
    queryset = Composition.objects.all()
    serializer_class = CompositionSerializer
    lookup_field = 'guid'

    permission_classes = (
        permissions.IsAuthenticated,
    )

    def perform_create(self, serializer):
        serializer.save(guid=str(uuid.uuid4()))

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

