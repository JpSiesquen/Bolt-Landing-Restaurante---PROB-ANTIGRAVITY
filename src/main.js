import './style.css'
import './components.css'
import { renderNav } from './components/nav.js'
import { renderHero } from './components/hero.js'
import { renderAbout } from './components/about.js'
import { renderDishes } from './components/dishes.js'
import { renderTestimonials } from './components/testimonials.js'
import { renderContact } from './components/contact.js'
import { renderFooter } from './components/footer.js'
import { initCarousel } from './carousel.js'
import { initNav } from './nav.js'
import { initContactForm } from './contact.js'

document.querySelector('#app').innerHTML = `
  ${renderNav()}
  <main>
    ${renderHero()}
    ${renderAbout()}
    ${renderDishes()}
    ${renderTestimonials()}
    ${renderContact()}
  </main>
  ${renderFooter()}
`

initNav()
initCarousel()
initContactForm()
