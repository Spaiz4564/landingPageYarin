<template>
  <section id="contact" class="contact_section" v-scroll-reveal="{ reset: false, duration: 1850, origin: 'bottom', distance: '20px' }">
    <div class="contact_container">
      <div class="image"></div>
      <div class="text">
        <h1>לייעוץ מקצועי מלאו פרטים בטופס</h1>
        <p>אני מאמין ביחס רפואי אישי, המעניק תחושה של ביטחון ולהקנות לכם לאכול ולחייך בביטחון, הגיעו לבדיקת ייעוץ ללא עלות.</p>
        <form class="form"  action="https://formspree.io/f/xdoqenbl" method="POST">
          <div class="inputs">
             <div class="form_input">
            <label class="label" for="full-name">שם מלא</label>
            <input class="input" id="full-name" type="text" name="full-name" required="">
          </div>
          <div class="form_input">
            <label class="label" for="number">מס' טלפון</label>
            <input class="input" id="number" type="text" name="number" required="">
          </div>
          </div>
          <button class="submit_form">חזרו אליי</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { createScrollRevealDirective } from 'vue-scroll-reveal';
export default {
  name: 'ContactSection',
  directives: {
    'scroll-reveal': createScrollRevealDirective(),
  },
}
</script>

<style>

</style>
