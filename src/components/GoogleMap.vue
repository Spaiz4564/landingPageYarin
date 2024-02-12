<template>
  <GMapMap class="google_map" :center="center" :zoom="12" map-type-id="terrain" @click="openGoogleMaps">
    <GMapMarker :options="{ position: { lat: 31.925629, lng: 34.784475 }}" :clickable="true" />
  </GMapMap>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      center: { lat: 31.925629, lng: 34.784475 },
    };
  },
  methods: {
  openGoogleMaps(event) {
    const clickedLat = event.latLng.lat();
    const clickedLng = event.latLng.lng();

      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log(isMobile)

    if (isMobile) {
      window.open(`geo:${clickedLat},${clickedLng}?q=${clickedLat},${clickedLng}(Your Business Name)`, '_blank');
    } else {
      return
    }
  },
  },
};
</script>
