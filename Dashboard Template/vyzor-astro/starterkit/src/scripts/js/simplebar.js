// src/scripts/sidebar.js
import SimpleBar from "simplebar";


(function () {
    "use strict";

    var myElement = document.getElementById('sidebar-scroll');
    new SimpleBar(myElement, { autoHide: true });

})();
