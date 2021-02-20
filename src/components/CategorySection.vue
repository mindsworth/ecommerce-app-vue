<template>
  <div class="category-section">
    <div className="title">Browse Collections</div>
    <div class="preview">
      <div class="preview__left"></div>
      <div
        class="category-list"
        v-for="(item, index) in collection"
        :key="index"
      >
        <router-link to="/">{{ item }}</router-link>
      </div>
      <div class="preview__right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category-Section",
  setup() {
    const collection = ["chairs", "lights", "sofas", "stools", "ottomans"];

    return { collection };
  }
};
</script>

<style lang="scss">
.category-section {
  border: 1px solid red;
  height: 100vh;
}
</style>
