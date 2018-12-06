from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    users = models.ManyToManyField(
        'AppMusic.Composition',
        related_name='composition_ref',
    )

    def __str__(self):
        return self.username
