<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: { Header }
};
</script>

<style lang="scss">
@import "./assets/styles/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  font-size: 62.5%;
}

html.touch *:hover {
  all: unset !important;
}

body {
  font-family: "Libre Franklin", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-black;
  font-size: 1vw;
  font-weight: 300;
}
</style>
