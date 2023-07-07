let search = document.querySelector('.search-box');


document.querySelector('#search-icon').onclick =() => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    navBarEl.classList.remove('active');
    user.classList.remove('active');
}

let header=document.querySelector('header');

window.addEventListener('scroll',() => {
    header.classList.toggle('shadow',window.scrollY > 0);
});

let cart =document.querySelector('.cart-box');

document.querySelector('#cart').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    navBarEl.classList.remove('active');
    user.classList.remove('active');
}

let user=document.querySelector('.user');

document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navBarEl.classList.remove('active');
}

let navBarEl = document.querySelector('.navbar');


document.querySelector('#menu-box').onclick =() => {
    navBarEl.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}
window.onscroll = () => {
    navBarEl.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}
