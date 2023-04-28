"use strict";

////////////////// Navigation Buttons //////////////////////

let homeBtn = document.querySelector("#home");
let aboutBtn = document.querySelector("#about");
let servicesBtn = document.querySelector("#services");
let workBtn = document.querySelector("#works");
let clientBtn = document.querySelector("#clients");
let blogBtn = document.querySelector("#blog");
let contactBtn = document.querySelector("#contact");

////////////////// Navigation SECTIONS //////////////////////
const abouteMeSection = document.querySelector(".aboute-me");
const servicesSection = document.querySelector(".services");
const poertfolioSection = document.querySelector(".portfolio");
const testemonialSection = document.querySelector(".testemonial");
const blogSection = document.querySelector(".blog-container");
const contactSection = document.querySelector(".contact-us");

////////////////////////////////////////////////////////////
// const PutBorderAboutBtn = function () {
//   aboutBtn.style.borderBottom = "2px solid white";
// };

// const removeBorderAboutBtn = function () {
//   aboutBtn.style.borderBottom = "";
// };

// const removeBorderServiceBtn = function () {
//   servicesBtn.style.borderBottom = "";
// };

////////////// Scroll Event ///////////////////

homeBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  homeBtn.style.borderBottom = "2px solid white";
});

///////////////////////////////////////////////
aboutBtn.addEventListener("click", function () {
  abouteMeSection.scrollIntoView({ behavior: "smooth" });
  aboutBtn.style.borderBottom = "none";
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 700) {
    aboutBtn.style.borderBottom = "2px solid white";
  } else aboutBtn.style.borderBottom = "none";
});

///////////////////////////////////////////////
servicesBtn.addEventListener("click", function () {
  servicesSection.scrollIntoView({ behavior: "smooth" });
  servicesBtn.style.borderBottom = "2px solid white";
  aboutBtn.style.borderBottom = "none";
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 1400) {
    servicesBtn.style.borderBottom = "2px solid white";
    aboutBtn.style.borderBottom = "none";
  } else {
    servicesBtn.style.borderBottom = "none";
  }
});

////////////////////////////////////////////////

workBtn.addEventListener("click", function () {
  poertfolioSection.scrollIntoView({ behavior: "smooth" });
  workBtn.style.borderBottom = "2px solid white";
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 2350) {
    workBtn.style.borderBottom = "2px solid white";
    aboutBtn.style.borderBottom = "none";
    servicesBtn.style.borderBottom = "none";
  } else {
    workBtn.style.borderBottom = "none";
  }
});

////////////////////////////////////////////////

clientBtn.addEventListener("click", function () {
  testemonialSection.scrollIntoView({ behavior: "smooth" });
  clientBtn.style.borderBottom = "2px solid white";
});

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= 3400) {
    clientBtn.style.borderBottom = "2px solid white";
    aboutBtn.style.borderBottom = "none";
    servicesBtn.style.borderBottom = "none";
    workBtn.style.borderBottom = "none";
  } else {
    clientBtn.style.borderBottom = "none";
  }
});

////////////////////////////////////////////////

blogBtn.addEventListener("click", function () {
  blogSection.scrollIntoView({ behavior: "smooth" });
  blogBtn.style.borderBottom = "2px solid white";
});

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= 4150) {
    blogBtn.style.borderBottom = "2px solid white";
    aboutBtn.style.borderBottom = "none";
    servicesBtn.style.borderBottom = "none";
    workBtn.style.borderBottom = "none";
    clientBtn.style.borderBottom = "none";
  } else {
    blogBtn.style.borderBottom = "none";
  }
});

////////////////////////////////////////////////

contactBtn.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
  contactBtn.style.borderBottom = "2px solid white";
});

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= 4800) {
    contactBtn.style.borderBottom = "2px solid white";
    aboutBtn.style.borderBottom = "none";
    servicesBtn.style.borderBottom = "none";
    workBtn.style.borderBottom = "none";
    clientBtn.style.borderBottom = "none";
    blogBtn.style.borderBottom = "none";
  } else {
    contactBtn.style.borderBottom = "none";
  }
});

//////////////////////////////////////////////////

///////////////////// NAVBAR /////////////////////
let navLink = document.querySelectorAll(".navbar span");
const swapCollorToBlack = function () {
  for (let x = 0; x < navLink.length; x++) {
    navLink[x].style.color = "black";
  }
};

const swapCollorToWhite = function () {
  for (let x = 0; x < navLink.length; x++) {
    navLink[x].style.color = "white";
  }
};

