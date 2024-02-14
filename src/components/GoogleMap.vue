<template>
  <GMapMap class="google_map" :center="center" :zoom="12" map-type-id="terrain" @click="openGoogleMaps">
    <GMapMarker :options="{ position: { lat: center.lat, lng: center.lng }}"/>
  </GMapMap>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      center: { lat: 31.920277639035497, lng: 34.80681633069135 },
    };
  },
  methods: {
  openGoogleMaps() {
    const clickedLat = 920277639035497;
    const clickedLng = 34.80681633069135;

      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(`geo:${clickedLat},${clickedLng}?q=${clickedLat},${clickedLng}(ד"ר ירין שילון)`, '_blank');
    } else {
      return
    }
  },
  },
};
</script>
