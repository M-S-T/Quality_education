from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import SubjectSerializer, ResourceSerializer
from .models import Subject, Resource

# Create your views here.
@api_view(['GET'])
def appOverview(request):

    api_urls = {
        "overview": "/app/",
        "Adding subjects" : "/app/addSubjects",
        "Getting subjects" : "/app/getSubjects",
    }

    return Response(api_urls)

@api_view(['GET', 'POST'])
def addSubjects(request):

    if request.method == 'POST':


        subjects = request.data.get('subjects')
        for subject in subjects:
            serializer = SubjectSerializer(data=subject)
            if serializer.is_valid():
                serializer.save()
        return Response("Subject has been added successfully")
    else:
        # open a static file in django
        with open("./app/static/subjects.csv") as f:
            subjects = f.readlines()
            subjects = [x.strip() for x in subjects]
            subjects = [x.split(',') for x in subjects]
            subjects = [{'name': x[1], 'code': x[0]} for x in subjects]
            serializer = SubjectSerializer(data=subjects, many=True)
            if serializer.is_valid():
                serializer.save()
        return Response("Subjects has been added successfully using files")

@api_view(['GET'])
def getSubjects(request):

    subjects = Subject.objects.all()

    return Response({'subjects': SubjectSerializer(subjects, many=True).data})

@api_view(['GET'])
def getResources(request, code):

    subject = Subject.objects.filter(code=code)[0]
    resources = Resource.objects.filter(subject=subject)
    serializer = ResourceSerializer(resources, many=True)
    print(serializer.data)

    return Response(serializer.data)