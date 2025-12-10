<script lang="ts">
    import { Svroller } from "svrollbar";
    import { menuData } from "./nav";
    import { writable } from "svelte/store";
    import { afterNavigate } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount, onDestroy } from "svelte";
    import { themeStore } from "../switcher/switcher";
    import RecursiveMenu from "./RecursiveMenu.svelte";
    import { base } from "$app/paths";

    let level = 0;
    let userdata = themeStore.userData;
    // Create a writable store to hold the menu state
    let openMenu: any = writable(menuData);

    const basePath = base;

    // Start of Toggle menu event
    function toggleSubmenu(
        event: any,
        targetObject: any,
        MenuData = $openMenu,
        isChild = false,
    ) {
        let html = document.documentElement;
        let element = event.target;
        if (
            (html.getAttribute("data-nav-style") != "icon-hover" &&
                html.getAttribute("data-nav-style") != "menu-hover") ||
            window.innerWidth < 992 ||
            (html.getAttribute("data-nav-layout") != "horizontal" &&
                html.getAttribute("data-toggled") != "icon-hover-closed" &&
                html.getAttribute("data-toggled") != "menu-hover-closed")
        ) {
            for (const item of MenuData) {
                if (item === targetObject) {
                    if (
                        html.getAttribute("data-vertical-style") ==
                            "doublemenu" &&
                        item.active
                        
                    ) {
                        // checking for child in double menu
                        if (isChild) {
                            item.active = !item.active; // Children toggle normally
                        } else {
                            item.active = true; // Parent should always stay active when double menu active
                        }
                    } else {
                        item.active = !item.active;
                    }
                    if (item.active) {
                        closeOtherMenus(MenuData, item);
                    }
                    setAncestorsActive(MenuData, item, undefined);
                } else if (
                    !item.active &&
                    html.getAttribute("data-vertical-style") != "doublemenu"
                ) {
                    item.active = false; // Set active to false for items not matching the target
                }
                if (item.children && item.children.length > 0) {
                    toggleSubmenu(event, targetObject, item.children, true);
                }
            }
            if (targetObject?.children && targetObject.active) {
                if (
                    html.getAttribute("data-vertical-style") == "doublemenu" &&
                    html.getAttribute("data-toggled") != "double-menu-open"
                ) {
                    html.setAttribute("data-toggled", "open");
                }
            }
            if (
                element &&
                html.getAttribute("data-nav-layout") == "horizontal" &&
                (html.getAttribute("data-nav-style") == "menu-click" ||
                    html.getAttribute("data-nav-style") == "icon-click")
            ) {
                let listItem = element.closest("li");
                if (listItem) {
                    // Find the first sibling <ul> element
                    let siblingUL = listItem.querySelector("ul");
                    let outterUlWidth = 0;
                    let listItemUL = listItem.closest("ul:not(.main-menu)");
                    while (listItemUL) {
                        listItemUL =
                            listItemUL.parentElement.closest(
                                "ul:not(.main-menu)",
                            );
                        if (listItemUL) {
                            outterUlWidth += listItemUL.clientWidth;
                        }
                    }
                    if (siblingUL) {
                        // You've found the sibling <ul> element
                        let siblingULRect = listItem.getBoundingClientRect();
                        if (html.getAttribute("dir") == "rtl") {
                            if (
                                siblingULRect.left -
                                    siblingULRect.width -
                                    outterUlWidth +
                                    150 <
                                    0 &&
                                outterUlWidth < window.innerWidth &&
                                outterUlWidth +
                                    siblingULRect.width +
                                    siblingULRect.width <
                                    window.innerWidth
                            ) {
                                targetObject.dirchange = true;
                            } else {
                                targetObject.dirchange = false;
                            }
                        } else {
                            if (
                                outterUlWidth +
                                    siblingULRect.right +
                                    siblingULRect.width +
                                    50 >
                                    window.innerWidth &&
                                siblingULRect.right >= 0 &&
                                outterUlWidth +
                                    siblingULRect.width +
                                    siblingULRect.width <
                                    window.innerWidth
                            ) {
                                targetObject.dirchange = true;
                            } else {
                                targetObject.dirchange = false;
                            }
                        }
                    }
                }
            }
        }
        openMenu.update((arr: any) => [...arr]);
    }

    afterNavigate(() => {
        Baselocation = $page.url.pathname;
        const updatedMenu = updateMenu($openMenu);
        openMenu.set(updatedMenu);
    });

    let Baselocation = $page.url.pathname;

    const updateMenu = (menu: any) => {
        const normalizePath = (path: any) => {
            return path && path.endsWith("/") ? path.slice(0, -1) : path;
        };

        const pathName = normalizePath(Baselocation);
        return menu?.map((menuItem: any) => {
            const menuItemPath = normalizePath(basePath + menuItem?.path);
            if (menuItemPath === pathName) {
                menuItem.active = true;
                menuItem.selected = true;
            } else if (menuItem.children) {
                menuItem.children = updateMenu(menuItem.children);
                if (menuItem.children.some((subMenu: any) => subMenu.active)) {
                    menuItem.active = true;
                    menuItem.selected = true; // Parent gets selected if any child is active
                } else {
                    menuItem.active = false;
                    menuItem.selected = false;
                }
            } else {
                menuItem.active = false;
                menuItem.selected = false;
            }
            return menuItem;
        });
    };

    function setAncestorsActive(
        menuData: any,
        targetObject: any,
        level: number | undefined,
    ) {
        let html = document.documentElement;
        const parent = findParent(menuData, targetObject);
        if (parent) {
            parent.active = true;
            if (parent.active) {
                html.setAttribute("data-toggled", "double-menu-open");
            }
            setAncestorsActive(menuData, parent, level);
        } else {
            if (
                html.getAttribute("data-vertical-style") == "doublemenu" &&
                level == 1
            ) {
                html.setAttribute("data-toggled", "double-menu-close");
            }
        }
    }
    function closeOtherMenus(menuData: any, targetObject: any) {
        for (const item of menuData) {
            if (item !== targetObject) {
                item.active = false;
                if (item.children && item.children.length > 0) {
                    closeOtherMenus(item.children, targetObject);
                }
            }
        }
    }
    function findParent(MenuData = menuData, targetObject: null) {
        for (const item of MenuData) {
            if (item.children && item.children.includes(targetObject)) {
                return item;
            }
            if (item.children && item.children.length > 0) {
                const parent: null = findParent(
                    (MenuData = item.children),
                    targetObject,
                );
                if (parent) {
                    return parent;
                }
            }
        }
        return null;
    }
    // End of Toggle menu event
    function HoverToggleInnerMenuFn(event: any, item: any) {
        let html = document.documentElement;
        let element = event.target;
        if (
            element &&
            html.getAttribute("data-nav-layout") == "horizontal" &&
            (html.getAttribute("data-nav-style") == "menu-hover" ||
                html.getAttribute("data-nav-style") == "icon-hover")
        ) {
            const listItem = element.closest("li");
            if (listItem) {
                // Find the first sibling <ul> element
                const siblingUL = listItem.querySelector("ul");
                let outterUlWidth = 0;
                let listItemUL = listItem.closest("ul:not(.main-menu)");
                while (listItemUL) {
                    listItemUL =
                        listItemUL.parentElement.closest("ul:not(.main-menu)");
                    if (listItemUL) {
                        outterUlWidth += listItemUL.clientWidth;
                    }
                }
                if (siblingUL) {
                    // You've found the sibling <ul> element
                    let siblingULRect = listItem.getBoundingClientRect();
                    if (html.getAttribute("dir") == "rtl") {
                        if (
                            siblingULRect.left -
                                siblingULRect.width -
                                outterUlWidth +
                                150 <
                                0 &&
                            outterUlWidth < window.innerWidth &&
                            outterUlWidth +
                                siblingULRect.width +
                                siblingULRect.width <
                                window.innerWidth
                        ) {
                            item.dirchange = true;
                        } else {
                            item.dirchange = false;
                        }
                    } else {
                        if (
                            outterUlWidth +
                                siblingULRect.right +
                                siblingULRect.width +
                                50 >
                                window.innerWidth &&
                            siblingULRect.right >= 0 &&
                            outterUlWidth +
                                siblingULRect.width +
                                siblingULRect.width <
                                window.innerWidth
                        ) {
                            item.dirchange = true;
                        } else {
                            item.dirchange = false;
                        }
                    }
                }
            }
        }
    }

    // Store for pathname and previous URL tracking
    let previousUrl = writable("/");
    let currentPath = writable("");

    // You may need to initialize these variables based on your Svelte routing setup
    let hasParent = false;
    let hasParentLevel = 1;

    // Start of Set menu Active event

    function setSubmenu(event: any, targetObject: any, menuData = $openMenu) {
        const html = document.documentElement;

        // Check conditions based on data-nav-style
        if (
            (window.screen.availWidth <= 992 ||
                html.getAttribute("data-nav-style") != "icon-hover") &&
            (window.screen.availWidth <= 992 ||
                html.getAttribute("data-nav-style") != "menu-hover")
        ) {
            if (!event?.ctrlKey) {
                // Loop through each menu item
                for (const item of menuData) {
                    if (item === targetObject) {
                        item.active = true;
                        item.selected = true;
                        setMenuAncestorsActive(item);
                    } else if (!item.active && !item.selected) {
                        item.active = false; // Set active to false for items not matching the target
                        item.selected = false; // Set active to false for items not matching the target
                    } else {
                        removeActiveOtherMenus(item);
                    }
                    if (item.children && item.children.length > 0) {
                        setSubmenu(event, targetObject, item.children);
                    }
                }
            }
        }
        // Trigger an update to the openMenu store
        openMenu.update((arr: any) => [...arr]);
    }

    function getParentObject(obj: any, childObject: any) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (
                    typeof obj[key] === "object" &&
                    JSON.stringify(obj[key]) === JSON.stringify(childObject)
                ) {
                    return obj; // Return the parent object
                }
                if (typeof obj[key] === "object") {
                    const parentObject: any = getParentObject(
                        obj[key],
                        childObject,
                    );
                    if (parentObject !== null) {
                        return parentObject;
                    }
                }
            }
        }
        return null; // Object not found
    }

    // Recursive function to set ancestors as active
    function setMenuAncestorsActive(targetObject: any) {
        const parent = getParentObject(menuData, targetObject);
        let html = document.documentElement;

        if (parent) {
            if (hasParentLevel > 2) {
                hasParent = true;
            }
            parent.active = true;
            parent.selected = true;
            hasParentLevel += 1;

            setMenuAncestorsActive(parent);
        } else if (!hasParent) {
            if (html.getAttribute("data-vertical-style") === "doublemenu") {
                html.setAttribute("data-toggled", "double-menu-close");
            }
        }
    }
    function removeActiveOtherMenus(item: any) {
        if (item) {
            if (Array.isArray(item)) {
                for (const val of item) {
                    val.active = false;
                    val.selected = false;
                }
            }
            item.active = false;
            item.selected = false;

            if (item.children && item.children.length > 0) {
                removeActiveOtherMenus(item.children);
            }
        } else {
            // return;
        }
    }
    // End of Set menu Active event

    const setMenuUsingUrl = (currentPath: any) => {
        hasParent = false;
        hasParentLevel = 1;
        const setSubmenuRecursively = (items: any) => {
            items?.forEach((item: any) => {
                if (!item) return; // Skip null or undefined items
                if (item.path == "") {
                    return;
                }
                // check the paths are matching or not
                else if (currentPath.endsWith(item.path)) {
                    setSubmenu(null, item);
                }
                setSubmenuRecursively(item.children);
            });
        };
        openMenu.update((currentMenuData: any) => {
            setSubmenuRecursively(currentMenuData);
            return [...currentMenuData];
        });
    };

    // Handle attribute changes in mutation observer
    const handleAttributeChange = (mutationsList: any) => {
        for (const mutation of mutationsList) {
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "data-nav-layout"
            ) {
                const newValue =
                    mutation.target.getAttribute("data-nav-layout");
                if (newValue === "vertical") {
                    let currentPathVal = Baselocation.endsWith("/")
                        ? Baselocation.slice(0, -1)
                        : Baselocation;
                    currentPathVal = !currentPathVal
                        ? "/dashboards/ecommerce"
                        : currentPathVal;
                    currentPath.set(currentPathVal); // Update current path in the store
                    setMenuUsingUrl(currentPathVal);
                } else {
                    closeMenuFn(); // Ensure you define closeMenu logic elsewhere
                }
            }
        }
    };

    // Use Svelte's onMount to create and observe mutations
    onMount(() => {
        const targetElement = document.documentElement;

        const observer = new MutationObserver(handleAttributeChange);
        const config = { attributes: true };

        observer.observe(targetElement, config);

        return () => {
            observer.disconnect();
        };
    });

    $: {
        // Ensure this runs only in the browser
        if (typeof window !== "undefined") {
            const path = Baselocation.endsWith("/")
                ? Baselocation.slice(0, -1)
                : Baselocation;

            if (path !== $previousUrl) {
                currentPath.set(path); // Update current path
                setMenuUsingUrl(path);
                previousUrl.set(path); // Update previous URL
            }
        }
    }

    function switcherArrowFn() {
        // Used to remove is-expanded class and remove class on clicking arrow buttons
        function slideClick() {
            const slide = document.querySelectorAll(".slide");
            const slideMenu = document.querySelectorAll(".slide-menu");

            slide.forEach((element: any) => {
                if (element.classList.contains("is-expanded")) {
                    element.classList.remove("is-expanded");
                }
            });

            slideMenu.forEach((element: any) => {
                if (element.classList.contains("open")) {
                    element.classList.remove("open");
                    element.style.display = "none";
                }
            });
        }

        slideClick();
    }

    function leftArrowFn() {
        // Used to move the slide of the menu in Horizontal and also remove the arrows after click  if there was no space
        // Used to Slide the menu to Left side
        let slideLeft: any = document.querySelector(".slide-left");
        let slideRight: any = document.querySelector(".slide-right");
        let menuNav: any = document.querySelector(".main-menu");
        let mainContainer1: any = document.querySelector(".main-sidebar");
        let marginRightValue = Math.ceil(
            Number(
                window
                    .getComputedStyle(menuNav)
                    .marginInlineStart.split("px")[0],
            ),
        );
        let mainContainer1Width = mainContainer1.offsetWidth;
        if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
            if (
                marginRightValue < 0 &&
                !(Math.abs(marginRightValue) < mainContainer1Width)
            ) {
                menuNav.style.marginInlineStart =
                    Number(menuNav.style.marginInlineStart.split("px")[0]) +
                    Math.abs(mainContainer1Width) +
                    "px";
                slideRight.classList.remove("d-none");
            } else if (marginRightValue >= 0) {
                menuNav.style.marginInlineStart = "0px";
                slideLeft.classList.add("d-none");
                slideRight.classList.remove("d-none");
            } else {
                menuNav.style.marginInlineStart = "0px";
                slideLeft.classList.add("d-none");
                slideRight.classList.remove("d-none");
            }
        } else {
            menuNav.style.marginInlineStart = "0px";
            slideLeft.classList.add("d-none");
        }

        let element = document.querySelector(".main-menu > .slide.open");
        let element1: any = document.querySelector(
            ".main-menu > .slide.open >ul",
        );
        if (element) {
            element.classList.remove("open");
        }
        if (element1) {
            element1.style.display = "none";
        }
        // switcherArrowFn()
    }
    function rightArrowFn() {
        // Used to move the slide of the menu in Horizontal and also remove the arrows after click  if there was no space
        // Used to Slide the menu to Right side
        let slideLeft: any = document.querySelector(".slide-left");
        let slideRight: any = document.querySelector(".slide-right");
        let menuNav: any = document.querySelector(".main-menu");
        let mainContainer1: any = document.querySelector(".main-sidebar");
        let marginRightValue: any = Math.ceil(
            Number(
                window
                    .getComputedStyle(menuNav)
                    .marginInlineStart.split("px")[0],
            ),
        );
        let check = menuNav.scrollWidth - mainContainer1.offsetWidth;
        let mainContainer1Width = mainContainer1.offsetWidth;
        if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
            if (Math.abs(check) > Math.abs(marginRightValue)) {
                if (
                    !(
                        Math.abs(check) >
                        Math.abs(marginRightValue) + mainContainer1Width
                    )
                ) {
                    mainContainer1Width =
                        Math.abs(check) - Math.abs(marginRightValue);
                    slideRight.classList.add("d-none");
                }
                menuNav.style.marginInlineStart =
                    Number(menuNav.style.marginInlineStart.split("px")[0]) -
                    Math.abs(mainContainer1Width) +
                    "px";
                slideLeft.classList.remove("d-none");
            }
        }

        let element = document.querySelector(".main-menu > .slide.open");
        let element1: any = document.querySelector(
            ".main-menu > .slide.open >ul",
        );
        if (element) {
            element.classList.remove("open");
        }
        if (element1) {
            element1.style.display = "none";
        }
        // switcherArrowFn()
        // checkHoriMenu();
    }

    function checkHoriMenu() {
        let menuNav: any = document.querySelector(".main-sidebar");
        let mainMenu: any = document.querySelector(".main-menu");
        let slideLeft = document.querySelector(".slide-left");
        let slideRight = document.querySelector(".slide-right");

        // Show/Hide the arrows
        if (mainMenu && menuNav && slideRight && slideLeft) {
            let marginRightValue = Math.ceil(
                Number(
                    window
                        .getComputedStyle(mainMenu)
                        .marginInlineStart.split("px")[0],
                ),
            );
            if (mainMenu?.scrollWidth > menuNav?.offsetWidth) {
                slideRight?.classList.remove("d-none");
                slideLeft?.classList.add("d-none");
            } else {
                slideRight?.classList.add("d-none");
                slideLeft?.classList.add("d-none");
                mainMenu.style.marginLeft = "0px";
                mainMenu.style.marginRight = "0px";
            }
            if (marginRightValue == 0) {
                slideLeft?.classList.add("d-none");
            } else {
                slideLeft?.classList.remove("d-none");
            }
        }
    }

    function menuClose() {
        let html = document.documentElement;
        if (window.innerWidth <= 992) {
            html.setAttribute("data-toggled", "close");
        }
        let overlayElement = document.querySelector("#responsive-overlay");
        if (overlayElement) {
            overlayElement.classList.remove("active");
        }
        if (
            html.getAttribute("data-nav-layout") == "horizontal" ||
            html.getAttribute("data-nav-style") == "menu-click" ||
            html.getAttribute("data-nav-style") == "icon-click" ||
            html.getAttribute("data-nav-style") == "icon-hover"
        ) {
            closeMenuFn();
        }
    }

    function closeMenuFn() {
        const closeMenuRecursively = (items: any) => {
            items?.forEach((item: any) => {
                item.active = false;
                if (item.children) closeMenuRecursively(item.children);
            });
        };
        openMenu.update((currentMenuData: any) => {
            closeMenuRecursively(currentMenuData);
            return [...currentMenuData];
        });
    }
    // End of Menu Close functionality
    // Start of Resize check for menu

    let windowWidth;

    // Check if we are in a browser environment before accessing window
    if (typeof window !== "undefined") {
        // Set the initial width
        windowWidth = window.innerWidth;

        const updateWidth = () => {
            windowWidth = window.innerWidth;
            let html = document.documentElement;
            if (window.innerWidth < 992) {
                html.setAttribute("data-toggled", "close");
            }
            const overlayElement = document.querySelector(
                "#responsive-overlay",
            );
            if (overlayElement) {
                overlayElement.classList.remove("active");
            }
        };

        // Add event listener for window resize
        window.addEventListener("resize", updateWidth);

        // Cleanup the event listener on component destroy

        onDestroy(() => {
            window.removeEventListener("resize", updateWidth);
        });
    }

    let WindowPreSize =
        typeof window !== "undefined" ? [window.innerWidth] : [];

    function menuResizeFn() {
        WindowPreSize.push(window.innerWidth);
        if (WindowPreSize.length > 2) {
            WindowPreSize.shift();
        }
        if (WindowPreSize.length > 1) {
            if (
                WindowPreSize[WindowPreSize.length - 1] < 992 &&
                WindowPreSize[WindowPreSize.length - 2] >= 992
            ) {
                // less than 992;
                let html = document.documentElement;
                html.setAttribute("data-toggled", "close");
            }

            if (
                WindowPreSize[WindowPreSize.length - 1] >= 992 &&
                WindowPreSize[WindowPreSize.length - 2] < 992
            ) {
                let html = document.documentElement;
                if (html.getAttribute("data-vertical-style") == "doublemenu") {
                    if (document.querySelector(".double-menu-active")) {
                        html.setAttribute("data-toggled", "double-menu-open");
                    } else {
                        html.setAttribute("data-toggled", "double-menu-close");
                    }
                } else {
                    html.removeAttribute("data-toggled");
                }
            }
        }
    }

    // End of Resize check for menu
    onMount(() => {
        let html = document.documentElement;
        window.addEventListener("resize", menuResizeFn);
        window.addEventListener("resize", checkHoriMenu);
        let mainContent: any = document.querySelector(".main-content");

        if (window.innerWidth < 992) {
            if (mainContent) {
                html.setAttribute("data-toggled", "close");
            }
        } else if (html.getAttribute("data-nav-layout") == "horizontal") {
            closeMenuFn();
        }
        // if (mainContent) {
        //   mainContent.addEventListener("click", menuClose);
        // }
        mainContent.addEventListener("click", menuClose);
        return () => {
            window.removeEventListener("resize", menuResizeFn);
            window.removeEventListener("resize", checkHoriMenu);
        };
    });

    // handle the theme

    const toggleTheme = (value: any) => {
        // Assuming themeStore.colorthemeFn is already defined elsewhere
        themeStore.updateColorThemeFn(value);
        localStorage.setItem("vyzorcolortheme", value);
        localStorage.removeItem("vyzorMenu");
        localStorage.removeItem("vyzorHeader");
        localStorage.removeItem("vyzorbodylightRGB");
        localStorage.removeItem("vyzorbodyBgRGB");
    };

    //  prevent the reload or refresh

    const handleClick = (event: any) => {
        event.preventDefault(); // Prevents the default anchor behavior (navigation)
    };
