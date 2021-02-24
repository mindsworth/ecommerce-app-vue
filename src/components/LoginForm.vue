<template>
  <form class="group" onSubmit="{this.handleSubmit}">
    <h2>Good to see you again!</h2>
    <FormInput type="email" placeholder="Email" name="email" required />
    <FormInput
      type="password"
      placeholder="Password"
      name="password"
      :value="value"
      required
    />

    <Button label="Login" />
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
    const value = ref(null);

    console.log("value", value.value);

    return { value };
  }
};
</script>
