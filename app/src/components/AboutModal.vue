<template>
    <div class="modal">
        <div class="title">
            <i class="bi bi-info-circle"></i>
            <p>About</p>
        </div>
        <p class="explanation">
            WeatherNow allows you to search and view the weather of any city in the world.
            Search for a city by entering the name in the search bar, before pressing enter make sure the name has not
            been misspelled.
        </p>
    </div>
</template>

<script>
export default {
    name: 'AboutModal'
}
</script>

<style scoped>
.modal {
    margin: auto;
    position: relative;
    top: 15px;
    height: 120px;
    width: 570px;
    background-color: rgb(195, 225, 244);
    border-radius: 5px;
}

.title {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: -15px;
    left: 10px;
}

p {
  padding: 5px;
}

.explanation {
    position: relative;
    top: -50px;
    left: 5px;
    font-size: 15px;
}
</style>