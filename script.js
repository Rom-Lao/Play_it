let imageShowIndex = 0; //to move from image to image

let currentIndex = 0;
const song_directory = `./songs/`;
const songs_information = [
    `${song_directory}Kim-Lim_Yo-Soul.mp3`,
    `${song_directory}G(i)dle_Fate.mp3`,
    `${song_directory}G(i)dle_Lion.mp3`,
    `${song_directory}Twice_Likey.mp3`,
    `${song_directory}Bibi_Bam-Yang-Gang.mp3`,
    `${song_directory}Mamamoo_Waggy.mp3`,
    `${song_directory}Twice_Fancy.mp3`,
    `${song_directory}Mamamoo_LIEC.mp3`,
    `${song_directory}Twice_Strawberry.mp3`
];

let songs_part;
let artist_name;
let song_title;
let current_time;

const image_directory = `./images/`;

// this is where we store our images, it is hard coded, can be improved using a file
const imageUrls = [
    `${image_directory}yo_soul.jpg`,
    `${image_directory}gidle_fate.jpg`, 
    `${image_directory}gidle_lion.jpg`, 
    `${image_directory}twice_likey.jpg`, 
    `${image_directory}bibi_bamyang.jpg`, 
    `${image_directory}mamamoo_waggy.jpg`, 
    `${image_directory}twice_fancy.jpg`, 
    `${image_directory}mamamoo_liec.jpg`,
    `${image_directory}twice_strawberry.jpg`
];

// same idea as image, we need to know the index in order to play a specific music
let audioShowIndex = 0;

// we store all our audio here
let audioUrls = [`./audios/audio_1.mp3`, 
                `./audios/audio_2.mp3`,
                `./audios/audio_3.mp3`,
                `./audios/audio_4.mp3`,
                `./audios/audio_5.mp3`,
                `./audios/audio_6.mp3`,
                `./audios/audio_7.mp3`,
                `./audios/audio_8.mp3`];

// storing title songs
let titleShowIndex = 0;
let titles =[`G(i)dle - Lion`,
            `Twice - Strawberry`,
            `Mamamoo - L.I.E.C`,
            `Twice - Likey`,
            `BIBI - Bam Yang Gang`,
            `Twice - Fancy`,
            `Mamamoo - Waggy`,
            `G(i)dle - Fate`];

// saving state of audio (playing or paused)
let isPlay = 0;

// to change background image and make it the same as the image in the card
let bg_image = document.querySelector(".song_img_test");

//and changing the icon accordingly
let pause_play_icon = document.querySelector("#pause_play_icon");

// changing image on click
let image = document.querySelector("#song_img");

// grab audio to change songs
let audio_source = document.querySelector("audio")

// show/hide glowing border depending if music is on/off
let border_effect = document.querySelector(".box");

// calling updateText() to display current song title
updateSong(); 


// keeping track of images positions, if previous then index - 1, if next -> index + 1
// if we are at the end of our images then go back to index "0"
// if we at index = 0 and we click prev, we go to last element of imageUrls

//after user clicks, we need to update the image
/*function goToPreviousImage(){
    imageShowIndex = (imageShowIndex == 0) ? imageUrls.length - 1 : imageShowIndex - 1;
    updateImage();
};
function goToNextImage(){
    imageShowIndex = (imageShowIndex == imageUrls.length - 1) ? 0 : imageShowIndex + 1;
    updateImage(); 
};


//changing song, same idea as changing image
//after user clicks, we need to update the song
function goToPreviousSong() {
    audioShowIndex = (audioShowIndex == 0) ? audioUrls.length - 1 : audioShowIndex - 1;
    updateAudio(); 
};
function goToNextSong(){
    audioShowIndex = (audioShowIndex == audioUrls.length - 1) ? 0 : audioShowIndex + 1;
    updateAudio();
};


// changing Text, same idea as changing image - audio
//after user clicks, we need to update the song title
function goToPreviousTitle(){
    titleShowIndex = (titleShowIndex == 0) ? titles.length - 1 : titleShowIndex - 1;
    updateText();
};
function goToNextTitle(){
    titleShowIndex = (titleShowIndex == titles.length - 1) ? 0 : titleShowIndex + 1;
    updateText();
};*/

function goPrev(){
    currentIndex = (currentIndex == 0) ? songs_information.length - 1 : currentIndex - 1;
    updateSong();
}

