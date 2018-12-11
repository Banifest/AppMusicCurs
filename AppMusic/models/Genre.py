from django.db import models


class Genre(models.Model):
    name = models.TextField(primary_key=True)
    description = models.TextField()

    class Meta:
        ordering = ('name',)
