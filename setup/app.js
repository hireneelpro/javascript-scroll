// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".links");
const menuIcon = document.querySelector(".menu-icon");
// menuIcon.addEventListener("click", function () {
//     navLinks.classList.toggle("show-links")
//     console.log('hello')
// })

const date = document.querySelector(".year");
date.innerHTML = new Date().getFullYear();

//  adding and removing  height
menuIcon.addEventListener("click", function () {
  const navlinksHeight = navLinks.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  // ==== when navlinksheights is zero add height to it and listene for any click event , when clicked set navlinkheight to zero again
  if (navlinksHeight === 0) {
    navLinks.style.height = `${linksHeight}px`;
    //   Move this eventlistener outside the if statement.
    navLinks.addEventListener("click", function () {
      navLinks.style.height = 0;
    });
  } else {
    navLinks.style.height = 0;
  }
});

//  scroll add event listner
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// scroll add eventlistner and other

const toplink = document.querySelector(".to-top");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 300) {
    toplink.classList.add("show-toplink");
  } else {
    toplink.classList.remove("show-toplink");
  }
});

// let position = element.offsetTop;
// window.scrollTo({
//   left: 0,
//   top: position,
// });
