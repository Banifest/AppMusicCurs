from django.db import models


class Artist(models.Model):
    guid = models.UUIDField(primary_key=True)
    name = models.TextField()
    create_date = models.DateField()
    albums = models.TextField()
    description = models.TextField()
    genres = models.ManyToManyField(
        'Genre',
        related_name='genres_ref',
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ('name',)
