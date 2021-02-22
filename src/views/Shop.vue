<template>
  <div class="collection">
    <div class="side-filter">
      <ul>
        <li>
          <router-link :to="{ name: 'Collection' }">Everything</router-link>
        </li>

        <li v-for="{ category } in shopData" :key="category.id">
          <router-link :to="'/collection/' + category.toLowerCase()">
            {{ category }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="showcase">
      <div class="showcase__header">
        <h2 class="title">Collection</h2>
        <h3 class="subtitle">
          {{ filter }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import SHOP_DATA from "../assets/shop.data";

export default {
  name: "Shop Collection",
  props: ["categoryName"],
  setup(props) {
    const shopData = SHOP_DATA;
    const filter = computed(() => {
      const isFilterValid = Boolean(
        shopData.find(
          ({ category }) => category.toLowerCase() === props.categoryName
        )
      );

      return !props.categoryName
        ? "Everything"
        : isFilterValid
        ? props.categoryName
        : null;
    });

    return { shopData, filter };
  }
};
</script>

<style lang="scss">
.collection {
  display: flex;
  border: 1px solid red;
  width: 100vw;

  .side-filter {
    border: 1px solid #000;
  }
}
</style>
