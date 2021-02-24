<template>
  <main>
    <Header />
    <router-view></router-view>
    <Footer />
  </main>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header/index";

export default {
  name: "Landing-Component",
  components: { Header, Footer }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";
@import "../assets/styles/_global.scss";

main {
}
</style>
