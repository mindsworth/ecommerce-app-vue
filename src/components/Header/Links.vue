<template>
  <router-link to="/" @mouseover="$emit('onHover', 'first')">
    Home
  </router-link>
  <router-link :to="{ name: 'Shop' }" @mouseover="$emit('onHover', 'second')">
    Collection
  </router-link>
  <a @mouseover="$emit('onHover', 'third')">
    About
  </a>
  <router-link :to="{ name: 'Login' }" @mouseover="$emit('onHover', 'fourth')"
    >Login</router-link
  >
</template>
<script>
export default {
  emits: ["onHover"]
};
</script>
