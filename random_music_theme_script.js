let imageShowIndex = 0; // to move from image to image

// this is where we store our images, it is hard coded, can be improved using a file
let imageUrls = ['./images/test_image_3.jpg','./images/test_image_2.jpg', './images/test_image.jpg'];

// same idea as image, we need to know the index in order to play a specific music
let audioShowIndex = 0;

// we store all our audio here
let audioUrls = ['./audios/test_audio.mp3', './audios/test_audio_2.mp3','./audios/test_audio_3.mp3'];

// storing title songs
let titleShowIndex = 0;
let titles =['G(i)dle - Lion','Robin', 'Sugar song'];

// saving state of audio (playing or paused)
let isPlay = 0;

// to change background image and make it the same as the image in the card
let bg_image = document.querySelector(".song_img_test");

// controlling audio (playing or paused) 
//and changing the icon accordingly
let my_audio = document.querySelector("audio");
let sound_img = document.querySelector("#sound_image");

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
    let image = document.querySelector("#song_img");
    let i = 0;
    image.src = imageUrls[imageShowIndex];
    bg_image.src = imageUrls[imageShowIndex];
    updateAudio(); //calling audio because image changed
};

//updating audio, making sure that we only play the song if "isPlay = 1"
function updateAudio(){
    let audio_source = document.querySelector("audio")
    let sound_img = document.querySelector("#sound_image");
    audio_source.src = audioUrls[audioShowIndex];

    if(isPlay){
        sound_img.src = "./images/play.png";
        audio_source.load(); // we need to load the audio first
        audio_source.play();  
        audio_source.volume = 0.1; // 1 is the highest ; and 0.0 is muted  
    }
};

function updateText(){
    // printing current song title
     document.querySelector(".song__title").innerHTML = titles[titleShowIndex];
};



function playSound(){
    my_audio.volume = 0.1; // always lowering the volume,

    //if audio is paused, and we triggered this function it means it'll resume playing else it'll pause
    // change the icon accordingly
    if(my_audio.paused){
        my_audio.play();
        isPlay = 1; // to save state of pause/play when u move to another image-song
        sound_img.src = "./images/play.png";
    }
    else{
        my_audio.pause();
        isPlay = 0;
        sound_img.src = "./images/pause.png";
    }
};


// change icon play button when audio ends
window.addEventListener('load', function(){
    my_audio.onended = function(){
        sound_img.src = "./images/pause.png";
    }
});