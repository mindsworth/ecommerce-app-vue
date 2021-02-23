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
      <div class="showcase__body">
        <ProductCard
          v-for="item in filteredShopData"
          :key="item.id"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import SHOP_DATA from "../assets/shop.data";
import ProductCard from "../components/ProductCard";

export default {
  name: "Shop Collection",
  props: ["categoryName"],
  components: { ProductCard },
  setup(props) {
    const shopData = SHOP_DATA;
    const filteredShopData = computed(() => {
      return SHOP_DATA[0].items;
    });
    const filter = computed(() => {
      const isFilterValid = Boolean(
        shopData.find(
          ({ category }) => category.toLowerCase() === props.categoryName
        )
      );

      return !props.categoryName
        ? "everything"
        : isFilterValid
        ? props.categoryName
        : null;
    });

    return { shopData, filter, filteredShopData };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.collection {
  display: flex;
  width: 100vw;
  min-height: 100vh;

  .side-filter {
    display: flex;
    align-items: flex-start;
    width: 20vw;
    z-index: 1;
    padding-bottom: 5vw;

    ul {
      position: sticky;
      top: 20vh;
      width: 100%;
      margin-top: 40vh;

      li {
        padding: 0 5vw;
      }

      > li > a {
        font-family: "Cormorant", serif;
        font-size: 1.8vw;
        line-height: 1.2;
        color: $color-text-primary;
        z-index: 1;

        &:hover {
          font-style: italic;
        }

        @include respond(phone) {
          font-size: 11.4vw;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .showcase {
    flex: 1;

    &__header {
      margin: 5vw 0 10vw;

      .title {
        margin-bottom: 3vw;
      }

      .subtitle {
        text-transform: capitalize;
      }
    }
  }
}
</style>
