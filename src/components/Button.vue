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
.btn {
  border: 1px solid #000;
}
</style>
