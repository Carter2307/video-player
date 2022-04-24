"use strict"

import MediaPlayer from "./classes/Mediaplayer"

class App {
  constructor() {
    this.init()
  }

  init() {
    customElements.define("media-player", MediaPlayer)
  }
}

new App()
