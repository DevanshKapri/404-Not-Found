from typing import Type
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class UserManager(BaseUserManager):

    def create_user(self, email, password, **kwargs):
        if not password:
            raise ValueError('User must have a password.')
        if not email:
<<<<<<< HEAD
            raise TypeError("User must have an email.")
=======
            raise ValueError("User must have an email.")
        if not username:
            raise ValueError("User must have a username")
>>>>>>> 2818287988cc7c5ff0b302e5c825d323c90e30d9

        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        if not password:
            raise ValueError('Admins must have a password.')
        if not email:
<<<<<<< HEAD
            raise TypeError('Admins must have an email.')

        user = self.create_user(email, password)
=======
            raise ValueError('Admins must have an email.')
        if not username:
            raise ValueError('Admins must have an username.')

        user = self.create_user(username, email, password)
        user.is_admin = True
>>>>>>> 2818287988cc7c5ff0b302e5c825d323c90e30d9
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class User(AbstractUser):

    email = models.EmailField(
        blank=False, max_length=255, verbose_name="email", unique=True)
<<<<<<< HEAD
=======
    username = models.CharField(db_index=True, max_length=255, unique=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
>>>>>>> 2818287988cc7c5ff0b302e5c825d323c90e30d9

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
<<<<<<< HEAD
        return f"{self.email}"
=======
        return f"{self.username}"

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True;


class WatchList(models.Model):
    user=models.ForeignKey(ExtendUser, on_delete=models.CASCADE, null=True)
    uuid=models.UUIDField(unique=True)

    def __str__(self):
        return self.user


@receiver(post_save, sender = settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created = False, **kwargs):
    if created:
        Token.objects.create(user=instance)
>>>>>>> 2818287988cc7c5ff0b302e5c825d323c90e30d9
