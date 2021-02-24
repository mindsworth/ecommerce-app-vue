<template>
  <form class="group" @submit.prevent="handleOnSubmit">
    <h2>Good to see you again!</h2>
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

    <Button label="Login" type="submit" />
    Or
    <Button label="Continue with Google" />
  </form>

  <p class="login__cta">
    Don't have an account? <router-link to="/signup">Sign up now.</router-link>
  </p>
</template>

<script>
import { ref } from "vue";
import Button from "./Button.vue";
import FormInput from "./FormInput.vue";

export default {
  name: "Login-Form",
  components: { FormInput, Button },
  setup() {
    const password = ref("");
    const email = ref("");

    const handleOnSubmit = () => {
      console.log("value", password.value, email.value);
    };

    return { password, email, handleOnSubmit };
  }
};
</script>
