<template>
  <SignCanvas ref="signCanvas" backgroundColor="#eee" lineJoin="bevel" />
  <button @click="reset">Reset</button>
</template>

<script setup>
import { ref } from 'vue'
import SignCanvas from './components/SignCanvas.vue'

const signCanvas = ref(null)

const reset = () => {
  signCanvas.value.reset();
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
