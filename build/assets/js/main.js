(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  const header=document.querySelector(".header"),headroom=new Headroom(header);headroom.init();GLightbox({selector:".glightbox"});AOS.init();

}));
//# sourceMappingURL=main.js.map
