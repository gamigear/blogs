<script>
    export let isOpen;
    export let toggle;
    import { onMount, onDestroy } from "svelte";
    import { Offcanvas, OffcanvasBody, Button } from "@sveltestrap/sveltestrap";
    import { themeStore } from "./switcher.js";

    let endOpen = false;
    const toggleEnd = () => {
        endOpen = !endOpen;
    };

    let userData = themeStore.userData;

    function toggleTheme(newTheme) {
        themeStore.updateColorThemeFn(newTheme);
        localStorage.setItem("vyzorcolortheme", newTheme);
        localStorage.removeItem("vyzorMenu");
        localStorage.removeItem("vyzorHeader");
    }

    function directionFn(value) {
        themeStore.UpdateDirectionFn(value);
        localStorage.setItem("vyzordirection", value);
    }

    function themePrimaryFn(value) {
        themeStore.updateThemePrimaryFn(value);
        localStorage.setItem("vyzorprimaryRGB", value);
    }

    function primaryColorFn(color) {
        if (!color || color === "#") {
            color = "#000000";
        }

        let primaryRgb = convertRgbToIndividual(color);
        themePrimaryFn(primaryRgb);
    }

    let initialColor = "";

    function convertRgbToIndividual(hex) {
        hex = hex.replace("#", "");

        // If the hex is empty or invalid, return a default RGB value
        if (hex.length !== 6 || !/^([0-9A-Fa-f]{6})$/.test(hex)) {
            return "0, 0, 0"; // Default to black
        }

        // Extract the red, green, and blue values
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        return `${r}, ${g}, ${b}`;
    }

    function reset() {
        themeStore.custompageReset();
    }

    function custompageLocalStorageFn() {
        themeStore.custompageLocalStorage();
    }

    // Cleanup subscriptions on component destroy
    onMount(() => {
        custompageLocalStorageFn();
        return () => {};
    });

    let windowWidth;
    if (typeof window !== "undefined") {
        windowWidth = window.innerWidth;
        const updateWidth = () => {
            windowWidth = window.innerWidth;
            let html = document.documentElement;
        };

        // Add event listener for window resize
        window.addEventListener("resize", updateWidth);

        // Cleanup the event listener on component destroy

        onDestroy(() => {
            window.removeEventListener("resize", updateWidth);
        });
    }
</script>

<!-- Start Switcher -->
<Offcanvas
    class=" offcanvas-end"
    {isOpen}
    {toggle}
    placement="end"
    header="Switcher"
    id="switcher-canvas"
    aria-labelledby="offcanvasRightLabel"
>
    <OffcanvasBody>
        <div class="">
            <p class="switcher-style-head">Theme Color Mode:</p>
            <div class="row switcher-style g-0">
                <div class="col-4">
                    <div class="form-check switch-select">
                        <label
                            class="form-check-label"
                            for="switcher-light-theme"
                        >
                            Light
                        </label>
                        <input
                            class="form-check-input"
                            type="radio"
                            name="theme-style"
                            id="switcher-light-theme"
                            on:click={() => toggleTheme("light")}
                            checked={$userData.colortheme === "light"}
                        />
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-check switch-select">
                        <label
                            class="form-check-label"
                            for="switcher-dark-theme"
                        >
                            Dark
                        </label>
                        <input
                            class="form-check-input"
                            type="radio"
                            name="theme-style"
                            id="switcher-dark-theme"
                            on:click={() => toggleTheme("dark")}
                            checked={$userData.colortheme === "dark"}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <p class="switcher-style-head">Directions:</p>
            <div class="row switcher-style g-0">
                <div class="col-4">
                    <div class="form-check switch-select">
                        <label class="form-check-label" for="switcher-ltr">
                            LTR
                        </label>
                        <input
                            class="form-check-input"
                            type="radio"
                            name="direction"
                            id="switcher-ltr"
                            on:change={() => directionFn("ltr")}
                            checked={$userData.direction === "ltr"}
                        />
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-check switch-select">
                        <label class="form-check-label" for="switcher-rtl">
                            RTL
                        </label>
                        <input
                            class="form-check-input"
                            type="radio"
                            name="direction"
                            id="switcher-rtl"
                            on:change={() => directionFn("rtl")}
                            checked={$userData.direction === "rtl"}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="theme-colors">
            <p class="switcher-style-head">Theme Primary:</p>
            <div class="d-flex align-items-center switcher-style">
                <div class="form-check switch-select me-3">
                    <input
                        class="form-check-input color-input color-primary-1"
                        type="radio"
                        name="theme-primary"
                        id="switcher-primary"
                        on:change={() => themePrimaryFn("42 ,16, 164")}
                        checked={$userData.themePrimary === "42 ,16, 164"}
                    />
                </div>
                <div class="form-check switch-select me-3">
                    <input
                        class="form-check-input color-input color-primary-2"
                        type="radio"
                        name="theme-primary"
                        id="switcher-primary1"
                        on:change={() => themePrimaryFn("125 ,0, 189")}
                        checked={$userData.themePrimary === "125 ,0, 189"}
                    />
                </div>
                <div class="form-check switch-select me-3">
                    <input
                        class="form-check-input color-input color-primary-3"
                        type="radio"
                        name="theme-primary"
                        id="switcher-primary2"
                        on:change={() => themePrimaryFn("4, 118, 141")}
                        checked={$userData.themePrimary === "4, 118, 141"}
                    />
                </div>
                <div class="form-check switch-select me-3">
                    <input
                        class="form-check-input color-input color-primary-4"
                        type="radio"
                        name="theme-primary"
                        id="switcher-primary3"
                        on:change={() => themePrimaryFn("138, 0, 32")}
                        checked={$userData.themePrimary === "138, 0, 32"}
                    />
                </div>
                <div class="form-check switch-select me-3">
                    <input
                        class="form-check-input color-input color-primary-5"
                        type="radio"
                        name="theme-primary"
                        id="switcher-primary4"
                        on:change={() => themePrimaryFn("9 ,124, 103")}
                        checked={$userData.themePrimary === "9 ,124, 103"}
                    />
                </div>
                <div
                    class="form-check switch-select ps-0 mt-1 color-primary-light"
                >
                    <div class="theme-container-primary"></div>
                    <div class="pickr-container-primary">
                        <div class="pickr">
                            <input
                                type="color"
                                class="pcr-button"
                                role="button"
                                aria-label="toggle color picker dialog"
                                style="--pcr-color: rgba(132, 90, 223, 1);"
                                bind:value={initialColor}
                                on:input={(event) =>
                                    primaryColorFn(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p class="switcher-style-head">reset:</p>
            <div class="text-center">
                <button id="reset-all" class="btn btn-danger mt-3" on:click={reset}>Reset</button
                >
            </div>
        </div>
    </OffcanvasBody>
</Offcanvas>
<!-- End Switcher -->
