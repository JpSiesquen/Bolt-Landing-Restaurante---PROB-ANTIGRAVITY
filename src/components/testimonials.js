const testimonials = [
  {
    name: 'María Quispe',
    role: 'Cliente habitual',
    text: 'Cada vez que vengo a La Huaca me siento en casa. El ceviche es el mejor que he probado en Lima — y eso que soy exigente pues. Los limones son fresquísimos y el ají limo está en su punto justo.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    stars: 5,
  },
  {
    name: 'Carlos Mendoza',
    role: 'Miraflores, Lima',
    text: 'Traje a mis amigos extranjeros y quedaron alucinados. El lomo saltado sabía exactamente como lo recuerdo de mi abuela. La atención es calidísima y el ambiente tiene ese toque especial que solo Lima sabe dar.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    stars: 5,
  },
  {
    name: 'Sofía Vargas',
    role: 'Food blogger',
    text: 'Llevo tres años escribiendo sobre gastronomía limeña y La Huaca siempre está en mi top. Los anticuchos de corazón son simplemente espectaculares. Esa sazón casera que ya no encuentras en cualquier lugar.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    stars: 5,
  },
]

function renderStars(count) {
  return Array(count).fill('<svg class="star" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')
}

export function renderTestimonials() {
  const cards = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-card__stars">${renderStars(t.stars)}</div>
      <blockquote class="testimonial-card__text">"${t.text}"</blockquote>
      <div class="testimonial-card__author">
        <img src="${t.avatar}" alt="${t.name}" class="testimonial-card__avatar"/>
        <div>
          <p class="testimonial-card__name">${t.name}</p>
          <p class="testimonial-card__role">${t.role}</p>
        </div>
      </div>
    </div>
  `).join('')

  return `
    <section class="testimonials" id="testimonios">
      <div class="testimonials__container">
        <div class="testimonials__header">
          <span class="section-tag section-tag--light">Testimonios</span>
          <h2 class="section-title section-title--light">Lo que dice<br/><em>nuestra gente</em></h2>
        </div>
        <div class="testimonials__grid">
          ${cards}
        </div>
        <div class="testimonials__deco">
          <span class="testimonials__quote">"</span>
        </div>
      </div>
    </section>
  `
}
