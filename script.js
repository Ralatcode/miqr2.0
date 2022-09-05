// for mobile menu toogle
const menuToggle = document.querySelector('.hamburger-menu');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
    if (!menuOpen) {
        menuToggle.classList.add('open');
        menuOpen = true;
    } else {
        menuToggle.classList.remove('open');
        menuOpen = false;
    }
});