<script>
import { TimelineMax } from "gsap";

export function productCardAnimation() {
  let tl = new TimelineMax();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (window.innerWidth > 600) {
    tl.from(".product-card", 0.6, {
      opacity: 0,
      y: -80,
      stagger: 0.4
    });

    tl.play();
  }
}
export default {};
</script>
