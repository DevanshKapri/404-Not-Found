from typing import Type
from django.db import models

from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):

    def create_user(self, email, password, **kwargs):
        if not password:
            raise TypeError('User must have a password.')
        if not email:
            raise TypeError("User must have an email.")

        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        if not password:
            raise TypeError('Admins must have a password.')
        if not email:
            raise TypeError('Admins must have an email.')

        user = self.create_user(email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class User(AbstractUser):

    email = models.EmailField(
        blank=False, max_length=255, verbose_name="email", unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"
