<template>
  <div class="home">
    <Hero />
    <div class="space" />
    <TwoColumnSection :label="'about'" :data="aboutSectionData" />
  </div>
</template>

<script>
import TwoColumnSection from "../components/TwoColumnSection";
import Hero from "../components/Hero";
import { imgAbout1, imgAbout2 } from "../assets/index";

export default {
  name: "Home",
  components: { Hero, TwoColumnSection },
  setup() {
    const bannerImage = imgAbout1;
    const bannerTopImage = imgAbout2;
    const aboutSectionData = {
      title: "Who We Are",
      subTitle: "<span>True</span> furniture Masters",
      caption:
        "We are a collaboration of emerging and iconic designers and makers. Each object was designed to bring quality and style to your everyday rituals.",
      bannerImage,
      bannerTopImage
    };

    return { aboutSectionData };
  }
};
</script>
