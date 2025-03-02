<template>
  <div id="app">
    <HomeView/>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:ital@0;1&display=swap');

#app {
  font-family: "Funnel Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
