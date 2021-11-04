let nav = document.querySelector('.navigation');
let menue = document.querySelector('.fa-bars');
const burger = document.querySelector('.mobile-menue');
burger.addEventListener('click', function()
{
  nav.classList.toggle('navigation-active');
  menue.classList.toggle('fa-times');
});
