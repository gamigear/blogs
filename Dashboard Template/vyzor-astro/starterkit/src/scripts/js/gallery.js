
(async () => {
    if (typeof window === "undefined") return; // SSR guard

    if (typeof global === "undefined") window.global = window;

    // Wait for DOM
    if (document.readyState === "loading") {
        await new Promise(resolve => document.addEventListener("DOMContentLoaded", resolve, { once: true }));
    }

    const module = await import("glightbox");
    const GLightbox = module.default ?? module; // support both shapes

    // create instances (no duplicate variable names)
    const lightboxVideo = GLightbox({ selector: '.glightbox' });
    lightboxVideo.on && lightboxVideo.on('slide_changed', ({ prev, current }) => {
    });

    GLightbox({ selector: '.glightbox2' });
    GLightbox({ selector: '.glightbox3' });
    GLightbox({ selector: '.glightbox4' });

    // If you need cleanup later:
    // window.addEventListener('beforeunload', () => { lightboxVideo.destroy?.(); });
})();
