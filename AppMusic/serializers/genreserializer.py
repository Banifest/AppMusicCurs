from rest_framework import serializers

from AppMusic.models import Genre


class GenreSerializer(serializers.HyperlinkedModelSerializer):

    url = serializers.HyperlinkedIdentityField(
        view_name='genre-detail',
        lookup_field='name'
    )

    class Meta:
        model = Genre
        fields = (
            'url',
            'name',
            'description',
        )
