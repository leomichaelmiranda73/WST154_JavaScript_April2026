function toggleNav() {
    navbar.classList.toggle('open');
    navbarToggle.classList.toggle('open');
}

let navbar = document.getElementById("navbar")

let navbarToggle = document.getElementById('navbar-toggler')

navbarToggle.addEventListener('click', toggleNav)