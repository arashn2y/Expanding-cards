let panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () =>{
    let active = document.querySelector('.active')
    active.classList.remove('active')
    panel.classList.add('active')
  })
})