<template>
  <div id="app">
    <PageSimulator/>
  </div>
</template>

<script>
import PageSimulator from "./pages/PageSimulator.vue";
export default {
  name: 'App',
  components: { PageSimulator }
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
