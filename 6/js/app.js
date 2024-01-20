const burgerBtn = document.querySelector('.header__burger-menu')
const headerMenuList  =document.querySelector('.header__menu-list')
const screenWidth = window.innerWidth

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

function currentPath () {
  const currentUrl = window.location.href
  const urlParts = currentUrl.split("/");
  const lastPart = urlParts[urlParts.length - 1];
  return lastPart
}

function addActiveLinkTablet () {
  const lastPart = currentPath()
  const element = document.querySelector(`a[href="${lastPart}"]`)
  const allElementsExceptLastPart = headerMenuList.querySelectorAll(`a:not([href="${lastPart}"])`)
  if (screenWidth >= 768) {
    element.classList.add('header__menu-link--active');
    allElementsExceptLastPart.forEach((aTag) => {
      aTag.classList.add('header__menu-link--down')
    })
  }
}


addActiveLinkTablet()


