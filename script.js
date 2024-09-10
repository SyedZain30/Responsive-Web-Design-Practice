let menu = document.querySelector('#menu-icon'); // Corrected selector
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};