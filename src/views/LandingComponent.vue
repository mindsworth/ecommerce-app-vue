<template>
  <div id="app-inner">
    <main>
      <Header />
      <router-view></router-view>
      <Footer />
    </main>
  </div>
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

#app-inner {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
