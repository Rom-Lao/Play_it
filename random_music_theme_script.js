let imageShowIndex = 0; // to move from image to image

// this is where we store our images, it is hard coded, can be improved using a file
let imageUrls = ['./images/image_1.jpg',
                './images/image_2.jpg', 
                './images/image_3.jpg', 
                './images/image_4.jpg', 
                './images/image_5.jpg', 
                './images/image_6.jpg', 
                './images/image_7.jpg', 
                './images/image_8.jpg', 
                './images/image_9.jpg', 
                './images/image_10.jpg', 
                './images/image_11.jpg', 
                './images/image_12.jpg',
                './images/image_13.jpg',  
                './images/image_14.jpg'];

// same idea as image, we need to know the index in order to play a specific music
let audioShowIndex = 0;

// we store all our audio here
let audioUrls = ['./audios/audio_1.mp3', 
                './audios/audio_2.mp3',
                './audios/audio_3.mp3',
                './audios/audio_4.mp3',
                './audios/audio_5.mp3',
                './audios/audio_6.mp3',
                './audios/audio_7.mp3',
                './audios/audio_8.mp3'];

// storing title songs
let titleShowIndex = 0;
let titles =['G(i)dle - Lion',
            'Twice - Strawberry',
            'Mamamoo - L.I.E.C',
            'Twice - Likey',
            'BIBI - Bam Yang Gang',
            'Twice - Fancy',
            'Mamamoo - Waggy',
            'G(i)dle - Fate'];

// saving state of audio (playing or paused)
let isPlay = 0;

// to change background image and make it the same as the image in the card
let bg_image = document.querySelector(".song_img_test");

// controlling audio (playing or paused) 
//and changing the icon accordingly
//let my_audio = document.querySelector("audio");
let pause_play_icon = document.querySelector("#pause_play_icon");

// changing image on click
let image = document.querySelector("#song_img");

// grab audio to change songs
let audio_source = document.querySelector("audio")

// show/hide glowing border depending if music is on/off
let border_effect = document.querySelector(".box");

// calling updateText() to display current song title
updateText(); 
// keeping track of images positions, if previous then index - 1, if next -> index + 1
// if we are at the end of our images then go back to index "0"
// if we at index = 0 and we click prev, we go to last element of imageUrls

//after user clicks, we need to update the image
function goToPreviousImage(){
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
};

// updating image, we grab the id of our img, then we change the .src
// we already know the index value from goToNextImage() and goToPreviousImage()
function updateImage(){
    image.src = imageUrls[imageShowIndex];
    bg_image.src = imageUrls[imageShowIndex];
    updateAudio(); //calling audio because image changed
};

//changing song, making sure that we only play the song if "isPlay = 1"
function updateAudio(){
    //fetching the correct song
    audio_source.src = audioUrls[audioShowIndex];
    audio_source.volume = 0.2;
    
    // if isPlay = 0 it means it's paused so we need 
    //to play is and change it to 1
    if(isPlay == 0){
        // 1 is the highest ; and 0.1 is muted  
        audio_source.load(); // we need to load the audio first
        audio_source.play();
        pause_play_icon.src = "./images/play.png";
        border_effect.style.visibility = "visible";
        isPlay = 1;
    } 
    else{
        audio_source.pause();
        border_effect.style.visibility = "hidden";
        pause_play_icon.src = "./images/pause.png";
        isPlay = 0;
    }
};

// printing current song title
function updateText(){
     document.querySelector(".song__title").innerHTML = titles[titleShowIndex];
};

// change icon play button and 
//disable border image glowing effect when audio ends
window.addEventListener('load', function(){
    audio_source.onended = function(){
        pause_play_icon.src = "./images/pause.png";
        border_effect.style.visibility = "hidden";
        isPlay = 0;
    }
});

let music_loop = document.querySelector(".music_loop");
let music_loop_icon = document.getElementById("loop_music_icon");
let isLoop = 0;
function loopMusic(){
    if(isLoop == 0) {
        audio_source.loop = true;
        music_loop.classList.add("loop_on");
        music_loop_icon.src = "./images/loop_music_on.png";
        isLoop = 1;
    }
    else{
        audio_source.loop = false;
        music_loop.classList.remove("loop_on");
        music_loop_icon.src = "./images/loop_music.png"
        isLoop = 0;
    }
}