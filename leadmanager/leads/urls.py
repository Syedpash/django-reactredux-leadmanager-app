from rest_framework import routers, urlpatterns

from .views import LeadViewset

router = routers.DefaultRouter()
router.register('api/leads', LeadViewset, 'leads')

urlpatterns = router.urls