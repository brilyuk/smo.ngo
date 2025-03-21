const header = document.querySelector(".header");
const headroom = new Headroom(header);
headroom.init();


const lightbox = GLightbox({
  selector: ".glightbox",
});

AOS.init()
