

console.clear();

import '../scss/style.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import User,{printName, printAge} from './modules/user.js';
import Media from './Baymax.amazon.js';
import Observer from './util.observer.js';

/*
const user = new User('Tanni', 42);
console.log(user);
printName(user);
printAge(user);
*/

gsap.registerPlugin(ScrollTrigger);

/*
document.querySelector('#app').innerHTML = `
  <h1>yo MTV!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`



gsap.fromTo("#app",{alpha:1},{duration:3,alpha:0});
*/

//window.Observer = new Observer(".take-a-stand");
//window.Observer = new Observer(".the-initial-idea");




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

