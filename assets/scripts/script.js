// Active Link Consts
const enlaces = document.querySelectorAll("a");

//Active Link Color
window.addEventListener("DOMContentLoaded", activeLinkColor);

function activeLinkColor() {
  const enlaces = document.querySelectorAll("a");

  enlaces.forEach((enlace) => {
    const rutaEnlace = new URL(enlace.href).pathname;
    const rutaActual = window.location.pathname;

    if (rutaEnlace === rutaActual) {
        enlace.classList = "activeLink"
    } else {
      enlace.classList = "" 
    }
  });
}