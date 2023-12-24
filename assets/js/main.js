/*=============== SHOW MENU ===============*/

/*=============== snow ===============*/
/*
    Landed by Yasin Burak KALKAN
    Yasin Burak Kalkan | Front-End Developer
    www.yasinkalkan.com
*/



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class 1
  this.scrolly >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
 const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section [id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu_a[href*=" + sectionId + "]"
      );
    if (scrolly > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== PARALLAX ===============*/
let parallax = new Rellax('.parallax')
/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__village', 1.2, {opacity:0, y: 100, delay: .1})
gsap.from('.home__pine', 1.2, {opacity:0, y: 100, delay: .3})
gsap.from('.home__mountain-2', 1.2, {opacity:0, x: 150, delay: .5})
gsap.from('.home__mountain-3', 1.2, {opacity:0, x: -150, delay: .6})
gsap.from('.home__mountain-1', 1.2, {opacity:0, y: 250, delay: .7})
gsap.from('.home__moon', 1.2, {opacity:0, y: 200, delay: .8})
gsap.from('.home__trineo', 1.2, {opacity:0, x: -200, delay: .8})
gsap.from('.home__title', 1.2, {opacity:0, y: -60, delay: 1})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.about__data, .celebrate__img',{origin:'right'})
sr.reveal('.about__img, .celebrate__data',{origin:'left'})
sr.reveal('.send__card', {interval: 100})
sr.reveal('.footer')