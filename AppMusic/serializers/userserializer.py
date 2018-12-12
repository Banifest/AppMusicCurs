from rest_framework import serializers

from AppMusic.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='user-detail',
        lookup_field='username'
    )

    #
    # favorites = serializers.ManyRelatedField(
    #     slug_field='guid',
    #     read_only=True,
    #     # queryset=Composition.objects.all()
    # )

    class Meta:
        model = User
        fields = (
            'url',
            'username',
            'first_name',
            'last_name',
            'email',
            # 'favorites',
        )
