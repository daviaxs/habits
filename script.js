const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('.button-add')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('🔴 Dia já incluso 🔴')
    return  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('Habits_Storage_Save', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('Habits_Storage_Save')) || {}
nlwSetup.setData(data)
nlwSetup.load()

// sistema Switch
const html = document.documentElement
const img = document.querySelector('#logo-habit')

function toggleMode() {
  html.classList.toggle("light")

  if(html.classList.contains("light")) {
    img.setAttribute("src", "utilities/svgs/logo-habits-light-theme.svg")
  } else {
    img.setAttribute("src", "./utilities/svgs/logo-habits.svg")
  }
}