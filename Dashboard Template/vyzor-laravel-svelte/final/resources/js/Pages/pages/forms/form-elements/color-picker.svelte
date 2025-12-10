
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import { colorpicker1 } from "@/shared/data/prism-code/formsprism";
    import { Input } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";
    import ShowCode from "@/components/showcode/ShowCode.svelte";

    //Classic method
    let pickrInstance;
    onMount(async () => {
        // Dynamically import Pickr only in the client-side environment
        if (typeof window !== "undefined") {
            const { default: Pickr } = await import("@simonwep/pickr");

            // Initialize Pickr once the component has mounted
            pickrInstance = Pickr.create({
                el: ".color-picker",
                theme: "classic", // or 'monolith', or 'nano'

                swatches: [
                    "rgba(244, 67, 54, 1)",
                    "rgba(233, 30, 99, 0.95)",
                    "rgba(156, 39, 176, 0.9)",
                    "rgba(103, 58, 183, 0.85)",
                    "rgba(63, 81, 181, 0.8)",
                    "rgba(33, 150, 243, 0.75)",
                    "rgba(3, 169, 244, 0.7)",
                    "rgba(0, 188, 212, 0.7)",
                    "rgba(0, 150, 136, 0.75)",
                    "rgba(76, 175, 80, 0.8)",
                    "rgba(139, 195, 74, 0.85)",
                    "rgba(205, 220, 57, 0.9)",
                    "rgba(255, 235, 59, 0.95)",
                    "rgba(255, 193, 7, 1)",
                ],

                components: {
                    preview: true,
                    opacity: true,
                    hue: true,

                    // Input / output Options
                    interaction: {
                        hex: true,
                        rgba: true,
                        hsla: true,
                        hsva: true,
                        cmyk: true,
                        input: true,
                        clear: true,
                        save: true,
                    },
                },
            });
        }
    });
    //Monolith method
    let colorPicker1;
    onMount(async () => {
        // Dynamically import Pickr only in the client-side environment
        const { default: Pickr } = await import("@simonwep/pickr");

        if (colorPicker1) {
            // Initialize Pickr once the component has mounted
            Pickr.create({
                el: colorPicker1,
                theme: "classic", // or 'monolith', or 'nano'
                default: "rgba(213, 221, 231, 1);",
                swatches: [
                    "rgba(244, 67, 54, 1)",
                    "rgba(233, 30, 99, 0.95)",
                    "rgba(156, 39, 176, 0.9)",
                    "rgba(103, 58, 183, 0.85)",
                    "rgba(63, 81, 181, 0.8)",
                    "rgba(33, 150, 243, 0.75)",
                    "rgba(3, 169, 244, 0.7)",
                    "rgba(0, 188, 212, 0.7)",
                    "rgba(0, 150, 136, 0.75)",
                    "rgba(76, 175, 80, 0.8)",
                    "rgba(139, 195, 74, 0.85)",
                    "rgba(205, 220, 57, 0.9)",
                    "rgba(255, 235, 59, 0.95)",
                    "rgba(255, 193, 7, 1)",
                ],
                components: {
                    preview: true,
                    opacity: true,
                    hue: false,
                    interaction: {
                        input: true,
                        clear: true,
                        save: true,
                    },
                },
            });
        }
    });
    //Nano Method
    let colorPicker2;
    onMount(async () => {
        // Dynamically import Pickr only in the client-side environment
        const { default: Pickr } = await import("@simonwep/pickr");

        if (colorPicker1) {
            // Initialize Pickr once the component has mounted
            Pickr.create({
                el: colorPicker2,
                theme: "nano", // or 'monolith', or 'nano'
                theme: "nano", // or 'monolith', or 'nano'
                default: "rgba(185, 93, 75, 1);",
                swatches: [
                    "rgba(244, 67, 54, 1)",
                    "rgba(233, 30, 99, 0.95)",
                    "rgba(156, 39, 176, 0.9)",
                    "rgba(103, 58, 183, 0.85)",
                    "rgba(63, 81, 181, 0.8)",
                    "rgba(33, 150, 243, 0.75)",
                    "rgba(3, 169, 244, 0.7)",
                    "rgba(0, 188, 212, 0.7)",
                    "rgba(0, 150, 136, 0.75)",
                    "rgba(76, 175, 80, 0.8)",
                    "rgba(139, 195, 74, 0.85)",
                    "rgba(205, 220, 57, 0.9)",
                    "rgba(255, 235, 59, 0.95)",
                    "rgba(255, 193, 7, 1)",
                ],

                components: {
                    preview: true,
                    opacity: true,
                    hue: false,

                    // Input / output Options
                    interaction: {
                        hex: true,
                        input: true,
                        clear: true,
                        save: true,
                    },
                },
            });
        }
    });
</script>

<!-- Page Title -->
<svelte:head>
    <title>ColorPicker | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Color Pickers"
   activepage="Forms"
    subTitle=" Form Elements"
    page="Color Pickers"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->
<div class="row">
    <div class="col-xl-12">
      <ShowCode title="Bootstrap Color Picker"  svelteCode={colorpicker1}>
        <Input type="color" class="form-control form-control-color border-0"
        id="exampleColorInput" value="#136ad0" title="Choose your color" />
      </ShowCode>
    </div>
    <div class="col-xl-12">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">
                    Classic
                </div>
            </div>
            <div class="card-body d-flex justify-content-between">
                <div>
                    <div class="color-picker"></div>
                </div>
                <div>
                  <div class="color-picker" bind:this={colorPicker1}></div>
                </div>
                <div>
                    <div class="theme-container2"></div>
                    <div class="color-picker" bind:this={colorPicker2}></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--End::row-1 -->
