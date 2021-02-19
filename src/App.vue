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
@import "./assets/styles/_global.scss";
</style>
