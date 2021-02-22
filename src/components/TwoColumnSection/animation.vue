<script>
import $ from "jquery";
import { gsap, TimelineMax } from "gsap"; //Improve this import!!

import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollTriggerAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // notice "resize" isn't in the list
  });
  let headerAnim = new TimelineMax();

  headerAnim.to(".header", {
    scrollTrigger: {
      trigger: ".header",
      start: "25% top",
      toggleActions: "play none none reset"
    },
    backdropFilter: "blur(18px) "
  });

  let aboutSectionAnim = new TimelineMax();

  aboutSectionAnim
    .to(".img-2", {
      scrollTrigger: {
        trigger: ".section_about",
        start: "30% top",
        toggleActions: "play none none reset",
        scrub: 1
      },
      scale: 1,
      ease: "circ.out"
    })
    .to(".img-2__banner", {
      scrollTrigger: {
        trigger: ".section_about",
        start: "30% top",
        end: "60% 50%",
        toggleActions: "play none none reset",
        scrub: 3
      },
      y: 120,
      ease: "linear"
    });

  let ethosSectionAnim = new TimelineMax();

  ethosSectionAnim
    .to(".img-2", {
      scrollTrigger: {
        trigger: ".section__ethos",
        start: "-20% top",
        toggleActions: "play none none reset",
        scrub: 1
      },
      scale: 1,
      ease: "circ.out"
    })
    .to(".img-2__banner", {
      scrollTrigger: {
        trigger: ".section__ethos",
        toggleActions: "play none none reset",
        scrub: 3
      },
      y: 120,
      ease: "linear"
    });
}
export default ScrollTriggerAnimations;
</script>
