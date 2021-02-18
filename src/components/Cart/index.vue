<template>
  <div className="cart">
    <img :src="cartUrl" alt="Cart Icon" class="cart__icon" />
    <div className="cart__count">
      <span className="item-count">120</span>
    </div>
  </div>
</template>

<script>
import { ShoppingIcon } from "../../assets/index";

export default {
  name: "Cart",
  setup() {
    const cartUrl = ShoppingIcon;

    return {
      cartUrl
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";

.cart {
  position: relative;

  &__icon {
    width: 1.8vw;
  }

  &__count {
    width: 1.5vw;
    height: 1.5vw;
    font-size: 0.8vw;
    border-radius: 50%;
    background-color: $color-primary;
    position: absolute;
    top: -0.9vw;
    right: -0.9vw;
    color: $color-white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
