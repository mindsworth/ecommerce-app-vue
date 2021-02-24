<template>
  <div class="auth-page">
    <div class="auth-page__form">
      <div>
        <router-link to="/">
          <Logo class="nav-header__logo" />
        </router-link>
      </div>
      <LoginForm />
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

  &__form {
    padding: 5vw;
    display: flex;
    flex-direction: column;
  }

  &__hero {
  }
}
</style>
