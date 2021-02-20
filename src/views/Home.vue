<template>
  <div class="home">
    <Hero />
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
