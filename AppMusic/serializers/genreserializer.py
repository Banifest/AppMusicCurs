from rest_framework import serializers

from AppMusic.models import Genre


class GenreSerializer(serializers.HyperlinkedModelSerializer):
    # artist = serializers.HyperlinkedRelatedField(
    #     view_name='artist-detail',
    #     read_only=False,
    #     lookup_field='guid',
    #     queryset=Artist.objects.filter().all()
    # )
    # artist = serializers.HyperlinkedRelatedField(
    #     view_name='artist-list',
    #     read_only=False,
    #     lookup_field='guid',
    #     queryset=Artist.objects.filter().all()
    # )
    # group = serializers.SlugRelatedField(
    #     slug_field='id',
    #     read_only=False,
    #     queryset=Group.objects.filter().all()
    # )

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
