<script lang="ts">
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        CardTitle,
        Col,
        Row,
    } from "@sveltestrap/sveltestrap";
    import Swal from "sweetalert2"; // Import SweetAlert2
    function Basicsweetalert() {
        Swal.fire({
            title: "Hello this is Basic alert message",
            allowOutsideClick: true,
            confirmButtonColor: "#3085d6",
        });
    }

    // Titlealert
    function Titlealert() {
        Swal.fire("The Internet ?", "That thing is still around ?", "question");
    }

    //Footer
    function Footeralert() {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
        });
    }

    //Long window
    function Longwindow() {
        Swal.fire({
            imageUrl: "https://placeholder.pics/svg/300x1500",
            imageHeight: 1500,
            imageAlt: "A tall image",
        });
    }

    function datatattatata() {
        Swal.fire({
            title: "<strong>HTML <u>example</u></strong>",
            icon: "info",
            html:
                "You can use <b>bold text</b>, " +
                '<a href="//sweetalert2.github.io" target="_blank">links</a> ' +
                "and other HTML tags",
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fe fe-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: '<i class="fe fe-thumbs-down"></i>',
            cancelButtonAriaLabel: "Thumbs down",
        });
    }

    //multiple buttons
    function Multiplebuttons() {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    //position
    function Positiondialog() {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
        });
    }

    //confirmalert
    function Confirmalert() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    }

    //parameter
    function Parameteralert() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success parameter-button ms-2",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success",
                    );
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Your imaginary file is safe :)",
                        "error",
                    );
                }
            });
    }

    //image alert
    function Imagealert() {
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: "../images/media/media-59.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
        });
    }

    //backgroundimage
    function Backgroundimage() {
        Swal.fire({
            title: "Custom width, padding, color, background.",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(../images/media/media-19.jpg)",
        });
    }

    function Autoclose() {
        let timerInterval: number | undefined;

        Swal.fire({
            title: "Auto close alert!",
            html: "I will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer()?.querySelector("b"); // Use optional chaining here
                if (b) {
                    timerInterval = setInterval(() => {
                        const timerLeft =
                            Swal.getTimerLeft()?.toString() || "0"; // Use optional chaining and provide a default value
                        b.textContent = timerLeft;
                    }, 100);
                }
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    }
    //Ajax
    function Ajaxalert() {
        Swal.fire({
            title: "Submit your Github username",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Look up",
            showLoaderOnConfirm: true,
            preConfirm: (login: any) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .catch((error) => {
                        Swal.showValidationMessage(`Request failed: ${error}`);
                    });
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url,
                });
            }
        });
    }
</script>

<!-- Page Title -->
<svelte:head>
    <title>SweetAlerts | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Sweet Alerts"
    activepage="Applications"
    page="Sweet Alerts"
/>
<!-- Page Header Close -->

<Row>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>Basic Alert</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="basic-alert"
                    onclickfunc={Basicsweetalert}>Basic Alert</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>Title With Text Under</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="alert-text"
                    onclickfunc={Titlealert}>Title With Text</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>With Text,Error Icon & Footer</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="alert-footer"
                    onclickfunc={Footeralert}>Alert Footer</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>Alert With Long Window</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="long-window"
                    onclickfunc={Longwindow}>Long Window Here</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>Custom HTML Description</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="alert-description"
                    onclickfunc={datatattatata}>Custom HTML Alert</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>Alert With Multiple Buttons</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="three-buttons"
                    onclickfunc={Multiplebuttons}>Multiple Buttons</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>Custom Positioned Dialog Alert</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="alert-dialog"
                    onclickfunc={Positiondialog}>Alert Dialog</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>Confirm Alert</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="alert-confirm"
                    onclickfunc={Confirmalert}>Confirm Alert</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card parameter-alert">
            <CardHeader>
                <CardTitle>Alert With Parameters</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="alert-parameter"
                    onclickfunc={Parameteralert}>Alert Parameters</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>Alert With Image</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="alert-image"
                    onclickfunc={Imagealert}>Image Alert</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>Alert With Image</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="alert-custom-bg"
                    onclickfunc={Backgroundimage}>Custom Alert</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>Auto Close Alert</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="alert-auto-close"
                    onclickfunc={Autoclose}>Auto Close</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
    <Col xl={3} md={4}>
        <Card class=" custom-card">
            <CardHeader>
                <CardTitle>Ajax Request Alert</CardTitle>
            </CardHeader>
            <CardBody class=" text-center">
                <SpkButton
                    color="primary"
                    id="alert-ajax"
                    onclickfunc={Ajaxalert}>Ajax Request</SpkButton
                >
            </CardBody>
        </Card>
    </Col>
</Row>
