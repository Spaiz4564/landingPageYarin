<template>
  <section id="services" class="service_section" v-scroll-reveal="{ reset: false, duration: 2000, origin: 'bottom', distance: '20px' }">
<h1 class="title">הטיפולים הניתנים</h1>

<service-list :services="services"/>
  </section>
</template>

<script>
import ServiceList from './ServiceList.vue'
import { createScrollRevealDirective } from 'vue-scroll-reveal';

export default {
  name: 'ServiceSection',
  directives: {
    'scroll-reveal': createScrollRevealDirective(),
  },
 components: {ServiceList},
 data() {
  return {
   services: [
  { title: 'תיקון תותבות במקום', text: 'ישנו צורך לבדוק מדוע נשברה תותבת / יצאה שן ממקומה.לרוב ישנן סיבות שבעזרת בדיקה קלינית ניתן לעלות עליהן ולפתור אותן. התיקון מתבצע בתוך שעה + נתינת אחריות.', primaryColor: '#f2fbf2', secondaryColor: '#52cc89'},
  { title: 'תותבות חדשות', text: 'שימוש בשיניים ובחומרים גרמניים האיכותיים ביותר בשוק. בתותבת מוכנסת רשת יצוקה / קוורץ על מנת לחזק את התותבת ולמנוע שברים עתידיים.', primaryColor: '#fbf2f6', secondaryColor: '#dd5cb9' },
  { title: 'כל סוגי טיפולי השיניים', text: 'במרפאתנו אנו מבצעים את כל סוגי טיפולי השיניים – אסתטיקה דנטלית, שיקום על גבי שיניים, שיקום על גבי שתלים, טיפולים משמרים, הלבנות שיניים.', primaryColor: '#f8f2fb', secondaryColor: '#8565df' },
  { title: 'ריפוד תותבות', text: 'עם השנים מאבדים את העצם שעליה נמצאת התותבת. במצב כזה, יש צורך לחדש את החלק הפנימי של התותבת על מנת לשפר את האחיזה, מחליפים את החלק הפנימי של התותבת לחדש.', primaryColor: '#fbf9f2', secondaryColor: '#cec720' },
  { title: 'אפשרות להגעה עד בית הלקוח', text: 'מטופלים בעלי מוגבלויות – אנו נגיע אליכם ונדאג לתת לכם את כל הטיפולים הנדרשים כדי שתוכלו לאכול ולחייך מחדש.', primaryColor: '#f2f3fb', secondaryColor: '#6586df' },
  { title: 'ניקוי תותבות', text: 'גם בתותבת כמו בשיניים מצטברת אבנית. ניתן להימנע מכך על ידי תחזוקה נאותה של התותבות. במידה ויש צורך בהסרה של האבנית – אנו נדאג לכך בעזרת אמצעים מכניים ייעודיים. ', primaryColor: '#fbf2f2', secondaryColor: '#de6363' }
]
}
  }
}
</script>

<style>
</style>