function goNext(){
    currentIndex = (currentIndex == songs_information.length -  1 ) ? 0 : currentIndex + 1;
    updateSong();
}
function updateSong(){
    audio_source.src = songs_information[currentIndex];
    [image.src, bg_image.src ] = [imageUrls[currentIndex], imageUrls[currentIndex]]; 
    if (isPlay == 1 ){
        audio_source.play();
    }
    // string
    songs_part = songs_information[currentIndex].slice(8, -4); // -4 : get rid of .mp3

    // split turns it into array of strings, then we iterate using map on that array
    [artist_name, song_title] = songs_part.split(`_`).map(element => element.replace(/-/g, ' '));
    document.querySelector(".song__title").innerHTML = artist_name+ " - " + song_title;
    document.querySelector(".song_position").innerHTML = `${currentIndex+1}/${songs_information.length}`;
}

// updating image, we grab the id of our img, then we change the .src
// we already know the index value from goToNextImage() and goToPreviousImage()
/*function updateImage(){
    image.src = imageUrls[imageShowIndex];
    bg_image.src = imageUrls[imageShowIndex];
    updateAudio(); //calling audio because image changed
};*/

//changing song, making sure that we only play the song if "isPlay = 1"
/*function updateAudio(){
    //fetching the correct song
    audio_source.src = audioUrls[audioShowIndex];
    audio_source.volume = 0.3;
    
    // if isPlay = 1 then play the audio
    if(isPlay == 1){
        audio_source.play(); 
    }  
};*/

let timerInterval; // Variable to store the interval ID
let audioDuration;
let duration_1;


function updateAudioDuration(){
    audioDuration = audio_source.duration;
    duration_1 = audioDuration;
    console.log("audioDuration in updateAudio() ", audioDuration);
    document.querySelector(".song_timer").innerHTML = `${formatTime(audioDuration)}`;
}

function setTimer(){
    return setInterval(decreaseDuration, 1000);
}

audio_source.addEventListener('loadedmetadata', updateAudioDuration);

/*play/pause audio on click */
function isPlaying(){
    if(audio_source.paused){
        timerInterval = setTimer();
        audio_source.volume = 0.3;
        //current_time = formatTime(audio_source.currentTime);
        //document.querySelector(".song_timer").innerHTML = current_time;
        pause_play_icon.src = `${image_directory}play.png`;
        border_effect.style.visibility = "visible";
        audio_source.play();
        // Update timer every 0.5 second
        isPlay = 1;
        
    }
    else {
        audio_source.pause();
        border_effect.style.visibility = "hidden";
        pause_play_icon.src = `${image_directory}pause.png`;
        clearInterval(timerInterval);
        isPlay = 0;
    }
}
function decreaseDuration(){
    duration_1 = duration_1 - 1 ; 
    if(duration_1 < 0 ) {
        //duration_1 = 0;
        console.log("calling updateAudio inside the decrease ");
        updateAudioDuration();
    }
    console.log("decreasing ", duration_1);
    document.querySelector(".song_timer").innerHTML = `${formatTime(duration_1)}`;
}

function formatTime(seconds) {
    // Convert seconds to minutes and seconds
    /*const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;*/

    // using Dtae object
    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toLocaleTimeString('en', { minute: '2-digit', second:'2-digit'});
}
// printing current song title
/*function updateText(){
     document.querySelector(".song__title").innerHTML = titles[titleShowIndex];
};*/

// change icon play button and 
//disable border image glowing effect when audio ends
window.addEventListener('load', function(){
    audio_source.onended = function(){
        pause_play_icon.src = `${image_directory}pause.png`;
        border_effect.style.visibility = "hidden";
        clearInterval(timerInterval);
        isPlay = 0;
        //reset timer when audio ends without pausing
        console.log("audioDuration, when audio ends");
        document.querySelector(".song_timer").innerHTML = `${formatTime(audioDuration)}`;
    }
});


let music_loop = document.querySelector(".music_loop");
let music_loop_icon = document.getElementById("loop_music_icon");
let isLoop = 0;
function loopMusic(){
    if(isLoop == 0) {
        audio_source.loop = true;
        music_loop.classList.add("loop_on");
        music_loop_icon.src = `${image_directory}loop_music_on.png`;
        isLoop = 1;
    }
    else{
        audio_source.loop = false;
        music_loop.classList.remove("loop_on");
        music_loop_icon.src = `${image_directory}loop_music.png`;
        isLoop = 0;
    }
}