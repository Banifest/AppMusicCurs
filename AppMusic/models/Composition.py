from django.db import models


class Composition(models.Model):
    guid = models.UUIDField(primary_key=True)
    name = models.TextField()
    url = models.URLField()
    albums = models.TextField()
    description = models.TextField()
    users = models.ManyToManyField(
        'User',
        related_name='groups_ref',
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ('name',)
