
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
