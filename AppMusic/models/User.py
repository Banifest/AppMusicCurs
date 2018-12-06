from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    compositions = models.ManyToManyField(
        'Composition',
        related_name='composition_ref',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.username
