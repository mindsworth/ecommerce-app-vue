<template>
  <section class="newsletter__section">
    <div class="container">
      <p class="title">newsletter</p>
      <h2 class="subtitle"><span>Subscribe</span> to get the latest updates</h2>

      <form action="" class="newsletter__form">
        <FormInput placeholder="Email" type="email" />
        <button>Subscribe</button>
      </form>
    </div>
  </section>
</template>

<script>
import FormInput from "./FormInput";

export default {
  components: { FormInput }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.newsletter__section {
  background-color: white;
  padding: 8vw;
  text-align: center;
  @include respond(phone) {
    padding: 12vw 8vw;
  }

  .subtitle {
    width: 60vw;
    margin: 2.4vw auto 0 auto;
    line-height: 110%;

    &::after {
      all: unset;
    }

    @include respond(phone) {
      width: unset;
    }
  }

  form {
    margin-top: 1.2vw;
  }

  input {
    width: 40%;
    margin: 2vw;
    font-size: 1.6vw;

    @include respond(phone) {
      width: 80%;
      margin: 6vw auto;
      display: block;
      font-size: $font-size-small-mobile;
    }
  }

  button {
    border: none;
    background-color: $color-primary;
    color: white;
    width: 14vw;
    height: 4vw;

    @include respond(phone) {
      width: 40vw;
      height: 10vw;
    }
  }
}
</style>
