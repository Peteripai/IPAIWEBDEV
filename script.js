document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-output', {
      strings: ["Hi there, Your Success starts here , we offer web development services ",],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true
    });
  });
  
  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('open');
  }
  
