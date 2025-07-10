const btnTopo = document.querySelector(".btn-topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.style.opacity = "1";
    btnTopo.style.pointerEvents = "auto";
  } else {
    btnTopo.style.opacity = "0";
    btnTopo.style.pointerEvents = "none";
  }
});

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.nav-links a');

// Abre/fecha menu ao clicar no botão
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fecha menu ao clicar em qualquer link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
