export function initCarousel() {
  const track = document.getElementById('carousel-track')
  const prevBtn = document.getElementById('carousel-prev')
  const nextBtn = document.getElementById('carousel-next')
  const dots = document.querySelectorAll('.carousel__dot')

  if (!track) return

  let currentIndex = 0
  let isAnimating = false
  let autoPlayTimer = null
  const VISIBLE = getVisibleCount()
  const total = dots.length

  function getVisibleCount() {
    if (window.innerWidth >= 1200) return 4
    if (window.innerWidth >= 900) return 3
    if (window.innerWidth >= 600) return 2
    return 1
  }

  function getMaxIndex() {
    return Math.max(0, total - getVisibleCount())
  }

  function goTo(index) {
    if (isAnimating) return
    isAnimating = true
    currentIndex = Math.max(0, Math.min(index, getMaxIndex()))

    const cardWidth = track.querySelector('.dish-card').offsetWidth + 24
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`

    dots.forEach((dot, i) => {
      dot.classList.toggle('carousel__dot--active', i === currentIndex)
    })

    setTimeout(() => { isAnimating = false }, 420)
  }

  function autoPlay() {
    autoPlayTimer = setInterval(() => {
      const next = currentIndex >= getMaxIndex() ? 0 : currentIndex + 1
      goTo(next)
    }, 3500)
  }

  function resetAutoPlay() {
    clearInterval(autoPlayTimer)
    autoPlay()
  }

  prevBtn.addEventListener('click', () => {
    goTo(currentIndex - 1)
    resetAutoPlay()
  })

  nextBtn.addEventListener('click', () => {
    goTo(currentIndex + 1)
    resetAutoPlay()
  })

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i)
      resetAutoPlay()
    })
  })

  let startX = 0
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX }, { passive: true })
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1)
      resetAutoPlay()
    }
  }, { passive: true })

  window.addEventListener('resize', () => { goTo(Math.min(currentIndex, getMaxIndex())) })

  autoPlay()
}
