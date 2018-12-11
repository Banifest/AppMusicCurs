from django.db import models


class Artist(models.Model):
    guid = models.UUIDField(primary_key=True, auto_created=True)
    name = models.TextField()
    create_date = models.DateField()
    albums = models.TextField()
    description = models.TextField()
    primary_genre = models.ForeignKey(
        'AppMusic.Genre',
        related_name="primary_genre",
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ('name',)
