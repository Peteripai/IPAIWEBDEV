document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-output', {
      strings: ["Hi, Your Success starts here ", "We offer Web Development services", "Web design","Occupy the web with us today!"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true
    });
  });
  
  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('open');
  }
  
