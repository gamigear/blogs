
(async () => {
    if (typeof window !== "undefined") {
        if (typeof global === "undefined") {
            window.global = window;
        }

        const dragulaModule = await import("dragula");
        window.dragula = dragulaModule.default; // ✅ Make available globally
    }
})();

(function () {
    "use strict";

    const interval = setInterval(() => {
        if (window.dragula) {
            clearInterval(interval);
            window.dragula([document.querySelector('#draggable-left'), document.querySelector('#draggable-right')]);
        }
    }, 100);
    
})();