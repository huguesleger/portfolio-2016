// Scroll-top section web

function Top() {
    $('.fa-angle-up').on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 1200);
        return false;
    });
};

//Initiat WOW JS
new WOW().init();



//-------------------contact-----------------//

function openContact() {
   if (window.matchMedia("(min-width: 900px)").matches) {
      document.getElementById("contact-me").style.width = "50%";
   } else {
  document.getElementById("contact-me").style.width = "100%";
 }
    document.getElementById("container").style.marginLeft = "50%";
    document.body.style.overflow = "hidden";
    document.getElementById("container").style.opacity = "0.5";
}

function closeContact() {
    document.getElementById("contact-me").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
    document.body.style.overflow = "visible";
    document.getElementById("container").style.opacity = "1";
}
