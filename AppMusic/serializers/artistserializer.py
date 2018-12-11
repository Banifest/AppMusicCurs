from rest_framework import serializers

from AppMusic.models import Artist


class ArtistSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='artist-detail',
        lookup_field='name'
    )

    class Meta:
        model = Artist
        fields = (
            'url',
            'name',
            'create_date',
            'albums',
            'description',
            'primary_genres',
        )
