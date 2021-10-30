/* VANILLA JAVASCRIPT WAY

const HamburgerMenu =  document.querySelector('.hamburger');
const navList = document.querySelector('.navList');
const exitBtn = document.querySelector('.close')

HamburgerMenu.addEventListener('click', function toggleMenu(){
    navList.classList.add('active');
    navList.classList.remove('reverse_anim');
    exitBtn.classList.add('show');
})
exitBtn.addEventListener('click', function toggleMenu(){
    navList.classList.add('reverse_anim');
    navList.classList.remove('active');
    exitBtn.classList.remove('show');
})
*/

// JQUERY

$('.hamburger').on('click', () => {
$('.navList').addClass('active').removeClass('reverse_anim')
$('.close').addClass('show')
});
$('.close').on('click', () => {
$('.navList').removeClass('active')
$('.close').removeClass('show')
});
