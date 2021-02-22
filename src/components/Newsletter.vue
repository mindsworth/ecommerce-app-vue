<template>
  <section className="newsletter__section">
    <div class="container">
      <p className="title">newsletter</p>
      <h2 className="subtitle">
        <span>Subscribe</span> to get the latest updates
      </h2>

      <form action="" className="newsletter__form">
        <FormInput placeholder="Email" type="email" />
        <button>Subscribe</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
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

  .title {
    &__sub {
      width: 50vw;
      margin: 2.4vw auto 0 auto;
      line-height: 110%;

      &::after {
        all: unset;
      }

      @include respond(phone) {
        width: unset;
      }
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
