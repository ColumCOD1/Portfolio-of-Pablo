const sidenav = () => {
    const menu = document.querySelector('.bar');
    const nav = document.querySelector('.menu');
    
    menu.addEventListener('click', () => {
       menu.classList.toggle('bar-active');
        nav.classList.toggle('nav-active');
    });
}
sidenav();
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};