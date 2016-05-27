var audio;  // Game background music variable
var	playbtn; // Button to mute or play music

/**
 *  play the background music
 */
function backgroundMusic(){
	audio = new Audio();
	audio.src = "/music/backgroundMusic.mp3";
	audio.loop = true;
	audio.play();    // play the music

	playbtn = document.getElementById("soundbtn");
	playbtn.addEventListener("click", player);

	/**
	 * the player of the this music
	 */
	function player(){
		if(audio.paused){
		    audio.play();
		    //playbtn.style.background = "url(img/sound.png) no-repeat";
			document.getElementById('music').src = "/img/sound.png"
	    } else {
		    audio.pause();
		    //playbtn.style.background = "url(img/mute.png) no-repeat";
			document.getElementById('music').src = "/img/mute.png"
	    }
	}

}

/*
   loading the page while adding the event listener.
 */
window.addEventListener("load", backgroundMusic);