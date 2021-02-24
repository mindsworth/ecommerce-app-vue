<script>
import $ from "jquery";
import gsap, { TimelineMax } from "gsap";

export function productCardAnimation() {
  let tl = new TimelineMax();

  if (window.innerWidth > 600) {
    $(".product-card").each((index, el) => {
      gsap.from(el, {
        duration: 0.6,
        opacity: 0,
        scale: 0,
        y: -80,
        stagger: 0.4
      });
    });

    tl.play();
  }
}
export default {};
</script>
