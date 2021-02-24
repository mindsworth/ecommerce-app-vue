<template>
  <div class="auth-page">
    <div class="auth-page__form-container">
      <div>
        <router-link to="/">
          <Logo class="nav-header__logo" />
        </router-link>
      </div>
      <div class="form-wrapper">
        <LoginForm />
      </div>
    </div>
    <div
      class="auth-page__hero"
      :style="{
        backgroundImage: `url(${bannerUrl})`,
        backgroundSize: 'cover'
      }"
    ></div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import { loginBanner } from "../assets/index";
import Logo from "../components/Logo.vue";

export default {
  name: "Login",
  components: { LoginForm, Logo },
  setup() {
    const bannerUrl = loginBanner;

    return {
      bannerUrl
    };
  }
};
</script>

<style lang="scss">
.auth-page {
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1.5fr;

  &__form-container {
    padding: 5vw;
    display: flex;
    flex-direction: column;

    .form-wrapper {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__hero {
  }
}
</style>
