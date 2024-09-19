AOS.init({
  duration: 1200,
});

$(document).ready(function () {
  var faqOwl = $("#faqSlider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      600: {
        items: 1,
        dots: true,
        margin: 40,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });

  $(".sliderLeftBtn").click(function () {
    faqOwl.trigger("prev.owl.carousel");
  });

  $(".sliderRightBtn").click(function () {
    faqOwl.trigger("next.owl.carousel");
  });
});

$(document).ready(function () {
  let owl = $("#whyChooseSlider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });

  $(".sliderLeftBtn").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".sliderRightBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

$(document).ready(function () {
  let owl = $("#testimonialSlider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });

  $(".sliderLeftBtn").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".sliderRightBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

$("#zenviWorks").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  autoplay: true,
  autoplaySpeed: 1000,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});