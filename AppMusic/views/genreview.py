from rest_framework import viewsets, permissions

from rest_framework import viewsets

from AppMusic.models import Genre
from AppMusic.serializers import GenreSerializer


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    lookup_field = 'name'

    permission_classes = (
        permissions.IsAuthenticated,
    )

    # def retrieve(self, request, *args, **kwargs):
    #     pk = kwargs['pk']
    #     users_pk = kwargs['users_username']
    #     user = User.objects.get(username=users_pk)
    #     queryset = Group.objects.filter(pk=pk, user=user)
    #     instance = get_object_or_404(queryset, pk=pk)
    #     serializer = self.get_serializer(instance)
    #     return Response(serializer.data)
    #
    # def list(self, request, *args, **kwargs):
    #     users_pk = kwargs['users_username']
    #     user = User.objects.get(username=users_pk)
    #     queryset = Group.objects.filter(user=user)
    #     page = self.paginate_queryset(queryset)
    #     if page is not None:
    #         serializer = self.get_serializer(page, many=True)
    #         return self.get_paginated_response(serializer.data)
    #     else:
    #         serializer = self.get_serializer(queryset, many=True)
    #         return Response(serializer.data)
    #
    # def perform_create(self, serializer):
    #     serializer.save(
    #             user=self.request.user
    #     )
