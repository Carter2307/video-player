import getExtension from "../utils/getExtension"

import Navigation from "./Navigation"
import Volume from "./volume"
import Timer from "./Timer"

import Animation from "../components/Animation"

export default class MediaPlayer extends HTMLElement {
  constructor() {
	 super()
	 //this.shadow = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
	  this.show = 5000
	  this.timeOudId = 0
	 this.type = this.getAttribute("type")
	 this.src = this.getAttribute("src")

	 this.type === "video" ? this.setAttribute("class", "videoplayer") : this.setAttribute("class", "audioplayer")

	 this.#create(this.src, this.type)
	 this.scale = new Animation()
	 this.#addEventListener()
  }

  #getElemnts() {
	 this.elements = {
		 controlers : this.querySelector(".videoplayer__controls"),
		 mobile : {
			 menu : document.querySelector(".mobile__menu__buttons"),
			 button : document.querySelector(".mobile__menu__button")
		 },
		navigation: {
		  play: document.querySelector("[data-icon=\"icon-Play\"]"),
		  rwd: Array.from(document.querySelectorAll("[data-icon=\"icon-backward-15-seconds\"]")),
		  fwd: Array.from(document.querySelectorAll("[data-icon=\"icon-forward-15-seconds\"]")),
		},
		volume: {
		  button: document.querySelector("[data-icon=\"icon-volume-high\"]"),
		  range: document.querySelector(".controlers__volume__handler__range"),
		  track: document.querySelector(".controlers__volume__handler__elapse"),
		},
		timer: {
		  starttime: document.querySelector(".timer__starttime"),
		  endtime: document.querySelector(".timer__endtime"),
		  range: document.querySelector(".timer__progress__range"),
		  track: document.querySelector(".timer__progress__elapse"),
		},
		other: {
		  pnp: document.querySelector("[data-icon='icon-screenmirroring']"),
		  fullscreen: Array.from(document.querySelectorAll("[data-icon='icon-maximize-circle']")),
		},
	 }
  }

  #create(src, type) {
	 this.media = this.#createMedia(src, type)
	 this.media.setAttribute("playsinline", "")

	 this.#createControls()
	 this.#getElemnts()
	 this.#createNavigation()
	 this.#createVolume()
	 this.#createTimer()
  }

  #createMedia(src, type) {
	 let element
	 let ext = getExtension(src)
	 let source = document.createElement("source")

	 if (type === "audio") {
		element = document.createElement("audio")
		element.setAttribute("class", "audioplayer__audio")
		source.setAttribute("type", `audio/${ext}`)
	 } else if (type === "video") {
		element = document.createElement("video")
		element.setAttribute("class", "videoplayer__video")
		source.setAttribute("type", `video/${ext}`)
	 } else {
		console.error(`the type : ${type} provided is not support`)
		return null
	 }

	 if (element) {
		//element.setAttribute("class", "videoplayer__video")
		source.src = src
		element.append(source)
	 }

	 this.append(element)

	 return element
	 //this.shadow.append(element)
  }

  #createControls() {
	  let element = document.createElement("div")
	  // eslint-disable-next-line no-mixed-spaces-and-tabs
	 this.type === "audio" ? element.setAttribute("class", "audioplayer__controls") : element.setAttribute("class", "videoplayer__controls")
	 element.innerHTML = `
	 <!--Controlers -->
						<div class="controlers">
							<!--Volume -->
							<div class="controlers__volume">
								<!--Volume-icon -->
								<button class="controlers__volume__button" data-icon="icon-volume-high">
									<i class="icon-volume-high"></i>
								</button>
								<!--Volume input range  -->
								<div class="controlers__volume__handler">
									<input
										type="range"
										name="volume"
										id="range"
										class="controlers__volume__handler__range"
										min="0"
										max="10"
										step="1" />
									<span class="controlers__volume__handler__elapse"></span>
									<span class="controlers__volume__handler__bar"></span>
								</div>
							</div>
							<!--Navigation -->
							<div class="controlers__navigation">
								<button
									class="controlers__navigation__buttons"
									data-icon="icon-backward-15-seconds">
									<i class="icon-backward-15-seconds"></i>
								</button>
								<button class="controlers__navigation__buttons" data-icon="icon-Play">
									<i class="icon-Play"></i>
								</button>
								<button class="controlers__navigation__buttons" data-icon="icon-forward-15-seconds">
									<i class="icon-forward-15-seconds"></i>
								</button>
							</div>
							<!--other -->
							<div class="controlers__other">
								<button class="controlers__other__button" data-icon="icon-screenmirroring">
									<i class="icon-screenmirroring"></i>
								</button>
								<button class="controlers__other__button" data-icon="icon-maximize-circle">
									<i class="icon-maximize-circle"></i>
								</button>
							</div>
						</div>
						<!--Progress bar components -->
						<div class="timer">
							<span class="timer__starttime">00 : 00</span>
							<!--Progress bar -->
							<div class="timer__progress">
								<input
									type="range"
									name="volume"
									id="range"
									class="timer__progress__range"
									min="0"
									max="100"
									value="0"
									step="1" />
								<span class="timer__progress__bar"></span>
								<span class="timer__progress__elapse"></span>
							</div>
							<span class="timer__endtime">01 : 39</span>
						</div>
						<!--Progress bar components -->
						<div class="mobile">
							<button class="mobile__menu__button">
								<i class="icon-Edit"></i>
							</button>
							<ul class="mobile__menu__buttons">
								<il class="mobile__menu__buttons__item" data-icon="icon-forward-15-seconds">
									<span class="mobile__menu__buttons__item__text" ">Forward</span>
									<i class="mobile__menu__buttons__item__icon icon-forward-15-seconds"></i>
								</il>
								<il class="mobile__menu__buttons__item" data-icon="icon-backward-15-seconds">
									<span class="mobile__menu__buttons__item__text">Backward</span>
									<i class="mobile__menu__buttons__item__icon icon-backward-15-seconds"></i>
								</il>
								<il class="mobile__menu__buttons__item" data-icon="icon-maximize-circle">
									<span class="mobile__menu__buttons__item__text">Fullscreen</span>
									<i class="mobile__menu__buttons__item__icon icon-maximize-circle"></i>
								</il>
							</ul>
						</div>
`
	 this.append(element)
	 //this.shadow.append(element)
  }

  #createNavigation() {
	 this.navigation = new Navigation(
		this.elements.navigation.play,
		this.elements.navigation.rwd,
		this.elements.navigation.fwd,
		this.media
	 )
  }

  #createVolume() {
	 this.volume = new Volume(
		this.elements.volume.button,
		this.elements.volume.range,
		this.elements.volume.track,
		this.media
	 )
  }

  #createTimer() {
	 this.timer = new Timer(
		this.elements.timer.starttime,
		this.elements.timer.endtime,
		this.elements.timer.range,
		this.elements.timer.track,
		this.media
	 )
  }

  #onFullScreen(e) {
	  const btn = e.currentTarget
	  const icon = btn.querySelector("i")
	  this.#fullscreenHandler(btn, icon)
  }

  #fullscreenHandler(btn, icon) {
	  if (!document.fullscreenElement) {
		  btn.setAttribute("data-icon", "icon-minimize-circle")
		  icon.setAttribute("class", "icon-minimize-circle")
		  this.requestFullscreen({ navigationUI: "hide" })
	  } else {
		  btn.setAttribute("data-icon", "icon-maximize-circle")
		  icon.setAttribute("class", "icon-maximize-circle")
		  document.exitFullscreen()
	  }
  }

  #onPictureInPicture() {
	 this.media.requestPictureInPicture().then((picture) => {
		console.log("picture in picture" + picture)
	 })
  }

  #mobileHandler() {
	  this.elements.mobile.menu.classList.toggle("-isVisible")
}

#onMouseEnter () {
	if(this.timeOudId !== 0) clearTimeout(this.timeOudId)
	this.elements.controlers.classList.remove("-hidden")
}

#onMouseLeave () {
	setTimeout(() => {
		this.elements.controlers.classList.add("-hidden")
	},this.show)
  }

	#onMouseOver () {
	  if(this.event) console.log("true")
		setTimeout(() => {
			this.elements.controlers.classList.add("-hidden")
		},this.show)
	}

  #addEventListener() {
	  this.addEventListener("mouseenter", this.#onMouseEnter.bind(this))
	  this.addEventListener("mouseleave", this.#onMouseLeave.bind(this))
	  //this.addEventListener("mouseover", this.#onMouseOver.bind(this))

	 this.elements.other.fullscreen.forEach(button => {
		 button.addEventListener("click", this.#onFullScreen.bind(this))
	 })
	 this.elements.other.pnp.addEventListener("click", this.#onPictureInPicture.bind(this))
	  this.elements.mobile.button.addEventListener("click", this.#mobileHandler.bind(this))
  }



  disconnectedCallback() {}
}
