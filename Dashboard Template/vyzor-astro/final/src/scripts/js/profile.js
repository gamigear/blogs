
import Dropzone from "dropzone";

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

(function () {
    "use strict"

    /* dropzone */
    let myDropzone = new Dropzone(".dropzone", {
        maxFiles: 1,  // Allow only 1 file to be uploaded
        addRemoveLinks: true,  // Adds a remove link to each file preview
        dictRemoveFile: 'Remove',  // Change the text on the remove button if needed
    });
})();