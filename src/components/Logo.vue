<template>
  <img :src="logoUrl" alt="Logo" :style="logoWidth" />
</template>

<script>
import { logo } from "../assets/index";

export default {
  name: "Logo",
  props: ["size"],
  setup(props) {
    const logoUrl = logo;
    const logoWidth = {
      width: props.size || "10vw"
    };

    return { logoUrl, logoWidth };
  }
};
</script>
