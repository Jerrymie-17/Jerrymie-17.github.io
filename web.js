const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function () {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark? 'light' : 'dark');
});


const hamburger = document.getElementById('hamBurger');
const mobileMenu = document.getElementById('mobileMenu');


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
});


const mobilelinks = mobileMenu.querySelectorAll('a');
mobilelinks.addEventListener('click', function(link) {
   link.addEventListener('click', function () {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open')
   });
});
