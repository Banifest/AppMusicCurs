from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    favorites = models.ManyToManyField(
        'AppMusic.Composition',
        related_name='composition_ref',
        blank=True,
    )

    def __str__(self):
        return self.username
