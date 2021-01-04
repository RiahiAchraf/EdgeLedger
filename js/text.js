
const navbar = document.getElementById('navbar');

window.onscroll = function () {
    if(window.pageYOffset > 100) {
        navbar.classList.remove('top')
    } else {
        navbar.classList.add('top')
    }
};