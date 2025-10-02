export function initNavigation() {
  // Hamburger menu functionaliteit
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

  // Nav pinnen bij scrollen
  const nav = document.querySelector(".main-nav");
  if (!nav) return;

  const SCROLL_THRESHOLD = 200;

  const onScroll = () => {
    nav.classList.toggle(
      "main-nav--pinned",
      window.scrollY > SCROLL_THRESHOLD,
    );
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}