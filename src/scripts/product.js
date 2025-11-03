import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Zoom out effect tijdens scrollen
gsap.to(".section-image", {
    scale: 1, // Gaat van 1.15 (CSS) naar 1
    ease: "none",
    scrollTrigger: {
        trigger: ".image-container",
        start: "top bottom", // Start wanneer de image in beeld komt
        end: "center center", // Eindigt wanneer de image gecentreerd is
        scrub: 1,
    }
});

// Optioneel: fade in effect voor de content
// gsap.from(".content", {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".content",
//         start: "top 80%",
//         end: "top 50%",
//         scrub: 1,
//     }
// });