let navigation = document.querySelector(".navigation");
let logo = document.querySelector(".logo");
let navList = document.querySelector("#navbar");
let nav = document.querySelectorAll(".navbar li");
let navClose = document.querySelector(".close-menu");
let menuBtn = document.querySelector(".button-menu");

let openMenu = document
  .querySelector(".button-menu")
  .addEventListener("click", function () {
    menuBtn.classList.add("hidden");
    nav.classList.remove("hidden");
    navClose.classList.remove("hidden");
  });

let closeMenu = document
  .querySelector(".close-menu")
  .addEventListener("click", function () {
    menuBtn.classList.remove("hidden");
    nav.classList.add("hidden");
    navClose.classList.add("hidden");
  });

// BETTER PERFORMANCE

const head = document.querySelector(".head");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) head.classList.add("sticky");
  else navigation.classList.add("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
});

headerObserver.observe(head);

/////////////////// Animatted typing /////////////////////

const textDisplay = document.getElementById("text");
const phrases = ["I Am Milad Tavassoti", "I'm Developer", "I'm a Fast Learner"];
let i = 0;
let j = 0;
let currentPhrase = [""];
let isEnd = false;
let isDeleting = false;

function loop() {
  textDisplay.innerHTML = currentPhrase.join("");
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
    }

    if (j == phrases[i].length) {
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase.pop(phrases[i][j]);
      isDeleting = false;
      i++;
      if (i == phrases.length) {
        i = 0;
      }
    }
  }
  setTimeout(loop, 80);
}
loop();

///////////////// Portfolio //////////////////

// // animate divs on start
// var items = document.querySelectorAll(".portfolio-boxes div");
// animate(items);

// // filter on click
// each(".port-navigation form span", function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     filterLinks(el);
//   });
// });

// // filter links functions
// function filterLinks(element) {
//   // get text
//   var el = element.textContent,
//     // convert to lowercase
//     TolowerCase = el.toLowerCase();
//   // if all remove all elements
//   if (el === "All") {
//     // first show all view class
//     each(".view", function (e) {
//       e.classList.remove("view");
//     });
//     // no show init animation
//     animate(items);
//   } else {
//     // if not click all remove all elements
//     each(".view", function (e) {
//       e.classList.remove("view");
//     });
//   }
// }
// // show animation for current elements
// animate(document.querySelectorAll("." + TolowerCase));
// // forech arrays
// function each(el, callback) {
//   var allDivs = document.querySelectorAll(el),
//     alltoArr = Array.prototype.slice.call(allDivs);
//   Array.prototype.forEach.call(alltoArr, function (selectors, index) {
//     if (callback) return callback(selectors);
//   });
// }
// // animate function
// function animate(item) {
//   (function show(counters) {
//     setTimeout(function () {
//       item[counters].classList.add("view");
//       counters++;
//       if (counters < item.length) show(counters);
//     }, 50);
//   })(0);
// }

///////////////// My solution //////////////////

let allBtn = document.querySelector(".all-btn");
let brandBtn = document.querySelector(".brand-btn");
let designBtn = document.querySelector(".design-btn");
let graphicBtn = document.querySelector(".graphic-btn");

let boxes = document.querySelectorAll(".box-port .images");

let graphBox = document.querySelectorAll(".graph");
let designBox = document.querySelectorAll(".design");
let brandBox = document.querySelectorAll(".brand");

///////////// All Button /////////////

allBtn.addEventListener("click", function () {
  for (let x = 0; x < boxes.length; x++) {
    designBox[x].classList.add("unhide");
    graphBox[x].classList.add("unhide");
    brandBox[x].classList.add("unhide");

    allBtn.classList.add("active");
    designBtn.classList.remove("active");
    brandBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
  }
});

///////////// Brand Button /////////////

brandBtn.addEventListener("click", function () {
  for (let x = 0; x < boxes.length; x++) {
    if ((boxes[x].classList.contains = "brand")) {
      brandBox[x].classList.add("unhide");

      designBox[x].classList.add("hide");
      designBox[x].classList.remove("unhide");

      graphBox[x].classList.add("hide");
      graphBox[x].classList.remove("unhide");
      // designBox[x].style.display = "none";
      // graphBox[x].style.display = "none";

      brandBtn.classList.add("active");
      allBtn.classList.remove("active");
      designBtn.classList.remove("active");
      graphicBtn.classList.remove("active");
    }
  }
});

