export default class Volume {
  constructor(button, range, track, media) {
    this.elements = { button, range, track }
    this.icon = this.elements.button.querySelector("i")
    this.media = media
    this.currentVolume = 0
    this.#init()
  }

  #init() {
    this.elements.track.style.width = `${this.elements.range.value * 10}%`
    this.#addEventListener()
  }

  #volumeButtonHandler() {
    if (this.elements.button.dataset.icon === "icon-volume-high") {
      this.elements.button.setAttribute("data-icon", "icon-volume-cross")
      this.icon.setAttribute("class", "icon-volume-cross")

      this.elements.range.value = 0
      this.elements.track.style.width = `${this.elements.range.value * 10}%`

      this.media.muted = true
    } else {
      this.elements.button.setAttribute("data-icon", "icon-volume-high")
      this.icon.setAttribute("class", "icon-volume-high")

      this.media.muted = false

      if (this.currentVolume === 0) {
        this.elements.range.value = this.elements.range.max / 2
        this.elements.track.style.width = `${this.elements.range.value * 10}%`
      } else {
        this.elements.range.value = this.currentVolume
        this.elements.track.style.width = `${this.elements.range.value * 10}%`
      }
    }
  }

  #onInput() {
    this.elements.track.style.width = `${this.elements.range.value * 10}%`
    this.media.volume = `${this.elements.range.value / 10}`

    this.currentVolume = this.elements.range.value

    if (this.elements.range.value / 10 <= 0) {
      this.elements.button.setAttribute("data-icon", "icon-volume-cross")
      this.icon.setAttribute("class", "icon-volume-cross")
    } else {
      this.elements.button.setAttribute("data-icon", "icon-volume-high")
      this.icon.setAttribute("class", "icon-volume-high")
    }
  }

  #addEventListener() {
    this.elements.button.addEventListener("click", this.#volumeButtonHandler.bind(this))
    this.elements.range.addEventListener("input", this.#onInput.bind(this))
  }
}
