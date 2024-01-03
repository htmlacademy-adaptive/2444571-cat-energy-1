const burgerBtn = document.querySelector('.header__burger-menu')
const headerMenuList  =document.querySelector('.header__menu-list')

burgerBtn.addEventListener('click', ()=>{
  if(headerMenuList.classList.contains('header__menu-list--closed')) {
    headerMenuList.classList.remove('header__menu-list--closed')
    headerMenuList.classList.add('header__menu-list--opened')
    burgerBtn.classList.remove('header__burger-menu--closed')
    burgerBtn.classList.add('header__burger-menu--opened')
  } else {
    headerMenuList.classList.remove('header__menu-list--opened')
    headerMenuList.classList.add('header__menu-list--closed')
    burgerBtn.classList.remove('header__burger-menu--opened')
    burgerBtn.classList.add('header__burger-menu--closed')
  }
})