///////////// Design Button /////////////

designBtn.addEventListener("click", function () {
  for (let x = 0; x < designBox.length; x++) {
    if ((designBox[x].classList.contains = "design")) {
      designBox[x].classList.add("unhide");

      brandBox[x].classList.add("hide");
      brandBox[x].classList.remove("unhide");

      graphBox[x].classList.add("hide");
      graphBox[x].classList.remove("unhide");

      designBtn.classList.add("active");
      allBtn.classList.remove("active");
      graphicBtn.classList.remove("active");
      brandBtn.classList.remove("active");
    }
  }
});

///////////// Graphic Button /////////////

graphicBtn.addEventListener("click", function () {
  for (let x = 0; x < graphBox.length; x++) {
    if ((graphBox[x].classList.contains = "graph")) {
      graphBox[x].classList.add("unhide");

      brandBox[x].classList.add("hide");
      brandBox[x].classList.remove("unhide");

      designBox[x].classList.add("hide");
      designBox[x].classList.remove("unhide");

      graphicBtn.classList.add("active");
      allBtn.classList.remove("active");
      designBtn.classList.remove("active");
      brandBtn.classList.remove("active");
    }
  }
});

//////////////////// PREVIEW /////////////////////

///////////// Open and Close section /////////////
let closeBtn = document.querySelector(".button-close");
let showPreview = document.querySelectorAll(".show-preview");
let preview = document.querySelector(".preview");
let hidePreview = document.querySelector(".hidden-preview");

hidePreview.addEventListener("click", function () {
  // preview.classList.add("hidden-preview");
});

showPreview.forEach((showPreview) => {
  showPreview.addEventListener("click", function () {
    preview.classList.toggle("hidden-preview");
  });
});

closeBtn.addEventListener("click", function () {
  preview.classList.add("hidden-preview");
});

// preview.addEventListener("click", function () {
//   preview.classList.add("hidden-preview");
// });

////////////////// Slide Show Section ////////////////////

let slideIndex = 1;
showSlides(slideIndex[i]);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlides(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img-preview");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < dots.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let arrLeft = document.querySelector("arrow-left");
let arrRight = document.querySelector("arrow-right");

////////////////// Slide Show Testemonial ////////////////////

let testIndex = 1;
testSlides(testIndex);

function plusTestSlides(n) {
  testSlides((testIndex += n));
}
function currentScroll(n) {
  testSlides((testIndex += n));
}
function testSlides(n) {
  let i;
  let testSlide = document.getElementsByClassName("test-content");
  let testDots = document.getElementsByClassName("test-dot");
  if (n > testSlide.length) {
    testIndex = 1;
  }
  if (n < 1) {
    testIndex = testSlide.length;
  }
  for (i = 0; i < testSlide.length; i++) {
    testSlide[i].style.display = "none";
  }
  for (i = 0; i < testDots.lenght; i++) {
    testDots[i].className = testDots[i].replace(" active", "");
  }
  testSlide[testIndex - 1].style.display = "block";
  // testDots[testIndex - 1].className += " active";
}

setInterval(() => plusTestSlides(1), 5000);

/////////////////// Dragg scroll ///////////////////

////////////////// Slide Show Our blog ////////////////////

/////////////////// Animatted Counter ///////////////////

function animateValue(obj, start, end, duration) {
  let current = start;
  obj.innerHTML = current;
  const setIncrOut = () => {
    let time = Math.random() * 1000;

    setTimeout(function () {
      if (current < end) {
        current += 1;
        obj.innerHTML = current;
        setIncrOut(time);
      }
    });
  };
  setIncrOut();
}

document
  .querySelectorAll(".counter")
  .forEach((obj) => animateValue(obj, 0, 423));

// function currentTime() {
//   let date = new Date();
//   let hh = date.getHours();
//   let mm = date.getMinutes();
//   let ss = date.getSeconds();
//   let session = "AM";

//   if (hh == 0) {
//     hh = 12;
//   }
//   if (hh > 12) {
//     hh = hh - 12;
//     session = "PM";
//   }

//   hh = hh < 10 ? "0" + hh : hh;
//   mm = mm < 10 ? "0" + mm : mm;
//   ss = ss < 10 ? "0" + ss : ss;

//   let time = hh + ":" + mm + ":" + ss + " " + session;

//   document.getElementById("testemonial").innerText = time;
//   let t = setTimeout(function () {
//     currentTime();
//   }, 1000);
// }
// currentTime();

// Update Pannel in js
