<template>
  <div
    class="hamburger"
    :class="{ 'is-active': menuIsActive }"
    @click="animateMenu"
  >
    <span className="line"></span>
    <span className="line"></span>
    <span className="line"></span>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
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
.hamburger {
  z-index: 100;
  &:hover {
    cursor: pointer;
  }
  & .line {
    width: 2.2vw;
    height: 1px;
    background-color: black;
    display: block;

    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    &:nth-child(2) {
      margin: 0.6vw 0;
    }
  }
}

.hamburger.is-active .line:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active .line:nth-child(1) {
  transform: translateY(0.7vw) rotate(45deg);
}

.hamburger.is-active .line:nth-child(3) {
  transform: translateY(-0.7vw) rotate(-45deg);
}
</style>
