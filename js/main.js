

console.clear();

import '../scss/style.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Media from './Baymax.amazon.js';
import Observer from './util.observer.js';


gsap.registerPlugin(ScrollTrigger);


function numberUpdater (triggerele, targetele, startnum, endnum) {

	var startCount = startnum;
	var num = {var:startCount};
	var val1 = document.querySelector(targetele);

	var numberUpdate1 = gsap.timeline({
	scrollTrigger: {
		trigger: triggerele,
		start: "top bottom-=20%",
		end: '+=50%',
		scrub: 0.5, 
		}
	})

	numberUpdate1.to(num, {var: endnum, duration: 1, ease:"none", onUpdate:changeNumber});
	function changeNumber() { val1.innerHTML = (num.var).toFixed(); }

}

numberUpdater (".the-initial-idea .value",".the-initial-idea .value",0,72);
numberUpdater (".indeed-and-hillman .value",".indeed-and-hillman .value",0,60);
numberUpdater (".the-best-connections .value",".the-best-connections .value",0,75);



var largeImgSlide1 = gsap.timeline({
  scrollTrigger: {
     trigger: ".take-a-stand",
     pinSpacing: false,
   scrub:.5,
    start: "top bottom+=10%",
    end: '+=100%',
  },
})

largeImgSlide1.fromTo(".take-a-stand img", {x:500,scale:0.5,alpha:0,rotation:30,y:100},{x:0,scale:1,alpha:1,duration:1,rotation:0,y:0});


var largeImgSlide2 = gsap.timeline({
  scrollTrigger: {
     trigger: ".meet-audiences",
     pinSpacing: false,
   scrub:.5,
    start: "top bottom+=10%",
    end: '+=100%',
  },
})

largeImgSlide2.fromTo(".meet-audiences img", {x:-500,scale:0.5,alpha:0,rotation:-30,y:100},{x:0,scale:1,alpha:1,duration:1,rotation:0,y:0});


var largeImgSlide3 = gsap.timeline({
  scrollTrigger: {
     trigger: ".build-trust",
     pinSpacing: false,
   scrub:.5,
    start: "top bottom+=10%",
    end: '+=100%',
  },
})

largeImgSlide3.fromTo(".build-trust img", {x:500,scale:0.5,alpha:0,rotation:30,y:100},{x:0,scale:1,alpha:1,duration:1,rotation:0,y:0});



var talentImgSlide1 = gsap.timeline({
  scrollTrigger: {
     trigger: ".the-initial-idea .talent-pic",
     pinSpacing: false,
   scrub:1,
    start: "top bottom+=20%",
    end: '+=50%',
  },
})

talentImgSlide1.fromTo(".the-initial-idea .talent-pic img", {x:100,alpha:0,rotation:-3},{x:0,alpha:1,duration:1,rotation:3});


var talentImgSlide2 = gsap.timeline({
  scrollTrigger: {
     trigger: ".indeed-and-hillman .talent-pic",
     pinSpacing: false,
   scrub:1,
   start: "top bottom+=20%",
   end: '+=50%',
  },
})

talentImgSlide2.fromTo(".indeed-and-hillman .talent-pic img", {x:-100,alpha:0,rotation:3},{x:0,alpha:1,duration:1,rotation:-3});


var talentImgSlide3 = gsap.timeline({
  scrollTrigger: {
     trigger: ".the-best-connections .talent-pic",
     pinSpacing: false,
   scrub:1,
   start: "top bottom+=20%",
    end: '+=50%',
  },
})

talentImgSlide3.fromTo(".the-best-connections .talent-pic img", {x:100,alpha:0,rotation:-3},{x:0,alpha:1,duration:1,rotation:3});




window.Player1 = new Media ({
  container: 'player-1', // div ID of the video container
  type: 'audio',
  playbutton: "./assets/images/play-purple.png",
  pausebutton: "./assets/images/pause-purple.png",
  id: 'audio-1',	// unique ID for this video instance 
  mp3: "./assets/audio/file_example_MP3_5MG.mp3",
});

window.Player2 = new Media ({
  container: 'player-2', // div ID of the video container
  type: 'audio',
  playbutton: "./assets/images/play-green.png",
  pausebutton: "./assets/images/pause-green.png",
  id: 'audio-1',	// unique ID for this video instance 
  mp3: "./assets/audio/file_example_MP3_5MG.mp3",
});

window.Player3 = new Media ({
  container: 'player-3', // div ID of the video container
  type: 'audio',
  playbutton: "./assets/images/play-pink.png",
  pausebutton: "./assets/images/pause-pink.png",
  id: 'audio-1',	// unique ID for this video instance 
  mp3: "./assets/audio/file_example_MP3_5MG.mp3",
});

