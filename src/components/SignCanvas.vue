<template>
  <vue-drawing-canvas ref="VueCanvasDrawing" backgroundColor="#eee" lineJoin="bevel" />
  <button @click="reset">Reset</button>
</template>

<script setup>
  import { ref } from "vue";
  import VueDrawingCanvas from "vue-drawing-canvas";

  const VueCanvasDrawing = ref(null);

  const reset = () => {
    VueCanvasDrawing.value.reset();
  }
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
