import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initTeamFadeIn() {
    // Select all team sections except the first one
    const sections = document.querySelectorAll('.team-row:not(.first-row)');

    if (!sections.length) return;

    sections.forEach((section) => {
        gsap.fromTo(section,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTeamFadeIn);
} else {
    initTeamFadeIn();
}

// For Astro view transitions
document.addEventListener('astro:page-load', initTeamFadeIn);