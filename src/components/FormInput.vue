<template>
  <input class="form-input" autocomplete="off" v-model="message" />
</template>

<script>
import { computed } from "vue";
export default {
  name: "Form-Input",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const message = computed({
      get: () => props.modelValue,
      set: value => emit("update:modelValue", value)
    });

    return {
      message
    };
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
