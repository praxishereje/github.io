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

const openLearn = function () {
  window.open("learn.html");
};

const openTV = function () {
  window.open("leoTV.html");
  return false;
};

const openBridge = function () {
  window.open("https://wleo.io");
};

const openLeo = function () {
  window.open("https://leofinance.io");
};

const openCub = function () {
  window.open("https://cubdefi.com");
};

const openPolycub = function () {
  window.open("https://polycub.com");
};

// Scroll and show

const boxes = document.querySelectorAll(".box");

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

const texts = document.querySelectorAll(".containerText");

window.addEventListener("scroll", checkTexts);

checkTexts(); // This runs the function as the first thing

function checkTexts() {
  const triggerBottom = (window.innerHeight / 10) * 9; // We will use a slightly smaller number than the current innerHeight, we can't use a fixed number because this height can change depending on the browser, zoom of the user and much more.

  texts.forEach((text) => {
    const textTop = text.getBoundingClientRect().top; // Returns a DomRect object (an object rectangle) providing information about the size of an element and its position relative to the viewport - thanks MDN.

    if (textTop < triggerBottom) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
  });
}

const appbuttons = document.querySelectorAll(".appbutton");

window.addEventListener("scroll", checkButtons);

checkButtons(); // This runs the function as the first thing

function checkButtons() {
  const triggerBottom = (window.innerHeight / 10) * 9; // We will use a slightly smaller number than the current innerHeight, we can't use a fixed number because this height can change depending on the browser, zoom of the user and much more.

  appbuttons.forEach((appbutton) => {
    const buttonTop = appbutton.getBoundingClientRect().top; // Returns a DomRect object (an object rectangle) providing information about the size of an element and its position relative to the viewport - thanks MDN.

    if (buttonTop < triggerBottom) {
      appbutton.classList.add("show");
    }
  });
}

const backgrounds = document.querySelectorAll(".communityBackground");

window.addEventListener("scroll", checkBackgrounds);

checkBackgrounds(); // This runs the function as the first thing

function checkBackgrounds() {
  const triggerBottom = (window.innerHeight / 10) * 9; // We will use a slightly smaller number than the current innerHeight, we can't use a fixed number because this height can change depending on the browser, zoom of the user and much more.

  backgrounds.forEach((background) => {
    const backgroundTop = background.getBoundingClientRect().top; // Returns a DomRect object (an object rectangle) providing information about the size of an element and its position relative to the viewport - thanks MDN.

    if (backgroundTop < triggerBottom) {
      background.classList.add("show");
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

/* LEO TV */

// This week on Leo TV

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("activeShow");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("activeShow");
  });
}

/* Countdown AMA */

var deadlineAMA = new Date(Date.UTC(2022, 8, 23, 17, 0, 0, 0)).getTime();
var xAMA = setInterval(function () {
  var now = new Date().getTime();
  var t = deadlineAMA - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("countdownToAMA").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(xAMA);
    document.getElementById("countdownToAMA").innerHTML =
      "Show is Live right now!";
  }
}, 1000);

/* Countdown Cryptomiancs */

var deadlineCryptomaniacs = new Date(
  Date.UTC(2022, 8, 23, 15, 0, 0, 0)
).getTime();
var xCryptomaniacs = setInterval(function () {
  var now = new Date().getTime();
  var t = deadlineCryptomaniacs - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("countdownToCryptomaniacs").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(xCryptomaniacs);
    document.getElementById("countdownToCryptomaniacs").innerHTML =
      "Show is Live right now!";
  }
}, 1000);

/* Countdown Openshow */

var deadlineOpenshow = new Date(Date.UTC(2022, 9, 23, 15, 0, 0, 0)).getTime();
var xCryptomaniacs = setInterval(function () {
  var now = new Date().getTime();
  var t = deadlineOpenshow - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("countdownToOpenshow").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(xOpenshow);
    document.getElementById("countdownToOpenshow").innerHTML =
      "Show is Live right now!";
  }
}, 1000);

/* Countdown OpenSlot */

