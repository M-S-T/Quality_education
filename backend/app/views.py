from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from backend.app.models import Subject

# Create your views here.
@api_view(['GET'])
def appOverview(request):

    api_urls = {
        "overview": "/app/",
        "Adding subjects" : "/app/addSubjects"
    }

    return Response(api_urls)

@api_view(['GET', 'POST'])
def addSubjects(request):

    if request.method == 'POST':

        return Response("Subject has been added successfully")

    else:
        
        # subject = SubjectSerializer(data=request.data)

        return Response("This is add subject page")