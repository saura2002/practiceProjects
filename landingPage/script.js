gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#scrollWrapper"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#scrollWrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#scrollWrapper").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


//gsap anim
var tl = gsap.timeline()
tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:.1,
    duration:.8,
    stagger:.1 // .3s intervals

})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:.8,
    stagger:.2,
})
 
tl.from("#headings img",{
    x:100,
    opacity:0,
    rotate:30,
    duration:.6,
    stagger:.4,

})

tl.from("#footer h4", {
    y:10,
    duration:.8,
    delay:.1,
    opacity:0,
    stagger:.3,

})

tl.to("#pageSec h4", {
    x: "-90%", // Use GSAP's x property instead of transform
    scrollTrigger: {
        trigger: "#pageSec", // We trigger the parent because we are using the pin property
        scroller: "#scrollWrapper", // here we use parent in which all code exist bcoz of locomotive to use in our code
        // markers: true,
        start: "top top", // Starts when the top of #pageSec reaches the top of the viewport
        end: "bottom top", // Ends when the bottom of #pageSec reaches the top of the viewport
        scrub: 2, 
        pin: true // Use Boolean value directly
    }
});
