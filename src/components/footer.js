export function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8861978878!2d-77.03269102394814!3d-12.121195088121527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b2af5cf3b5%3A0x5e12e8c2929c32f3!2sAv.%20La%20Mar%2C%20Miraflores%2015074!5e0!3m2!1ses!2spe!4v1710000000000!5m2!1ses!2spe"
          width="100%"
          height="320"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Ubicación La Huaca"
        ></iframe>
      </div>
      <div class="footer__main">
        <div class="footer__container">
          <div class="footer__brand">
            <a href="#inicio" class="footer__logo">
              <span class="footer__logo-icon">🌶</span>
              <span>La Huaca</span>
            </a>
            <p class="footer__tagline">Sabor peruano desde el corazón de Miraflores</p>
            <div class="footer__social">
              <a href="#" class="footer__social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" class="footer__social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" class="footer__social-link" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z"/></svg>
              </a>
              <a href="#" class="footer__social-link" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              </a>
            </div>
          </div>
          <div class="footer__col">
            <h4 class="footer__heading">Menú</h4>
            <ul class="footer__list">
              <li><a href="#carta">Entradas</a></li>
              <li><a href="#carta">Platos de fondo</a></li>
              <li><a href="#carta">Cebiches y tiraditos</a></li>
              <li><a href="#carta">Postres</a></li>
              <li><a href="#carta">Bebidas</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4 class="footer__heading">Restaurante</h4>
            <ul class="footer__list">
              <li><a href="#nosotros">Nuestra historia</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#reservas">Reservaciones</a></li>
              <li><a href="#">Eventos privados</a></li>
              <li><a href="#">Catering</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4 class="footer__heading">Contacto</h4>
            <ul class="footer__list footer__list--contact">
              <li>
                <span>📍</span>
                <span>Av. La Mar 740, Miraflores, Lima 15074</span>
              </li>
              <li>
                <span>📞</span>
                <a href="tel:+5114478890">+51 1 447-8890</a>
              </li>
              <li>
                <span>✉️</span>
                <a href="mailto:hola@lahuaca.pe">hola@lahuaca.pe</a>
              </li>
              <li>
                <span>🕐</span>
                <span>Lun–Dom: 12:00 – 22:30</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__bottom-container">
          <p>© 2024 La Huaca. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ en Lima, Perú</p>
        </div>
      </div>
    </footer>
  `
}
