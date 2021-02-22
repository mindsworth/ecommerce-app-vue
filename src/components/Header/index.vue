<template>
  <header class="nav-header">
    <router-link to="/">
      <Logo class="nav-header__logo" />
    </router-link>
    <nav class="nav-header__links">
      <Links />
      <Cart />
      <HamburgerMenu
        :class="{ 'is-active': menuIsActive }"
        @click="animateMenu"
      />
      <OverlayMenu :active="menuIsActive" />
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "../Logo";
import OverlayMenu from "./OverlayMenu";
import Links from "./Links";

export default {
  name: "Header",
  components: { Cart, HamburgerMenu, OverlayMenu, Logo, Links },

  setup() {
    const menuIsActive = ref(false);

    const animateMenu = () => {
      menuIsActive.value = !menuIsActive.value;
    };

    return { menuIsActive, animateMenu };
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";

.nav-header {
  position: sticky;
  top: 0;
  height: 7vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  padding: 0 6%;

  &__links {
    display: flex;
    align-items: center;

    a {
      color: $color-black;
      cursor: pointer;
      margin-right: 2vw;
      text-decoration: none;

      &.router-link-exact-active {
        font-weight: 500;
        color: $color-primary;
      }
    }
  }
}
</style>
