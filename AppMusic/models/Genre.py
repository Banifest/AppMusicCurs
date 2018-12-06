from django.db import models


class Genre(models.Model):
    guid = models.UUIDField(primary_key=True)
    name = models.TextField()
    description = models.TextField()

    artist = models.ManyToManyField(
        'AppMusic.Artist',
        related_name='artists_ref',
    )

    class Meta:
        ordering = ('name',)
