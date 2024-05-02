#Demo
![output](https://github.com/Rom-Lao/BestPart_of_Ksongs/assets/167688624/cfd28aee-e5f7-4991-a263-e68a718055b5)




# BestPart_of_Ksongs

**BestPart_of_Ksongs** is like a playlist, where you can discover (my) preferred Kpop songs, the **full** song is **not** played, but rather the **best part** of it, while having a lot of interesting features.


# Features
1. **When a user plays a song, a glowing border will appear**, in order to be more lively.
2. **Song can be controled via 4 buttons : Play/Pause, next song, previous song, loop song.**
3. **Loop button will make the music automatically replay, disable to undo this effect.**
   * When user click on it, the icon changes to indicate that the music will loop.
5. **Clicking on "next" or "previous" icon will change**
   * music.
   * music title.
   * image card.
   * background image.
     
6. **Clicking on play/pause will make the following changes**
   * Pause/play icon will change accordingly.
   * If the song is paused then the glowing effect will also stop.
    
7. **Audio State is saved when user changes a song**
   * If user chooses to play a song, and move to the next/previous one, then the state is saved and the song will continue to play. Otherwise, the audio is not played.
     
8. **When a song ends, it will**
   * Change the icon play/pause.
   * Stop the glowing border.
9. **When user open the website for the first time, a small animation on the button play shows up**

# Technology used 
* HTML
* CSS
    * for styling the control buttons, card image, image background, song title animation text, glowing and gradient effect on the image background and border card respectively.
      
* Javascript
    * to handle different click events and save state of audio.
      
* GSAP (JS library for animation)
    * used to animate how the header, card image, control buttons and song title will appear when the user enter for the first time to the website.



