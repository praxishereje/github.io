// Intro

let intro = document.querySelector(".intro");
let introLogo = document.querySelector(".introLogo");
let logoSpan = document.querySelectorAll(".logo-letter");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 100);
    });

    setTimeout(() => {
      logoSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (span + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

// Website links

// Scroll and show

const boxes = document.querySelectorAll(".grid-item");

window.addEventListener("scroll", checkBoxes);

checkBoxes(); // This runs the function as the first thing

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 10) * 9; // We will use a slightly smaller number than the current innerHeight, we can't use a fixed number because this height can change depending on the browser, zoom of the user and much more.

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top; // Returns a DomRect object (an object rectangle) providing information about the size of an element and its position relative to the viewport - thanks MDN.

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

/* Animated Nav Bar */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 120) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

const navNetwork = document.querySelector(".navNetwork");

window.addEventListener("scroll", fixNavNetwork);

function fixNavNetwork() {
  if (window.scrollY > nav.offsetHeight + 120) {
    navNetwork.classList.add("active");
  } else {
    navNetwork.classList.remove("active");
  }
}

const navNetwork2 = document.querySelector(".navNetwork2");

window.addEventListener("scroll", fixNavNetwork2);

function fixNavNetwork2() {
  if (window.scrollY > nav.offsetHeight + 120) {
    navNetwork2.classList.add("active");
  } else {
    navNetwork2.classList.remove("active");
  }
}

// Index Images

const openJoycescrito = function () {
  window.location.replace("01.joycescrito.html");
  return false;
};

const openApuntes = function () {
  window.location.replace("02.Apuntes.html");
  return false;
};

const openKurtz = function () {
  window.location.replace("03.Kurtz.html");
  return false;
};

const openPlural = function () {
  window.location.replace("04.Plural.html");
  return false;
};

const openNovacion = function () {
  window.location.replace("05.Novacion.html");
  return false;
};

const openSujeto = function () {
  window.location.replace("06.Sujeto.html");
  return false;
};

const openClinicas = function () {
  window.location.replace("07.Clinicas.html");
  return false;
};

const openPsicoanalista = function () {
  window.location.replace("08.Psicoanalista.html");
  return false;
};

const openHieronymus = function () {
  window.location.replace("09.Hieronymus.html");
  return false;
};

const openSinthomeOperador = function () {
  window.location.replace("10.SinthomeOperador.html");
  return false;
};

const openInvencion = function () {
  window.location.replace("11.Invencion.html");
  return false;
};

const openLogica = function () {
  window.location.replace("12.Logica.html");
  return false;
};

const openDeterminismo = function () {
  window.location.replace("13.Determinismo.html");
  return false;
};

const openHerejia = function () {
  window.location.replace("14.Herejia.html");
  return false;
};

const openHacerse = function () {
  window.location.replace("15.Hacerse.html");
  return false;
};

const openIncidencias = function () {
  window.location.replace("16.Incidencias.html");
  return false;
};

const openSUS = function () {
  window.location.replace("17.SUS.html");
  return false;
};

const openMuros = function () {
  window.location.replace("18.Muros.html");
  return false;
};

const openPractica = function () {
  window.location.replace("19.Practica.html");
  return false;
};

// BUTTON REGRESAR

const botonRegresar = function () {
  window.location.replace("index.html");
  return false;
};

//  MAGAZINE

const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 850}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
