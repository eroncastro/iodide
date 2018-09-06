from django.conf.urls import url
from .views import notebook_view, revisions_view


urlpatterns = [
    url(r'^(?P<pk>[0-9]+)/revisions', revisions_view,
        name='revisions-view'),
    url(r'^(?P<pk>[0-9]+)/', notebook_view,
        name='notebook-view'),
]
