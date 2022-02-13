from typing import Type
from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):

    def create_user(self, username, email, password, **kwargs):
        if not password:
            raise TypeError('User must have a password.')
        if not email:
            raise TypeError("User must have an email.")
        if not username:
            raise TypeError("User must have a username")

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, password):
        if not password:
            raise TypeError('Admins must have a password.')
        if not email:
            raise TypeError('Admins must have an email.')
        if not username:
            raise TypeError('Admins must have an username.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class ExtendUser(AbstractBaseUser):

    email = models.EmailField(
        blank=False, max_length=255, verbose_name="email", unique=True)
    username = models.CharField(db_index=True, max_length=255, unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return f"{self.username}"


class WatchList(models.Model):
    user=models.ForeignKey(ExtendUser, on_delete=models.CASCADE, null=True)
    uuid=models.UUIDField(unique=True)

    def __str__(self):
        return self.user
