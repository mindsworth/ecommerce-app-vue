<template>
  <router-link to="/" @mouseover="$emit('onHover', '1')">
    Home
  </router-link>
  <router-link to="/collection" @mouseover="$emit('onHover', '2')">
    Collection
  </router-link>
  <a @mouseover="$emit('onHover', '3')">
    About
  </a>
  <router-link to="/login" @mouseover="$emit('onHover', '4')"
    >Login</router-link
  >
</template>

<script>
export default {};
</script>
