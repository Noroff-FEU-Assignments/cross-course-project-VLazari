let nav = document.querySelector('.navigation');
const burger = document.querySelector('.mobile-menue');
const a=15;
burger.addEventListener('click', function()
{
  nav.classList.toggle('navigation-active');
});
