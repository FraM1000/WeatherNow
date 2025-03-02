<template>
  <header>
    <div class="header">
      <i class="bi bi-brightness-low"></i>
      <p>WeatherNow</p>
      <input type="text" placeholder="Search for a city..." class="search" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  margin: auto;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 570px;
  align-items: center;
}

.bi-brightness-low {
  font-size: 35px;
}

p {
  font-size: 25px;
  padding: 5px;
}

.search {
  position: relative;
  right: -115px;
  font-family: "Funnel Sans", sans-serif;
  border: 1.5px solid black;
  border-radius: 5px;
  width: 250px;
  padding: 5px;
}
</style>
