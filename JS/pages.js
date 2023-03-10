// About Page
var typeAnim = new Typed(".nameType", {
    strings: ["Wamaitha."],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});

// Reveal Animation
const scrollReveal = ScrollReveal({
    distance: '50px',
    duration: 2500,
    delay: 200,
    reset: true
});

scrollReveal.reveal('#faithImg', {origin:'right'});
scrollReveal.reveal('#contactImg', {origin:'left'});
