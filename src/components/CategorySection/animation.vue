<script>
import $ from "jquery";
import { gsap } from "gsap"; //Improve this import!!

function InitPreviewAnimation() {
  $(".category-list__item").each(function(index, el) {
    const thisId = el.id;

    const $thisPreviewImages = $(".preview__left, .preview__right").find(
      `img[id="${thisId}"]`
    );
    const $allImages = $(".preview__left img, .preview__right img");
    const $otherImages = $(".preview__left, .preview__right")
      .find("img")
      .not(`[id="${thisId}"]`);
    if (window.innerWidth > 1024) {
      $(el).on("mouseenter", () => {
        // $($otherImages).addClass(".mouseentered");
        gsap.set($allImages, {
          y: 100
        });
        gsap.to($thisPreviewImages, {
          opacity: 1,
          y: -30,
          ease: "Power1.easeOut",
          duration: 0.5
        });

        gsap.to($otherImages, {
          opacity: 0
        });
      });
    }
  });
}

export default InitPreviewAnimation;
</script>
