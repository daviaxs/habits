const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  exercise: ["01-01", "01-02", "01-03", "01-04", "01-07", "01-09", "01-10", "01-11", "01-12", "01-13", "01-14", "01-15", "01-16", "01-17", "01-18"],
  hydrate: ["01-01", "01-04", "01-08"]
}

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