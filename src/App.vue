<template>
  <div id="app">
    <MultiPage />
  </div>
</template>

<script>
import MultiPage from "./components/MultiPage.vue";
import "./assets/main.css";

export default {
  name: "App",
  components: {
    MultiPage,
  },
};
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
