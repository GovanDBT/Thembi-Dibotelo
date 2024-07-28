// Navigation bar collapsible
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible-expanded");
  })
);

// Auto type animation
var options = {
    strings: ["Websites", "Apps", "Mockups", "Logos"],
    typeSpeed: 150,
    backspeed: 150,
    loop: true
};
    
var typed = new Typed('.auto-type', options);

// Swiper carousel

var swiper = new Swiper(".design-swiper", {
      loop: true,
      autoplay: true,
      slidesPerView: 3,
      spaceBetween: 30,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

const swiper2 = new Swiper('.testimonial-swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
   delay: 9000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});

const swiper3 = new Swiper('.modal-swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});