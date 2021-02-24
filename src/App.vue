<template>
  <div id="app-inner">
    <main>
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./assets/styles/_variables.scss";
@import "./assets/styles/_global.scss";

#app-inner {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1 1 0;
    display: flex;
    align-items: stretch;
  }
}
</style>
