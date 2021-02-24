<template>
  <header className="hero">
    <div className="container hero__header">
      <h1 className="text">We are Celestial,</h1>
      <p className="sub-text">
        we design and manufacture furniture fit for gods
      </p>
      <router-link :to="{ name: 'Shop' }" class="hero__cta">
        Discover Our Collections
      </router-link>
    </div>

    <HeroCarousel />
  </header>
</template>

<script>
import HeroCarousel from "./HeroCarousel.vue";
export default {
  components: { HeroCarousel }
};
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";

.hero {
  text-align: center;

  &__header {
    margin-top: 13vw;
    margin-bottom: 8vw;

    .sub-text {
      font-size: 1.6vw;
      color: $color-text-primary;
    }
  }

  &__cta {
    display: inline-block;
    background-color: $color-primary;
    color: white;
    padding: 1.4vw 3vw;
    font-weight: bold;
    font-size: $font-size-button;
    margin-top: 2.6rem;
    text-decoration: none;
  }
}
</style>
