<script>
// import $ from "jquery";
import { gsap, TimelineMax } from "gsap"; //Improve this import!!

import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollTriggerAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // notice "resize" isn't in the list
  });

  let aboutSectionAnim = new TimelineMax();

  aboutSectionAnim
    .to(".banner-overlay__img", {
      scrollTrigger: {
        trigger: ".two-col-section.about",
        start: "-30% top",
        toggleActions: "play none none reset",
        scrub: 1
      },
      scale: 1,
      ease: "circ.out"
    })
    .to(".banner-overlay", {
      scrollTrigger: {
        trigger: ".two-col-section.about",
        start: "0% top",
        end: "60% 50%",
        toggleActions: "play none none reset",
        scrub: 3
      },
      y: 120,
      ease: "linear"
    });

  let ethosSectionAnim = new TimelineMax();

  ethosSectionAnim
    .to(".banner-overlay__img", {
      scrollTrigger: {
        trigger: ".two-col-section.ethos",
        start: "-30% top",
        toggleActions: "play none none reset",
        scrub: 1
      },
      scale: 1,
      ease: "circ.out"
    })
    .to(".banner-overlay", {
      scrollTrigger: {
        trigger: ".two-col-section.ethos",
        toggleActions: "play none none reset",
        scrub: 3
      },
      y: 120,
      ease: "linear"
    });
}
export default ScrollTriggerAnimations;
</script>
