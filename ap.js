const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('open');
})



// email validation
const form = document.getElementById('form');
const email = document.getElementById('email');
const text = document.getElementById('text-error');
    
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check() {
    if(email.value.match(pattern)) {
        text.style.display = "none"
    }else {
        text.style.display = "flex"
    }
}



