from rest_framework import serializers

from AppMusic.models import Artist


class ArtistSerializer(serializers.HyperlinkedModelSerializer):
    # user = serializers.HyperlinkedRelatedField(
    #         view_name='user-detail',
    #         read_only=True,
    #         lookup_field='username'
    # )

    class Meta:
        model = Artist
        fields = (
            'guid',
            'name',
            'create_date',
            'albums',
            'description'
        )
