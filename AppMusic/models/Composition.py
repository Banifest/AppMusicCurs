from django.contrib.auth.models import User
from django.db import models


class Composition(models.Model):
    guid = models.UUIDField(primary_key=True)
    name = models.TextField()
    url = models.URLField()
    albums = models.TextField()
    description = models.TextField()

    artist = models.ForeignKey(
        'Artist',
        related_name='artist_ref',
        on_delete=models.CASCADE
    )
    genre = models.ForeignKey(
        'Genre',
        related_name='genre_ref',
        on_delete=models.CASCADE
    )

    users = models.ManyToManyField(
        User,
        related_name='users_ref',
    )

    class Meta:
        ordering = ('name',)
