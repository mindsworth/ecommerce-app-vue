<template>
  <img
    :src="logoWhiteUrl"
    alt="Logo"
    :style="logoWidth"
    v-if="label === 'footer'"
  />
  <img :src="logoBlackUrl" alt="Logo" :style="logoWidth" v-else />
</template>

<script>
import { logoWhite, logoBlack } from "../assets/index";

export default {
  name: "Logo",
  props: ["size", "label"],
  setup(props) {
    const logoBlackUrl = logoBlack;
    const logoWhiteUrl = logoWhite;
    const logoWidth = {
      width: props.size ? `${props.size}vw` : "10vw"
    };

    return { logoBlackUrl, logoWhiteUrl, logoWidth };
  }
};
</script>
