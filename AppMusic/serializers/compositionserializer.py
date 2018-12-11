from rest_framework import serializers

from AppMusic.models import Composition, Genre, Artist


class CompositionSerializer(serializers.HyperlinkedModelSerializer):
    # user = serializers.HyperlinkedRelatedField(
    #         view_name='user-detail',
    #         read_only=True,
    #         lookup_field='username'
    # )
    #
    # group = serializers.SlugRelatedField(
    #     slug_field='id',
    #     read_only=False,
    #     queryset=Group.objects.filter().all()
    # )

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
