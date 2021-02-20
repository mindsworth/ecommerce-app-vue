<template>
  <section class="about__section">
    <div class="container about">
      <div class="about--content"><TitleCard /></div>

      <div class="about--images">
        <img src="{imgAbout1}" alt="" class="img-1" />

        <div class="img-2__banner">
          <img :src="bannerImage" alt="" class="Banner Image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleCard from "./TitleCard";
import { imgAbout1, imgAbout2 } from "../assets/index";

export default {
  name: "About-Section",
  components: { TitleCard },
  setup() {
    const bannerImage = imgAbout1;
    const bannerTopImage = imgAbout2;

    return { bannerImage, bannerTopImage };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.about__section {
  border: 1px solid #000;

  & .about {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;

    &--content {
      border: 1px solid #000;
    }
  }
}
</style>
