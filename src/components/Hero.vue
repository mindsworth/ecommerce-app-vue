<template>
  <div className="hero">
    <div className="container hero__header">
      <h1 className="text">We are Celestial,</h1>
      <p className="sub-text">
        we design and manufacture furniture fit for gods
      </p>
      <router-link to="/collections" class="hero__cta">
        Discover Our Collections
      </router-link>
    </div>

    <!-- <div className="hero__slider">
      <SlickSlider />
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.hero {
  text-align: center;

  &__header .text {
  }

  &__header .sub-text {
    font-size: 1.6vw;
    color: $color-text-primary;
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
