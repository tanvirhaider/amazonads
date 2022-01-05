console.clear();

import $ from "cash-dom"; // loading a small lib to get some of the oldschool jquery shortcuts
import "../scss/style.scss"; // loading in the style
import { gsap } from "gsap"; // loading in the green sock library
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // loading in the green sock scroll trigger
import Media from "./Baymax.amazon.js"; // loading in the baymax audio player

gsap.registerPlugin(ScrollTrigger);

/* :::::::::: Code to update the percentage value :::::::::::: */
/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

function init() {
	/* :::: Code to run the initial animation on load  ::::::::::: */
	/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

	function initialAnimation() {
	var initAnimation = gsap.timeline();
	initAnimation.add(function () {
		document.querySelector(".wrapper").style.visibility = "visible";
	});


	// initAnimation.fromTo(
	//   ".hero img",
	//   { x: 500, scale: 0.5, alpha: 0, rotation: 30, y: 100 },
	//   { delay: 1, x: 0, scale: 1, alpha: 1, duration: 1, rotation: 0, y: 0 }
	// );


	initAnimation.fromTo(
		".hero .hero-img",
		{ x: 0, scale: 1, alpha: 0, rotation: 0, y: 0, backgroundPosition: "50% 2000%"},
		{ delay: .5, x: 0, scale: 1, alpha: 1, duration: 2, rotation: 0, y: 0 , backgroundPosition: "50% 50%", ease: "power3.inOut"}
	);


	initAnimation.fromTo(
		".hero .section-header",
		{ alpha: 0, y: 150 },
		{ alpha: 1, duration: 1, y: 0 },
		"-=0.15"
	);
	initAnimation.fromTo(
		".hero .devider-line",
		{ alpha: 0, y: 0, width: "0%" },
		{ alpha: 1, duration: 1, y: 0 , delay: 0.2, width: "calc(100% - 80px)"},
		"-=0.75"
	);
	initAnimation.fromTo(
		".how-to-share .copy-left",
		{ alpha: 0, x: -500 },
		{ alpha: 1, duration: 1, x: 0 },
		"-=0.75"
	);
	initAnimation.fromTo(
		".how-to-share .copy-right",
		{ alpha: 0, x: 500 },
		{ alpha: 1, duration: 1, x: 0 },
		"-=1"
	);
	}

	initialAnimation();

	function numberUpdater(triggerele, targetele, startnum, endnum) {
	var startCount = startnum;
	var num = { var: startCount };
	var val1 = document.querySelector(targetele);

	var numberUpdate1 = gsap.timeline({
		scrollTrigger: {
		trigger: triggerele,
		start: "top bottom-=20%",
		end: "+=50%",
		// scrub: 0.5,
		},
	});

	numberUpdate1.to(num, {
		var: endnum,
		duration: 1,
		ease: "none",
		onUpdate: changeNumber,
	});
	function changeNumber() {
		val1.innerHTML = num.var.toFixed();
	}
	}

	numberUpdater(".the-initial-idea .value", ".the-initial-idea .value", 0, 72);
	numberUpdater(
	".indeed-and-hillman .value",
	".indeed-and-hillman .value",
	0,
	60
	);
	numberUpdater(
	".the-best-connections .value",
	".the-best-connections .value",
	0,
	75
	);

	/* :::: Code to slide the larger section header images ::::::: */
	/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

	/*

	function largeImgSlide(data) {
	var largeImgSlide1 = gsap.timeline({
		scrollTrigger: {
		trigger: data.trigger,
		pinSpacing: false,
		scrub: 0.5,
		start: "top bottom+=10%",
		end: "+=100%",
		},
	});

	largeImgSlide1.fromTo(
		data.target,
		{
		x: data.xpos,
		scale: 0.5,
		alpha: 0,
		rotation: data.rotation,
		y: data.ypos,
		},
		{ x: 0, scale: 1, alpha: 1, duration: 1, rotation: 0, y: 0 }
	);
	}

	largeImgSlide({
	trigger: ".take-a-stand",
	target: ".take-a-stand img",
	xpos: 500,
	ypos: 100,
	rotation: 30,
	});


	largeImgSlide({
	trigger: ".meet-audiences",
	target: ".meet-audiences img",
	xpos: -500,
	ypos: 100,
	rotation: -30,
	});
	largeImgSlide({
	trigger: ".build-trust",
	target: ".build-trust img",
	xpos: 500,
	ypos: 100,
	rotation: 30,
	});

	*/

	var largeImgSlide1 = gsap.timeline({
	scrollTrigger: {
		trigger: ".take-a-stand",
		pinSpacing: false,
		scrub: 0.5,
		start: "top bottom+=10%",
		end: "+=150%",
	},
	});


	largeImgSlide1.fromTo(
	".take-a-stand .hero-img",
	{ x: 0, alpha: 0, rotation: 0, y: 0, backgroundPosition: "50% 1000%"},
	{ delay: 0, x: 0, alpha: 1, duration: 2, rotation: 0, y: 0 , backgroundPosition: "50% 50%", ease: "power3.inOut"}
	);


	var largeImgSlide2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".meet-audiences",
		pinSpacing: false,
		scrub: 0.5,
		start: "top bottom+=10%",
		end: "+=150%",
	},
	});


	largeImgSlide2.fromTo(
	".meet-audiences .hero-img",
	{ x: 0, alpha: 0, rotation: 0, y: 0, backgroundPosition: "50% 1000%"},
	{ delay: 0, x: 0, alpha: 1, duration: 2, rotation: 0, y: 0 , backgroundPosition: "50% 50%", ease: "power3.inOut"}
	);

	var largeImgSlide3 = gsap.timeline({
	scrollTrigger: {
		trigger: ".build-trust",
		pinSpacing: false,
		scrub: 0.5,
		start: "top bottom+=10%",
		end: "+=150%",
	},
	});


	largeImgSlide3.fromTo(
	".build-trust .hero-img",
	{ x: 0, alpha: 0, rotation: 0, y: 0, backgroundPosition: "50% 1000%"},
	{ delay: 0, x: 0, alpha: 1, duration: 2, rotation: 0, y: 0 , backgroundPosition: "50% 50%", ease: "power3.inOut"}
	);






	/* ::::::::: Code to slide the audio talent images ::::::::::: */
	/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

	function talentImgSlide(data) {
	var talentImgSlide1 = gsap.timeline({
		scrollTrigger: {
		trigger: data.trigger,
		pinSpacing: false,
		scrub: 1,
		start: "top bottom+=20%",
		end: "+=100%",
		},
	});

	talentImgSlide1.fromTo(
		data.target,
		{ x: data.xpos, alpha: 0, rotation: data.rotationstart },
		{ x: 0, alpha: 1, duration: 1, rotation: data.rotationend }
	);
	}

	talentImgSlide({
	trigger: ".the-initial-idea .talent-pic",
	target: ".the-initial-idea .talent-pic img",
	xpos: 100,
	rotationstart: -3,
	rotationend: 3,
	});

	talentImgSlide({
	trigger: ".indeed-and-hillman .talent-pic",
	target: ".indeed-and-hillman .talent-pic img",
	xpos: -100,
	rotationstart: 3,
	rotationend: -3,
	});

	talentImgSlide({
	trigger: ".the-best-connections .talent-pic",
	target: ".the-best-connections .talent-pic img",
	xpos: 100,
	rotationstart: -3,
	rotationend: 3,
	});

	/* ::::::::: Code to set up Audio Players  ::::::::::::::::::: */
	/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

	window.Player1 = new Media({
	container: "player-1", // div ID of the video container
	type: "audio",
	playbutton: "https://storage.googleapis.com/nytpi/paidposts/2022/amazon/images/red-play.png", // this images needed to be hosted in google bucket
	pausebutton: "https://storage.googleapis.com/nytpi/paidposts/2022/amazon/images/red-pause.png", // this images needed to be hosted in google bucket
	id: "audio-1",
	mp3: "https://storage.googleapis.com/nytpi/paidposts/2022/amazon/audio/DeondrayGossfield-v2.mp3", // this mp3 file needed to be hosted in google bucket
	});

	window.Player2 = new Media({
	container: "player-2", // div ID of the video container
	type: "audio",
	playbutton: "https://storage.googleapis.com/nytpi/paidposts/2022/amazon/images/blue-play.png", // this images needed to be hosted in google bucket
	pausebutton: "https://storage.googleapis.com/nytpi/paidposts/2022/amazon/images/blue-pause.png", // this images needed to be hosted in google bucket
	id: "audio-2",
	mp3: "https://storage.googleapis.com/nytpi/paidposts/2022/amazon/audio/AdamKey.mp3", // this mp3 file needed to be hosted in google bucket
	});

	window.Player3 = new Media({
	container: "player-3", // div ID of the video container
	type: "audio",
	playbutton: "https://storage.googleapis.com/nytpi/paidposts/2022/amazon/images/pink-play.png", // this images needed to be hosted in google bucket
	pausebutton: "https://storage.googleapis.com/nytpi/paidposts/2022/amazon/images/pink-pause.png", // this images needed to be hosted in google bucket
	id: "audio-3",
	mp3: "https://storage.googleapis.com/nytpi/paidposts/2022/amazon/audio/VannGraves.mp3", // this mp3 file needed to be hosted in google bucket
	});


	document.querySelector(".logo").addEventListener("click",function(){
		window.open("https://advertising.amazon.com/library/guides/customer-values?ref_=cmpgn_sv_gd_nyt&utm_source=nyt&utm_medium=tbpp","_blank");
	})

	document.querySelector(".cta").addEventListener("click",function(){
		window.open("https://advertising.amazon.com/library/guides/customer-values?ref_=cmpgn_sv_gd_nyt&utm_source=nyt&utm_medium=tbpp","_blank");
	})


}

$(function () {
  init();
}); // init will run after DOM elements are loaded
