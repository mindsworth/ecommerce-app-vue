<template>
  <div class="title-card">
    <p class="title">Who We Are</p>
    <h2 class="subtitle"><span>True</span> furniture Masters</h2>
    <p class="caption">
      We are a collaboration of emerging and iconic designers and makers. Each
      object was designed to bring quality and style to your everyday rituals.
    </p>
  </div>
</template>

<script>
export default {
  name: "Title-Card"
};
</script>
<style lang="scss">
@import "../assets/styles/_variables.scss";

.title-card {
  max-width: 50%;

  .title {
    font-weight: 400;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: $color-secondary;
  }

  .subtitle {
    color: $color-secondary;
    line-height: 100%;
    font-size: 5vw;
    line-height: 90%;
    margin-bottom: 1vw;
    font-weight: 200;
    position: relative;
    z-index: -1;

    @include respond(phone) {
      font-size: $font-size-large-mobile;
    }

    &::after {
      content: " ";
      display: block;
      position: absolute;
      width: 6vw;
      height: 1px;
      background-color: $color-secondary;
      bottom: -2vw;

      @include respond(phone) {
        width: 18vw;
        bottom: -4vw;
      }
    }
    span {
      font-style: italic;
    }
  }

  .caption {
    color: $color-secondary;
    font-size: $font-size-small;
    line-height: 1.6em;
    margin-top: 3vw;

    @include respond(phone) {
      margin-top: 8vw;
      font-size: $font-size-small-mobile;
    }
  }
}
</style>
