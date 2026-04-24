export function renderContact() {
  return `
    <section class="contact" id="reservas">
      <div class="contact__container">
        <div class="contact__info">
          <span class="section-tag">Reservas</span>
          <h2 class="section-title">Reserva tu<br/><em>mesa hoy</em></h2>
          <p class="contact__text">
            Asegura tu espacio y disfruta de una experiencia gastronómica única.
            Para grupos de más de 10 personas, contáctanos directamente por teléfono.
          </p>
          <div class="contact__details">
            <div class="contact__detail">
              <div class="contact__detail-icon">📍</div>
              <div>
                <strong>Dirección</strong>
                <p>Av. La Mar 740, Miraflores, Lima, Perú</p>
              </div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon">📞</div>
              <div>
                <strong>Teléfono</strong>
                <p>+51 1 447-8890</p>
              </div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon">🕐</div>
              <div>
                <strong>Horario</strong>
                <p>Lun – Dom: 12:00 pm – 10:30 pm</p>
              </div>
            </div>
          </div>
        </div>
        <div class="contact__form-wrap">
          <form class="contact__form" id="contact-form" novalidate>
            <div class="form__group">
              <label class="form__label" for="nombre">Nombre completo</label>
              <input
                class="form__input"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ej: Ana García"
                required
              />
            </div>
            <div class="form__group">
              <label class="form__label" for="telefono">Teléfono</label>
              <input
                class="form__input"
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Ej: +51 987 654 321"
                required
              />
            </div>
            <div class="form__row">
              <div class="form__group">
                <label class="form__label" for="fecha">Fecha</label>
                <input
                  class="form__input"
                  type="date"
                  id="fecha"
                  name="fecha"
                  required
                />
              </div>
              <div class="form__group">
                <label class="form__label" for="personas">Personas</label>
                <select class="form__input form__select" id="personas" name="personas" required>
                  <option value="">Seleccionar</option>
                  <option value="1">1 persona</option>
                  <option value="2">2 personas</option>
                  <option value="3-4">3–4 personas</option>
                  <option value="5-6">5–6 personas</option>
                  <option value="7-10">7–10 personas</option>
                </select>
              </div>
            </div>
            <div class="form__group">
              <label class="form__label" for="mensaje">Mensaje (opcional)</label>
              <textarea
                class="form__input form__textarea"
                id="mensaje"
                name="mensaje"
                placeholder="Alguna preferencia especial, alergia o motivo de celebración..."
                rows="4"
              ></textarea>
            </div>
            <button type="submit" class="btn btn--primary btn--full" id="form-submit">
              Confirmar reserva
            </button>
            <div class="form__success" id="form-success" style="display:none">
              <span class="form__success-icon">✓</span>
              <p>¡Reserva recibida! Te contactaremos pronto para confirmar.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  `
}
