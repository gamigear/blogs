<script lang="ts">
    import { onMount } from "svelte";
    import {
        Row,
    } from "@sveltestrap/sveltestrap";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import SpkBasiccard from "$lib/@spk/uielements/reusable-cards/spk-basiccard.svelte";
    import Spkcollapsecard from "$lib/@spk/uielements/reusable-cards/spkcollapsecard.svelte";
    import Spkimageoverlaycard from "$lib/@spk/uielements/reusable-cards/spkimageoverlaycard.svelte";
    import Spkbgcards from "$lib/@spk/uielements/reusable-cards/spkbgcards.svelte";

    let leftContainerRef: any;
    let rightContainerRef: any;

    onMount(async () => {
        // Define global if not already defined
        
        if (typeof global === "undefined") {
            window.global = window;
        }

        // Dynamically import dragula only on the client-side
        const dragula = await import("dragula");

        const containers = [leftContainerRef, rightContainerRef];

        // Initialize dragula on the containers
        const drake = dragula.default(containers);
    });

    //Fullscreen
    let isFullscreen = false; // Track fullscreen state

    function toggleFullscreen() {
        isFullscreen = !isFullscreen; // Toggle fullscreen state
    }
</script>

<!-- Page Title -->
<svelte:head>
    <title>DraggableCards | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Draggable Cards"
    activepage="Advanced UI
"
    page="Draggable Cards"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->
<Row class="">
    <div class="col-xl-6" id="leftContainer" bind:this={leftContainerRef}>
        <SpkBasiccard
            cardClass="card-bg-primary"
            linkTag={true}
            bodyText={true}
        >
            <div slot="bodyText">
                <blockquote class="blockquote mb-0 text-center">
                    <h6 class="text-fixed-white">
                        The best and most beautiful things in the world cannot
                        be seen or even touched — they must be felt with the
                        heart..
                    </h6>
                    <footer
                        class="blockquote-footer mt-3 fs-14 text-fixed-white op-7"
                    >
                        Someone famous as <cite title="Source Title"
                            >-Helen Keller</cite
                        >
                    </footer>
                </blockquote>
            </div>
        </SpkBasiccard>
        <Spkcollapsecard
            normalToggle={true}
            Navigate="#!"
            Title="Card With Fullscreen Button"
            footertext="Read More"
        >
            <h6 class="card-text fw-medium">FullScreen Card</h6>
            <p class="card-text mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words
            </p>
        </Spkcollapsecard>
        <Spkcollapsecard
            expandButton={true}
            collapseToggle={true}
            Navigate="#!"
            Title="Card With Collapse Button"
            footertext="Read More"
        >
            <h6 class="card-text fw-medium">Collapsible Card</h6>
            <p class="card-text mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words
            </p>
        </Spkcollapsecard>
        <Spkcollapsecard
            hideToggle={true}
            Navigate="#!"
            Title="Card With Close Button"
            footertext="Read More"
        >
            <h6 class="card-text fw-medium">Closed Card</h6>
            <p class="card-text mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words
            </p>
        </Spkcollapsecard>

        <SpkBasiccard linkTag={true} bodyText={true}>
            <div slot="bodyText">
                <div class="d-flex align-items-center">
                    <div class="me-3">
                        <span class="avatar avatar-md">
                            <img src="../../images/faces/15.jpg" alt="img" />
                        </span>
                    </div>
                    <div>
                        <p class="card-text mb-0 fs-14 fw-medium">
                            Atharva Simon.
                        </p>
                        <div class="card-title text-muted fs-12 mb-0">
                            Correspondent Professor
                        </div>
                    </div>
                </div>
            </div>
        </SpkBasiccard>
        <SpkBasiccard
            cardClass="border border-info"
            linkTag={true}
            bodyText={true}
        >
            <div slot="bodyText">
                <div class="d-flex align-items-center">
                    <div class="me-3">
                        <span class="avatar avatar-xl">
                            <img src="../../images/faces/8.jpg" alt="img" />
                        </span>
                    </div>
                    <div>
                        <p class="card-text text-info mb-1 fs-14 fw-medium">
                            Alicia Keys.
                        </p>
                        <div class="card-title fs-12 mb-1">
                            Department Of Commerce
                        </div>
                        <div class="card-title text-muted fs-11 mb-0">
                            24 Years, Female
                        </div>
                    </div>
                </div>
            </div>
        </SpkBasiccard>

        <!-- Additional Cards as needed -->
    </div>
    <div class="col-xl-6" id="rightContainer" bind:this={rightContainerRef}>
        <Spkimageoverlaycard
            CustomClass="overlay-card"
            Custombodyclass="text-fixed-white"
            Footertext="Last updated 3 mins ago"
            Imgsrc="../../images/media/media-36.jpg"
            Customfooterclass="text-fixed-white"
            Overlayclass="over-content-bottom top-0"
            CardHeaderTag={false}
            CardFooterTag={true}
        >
            <div class="card-text text-fixed-white">
                Image Overlays Are Awesome!
            </div>
            <div class="card-text mb-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
            </div>
            <div class="card-text">Last updated 3 mins ago</div>
        </Spkimageoverlaycard>
        <Spkbgcards
            Navigate="#!"
            color="success"
            Imgsrc="../../images/faces/5.jpg"
            Title="Samantha sid"
            Value="In leave for 1 month"
            Textclass="fixed-white"
            Class="fixed-white"
        />
        <Spkimageoverlaycard
            CustomClass="overlay-card"
            Imgsrc="../../images/media/media-35.jpg"
            Title="Image Overlays Are Awesome!"
            CustomTitleclass="text-fixed-white"
            CardHeaderTag={true}
            CardFooterTag={false}
            Custombodyclass="text-fixed-white overflow-auto"
        >
            <div class="card-text mb-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
            </div>
            <div class="card-text">Last updated 3 mins ago</div>
        </Spkimageoverlaycard>

        <!-- Additional Cards as needed -->
    </div>
</Row>

<!--End::row-1 -->

<style>
  #leftContainer, #rightContainer {
    touch-action: none;
  }
</style>