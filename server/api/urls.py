from django.urls import path
from . import views


urlpatterns = [
    path('notes/', views.NoteListView.as_view(), name='note-list'),
    path('notes/create/', views.NoteCreateView.as_view(), name='note-create'),
    path('notes/delete/<int:pk>/', views.NoteDelete.as_view(), name='note-delete'),
]