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
        <WeatherDisplayArea :currentWeatherData='weather' :hourlyForecastData='hourlyForecast'>
        </WeatherDisplayArea>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Header from '../components/Header.vue'
import AboutModal from '../components/AboutModal.vue'
import CityNotFoundModal from '../components/CityNotFoundModal.vue'
import WeatherDisplayArea from '../components/WeatherDisplayArea.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      urlBase: 'https://api.openweathermap.org/data/2.5/',
      apiKey: '7efa332cf48aeb9d2d391a51027f1a71',
      weather: {},
      hourlyForecast: {},
      cityNotFound: false
    }
  },
  methods: {
    getWeatherForEnteredCity (enteredCity) {
      if(enteredCity.trim().length !== 0) {
        this.cityNotFound = false;
        axios
          .get(`${this.urlBase}weather?q=${enteredCity}&units=metric&APPID=${this.apiKey}`)
          .then(response => (this.weather = response.data))
          .catch(error => {
            console.log(error);
            this.cityNotFound = true;
          });
          axios
          .get(`${this.urlBase}forecast?q=${enteredCity}&units=metric&cnt=8&APPID=${this.apiKey}`)
          .then(response => (this.hourlyForecast = response.data))
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
    CityNotFoundModal,
    WeatherDisplayArea
  }
}
</script>

<style scoped>

</style>