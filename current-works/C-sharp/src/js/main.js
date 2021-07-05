// ОБРАБОТКА МОБИЛЬНОГО МЕНЮ

var menuToggle = document.querySelector('.menu-toggle'),
    navMob = document.querySelector('.nav-mob'),
    navMobOverl = document.querySelector('.nav-mob-overl');
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('open');
  navMob.classList.toggle('open');
  document.body.classList.toggle('scroll-hidden');
  navMobOverl.classList.toggle('open');
});
navMobOverl.addEventListener('click', menuClose);

function menuClose() {
  menuToggle.classList.remove('open');
  navMob.classList.remove('open');
  document.body.classList.remove('scroll-hidden');
  navMobOverl.classList.remove('open');
} //------------------------------------------------------------------------------