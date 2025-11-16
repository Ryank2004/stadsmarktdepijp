import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Zoom out effect tijdens scrollen
gsap.to(".product-image", {
    scale: 1.15,
    ease: "power3.out",
    duration: 1.5,
    scrollTrigger: {
        trigger: ".product-image-wrapper",
        start: "30% bottom",
        markers: true,
    }
});