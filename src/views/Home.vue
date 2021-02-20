<template>
  <div class="home">
    <Hero />
    <div class="space" />
    <AboutSection />
  </div>
</template>

<script>
import AboutSection from "../components/AboutSection.vue";
import Hero from "../components/Hero.vue";

export default {
  name: "Home",
  components: { Hero, AboutSection }
};
</script>
