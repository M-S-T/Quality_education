from django.urls import path
from . import views

urlpatterns = [
    path('', views.appOverview, name='app-overview'),
    path('addSubjects/', views.addSubjects, name='add-subjects'),
    path('getSubjects/', views.getSubjects, name='get-subjects'),
]