var deadlineOpenSlot = new Date(Date.UTC(2022, 11, 23, 15, 0, 0, 0)).getTime();
var xOpenSlot = setInterval(function () {
  var now = new Date().getTime();
  var t = deadlineOpenSlot - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("countdownToOpenSlot").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(xCryptoholics);
    document.getElementById("countdownToOpenSlot").innerHTML =
      "Show is Live right now!";
  }
}, 1000);

/* Catch up */

document.addEventListener("click", (e) => {
  let handle;
  if (e.target.matches(".handle")) {
    handle = e.target;
  } else {
    handle = e.target.closest(".handle");
  }
  if (handle != null) onHandleClick(handle);
});

const throttleProgressBar = throttle(() => {
  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);
}, 250);
window.addEventListener("resize", throttleProgressBar);

document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);

function calculateProgressBar(progressBar) {
  progressBar.innerHTML = "";
  const sliderCatcher = progressBar
    .closest(".row")
    .querySelector(".sliderCatcher");
  const itemCount = sliderCatcher.children.length;
  const itemsPerScreen = parseInt(
    getComputedStyle(sliderCatcher).getPropertyValue("--items-per-screen")
  );
  let sliderCatcherIndex = parseInt(
    getComputedStyle(sliderCatcher).getPropertyValue("--sliderCatcher-index")
  );
  const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

  if (sliderCatcherIndex >= progressBarItemCount) {
    sliderCatcher.style.setProperty(
      "--sliderCatcher-index",
      progressBarItemCount - 1
    );
    sliderCatcherIndex = progressBarItemCount - 1;
  }

  for (let i = 0; i < progressBarItemCount; i++) {
    const barItem = document.createElement("div");
    barItem.classList.add("progress-item");
    if (i === sliderCatcherIndex) {
      barItem.classList.add("active");
    }
    progressBar.append(barItem);
  }
}

function onHandleClick(handle) {
  const progressBar = handle.closest(".row").querySelector(".progress-bar");
  const sliderCatcher = handle
    .closest(".showContainer")
    .querySelector(".sliderCatcher");
  const sliderCatcherIndex = parseInt(
    getComputedStyle(sliderCatcher).getPropertyValue("--sliderCatcher-index")
  );
  const progressBarItemCount = progressBar.children.length;
  if (handle.classList.contains("left-handle")) {
    if (sliderCatcherIndex - 1 < 0) {
      sliderCatcher.style.setProperty(
        "--sliderCatcher-index",
        progressBarItemCount - 1
      );
      progressBar.children[sliderCatcherIndex].classList.remove("active");
      progressBar.children[progressBarItemCount - 1].classList.add("active");
    } else {
      sliderCatcher.style.setProperty(
        "--sliderCatcher-index",
        sliderCatcherIndex - 1
      );
      progressBar.children[sliderCatcherIndex].classList.remove("active");
      progressBar.children[sliderCatcherIndex - 1].classList.add("active");
    }
  }

  if (handle.classList.contains("right-handle")) {
    if (sliderCatcherIndex + 1 >= progressBarItemCount) {
      sliderCatcher.style.setProperty("--sliderCatcher-index", 0);
      progressBar.children[sliderCatcherIndex].classList.remove("active");
      progressBar.children[0].classList.add("active");
    } else {
      sliderCatcher.style.setProperty(
        "--sliderCatcher-index",
        sliderCatcherIndex + 1
      );
      progressBar.children[sliderCatcherIndex].classList.remove("active");
      progressBar.children[sliderCatcherIndex + 1].classList.add("active");
    }
  }
}

function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}

// Academy

document.addEventListener("click", (e) => {
  let academyHandle;
  if (e.target.matches(".academyHandle")) {
    academyHandle = e.target;
  } else {
    academyHandle = e.target.closest(".academyHandle");
  }
  if (academyHandle != null) academyOnHandleClick(academyHandle);
});

