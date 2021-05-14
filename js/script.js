/* ---------------------- Menubar Section Start ----------------------- */
/* ---------------------- Menubar Section Start ----------------------- */
/* ---------------------- Menubar Section Start ----------------------- */

const btn_burger = document.querySelector('.btn-burger'),
    navbar = document.querySelector('.navbar');

(function() {
    btn_burger && btn_burger.addEventListener("click", function() {
        navbar.classList.toggle("open"), btn_burger.classList.toggle("open")
    })
})();
/* ---------------------- Menubar Section End ----------------------- */
/* ---------------------- Menubar Section End ----------------------- */
/* ---------------------- Menubar Section End ----------------------- */


/* ---------------------- Slider Section Start ----------------------- */
/* ---------------------- Slider Section Start ----------------------- */
/* ---------------------- Slider Section Start ----------------------- */
"use strict";
(function() {
    new Swiper(".review_slider", {
        slidesPerView: 1,
        loop: !0,
        navigation: { nextEl: ".review_slider-next", prevEl: ".review_slider-prev" },
        grabCursor: !0,
        breakpoints: { 992: { slidesPerView: 3.2 } }
    })
})();
/* ---------------------- Slider Section End ----------------------- */
/* ---------------------- Slider Section End ----------------------- */
/* ---------------------- Slider Section End ----------------------- */