document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-output', {
      strings: ["Hi there... Welcome! Your success starts here. We offer web development services.",],
      typeSpeed: 60,
      backSpeed: 60,
      loop: false
    });
  });
  
  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('open');
  }
  
