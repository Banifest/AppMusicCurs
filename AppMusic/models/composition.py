from django.db import models


class Composition(models.Model):
    guid = models.UUIDField(primary_key=True, auto_created=True)
    name = models.TextField()
    composition_url = models.URLField()
    albums = models.TextField()
    description = models.TextField()

    artist = models.ForeignKey(
        'AppMusic.Artist',
        related_name='artist_ref',
        on_delete=models.CASCADE
    )
    genre = models.ForeignKey(
        'AppMusic.Genre',
        related_name='genre_ref',
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ('name',)
