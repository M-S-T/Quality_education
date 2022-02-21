from django.db import models

# Create your models here.

# Creating a model to contain the college info
class Colleges(models.Model):

    name_id = models.AutoField(primary_key=True)
    college_university = models.CharField(max_length=100)
    college_college = models.CharField(max_length=100)
    college_state = models.CharField(max_length=30)
    college_distric = models.CharField(max_length=30)
    college_type = models.CharField(max_length=100)
    # college_courses = models.ManyToManyField('Courses', through='CollegeCourses')
    def __repr__(self) -> str:
        return self.college


# creating login model
class Login(models.Model):

    name_id = models.AutoField(primary_key=True)
    login_username = models.CharField(max_length=100)
    login_password = models.CharField(max_length=100)
    login_email = models.CharField(max_length=100)
    login_phone = models.CharField(max_length=100)
    login_college = models.ForeignKey(Colleges, on_delete=models.CASCADE)

    def __repr__(self) -> str:
        return self.username


# model to for different subjects
class Subject(models.Model):

    name_id = models.AutoField(primary_key=True)
    subject_name = models.CharField(max_length=100)
    subject_code = models.CharField(max_length=100)
    subject_extras = models.CharField(max_length=100)
    
    def __repr__(self) -> str:
        return self.name


# model for different types of resources
class Resource(models.Model):

    name_id = models.AutoField(primary_key=True)
    resources_name = models.CharField(max_length=100)
    type = models.CharField(choices=(
        ('B', 'BOOK'),
        ('V', 'Vname_idEO'),
        ('P', 'PDF')
    ),max_length=100)
    resources_subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    resources_file = models.FileField(upload_to='files/')
    resources_tags = models.CharField(max_length=200, default='material')

    def __repr__(self) -> str:
        return self.name

class Stream(models.Model):
    
    name_id = models.AutoField(primary_key=True)
    name_stream = models.CharField(max_length=100)
    subject_stream = models.CharField(max_length=1000)
    extra_semester_stream = models.CharField(max_length=20)
    extra_branch_stream = models.CharField(max_length=20)
    
    def __repr__(self) -> str:
        return self.stream