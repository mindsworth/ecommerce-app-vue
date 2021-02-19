<template>
  <div className="hero">
    <div className="container hero__header">
      <h1>We are Celestial,</h1>
      <p className="hero__sub">
        we design and manufacture furniture fit for gods
      </p>
      <router-link to="/collections" className="hero__cta">
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
.hero {
  border: 1px solid #000;
}
</style>
