<template>
  <section id="gallery" class="gallery_section" v-scroll-reveal="{ reset: false, duration: 2000, origin: 'bottom', distance: '20px' }">
   <div class="gallery_container">
    <div class="info">
     <h1 class="title">מקרים לדוגמא</h1>
     <!-- <h3 class="subtitle">תוצאות מדהימות שישאירו לכם חיוך וביטחון</h3> -->
     <p class="text">
  אני מאמין במראה טבעי, לכן אפשר לראות במקרים המוצגים צביעות מיוחדות המעתיקות את הצבע הטבעי בשאר השיניים של המטופל.
      </p>
  <p class="text">
     השיניים אינן ישרות כמו "גדר", דבר הגורם למראה מלאכותי, אלא נמצאות בהטיות קלות המעניקות מראה ריאליסטי.
  </p>
  <p class="text">
  שורשי השיניים אף הם מובלטים כך שלא ניתן כי מדובר בתותבות, כמובן כל מקרה לגופו ובהתייעצות מלאה עם המטופל.
  </p>
    </div>
    <div class="gallery">
   <vueper-slides fade :touchable="true" :autoplay="true" :interval="4500">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"/>
  </vueper-slides>
    </div>
   </div>

  </section>
</template>

<script>
import { createScrollRevealDirective } from 'vue-scroll-reveal';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
 name: 'GallerySection',
 directives: {
    'scroll-reveal': createScrollRevealDirective(),
 },
 components: {
   VueperSlide, VueperSlides
  },
 data() {
  return {
    slides: [
    { image: require('../assets/img/gallery/1.jpg') },
    { image: require('../assets/img/gallery/2.jpg') },
    { image: require('../assets/img/gallery/3.jpg') },
    { image: require('../assets/img/gallery/4.jpg') },
    { image: require('../assets/img/gallery/5.svg') },
    { image: require('../assets/img/gallery/6.svg') },
    { image: require('../assets/img/gallery/7.png') },


   ]
  }
}
}
</script>

<style>
  /* Add your custom styles here */
</style>
