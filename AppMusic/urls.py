from django.conf.urls import url
from django.urls import include
from rest_framework.routers import DefaultRouter

from AppMusic import views

router = DefaultRouter()
router.register(r'user', views.UserViewSet)
router.register(r'genre', views.GenreViewSet)
router.register(r'composition', views.CompositionViewSet)
router.register(r'artist', views.ArtistViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
]
