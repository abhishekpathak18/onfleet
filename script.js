const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamBurger.addEventListener("click", ()=>{
    hamBurger.classList.toggle("active2");
    navMenu.classList.toggle("active"); 
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamBurger.classList.remove("active2");
    navMenu.classList.remove("active");
}));

// bx slider
// $('.bxslider').bxSlider({
//     auto: true,
//     autoControls: true,
//     stopAutoOnClick: true,
//     pager: true,
//     slideWidth: 600
//   });


$(function(){
    $('.bxslider').bxSlider({
      mode: 'vertical',
      captions: true,
      slideWidth: 600,
      auto: true
    });
  });


