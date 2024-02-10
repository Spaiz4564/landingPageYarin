<template>
  <div class="side_modal_container">
    <div :class="['side_modal', {'open': showModal}]">
      <ul class="nav_links">
        <a v-for="link in navLinks" class="link" :key="link" @click="scrollToSection(link.href)">{{ link.text }}</a>
        <li class="number" >0546699285</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideModal',
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
    };
  },
methods: {
   scrollToSection(sectionId) {
      const sectionElement = document.querySelector(sectionId);
      if (sectionElement) {
        const offset = 0;
        const offsetTop = sectionElement.offsetTop - offset;
        this.$emit('closeModal')

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
}
};
</script>

<style>
  /* Add your styles here */
</style>
