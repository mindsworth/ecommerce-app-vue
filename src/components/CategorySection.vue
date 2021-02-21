<template>
  <div class="category-section">
    <div class="container">
      <div className="title">Browse Collections</div>
      <div class="preview">
        <div class="preview__left">
          <img
            alt=""
            :src="imgChair.second"
            class="img__small"
            :style="{ left: '50%', top: '12%', opacity: '1' }"
            id="1"
          />
          <img
            alt=""
            :src="imgLight.third"
            class="img__large"
            :style="{
              top: '5%',
              right: '50%',
              transform: 'translateX(50%)',
              opacity: '0'
            }"
            id="2"
          />
          <img
            alt=""
            :src="imgSofa.first"
            class="img__large"
            :style="{ left: '45%', bottom: '10%', opacity: '0' }"
            id="3"
          />
          <img
            alt=""
            :src="imgSofa.second"
            class="img__large"
            :style="{ right: '45%', top: '-10%', opacity: '0' }"
            id="3"
          />
          <img
            alt=""
            :src="imgChair.third"
            class="img__small"
            :style="{ bottom: '20%', left: '20%', opacity: '1' }"
            id="1"
          />
          <img
            alt=""
            :src="imgStool.third"
            class="img__large"
            :style="{
              top: '5%',
              right: '50%',
              transform: 'translateX(50%)',
              opacity: '0'
            }"
            id="4"
          />
          <img
            alt=""
            :src="imgOtto.third"
            class="img__small"
            :style="{ bottom: '20%', left: '20%', opacity: '0' }"
            id="5"
          />
          <img
            alt=""
            :src="imgOtto.second"
            class="img__small"
            :style="{ left: '50%', top: '12%', opacity: '0' }"
            id="5"
          />
        </div>
        <div class="category-list">
          <div
            class="category-list__item"
            v-for="(item, index) in collection"
            :key="index"
          >
            <router-link to="/" @mouseover="handleHover(index + 1)">{{
              item
            }}</router-link>
          </div>
        </div>
        <div class="preview__right">
          <img
            alt=""
            :src="imgChair.first"
            class="img__large"
            :style="{
              top: '5%',
              right: '50%',
              transform: 'translateX(50%)',
              opacity: '1'
            }"
            id="1"
          />
          <img
            alt=""
            :src="imgLight.first"
            class="img__small"
            :style="{ bottom: '20%', right: '20%', opacity: '0' }"
          />
          <img
            alt=""
            :src="imgLight.second"
            class="img__small"
            :style="{ right: '50%', top: '12%', opacity: '0' }"
          />
          <img
            alt=""
            :src="imgSofa.third"
            class="img__large"
            :style="{ right: '35%', top: '10%', opacity: '0' }"
          />
          <img
            alt=""
            :src="imgStool.first"
            class="img__small"
            :style="{ bottom: '20%', right: '50%', opacity: '0' }"
          />
          <img
            alt=""
            :src="imgStool.second"
            class="img__small"
            :style="{ right: '20%', top: '12%', opacity: '0' }"
          />
          <img
            alt=""
            :src="imgOtto.first"
            class="img__large"
            :style="{
              top: '5%',
              right: '50%',
              transform: 'translateX(50%)',
              opacity: '0'
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  imgChair,
  imgSofa,
  imgLight,
  imgStool,
  imgOtto
} from "../assets/index";

export default {
  name: "Category-Section",
  setup() {
    const collection = ["chairs", "lights", "sofas", "stools", "ottomans"];
    const previewLeftUrl = ref();
    const previewRightUrl = ref();

    const handleHover = selectedId => {
      console.log("selectedId", selectedId);
    };

    return {
      collection,
      handleHover,
      previewLeftUrl,
      previewRightUrl,
      imgChair,
      imgSofa,
      imgLight,
      imgStool,
      imgOtto
    };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.category-section {
  height: 100vh;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
  }

  .preview {
    display: grid;
    grid-template-columns: 2fr 1.5fr 2fr;
    border: 1px solid red;
    width: 100%;

    align-items: center;

    .category-list {
      border: 1px solid #000;
      &__item a {
        display: block;
        text-align: center;
        text-transform: capitalize;
        color: $color-secondary;
        font-size: $font-size-large;
        font-weight: 400;
        font-family: "Cormorant", serif;
        text-decoration: none;

        &:not(:last-child) {
          margin-bottom: 0.4vw;
        }
        @include respond(desktop) {
          &:hover {
            font-style: italic;
          }
        }
      }
    }

    &__left,
    &__right {
      border: 1px solid #000;
      position: relative;
      height: 100%;
      z-index: -1;

      & > * {
        position: absolute;
      }

      .img__large {
        width: 45%;
        height: auto;
      }

      .img__small {
        width: 35%;
        height: auto;
      }
    }
  }
}
</style>
