export function initNav() {
  const nav = document.getElementById('main-nav')
  const hamburger = document.getElementById('hamburger')
  const mobileMenu = document.getElementById('mobile-menu')
  const mobileLinks = document.querySelectorAll('.nav__mobile-link')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled')
    } else {
      nav.classList.remove('nav--scrolled')
    }
  })

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('nav__hamburger--open')
    mobileMenu.classList.toggle('nav__mobile--open')
  })

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('nav__hamburger--open')
      mobileMenu.classList.remove('nav__mobile--open')
    })
  })
}
