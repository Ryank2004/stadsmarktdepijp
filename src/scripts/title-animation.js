import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.matchMedia().add("(min-width: 940px)", () => {
    const textElements = document.querySelectorAll(
        ".cards-stack-section h2, .product-section h2"
    );

    textElements.forEach((textElement) => {
        const text = textElement.textContent;
        textElement.innerHTML = text
            .split("")
            .map((char) => `<span>${char}</span>`)
            .join("");

        const chars = textElement.querySelectorAll("span");

        gsap.from(chars, {
            scrollTrigger: {
                trigger: textElement,
                start: "20% 85%",
                end: "90% 85%",
                scrub: true,
                onLeave: self => self.kill(false, true),
                // markers: true,
            },
            color: "var(--color-dark)",
            stagger: .1,
            duration: 1,
        });
    });
});