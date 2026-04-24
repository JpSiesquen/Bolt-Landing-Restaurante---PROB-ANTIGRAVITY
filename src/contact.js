export function initContactForm() {
  const form = document.getElementById('contact-form')
  const success = document.getElementById('form-success')
  const submitBtn = document.getElementById('form-submit')

  if (!form) return

  const today = new Date().toISOString().split('T')[0]
  const fechaInput = document.getElementById('fecha')
  if (fechaInput) fechaInput.min = today

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const nombre = form.nombre.value.trim()
    const telefono = form.telefono.value.trim()
    const fecha = form.fecha.value
    const personas = form.personas.value

    if (!nombre || !telefono || !fecha || !personas) {
      shakeForm()
      return
    }

    submitBtn.disabled = true
    submitBtn.textContent = 'Enviando...'

    await new Promise(resolve => setTimeout(resolve, 1000))

    form.reset()
    submitBtn.style.display = 'none'
    success.style.display = 'flex'

    setTimeout(() => {
      success.style.display = 'none'
      submitBtn.style.display = 'block'
      submitBtn.disabled = false
      submitBtn.textContent = 'Confirmar reserva'
    }, 5000)
  })

  function shakeForm() {
    form.classList.add('form--shake')
    setTimeout(() => form.classList.remove('form--shake'), 600)
  }
}
