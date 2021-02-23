<template>
  <div class="overlay-menu" ref="overlay">
    <div class="overlay-menu__left" ref="overlayLeft">
      <img
        :src="menuHeroImage"
        :key="menuHeroImage"
        alt="Menu Hero Image"
        class="menu-hero-image"
        ref="overlayLeftImage"
      />
    </div>

    <div class="overlay-menu__right" ref="overlayRight">
      <div class="right__header" ref="overlayRightHead">
        <Logo size="12" />
      </div>
      <div class="right__nav" ref="overlayRightLinks">
        <div class="right__nav__links">
          <Links @onHover="handleLinkHover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Links from "./Links";
import Logo from "../Logo";
import { menuImages } from "../../assets/index";
import { onMounted, ref, watchEffect } from "vue";
// import { useRoute } from "vue-router";
import { gsap } from "gsap";

export default {
  name: "Overlay-Menu",
  components: { Logo, Links },
  props: ["active"],
  setup(props) {
    // const route = useRoute();
    // const routePaths = {
    //   first: "Home",
    //   second: "Collection",
    //   third: "About",
    //   fourth: "Login"
    // };

    // const currentMenu = routePaths[route.name];
    const overlay = ref(null);
    const overlayLeft = ref(null);
    const overlayRight = ref(null);
    const overlayRightHead = ref(null);
    const overlayRightLinks = ref(null);
    const overlayLeftImage = ref(null);
    const menuHeroImage = ref(menuImages["first"]);
    const tl = new gsap.timeline({ reversed: true });

    const handleLinkHover = selected => {
      //   menuHeroImage.value = menuImages[selected];

      gsap.fromTo(
        overlayLeftImage.value,
        { attr: { src: menuImages[selected] }, autoAlpha: 0, duration: 1 },
        {
          attr: { src: menuImages[selected] },
          autoAlpha: 1,
          duration: 5,
          ease: "power4.out"
        }
      );
    };

    onMounted(() => {
      tl.to(overlay.value, {
        autoAlpha: 1,
        duration: 0.1
      })
        .to(overlayLeftImage.value, {
          autoAlpha: 1,
          duration: 0
        })
        .to(overlayLeft.value, {
          height: "100vh",
          ease: "power4.in"
        })
        .to(overlayRight.value, {
          height: "100%",
          ease: "power4.out"
        })
        .to(overlayRightHead.value, {
          autoAlpha: 1,
          duration: 0.2
        })
        .to(overlayRightLinks.value, {
          autoAlpha: 1,
          duration: 0.2
        });
    });

    watchEffect(() => {
      if (props.active && tl.reversed()) {
        tl.play();
      } else {
        tl.reverse();
      }
    });

    return {
      handleLinkHover,
      menuHeroImage,
      overlayLeft,
      overlay,
      overlayRight,
      overlayRightHead,
      overlayRightLinks,
      overlayLeftImage
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";

.overlay-menu {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1.35fr 2fr;
  visibility: hidden;
  z-index: 100;

  &__left {
    height: 0;
    background-color: $color-white;

    .menu-hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      visibility: hidden;
    }
  }

  &__right {
    height: 0%;
    background-color: $color-white;
    display: flex;
    flex-direction: column;
  }

  & .right__header {
    height: 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10vw;
    visibility: hidden;
  }

  & .right__nav {
    flex: 1 1;
    height: 100%;
    padding-left: 10vw;
    margin-top: -15vh;
    visibility: hidden;

    &__links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;

      a {
        color: $color-black;
        font-family: "Cormorant", serif;
        font-size: 4vw;
        font-weight: 200;
        cursor: pointer;
        width: fit-content;
        margin: 0;
      }

      a:hover {
        font-style: italic;
      }

      a.router-link-exact-active {
        font-weight: 300;
        color: unset;
      }
    }
  }
}
</style>
