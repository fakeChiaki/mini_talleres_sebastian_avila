<template>
    <div class="calculator-container">
      <h1>Calculadora de Promedios</h1>

      <div v-for="(nota, index) in notas" :key="index" class="nota-input">
        <label :for="'nota' + (index + 1)">Nota {{ index + 1 }} ({{ ponderacion[index] * 100 }}%):</label>
        <input
          type="number"
          v-model.number="notas[index]"
          :id="'nota' + (index + 1)"
          @input="validarNota(index)"
          min="0"
          max="70"
        />
      </div>

      <h2>Promedio: {{ promedio.toFixed(2) }}</h2>
    </div>
  </template>

  <script setup>
  import { ref, computed } from 'vue'

  const notas = ref([0, 0, 0, 0, 0, 0])
  const ponderacion = ref([0.20, 0.20, 0.20, 0.20, 0.10, 0.10])

  const promedio = computed(() => {
    return notas.value.reduce((total, nota, index) => {
      return total + nota * ponderacion.value[index]
    }, 0)
  })

  const validarNota = (index) => {
    notas.value[index] = Math.max(0, Math.min(notas.value[index], 70))
  }
  </script>

  <style scoped>
  .calculator-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Poppins, sans-serif;
  }

  h1 {
    color: #333;
    margin-bottom: 20px;
  }

  .nota-input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  label {
    margin-right: 10px;
  }

  input {
    padding: 5px;
    width: 50px;
    text-align: center;
    appearance: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  h2 {
    margin-top: 20px;
    color: #00509E;
  }
  </style>
