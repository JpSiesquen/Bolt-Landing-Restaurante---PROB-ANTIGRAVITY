export function renderAbout() {
  return `
    <section class="about" id="nosotros">
      <div class="about__container">
        <div class="about__images">
          <div class="about__img-main">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
              alt="Cocina peruana auténtica"
            />
          </div>
          <div class="about__img-secondary">
            <img
              src="https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
              alt="Mercado de ingredientes frescos"
            />
            <div class="about__badge-float">
              <span class="about__badge-icon">🏆</span>
              <span>Mejor restaurante<br/>limeño 2023</span>
            </div>
          </div>
        </div>
        <div class="about__content">
          <span class="section-tag">Nuestra historia</span>
          <h2 class="section-title">Tradición viva en<br/><em>cada plato</em></h2>
          <p class="about__text">
            La Huaca nació en el corazón de Miraflores hace más de 25 años, cuando la abuela Rosario
            decidió compartir sus recetas familiares con Lima entera. Hoy, su legado sigue vivo en
            cada ceviche que preparamos, en cada aderezo que molemos a mano y en el amor que ponemos
            en nuestra cocina.
          </p>
          <p class="about__text">
            Trabajamos directamente con productores locales de La Parada y el Mercado de Surquillo,
            asegurándonos de que cada ají, cada limón y cada pescado llegue fresco a tu mesa. Porque
            la buena cocina empieza antes del fogón.
          </p>
          <div class="about__pillars">
            <div class="about__pillar">
              <div class="about__pillar-icon">🌿</div>
              <h4>Ingredientes frescos</h4>
              <p>Del mercado a tu plato, todos los días</p>
            </div>
            <div class="about__pillar">
              <div class="about__pillar-icon">👨‍🍳</div>
              <h4>Cocina auténtica</h4>
              <p>Recetas de generación en generación</p>
            </div>
            <div class="about__pillar">
              <div class="about__pillar-icon">❤️</div>
              <h4>Tradición peruana</h4>
              <p>El alma del Perú en cada bocado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
