<template>
  <nav class="navbar_container">
    <div class="header_container">
  <div class="header">
  <h1 class="name" @click="scrollToSection('#hero')">ד"ר ירין שילון</h1>
    <div class="navbar_container">
      <a v-for="link in navLinks" class="nav_link" :key="link.text" @click="scrollToSection(link.href)">{{ link.text }}</a>
    </div>
  <a class="number" :href="'tel:' + phoneNumber">08-9331193</a>
    </div>
    </div>
    <img v-if="!showModal" class="hamburger" @click="this.$emit('openModal')"  src="../assets/img/hamburger.png" alt="">
    <svg v-if="showModal" class="close_modal" @click="this.$emit('closeModal')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
   props: {
    showModal: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      navLinks: [
        { text: 'בית', href: '#hero' },
        { text: 'שירותים', href: '#services' },
        { text: 'אודות', href: '#about' },
        { text: 'תותבות', href: '#dentures' },
        { text: 'גלריה', href: '#gallery' },
        { text: 'צור קשר', href: '#contact' },
      ],
      phoneNumber: '08-9331193',
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const sectionElement = document.querySelector(sectionId);
      if (sectionElement) {
        const offset = 0;
        const offsetTop = sectionElement.offsetTop - offset;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    },
  },
}
</script>

<style>
</style>