</script>

<a href="#!" on:click={menuClose} aria-label="Close menu">
    <div id="responsive-overlay"></div>
</a>

<!-- Start::app-sidebar -->
<aside class="app-sidebar sticky" id="sidebar">
    <!-- Start::main-sidebar-header -->
    <div class="main-sidebar-header">
        <a href={`${basePath}/dashboards/sales`} class="header-logo">
            <img
                src={`${basePath}/images/brand-logos/desktop-logo.png`}
                alt="logo"
                class="desktop-logo"
            />
            <img
                src={`${basePath}/images/brand-logos/toggle-dark.png`}
                alt="logo"
                class="toggle-dark"
            />
            <img
                src={`${basePath}/images/brand-logos/desktop-dark.png`}
                alt="logo"
                class="desktop-dark"
            />
            <img
                src={`${basePath}/images/brand-logos/toggle-logo.png`}
                alt="logo"
                class="toggle-logo"
            />
        </a>
    </div>
    <!-- End::main-sidebar-header -->

    <!-- Start::main-sidebar -->
    <div class="main-sidebar" id="sidebar-scroll">
        <Svroller width="100%" height="100%">
            <!-- Start::nav -->
            <nav class="main-menu-container nav nav-pills flex-column sub-open">
                <a
                    href="#!"
                    role="button"
                    on:click={leftArrowFn}
                    aria-label="left-arrow"
                >
                    <div class="slide-left" id="slide-left">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#7b8191"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
                            ></path>
                        </svg>
                    </div>
                </a>
                <ul class="main-menu">
                    {#each $openMenu || [] as levelone, index}
                        <li
                            class={`${
                                levelone?.menutitle ? "slide__category" : ""
                            } ${levelone?.type === "link" ? "slide" : ""} ${
                                levelone?.type === "empty" ? "slide" : ""
                            } ${levelone?.type === "sub" ? "slide has-sub" : ""} ${
                                levelone?.active ? "open" : ""
                            } ${levelone?.selected ? "active" : ""}`}
                        >
                            {#if levelone?.menutitle}
                                <span class="category-name"
                                    >{levelone.menutitle}</span
                                >
                            {/if}
                            {#if levelone?.type === "link"}
                                <a
                                    href={`${basePath}${levelone.path}`}
                                    class="side-menu__item {levelone.selected
                                        ? 'active'
                                        : ''}"
                                >
                                    {#if levelone.icon}
                                        {@html levelone.icon}
                                    {/if}
                                    <span class="side-menu__label">
                                        {levelone.title}
                                        {#if levelone.badgetxt}
                                            <span
                                                >{@html levelone.badgetxt}</span
                                            >
                                        {/if}
                                    </span>
                                </a>
                            {/if}
                            {#if levelone?.type === "empty"}
                                <!-- svelte-ignore a11y-invalid-attribute -->
                                <a
                                    href="#!"
                                    class="side-menu__item"
                                    on:click={handleClick}
                                >
                                    {#if levelone.icon}
                                        {@html levelone.icon}
                                    {/if}
                                    <span class="side-menu__label">
                                        {levelone.title}
                                        {#if levelone.badgetxt}
                                            <span
                                                >{@html levelone.badgetxt}</span
                                            >
                                        {/if}
                                    </span>
                                </a>
                            {/if}
                            {#if levelone?.type === "sub"}
                                {#if levelone.children}
                                    <RecursiveMenu
                                        menuData={levelone}
                                        {toggleSubmenu}
                                        {HoverToggleInnerMenuFn}
                                        level={level + 1}
                                    />
                                {/if}
                            {/if}
                        </li>
                    {/each}
                </ul>
                <li>
                    <ul class="slide-menu child1 doublemenu_slide-menu">
                        <li class="text-center p-3 text-fixed-white">
                            <div class="doublemenu_slide-menu-background">
                                <img
                                    src={`${basePath}/images/media/backgrounds/13.png`}
                                    alt=""
                                />
                            </div>
                            <div
                                class="d-flex flex-column align-items-center justify-content-between h-100"
                            >
                                <div class="fs-15 fw-medium">
                                    Dashboard AI Helper
                                </div>
                                <div>
                                    <span class="avatar avatar-lg p-1">
                                        <img
                                            src={`${basePath}/images/media/media-80.png`}
                                            alt=""
                                        />
                                        <span class="top-right"></span>
                                        <span class="bottom-right"></span>
                                    </span>
                                </div>
                                <div class="d-grid w-100">
                                    <button class="btn btn-white border-0"
                                        >Try Now</button
                                    >
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <ul class="doublemenu_bottom-menu main-menu mb-0 border-top">
                    <!-- Start::slide -->
                    <li class="slide">
                        <!-- svelte-ignore a11y_interactive_supports_focus -->
                        <a
                            href="#!"
                            class="side-menu__item layout-setting-doublemenu"
                        >
                            <!-- svelte-ignore a11y_interactive_supports_focus -->
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <span
                                class="light-layout"
                                role="button"
                                on:click={() => toggleTheme("dark")}
                            >
                                <!-- Start::header-link-icon -->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="side-menu__icon"
                                    viewBox="0 0 256 256"
                                    ><rect
                                        width="256"
                                        height="256"
                                        fill="none"
                                    /><path
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
                                    class="side-menu__icon"
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
                            <span class="side-menu__label">Theme Settings</span>
                        </a>
                    </li>
                    <!-- End::slide -->
                    <!-- Start::slide -->
                    <li class="slide">
                        <a
                            href={`${basePath}/`}
                            class="side-menu__item"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="side-menu__icon"
                                viewBox="0 0 256 256"
                                ><rect
                                    width="256"
                                    height="256"
                                    fill="none"
                                /><path
                                    d="M48,40H208a16,16,0,0,1,16,16V200a16,16,0,0,1-16,16H48a0,0,0,0,1,0,0V40A0,0,0,0,1,48,40Z"
                                    opacity="0.2"
                                /><polyline
                                    points="112 40 48 40 48 216 112 216"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><line
                                    x1="112"
                                    y1="128"
                                    x2="224"
                                    y2="128"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><polyline
                                    points="184 88 224 128 184 168"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /></svg
                            >
                            <span class="side-menu__label">Logout</span>
                        </a>
                    </li>
                    <!-- End::slide -->
                    <!-- Start::slide -->
                    <li class="slide">
                        <a
                            href={`#!`}
                            class="side-menu__item"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="side-menu__icon"
                                viewBox="0 0 256 256"
                                ><rect
                                    width="256"
                                    height="256"
                                    fill="none"
                                /><path
                                    d="M205.31,71.08a16,16,0,0,1-20.39-20.39A96,96,0,0,0,63.8,199.38h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.37A96,96,0,0,0,205.31,71.08Z"
                                    opacity="0.2"
                                /><line
                                    x1="200"
                                    y1="40"
                                    x2="200"
                                    y2="28"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><circle
                                    cx="200"
                                    cy="56"
                                    r="16"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><line
                                    x1="186.14"
                                    y1="48"
                                    x2="175.75"
                                    y2="42"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><line
                                    x1="186.14"
                                    y1="64"
                                    x2="175.75"
                                    y2="70"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><line
                                    x1="200"
                                    y1="72"
                                    x2="200"
                                    y2="84"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><line
                                    x1="213.86"
                                    y1="64"
                                    x2="224.25"
                                    y2="70"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><line
                                    x1="213.86"
                                    y1="48"
                                    x2="224.25"
                                    y2="42"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><circle
                                    cx="128"
                                    cy="120"
                                    r="40"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><path
                                    d="M63.8,199.37a72,72,0,0,1,128.4,0"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /><path
                                    d="M222.67,112A95.92,95.92,0,1,1,144,33.33"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                /></svg
                            >
                            <span class="side-menu__label"
                                >Profile Settings</span
                            >
                        </a>
                    </li>
                    <!-- End::slide -->
                    <!-- Start::slide -->
                    <li class="slide">
                        <a
                            href={`#!`}
                            class="side-menu__item p-1 rounded-circle mb-0"
                        >
                            <span class="avatar avatar-md avatar-rounded">
                                <img
                                    src={`${basePath}/images/faces/10.jpg`}
                                    alt=""
                                />
                                <span class="side-menu__label">David</span>
                            </span>
                        </a>
                    </li>
                    <!-- End::slide -->
                </ul>
                <a
                    href="#!"
                    role="button"
                    on:click={rightArrowFn}
                    aria-label="right-arrow"
                >
                    <div class="slide-right" id="slide-right">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#7b8191"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                            ></path>
                        </svg>
                    </div>
                </a>
            </nav>
            <!-- End::nav -->
        </Svroller>
    </div>
    <!-- End::main-sidebar -->
</aside>
<!-- End::app-sidebar -->
