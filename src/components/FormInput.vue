<template>
  <input
    type="type"
    placeholder="placeholder"
    name="name"
    class="form-input"
    autocomplete="off"
    v-model="inputValue"
  />
</template>

<script>
import { ref } from "vue";
export default {
  name: "Form-Input",
  props: ["handleChange", "value"],
  setup(props) {
    const inputValue = ref(props.value);

    return { inputValue };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.form-input {
  background: none;
  border: none;
  border-bottom: 1px solid $color-dark-grey;
  padding: 0.6em;
  color: $color-black;
  width: 100%;
  font-size: 1vw;
  margin-bottom: 3vw;

  @include respond(phone) {
    font-size: 3vw;
    margin-bottom: 8vw;
  }

  &:focus {
    outline: none;
  }
}
</style>
