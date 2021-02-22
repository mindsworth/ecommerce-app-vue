<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header/index";

export default {
  name: "App",
  components: { Header, Footer }
};
</script>

<style lang="scss">
@import "./assets/styles/_variables.scss";
@import "./assets/styles/_global.scss";
</style>
