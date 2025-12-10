
(async () => {
  if (typeof window === "undefined") return; // SSR guard

  if (typeof global === "undefined") window.global = window;

  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    await new Promise(resolve =>
      document.addEventListener("DOMContentLoaded", resolve, { once: true })
    );
  }

  // Dynamically import GLightbox
  const module = await import("glightbox");
  window.GLightbox = module.default ?? module; // make globally available

  // Your original code
  var lightboxVideo = window.GLightbox({
    selector: '.glightbox'
  });

  lightboxVideo.on('slide_changed', ({ prev, current }) => {

    const { slideIndex, slideNode, slideConfig, player } = current;
  });
})();
