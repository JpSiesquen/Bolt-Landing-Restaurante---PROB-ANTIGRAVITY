export function renderHero() {
  return `
    <section class="hero" id="inicio">
      <div class="hero__bg">
        <img
          src="https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Ceviche peruano auténtico"
          class="hero__img"
        />
        <div class="hero__overlay"></div>
      </div>
      <div class="hero__content">
        <span class="hero__badge">Lima, Perú · Desde 1998</span>
        <h1 class="hero__title">
          El auténtico<br/>
          <em>sabor del Perú</em>
        </h1>
        <p class="hero__subtitle">
          Ingredientes frescos de mercado, recetas de generación en generación<br class="hero__br"/>
          y el calor de Lima en cada bocado.
        </p>
        <div class="hero__actions">
          <a href="#carta" class="btn btn--primary">Ver carta</a>
          <a href="#reservas" class="btn btn--outline">Reservar mesa</a>
        </div>
        <div class="hero__stats">
          <div class="hero__stat">
            <span class="hero__stat-number">25+</span>
            <span class="hero__stat-label">Años de tradición</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-number">60+</span>
            <span class="hero__stat-label">Platos en carta</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-number">4.9</span>
            <span class="hero__stat-label">Calificación</span>
          </div>
        </div>
      </div>
      <div class="hero__scroll">
        <span>Descubre más</span>
        <div class="hero__scroll-arrow"></div>
      </div>
    </section>
  `
}
