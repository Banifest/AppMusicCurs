from rest_framework import serializers

from AppMusic.models import Composition, Genre, Artist


class CompositionSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='composition-detail',
        lookup_field='guid'
    )

    artist = serializers.SlugRelatedField(
        slug_field='guid',
        read_only=False,
        queryset=Artist.objects.filter().all()
    )

    genre = serializers.SlugRelatedField(
        slug_field='name',
        read_only=False,
        queryset=Genre.objects.filter().all()
    )

    class Meta:
        model = Composition
        fields = (
            'url',
            'name',
            'composition_url',
            'albums',
            'description',
            'artist',
            'genre'
        )
