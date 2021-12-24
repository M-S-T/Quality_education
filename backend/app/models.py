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

# creating login model
class Login(models.Model):

    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    college = models.ForeignKey(Colleges, on_delete=models.CASCADE)

    def __repr__(self) -> str:
        return self.username

# model to for different subjects
class Subject(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=100)

    def __repr__(self) -> str:
        return self.name

# model for different types of resources
class Resource(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    type = models.CharField(choices=(
        ('B', 'BOOK'),
        ('V', 'VIDEO'),
        ('P', 'PDF')
    ),max_length=100)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    file = models.FileField(upload_to='files/')

    def __repr__(self) -> str:
        return self.name
