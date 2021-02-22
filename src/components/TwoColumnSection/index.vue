<template>
  <section
    class="two-col-section"
    :class="{ about: label === 'about', ethos: label === 'ethos' }"
  >
    <div
      class="container inner"
      :class="{ [`${label}-inner`]: label === 'ethos' }"
    >
      <div class="inner--content"><TitleCard :data="data" /></div>

      <div class="inner--images">
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
import { onMounted } from "vue";
import ScrollTriggerAnimations from "./animation";
import TitleCard from "../TitleCard";

export default {
  name: "Two-Column-Section",
  components: { TitleCard },
  props: ["data", "label"],
  setup() {
    onMounted(() => ScrollTriggerAnimations());
    return {};
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";

.two-col-section {
  & .inner {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    padding-top: 5vw;
    padding-bottom: 5vw;

    &--images {
      position: relative;
      z-index: -1;
      width: 100%;
      text-align: right;

      .banner {
        height: 40vw;
        width: fit-content;

        &-overlay {
          width: 16vw;
          height: 24vw;
          position: absolute;
          left: 0;
          top: 10%;

          &__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    &.ethos-inner {
      .inner--content {
        order: 2;

        .title-card {
          margin-left: auto;
        }
      }

      .inner--images {
        width: 100%;
        text-align: left;

        .banner-overlay {
          left: unset;
          right: 0;
        }
      }
    }
  }
}
</style>
