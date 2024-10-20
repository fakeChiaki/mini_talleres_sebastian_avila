<template>
    <div class="general__container">
        <h1>Búsqueda del mensaje secreto</h1>
        <div class="buttons__container">
            <RouterLink to="/route1"><button>Ir a Ruta 1</button></RouterLink>
            <RouterLink to="/route2"><button>Ir a Ruta 2</button></RouterLink>
            <RouterLink to="/route3"><button>Ir a Ruta 3</button></RouterLink>
            <RouterLink to="/route4"><button>Ir a Ruta 4</button></RouterLink>
            <RouterLink to="/route5"><button>Ir a Ruta 5</button></RouterLink>
        </div>

        <div class="input__container">
            <input v-model="userInput" placeholder="Ingrese las palabras secretas separadas por espacios." />
            <button @click="checkWords">Comprobar</button>
        </div>

        <div class="message__container" v-if="message">
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const userInput = ref('');
const message = ref('');

const secretWords = ['secreto1', 'secreto2', 'secreto3', 'secreto4', 'secreto5'];

const checkWords = () => {
    const inputWords = userInput.value.split(' ').map(word => word.trim());
    const isValid = secretWords.every(word => inputWords.includes(word)) && inputWords.length === 5;
    message.value = isValid ? 'Mensaje correcto' : 'Mensaje incorrecto';
};
</script>

<style scoped>
button {
    border-radius: 7px;
    transition: 0.3s;
}

button:hover {
    cursor: pointer;
    background-color: #d3d3d3;
}

.general__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
}

.buttons__container {
    display: flex;
    gap: 10px;
}

.input__container {
    display: flex;
    gap: 20px;
}

input {
    width: 325px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
</style>
