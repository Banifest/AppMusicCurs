from django.conf.urls import url
from django.urls import include
from rest_framework.routers import DefaultRouter

from AppMusic import views

router = DefaultRouter()
router.register(r'user', views.UserViewSet)
router.register(r'genre', views.GenreViewSet)
router.register(r'composition', views.CompositionViewSet)
router.register(r'artist', views.ArtistViewSet)

# group_router = NestedSimpleRouter(router, r'users', lookup='users')
# group_router.register(r'groups', views.GroupViewSet, base_name='groups')
#
# ref_router = NestedSimpleRouter(router, r'users', lookup='users')
# ref_router.register(r'references', views.ReferenceViewSet, base_name='references')
#

urlpatterns = [
    url(r'^api/', include(router.urls)),
    # url(r'^api/', include(group_router.urls)),
    # url(r'^api/', include(ref_router.urls)),
]
