<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header/index";

export default {
  name: "Landing-Component",
  components: { Header, Footer }
};
</script>
