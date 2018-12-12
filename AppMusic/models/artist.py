from django.db import models


class Artist(models.Model):
    guid = models.UUIDField(primary_key=True, auto_created=True)
    name = models.TextField()
    create_date = models.DateField()
    albums = models.TextField()
    description = models.TextField()

    # genres = models.ManyToManyField(
    #     'AppMusic.Genre',
    #     related_name='genres_ref',
    # )

    class Meta:
        ordering = ('name',)
