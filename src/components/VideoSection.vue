<template>
  <section class="video-section">
    <img :src="videoUrl" alt="video" class="video__img" />

    <div class="video__play">
      <img :src="playUrl" alt="play icon" class="icon" />
    </div>
  </section>
</template>

<script>
import { videoIsh, playSVG } from "../assets/index";

export default {
  name: "Video-Section",
  setup() {
    const videoUrl = videoIsh;
    const playUrl = playSVG;

    return { playUrl, videoUrl };
  }
};
</script>

<style lang="scss">
.video-section {
  position: relative;
  z-index: -1;

  .video__img {
    width: 100vw;
    object-fit: cover;
    height: auto;
  }

  .video__play {
    position: absolute;
    width: 6vw;
    height: 6vw;
    border-radius: 50%;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
    background-color: #6c4f235c;
    display: grid;
    place-items: center;

    .icon {
      width: 83%;
    }
  }
}
</style>
