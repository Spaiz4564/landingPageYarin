<template>
<ul class="services">
 <li class="service" v-for="(service,i) in services" :key="i" :style="{backgroundColor: service.primaryColor}">
  <img class="check" src="../assets/img/check.png" alt="">
  <h1 class="service_title">{{ service.title }}</h1>
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