const academyThrottleProgressBar = academyThrottle(() => {
  document
    .querySelectorAll(".academyProgress-bar")
    .forEach(calculateAcademyProgressBar);
}, 250);
window.addEventListener("resize", academyThrottleProgressBar);

document
  .querySelectorAll(".academyProgress-bar")
  .forEach(calculateAcademyProgressBar);

function calculateAcademyProgressBar(academyProgressBar) {
  academyProgressBar.innerHTML = "";
  const academySlider = academyProgressBar
    .closest(".academyRow")
    .querySelector(".academySlider");
  const academyItemCount = academySlider.children.length;
  const academyItemsPerScreen = parseInt(
    getComputedStyle(academySlider).getPropertyValue("--items-per-screen")
  );
  let academySliderIndex = parseInt(
    getComputedStyle(academySlider).getPropertyValue("--academySlider-index")
  );
  const academyProgressBarItemCount = Math.ceil(
    academyItemCount / academyItemsPerScreen
  );

  if (academySliderIndex >= academyProgressBarItemCount) {
    academySlider.style.setProperty(
      "--academySlider-index",
      academyProgressBarItemCount - 1
    );
    academySliderIndex = academyProgressBarItemCount - 1;
  }

  for (let i = 0; i < academyProgressBarItemCount; i++) {
    const academyBarItem = document.createElement("div");
    academyBarItem.classList.add("academyProgress-item");
    if (i === academySliderIndex) {
      academyBarItem.classList.add("academyActive");
    }
    academyProgressBar.append(academyBarItem);
  }
}

function academyOnHandleClick(academyHandle) {
  const academyProgressBar = academyHandle
    .closest(".academyRow")
    .querySelector(".academyProgress-bar");
  const academySlider = academyHandle
    .closest(".academyContainer")
    .querySelector(".academySlider");
  const academySliderIndex = parseInt(
    getComputedStyle(academySlider).getPropertyValue("--academySlider-index")
  );
  const academyProgressBarItemCount = academyProgressBar.children.length;
  if (academyHandle.classList.contains("academyLeft-handle")) {
    if (academySliderIndex - 1 < 0) {
      academySlider.style.setProperty(
        "--academySlider-index",
        academyProgressBarItemCount - 1
      );
      academyProgressBar.children[academySliderIndex].classList.remove(
        "academyActive"
      );
      academyProgressBar.children[
        academyProgressBarItemCount - 1
      ].classList.add("academyActive");
    } else {
      academySlider.style.setProperty(
        "--academySlider-index",
        academySliderIndex - 1
      );
      academyProgressBar.children[academySliderIndex].classList.remove(
        "academyActive"
      );
      academyProgressBar.children[academySliderIndex - 1].classList.add(
        "academyActive"
      );
    }
  }

  if (academyHandle.classList.contains("academyRight-handle")) {
    if (academySliderIndex + 1 >= academyProgressBarItemCount) {
      academySlider.style.setProperty("--academySlider-index", 0);
      academyProgressBar.children[academySliderIndex].classList.remove(
        "academyActive"
      );
      academyProgressBar.children[0].classList.add("academyActive");
    } else {
      academySlider.style.setProperty(
        "--academySlider-index",
        academySliderIndex + 1
      );
      academyProgressBar.children[academySliderIndex].classList.remove(
        "academyActive"
      );
      academyProgressBar.children[academySliderIndex + 1].classList.add(
        "academyActive"
      );
    }
  }
}

function academyThrottle(academycb, delay = 1000) {
  let academyShouldWait = false;
  let academyWaitingArgs;
  const academyTimeoutFunc = () => {
    if (academyWaitingArgs == null) {
      academyShouldWait = false;
    } else {
      academycb(...academyWaitingArgs);
      academyWaitingArgs = null;
      setTimeout(academyTimeoutFunc, delay);
    }
  };

  return (...academyArgs) => {
    if (academyShouldWait) {
      academyWaitingArgs = academyArgs;
      return;
    }

    academycb(...academyArgs);
    academyShouldWait = true;
    setTimeout(academyTimeoutFunc, delay);
  };
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
