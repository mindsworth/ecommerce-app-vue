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
        ? "everything"
        : isFilterValid
        ? props.categoryName
        : null;
    });

    return { shopData, filter };
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
    align-items: center;
    width: 20vw;

    ul {
      position: sticky;
      top: 15vh;
      width: 100%;

      li {
        padding: 0 5vw;
      }

      > li > a {
        font-family: "Cormorant", serif;
        font-size: 1.8vw;
        line-height: 1.2;
        color: $color-text-primary;

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
