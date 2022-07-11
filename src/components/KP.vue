<template>
  <div v-if="form">
    <KpForm />
    <img :src="img" />
  </div>
  <div v-else>
    <SignCanvas />
  </div>
  <button @click="() => form = !form">Sign</button>
</template>

<script setup>
import { ref } from "vue";
import KpForm from "./KpForm.vue";
import SignCanvas from "./SignCanvas.vue";

const form = ref(true);
const img = ref(window.localStorage.getItem("VueDrawingCanvas"));

console.log();
</script>