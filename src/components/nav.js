export function renderNav() {
  return `
    <nav class="nav" id="main-nav">
      <div class="nav__container">
        <a href="#inicio" class="nav__logo">
          <span class="nav__logo-icon">🌶</span>
          <span class="nav__logo-text">La Huaca</span>
        </a>
        <ul class="nav__links">
          <li><a href="#inicio" class="nav__link">Inicio</a></li>
          <li><a href="#nosotros" class="nav__link">Nosotros</a></li>
          <li><a href="#carta" class="nav__link">Carta</a></li>
          <li><a href="#testimonios" class="nav__link">Testimonios</a></li>
          <li><a href="#reservas" class="nav__link">Reservas</a></li>
        </ul>
        <a href="#reservas" class="nav__cta">Reservar mesa</a>
        <button class="nav__hamburger" id="hamburger" aria-label="Abrir menú">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="nav__mobile" id="mobile-menu">
        <ul class="nav__mobile-links">
          <li><a href="#inicio" class="nav__mobile-link">Inicio</a></li>
          <li><a href="#nosotros" class="nav__mobile-link">Nosotros</a></li>
          <li><a href="#carta" class="nav__mobile-link">Carta</a></li>
          <li><a href="#testimonios" class="nav__mobile-link">Testimonios</a></li>
          <li><a href="#reservas" class="nav__mobile-link">Reservas</a></li>
        </ul>
      </div>
    </nav>
  `
}
