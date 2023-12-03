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