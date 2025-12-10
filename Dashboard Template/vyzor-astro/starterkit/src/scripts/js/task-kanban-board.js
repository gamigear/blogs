import flatpickr from "flatpickr";
import SimpleBar from "simplebar";
import * as FilePond from "filepond"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginFileEncode from "filepond-plugin-file-encode"
import FilePondPluginImageEdit from "filepond-plugin-image-edit"
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import FilePondPluginImageCrop from "filepond-plugin-image-crop"
import FilePondPluginImageResize from "filepond-plugin-image-resize"
import FilePondPluginImageTransform from "filepond-plugin-image-transform"
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
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

    var myElement1 = document.getElementById('new-tasks');
    new SimpleBar(myElement1, { autoHide: true });

    var myElement2 = document.getElementById('todo-tasks');
    new SimpleBar(myElement2, { autoHide: true });

    var myElement3 = document.getElementById('inprogress-tasks');
    new SimpleBar(myElement3, { autoHide: true });

    var myElement4 = document.getElementById('inreview-tasks');
    new SimpleBar(myElement4, { autoHide: true });

    var myElement5 = document.getElementById('completed-tasks');
    new SimpleBar(myElement5, { autoHide: true });


    document.addEventListener("DOMContentLoaded", () => {
        // Wait for dragula to be available
        const waitForDragula = setInterval(() => {
            if (window.dragula) {
                clearInterval(waitForDragula);
                window.dragula([
                    document.querySelector('#new-tasks-draggable'),
                    document.querySelector('#todo-tasks-draggable'),
                    document.querySelector('#inprogress-tasks-draggable'),
                    document.querySelector('#inreview-tasks-draggable'),
                    document.querySelector('#completed-tasks-draggable'),
                ]).on('drop', updateAllTaskStates); // update on drag/drop
            }
        }, 100);

        // Function to toggle visibility
        const handleTaskNull = (container) => {
            if (!container) return;

            const nullBg = container.querySelector('.task-null-background');
            const button = document.querySelector(
                `[data-btn-for="${container.getAttribute('data-view-btn')}"]`
            );

            // Count children excluding the null background
            const tasks = Array.from(container.children).filter(
                (child) => !child.classList.contains('task-null-background')
            );

            if (tasks.length === 0) {
                nullBg?.classList.remove('d-none');
                button?.classList.add('d-none');
            } else {
                nullBg?.classList.add('d-none');
                button?.classList.remove('d-none');
            }
        };

        // Update all lists
        const updateAllTaskStates = () => {
            const taskContainers = [
                document.querySelector('#new-tasks-draggable'),
                document.querySelector('#todo-tasks-draggable'),
                document.querySelector('#inprogress-tasks-draggable'),
                document.querySelector('#inreview-tasks-draggable'),
                document.querySelector('#completed-tasks-draggable'),
            ];
            taskContainers.forEach(handleTaskNull);
        };

        // Initial check
        updateAllTaskStates();

        // Optional: watch periodically (in case DOM changes dynamically)
        setInterval(updateAllTaskStates, 1000);
    });

    /* multi select with remove button */
    const multipleCancelButton = new Choices(
        '#choices-multiple-remove-button1',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );
    const multipleCancelButton1 = new Choices(
        '#choices-multiple-remove-button2',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );

    /* TargetDate Picker */
    flatpickr("#targetDate", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });

    /* filepond */
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageExifOrientation,
        FilePondPluginFileValidateSize,
        FilePondPluginFileEncode,
        FilePondPluginImageEdit,
        FilePondPluginFileValidateType,
        FilePondPluginImageCrop,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    /* multiple upload */
    const MultipleElement = document.querySelector('.multiple-filepond');
    FilePond.create(MultipleElement,);

})();