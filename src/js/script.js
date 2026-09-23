console.log("it works");

$(".header__burger").click(function () {
  $(this).toggleClass("active");
  $(".header__menu").toggleClass("active");
  $("body").toggleClass("no-scroll");
});

$("#openModal").click(() => {
  $(".modal").addClass("active");
});
$(".modal__close, .modal").click(function (event) {
  if (event.target === this) {
    $(".modal").removeClass("active");
  }
});

function initFocusFix($slider) {
  function fixSlickFocus() {
    $slider.find(".slick-slide").each(function () {
      var $slide = $(this);
      var isHidden = $slide.attr("aria-hidden") === "true";

      if (isHidden) {
        $slide.find(":focus").blur();
        $slide
          .find("a, button, input, select, textarea, [tabindex]")
          .each(function () {
            if ($(this).data("orig-tabindex") === undefined) {
              $(this).data("orig-tabindex", $(this).attr("tabindex") || "0");
            }
            $(this).attr("tabindex", "-1");
          });
      } else {
        $slide
          .find("a, button, input, select, textarea, [tabindex]")
          .each(function () {
            var orig = $(this).data("orig-tabindex");
            $(this).attr("tabindex", orig === "0" ? null : orig);
          });
      }
    });
  }

  fixSlickFocus();

  $slider.on("beforeChange", function () {
    $(document.activeElement).blur();
  });

  $slider.on("afterChange", function () {
    fixSlickFocus();
  });
}

var $slider1 = $("#mySlider-1");
$slider1.slick({
  dots: true,
  autoplay: true,
  infinite: true,
});
initFocusFix($slider1);
