<script lang="ts">
    // handling the switcher through props
    export let toggle;
    import { themeStore } from "../switcher/switcher";
    import { menuData } from "$lib/components/layout-components/sidebar/nav"; // Adjust the path as needed
    import { onMount, onDestroy } from "svelte";
    import { Svroller } from "svrollbar";
    import {
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
        Modal,
        ModalBody,
    } from "@sveltestrap/sveltestrap";
    import { base } from "$app/paths";
    const basePath = base;

    let isFullscreen = false; // Declare a variable to keep track of fullscreen state

    function toggleFullscreen() {
        const docElm = document.documentElement as HTMLElement & {
            mozRequestFullScreen?: () => Promise<void>;
            webkitRequestFullscreen?: () => Promise<void>;
            msRequestFullscreen?: () => Promise<void>;
        };

        const doc = document as Document & {
            mozCancelFullScreen?: () => Promise<void>;
            webkitExitFullscreen?: () => Promise<void>;
            msExitFullscreen?: () => Promise<void>;
        };

        if (!isFullscreen) {
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullscreen) {
                docElm.webkitRequestFullscreen();
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
        } else {
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            } else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            } else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            } else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }
        }

        // Toggle the fullscreen state
        isFullscreen = !isFullscreen;
    }

    // A function to toggle the theme
    const toggleTheme = (value: string) => {
        // Assuming themeStore.colorthemeFn is already defined elsewhere
        themeStore.updateColorThemeFn(value);
        localStorage.setItem("vyzorcolortheme", value);
        localStorage.removeItem("vyzorMenu");
        localStorage.removeItem("vyzorHeader");
        localStorage.removeItem("vyzorbodylightRGB");
        localStorage.removeItem("vyzorbodyBgRGB");
    };

    let searchInput: HTMLInputElement;
    let container: HTMLDivElement;
    let searchResult: HTMLDivElement;

    let InputValue = "";
    let showa = false;
    let show2 = false;
    let searchcolor = "text-dark";
    let searchval = "Type something";
    let NavData: any[] = [];

    function handleClick(event: MouseEvent) {
    if (!searchInput || !container) return; // guard clause to prevent null access

    if (
        !searchInput.contains(event.target as Node) &&
        !container.contains(event.target as Node)
    ) {
        container.classList.remove("searchdrop");
    } else if (searchInput.contains(event.target as Node)) {
        container.classList.add("searchdrop");
    }
}

    function myfunction(inputvalue: string) {
        if (searchResult) {
            searchResult.classList.remove("d-none");
        }

        const i: any[] = [];
        const allElement2: any[] = [];

        menuData.forEach((mainLevel: any) => {
            if (mainLevel.children) {
                showa = true;
                mainLevel.children.forEach((subLevel: any) => {
                    i.push(subLevel);
                    if (subLevel.children) {
                        subLevel.children.forEach((subLevel1: any) => {
                            i.push(subLevel1);
                            if (subLevel1.children) {
                                subLevel1.children.forEach((subLevel2: any) => {
                                    i.push(subLevel2);
                                });
                            }
                        });
                    }
                });
            }
        });

        for (const allElement of i) {
            if (
                allElement.title
                    .toLowerCase()
                    .includes(inputvalue.toLowerCase())
            ) {
                if (
                    allElement.title
                        .toLowerCase()
                        .startsWith(inputvalue.toLowerCase())
                ) {
                    show2 = true;
                    if (
                        allElement.path &&
                        !allElement2.some((el) => el.title === allElement.title)
                    ) {
                        allElement2.push(allElement);
                    }
                }
            }
        }

        if (!allElement2.length || inputvalue === "") {
            if (inputvalue === "") {
                show2 = false;
                searchval = "Type something";
                searchcolor = "text-dark";
            }
            if (!allElement2.length) {
                show2 = false;
                searchcolor = "text-danger";
                searchval = "There is no component with this name";
            }
        }
        
        NavData = allElement2;
    }

    onMount(() => {
        document.body.addEventListener("click", handleClick);

        const clickHandler = (event: MouseEvent) => {
            if (searchResult && !searchResult.contains(event.target as Node)) {
                searchResult.classList.add("d-none");
            }
        };
        document.addEventListener("click", clickHandler);

        return () => {
            document.body.removeEventListener("click", handleClick);
            document.removeEventListener("click", clickHandler);
        };
    });

    //  toggle sidebar

    function toggleSidebar() {
        let html = document.querySelector("html")!;

        // Check the window width
        if (window.innerWidth <= 992) {
            let dataToggled = html.getAttribute("data-toggled");

            if (dataToggled == "open") {
                html.setAttribute("data-toggled", "close");
            } else {
                html.setAttribute("data-toggled", "open");
            }
        } else {
            let menuNavLayoutType = html.getAttribute("data-nav-style");
            let verticalStyleType = html.getAttribute("data-vertical-style");

            if (menuNavLayoutType) {
                let dataToggled = html.getAttribute("data-toggled");
                if (dataToggled) {
                    html.removeAttribute("data-toggled");
                } else {
                    html.setAttribute(
                        "data-toggled",
                        menuNavLayoutType + "-closed",
                    );
                }
            } else if (verticalStyleType) {
                let dataToggled = html.getAttribute("data-toggled");

                if (verticalStyleType == "doublemenu") {
                    if (
                        html.getAttribute("data-toggled") ===
                            "double-menu-open" &&
                        document.querySelector(".double-menu-active")
                    ) {
                        html.setAttribute("data-toggled", "double-menu-close");
                    } else {
                        if (document.querySelector(".double-menu-active")) {
                            html.setAttribute(
                                "data-toggled",
                                "double-menu-open",
                            );
                        }
                    }
                } else if (dataToggled) {
                    html.removeAttribute("data-toggled");
                } else {
                    switch (verticalStyleType) {
                        case "closed":
                            html.setAttribute(
                                "data-toggled",
                                "close-menu-close",
                            );
                            break;
                        case "icontext":
                            html.setAttribute(
                                "data-toggled",
                                "icon-text-close",
                            );
                            break;
                        case "overlay":
                            html.setAttribute(
                                "data-toggled",
                                "icon-overlay-close",
                            );
                            break;
                        case "detached":
                            html.setAttribute("data-toggled", "detached-close");
                            break;
                        default:
                    }
                }
            }
        }
    }
    const WindowPreSize =
        typeof window !== "undefined" ? [window.innerWidth] : [];
    function menuResizeFn() {
        if (typeof window === "undefined") {
            // Handle the case where window is not available (server-side rendering)
            return;
        }

        WindowPreSize.push(window.innerWidth);
        if (WindowPreSize.length > 2) {
            WindowPreSize.shift();
        }

        // const theme = getState();
        const currentWidth = WindowPreSize[WindowPreSize.length - 1];
        const prevWidth = WindowPreSize[WindowPreSize.length - 2];

        if (WindowPreSize.length > 1) {
            if (currentWidth < 992 && prevWidth >= 992) {
                themeStore.userData.update((current: any) => ({
                    ...current,
                    toggled: "close",
                }));
            }

            if (currentWidth >= 992 && prevWidth < 992) {
                themeStore.userData.update((current: any) => ({
                    ...current,
                    toggled:
                        themeStore.userData.layoutStyles === "doublemenu"
                            ? "double-menu-open"
                            : "",
                }));
            }
        }
    }
    // Adding resize event to handle dynamically changing window width
    onMount(() => {
        window.addEventListener("resize", menuResizeFn);

        return () => {
            window.removeEventListener("resize", menuResizeFn);
        };
    });

    //  cart Dropdown

    let notificationNotes = [
        {
            id: 1,
            image: "/images/ecommerce/png/13.png",
            name: "Urban Chic Satchel",
            description: "Sleek, stylish, and perfect for daily use",
            oldprice: "$120",
            newprice: "$90",
            off: "25%",
            count: 1,
        },
        {
            id: 2,
            image: "/images/ecommerce/png/15.png",
            name: "TrailBlaze Runners",
            description: "Lightweight and built for comfort",
            oldprice: "$80",
            newprice: "$60",
            off: "25%",
            count: 1,
        },
        {
            id: 3,
            image: "/images/ecommerce/png/19.png",
            name: "VisionTech SLR",
            description: "High-quality shots with every click",
            oldprice: "$500",
            newprice: "$375",
            off: "25%",
            count: 1,
        },
        {
            id: 4,
            image: "/images/ecommerce/png/6.png",
            name: "FlexiSeat Office Chair",
            description: "Comfortable support for long hours",
            oldprice: "$200",
            newprice: "$150",
            off: "25%",
            count: 1,
        },
        {
            id: 5,
            image: "/images/ecommerce/png/11.png",
            name: "DecoDial Classic",
            description: "A bold, colorful timepiece for any room",
            oldprice: "$50",
            newprice: "$35",
            off: "30%",
            count: 1,
        },
    ];
    // Function to handle the deletion of an item from the cart
    function removeItem(itemId: number) {
        notificationNotes = notificationNotes.filter(
            (item: any) => item.id !== itemId,
        );
    }

    // To get the total number of items in the cart
    $: cartItemCount = notificationNotes.length;

    function increment(index: number) {
        notificationNotes[index].count += 1;
    }

    function decrement(index: number) {
        if (notificationNotes[index].count > 1) {
            notificationNotes[index].count -= 1;
        }
    }

    //  header-responsive-search modal

    let showOpen = false;

    const handleShowOpen = (e: Event) => {
        e.preventDefault();
        showOpen = true;
    };

    const handleShowClose = () => {
        showOpen = false;
    };
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<header class="app-header sticky" id="header">
    <!-- Start::main-header-container -->
    <div class="main-header-container container-fluid">
        <!-- Start::header-content-left -->
        <div class="header-content-left">
            <!-- Start::header-element -->
            <div class="header-element">
                <div class="horizontal-logo">
                    <a href={`${basePath}/dashboards/sales`} class="header-logo">
                        <img
                            src={`${basePath}/images/brand-logos/desktop-logo.png`}
                            alt="logo"
                            class="desktop-logo"
                        />
                        <img
                            src={`${basePath}/images/brand-logos/toggle-logo.png`}
                            alt="logo"
                            class="toggle-logo"
                        />
                        <img
                            src={`${basePath}/images/brand-logos/desktop-dark.png`}
                            alt="logo"
                            class="desktop-dark"
                        />
                        <img
                            src={`${basePath}/images/brand-logos/toggle-dark.png`}
                            alt="logo"
                            class="toggle-dark"
                        />
                    </a>
                </div>
            </div>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <div class="header-element mx-lg-0 mx-2">
                <a
                    aria-label="Hide Sidebar"
                    class="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                    data-bs-toggle="sidebar"
                    href="#!"
                    on:click={toggleSidebar}><span></span></a
                >
            </div>
            <!-- End::header-element -->

            <div
                bind:this={container}
                class="header-element header-search d-md-block d-none"
            >
                <!-- Start::header-link -->
                <input
                    bind:this={searchInput}
                    type="text"
                    class="header-search-bar form-control bg-white"
                    id="header-search"
                    on:click={() => {}}
                    on:input={(e: any) => {
                        myfunction(e.target.value);
                        InputValue = e.target.value;
                    }}
                    placeholder="Search"
                    spellcheck="false"
                    autocomplete="off"
                    autocapitalize="off"
                />

                <a href="#!" class="header-search-icon border-0">
                    <i class="bi bi-search fs-12"></i>
                </a>
                {#if showa}
                    <div
                        bind:this={searchResult}
                        class="card search-result position-absolute z-index-9 search-fix border w-100"
                    >
                        <div class="card-header border-bottom">
                            <div class="card-title mb-0 text-break">
                                Search result of {InputValue}
                            </div>
                        </div>
                        <div class="card-body overflow-auto">
                            <ul class="list-group m-2">
                                {#if show2}
                                    {#each NavData.slice(0, 7) as item (item.title)}
                                        <li class="list-group-item">
                                            <a
                                                class="search-result-item"
                                                href={`${basePath}${item.path}`}
                                                on:click={() => {
                                                    showa = false;
                                                    InputValue = "";
                                                }}
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    {/each}
                                {:else}
                                    <b class={searchcolor}>{searchval}</b>
                                {/if}
                            </ul>
                        </div>
                    </div>
                {/if}
                <!-- End::header-link -->
            </div>
        </div>
        <!-- End::header-content-left -->

        <!-- Start::header-content-right -->
        <ul class="header-content-right">
            <!-- Start::header-element -->
            <li class="header-element d-md-none d-block">
                <a
                    href="#!"
                    class="header-link"
                    data-bs-toggle="modal"
                    data-bs-target="#header-responsive-search"
                    on:click={handleShowOpen}
                >
                    <!-- Start::header-link-icon -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="header-link-icon"
                        viewBox="0 0 256 256"
                        ><rect width="256" height="256" fill="none" /><circle
                            cx="112"
                            cy="112"
                            r="80"
                            opacity="0.2"
                        /><circle
                            cx="112"
                            cy="112"
                            r="80"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /><line
                            x1="168.57"
                            y1="168.57"
                            x2="224"
                            y2="224"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /></svg
                    >
                    <!-- End::header-link-icon -->
                </a>
            </li>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <Dropdown
                class="header-element country-selector dropdown d-sm-block d-none"
                autoClose="outside"
            >
                <!-- Start::header-link|dropdown-toggle -->
                <DropdownToggle
                    color=""
                    href="#!"
                    class="header-link border-0"
                    data-bs-auto-close="outside"
                    data-bs-toggle="dropdown"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="header-link-icon"
                        viewBox="0 0 256 256"
                        ><rect width="256" height="256" fill="none" /><path
                            d="M215,168.71a96.42,96.42,0,0,1-30.54,37l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.85-6.22l30.45-12.66a8,8,0,0,1,8.47,1.49Z"
                            opacity="0.2"
                        /><path
                            d="M184,74a8,8,0,0,1-1.94,5.22L159.89,105a8,8,0,0,1-5,2.71l-31.46,4.26a8.06,8.06,0,0,1-5.77-1.45l-19.81-13a8,8,0,0,0-11.34,2l-20.94,31.3a8.06,8.06,0,0,0-1.35,4.41L64,171.49a8,8,0,0,1-3.61,6.64l-9.92,6.52A96,96,0,0,1,184,50Z"
                            opacity="0.2"
                        /><circle
                            cx="128"
                            cy="128"
                            r="96"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /><path
                            d="M184.42,205.68l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.85-6.22l30.45-12.66a8,8,0,0,1,8.47,1.49L215,168.71"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /><path
                            d="M50.49,184.65l9.92-6.52A8,8,0,0,0,64,171.49l.21-36.23a8.06,8.06,0,0,1,1.35-4.41l20.94-31.3a8,8,0,0,1,11.34-2l19.81,13a8.06,8.06,0,0,0,5.77,1.45l31.46-4.26a8,8,0,0,0,5-2.71L182.06,79.2A8,8,0,0,0,184,74V50"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /></svg
                    >
                </DropdownToggle>
                <!-- End::header-link|dropdown-toggle -->
                <DropdownMenu
                    class="main-header-dropdown dropdown-menu dropdown-menu-end"
                    data-popper-placement="none"
                >
                    <!-- <li> -->
                    <DropdownItem
                        class="dropdown-item d-flex align-items-center"
                        href="#!"
                    >
                        <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                            <img
                                src={`${basePath}/images/flags/us_flag.jpg`}
                                alt="img"
                            />
                        </span>
                        English
                    </DropdownItem>
                    <!-- </li> -->
                    <!-- <li> -->
                    <DropdownItem
                        class="dropdown-item d-flex align-items-center"
                        href="#!"
                    >
                        <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                            <img
                                src={`${basePath}/images/flags/spain_flag.jpg`}
                                alt="img"
                            />
                        </span>
                        español
                    </DropdownItem>
                    <!-- </li> -->
                    <!-- <li> -->
                    <DropdownItem
                        class="dropdown-item d-flex align-items-center"
                        href="#!"
                    >
                        <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                            <img
                                src={`${basePath}/images/flags/french_flag.jpg`}
                                alt="img"
                            />
                        </span>
                        français
                    </DropdownItem>
                    <!-- </li> -->
                    <!-- <li> -->
                    <DropdownItem
                        class="dropdown-item d-flex align-items-center"
                        href="#!"
                    >
                        <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                            <img
                                src={`${basePath}/images/flags/uae_flag.jpg`}
                                alt="img"
                            />
                        </span>
                        عربي
                    </DropdownItem>
                    <!-- </li> -->
                    <!-- <li> -->
                    <DropdownItem
                        class="dropdown-item d-flex align-items-center"
                        href="#!"
                    >
                        <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                            <img
                                src={`${basePath}/images/flags/germany_flag.jpg`}
                                alt="img"
                            />
                        </span>
                        Deutsch
                    </DropdownItem>
                    <!-- </li> -->
                    <!-- <li> -->
                    <DropdownItem
                        class="dropdown-item d-flex align-items-center"
                        href="#!"
                    >
                        <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                            <img
                                src={`${basePath}/images/flags/china_flag.jpg`}
                                alt="img"
                            />
                        </span>
                        中国人
                    </DropdownItem>
                    <!-- </li> -->
                    <!-- <li> -->
                    <DropdownItem
                        class="dropdown-item d-flex align-items-center"
                        href="#!"
                    >
                        <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                            <img
                                src={`${basePath}/images/flags/italy_flag.jpg`}
                                alt="img"
                            />
                        </span>
                        Italiano
                    </DropdownItem>
                    <!-- </li> -->
                    <!-- <li> -->
                    <DropdownItem
                        class="dropdown-item d-flex align-items-center"
                        href="#!"
                    >
                        <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                            <img
                                src={`${basePath}/images/flags/russia_flag.jpg`}
                                alt="img"
                            />
                        </span>
                        Русский
                    </DropdownItem>
                    <!-- </li> -->
                </DropdownMenu>
            </Dropdown>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <li class="header-element header-theme-mode">
                <!-- Start::header-link|layout-setting -->
                <a href="#!" class="header-link layout-setting">
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <span
                        class="light-layout"
                        on:click={() => toggleTheme("dark")}
                    >
                        <!-- Start::header-link-icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="header-link-icon"
                            viewBox="0 0 256 256"
                            ><rect width="256" height="256" fill="none" /><path
                                d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z"
                                opacity="0.2"
                            /><path
                                d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /></svg
                        >
                        <!-- End::header-link-icon -->
                    </span>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <span
                        class="dark-layout"
                        on:click={() => toggleTheme("light")}
                    >
                        <!-- Start::header-link-icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="header-link-icon"
                            viewBox="0 0 256 256"
                            ><rect
                                width="256"
                                height="256"
                                fill="none"
                            /><circle
                                cx="128"
                                cy="128"
                                r="56"
                                opacity="0.2"
                            /><line
                                x1="128"
                                y1="40"
                                x2="128"
                                y2="32"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><circle
                                cx="128"
                                cy="128"
                                r="56"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><line
                                x1="64"
                                y1="64"
                                x2="56"
                                y2="56"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><line
                                x1="64"
                                y1="192"
                                x2="56"
                                y2="200"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><line
                                x1="192"
                                y1="64"
                                x2="200"
                                y2="56"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><line
                                x1="192"
                                y1="192"
                                x2="200"
                                y2="200"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><line
                                x1="40"
                                y1="128"
                                x2="32"
                                y2="128"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><line
                                x1="128"
                                y1="216"
                                x2="128"
                                y2="224"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><line
                                x1="216"
                                y1="128"
                                x2="224"
                                y2="128"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /></svg
                        >
                        <!-- End::header-link-icon -->
                    </span>
                </a>
                <!-- End::header-link|layout-setting -->
            </li>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <Dropdown class="header-element cart-dropdown" autoClose="outside">
                <!-- Start::header-link|dropdown-toggle -->
                <DropdownToggle
                    color=""
                    href="#!"
                    class="header-link border-0"
                    data-bs-auto-close="outside"
                    data-bs-toggle="dropdown"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="header-link-icon"
                        viewBox="0 0 256 256"
                        ><rect width="256" height="256" fill="none" /><path
                            d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56Z"
                            opacity="0.2"
                        /><path
                            d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /><circle
                            cx="92"
                            cy="204"
                            r="20"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /><circle
                            cx="188"
                            cy="204"
                            r="20"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /><path
                            d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /></svg
                    >
                    <span
                        class="badge bg-primary rounded-pill header-icon-badge"
                        id="cart-icon-badge">{cartItemCount}</span
                    >
                </DropdownToggle>
                <!-- End::header-link|dropdown-toggle -->
                <!-- Start::main-header-dropdown -->
                <DropdownMenu
                    class="main-header-dropdown dropdown-menu-end"
                    data-popper-placement="none"
                    end
                >
                    <div class="p-3 bg-primary text-fixed-white">
                        <div
                            class="d-flex align-items-center justify-content-between"
                        >
                            <p class="mb-0 fs-16">
                                Cart Items<span
                                    class="badge bg-warning ms-1 fs-12 rounded-circle"
                                    id="cart-data">{cartItemCount}</span
                                >
                            </p>
                            <a
                                href={`#!`}
                                class="text-fixed-white text-decoration-underline fs-12"
                                >Continue Shopping <i
                                    class="ti ti-arrow-narrow-right"
                                ></i></a
                            >
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <Svroller
                        width="100%"
                        height="100%"
                        id="header-cart-items-scroll"
                    >
                        <ul
                            class="list-unstyled mb-0"
                            id="header-cart-items-scroll"
                        >
                            {#each notificationNotes as item, index}
                                <DropdownItem class="dropdown-item">
                                    <div
                                        class="d-flex align-items-start cart-dropdown-item gap-3"
                                    >
                                        <div class="lh-1">
                                            <span
                                                class="avatar avatar-xl bg-gray-300"
                                            >
                                                <img
                                                    src={`${basePath}${item.image}`}
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                        <div class="flex-fill w-75">
                                            <div
                                                class="d-flex align-items-start justify-content-between mb-3"
                                            >
                                                <div
                                                    class="fs-14 fw-medium w-75"
                                                >
                                                    <div class="text-truncate">
                                                        <a
                                                            href={`#!`}
                                                            >{item.name}</a
                                                        >
                                                    </div>
                                                    <div
                                                        class="fs-11 text-muted text-truncate"
                                                    >
                                                        <span
                                                            >{item.description}</span
                                                        >
                                                    </div>
                                                </div>
                                                <div class="text-end">
                                                    <a
                                                        href="#!"
                                                        class="header-cart-remove dropdown-item-close"
                                                        on:click={(
                                                            event: any,
                                                        ) => {
                                                            removeItem(item.id);
                                                        }}
                                                        ><i
                                                            class="ri-delete-bin-line"
                                                        ></i></a
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                class="d-flex align-items-center justify-content-between"
                                            >
                                                <div class="flex-fill">
                                                    <div
                                                        class="lh-1 fs-12 mb-1"
                                                    >
                                                        <span
                                                            class="text-muted fw-normal d-inline-block text-decoration-line-through"
                                                            >$120</span
                                                        ><span
                                                            class="text-success ms-1"
                                                            >25% off</span
                                                        >
                                                    </div>
                                                    <h6 class="fw-medium mb-0">
                                                        $90
                                                    </h6>
                                                </div>
                                                <div
                                                    class="d-flex rounded align-items-center flex-nowrap order-qnt gap-2"
                                                >
                                                    <a
                                                        href="#!"
                                                        class="badge bg-white p-1 border text-muted fs-13 product-quantity-minus"
                                                        on:click={() =>
                                                            decrement(index)}
                                                    >
                                                        <i
                                                            class="ri-subtract-line"
                                                        ></i>
                                                    </a>
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-cart border-0 text-center w-100"
                                                        aria-label="quantity"
                                                        id={`product-qty-${item.id}`}
                                                        bind:value={item.count}
                                                    />
                                                    <a
                                                        href="#!"
                                                        class="badge bg-white p-1 border text-muted fs-13 product-quantity-plus"
                                                        on:click={() =>
                                                            increment(index)}
                                                    >
                                                        <i class="ri-add-line"
                                                        ></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DropdownItem>
                            {/each}
                        </ul>
                    </Svroller>
                    {#if cartItemCount > 0}
                        <div class="p-3 empty-header-item border-top">
                            <div class="text-center d-grid">
                                <a
                                    href={`#!`}
                                    class="btn btn-primary btn-wave"
                                    >Proceed to checkout</a
                                >
                            </div>
                        </div>
                    {:else}
                        <div class="p-5 empty-item">
                            <div class="text-center">
                                <span
                                    class="avatar avatar-xl avatar-rounded bg-success-transparent"
                                >
                                    <i class="ti ti-shopping-cart fs-2"></i>
                                </span>
                                <h6 class="fw-medium mb-1 mt-3">
                                    No items in your cart yet
                                </h6>
                                <span class="mb-3 fw-normal fs-13 d-block"
                                    >Add some to enjoy a seamless checkout
                                    experience! :)</span
                                >
                            </div>
                        </div>
                    {/if}
                </DropdownMenu>
                <!-- End::main-header-dropdown -->
            </Dropdown>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <Dropdown
                class="header-element notifications-dropdown d-xl-block d-none"
            >
                <!-- Start::header-link|dropdown-toggle -->
                <DropdownToggle
                    color=""
                    href="#!"
                    class="header-link border-0"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    id="messageDropdown"
                    aria-expanded="false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="header-link-icon"
                        viewBox="0 0 256 256"
                        ><rect width="256" height="256" fill="none" /><path
                            d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z"
                            opacity="0.2"
                        /><path
                            d="M96,192a32,32,0,0,0,64,0"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /><path
                            d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /></svg
                    >
                    <span
                        class="header-icon-pulse bg-secondary rounded pulse pulse-secondary"
                    ></span>
                </DropdownToggle>
                <!-- End::header-link|dropdown-toggle -->
                <!-- Start::main-header-dropdown -->
                <DropdownMenu
                    class="main-header-dropdown dropdown-menu dropdown-menu-end"
                    data-popper-placement="none"
                >
                    <div class="p-3 bg-primary text-fixed-white">
                        <div
                            class="d-flex align-items-center justify-content-between"
                        >
                            <p class="mb-0 fs-16">Notifications</p>
                            <a
                                href="#!"
                                class="badge bg-light text-default border"
                                >Clear All</a
                            >
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <Svroller
                        width="100%"
                        height="100%"
                        id="header-notification-scroll"
                    >
                        <ul
                            class="list-unstyled mb-0"
                            id="header-notification-scroll"
                        >
                            <DropdownItem
                                class="dropdown-item position-relative"
                            >
                                <a
                                    href={`#!`}
                                    class="stretched-link"
                                ></a>
                                <div class="d-flex align-items-start gap-3">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded bg-primary-transparent"
                                        >
                                            <img
                                                src={`${basePath}/images/faces/1.jpg`}
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <span class="d-block fw-semibold"
                                            >New Message</span
                                        >
                                        <span class="d-block text-muted fs-12"
                                            >You have received a new message
                                            from John Doe</span
                                        >
                                    </div>
                                    <div class="text-end">
                                        <span
                                            class="d-block mb-1 fs-12 text-muted"
                                            >11:45am</span
                                        >
                                        <span
                                            class="d-block text-primary d-none"
                                            ><i class="ri-circle-fill fs-9"
                                            ></i></span
                                        >
                                    </div>
                                </div>
                            </DropdownItem>
                            <DropdownItem
                                class="dropdown-item position-relative"
                            >
                                <a
                                    href={`#!`}
                                    class="stretched-link"
                                ></a>
                                <div class="d-flex align-items-start gap-3">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded bg-primary-transparent"
                                        >
                                            <i
                                                class="ri-notification-line fs-16"
                                            ></i>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <span class="d-block fw-semibold"
                                            >Task Reminder</span
                                        >
                                        <span class="d-block text-muted fs-12"
                                            >Don't forget to submit your report
                                            by 3 PM today</span
                                        >
                                    </div>
                                    <div class="text-end">
                                        <span
                                            class="d-block mb-1 fs-12 text-muted"
                                            >02:16pm</span
                                        >
                                        <span
                                            class="d-block text-primary d-none"
                                            ><i class="ri-circle-fill fs-9"
                                            ></i></span
                                        >
                                    </div>
                                </div>
                            </DropdownItem>
                            <DropdownItem
                                class="dropdown-item position-relative"
                            >
                                <a
                                    href={`#!`}
                                    class="stretched-link"
                                ></a>
                                <div class="d-flex align-items-start gap-3">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded bg-primary-transparent fs-5"
                                        >
                                            <img
                                                src={`${basePath}/images/faces/12.jpg`}
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <span class="d-block fw-semibold"
                                            >Friend Request</span
                                        >
                                        <span class="d-block text-muted fs-12"
                                            >Jane Smith sent you a friend
                                            request</span
                                        >
                                    </div>
                                    <div class="text-end">
                                        <span
                                            class="d-block mb-1 fs-12 text-muted"
                                            >10:04am</span
                                        >
                                        <span class="d-block text-primary"
                                            ><i class="ri-circle-fill fs-9"
                                            ></i></span
                                        >
                                    </div>
                                </div>
                            </DropdownItem>
                            <DropdownItem
                                class="dropdown-item position-relative"
                            >
                                <a
                                    href={`#!`}
                                    class="stretched-link"
                                ></a>
                                <div class="d-flex align-items-start gap-3">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded bg-primary-transparent fs-5"
                                        >
                                            <i
                                                class="ri-notification-line fs-16"
                                            ></i>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <span class="d-block fw-semibold"
                                            >Event Reminder</span
                                        >
                                        <span class="d-block text-muted fs-12"
                                            >You have an upcoming event: Team
                                            Meeting on October 25 at 10 AM.</span
                                        >
                                    </div>
                                    <div class="text-end">
                                        <span
                                            class="d-block mb-1 fs-12 text-muted"
                                            >12:58pm</span
                                        >
                                        <span class="d-block text-primary"
                                            ><i class="ri-circle-fill fs-9"
                                            ></i></span
                                        >
                                    </div>
                                </div>
                            </DropdownItem>
                            <DropdownItem
                                class="dropdown-item position-relative"
                            >
                                <a
                                    href={`#!`}
                                    class="stretched-link"
                                ></a>
                                <div class="d-flex align-items-start gap-3">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded bg-primary-transparent fs-5"
                                        >
                                            <i
                                                class="ri-notification-line fs-16"
                                            ></i>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <span class="d-block fw-semibold"
                                            >File Uploaded</span
                                        >
                                        <span class="d-block text-muted fs-12"
                                            >The file "Project_Proposal.pdf" has
                                            been uploaded successfully</span
                                        >
                                    </div>
                                    <div class="text-end">
                                        <span
                                            class="d-block mb-1 fs-12 text-muted"
                                            >05:13pm</span
                                        >
                                        <span class="d-block text-primary"
                                            ><i class="ri-circle-fill fs-9"
                                            ></i></span
                                        >
                                    </div>
                                </div>
                            </DropdownItem>
                        </ul>
                    </Svroller>
                    <div class="p-5 empty-item1 d-none">
                        <div class="text-center">
                            <span
                                class="avatar avatar-xl avatar-rounded bg-secondary-transparent"
                            >
                                <i class="ri-notification-off-line fs-2"></i>
                            </span>
                            <h6 class="fw-medium mt-3">No New Notifications</h6>
                        </div>
                    </div>
                </DropdownMenu>
                <!-- End::main-header-dropdown -->
            </Dropdown>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <li class="header-element header-fullscreen">
                <!-- Start::header-link -->
                <a
                    href="#!"
                    class="header-link"
                    on:click|preventDefault={toggleFullscreen}
                >
                    {#if isFullscreen}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="full-screen-close header-link-icon"
                            viewBox="0 0 256 256"
                            ><rect width="256" height="256" fill="none" /><rect
                                x="32"
                                y="32"
                                width="192"
                                height="192"
                                rx="16"
                                opacity="0.2"
                            /><polyline
                                points="160 48 208 48 208 96"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><line
                                x1="144"
                                y1="112"
                                x2="208"
                                y2="48"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><polyline
                                points="96 208 48 208 48 160"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><line
                                x1="112"
                                y1="144"
                                x2="48"
                                y2="208"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /></svg
                        >
                    {:else}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="full-screen-open header-link-icon"
                            viewBox="0 0 256 256"
                            ><rect width="256" height="256" fill="none" /><rect
                                x="48"
                                y="48"
                                width="160"
                                height="160"
                                opacity="0.2"
                            /><polyline
                                points="168 48 208 48 208 88"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><polyline
                                points="88 208 48 208 48 168"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><polyline
                                points="208 168 208 208 168 208"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /><polyline
                                points="48 88 48 48 88 48"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            /></svg
                        >
                    {/if}
                </a>
                <!-- End::header-link -->
            </li>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <Dropdown class="header-element dropdown" autoClose="outside">
                <!-- Start::header-link|dropdown-toggle -->
                <DropdownToggle
                    color=""
                    href="#!"
                    class="header-link border-0"
                    id="mainHeaderProfile"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                >
                    <div>
                        <img
                            src={`${basePath}/images/faces/12.jpg`}
                            alt="img"
                            class="header-link-icon"
                        />
                    </div>
                </DropdownToggle>
                <!-- End::header-link|dropdown-toggle -->
                <DropdownMenu
                    class="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
                    aria-labelledby="mainHeaderProfile"
                >
                    <div class="p-3 bg-primary text-fixed-white">
                        <div
                            class="d-flex align-items-center justify-content-between"
                        >
                            <p class="mb-0 fs-16">Profile</p>
                            <a href="#!" class="text-fixed-white"
                                ><i class="ti ti-settings-cog"></i></a
                            >
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <div class="p-3">
                        <div class="d-flex align-items-start gap-2">
                            <div class="lh-1">
                                <span
                                    class="avatar avatar-sm bg-primary-transparent avatar-rounded"
                                >
                                    <img
                                        src={`${basePath}/images/faces/12.jpg`}
                                        alt=""
                                    />
                                </span>
                            </div>
                            <div>
                                <span class="d-block fw-semibold lh-1"
                                    >Tom Phillip</span
                                >
                                <span class="text-muted fs-12"
                                    >tomphillip32@gmail.com</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <ul class="list-unstyled mb-0">
                        <li>
                            <ul class="list-unstyled mb-0 sub-list">
                                <li>
                                    <a
                                        class="dropdown-item d-flex align-items-center"
                                        href={`#!`}
                                        ><i class="ti ti-user-circle me-2 fs-18"
                                        ></i>View Profile</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item d-flex align-items-center"
                                        href={`#!`}
                                        ><i
                                            class="ti ti-settings-cog me-2 fs-18"
                                        ></i>Account Settings</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul class="list-unstyled mb-0 sub-list">
                                <li>
                                    <a
                                        class="dropdown-item d-flex align-items-center"
                                        href="#!"
                                        ><i class="ti ti-lifebuoy me-2 fs-18"
                                        ></i>Support</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item d-flex align-items-center"
                                        href="#!"
                                        ><i class="ti ti-bolt me-2 fs-18"
                                        ></i>Activity Log</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item d-flex align-items-center"
                                        href="#!"
                                        ><i class="ti ti-calendar me-2 fs-18"
                                        ></i>Events</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a
                                class="dropdown-item d-flex align-items-center"
                                href={`${basePath}/`}
                                ><i class="ti ti-logout me-2 fs-18"></i>Log Out</a
                            >
                        </li>
                    </ul>
                </DropdownMenu>
            </Dropdown>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <li class="header-element">
                <!-- Start::header-link|switcher-icon -->
                <a
                    href="#!"
                    class="header-link switcher-icon"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#switcher-canvas"
                    on:click={toggle}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="header-link-icon"
                        viewBox="0 0 256 256"
                        ><rect width="256" height="256" fill="none" /><path
                            d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                            opacity="0.2"
                        /><circle
                            cx="128"
                            cy="128"
                            r="40"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /><path
                            d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                        /></svg
                    >
                </a>
                <!-- End::header-link|switcher-icon -->
            </li>
            <!-- End::header-element -->
        </ul>
        <!-- End::header-content-right -->
    </div>
    <!-- End::main-header-container -->
</header>

<Modal
    isOpen={showOpen}
    fade
    toggle={handleShowClose}
    id="header-responsive-search"
    tabindex={-1}
    aria-labelledby="header-responsive-search"
>
    <ModalBody class="modal-body">
        <div class="input-group" bind:this={container}>
            <input
                bind:this={searchInput}
                on:click={() => {}}
                on:input={(e: any) => {
                    myfunction(e.target.value);
                    InputValue = e.target.value;
                }}
                type="text"
                class="form-control border-end-0"
                placeholder="Search Anything ..."
                aria-label="Search Anything ..."
                aria-describedby="button-addon2"
            />
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button class="btn btn-primary" type="button" id="button-addon2"
                ><i class="bi bi-search"></i></button
            >
             {#if showa}
                    <div
                        bind:this={searchResult}
                        class="card search-result position-absolute z-index-9 w-100 search-fix border"
                    >
                        <div class="card-header border">
                            <div class="card-title mb-0 text-break">
                                Search result of {InputValue}
                            </div>
                        </div>
                        <div class="card-body overflow-auto">
                            <ul class="list-group m-2">
                                {#if show2}
                                    {#each NavData.slice(0, 7) as item (item.title)}
                                        <li class="list-group-item">
                                            <a
                                                class="search-result-item"
                                                href={`${basePath}${item.path}`}
                                                on:click={() => {
                                                    showa = false;
                                                    InputValue = "";
                                                }}
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    {/each}
                                {:else}
                                    <b class={searchcolor}>{searchval}</b>
                                {/if}
                            </ul>
                        </div>
                    </div>
                {/if}

        </div>
    </ModalBody>
</Modal>
