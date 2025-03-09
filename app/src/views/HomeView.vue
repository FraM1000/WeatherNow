<template>
  <div>
    <Header v-on:enter="getWeatherForEnteredCity"></Header>
    <div v-if="userDidNotSearchCity">
      <AboutModal></AboutModal>
    </div>
    <div v-else>
      <div v-if="cityNotFound">
        <CityNotFoundModal></CityNotFoundModal>
      </div>
      <div v-else>
        {{ weather }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Header from '../components/Header.vue'
import AboutModal from '../components/AboutModal.vue'
import CityNotFoundModal from '../components/CityNotFoundModal.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      url_base: 'https://api.openweathermap.org/data/2.5/',
      api_key: '7efa332cf48aeb9d2d391a51027f1a71',
      weather: {},
      cityNotFound: false
    }
  },
  methods: {
    getWeatherForEnteredCity (enteredCity) {
      if(enteredCity.trim().length !== 0) {
        this.cityNotFound = false;
        axios
          .get(`${this.url_base}weather?q=${enteredCity}&units=metric&APPID=${this.api_key}`)
          .then(response => (this.weather = response.data))
          .catch(error => {
            console.log(error);
            this.cityNotFound = true;
          });
      }
    }
  },
  computed: {
    userDidNotSearchCity() {
      return Object.keys(this.weather).length === 0 && this.cityNotFound == false;
    }
  },
  components: {
    Header,
    AboutModal,
    CityNotFoundModal
  }
}
</script>

<style scoped>

</style>