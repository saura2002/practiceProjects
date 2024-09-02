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

tl.from("img",{
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