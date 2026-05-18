document.addEventListener("astro:before-swap", () => {
  document.documentElement.classList.add("is-transitioning")
})

document.addEventListener("astro:after-swap", () => {
  document.documentElement.classList.remove("is-transitioning")
})
