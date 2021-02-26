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

  $(".cart__icon").click(function() {
    const cart = $(".cart");
    const imgtodrag = $(this)
      .parent(".product-card")
      .find(".product-card__img")
      .eq(0);

    if (imgtodrag) {
      const imgclone = imgtodrag
        .clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        })
        .css({
          opacity: "0.8",
          position: "absolute",
          height: "150px",
          width: "150px",
          "z-index": "10000"
        })
        .appendTo($("body"))
        .animate(
          {
            top: cart.offset().top + 10,
            left: cart.offset().left + 10,
            width: 75,
            height: 75
          },
          500
        );

      imgclone.animate(
        {
          width: 0,
          height: 0
        },
        function() {
          $(this).detach();
        }
      );
    }
  });
}
export default {};
</script>
