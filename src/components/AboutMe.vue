<template>
  <section id="about" class="about_me_section" v-scroll-reveal="{ reset: false, duration: 2000, origin: 'bottom', distance: '20px' }">
<div class="about_me_container">
  <div class="image">
     <div class="yarin">
    <div class="square"></div>
     </div>
 </div>
 <div class="info">
  <h1 class="title">
ד"ר ירין שילון
  </h1>
  <div class="subtitle">
<p>בוגר הפקולטה לרפואת שיניים הדסה עין כרם<mark class="marked">בהצטיינות</mark></p>
  </div>
  <p class="text">
ד"ר שילון מדריך סטודנטים בשנים הקליניות המתקדמות בפקולטה לרפואת שיניים, הדסה עין כרם ובעל תואר B.A במנהל עסקים בהצטיינות יתרה. <br>
  </p>
  <p class="text">בעבר, ד"ר שילון עבד כטכנאי שיניים שנים רבות. הידע והיניסון שרכש במהלך עבודתו כטכנאי, מאפשרים לו להתמודד עם מקרים מורכבים.</p>
  <p class="text">המרפאה ממוקמת בסמיכות למעבדת שיניים, יתרון זה מאפשר תכנון מקרים יחד עם טכנאי שיניים וביצוע תיקונים ושינויים בזמן אמת. כל אלו מאפשרים להגיע לרפואת שיניים בסטנדרט הגבוה ביותר.</p>
 </div>

</div>
  </section>
</template>

<script>
import { createScrollRevealDirective } from 'vue-scroll-reveal';

export default {
  name: 'AboutMe',
  directives: {
    'scroll-reveal': createScrollRevealDirective(),
  },
}
</script>

<style>
</style>


<!-- תחום התותבות הינו אחד התחומים המורכבים בתחום רפואת השיניים.
בזכות הידע שרכש במהלך עבודתו כטכנאי, ד"ר ירין שילון יודע להתמודד
עם מקרים מורכבים של משהו שיניים.
כאשר משלבים מעבדת שיניים צמודה עם החומרים המתקדמים והטובים ביותר
ניתן להגיע לתוצאות מדהימות. -->