<template>
  <nav class="nav-header">
    <router-link to="/">
      <img :src="logoUrl" alt="Logo" class="nav-header__logo" />
    </router-link>
    <div class="nav-header__links">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/collection">
        Collection
      </router-link>
      <a v-scroll-to="'#section-one'">
        About
      </a>
      <router-link to="/">Login</router-link>
    </div>
  </nav>
</template>

<script>
import { logo } from "../../assets";

export default {
  name: "Header",
  setup() {
    const logoUrl = logo;

    console.log("logoUrl", logoUrl);

    return { logoUrl };
  }
};
</script>

<style lang="scss">
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

  &__logo {
    width: 10vw;
  }

  &__links {
    a {
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
