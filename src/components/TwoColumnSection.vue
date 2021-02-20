<template>
  <section class="about__section">
    <div class="container about">
      <div class="about--content"><TitleCard :data="data" /></div>

      <div class="about--images">
        <img :src="data.bannerImage" alt="Banner Image" class="banner" />

        <div class="banner-overlay">
          <img
            :src="data.bannerTopImage"
            alt="Banner Overlay Image"
            class="banner-overlay__img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleCard from "./TitleCard";

export default {
  name: "Two-Column-Section",
  components: { TitleCard },
  props: ["data"],
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.about__section {
  & .about {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;

    /* &--content {
    } */

    &--images {
      margin-left: auto;
      position: relative;
      z-index: -1;

      .banner {
        height: 40vw;
        width: fit-content;

        &-overlay__img {
          position: absolute;
          left: -25%;
          bottom: 30%;
          width: 16vw;
          height: 24vw;
        }
      }
    }
  }
}
</style>
