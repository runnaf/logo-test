function scrollsUp () {
  const scrollButton = document.querySelector('.arrow-up');

  if (scrollButton) {
    scrollButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    })
  }
}

export { scrollsUp };
