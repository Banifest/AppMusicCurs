from django.db import models


class Genre(models.Model):
    guid = models.UUIDField(primary_key=True)
    name = models.TextField()
    description = models.TextField()

    artist = models.ManyToManyField(
        'Artist',
        related_name='artists_ref',
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ('name',)
