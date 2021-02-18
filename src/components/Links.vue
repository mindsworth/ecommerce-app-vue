<template>
  <router-link to="/" @mouseover="$emit('onHover', 'first')">
    Home
  </router-link>
  <router-link to="/collection" @mouseover="$emit('onHover', 'second')">
    Collection
  </router-link>
  <a @mouseover="$emit('onHover', 'third')">
    About
  </a>
  <router-link to="/login" @mouseover="$emit('onHover', 'fourth')"
    >Login</router-link
  >
</template>
