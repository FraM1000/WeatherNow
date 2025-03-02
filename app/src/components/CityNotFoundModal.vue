<template>
    <div class="modal">
        <img alt="City not found image" src="../assets/no-result.png">
        <h1>City not found!</h1>
        <p class="explanation">
            We were unable to find the city you were looking for,<br>
            please make sure the name was not misspelled.
        </p>
    </div>
</template>

<script>
export default {
    name: 'CityNotFoundModal'
}
</script>

<style scoped>
.modal {
    margin: auto;
    position: relative;
    top: 15px;
    height: 250px;
    width: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    position: relative;
    top: 25px;
}

h1 {
    font-size: 25px;
    position: relative;
    top: 15px;
}

.explanation {
    font-size: 15px;
    position: relative;
    top: -10px;
}
</style>