`

<div class="videoplayer" data-caption="video-player">
					<!--Video-->
					<video class="videoplayer__video">
						<source src="ps5.mp4" type="video/mp4" />
					</video>
					<!--Controls -->
					<div class="videoplayer__controls">
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
							<span class="timer__starttime">00:00</span>
							<!--Progress bar -->
							<div class="timer__progress">
								<input
									type="range"
									name="volume"
									id="range"
									class="timer__progress__range"
									min="0"
									max="100"
									step="1" />
								<span class="timer__progress__bar"></span>
								<span class="timer__progress__elapse"></span>
							</div>
							<span class="timer__endtime">01:39</span>
						</div>
						<!--Progress bar components -->
						<div class="mobile">
							<button class="mobile__menu__button">
								<i class="icon-Edit"></i>
							</button>
							<ul class="mobile__menu__buttons">
								<il class="mobile__menu__buttons__item">
                           <span class="mobile__menu__buttons__item__text">Forward</span>
                           <i class="mobile__menu__buttons__item__icon icon-forward-15-seconds"></i>
                        </il>
                        <il class="mobile__menu__buttons__item">
                           <span class="mobile__menu__buttons__item__text">Backward</span>
                           <i class="mobile__menu__buttons__item__icon icon-backward-15-seconds"></i>
                        </il>
                        <il class="mobile__menu__buttons__item">
                           <span class="mobile__menu__buttons__item__text">Picture in picture</span>
                           <i class="mobile__menu__buttons__item__icon icon-screenmirroring"></i>
                        </il>
							</ul>
						</div>
					</div>
				</div>
`
