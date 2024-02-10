<template>
<ul class="services">
 <li class="service" v-for="(service,i) in services" :key="i" :style="{backgroundColor: service.primaryColor}">
<svg class="check" :style="{fill: service.secondaryColor}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
 <h1 class="service_title" :style="{color: service.secondaryColor}">{{ service.title }}</h1>
 <p class="service_text">{{ service.text }}</p>
 </li>
</ul>
</template>

<script>
export default {
  name: 'ServiceList',
  props: {
    services: {
      type: Array,
      required: false,
      default: () => {[]}
    }
  }
}
</script>

<style>
</style>

