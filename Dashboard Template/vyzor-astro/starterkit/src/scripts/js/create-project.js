
import flatpickr from "flatpickr";
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
import Quill from "quill";
(function () {
    "use strict"

    /* StartDate Picker */
    flatpickr("#startDate", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });

    /* EndDate Picker */
    flatpickr("#endDate", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });

    /* multi select with remove button */
    const multipleCancelButton = new Choices(
        '#assigned-team-members',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );

    /* quill snow editor */
    var toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],

        ['image', 'video'],
        ['clean']                                         // remove formatting button
    ];
    var quill = new Quill('#project-descriptioin-editor', {
        modules: {
            toolbar: toolbarOptions
        },
        theme: 'snow'
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

    /* passing unique values */
    var textUniqueVals = new Choices('#choices-text-unique-values', {
        allowHTML: true,
        paste: false,
        duplicateItemsAllowed: false,
        editItems: true,
    });

})();