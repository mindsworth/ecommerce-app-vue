<template>
  <button class="btn">
    <span class="icon" v-if="icon">{{ icon }}</span
    >{{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["label", "icon"]
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.btn {
  outline: none;
  height: 2.8vw;
  width: 100%;
  border: 1px solid $color-black;
  background-color: transparent;
  color: $color-black;
  font-size: 1vw;

  @include respond(phone) {
    height: 8vw;
    margin-bottom: 2vw;
  }
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }

  & + .google-sign-in {
    margin: 1vw 0 0 0;
    color: $color-black;
    @include respond(phone) {
      margin: 3vw 0 0 0;
    }
    .container img {
      width: 1.2rem;
      vertical-align: middle;
      margin-right: 1rem;
    }
    .btn-txt {
      vertical-align: middle;
    }
  }
}
</style>
