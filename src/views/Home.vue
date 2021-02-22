<template>
  <div class="home">
    <Hero />
    <div class="space" />
    <TwoColumnSection :label="'about'" :data="aboutSectionData" />
    <CategorySection />
    <VideoSection />
    <TwoColumnSection :label="'ethos'" :data="ethosSectionData" />
  </div>
</template>

<script>
import TwoColumnSection from "../components/TwoColumnSection/index";
import Hero from "../components/Hero/index";
import { imgAbout1, imgAbout2, imgEthos1, imgEthos2 } from "../assets/index";
import VideoSection from "../components/VideoSection";
import CategorySection from "../components/CategorySection/index";

export default {
  name: "Home",
  components: { Hero, TwoColumnSection, VideoSection, CategorySection },
  setup() {
    const aboutSectionData = {
      title: "Who We Are",
      subTitle: "<span>True</span> furniture Masters",
      caption:
        "We are a collaboration of emerging and iconic designers and makers. Each object was designed to bring quality and style to your everyday rituals.",
      bannerImage: imgAbout1,
      bannerTopImage: imgAbout2
    };
    const ethosSectionData = {
      title: "Our ethos",
      subTitle: "<span>Effortlessly</span> Grande Homes",
      caption:
        "Making luxurious and truly grande furniture accessible for all people is our daily drive.",
      bannerImage: imgEthos1,
      bannerTopImage: imgEthos2
    };

    return { aboutSectionData, ethosSectionData };
  }
};
</script>
