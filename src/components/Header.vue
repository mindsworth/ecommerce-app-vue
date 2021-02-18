<template>
  <nav class="nav-header">
    <router-link to="/">
      <Logo class="nav-header__logo" />
    </router-link>
    <div class="nav-header__links">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/collection">
        Collection
      </router-link>
      <a>
        About
      </a>
      <router-link to="/login">Login</router-link>
      <Cart />
      <HamburgerMenu />
      <OverlayMenu />
    </div>
  </nav>
</template>

<script>
import { logo } from "../assets/index";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import OverlayMenu from "./OverlayMenu";

export default {
  name: "Header",
  components: { Cart, HamburgerMenu, OverlayMenu, Logo },

  setup() {
    const logoUrl = logo;

    return { logoUrl };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.nav-header {
  position: sticky;
  top: 0;
  height: 6vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  padding: 0 6%;

  /* &__logo {
    width: 10vw;
  } */

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
