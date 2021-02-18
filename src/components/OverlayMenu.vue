<template>
  <div class="overlay-menu">
    <div class="overlay-menu__left">
      <img :src="menuHeroImage" alt="Menu Hero Image" class="menu-hero-image" />
    </div>
    <div class="overlay-menu__right">
      <div class="right__header">
        <Logo size="12" />
      </div>
      <div class="right__nav">
        <div class="right__nav__links">
          <Links @onHover="handleLinkHover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Links from "./Links.vue";
import Logo from "./Logo";
import { menuImages } from "../assets/index";
import { ref } from "vue";

export default {
  name: "Overlay-Menu",
  components: { Logo, Links },
  setup() {
    const menuHeroImage = ref(menuImages["first"]);

    const handleLinkHover = selected => {
      menuHeroImage.value = menuImages[selected];
    };

    return { handleLinkHover, menuHeroImage };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.overlay-menu {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1.35fr 2fr;

  &__left {
    .menu-hero-image {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    background-color: $color-white;
  }

  & .right__header {
    height: 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10vw;
  }

  & .right__nav {
    height: 100%;
    padding-left: 10vw;
    margin-top: -10vh;

    &__links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;

      a {
        color: $color-black;
        font-family: "Cormorant", serif;
        font-size: 4vw;

        font-weight: 200;
        cursor: pointer;
        width: fit-content;
      }

      a:hover {
        font-style: italic;
      }

      a.router-link-exact-active {
        font-weight: 300;
        font-style: italic;
        color: $color-primary;
      }
    }
  }
}
</style>
