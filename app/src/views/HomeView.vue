<template>
  <div>
    <Header></Header>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import AboutModal from '../components/AboutModal.vue'
import CityNotFoundModal from '../components/CityNotFoundModal.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    AboutModal,
    CityNotFoundModal
  }
}
</script>

<style scoped>

</style>