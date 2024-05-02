// timeline, intro starts with header
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

// adding image card and control buttons
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
        delay: 2, //important otherwise it will come with header
        duration: 1.5
    })
    gsap.fromTo("button", { opacity: 0}, {
        opacity: 1,
        ease: "expo.inOut",
        delay: 3,
        x: -10,
        y: 30,
        rotation: 360,
    }) 
    return tl;
}

//make title appears
function conclusion(){
    var tl = gsap.timeline();
    //add animation here
    gsap.to(".song__title", {
        duration: 1.5,
        autoAlpha: 1,
        y: 20
    }, "4") /* last one to appear*/
    return tl
}

var master = gsap.timeline();
master
    .add(intro())
    .add(middle()) 
    .add(conclusion());

