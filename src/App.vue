<template>
  <div id="app-inner">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
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

#app-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  main {
    flex: 1 1;
  }
}
</style>
