

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


function largeImgSlide (data) {

	var largeImgSlide1 = gsap.timeline({
		scrollTrigger: {
		   trigger: data.trigger,
		   pinSpacing: false,
		 scrub:.5,
		  start: "top bottom+=10%",
		  end: '+=100%',
		},
	  })
	  
	largeImgSlide1.fromTo(data.target, {x:data.xpos,scale:0.5,alpha:0,rotation:data.rotation,y:data.ypos},{x:0,scale:1,alpha:1,duration:1,rotation:0,y:0});
}

largeImgSlide ({ trigger: ".take-a-stand", target: ".take-a-stand img", xpos: 500, ypos: 100, rotation: 30});
largeImgSlide ({ trigger: ".meet-audiences", target: ".meet-audiences img", xpos: -500, ypos: 100, rotation: -30});
largeImgSlide ({ trigger: ".build-trust", target: ".build-trust img", xpos: 500, ypos: 100, rotation: 30});


function talentImgSlide (data) {

	var talentImgSlide1 = gsap.timeline({
		scrollTrigger: {
		   trigger: data.trigger,
		   pinSpacing: false,
		 scrub:1,
		  start: "top bottom+=20%",
		  end: '+=50%',
		},
	  })
	  
	  talentImgSlide1.fromTo(data.target, {x:data.xpos,alpha:0,rotation:data.rotationstart},{x:0,alpha:1,duration:1,rotation:data.rotationend});
}

talentImgSlide ({
	trigger: ".the-initial-idea .talent-pic",
	target: ".the-initial-idea .talent-pic img",
	xpos: 100,
	rotationstart: -3,
	rotationend: 3
});

talentImgSlide ({
	trigger: ".indeed-and-hillman .talent-pic",
	target: ".indeed-and-hillman .talent-pic img",
	xpos: -100,
	rotationstart: 3,
	rotationend: -3
});

talentImgSlide ({
	trigger: ".the-best-connections .talent-pic",
	target: ".the-best-connections .talent-pic img",
	xpos: 100,
	rotationstart: -3,
	rotationend: 3
});




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

