<template>
  <GMapMap class="google_map" :center="center" :zoom="12" map-type-id="terrain">
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
};
</script>
