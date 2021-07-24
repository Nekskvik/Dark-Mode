//GENERAL SELECTORS
let header = document.querySelector('header')
let footer = document.querySelector('footer')
let outerpages = document.querySelector('.outer')
let body = document.querySelector('body')
let mainMenu = document.querySelector('.main-nav')

//TOGGLE NAV
document.querySelector('.toggle-menu').addEventListener('click', () =>{
  mainMenu.classList.add('show')
})

document.querySelector('.close-menu').addEventListener('click', () =>{
  mainMenu.classList.remove('show')
}) 

//DARK MODE
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}
 
if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {

  darkMode = localStorage.getItem('darkMode'); 

  if (darkMode !== 'enabled') {
    enableDarkMode();

  } else {  
    disableDarkMode(); 
  }
});

//TOGGLE OUTER
document.getElementById('outer-pages').addEventListener('click', () => {
  outerpages.style.display = "block"
 // cursorCircle.style.zIndex = '500'
  //body.classList.toggle('overflow')
  showcaseAnimation()
})

document.getElementById('close-outer').addEventListener('click', () => {
  outerpages.style.display = "none"
  cursorCircle.style.zIndex = '2'
  body.classList.remove('overflow')
})

document.querySelector('a.closeouter').addEventListener('click', () => {
  outerpages.style.display = "none"
  mainMenu.classList.remove('show')
  cursorCircle.style.zIndex = '2'
 // body.classList.remove('overflow')
})

//intersection Observer
const aboutEventsSection = document.querySelector('.about-events')

const aboutEventsSectionOptions = {
  threshold: 0
}

const aboutEventsSectionObserver = new IntersectionObserver(function(entries, aboutEventsSectionObserver){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      apearingAnimation()
    }else{
      return
    }
  })
  
}, aboutEventsSectionOptions)

aboutEventsSectionObserver.observe(aboutEventsSection)


//APPEAR ON LOAD ANIMATION (OUTER)
function apearingAnimation(){
  let tl = gsap.timeline({duration: 1})

  tl.from("#firstText", {opacity: 0, x: '100%'})
    .from("#secondText", {opacity: 0, x: '-100%'}, "-=.45")
    .from("#thirdText", {opacity: 0, x: '100%'}, "-=.45")
    .from('.service', {x: '-100%', opacity: 0, stagger: '.05'})
}

function disappearAnimation(){
  let tl = gsap.timeline({duration: 1})

  tl.to("#firstText", {opacity: 0, x: '100%'})
    .to("#secondText", {opacity: 0, x: '-100%'})
    .to("#thirdText", {opacity: 0, x: '100%'})

}

function showcaseAnimation(){
  let tl = gsap.timeline({duration: 1})

  tl.from(".outer-main-title",{opacity: 0, scale: 0})
    .from(".showcase-text p",{opacity: 0, x: '-100%'}, "<")
    .from(".vertical-img img",{ease: 'power1.out', opacity: 0, scale: 0, duration: 1.3})
    .from(".horizontal-img img",{opacity: 0, scale: 0}, "-=.1")
    .from(".motivation h2",{opacity: 0, x: '100%'}, "-=.3")
}

//IMG THROUGHT TEXT ANIMATION
var myAnimation = new hoverEffect({

  parent: document.querySelector('.throught-text-img'),
  intensity: 0.5,
  image1: 'images/abstractImg.jpg',
  image2: 'images/abstractImgTwo.jpg',
  displacementImage: 'images/dis.png'

});

if (window.innerWidth > 1200) {
  //MOVING OBJECTS
  let imgThroghText = document.querySelector('.throught-text-img')
  let movingTitle = document.querySelector('.outer-main-title')
  let verticalShowcaseImg = document.querySelector('.vertical-img')
  let horizontalShowcaseImg = document.querySelector('.horizontal-img')

  //CUSTOMED CURSOR
  let cursor = {
    x: 0,
    y: 0
  }
  let cursorCircle = document.querySelector('.cursor')

  document.addEventListener('mousemove', (e) => {
    cursor.x = -e.clientX * .1
    cursor.y = -e.clientY * .1

    imgThroghText.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
    movingTitle.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`

    cursorCircle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  })

  document.addEventListener('mousemove', (e) => {
    cursor.x = -e.clientX * .12
    cursor.y = -e.clientY * .06

    verticalShowcaseImg.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
  })
  document.addEventListener('mousemove', (e) => {
    cursor.x = -e.clientX * .08
    cursor.y = -e.clientY * .1

    horizontalShowcaseImg.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
  })
}


//TEXT REVEAL ON LANDING

let textWrapper = document.querySelector('.tw-1')
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let textWrapper2 = document.querySelector('.tw-2')
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let textWrapper3 = document.querySelector('.tw-3')
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter bold'>$&</span>");

let textWrapper4 = document.querySelector('.tw-4')
textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter bold'>$&</span>");

let textWrapper5 = document.querySelector('.tw-5')
textWrapper5.innerHTML = textWrapper5.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let textWrapper6 = document.querySelector('.tw-6')
textWrapper6.innerHTML = textWrapper6.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let textWrapper7 = document.querySelector('.tw-7')
textWrapper7.innerHTML = textWrapper7.textContent.replace(/\S/g, "<span class='letter bold'>$&</span>");

let tl2 = gsap.timeline({duration: 1})

tl2.to('.tw-1 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '.03'})
   .to('.tw-2 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '.03'}, "-=.5")
   .to('.tw-3 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '.03'}, "-=.5")
   .to('.tw-4 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '.03'}, "-=.5")
   .to('.tw-5 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '.03'}, "-=.5")
   .to('.tw-6 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '.03'}, "-=.5")
   .to('.tw-7 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '.03'}, "-=.5")
   .to('.throught-text-img', {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: Back.easeOut.config(1.7), duration: 1.5}, "-=.8")
   