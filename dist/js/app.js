const toggle = document.querySelector('.open-close-container');
const navToggle = document.querySelector('.header__nav');


toggle.addEventListener('click',()=>{
   toggle.classList.toggle('active');
   navToggle.classList.toggle('menu-hustle');
})