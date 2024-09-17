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
      dots:true,
    },
    600: {
      dots:true,
      margin: 40,
      items: 1,
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
      items: 1,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
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
