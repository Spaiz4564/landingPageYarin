<template>
  <section id="dentures" class="dentures_section" v-scroll-reveal="{ reset: false, duration: 2000, origin: 'bottom', distance: '20px' }">
    <h1 class="title">סוגי התותבות</h1>

    <div class="dentures_container">
      <denture-list :dentureObj="denture" />
      <div class="triangle"></div>
      <denture-list :dentureObj="dentureImplants" />
    </div>
  </section>
</template>

<script>
import DentureList from './DentureList';
import { createScrollRevealDirective } from 'vue-scroll-reveal';

export default {
  name: 'DenturesSection',
  directives: {
    'scroll-reveal': createScrollRevealDirective(),
  },
  components: {
    DentureList,
  },
  data() {
    return {
      denture: {
        type: 'normal',
        title: 'תותבות ללא שתלים:',
        details: 'שיניים תותבות הינן מתקן דנטלי הניתן לשליפה, הן מהוות תחליף פופולרי וזול לשיניים חסרות.',
        icon: require('../assets/img/denture.png'),
        list: [
          { title: 'תותבת חלקית', info: 'כאשר חסר מספר שיניים בלסת, תותבת חלקית יכולה לפתור את הבעיה, היא תמנע משיניים סמוכות לזוז ממסלולים ותיתן מענה אסתטי הולם.' },
          { title: 'תותבת שלמה', info: 'כאשר אין בכלל שיניים בלסת היא משלימה מערכת שינים מלאה ויכולה להוות פתרון זול וטוב.' },
          { title: 'תותבת מיידית', info: 'הינה תותבת אשר נועדה להיות בשימוש בתקופת הטיפול ועד לקבלת השיקום הסופי.' },
          { title: 'תותבת T-Crystal', info: 'הינה תותבת היפואלרגנית העשויה מחומרים תרמופלסטיים בילוגים, בעלת תכונות של גמישות, חוזק ושקיפות, תוצאות אסתטיות מעולות.' },
        ],
      },
      dentureImplants: {
        type: 'implant',
        title: 'תותבות על גבי שתלים:',
        details: 'תותבת על גבי שתלים הינה אופציה נוחה ונפוצה כיום בעלת תחושה נעימה וטבעית יותר בתוך חלל הפה.',
        icon: require('../assets/img/implant.png'),
        list: [
          { title: 'תותבת על גבי בר', info: 'זוהי תותבת המתחברת על גבי בר העשוי ממתכת לרוב מטיטניום, ניתן לשיקום על ידי Locators, Ball Attachments וקליפסים המיועדים לבר.' },
          { title: 'תותבת מוברגת לשתלים', info: 'זוהי תותבת המתברגת ישירות לשתלים.' },
          { title: 'תותבת על גבי מחברים', info: 'זוהי תותבת המתחברת לשתלים על ידי מחברים. למעשה מחבר זעיר מחובר לשתל ומנגד בית מתכתי מרופד בכיפת ניילון מותקן בתוך התותבת, שניהם יוצרים ביחד סגירת “תיק תק” המאפשרת לשלוף באופן עצמאי את התותבת לניקוי.' },
        ],
      },
    };
  },
};
</script>

<style>
  /* Add your custom styles here */
</style>
