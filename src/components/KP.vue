<template>
  <div v-if="form">
    <KpForm />
  </div>
  <div v-else>
    <SignCanvas refs="VueCanvasDrawing" />
  </div>
  <button @click="sng">{{ bname }}</button>
</template>

<script setup>
import { ref } from "vue";
import KpForm from "./KpForm.vue";
import SignCanvas from "./SignCanvas.vue";

const form = ref(true);
const bname = ref('Sign')
const VueCanvasDrawing = ref("VueCanvasDrawing")

const sng = () => {
  form.value = !form.value

  if (form.value) {
    bname.value = 'Sign'
  }
  else {
    VueCanvasDrawing.value.save()
    bname.value = 'Close'
  }
}

</script>