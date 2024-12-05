function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/Avatar-lightMode.png")
    img.setAttribute("alt", "Icone João Gabriel Motta no modo light")
  } else {
    img.setAttribute("src", "assets/Avatar-darkMode.png")
    img.setAttribute("alt", "Icone João Gabriel Motta no modo escuro")
  }
}
