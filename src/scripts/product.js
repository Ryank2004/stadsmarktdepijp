import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Zoom out effect tijdens scrollen
gsap.to(".product-image", {
    scale: 1.1,
    ease: "none",
    scrollTrigger: {
        trigger: ".product-image-wrapper",
        start: "top bottom", // Start wanneer de image in beeld komt
        end: "20% 70%", // Eindigt wanneer de image gecentreerd is
        scrub: 1,
        onLeave: self => self.kill(false, true),
        // markers: true,
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