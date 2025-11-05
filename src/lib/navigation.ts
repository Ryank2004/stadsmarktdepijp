export function initNavigation(): void {
  // --- Fix voor Chrome safe-area / adresbalk ---
  const nav = document.querySelector<HTMLElement>(".main-nav");

  if (nav && "visualViewport" in window) {
    const updateNavOffset = (): void => {
      const offset = window.visualViewport?.offsetTop ?? 0;
      nav.style.top = `${offset}px`;
    };

    updateNavOffset();

    const vv = window.visualViewport as VisualViewport;
    vv.addEventListener("resize", updateNavOffset);
    vv.addEventListener("scroll", updateNavOffset);
  }

  // --- Hamburger menu functionaliteit ---
  const hamburger = document.querySelector<HTMLElement>("[data-navigation-toggle]");
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

    overlay.addEventListener("click", (e: MouseEvent) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // --- Nav pin/unpin gedrag ---
  if (!nav) return;

  const SCROLL_THRESHOLD = 200;
  let lastScrollY = window.scrollY;
  let isPinned = false;

  const onScroll = (): void => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    const scrollingUp = currentScrollY < lastScrollY;

    if (scrollingDown && currentScrollY > SCROLL_THRESHOLD && !isPinned) {
      nav.classList.add("main-nav--pinned");
      isPinned = true;
    }

    if (scrollingUp && isPinned) {
      nav.classList.remove("main-nav--pinned");
      isPinned = false;
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}
