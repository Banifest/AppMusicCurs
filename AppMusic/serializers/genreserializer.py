from rest_framework import serializers

from AppMusic.models import Composition


class GenreSerializer(serializers.HyperlinkedModelSerializer):
    artist = serializers.SlugRelatedField(
        slug_field='name',
        read_only=False,
        queryset=Composition.objects.filter().all()
    )
    #
    # group = serializers.SlugRelatedField(
    #     slug_field='id',
    #     read_only=False,
    #     queryset=Group.objects.filter().all()
    # )

    class Meta:
        model = Composition
        fields = (
            'guid',
            'name',
            'description',
            'artist'
        )
