export function initNavigation() {
  // --- Hamburger menu functionaliteit ---
  const hamburger = document.querySelector("[data-navigation-toggle]");
  const overlay = document.getElementById("menu-overlay");
  const closeBtn = document.getElementById("menu-close");

  if (hamburger && overlay && closeBtn) {
    hamburger.addEventListener("click", () => {
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // --- Nav pin/unpin gedrag ---
  const nav = document.querySelector(".main-nav");
  if (!nav) return;

  const SCROLL_THRESHOLD = 200;
  let lastScrollY = window.scrollY;
  let isPinned = false;
  let ticking = false;

  const onScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    const scrollingUp = currentScrollY < lastScrollY;

    // Pinnen bij scroll omlaag voorbij drempel
    if (scrollingDown && currentScrollY > SCROLL_THRESHOLD && !isPinned) {
      nav.classList.add("main-nav--pinned");
      isPinned = true;
    }

    // Unpinnen zodra gebruiker omhoog scrollt (ongeacht positie)
    if (scrollingUp && isPinned) {
      nav.classList.remove("main-nav--pinned");
      isPinned = false;
    }

    // Chrome mobiel fix - force repositioning
    (nav as HTMLElement).style.top = '0px';

    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  // Extra fixes voor Chrome mobiel
  window.addEventListener("resize", () => {
    (nav as HTMLElement).style.top = '0px';
  }, { passive: true });

  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      (nav as HTMLElement).style.top = '0px';
    }, 100);
  });
}