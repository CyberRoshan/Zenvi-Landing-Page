$("#faqSlider").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
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
      nav: true,
    },
  },
});

$("#whyChooseSlider").owlCarousel({
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
      items: 2,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
});
