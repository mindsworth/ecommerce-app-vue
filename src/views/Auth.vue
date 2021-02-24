<template>
  <div class="auth-page">
    <div class="auth-page__form">
      <LoginForm />
    </div>
    <div class="auth-page__hero"></div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  components: { LoginForm }
};
</script>

<style lang="scss">
.auth-page {
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1.5fr;

  &__hero {
    border: 1px solid #000;
  }
}
</style>
