from django.db import models

# Create your models here.

# Creating a model to contain the college info
class Colleges(models.Model):

    id = models.AutoField(primary_key=True)
    university = models.CharField(max_length=100)
    college = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    distric = models.CharField(max_length=100)

    def __repr__(self) -> str:
        return self.college
