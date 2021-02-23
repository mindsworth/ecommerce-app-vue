<template>
  <div className="product-card">
    <div
      className="product-card__img"
      :style="{
        backgroundImage: `url(${data.imageUrl})`
      }"
    />
    <div className="button-container"></div>
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

<style></style>
