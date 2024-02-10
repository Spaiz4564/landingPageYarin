<template>
<div class="accessibility_container" v-click-outside="closeModal">
<img @click="openModal" class="widget" src="../assets/img/widget.jpg" alt="">
<div :class="['settings_modal', {'open': openSettings}]">
 <div class="modal_tip"></div>
 <span class="title">כלי נגישות</span>
 <ul class="settings">
<li class="setting" v-for="(setting,i) in settings" :key="setting" @click="applySettings(i)">
 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 448 448"><path :d="setting.svg"></path></svg>
 <p> {{ setting.text }}</p>
</li>
 </ul>
</div>
</div>
</template>

<script>


export default {
 name: 'AccessibilityWidget',
data() {
 return {
  openSettings: false,
  settings: {
   biggerText: { active: false, text: 'הגדל טקסט', svg: 'M256 200v16c0 4.25-3.75 8-8 8h-56v56c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-56h-56c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h56v-56c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8v56h56c4.25 0 8 3.75 8 8zM288 208c0-61.75-50.25-112-112-112s-112 50.25-112 112 50.25 112 112 112 112-50.25 112-112zM416 416c0 17.75-14.25 32-32 32-8.5 0-16.75-3.5-22.5-9.5l-85.75-85.5c-29.25 20.25-64.25 31-99.75 31-97.25 0-176-78.75-176-176s78.75-176 176-176 176 78.75 176 176c0 35.5-10.75 70.5-31 99.75l85.75 85.75c5.75 5.75 9.25 14 9.25 22.5z' },
   smallerText: { active: false, text: 'הקטן טקסט', svg: 'M256 200v16c0 4.25-3.75 8-8 8h-56v56c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-56h-56c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h56v-56c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8v56h56c4.25 0 8 3.75 8 8zM288 208c0-61.75-50.25-112-112-112s-112 50.25-112 112 50.25 112 112 112 112-50.25 112-112zM416 416c0 17.75-14.25 32-32 32-8.5 0-16.75-3.5-22.5-9.5l-85.75-85.5c-29.25 20.25-64.25 31-99.75 31-97.25 0-176-78.75-176-176s78.75-176 176-176 176 78.75 176 176c0 35.5-10.75 70.5-31 99.75l85.75 85.75c5.75 5.75 9.25 14 9.25 22.5z' },
   grayFilter: { active: false, text: 'גווני אפור', svg: 'M256 200v16c0 4.25-3.75 8-8 8h-56v56c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-56h-56c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h56v-56c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8v56h56c4.25 0 8 3.75 8 8zM288 208c0-61.75-50.25-112-112-112s-112 50.25-112 112 50.25 112 112 112 112-50.25 112-112zM416 416c0 17.75-14.25 32-32 32-8.5 0-16.75-3.5-22.5-9.5l-85.75-85.5c-29.25 20.25-64.25 31-99.75 31-97.25 0-176-78.75-176-176s78.75-176 176-176 176 78.75 176 176c0 35.5-10.75 70.5-31 99.75l85.75 85.75c5.75 5.75 9.25 14 9.25 22.5z'},
   reverseContrast: { active: false, text: 'ניגודיות הפוכה', svg: 'M256 200v16c0 4.25-3.75 8-8 8h-56v56c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-56h-56c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h56v-56c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8v56h56c4.25 0 8 3.75 8 8zM288 208c0-61.75-50.25-112-112-112s-112 50.25-112 112 50.25 112 112 112 112-50.25 112-112zM416 416c0 17.75-14.25 32-32 32-8.5 0-16.75-3.5-22.5-9.5l-85.75-85.5c-29.25 20.25-64.25 31-99.75 31-97.25 0-176-78.75-176-176s78.75-176 176-176 176 78.75 176 176c0 35.5-10.75 70.5-31 99.75l85.75 85.75c5.75 5.75 9.25 14 9.25 22.5z'},
   markLinks: { active: false, text: 'הדגשת קישורים', svg: 'M256 200v16c0 4.25-3.75 8-8 8h-56v56c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-56h-56c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h56v-56c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8v56h56c4.25 0 8 3.75 8 8zM288 208c0-61.75-50.25-112-112-112s-112 50.25-112 112 50.25 112 112 112 112-50.25 112-112zM416 416c0 17.75-14.25 32-32 32-8.5 0-16.75-3.5-22.5-9.5l-85.75-85.5c-29.25 20.25-64.25 31-99.75 31-97.25 0-176-78.75-176-176s78.75-176 176-176 176 78.75 176 176c0 35.5-10.75 70.5-31 99.75l85.75 85.75c5.75 5.75 9.25 14 9.25 22.5z' },
   readableFont: { active: false, text: 'פונט קריא', svg: 'M256 200v16c0 4.25-3.75 8-8 8h-56v56c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-56h-56c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h56v-56c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8v56h56c4.25 0 8 3.75 8 8zM288 208c0-61.75-50.25-112-112-112s-112 50.25-112 112 50.25 112 112 112 112-50.25 112-112zM416 416c0 17.75-14.25 32-32 32-8.5 0-16.75-3.5-22.5-9.5l-85.75-85.5c-29.25 20.25-64.25 31-99.75 31-97.25 0-176-78.75-176-176s78.75-176 176-176 176 78.75 176 176c0 35.5-10.75 70.5-31 99.75l85.75 85.75c5.75 5.75 9.25 14 9.25 22.5z' },
   resetSettings: { active: false, text: 'איפוס', svg: 'M256 200v16c0 4.25-3.75 8-8 8h-56v56c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-56h-56c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h56v-56c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8v56h56c4.25 0 8 3.75 8 8zM288 208c0-61.75-50.25-112-112-112s-112 50.25-112 112 50.25 112 112 112 112-50.25 112-112zM416 416c0 17.75-14.25 32-32 32-8.5 0-16.75-3.5-22.5-9.5l-85.75-85.5c-29.25 20.25-64.25 31-99.75 31-97.25 0-176-78.75-176-176s78.75-176 176-176 176 78.75 176 176c0 35.5-10.75 70.5-31 99.75l85.75 85.75c5.75 5.75 9.25 14 9.25 22.5z' },
  }
 }
 },

methods: {
  openModal() {
    this.openSettings = !this.openSettings;
  },
  closeModal() {
    if (this.openSettings) {
      this.openSettings = false;
    }
  },
  applySettings(index) {
    this.resetActive();
    this.settings[index].active = true;

    if (this.settings['biggerText'].active) {
      document.querySelector('html').style.fontSize = '12px';
    } else if (this.settings['smallerText'].active) {
      document.querySelector('html').style.fontSize = '10px';
    } else if (this.settings['grayFilter'].active) {
     document.querySelector('html').style.filter = 'grayscale(100%)';
    } else if (this.settings['reverseContrast'].active) {
     document.querySelector('html').style.background = 'black'
     document.querySelector('html').style.color = 'white'
     document.querySelector('.settings_modal').style.color = 'black'
    } else if (this.settings['markLinks'].active) {
     document.querySelectorAll('a').forEach(a=> a.style.textDecoration = 'underline')
    } else if (this.settings['readableFont'].active) {
     document.querySelector('.app_container').style.fontFamily = 'Arial'
    } else if (this.settings['resetSettings'].active) {
    this.resetAllSettings()
    }
  },
  resetActive() {
    for (const settingKey in this.settings) {
      if (Object.prototype.hasOwnProperty.call(this.settings, settingKey)) {
        this.settings[settingKey].active = false;
      }
    }
 },
 resetAllSettings() {
    for (const key in this.settings) {
      if (Object.prototype.hasOwnProperty.call(this.settings, key)) {
        this.settings[key].active = false;
      }
  }

    document.querySelector('html').style.fontSize = '10px';
    document.querySelector('html').style.filter = 'none';
    document.querySelector('html').style.background = 'initial'
    document.querySelector('html').style.color = 'initial'
    document.querySelectorAll('a').forEach(a => a.style.textDecoration = 'none')
    document.querySelector('.app_container').style.fontFamily = 'Heebo-regular'
  }
}


}

</script>
<style>
</style>
