<template>
  <div className="product-card">
    <div
      className="product-card__img"
      :style="{
        backgroundImage: `url(${data.imageUrl})`
      }"
    />
    <p className="product-card__category">{{ data.category }}</p>

    <div className="product-card__details">
      <p className="product-card__name">{{ data.name }}</p>
      <p className="product-card__price">{{ `$${data.price}` }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product-Card",
  props: ["data"],
  setup(props) {
    console.log(" props.data", props.data);
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.product-card {
  width: 100%;
  height: 20vw;
  cursor: pointer;

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
}
</style>
