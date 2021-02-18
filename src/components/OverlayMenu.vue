<template>
  <div class="overlay-menu">
    <div class="overlay-menu__left"></div>
    <div class="overlay-menu__right">
      <div class="right__header">
        <Logo />
      </div>
      Right Menu
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "Overlay-Menu",
  components: { Logo }
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
  background-color: $color-white;
  display: grid;
  grid-template-columns: 1.35fr 2fr;

  &__left {
  }

  &__right {
  }

  & .right__header {
    border: 1px solid #000;
    height: 6vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10vw;
  }
}
</style>
