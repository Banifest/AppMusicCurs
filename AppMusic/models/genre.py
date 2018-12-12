from django.db import models


class Genre(models.Model):
    name = models.TextField(primary_key=True)
    description = models.TextField()

    # artist = models.ManyToManyField(
    #     'AppMusic.Artist',
    #     related_name='artists_ref',
    # )

    class Meta:
        ordering = ('name',)
