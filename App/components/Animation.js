export default class Animation {
  constructor() {
    this.elements = {
      icons: document.querySelectorAll("button[data-icon]"),
    }

    this.#addEventListener()
  }

  scale(e) {
    e.currentTarget.style.transform = "scale(.8)"
  }

  resetScale(e) {
    e.currentTarget.style.transform = "scale(1)"
  }

  #addEventListener() {
    this.elements.icons.forEach((icon) => {
      icon.addEventListener("mousedown", this.scale.bind(this))
      icon.addEventListener("mouseup", this.resetScale.bind(this))
    })
  }
}
