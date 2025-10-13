import Lenis from 'lenis'

// Detect if we're on mobile
const isMobile = window.innerWidth < 768;

// Initialize lenis smooth scrolling with mobile optimizations
const lenis = new Lenis({
  duration: isMobile ? 0.8 : 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t * 1.5)), // Keep your original easing
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: isMobile ? false : true, // Disable on mobile only
  touchMultiplier: isMobile ? 1.5 : 2,
  infinite: false,
})

// Integrate with GSAP - Keep your original structure since it's working
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Optional: Connect lenis to GSAP ScrollTrigger
if (typeof ScrollTrigger !== 'undefined') {
  lenis.on('scroll', ScrollTrigger.update)
  
  // Keep your original ticker integration
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
}

// iOS-specific adjustments only
if (/iPhone|iPad|iPod|iOS/i.test(navigator.userAgent)) {
  lenis.options.smoothTouch = false;
}

// Make lenis globally accessible
window.lenis = lenis

export default lenis