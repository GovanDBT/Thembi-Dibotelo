filterObjects("all");

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

const swiper = new Swiper ('.design-swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
   delay: 3000,
  },
  effect: 'coverflow',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  // Default parameters
  slidesPerView: 1,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 60
    }
  },
});

const swiper2 = new Swiper('.testimonial-swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
   delay: 8000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});



function filterObjects(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
  }
}

function addClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for(i = 0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i]) == -1){
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name ){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for(i = 0; i < arr2.length; i++){
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(" ");
}