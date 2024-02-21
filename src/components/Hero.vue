<template>
  <section id="hero" class="hero_container">
    <div class="hero" v-scroll-reveal="{ reset: false, duration: 2000, origin: 'bottom', distance: '20px' }">
      <div class="intro_container">
        <h1 class="title">כל סוגי הפתרונות לשיקום שיניים תותבות</h1>
        <p class="text">
          ביצוע ותיקון תותבות בהנהלת ד"ר ירין שילון.  שיתוף פעולה עם מעבדת שיניים צמודה, יתרון המאפשר תהליך מהיר, יעיל ומדויק.
        </p>
        <a class="contact_button" :href="'tel:' + phoneNumber">
          <p>התקשרו עכשיו</p>
          <p>08-9331193</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { createScrollRevealDirective } from 'vue-scroll-reveal';
export default {
  name: 'HeroSection',
  directives: {
    'scroll-reveal': createScrollRevealDirective(),
  },
  data() {
    return {
      phoneNumber: '08-9331193'
    }
  }
}
</script>

<style>
/* Add your styles here if needed */
</style>

