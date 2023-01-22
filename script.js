const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists == true) {
    alert("Essa data ja existe!")
    return
  }
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
/*
const data = {
  estudar: ["01-01", "01-02", "01-07", "01-08", "01-10", "01-12"],
  treinar: ["01-01", "01-07"],
}
*/
nlwSetup.setData(data)
nlwSetup.load()
