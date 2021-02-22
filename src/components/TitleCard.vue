<template>
  <div class="title-card">
    <p class="title">{{ data.title }}</p>
    <h2 class="subtitle" v-html="data.subTitle" />
    <p class="caption">
      {{ data.caption }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Title-Card",
  props: ["data"]
};
</script>
<style lang="scss">
@import "../assets/styles/_variables.scss";

.title-card {
  max-width: 55%;

  .title {
    color: $color-secondary;
  }

  .subtitle {
    color: $color-secondary;
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
