<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './componentes/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
  body {
    background: #232323;
    margin: 0;
    font-family: "Montserrat", "Avenir";
  }
</style>
