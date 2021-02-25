<template>
  <div class="product-card">
    <div class="cart__icon">
      <img :src="cartUrl" alt="Cart Icon" />
    </div>
    <div
      class="product-card__img"
      :style="{
        backgroundImage: `url(${data.imageUrl})`
      }"
    />
    <p class="product-card__category">{{ data.category }}</p>

    <div class="product-card__details">
      <p class="product-card__name">{{ data.name }}</p>
      <p class="product-card__price">{{ `$${data.price}` }}</p>
    </div>
  </div>
</template>

<script>
import { ShoppingIcon } from "../assets/index";

export default {
  name: "Product-Card",
  props: ["data"],
  setup() {
    const cartUrl = ShoppingIcon;

    return {
      cartUrl
    };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.product-card {
  width: 100%;
  height: 20vw;

  &:hover .cart__icon {
    visibility: visible;
  }

  @include respond(phone) {
    height: 70vw;
  }

  @include respond(desktop) {
    &:hover {
      .product-card__img {
        opacity: 0.8;
      }
    }

    .button-container .custom-button {
      opacity: 1;
      bottom: 0;
    }
  }

  &__img {
    height: 15vw;
    background-size: cover;

    @include respond(phone) {
      height: 37vw;
    }
  }

  &__category {
    color: $color-dark-grey;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-top: 10%;
  }

  &__details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 6%;
    font-size: $font-size-medium;
    color: $color-text-primary;
    @include respond(phone) {
      font-size: $font-size-medium-mobile;
    }
  }

  &__name {
    font-family: "Cormorant", serif;
  }

  .cart__icon {
    background-color: $color-white;
    position: absolute;
    right: -1vw;
    bottom: 7vw;
    z-index: 9;
    cursor: pointer;
    visibility: hidden;
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
}
</style>
