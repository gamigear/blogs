
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

    /* draggable js */

    const interval = setInterval(() => {
        if (window.dragula) {
            clearInterval(interval);
            window.dragula([document.getElementById('todo-drag')], {
                moves: function (el, container, handle) {
                    return handle.classList.contains('todo-handle');
                }
            });
        }
    }, 100);

})();