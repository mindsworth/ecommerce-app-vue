<template>
  <router-view :key="$route.fullPath" v-slot="{ Component }">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      appear
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "App"
};
</script>
