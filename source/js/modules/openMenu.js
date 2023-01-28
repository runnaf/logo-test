const headerNav = document.querySelector('.header-page__nav');

export function openMenu(){
  const btnOpenMenu = document.querySelector('.header-page__button');

  if (btnOpenMenu) {
    btnOpenMenu.addEventListener('click', ()=>{
      headerNav.classList.toggle('is-open')
    })
  }
};
