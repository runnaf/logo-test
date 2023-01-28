export function addAdaptiveMenu () {
  const breakpoint = window.matchMedia(`(min-width:768px)`);
  
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      const headerNav = document.querySelector('.header-page__nav');
      headerNav.classList.remove('is-mobile')
    } else {
      return
    }
  }

  breakpointChecker();
}