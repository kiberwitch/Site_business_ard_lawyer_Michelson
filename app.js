document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".slider", {
    direction: "vertical",
    speed: 2400,
    spaceBetween: 18,
    mousewheel: {
      sensitivity: 2.4,
    },
    navigation: {
      nextEl: ".swiper-button-down",
    },
  });
});
