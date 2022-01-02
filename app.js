
//VANILLA JAVASCRIPT WAY

const HamburgerMenu =  document.querySelector('.hamburger');
const navList = document.querySelector('.navList');
const exitBtn = document.querySelector('.close');
const projectsBtn = document.querySelector('.projectBtn');
const contactBtn = document.querySelector('.contactBtn');


HamburgerMenu.addEventListener('click', function toggleMenu(){
    navList.classList.add('active');
    navList.classList.remove('reverse_anim');
    exitBtn.classList.add('show');
})
exitBtn.addEventListener('click', function toggleMenu(){
    navList.classList.remove('active');
    exitBtn.classList.remove('show');
})

projectsBtn.addEventListener('click', function(){
    navList.classList.remove('active');
})
contactBtn.addEventListener('click', function(){
    navList.classList.remove('active');
})
/*

// JQUERY

$('.hamburger').on('click', () => {
$('.navList').addClass('active').removeClass('reverse_anim')
$('.close').addClass('show')
});

$('.close').on('click', () => {
$('.navList').removeClass('active')
$('.close').removeClass('show')
});

$('.projectBtn').on('click', () => {
    $('.navList').removeClass('active')
    $('.close').removeClass('show')
})
$('.contactBtn').on('click', () => {
    $('.navList').removeClass('active')
    $('.close').removeClass('show')
})
*/
// ANIMATED LETTERS 
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1200
  });