const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('open');
})








