<template>
  <Swiper
    :slides-per-view="4"
    :speed="15000"
    :space-between="0"
    :centeredSlides="true"
    :autoplay="{
      delay: 1,
      disableOnInteraction: false,
      waitForTransition: false
    }"
    :loop="true"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <div
        class="slide__img"
        :data-ref="index + 1"
        :style="{
          backgroundImage: `url(${slide})`
        }"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { carouselImages } from "../../assets/index";

SwiperCore.use([Autoplay]);

import "swiper/swiper.scss";

export default {
  name: "HeroCarousel",
  components: { Swiper, SwiperSlide },
  setup() {
    const slides = carouselImages;
    return { slides };
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";

.swiper-container {
  z-index: -1;
  position: relative;
}

.swiper-wrapper {
  display: flex;
  align-items: center;
}

.swiper-slide {
  .slide__img {
    height: 100%;
    background-size: cover;
    margin: 0 auto;
    width: fit-content;
  }

  .slide__img[data-ref="3"] {
    width: 20vw;
    height: 32vw;

    @include respond(tab-land) {
      width: 20vw;
      height: 34vw;
    }
    @include respond(phone) {
      width: 40vw;
      height: 74vw;
    }
  }

  .slide__img[data-ref="2"],
  .slide__img[data-ref="4"] {
    width: 20vw;
    height: 28vw;
    @include respond(tab-land) {
      width: 22vw;
      height: 28vw;
    }
    @include respond(phone) {
      width: 40vw;
      height: 60vw;
    }
  }

  .slide__img[data-ref="1"],
  .slide__img[data-ref="5"] {
    width: 18vw;
    height: 18vw;
    @include respond(tab-land) {
      width: 20vw;
      height: 20vw;
    }
    @include respond(phone) {
      width: 40vw;
      height: 40vw;
    }
  }
}
</style>
