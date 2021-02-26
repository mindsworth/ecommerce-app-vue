<template>
  <div class="form">
    <form @submit.prevent="handleOnSubmit" autocomplete="off">
      <h2 class="form__title">Good to see you again!</h2>
      <FormInput
        type="email"
        placeholder="Email"
        name="email"
        required
        v-model="email"
      />
      <FormInput
        type="password"
        placeholder="Password"
        name="password"
        required
        v-model="password"
      />

      <Button label="Login" type="submit" class="submit-btn" />
      <span class="or-text">Or</span>
      <Button label="Continue with Google" :icon="googleIcon" />
    </form>

    <p class="form__cta">
      Don't have an account?
      <router-link to="/signup">Sign up now.</router-link>
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "./Button.vue";
import FormInput from "./FormInput.vue";
import { socialIcons } from "../assets/index";

export default {
  name: "Login-Form",
  components: { FormInput, Button },
  setup() {
    const password = ref("");
    const email = ref("");
    const googleIcon = socialIcons.google;

    const handleOnSubmit = () => {
      console.log("value", password.value, email.value);
    };

    return { password, email, handleOnSubmit, googleIcon };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.form {
  padding: 0 10vw;
  text-align: center;

  &__title {
    margin-bottom: 3vw;
    text-align: left;
  }

  form {
    .or-text {
      margin: 1vw 0;
      display: inline-block;
      font-size: 0.7vw;
    }

    .submit-btn {
      &:hover {
        background-color: $color-primary;
        color: $color-white;
      }
    }
  }

  &__cta {
    text-align: left;
    margin-top: 2vw;
  }
}
</style>
