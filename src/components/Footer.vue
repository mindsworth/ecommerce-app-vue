<template>
  <footer class="footer">
    <div class="footer__col">
      <div class="footer__group">
        <Logo label="footer" />
        <div class="footer__socials">
          <a href="/#" class="footer__socials--link">
            <img
              :src="icons.facebook"
              alt="facebook"
              class="footer__socials--img"
            />
          </a>
          <a href="/#" class="footer__socials--link">
            <img
              :src="icons.instagram"
              alt="facebook"
              class="footer__socials--img"
            />
          </a>
          <a href="/#" class="footer__socials--link">
            <img
              :src="icons.pinterest"
              alt="facebook"
              class="footer__socials--img"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="footer__col">
      <div class="footer__group align-right">
        <router-link to="/" class="footer__group--title">shop</router-link>
        <router-link to="/" class="footer__group--link">Chairs</router-link>
        <router-link to="/" class="footer__group--link">Sofas</router-link>
        <router-link to="/" class="footer__group--link">stools</router-link>
        <router-link to="/" class="footer__group--link">lights</router-link>
        <router-link to="/" class="footer__group--link">Ottomans</router-link>
      </div>
      <div class="footer__group align-right">
        <router-link to="/" class="footer__group--title">Navigate</router-link>
        <router-link to="/" class="footer__group--link">Home</router-link>
        <router-link to="/" class="footer__group--link">Collection</router-link>
        <router-link to="/" class="footer__group--link">About</router-link>
        <router-link to="/" class="footer__group--link">Login</router-link>
      </div>
    </div>

    <div class="footer__col">
      <div class="footer__group align-right">
        <router-link to="/" class="footer__group--title">Company</router-link>
        <router-link to="/" class="footer__group--link">Press</router-link>
        <router-link to="/" class="footer__group--link">Affiliates</router-link>
      </div>
      <div class="footer__group align-right">
        <router-link to="/" class="footer__group--title">Help</router-link>
        <router-link to="/" class="footer__group--link">FAQs</router-link>
        <router-link to="/" class="footer__group--link">Contact us</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./Logo";
import { socialIcons } from "../assets/index";

export default {
  components: { Logo },
  setup() {
    const icons = socialIcons;

    return { icons };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.footer {
  background-color: $color-black;
  color: white;
  padding: 10vw 15%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @include respond(phone) {
    flex-direction: column;
  }
  &__logo {
    width: 12vw;
    @include respond(phone) {
      width: 26vw;
      margin: 0 auto;
    }
  }
  &__col {
    display: flex;
    flex-direction: row;

    &:not(:last-child) {
      margin-right: 4vw;
      @include respond(phone) {
        margin: 0 auto;
      }
    }

    &:not(:first-child) {
      margin-left: auto;
      @include respond(phone) {
        margin: 10vw auto 0 auto;
      }
    }

    @include respond(phone) {
      margin: 0 auto;
    }
  }

  &__group {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-right: 8vw;
    }
    &--title,
    &--link {
      font-size: $font-size-small;
      &:not(:last-child) {
        margin-bottom: 0.8vw;
      }

      @include respond(phone) {
        width: 5vw;
        font-size: $font-size-small-mobile;
      }
    }
    @include respond(phone) {
      min-width: 30vw;
      text-align: center;
    }

    &--title {
      color: $color-grey;
      text-transform: uppercase;
      font-weight: 600;
    }
    &--link {
      color: white;
      text-transform: capitalize;
    }

    & + .align-right {
      margin-left: auto;
    }
  }

  &__socials {
    align-items: center;
    margin-top: 2vw;
    justify-content: center;
    &--link {
      &:not(:last-child) {
        margin-right: 1vw;
      }
    }

    &--img {
      width: 1.8vw;
      height: auto;
      @include respond(phone) {
        width: 4vw;
      }
    }
  }
}
</style>
