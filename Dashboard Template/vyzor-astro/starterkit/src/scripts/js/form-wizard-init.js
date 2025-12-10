import { Wizard1 } from "./form-wizard";

(async () => {
    if (typeof window !== "undefined") {
        if (typeof global === "undefined") {
            window.global = window;
        }

        const WizardModule = await import("vanilla-wizard");
        window.Wizard = WizardModule.default; // ✅ Make available globally
    }
})();

(function () {
    "use strict";

    /* Form Wizard 1 */
    let args = {
        "wz_class": ".wizard-tab",
        highlight: true,
        highlight_time: 1000,
    };
    const wizard = new Wizard1(args);
    wizard.init();
    /* Form Wizard 1 */

    /* Data Picker */
    flatpickr("#date", {});
    /* Data Picker */

    const interval = setInterval(() => {
        if (window.dragula) {
            clearInterval(interval);
            window.Wizard('#basicwizard', {
                validate: true,
            })
            window.Wizard("#progresswizard", {
                validate: true,
                progress: true
            })
        }
    }, 100);

    document.addEventListener("DOMContentLoaded", function () {
        const tabs = document.querySelectorAll('#progresswizard .nav-link');
        const progressBar = document.querySelector('.bar');
        let currentProgress = 25; // start at 25%

        tabs.forEach((tab) => {
            tab.addEventListener('shown.bs.tab', function () {
                // Increase by 25% on each tab change, but not above 100%
                currentProgress += 25;
                if (currentProgress > 100) {
                    currentProgress = 100;
                }
                progressBar.style.width = currentProgress + '%';
            });
        });
    });

})();