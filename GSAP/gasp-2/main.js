gsap.to(".logo", {duration: 2, x: 300}); // animate logo on left 300px


// rotate element on left 300
gsap.to(".elm1", {
    duration: 2,
    x: 300,
    rotation: 360,
    yoyo: true,
});

// rotate element on left 300
gsap.to(".elm2", {
    duration: 5,
    // repeat: 2,
    x: "+=300",
    rotation: 180,
    backgroundColor: '#8d3dae',
    yoyo: true,
})


// Delay
gsap.to(".elm3", {
    rotation: 360,
    duration : 1,
    // repeat: 4,
    repeat: -1,
    repeatDelay: 1
});