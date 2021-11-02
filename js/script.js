let nav = document.querySelector('.navigation');
const burger = document.querySelector('.mobile-menue');
burger.addEventListener('click', function()
{
  nav.classList.toggle('navigation-active');
});
