<template>
<div class="homepage_container">
  <hero/>
  <services/>
  <about-me/>
  <dentures/>
  <gallery/>
  <contact/>
  <whats-app/>
  <accessibility/>
</div>
</template>

<script>
import Hero from '../components/Hero'
import Services from '../components/Services'
import AboutMe from '../components/AboutMe';
import Dentures from '../components/Dentures'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import WhatsApp from '../components/Whatsapp'
import Accessibility from '../components/Accessibility.vue'

export default {
  name: 'HomePage',
  components: {Hero, Services, AboutMe, Dentures, Contact, Gallery, WhatsApp, Accessibility }
}
</script>
<style>
</style>
