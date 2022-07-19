jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // myswiper1
  const myswiper1 = new Swiper(".myswiper1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 2500,
    },
  });

  // myswiper2
  const myswiper2 = new Swiper(".myswiper2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
    },

    zoom: {},
  });
});
