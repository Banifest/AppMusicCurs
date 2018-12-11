from rest_framework import serializers

from AppMusic.models import Composition


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
