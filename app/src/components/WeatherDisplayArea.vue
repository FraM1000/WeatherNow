<template>
    <div class="container">
        <div class="city-and-date">
            <p class="city">{{ currentWeatherData.name }}, {{ currentWeatherData.sys.country }}</p>
            <p class="date">{{ dateBuilder() }}</p>
        </div>
        <div class="current-weather">
            <p class="current-weather-temp">{{ Math.round(currentWeatherData.main.temp) }}°c</p>
            <img class="current-weather-icon"
                :src="`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`" />
        </div>
        <p class="current-weather-info">
            {{ currentWeatherData.weather[0].description }}<br/>
            humidity: {{ currentWeatherData.main.humidity }}%<br/>
            feels like {{ Math.round(currentWeatherData.main.feels_like) }}°c
        </p>
        <p class="hourly-weather-title">Hourly Weather</p>
        <div class="hourly-weather">
            <div v-for="hourData in hourlyForecastData.list" :key="hourData.dt" class="hourly-weather-item">
                <p class="hourly-weather-item-time">{{ timeBuilderForHourlyForecast(hourData.dt_txt) }}</p>
                <img class="hourly-weather-item-icon"
                    :src="`http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`" />
                <p class="hourly-weather-item-temp">{{ Math.round(hourData.main.temp) }}°c</p>
            </div>
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'WeatherDisplayArea',
    props: {
        currentWeatherData: Object,
        hourlyForecastData: Object
    },
    methods: {
        dateBuilder() {
            let d = this.getCurrentDateTime();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            let hours = d.getUTCHours();

            return this.convertToAmPm(hours) + ` ${day}, ${date} ${month} ${year}`;
        },
        timeBuilderForHourlyForecast(dt_txt) {
            let d = new Date(dt_txt);
            let n = this.getCurrentDateTime();

            return this.dateDifferenceLessOrEqualToOneHour(d, n) ? "NOW" : d.toLocaleTimeString("en-us", {hour: "numeric"});
        },
        getCurrentDateTime() {
            let offsetSeconds = parseInt(this.currentWeatherData.timezone);
            let offsetMilliseconds = offsetSeconds * 1000;
            let nowUtc = new Date();
            return new Date(nowUtc.getTime() + offsetMilliseconds);
        },
        convertToAmPm(hours) {
            let period = hours >= 12 ? "PM" : "AM";
            let formattedHour = hours % 12 || 12;
            return `${formattedHour} ${period}`;
        },
        dateDifferenceLessOrEqualToOneHour(dateOne, dateTwo) {
            let diffMilliseconds = Math.abs(dateOne.getTime() - dateTwo.getTime());
            let oneHourInMilliseconds = 1 * 60 * 60 * 1000;
            return diffMilliseconds <= oneHourInMilliseconds ? true : false;
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    margin: auto;
    position: relative;
    top: 15px;
    height: 320px;
    width: 570px;
}

.city-and-date {
    position: relative;
    left: 10px;
}

.city {
    font-size: 25px;
}

.date {
    position: relative;
    top: -25px;
}

.current-weather {
    display: flex;
    flex-direction: row;
    position: relative;
    top: -112px;
    right: -430px;
    width: 140px;
}

.current-weather-icon {
    width: 80px;
}

.current-weather-temp {
    font-size: 30px;
}

.current-weather-info {
    position: relative;
    top: -145px;
    right: -430px;
    font-size: 12px;
    width: 140px;
}

.hourly-weather-title {
    position: relative;
    top: -120px;
    left: 10px;
}

.hourly-weather {
    display: flex;
    flex-direction: row;
    position: relative;
    top: -140px;
    left: -4px;
} 

.hourly-weather-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
}

.hourly-weather-item-time, .hourly-weather-item-temp {
    font-size: 15px;
    margin: 5px;
}

.hourly-weather-item-icon {
    width: 40px;
}
</style>
  