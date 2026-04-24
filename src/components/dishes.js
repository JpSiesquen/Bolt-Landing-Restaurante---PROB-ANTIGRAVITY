const dishes = [
  {
    name: 'Ceviche Clásico',
    desc: 'Pescado fresco marinado en limón, ají limo, cebolla morada y cilantro. El emblema de nuestra cocina.',
    price: 'S/. 42',
    tag: 'Estrella de la casa',
    img: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Lomo Saltado',
    desc: 'Jugoso lomo de res salteado con tomate, cebolla y ají amarillo. Servido con arroz y papas fritas.',
    price: 'S/. 52',
    tag: 'Favorito',
    img: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Pollo a la Brasa',
    desc: 'Pollo marinado en especias peruanas y asado lentamente. Acompañado de papas doradas y ensalada.',
    price: 'S/. 48',
    tag: 'Popular',
    img: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Arroz Chaufa',
    desc: 'Arroz salteado al wok con huevo, cebolla china, sillao y kion. La fusión chifa que enamoró Lima.',
    price: 'S/. 38',
    tag: '',
    img: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Papa a la Huancaína',
    desc: 'Papas amarillas bañadas en una cremosa salsa de ají amarillo y queso fresco. Entrada icónica peruana.',
    price: 'S/. 28',
    tag: '',
    img: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Ají de Gallina',
    desc: 'Pollo desmenuzado en salsa de ají amarillo, pan y nueces. Un clásico reconfortante de Lima.',
    price: 'S/. 44',
    tag: '',
    img: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Causa Limeña',
    desc: 'Capas de papa amarilla sazonada con ají amarillo, rellena de pollo o atún con mayonesa.',
    price: 'S/. 32',
    tag: '',
    img: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Anticuchos',
    desc: 'Corazón de res marinado en ají panca y especias, asado en parrilla. El sabor de las calles de Lima.',
    price: 'S/. 35',
    tag: 'Especial',
    img: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Rocoto Relleno',
    desc: 'Rocoto arequipeño relleno con carne molida, huevo y queso fundido. Intenso y aromático.',
    price: 'S/. 40',
    tag: '',
    img: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Tallarines Verdes',
    desc: 'Pasta bañada en una salsa cremosa de albahaca, espinaca y queso parmesano. Fusión italiana y peruana.',
    price: 'S/. 36',
    tag: '',
    img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Tiradito de Corvina',
    desc: 'Finas láminas de corvina en salsa amarilla con ají limo. Elegante y refrescante.',
    price: 'S/. 46',
    tag: 'Chef recomienda',
    img: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Seco de Cordero',
    desc: 'Tierno cordero estofado en chicha de jora, culantro y ají amarillo. Plato de norte chico.',
    price: 'S/. 54',
    tag: '',
    img: 'https://images.pexels.com/photos/3506983/pexels-photo-3506983.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
]

export function renderDishes() {
  const cards = dishes.map((d, i) => `
    <div class="dish-card" data-index="${i}">
      <div class="dish-card__img-wrap">
        <img src="${d.img}" alt="${d.name}" class="dish-card__img" loading="lazy"/>
        ${d.tag ? `<span class="dish-card__tag">${d.tag}</span>` : ''}
      </div>
      <div class="dish-card__body">
        <h3 class="dish-card__name">${d.name}</h3>
        <p class="dish-card__desc">${d.desc}</p>
        <div class="dish-card__footer">
          <span class="dish-card__price">${d.price}</span>
          <button class="dish-card__btn">Ordenar</button>
        </div>
      </div>
    </div>
  `).join('')

  return `
    <section class="dishes" id="carta">
      <div class="dishes__header">
        <span class="section-tag">Nuestra carta</span>
        <h2 class="section-title">Platos que conquistan<br/><em>el alma</em></h2>
        <p class="dishes__subtitle">Cada plato cuenta una historia de tierra, mar y tradición peruana</p>
      </div>
      <div class="carousel" id="carousel">
        <div class="carousel__track" id="carousel-track">
          ${cards}
        </div>
        <button class="carousel__btn carousel__btn--prev" id="carousel-prev" aria-label="Anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button class="carousel__btn carousel__btn--next" id="carousel-next" aria-label="Siguiente">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <div class="carousel__dots" id="carousel-dots">
          ${dishes.map((_, i) => `<button class="carousel__dot ${i === 0 ? 'carousel__dot--active' : ''}" data-index="${i}" aria-label="Ir a plato ${i + 1}"></button>`).join('')}
        </div>
      </div>
    </section>
  `
}
