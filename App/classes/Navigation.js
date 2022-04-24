export default class Navigation {
  constructor(play, rwd, fwd, media) {
    this.elements = { play, rwd, fwd }
    this.media = media
    this.icon = this.elements.play.querySelector("i")
    this.#addEventListener()
    this.intervalfwd = 15
    this.#init()
  }

  #init() {}

  #play() {
    if (this.elements.play.dataset.icon === "icon-Play") {
      this.elements.play.setAttribute("data-icon", "icon-pause")
      this.icon.setAttribute("class", "icon-pause")
      this.media.play()
    } else {
      this.elements.play.setAttribute("data-icon", "icon-Play")
      this.icon.setAttribute("class", "icon-Play")
      this.#pause()
    }
  }

  #pause() {
    this.media.pause()
  }

  #stop() {
    this.#pause()
    this.media.currentTime = 0
    this.elements.play.setAttribute("data-icon", "icon-Play")
    this.icon.setAttribute("class", "icon-Play")
  }

  #forward() {
    this.media.currentTime = this.media.currentTime + this.intervalfwd
  }

  #backward() {
    this.media.currentTime = this.media.currentTime - this.intervalfwd
  }

  #addEventListener() {
    this.elements.play.addEventListener("click", this.#play.bind(this))

    this.elements.fwd.addEventListener("click", this.#forward.bind(this))
    this.elements.rwd.addEventListener("click", this.#backward.bind(this))

    this.media.addEventListener("ended", this.#stop.bind(this))
  }
}
