<template>
  <button class="btn">
    <img class="icon" v-if="icon" :src="icon" />{{ label }}
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
  cursor: pointer;
  font-size: 1vw;

  @include respond(phone) {
    height: 8vw;
    margin-bottom: 2vw;
  }

  &:hover {
    background-color: white;
    color: black;
  }

  & .icon {
    width: 3rem;
    vertical-align: middle;
    margin-right: 1rem;
  }

  .btn-txt {
    vertical-align: middle;
  }
}
</style>
