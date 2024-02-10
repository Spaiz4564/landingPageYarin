<template>
  <div id="app" class="app_container">
    <navbar :showModal="showModal" @closeModal=setShowModal(false) @openModal="setShowModal(true)"/>
    <side-modal :showModal="showModal" @closeModal="setShowModal(false)"/>
    <div v-if="showModal" @click="setShowModal(false)" class="backdrop"></div>
    <main class="main">
   <HomePage/>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import HomePage from './views/HomePage'
import SideModal from './components/SideModal'


export default {
  name: 'App',
  components: {
    Navbar,
    HomePage,
    SideModal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    setShowModal(val) {
     this.showModal = val;
     document.body.classList.toggle('modal_open', val);
},
  },
}
</script>

<style>
</style>

