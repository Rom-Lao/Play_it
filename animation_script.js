/*gsap.fromTo("h1", {opacity: 0 }, {
    opacity: 1,
    duration: 3
});

gsap.fromTo(".prev_btn", {opacity: 0 }, {
    opacity: 1,
    x: 10,
    y: 10,
    duration: 4
});

gsap.to(".play_sound", {
    duration:3,
    ease: "bounce.out",
    y: 25
});

gsap.fromTo(".song__image", {opacity:0 }, {
    opacity: 1,
    x: 5,
    y: 10,
    duration: 5,
    ease: "elastic"
});
*/


function intro(){
    var tl = gsap.timeline();
    //add animation here

    gsap.to(".song__title",{
        autoAlpha: 0
    }, "-1") /*hide title*/

    tl.fromTo("h1", {
        opacity: 0
    }, 
    {
        opacity: 1,
       y: 10,
       ease: "sine.out",
       duration: 2
    })

    return tl;
}

function middle(){
    var tl = gsap.timeline();
    //add animation here
    gsap.fromTo("#song_img", {
        opacity: 0
    }, 
    {
        opacity: 1,
        x: 0,
        y: 60,
        ease:"sine.in",
        delay: 1, //important otherwise it will come with header
        duration: 1.5
    })
    gsap.fromTo("button", { opacity: 0, x: 200, y: -100}, {
        opacity: 1,
        ease: "expo.inOut",
        delay: 2,
        x: 130,
        y: -380,
        rotation: 360,
    }) 

    return tl;
}

function conclusion(){
    var tl = gsap.timeline();
    //add animation here
    gsap.to(".song__title", {
        duration: 1.5,
        autoAlpha: 1,
        y: 20
    }, "3") /* last one to appear*/
    return tl
}

var master = gsap.timeline();
master
    .add(intro())
    .add(middle()) 
    .add(conclusion());

