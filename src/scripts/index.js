$(document).ready(function () {
  setTimeout(function () {
    $(".slider__hand").css("visibility", "hidden");
  }, 7000);
  var inview = new Waypoint.Inview({
    element: $('.slider__hand_reviews'),
    entered: function (direction) {
      $('.slider__hand_reviews').css("display", "block");
      setTimeout(function () {
        $('.slider__hand_reviews').css("display", "none");
      }, 3000);
    },
  })
});