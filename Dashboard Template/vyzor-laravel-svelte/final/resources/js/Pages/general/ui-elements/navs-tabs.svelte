<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Row,
        NavLink,
        TabPane,
        TabContent,
        NavItem,
        Nav,
        Dropdown,
        DropdownToggle,
        DropdownItem,
        DropdownMenu,
        Col,
    } from "@sveltestrap/sveltestrap";

    let activeTab = 1;
    let justifyTab = 3;
    let pillsTab = 2;
    let justifyPillsTab = 2;
    let verticalTab = 1;
    let VerticallinkTab = 2;
    let CenterTab = 1;
    let RightTab = 1;
    let headerTab = 1;
    let footerTab = 1;
    let TabStyle1Tab = 1;
    let TabStyle2Tab = 2;
    let TabStyle3Tab = 1;
    let TabStyle4Tab = 1;
    let TabStyle5Tab = 1;
    let TabStyle6Tab = 1;
    let TabStyle8Tab = 1;
    let VerticalStyle1Tab = 1;
    let VerticalStyle2Tab = 1;
    let VerticalStyle3Tab = 1;
    let Tabswithdropdowns = 1;
    let Pillswithdropdowns = 1;
    let FIllPills = 1;
    let justifiedPills = 1;
    let WorkingTab = 1;

    function handleJustifyTab(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        justifyTab = tabIndex; // Set the active tab to the clicked tab
    }

    function handleJustifyPillsTab(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        justifyPillsTab = tabIndex; // Set the active tab to the clicked tab
    }

    function handleVerticalTab(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        verticalTab = tabIndex; // Set the active tab to the clicked tab
    }

    function handleVerticallinkTab(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        VerticallinkTab = tabIndex; // Set the active tab to the clicked tab
    }

    function handleCenterTab(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        CenterTab = tabIndex; // Set the active tab to the clicked tab
    }

    function handleRightTab(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        RightTab = tabIndex; // Set the active tab to the clicked tab
    }

    function handleHeaderTab(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        headerTab = tabIndex; // Set the active tab to the clicked tab
    }

    function handleFooterTab(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        footerTab = tabIndex; // Set the active tab to the clicked tab
    }

    function handleTabStyle1Tab(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        TabStyle1Tab = tabIndex; // Set the active tab to the clicked tab
    }

    function handleTabswithdropdowns(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        Tabswithdropdowns = tabIndex; // Set the active tab to the clicked tab
    }
    function handlePillswithdropdowns(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        Pillswithdropdowns = tabIndex; // Set the active tab to the clicked tab
    }
    function handleFIllPills(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        FIllPills = tabIndex; // Set the active tab to the clicked tab
    }
    function handleJustifiedPills(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        justifiedPills = tabIndex; // Set the active tab to the clicked tab
    }

    function handleWorkingTab(tabIndex, event) {
        event.preventDefault(); // Prevent default behavior (scrolling or navigating)
        WorkingTab = tabIndex; // Set the active tab to the clicked tab
    }
</script>

<!-- Page Title -->
<svelte:head>
    <title>NavsTabs | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<Pageheader
    homepage="Navs & Tabs"
    activepage="UI Elements"
    page="Navs & Tabs"
/>

<!-- Start:: row-1 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Static Tabs</div>
            </div>
            <div class="card-body">
                <Nav class="static-tabs nav-tabs border-0 ">
                    <NavLink href="#!" class="me-2" active>Active</NavLink>
                    <NavLink href="#!" class="me-2">Link</NavLink>
                    <NavLink href="#!" class="me-2">Link</NavLink>
                    <NavLink disabled href="#!">Disabled</NavLink>
                </Nav>
            </div>
        </div>
    </Col>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Static Pills</div>
            </div>
            <div class="card-body">
                <Nav pills>
                    <NavItem>
                        <NavLink href="#!" active>Active</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#!">Disabled</NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Default Nav Tabs</div>
            </div>
            <div class="card-body">
                <Nav class="mb-3 default-nav-tab nav-tabs" role="tablist">
                    <NavItem class="">
                        <NavLink
                            class=""
                            on:click={() => (activeTab = 1)}
                            active={activeTab == 1}
                            data-bs-toggle="tab"
                            role="tab"
                            href="#!"
                            aria-selected="true">Home</NavLink
                        >
                    </NavItem>
                    <NavItem class="">
                        <NavLink
                            class="nav-link"
                            on:click={() => (activeTab = 2)}
                            active={activeTab == 2}
                            data-bs-toggle="tab"
                            role="tab"
                            href="#!"
                            aria-selected="false">About</NavLink
                        >
                    </NavItem>
                    <NavItem class="">
                        <NavLink
                            class="nav-link"
                            on:click={() => (activeTab = 3)}
                            active={activeTab == 3}
                            data-bs-toggle="tab"
                            role="tab"
                            href="#!"
                            aria-selected="false">Services</NavLink
                        >
                    </NavItem>
                    <NavItem class="">
                        <NavLink
                            class="nav-link"
                            on:click={() => (activeTab = 4)}
                            active={activeTab == 4}
                            data-bs-toggle="tab"
                            role="tab"
                            href="#!"
                            aria-selected="false">License</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="" id="DefaultNavTabs">
                    <TabPane
                        class={`text-muted ${activeTab == 1 ? "active" : ""}`}
                        id="home1"
                        role="tabpanel"
                    >
                        <b>Lorem Ipsum is simply dummy</b> text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${activeTab == 2 ? "active" : ""}`}
                        id="about1"
                        role="tabpanel"
                    >
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, <b
                            >Making it over 2000 years old</b
                        >. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the
                        more obscure Latin words, consectetur.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${activeTab == 3 ? "active" : ""}`}
                        id="service1"
                        role="tabpanel"
                    >
                        There are many variations of passages of <b
                            >Lorem Ipsum available</b
                        >, but the majority have suffered alteration in some
                        form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${activeTab == 4 ? "active" : ""}`}
                        id="license1"
                        role="tabpanel"
                    >
                        It is a long established fact that a reader will be
                        distracted by the
                        <b><i>Readable content</i></b> of a page when looking at
                        its layout. The point of using Lorem Ipsum is that it has
                        a more-or-less normal distribution of letters, as opposed
                        to using 'Content here, content here', making it look like
                        readable English.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Justified Nav Tabs</div>
            </div>
            <div class="card-body">
                <Nav
                    class=" mb-3 nav-justified nav-style-1 d-sm-flex d-block"
                    role="tablist"
                >
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleJustifyTab(1, event)}
                            active={justifyTab == 1}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            href="#home1-justified"
                            aria-selected="false">Home</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            class="nav-link"
                            on:click={(event) => handleJustifyTab(2, event)}
                            active={justifyTab == 2}
                            data-bs-toggle="tab"
                            role="tab"
                            href="#about1-justified"
                            aria-selected="false">About</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item active">
                        <NavLink
                            class="nav-link"
                            on:click={(event) => handleJustifyTab(3, event)}
                            active={justifyTab == 3}
                            data-bs-toggle="tab"
                            role="tab"
                            href="#service1-justified"
                            aria-selected="true">Services</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            class="nav-link"
                            on:click={(event) => handleJustifyTab(4, event)}
                            active={justifyTab == 4}
                            data-bs-toggle="tab"
                            role="tab"
                            href="#license1-justified"
                            aria-selected="false">License</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="" id="JustifiedNavTabs">
                    <TabPane
                        class={`text-muted ${justifyTab == 1 ? "active" : ""}`}
                        id="home1-justified"
                        role="tabpanel"
                    >
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, <b
                            >Making it over 2000 years old</b
                        >. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the
                        more obscure Latin words, consectetur.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${justifyTab == 2 ? "active" : ""}`}
                        id="about1-justified"
                        role="tabpanel"
                    >
                        <b>Lorem Ipsum is simply dummy</b> text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${justifyTab == 3 ? "active" : ""}`}
                        id="service1-justified"
                        role="tabpanel"
                    >
                        There are many variations of passages of <b
                            >Lorem Ipsum available</b
                        >, but the majority have suffered alteration in some
                        form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${justifyTab == 4 ? "active" : ""}`}
                        id="license1-justified"
                        role="tabpanel"
                    >
                        It is a long established fact that a reader will be
                        distracted by the
                        <b><i>Readable content</i></b> of a page when looking at
                        its layout. The point of using Lorem Ipsum is that it has
                        a more-or-less normal distribution of letters, as opposed
                        to using 'Content here, content here', making it look like
                        readable English.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Basic Pill Tabs With Links</div>
            </div>
            <div class="card-body">
                <Nav pills class="mb-3 nav-style-1 ">
                    <NavLink
                        on:click={() => (pillsTab = 1)}
                        active={pillsTab == 1}
                        class="nav-link"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-current="page"
                        href="#!"
                        aria-selected="false">Products</NavLink
                    >
                    <NavLink
                        on:click={() => (pillsTab = 2)}
                        active={pillsTab == 2}
                        class="nav-link "
                        data-bs-toggle="tab"
                        role="tab"
                        href="#!"
                        aria-selected="true"
                        >Cart <span class="badge bg-secondary ms-1 rounded-pill"
                            >32</span
                        ></NavLink
                    >
                    <NavLink
                        on:click={() => (pillsTab = 3)}
                        active={pillsTab == 3}
                        class="nav-link"
                        data-bs-toggle="tab"
                        role="tab"
                        href="#!"
                        aria-selected="false"
                        >Orders <span class="badge bg-success ms-1 rounded-pill"
                            >4</span
                        ></NavLink
                    >
                    <NavLink
                        on:click={() => (pillsTab = 4)}
                        active={pillsTab == 4}
                        class="nav-link"
                        data-bs-toggle="tab"
                        role="tab"
                        href="#!"
                        aria-selected="false">Offers</NavLink
                    >
                </Nav>
                <TabContent class="text-muted" id="BasicPillTabsWithLinks">
                    <TabPane
                        class={pillsTab == 1 ? "active" : ""}
                        id="nav-products"
                        role="tabpanel"
                    >
                        How travel coupons make you a better lover. Why cultural
                        solutions are the new black. Why mom was right about
                        travel insurances. How family trip ideas can help you
                        predict the future. <b
                            >How carnival cruises make you a better lover</b
                        >. Why you'll never succeed at daily deals. 11 ways
                        cheapest flights can find you the love of your life. The
                        complete beginner's guide to mission trips. If you read
                        one article about cultural notes read this one. Why you
                        shouldn't eat vacation package in bed.
                    </TabPane>
                    <TabPane
                        class={pillsTab == 2 ? "active" : ""}
                        id="nav-cart"
                        role="tabpanel"
                    >
                        How hotel deals can help you live a better life. <b
                            >How celebrity cruises</b
                        >
                        aren't as bad as you think. How cultural solutions can help
                        you predict the future. How to cheat at dog friendly hotels
                        and get away with it. 17 problems with summer activities.
                        How to cheat at travel agents and get away with it. How not
                        knowing family trip ideas makes you a rookie. What everyone
                        is saying about daily deals. How twitter can teach you about
                        carnival cruises. How to start using cultural solutions.
                    </TabPane>
                    <TabPane
                        class={pillsTab == 3 ? "active" : ""}
                        id="nav-orders"
                        role="tabpanel"
                    >
                        Unbelievable healthy snack success stories. 12 facts
                        about safe food handling tips that will impress your
                        friends. Restaurant weeks by the numbers. Will mexican
                        food ever rule the world? The 10 best thai restaurant
                        youtube videos. How restaurant weeks can make you sick.
                        The complete beginner's guide to cooking healthy food.
                        Unbelievable food stamp success stories. How whole foods
                        markets are making the world a better place. 16 things
                        that won't happen in dish reviews.
                    </TabPane>
                    <TabPane
                        class={pillsTab == 4 ? "active" : ""}
                        id="nav-offers"
                        role="tabpanel"
                    >
                        Why delicious magazines are killing you. Why our world
                        would end if restaurants disappeared. Why restaurants
                        are on crack about restaurants. How restaurants are
                        making the world a better place. 8 great articles about
                        minute meals. Why our world would end if healthy snacks
                        disappeared. Why the world would end without mexican
                        food. The evolution of chef uniforms. How not knowing
                        food processors makes you a rookie. Why whole foods
                        markets beat peanut butter on pancakes.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Justified Pill Tabs With Links</div>
            </div>
            <div class="card-body">
                <Nav
                    pills
                    class="nav mb-3 nav-style-6 nav-justified d-sm-flex d-block"
                >
                    <NavLink
                        class="nav-link"
                        on:click={(event) => handleJustifyPillsTab(1, event)}
                        active={justifyPillsTab == 1}
                        data-bs-toggle="tab"
                        role="tab"
                        aria-current="page"
                        href="#nav-products-justified"
                        aria-selected="false">Products</NavLink
                    >
                    <NavLink
                        class="nav-link"
                        on:click={(event) => handleJustifyPillsTab(2, event)}
                        active={justifyPillsTab == 2}
                        data-bs-toggle="tab"
                        role="tab"
                        href="#nav-cart-justified"
                        aria-selected="false"
                        >Cart <span class="badge bg-info-transparent ms-1"
                            >Full</span
                        ></NavLink
                    >
                    <NavLink
                        class="nav-link"
                        on:click={(event) => handleJustifyPillsTab(3, event)}
                        active={justifyPillsTab == 3}
                        data-bs-toggle="tab"
                        role="tab"
                        href="#nav-orders-justified"
                        aria-selected="false"
                        >Orders
                    </NavLink>
                    <NavLink
                        class="nav-link"
                        on:click={(event) => handleJustifyPillsTab(4, event)}
                        active={justifyPillsTab == 4}
                        data-bs-toggle="tab"
                        role="tab"
                        href="#nav-offers-justified"
                        aria-selected="false"
                        >Offers <span class="badge bg-warning-transparent ms-1"
                            >7</span
                        ></NavLink
                    >
                </Nav>
                <TabContent class="text-muted" id="JustifiedPillTabsWithLinks">
                    <TabPane
                        class={justifyPillsTab == 1 ? "active" : ""}
                        id="nav-products-justified"
                        role="tabpanel"
                    >
                        How hotel deals can help you live a better life. <b
                            >How celebrity cruises</b
                        >
                        aren't as bad as you think. How cultural solutions can help
                        you predict the future. How to cheat at dog friendly hotels
                        and get away with it. 17 problems with summer activities.
                        How to cheat at travel agents and get away with it. How not
                        knowing family trip ideas makes you a rookie. What everyone
                        is saying about daily deals. How twitter can teach you about
                        carnival cruises. How to start using cultural solutions.
                    </TabPane>
                    <TabPane
                        class={justifyPillsTab == 2 ? "active" : ""}
                        id="nav-cart-justified"
                        role="tabpanel"
                    >
                        How travel coupons make you a better lover. Why cultural
                        solutions are the new black. Why mom was right about
                        travel insurances. How family trip ideas can help you
                        predict the future. <b
                            >How carnival cruises make you a better lover</b
                        >. Why you'll never succeed at daily deals. 11 ways
                        cheapest flights can find you the love of your life. The
                        complete beginner's guide to mission trips. If you read
                        one article about cultural notes read this one. Why you
                        shouldn't eat vacation package in bed.
                    </TabPane>
                    <TabPane
                        class={justifyPillsTab == 3 ? "active" : ""}
                        id="nav-orders-justified"
                        role="tabpanel"
                    >
                        Unbelievable healthy snack success stories. 12 facts
                        about safe food handling tips that will impress your
                        friends. Restaurant weeks by the numbers. Will mexican
                        food ever rule the world? The 10 best thai restaurant
                        youtube videos. How restaurant weeks can make you sick.
                        The complete beginner's guide to cooking healthy food.
                        Unbelievable food stamp success stories. How whole foods
                        markets are making the world a better place. 16 things
                        that won't happen in dish reviews.
                    </TabPane>
                    <TabPane
                        class={justifyPillsTab == 4 ? "active" : ""}
                        id="nav-offers-justified"
                        role="tabpanel"
                    >
                        Why delicious magazines are killing you. Why our world
                        would end if restaurants disappeared. Why restaurants
                        are on crack about restaurants. How restaurants are
                        making the world a better place. 8 great articles about
                        minute meals. Why our world would end if healthy snacks
                        disappeared. Why the world would end without mexican
                        food. The evolution of chef uniforms. How not knowing
                        food processors makes you a rookie. Why whole foods
                        markets beat peanut butter on pancakes.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Vertical alignment with lists</div>
            </div>
            <div class="card-body">
                <Row>
                    <div class="col-xl-3">
                        <Nav
                            tabs
                            class="flex-column nav-style-4"
                            role="tablist"
                        >
                            <NavItem class="nav-item">
                                <NavLink
                                    on:click={(event) =>
                                        handleVerticalTab(1, event)}
                                    active={verticalTab == 1}
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#home-vertical"
                                    aria-selected="true">Home</NavLink
                                >
                            </NavItem>
                            <NavItem class="nav-item">
                                <NavLink
                                    on:click={(event) =>
                                        handleVerticalTab(2, event)}
                                    active={verticalTab == 2}
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#about-vertical"
                                    aria-selected="true">About</NavLink
                                >
                            </NavItem>
                            <NavItem class="nav-item">
                                <NavLink
                                    on:click={(event) =>
                                        handleVerticalTab(3, event)}
                                    active={verticalTab == 3}
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#services-vertical"
                                    aria-selected="true">Services</NavLink
                                >
                            </NavItem>
                            <NavItem class="nav-item">
                                <NavLink
                                    on:click={(event) =>
                                        handleVerticalTab(4, event)}
                                    active={verticalTab == 4}
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#contacts-vertical"
                                    aria-selected="true">Contacts</NavLink
                                >
                            </NavItem>
                        </Nav>
                    </div>
                    <div class="col-xl-9">
                        <TabContent
                            class="text-muted"
                            id="VerticalAlignmentWithLists"
                        >
                            <TabPane
                                class={verticalTab == 1 ? "active" : ""}
                                id="home-vertical"
                                role="tabpanel"
                            >
                                How hotel deals can help you live a better life. <b
                                    >How celebrity cruises</b
                                > aren't as bad as you think. How cultural solutions
                                can help you predict the future. How to cheat at
                                dog friendly hotels and get away with it. 17 problems
                                with summer activities. How to cheat at travel agents
                                and get away with it. How not knowing family trip
                                ideas makes you a rookie. What everyone is saying
                                about daily deals.
                            </TabPane>
                            <TabPane
                                class={verticalTab == 2 ? "active" : ""}
                                id="about-vertical"
                                role="tabpanel"
                            >
                                How travel coupons make you a better lover. Why
                                cultural solutions are the new black. Why mom
                                was right about travel insurances. How family
                                trip ideas can help you predict the future. <b
                                    >How carnival cruises make you a better
                                    lover</b
                                >. Why you'll never succeed at daily deals. 11
                                ways cheapest flights can find you the love of
                                your life. The complete beginner's guide to
                                mission trips.
                            </TabPane>
                            <TabPane
                                class={verticalTab == 3 ? "active" : ""}
                                id="services-vertical"
                                role="tabpanel"
                            >
                                Unbelievable healthy snack success stories. 12
                                facts about safe food handling tips that will
                                impress your friends. Restaurant weeks by the
                                numbers. Will mexican food ever rule the world?
                                The 10 best thai restaurant youtube videos. How
                                restaurant weeks can make you sick. The complete
                                beginner's guide to cooking healthy food.
                                Unbelievable food stamp success stories.
                            </TabPane>
                            <TabPane
                                class={verticalTab == 4 ? "active" : ""}
                                id="contacts-vertical"
                                role="tabpanel"
                            >
                                Why delicious magazines are killing you. Why our
                                world would end if restaurants disappeared. Why
                                restaurants are on crack about restaurants. How
                                restaurants are making the world a better place.
                                8 great articles about minute meals. Why our
                                world would end if healthy snacks disappeared.
                                Why the world would end without mexican food.
                                The evolution of chef uniforms.
                            </TabPane>
                        </TabContent>
                    </div>
                </Row>
            </div>
        </div>
    </Col>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Vertical alignment with links</div>
            </div>
            <div class="card-body">
                <Row>
                    <div class="col-xl-3">
                        <Nav tabs class="flex-column nav-style-5">
                            <NavLink
                                class="nav-link"
                                on:click={(event) =>
                                    handleVerticallinkTab(1, event)}
                                active={VerticallinkTab == 1}
                                data-bs-toggle="tab"
                                role="tab"
                                aria-current="page"
                                href="#home-vertical-link"
                                aria-selected="false"
                                ><i
                                    class="ri-home-smile-line me-2 align-middle d-inline-block"
                                ></i>Home</NavLink
                            >
                            <NavLink
                                class="nav-link"
                                on:click={(event) =>
                                    handleVerticallinkTab(2, event)}
                                active={VerticallinkTab == 2}
                                data-bs-toggle="tab"
                                role="tab"
                                aria-current="page"
                                href="#about-vertical-link"
                                aria-selected="false"
                                ><i
                                    class="ri-archive-drawer-line me-2 align-middle d-inline-block"
                                ></i>About</NavLink
                            >
                            <NavLink
                                class="nav-link"
                                on:click={(event) =>
                                    handleVerticallinkTab(3, event)}
                                active={VerticallinkTab == 3}
                                data-bs-toggle="tab"
                                role="tab"
                                aria-current="page"
                                href="#services-vertical-link"
                                aria-selected="true"
                                ><i
                                    class="ri-bank-line me-2 align-middle d-inline-block"
                                ></i>Services</NavLink
                            >
                            <NavLink
                                class="nav-link"
                                on:click={(event) =>
                                    handleVerticallinkTab(4, event)}
                                active={VerticallinkTab == 4}
                                data-bs-toggle="tab"
                                role="tab"
                                aria-current="page"
                                href="#contacts-vertical-link"
                                aria-selected="false"
                                ><i
                                    class="ri-contacts-book-2-line me-2 align-middle d-inline-block"
                                ></i>Contacts</NavLink
                            >
                        </Nav>
                    </div>
                    <div class="col-xl-9">
                        <TabContent
                            class="text-muted"
                            id="VerticalAlignmentWithLinks"
                        >
                            <TabPane
                                class={`  ${VerticallinkTab == 1 ? "active" : ""}`}
                                id="home-vertical-link"
                                role="tabpanel"
                            >
                                How hotel deals can help you live a better life. <b
                                    >How celebrity cruises</b
                                > aren't as bad as you think. How cultural solutions
                                can help you predict the future. How to cheat at
                                dog friendly hotels and get away with it. 17 problems
                                with summer activities. How to cheat at travel agents
                                and get away with it. How not knowing family trip
                                ideas makes you a rookie. What everyone is saying
                                about daily deals.
                            </TabPane>
                            <TabPane
                                class={`  ${VerticallinkTab == 2 ? "active" : ""}`}
                                id="about-vertical-link"
                                role="tabpanel"
                            >
                                How travel coupons make you a better lover. Why
                                cultural solutions are the new black. Why mom
                                was right about travel insurances. How family
                                trip ideas can help you predict the future. <b
                                    >How carnival cruises make you a better
                                    lover</b
                                >. Why you'll never succeed at daily deals. 11
                                ways cheapest flights can find you the love of
                                your life. The complete beginner's guide to
                                mission trips.
                            </TabPane>
                            <TabPane
                                class={`  ${VerticallinkTab == 3 ? "active" : ""}`}
                                id="services-vertical-link"
                                role="tabpanel"
                            >
                                Unbelievable healthy snack success stories. 12
                                facts about safe food handling tips that will
                                impress your friends. Restaurant weeks by the
                                numbers. <b
                                    ><i
                                        >Will mexican food ever rule the world?
                                        The 10 best thai restaurant youtube
                                        videos</i
                                    ></b
                                >. How restaurant weeks can make you sick. The
                                complete beginner's guide to cooking healthy
                                food. Unbelievable food stamp success stories.
                            </TabPane>
                            <TabPane
                                class={`  ${VerticallinkTab == 4 ? "active" : ""}`}
                                id="contacts-vertical-link"
                                role="tabpanel"
                            >
                                Why delicious magazines are killing you. Why our
                                world would end if restaurants disappeared. Why
                                restaurants are on crack about restaurants. How
                                restaurants are making the world a better place.
                                8 great articles about minute meals. Why our
                                world would end if healthy snacks disappeared.
                                Why the world would end without mexican food.
                                The evolution of chef uniforms.
                            </TabPane>
                        </TabContent>
                    </div>
                </Row>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-4 -->

<!-- Start:: row-5 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Center Aligned Nav</div>
            </div>
            <div class="card-body">
                <Nav
                    pills
                    class=" justify-content-center nav-style-2 mb-3"
                    role="tablist"
                >
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleCenterTab(1, event)}
                            active={CenterTab == 1}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#home-center"
                            aria-selected="true">Home</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleCenterTab(2, event)}
                            active={CenterTab == 2}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#about-center"
                            aria-selected="false">About</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleCenterTab(3, event)}
                            active={CenterTab == 3}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#services-center"
                            aria-selected="false">Services</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleCenterTab(4, event)}
                            active={CenterTab == 4}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#contacts-center"
                            aria-selected="false">Contacts</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class=" text-muted" id="CenterAlignedNav">
                    <TabPane
                        class={` ${CenterTab == 1 ? "active" : ""}`}
                        id="home-center"
                        role="tabpanel"
                    >
                        How travel coupons make you a better lover. Why cultural
                        solutions are the new black. Why mom was right about
                        travel insurances. How family trip ideas can help you
                        predict the future. <b
                            >How carnival cruises make you a better lover</b
                        >. Why you'll never succeed at daily deals. 11 ways
                        cheapest flights can find you the love of your life. The
                        complete beginner's guide to mission trips. If you read
                        one article about cultural notes read this one. Why you
                        shouldn't eat vacation package in bed.
                    </TabPane>
                    <TabPane
                        class={` ${CenterTab == 2 ? "active" : ""}`}
                        id="about-center"
                        role="tabpanel"
                    >
                        How hotel deals can help you live a better life. <b
                            >How celebrity cruises</b
                        >
                        aren't as bad as you think. How cultural solutions can help
                        you predict the future. How to cheat at dog friendly hotels
                        and get away with it. 17 problems with summer activities.
                        How to cheat at travel agents and get away with it. How not
                        knowing family trip ideas makes you a rookie. What everyone
                        is saying about daily deals. How twitter can teach you about
                        carnival cruises. How to start using cultural solutions.
                    </TabPane>
                    <TabPane
                        class={` ${CenterTab == 3 ? "active" : ""}`}
                        id="services-center"
                        role="tabpanel"
                    >
                        Unbelievable healthy snack success stories. 12 facts
                        about safe food handling tips that will impress your
                        friends. Restaurant weeks by the numbers. Will mexican
                        food ever rule the world? The 10 best thai restaurant
                        youtube videos. How restaurant weeks can make you sick.
                        The complete beginner's guide to cooking healthy food.
                        Unbelievable food stamp success stories. How whole foods
                        markets are making the world a better place. 16 things
                        that won't happen in dish reviews.
                    </TabPane>
                    <TabPane
                        class={` ${CenterTab == 4 ? "active" : ""}`}
                        id="contacts-center"
                        role="tabpanel"
                    >
                        Why delicious magazines are killing you. Why our world
                        would end if restaurants disappeared. Why restaurants
                        are on crack about restaurants. How restaurants are
                        making the world a better place. 8 great articles about
                        minute meals. Why our world would end if healthy snacks
                        disappeared. Why the world would end without mexican
                        food. The evolution of chef uniforms. How not knowing
                        food processors makes you a rookie. Why whole foods
                        markets beat peanut butter on pancakes.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Right Aligned Nav</div>
            </div>
            <div class="card-body">
                <Nav
                    pills
                    class=" justify-content-end nav-style-3 mb-3"
                    role="tablist"
                >
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleRightTab(1, event)}
                            active={RightTab == 1}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#home-right"
                            aria-selected="true">Home</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleRightTab(2, event)}
                            active={RightTab == 2}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#about-right"
                            aria-selected="true">About</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleRightTab(3, event)}
                            active={RightTab == 3}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#services-right"
                            aria-selected="true">Services</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleRightTab(4, event)}
                            active={RightTab == 4}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#contacts-right"
                            aria-selected="true">Contacts</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="text-muted" id="RightAlignedNav">
                    <TabPane
                        class={` ${RightTab == 1 ? "active" : ""}`}
                        id="home-right"
                        role="tabpanel"
                    >
                        How travel coupons make you a better lover. Why cultural
                        solutions are the new black. Why mom was right about
                        travel insurances. How family trip ideas can help you
                        predict the future. <b
                            >How carnival cruises make you a better lover</b
                        >. Why you'll never succeed at daily deals. 11 ways
                        cheapest flights can find you the love of your life. The
                        complete beginner's guide to mission trips. If you read
                        one article about cultural notes read this one. Why you
                        shouldn't eat vacation package in bed.
                    </TabPane>
                    <TabPane
                        class={` ${RightTab == 2 ? "active" : ""}`}
                        id="about-right"
                        role="tabpanel"
                    >
                        How hotel deals can help you live a better life. <b
                            >How celebrity cruises</b
                        >
                        aren't as bad as you think. How cultural solutions can help
                        you predict the future. How to cheat at dog friendly hotels
                        and get away with it. 17 problems with summer activities.
                        How to cheat at travel agents and get away with it. How not
                        knowing family trip ideas makes you a rookie. What everyone
                        is saying about daily deals. How twitter can teach you about
                        carnival cruises. How to start using cultural solutions.
                    </TabPane>
                    <TabPane
                        class={` ${RightTab == 3 ? "active" : ""}`}
                        id="services-right"
                        role="tabpanel"
                    >
                        Unbelievable healthy snack success stories. 12 facts
                        about safe food handling tips that will impress your
                        friends. Restaurant weeks by the numbers. Will mexican
                        food ever rule the world? The 10 best thai restaurant
                        youtube videos. How restaurant weeks can make you sick.
                        The complete beginner's guide to cooking healthy food.
                        Unbelievable food stamp success stories. How whole foods
                        markets are making the world a better place. 16 things
                        that won't happen in dish reviews.
                    </TabPane>
                    <TabPane
                        class={` ${RightTab == 4 ? "active" : ""}`}
                        id="contacts-right"
                        role="tabpanel"
                    >
                        Why delicious magazines are killing you. Why our world
                        would end if restaurants disappeared. Why restaurants
                        are on crack about restaurants. How restaurants are
                        making the world a better place. 8 great articles about
                        minute meals. Why our world would end if healthy snacks
                        disappeared. Why the world would end without mexican
                        food. The evolution of chef uniforms. How not knowing
                        food processors makes you a rookie. Why whole foods
                        markets beat peanut butter on pancakes.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-5 -->

<!-- Start:: row-6 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header justify-content-between">
                <div class="card-title">Header Tabs</div>
                <div>
                    <Nav
                        tabs
                        class=" justify-content-end nav-tabs-header mb-0"
                        role="tablist"
                    >
                        <NavItem>
                            <NavLink
                                on:click={(event) => handleHeaderTab(1, event)}
                                active={headerTab == 1}
                                data-bs-toggle="tab"
                                role="tab"
                                aria-current="page"
                                href="#home-header"
                                aria-selected="false">Home</NavLink
                            >
                        </NavItem>
                        <NavItem>
                            <NavLink
                                on:click={(event) => handleHeaderTab(2, event)}
                                active={headerTab == 2}
                                data-bs-toggle="tab"
                                role="tab"
                                aria-current="page"
                                href="#about-header"
                                aria-selected="true">About</NavLink
                            >
                        </NavItem>
                        <NavItem>
                            <NavLink
                                on:click={(event) => handleHeaderTab(3, event)}
                                active={headerTab == 3}
                                data-bs-toggle="tab"
                                role="tab"
                                aria-current="page"
                                href="#services-header"
                                aria-selected="true">Services</NavLink
                            >
                        </NavItem>
                    </Nav>
                </div>
            </div>
            <div class="card-body">
                <TabContent class="text-muted" id="HeaderTabs">
                    <TabPane
                        class={` ${headerTab == 1 ? "active" : ""}`}
                        id="home-header"
                        role="tabpanel"
                    >
                        <ul class="mb-0">
                            <li class="mb-2">
                                How hotel deals can help you live a better life. <b
                                    >How celebrity cruises</b
                                > aren't as bad as you think. How cultural solutions
                                can help you predict the future. How to cheat at
                                dog friendly hotels and get away with it. 17 problems
                                with summer activities. How to cheat at travel agents
                                and get away with it. How not knowing family trip
                                ideas makes you a rookie. What everyone is saying
                                about daily deals.
                            </li>
                            <li>
                                How travel coupons make you a better lover. Why
                                cultural solutions are the new black. Why mom
                                was header about travel insurances. How family
                                trip ideas can help you predict the future. <b
                                    >How carnival cruises make you a better
                                    lover</b
                                >. Why you'll never succeed at daily deals. 11
                                ways cheapest flights can find you the love of
                                your life. The complete beginner's guide to
                                mission trips.
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane
                        class={` ${headerTab == 2 ? "active" : ""}`}
                        id="about-header"
                        role="tabpanel"
                    >
                        <ul class="mb-0">
                            <li class="mb-2">
                                How travel coupons make you a better lover. Why
                                cultural solutions are the new black. Why mom
                                was header about travel insurances. How family
                                trip ideas can help you predict the future. <b
                                    >How carnival cruises make you a better
                                    lover</b
                                >. Why you'll never succeed at daily deals. 11
                                ways cheapest flights can find you the love of
                                your life. The complete beginner's guide to
                                mission trips.
                            </li>
                            <li>
                                How hotel deals can help you live a better life. <b
                                    >How celebrity cruises</b
                                > aren't as bad as you think. How cultural solutions
                                can help you predict the future. How to cheat at
                                dog friendly hotels and get away with it. 17 problems
                                with summer activities. How to cheat at travel agents
                                and get away with it. How not knowing family trip
                                ideas makes you a rookie. What everyone is saying
                                about daily deals.
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane
                        class={` ${headerTab == 3 ? "active" : ""}`}
                        id="services-header"
                        role="tabpanel"
                    >
                        <ul class="mb-0">
                            <li class="mb-2">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text.
                            </li>
                            <li>
                                How travel coupons make you a better lover. Why
                                cultural solutions are the new black. Why mom
                                was header about travel insurances. How family
                                trip ideas can help you predict the future. <b
                                    >How carnival cruises make you a better
                                    lover</b
                                >. Why you'll never succeed at daily deals. 11
                                ways cheapest flights can find you the love of
                                your life. The complete beginner's guide to
                                mission trips.
                            </li>
                        </ul>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Footer Tabs</div>
            </div>
            <div class="card-body">
                <TabContent class="text-muted" id="FooterTabs">
                    <TabPane
                        class={` ${footerTab == 1 ? "active" : ""}`}
                        id="home-footer"
                        role="tabpanel"
                    >
                        How travel coupons make you a better lover. Why cultural
                        solutions are the new black. Why mom was right about
                        travel insurances. How family trip ideas can help you
                        predict the future. <b
                            >How carnival cruises make you a better lover</b
                        >. Why you'll never succeed at daily deals. 11 ways
                        cheapest flights can find you the love of your life. The
                        complete beginner's guide to mission trips. If you read
                        one article about cultural notes read this one. Why you
                        shouldn't eat vacation package in bed.
                    </TabPane>
                    <TabPane
                        class={` ${footerTab == 2 ? "active" : ""}`}
                        id="about-footer"
                        role="tabpanel"
                    >
                        How hotel deals can help you live a better life. <b
                            >How celebrity cruises</b
                        >
                        aren't as bad as you think. How cultural solutions can help
                        you predict the future. How to cheat at dog friendly hotels
                        and get away with it. 17 problems with summer activities.
                        How to cheat at travel agents and get away with it. How not
                        knowing family trip ideas makes you a rookie. What everyone
                        is saying about daily deals. How twitter can teach you about
                        carnival cruises. How to start using cultural solutions.
                    </TabPane>
                    <TabPane
                        class={` ${footerTab == 3 ? "active" : ""}`}
                        id="services-footer"
                        role="tabpanel"
                    >
                        Unbelievable healthy snack success stories. 12 facts
                        about safe food handling tips that will impress your
                        friends. Restaurant weeks by the numbers. Will mexican
                        food ever rule the world? The 10 best thai restaurant
                        youtube videos. How restaurant weeks can make you sick.
                        The complete beginner's guide to cooking healthy food.
                        Unbelievable food stamp success stories. How whole foods
                        markets are making the world a better place. 16 things
                        that won't happen in dish reviews.
                    </TabPane>
                </TabContent>
            </div>
            <div class="card-footer">
                <Nav
                    tabs
                    class=" justify-content-end nav-tabs-footer "
                    role="tablist"
                >
                    <NavItem class=" m-1">
                        <NavLink
                            on:click={(event) => handleFooterTab(1, event)}
                            active={footerTab == 1}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#home-footer"
                            aria-selected="true">Home</NavLink
                        >
                    </NavItem>
                    <NavItem class=" m-1">
                        <NavLink
                            on:click={(event) => handleFooterTab(2, event)}
                            active={footerTab == 2}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#about-footer"
                            aria-selected="true">About</NavLink
                        >
                    </NavItem>
                    <NavItem class=" m-1">
                        <NavLink
                            on:click={(event) => handleFooterTab(3, event)}
                            active={footerTab == 3}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#services-footer"
                            aria-selected="true">Services</NavLink
                        >
                    </NavItem>
                </Nav>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-6 -->

<!-- Start:: row-7 -->
<Row>
    <div class="col-xxl-12 col-xl-12">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Tab Style-1</div>
            </div>
            <div class="card-body">
                <Nav tabs class=" tab-style-1 d-sm-flex d-block" role="tablist">
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleTabStyle1Tab(1, event)}
                            active={TabStyle1Tab == 1}
                            data-bs-toggle="tab"
                            data-bs-target="#orders"
                            aria-current="page"
                            href="#orders">Orders</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleTabStyle1Tab(2, event)}
                            active={TabStyle1Tab == 2}
                            data-bs-toggle="tab"
                            data-bs-target="#accepted"
                            href="#accepted">Accepted</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleTabStyle1Tab(3, event)}
                            active={TabStyle1Tab == 3}
                            data-bs-toggle="tab"
                            data-bs-target="#declined"
                            href="#declined">Declined</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="tab-content" id="TabStyle1">
                    <TabPane
                        class={TabStyle1Tab == 1 ? "active" : ""}
                        id="orders"
                        role="tabpanel"
                    >
                        <div class="text-muted">
                            <b
                                >Lorem Ipsum is simply dummy text of the
                                printing</b
                            > and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled.
                        </div>
                    </TabPane>
                    <TabPane
                        class={TabStyle1Tab == 2 ? "active" : ""}
                        id="accepted"
                        role="tabpanel"
                    >
                        <div class="text-muted">
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for <b>'lorem ipsum'</b> will uncover
                            many web sites still in their infancy. Various versions
                            have evolved over the years.
                        </div>
                    </TabPane>
                    <TabPane
                        class={TabStyle1Tab == 3 ? "active" : ""}
                        id="declined"
                        role="tabpanel"
                    >
                        <div class="text-muted">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form,
                            <b>by injected humour</b>, or randomised words which
                            don't look even slightly believable
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </div>
    <Col xxl={12} xl={6}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Tab Style-2</div>
            </div>
            <div class="card-body" id="TabStyle2">
                <Nav
                    class=" tab-style-2 nav-justified mb-3 d-sm-flex d-block"
                    id="myTab1"
                    role="tablist"
                >
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle2Tab = 1)}
                            active={TabStyle2Tab == 1}
                            id="order-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#order-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="home-tab-pane"
                            aria-selected="true"
                            ><i class="ri-gift-line me-1 align-middle"
                            ></i>Ordered</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle2Tab = 2)}
                            active={TabStyle2Tab == 2}
                            id="confirmed-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#confirm-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="profile-tab-pane"
                            aria-selected="false"
                            ><i class="ri-check-double-line me-1 align-middle"
                            ></i>Confirmed</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle2Tab = 3)}
                            active={TabStyle2Tab == 3}
                            id="shipped-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#shipped-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="contact-tab-pane"
                            aria-selected="false"
                            ><i class="ri-shopping-bag-3-line me-1 align-middle"
                            ></i>Shipped</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle2Tab = 4)}
                            active={TabStyle2Tab == 4}
                            id="delivered-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#delivered-tab-pane"
                            type="button"
                            role="tab"
                            aria-selected="false"
                            ><i class="ri-truck-line me-1 align-middle"
                            ></i>Delivery</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="text-muted" id="myTabContent">
                    <TabPane
                        class={TabStyle2Tab == 1 ? "active" : ""}
                        id="order-tab-pane"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                        tabindex={0}
                    >
                        <ul class="ps-3 mb-0">
                            <li>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock.
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane
                        class={TabStyle2Tab == 2 ? "active" : ""}
                        id="confirm-tab-pane"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                        tabindex={0}
                    >
                        <ul class="ps-3 mb-0">
                            <li>
                                As opposed to using 'Content here, content
                                here', making it look like readable English.
                                Many desktop publishing packages and web page
                                editors now use Lorem Ipsum as their default
                                model text, and a search.
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane
                        class={TabStyle2Tab == 3 ? "active" : ""}
                        id="shipped-tab-pane"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                        tabindex={0}
                    >
                        <ul class="ps-3 mb-0">
                            <li>
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently.
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane
                        class={TabStyle2Tab == 4 ? "active" : ""}
                        id="delivered-tab-pane"
                        role="tabpanel"
                        tabindex={0}
                    >
                        <ul class="list-unstyled mb-0">
                            <li>
                                A Latin professor at Hampden-Sydney College in
                                Virginia, looked up one of the more obscure
                                Latin words, consectetur, from a Lorem Ipsum
                                passage, and going through the cites of the word
                                in classical literature.
                            </li>
                        </ul>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
    <Col xxl={12} xl={6}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Tab-Style-3</div>
            </div>
            <div class="card-body p-0 pt-3">
                <Nav
                    class="nav nav-tabs justify-content-center mb-5 tab-style-3"
                    id="myTab2"
                    role="tablist"
                >
                    <NavItem class="nav-item me-0" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle3Tab = 1)}
                            active={TabStyle3Tab == 1}
                            class=" home py-1"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="home-tab-pane"
                            aria-selected="true">Home</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item me-0" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle3Tab = 2)}
                            active={TabStyle3Tab == 2}
                            class="nav-link about py-1"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="profile-tab-pane"
                            aria-selected="false">About</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item me-0" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle3Tab = 3)}
                            active={TabStyle3Tab == 3}
                            class="nav-link services py-1"
                            id="contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#contact-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="contact-tab-pane"
                            aria-selected="false">Services</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="p-3" id="TabStyle3">
                    <TabPane
                        class={` text-muted ${TabStyle3Tab == 1 ? "active" : ""}`}
                        id="home-tab-pane"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                        tabindex={0}
                        ><b>Lorem Ipsum is simply dummy text of the printing</b>
                        and typesetting industry. Lorem Ipsum has been the industry's.</TabPane
                    >
                    <TabPane
                        class={` text-muted ${TabStyle3Tab == 2 ? "active" : ""}`}
                        id="profile-tab-pane"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                        tabindex={0}
                        >Many desktop publishing packages as their default model
                        text, and a search for <b>'lorem ipsum'</b> will over the
                        years.</TabPane
                    >
                    <TabPane
                        class={` text-muted ${TabStyle3Tab == 3 ? "active" : ""}`}
                        id="contact-tab-pane"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                        tabindex={0}
                        >There, <b>by injected humour</b>, or randomised words
                        which don't look even slightly believable.</TabPane
                    >
                </TabContent>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-7 -->

<!-- Start:: row-8 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Tab Style-4</div>
            </div>
            <div class="card-body">
                <Nav
                    id="nav-tab"
                    tabs
                    justified={true}
                    class="tab-style-4"
                    role="tablist"
                >
                    <NavItem>
                        <NavLink
                            on:click={() => (TabStyle4Tab = 1)}
                            active={TabStyle4Tab == 1}
                            class="nav-link"
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home1"
                            type="button"
                            role="tab"
                            aria-selected="true">Home</NavLink
                        >
                    </NavItem>
                    <NavItem>
                        <NavLink
                            on:click={() => (TabStyle4Tab = 2)}
                            active={TabStyle4Tab == 2}
                            class="nav-link"
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile1"
                            type="button"
                            role="tab"
                            aria-selected="false">Profile</NavLink
                        >
                    </NavItem>
                    <NavItem>
                        <NavLink
                            on:click={() => (TabStyle4Tab = 3)}
                            active={TabStyle4Tab == 3}
                            class="nav-link"
                            id="nav-contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-contact1"
                            type="button"
                            role="tab"
                            aria-selected="false">Contact</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="" id="tab-style-4">
                    <TabPane
                        class={` ${TabStyle4Tab == 1 ? "active" : ""}`}
                        id="nav-home1"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabindex={0}
                    >
                        <b>Lorem Ipsum is simply dummy</b> text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </TabPane>
                    <TabPane
                        class={` ${TabStyle4Tab == 2 ? "active" : ""}`}
                        id="nav-profile1"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabindex={0}
                    >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. <b
                            >Many desktop publishing</b
                        > packages and web page editors now use Lorem Ipsum as their
                        default model text, and a search for 'lorem ipsum' will uncover
                        many web sites still in their infancy. Various versions have
                        evolved over the years, sometimes by accident, sometimes
                        on purpos, remaining essentially unchanged.
                    </TabPane>
                    <TabPane
                        class={` ${TabStyle4Tab == 3 ? "active" : ""}`}
                        id="nav-contact1"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                        tabindex={0}
                    >
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. <b
                            >If you are going</b
                        > to use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first true
                        generator on the Internet. It uses a dictionary of over 200
                        Latin words, combined with a handful of model sentence structures.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Tab Style-5</div>
            </div>
            <div class="card-body">
                <Nav
                    pills
                    class=" mb-3 nav-justified tab-style-5 d-sm-flex d-block"
                    id="pills-tab"
                    role="tablist"
                >
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle5Tab = 1)}
                            active={TabStyle5Tab == 1}
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true">Home</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle5Tab = 2)}
                            active={TabStyle5Tab == 2}
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false">About</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle5Tab = 3)}
                            active={TabStyle5Tab == 3}
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false">Services</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle5Tab = 4)}
                            active={TabStyle5Tab == 4}
                            id="pills-disabled-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-disabled"
                            type="button"
                            role="tab"
                            aria-controls="pills-disabled"
                            aria-selected="false">Contacts</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="text-muted mb-3" id="pills-tabContent">
                    <TabPane
                        class={` ${TabStyle5Tab == 1 ? "active" : ""}`}
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabindex={0}
                    >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. <b
                            >Many desktop publishing</b
                        > packages and web page editors now use Lorem Ipsum as their
                        default model text, and a search for 'lorem ipsum' will uncover
                        many web sites still in their infancy.
                    </TabPane>
                    <TabPane
                        class={` ${TabStyle5Tab == 2 ? "active" : ""}`}
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabindex={0}
                    >
                        <b>Lorem Ipsum is simply dummy</b> text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages.
                    </TabPane>
                    <TabPane
                        class={` ${TabStyle5Tab == 3 ? "active" : ""}`}
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabindex={0}
                    >
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. <b
                            >If you are going</b
                        > to use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first true
                        generator on the Internet.
                    </TabPane>
                    <TabPane
                        class={` ${TabStyle5Tab == 4 ? "active" : ""}`}
                        id="pills-disabled"
                        role="tabpanel"
                        aria-labelledby="pills-disabled-tab"
                        tabindex={0}
                    >
                        <b>Contrary to popular belief</b>, Contrary to popular
                        belief, Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature from 45
                        BC, making it over 2000 years old. Richard McClintock, a
                        Latin professor at Hampden-Sydney College in Virginia,
                        looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going
                        through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes
                        from sections.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-8 -->

<!-- Start:: row-9 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Tab Style-6</div>
            </div>
            <div class="card-body">
                <Nav
                    class=" nav-tabs mb-3 tab-style-6"
                    id="myTab"
                    role="tablist"
                >
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle6Tab = 1)}
                            active={TabStyle6Tab == 1}
                            id="products-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#products-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="products-tab-pane"
                            aria-selected="true"
                            ><i
                                class="ri-gift-line me-1 align-middle d-inline-block"
                            ></i>Products</NavLink
                        >
                    </NavItem>
                    <NavItem role="presentation">
                        <NavLink
                            on:click={() => (TabStyle6Tab = 2)}
                            active={TabStyle6Tab == 2}
                            id="sales-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#sales-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="sales-tab-pane"
                            aria-selected="false"
                            ><i
                                class="ri-bill-line me-1 align-middle d-inline-block"
                            ></i>Sales</NavLink
                        >
                    </NavItem>
                    <NavItem role="presentation">
                        <NavLink
                            on:click={() => (TabStyle6Tab = 3)}
                            active={TabStyle6Tab == 3}
                            id="profit-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profit-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="profit-tab-pane"
                            aria-selected="false"
                            ><i
                                class="ri-money-dollar-box-line me-1 align-middle d-inline-block"
                            ></i>Profit</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle6Tab = 4)}
                            active={TabStyle6Tab == 4}
                            id="expenses-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#expenses-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="expenses-tab-pane"
                            aria-selected="false"
                            ><i
                                class="ri-exchange-box-line me-1 align-middle d-inline-block"
                            ></i>Expenses</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="" id="TabStyle6">
                    <TabPane
                        class={`p-0 border-bottom-0 ${TabStyle6Tab == 1 ? "active" : ""}`}
                        id="products-tab-pane"
                        role="tabpanel"
                        aria-labelledby="products-tab"
                        tabindex={0}
                    >
                        <div class="table-responsive rounded-1">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <span class="avatar avatar-sm">
                                                <img
                                                    loading="lazy"
                                                    src="../../images/ecommerce/jpg/3.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </th>
                                        <td>Sport Shoe</td>
                                        <td>Foot Wear</td>
                                        <td>$1,299.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <span class="avatar avatar-sm">
                                                <img
                                                    loading="lazy"
                                                    src="../../images/ecommerce/jpg/4.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </th>
                                        <td>Running Shoe</td>
                                        <td>Foot Wear</td>
                                        <td>$7,249.29</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <span class="avatar avatar-sm">
                                                <img
                                                    loading="lazy"
                                                    src="../../images/ecommerce/jpg/6.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </th>
                                        <td>Causal Shoe</td>
                                        <td>Foot Wear</td>
                                        <td>$799.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPane>
                    <TabPane
                        class={` ${TabStyle6Tab == 2 ? "active  " : ""}`}
                        id="sales-tab-pane"
                        role="tabpanel"
                        aria-labelledby="sales-tab"
                        tabindex={0}
                    >
                        <ul class="list-unstyled mb-1">
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>Clothing</div>
                                    <div class="fs-14 fw-semibold">32,138</div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>Furniture</div>
                                    <div class="fs-14 fw-semibold">12,123</div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>electronics</div>
                                    <div class="fs-14 fw-semibold">9,238</div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>food Products</div>
                                    <div class="fs-14 fw-semibold">14,234</div>
                                </div>
                            </li>
                            <li class="mb-0">
                                <div class="d-flex justify-content-between">
                                    <div>Home Appliances</div>
                                    <div class="fs-14 fw-semibold">10,249</div>
                                </div>
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane
                        class={` ${TabStyle6Tab == 3 ? "active" : ""}`}
                        id="profit-tab-pane"
                        role="tabpanel"
                        aria-labelledby="profit-tab"
                        tabindex={0}
                    >
                        <ul class="list-unstyled mb-0">
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>Clothing</div>
                                    <div class="fs-14 fw-semibold text-success">
                                        <i
                                            class="ri-arrow-up-s-fill me-1 align-middle"
                                        ></i>22.75%
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>electronics</div>
                                    <div class="fs-14 fw-semibold text-success">
                                        <i
                                            class="ri-arrow-up-s-fill me-1 align-middle"
                                        ></i>42.24%
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>Furniture</div>
                                    <div class="fs-14 fw-semibold text-success">
                                        <i
                                            class="ri-arrow-up-s-fill me-1 align-middle"
                                        ></i>15.23%
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>Home Appliances</div>
                                    <div class="fs-14 fw-semibold text-success">
                                        <i
                                            class="ri-arrow-up-s-fill me-1 align-middle"
                                        ></i>15.14%
                                    </div>
                                </div>
                            </li>
                            <li class="mb-0">
                                <div class="d-flex justify-content-between">
                                    <div>food Products</div>
                                    <div class="fs-14 fw-semibold text-success">
                                        <i
                                            class="ri-arrow-up-s-fill me-1 align-middle"
                                        ></i>31.64%
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane
                        class={` ${TabStyle6Tab == 4 ? "active" : ""}`}
                        id="expenses-tab-pane"
                        role="tabpanel"
                        aria-labelledby="expenses-tab"
                        tabindex={0}
                    >
                        <ul class="list-unstyled mb-0">
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>Clothing</div>
                                    <div class="fs-14 fw-semibold text-danger">
                                        -$31,134
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>electronics</div>
                                    <div class="fs-14 fw-semibold text-danger">
                                        -$15,256
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>Furniture</div>
                                    <div class="fs-14 fw-semibold text-danger">
                                        -$24,156
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <div>Home Appliances</div>
                                    <div class="fs-14 fw-semibold text-danger">
                                        -$18,245
                                    </div>
                                </div>
                            </li>
                            <li class="mb-0">
                                <div class="d-flex justify-content-between">
                                    <div>food Products</div>
                                    <div class="fs-14 fw-semibold text-danger">
                                        -$18,478
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Tab Style-7</div>
            </div>
            <div class="card-body">
                <Nav
                    class="nav nav-tabs mb-3 tab-style-8 scaleX"
                    id="myTab4"
                    role="tablist"
                >
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle8Tab = 1)}
                            active={TabStyle8Tab == 1}
                            id="home-style8-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home-style8-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="home-style8-tab-pane"
                            aria-selected="true">Home</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle8Tab = 2)}
                            active={TabStyle8Tab == 2}
                            id="about-style8-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#about-style8-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="about-style8-tab-pane"
                            aria-selected="false">About</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item" role="presentation">
                        <NavLink
                            on:click={() => (TabStyle8Tab = 3)}
                            active={TabStyle8Tab == 3}
                            id="services-style8-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#services-style8-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="services-style8-tab-pane"
                            aria-selected="false">Services</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="" id="TabStyle8">
                    <TabPane
                        class={`${TabStyle8Tab == 1 ? "active" : ""} overflow-hidden`}
                        id="home-style8-tab-pane"
                        role="tabpanel"
                        aria-labelledby="home-style8-tab"
                        tabindex={0}
                    >
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </TabPane>
                    <TabPane
                        class={`${TabStyle8Tab == 2 ? "active" : ""} overflow-hidden`}
                        id="about-style8-tab-pane"
                        role="tabpanel"
                        aria-labelledby="about-style8-tab"
                        tabindex={0}
                    >
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed
                        to using 'Content here, content here', making it look
                        like readable English. Many desktop publishing packages
                        and web page editors now use Lorem Ipsum as their
                        default model text, and a search for 'lorem ipsum' will
                        uncover many web sites still in their infancy. Various
                        versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the
                        like).
                    </TabPane>
                    <TabPane
                        class={`${TabStyle8Tab == 3 ? "active" : ""} overflow-hidden`}
                        id="services-style8-tab-pane"
                        role="tabpanel"
                        aria-labelledby="services-style8-tab"
                        tabindex={0}
                    >
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Vertical Tab Style-1</div>
            </div>
            <div class="card-body">
                <Row>
                    <div class="col-md-2">
                        <Nav
                            pills
                            class=" flex-column  me-3 tab-style-7"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                        >
                            <NavLink
                                on:click={() => (VerticalStyle1Tab = 1)}
                                active={VerticalStyle1Tab == 1}
                                class=" text-start "
                                id="main-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#main-profile"
                                type="button"
                                role="tab"
                                aria-controls="main-profile"
                                aria-selected="true"
                                ><i
                                    class="ri-shield-user-line me-1 align-middle d-inline-block"
                                ></i>Profile</NavLink
                            >
                            <NavLink
                                on:click={() => (VerticalStyle1Tab = 2)}
                                active={VerticalStyle1Tab == 2}
                                class=" text-start"
                                id="man-password-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#man-password"
                                type="button"
                                role="tab"
                                aria-controls="man-password"
                                aria-selected="false"
                                ><i
                                    class="ri-u-disk-line me-1 align-middle d-inline-block"
                                ></i>Password</NavLink
                            >
                            <NavLink
                                on:click={() => (VerticalStyle1Tab = 3)}
                                active={VerticalStyle1Tab == 3}
                                class=" text-start"
                                id="main-team-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#main-team"
                                type="button"
                                role="tab"
                                aria-controls="main-team"
                                aria-selected="false"
                                ><i
                                    class="ri-group-line me-1 align-middle d-inline-block"
                                ></i>Team</NavLink
                            >
                            <NavLink
                                on:click={() => (VerticalStyle1Tab = 4)}
                                active={VerticalStyle1Tab == 4}
                                class=" text-start"
                                id="main-billing-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#main-billing"
                                type="button"
                                role="tab"
                                aria-controls="main-billing"
                                aria-selected="false"
                                ><i
                                    class="ri-bill-line me-1 align-middle d-inline-block"
                                ></i>Billing</NavLink
                            >
                            <NavLink
                                on:click={() => (VerticalStyle1Tab = 5)}
                                active={VerticalStyle1Tab == 5}
                                class=" text-start mb-1"
                                id="main-email-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#main-email"
                                type="button"
                                role="tab"
                                aria-controls="main-email"
                                aria-selected="false"
                                ><i
                                    class="ri-mail-line me-1 align-middle d-inline-block"
                                ></i>Email</NavLink
                            >
                        </Nav>
                    </div>
                    <div class="col-md-8">
                        <TabContent class="" id="v-pills-tabContent">
                            <TabPane
                                class={` ${VerticalStyle1Tab == 1 ? "active" : ""}`}
                                id="main-profile"
                                role="tabpanel"
                                tabindex={0}
                            >
                                <div class="d-sm-flex">
                                    <div class="me-3">
                                        <span class="avatar avatar-xxl">
                                            <img
                                                loading="lazy"
                                                src="../../images/faces/9.jpg"
                                                alt="img"
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <div class="my-md-auto mt-4 ms-md-3">
                                            <h5
                                                class="font-weight-semibold ms-2 mb-1 pb-0"
                                            >
                                                Adam Smith
                                            </h5>
                                            <p
                                                class="text-muted ms-0 mb-2 pb-2"
                                            >
                                                <span class="me-3"
                                                    ><i
                                                        class="far fa-address-card me-2"
                                                    ></i>Ui/Ux Developer</span
                                                >
                                                <span class="me-3"
                                                    ><i class="fa fa-taxi me-2"
                                                    ></i>West fransisco,Alabama</span
                                                >
                                                <span
                                                    ><i class="far fa-flag me-2"
                                                    ></i>New Jersey</span
                                                >
                                            </p>
                                            <p class="text-muted ms-0 mb-2">
                                                <span
                                                    ><i class="fa fa-phone me-2"
                                                    ></i></span
                                                ><span
                                                    class="font-weight-semibold me-2"
                                                    >Phone:</span
                                                ><span>+94 12345 6789</span>
                                            </p>
                                            <p class="text-muted ms-0 mb-2">
                                                <span
                                                    ><i
                                                        class="fa fa-envelope me-2"
                                                    ></i></span
                                                ><span
                                                    class="font-weight-semibold me-2"
                                                    >Email:</span
                                                ><span
                                                    >spruko.space@gmail.com</span
                                                >
                                            </p>
                                            <p class="text-muted ms-0 mb-2">
                                                <span
                                                    ><i class="fa fa-globe me-2"
                                                    ></i></span
                                                ><span
                                                    class="font-weight-semibold me-2"
                                                    >Website:</span
                                                ><span>sprukotechnologies</span>
                                            </p>
                                            <p class="text-muted mb-0 ms-2">
                                                <b>Lorem Ipsum</b> is simply dummy
                                                text of the printing and typesetting
                                                industry. Lorem Ipsum has been standard.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane
                                class={` ${VerticalStyle1Tab == 2 ? "active" : ""}`}
                                id="man-password"
                                role="tabpanel"
                                tabindex={0}
                            >
                                <ul class="list-unstyled text-muted mb-0">
                                    <li class="mb-2">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's <b
                                            >standard dummy text ever since the
                                            1500s</b
                                        >, when an unknown printer took a galley
                                        of type and scrambled it to make a type
                                        specimen book. It has survived not only
                                        five centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was
                                        popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                    </li>
                                    <li class="mb-2">
                                        Contrary to popular belief, Lorem Ipsum
                                        is not simply random text. It has roots
                                        in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years
                                        old. Richard McClintock, a Latin
                                        professor at Hampden-Sydney College in
                                        Virginia,
                                    </li>
                                    <li class="mb-0">
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form.
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane
                                class={` ${VerticalStyle1Tab == 3 ? "active" : ""}`}
                                id="main-team"
                                role="tabpanel"
                                aria-labelledby="main-team-tab"
                                tabindex={0}
                            >
                                <ul class="list-unstyled text-muted mb-0">
                                    <li class="mb-2">
                                        Contrary to popular belief, Lorem Ipsum
                                        is not simply random text. It has roots
                                        in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years
                                        old. Richard McClintock, a Latin
                                        professor at Hampden-Sydney College in
                                        Virginia,
                                    </li>
                                    <li class="mb-2">
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form.
                                    </li>
                                    <li class="mb-0">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's <b
                                            >standard dummy text ever since the
                                            1500s</b
                                        >, when an unknown printer took a galley
                                        of type and scrambled it to make a type
                                        specimen book. It has survived not only
                                        five centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was
                                        popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane
                                class={` ${VerticalStyle1Tab == 4 ? "active" : ""}`}
                                id="main-billing"
                                role="tabpanel"
                                aria-labelledby="main-billing-tab"
                                tabindex={0}
                            >
                                <ul class="list-unstyled text-muted mb-0">
                                    <li class="mb-2">
                                        Contrary to popular belief, Lorem Ipsum
                                        is not simply random text. It has roots
                                        in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years
                                        old. Richard McClintock, a Latin
                                        professor at Hampden-Sydney College in
                                        Virginia,
                                    </li>
                                    <li class="mb-2">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's <b
                                            >standard dummy text ever since the
                                            1500s</b
                                        >, when an unknown printer took a galley
                                        of type and scrambled it to make a type
                                        specimen book. It has survived not only
                                        five centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was
                                        popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                    </li>
                                    <li class="mb-0">
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form.
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane
                                class={` ${VerticalStyle1Tab == 5 ? "active" : ""}`}
                                id="main-email"
                                role="tabpanel"
                                aria-labelledby="main-email-tab"
                                tabindex={0}
                            >
                                <ul class="list-unstyled text-muted mb-0">
                                    <li class="mb-2">
                                        Contrary to popular belief, Lorem Ipsum
                                        is not simply random text. It has roots
                                        in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years
                                        old. Richard McClintock, a Latin
                                        professor at Hampden-Sydney College in
                                        Virginia,
                                    </li>
                                    <li class="mb-2">
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form.
                                    </li>
                                    <li class="mb-0">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's <b
                                            >standard dummy text ever since the
                                            1500s</b
                                        >, when an unknown printer took a galley
                                        of type and scrambled it to make a type
                                        specimen book. It has survived not only
                                        five centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was
                                        popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                    </li>
                                </ul>
                            </TabPane>
                        </TabContent>
                    </div>
                </Row>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-9 -->

<!-- Start:: row-10 -->
<Row>
    <Col xxl={6}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Vertical Tab Style-2</div>
            </div>
            <div class="card-body">
                <Row>
                    <div class="col-md-3">
                        <Nav
                            tabs
                            class="nav nav-tabs flex-column vertical-tabs-2 mb-3"
                            role="tablist"
                        >
                            <NavItem class="nav-item">
                                <NavLink
                                    on:click={() => (VerticalStyle2Tab = 1)}
                                    active={VerticalStyle2Tab == 1}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#!"
                                    aria-selected="true"
                                >
                                    <p class="mb-1">
                                        <i class="ri-home-4-line"></i>
                                    </p>
                                    <p class="mb-0 text-break">Home</p>
                                </NavLink>
                            </NavItem>
                            <NavItem class="nav-item">
                                <NavLink
                                    on:click={() => (VerticalStyle2Tab = 2)}
                                    active={VerticalStyle2Tab == 2}
                                    class="nav-link"
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#!"
                                    aria-selected="true"
                                >
                                    <p class="mb-1">
                                        <i class="ri-phone-line"></i>
                                    </p>
                                    <p class="mb-0 text-break">
                                        About
                                    </p></NavLink
                                >
                            </NavItem>
                            <NavItem class="nav-item">
                                <NavLink
                                    on:click={() => (VerticalStyle2Tab = 3)}
                                    active={VerticalStyle2Tab == 3}
                                    class="nav-link mb-0"
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#!"
                                    aria-selected="true"
                                >
                                    <p class="mb-1">
                                        <i class="ri-customer-service-line"></i>
                                    </p>
                                    <p class="mb-0 text-break">Services</p>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div class="col-md-9">
                        <TabContent class="text-muted" id="VerticalTabStyle2">
                            <TabPane
                                class={` ${VerticalStyle2Tab == 1 ? "active" : ""}`}
                                id="home-vertical-custom"
                                role="tabpanel"
                            >
                                <ul class="mb-0">
                                    <li class="mb-2">
                                        How hotel deals can help you live a
                                        better life. <b>How celebrity cruises</b
                                        > aren't as bad as you think. How cultural
                                        solutions can help you predict the future.
                                        How to cheat at dog friendly hotels and get
                                        away with it. 17 problems with summer activities.
                                        How to cheat at travel agents and get away
                                        with it. How not knowing family trip ideas
                                        makes you a rookie. What everyone is saying
                                        about daily deals.
                                    </li>
                                    <li>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour, or randomised words
                                        which don't look even slightly
                                        believable. If you are going to use a
                                        passage of Lorem Ipsum, you need to be
                                        sure there isn't anything embarrassing
                                        hidden.
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane
                                class={` ${VerticalStyle2Tab == 2 ? "active" : ""}`}
                                id="about-vertical-custom"
                                role="tabpanel"
                            >
                                <ul class="mb-0">
                                    <li class="mb-2">
                                        The standard chunk of Lorem Ipsum used
                                        since the 1500s is reproduced below for
                                        those interested. Sections 1.10.32 and
                                        1.10.33 from "de Finibus Bonorum et
                                        Malorum" by Cicero are also reproduced
                                        in their exact original form,
                                        accompanied by English versions from the
                                        1914 translation by H. Rackham,How hotel
                                        deals can help you live a better life. <b
                                            >How celebrity cruises</b
                                        >
                                    </li>
                                    <li>
                                        Contrary to popular belief, Lorem Ipsum
                                        is not simply random text. It has roots
                                        in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years
                                        old. Richard McClintock, a Latin
                                        professor at Hampden-Sydney College in
                                        Virginia, looked up one of the more
                                        obscure Latin words, consectetur.
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane
                                class={` ${VerticalStyle2Tab == 3 ? "active" : ""}`}
                                id="services-vertical-custom"
                                role="tabpanel"
                            >
                                <ul class="mb-0">
                                    <li class="mb-2">
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour, or randomised words
                                        which don't look even slightly
                                        believable. If you are going to use a
                                        passage of Lorem Ipsum, you need to be
                                        sure there isn't anything embarrassing
                                        hidden.
                                    </li>
                                    <li>
                                        How hotel deals can help you live a
                                        better life. <b>How celebrity cruises</b
                                        > aren't as bad as you think. How cultural
                                        solutions can help you predict the future.
                                        How to cheat at dog friendly hotels and get
                                        away with it. 17 problems with summer activities.
                                        How to cheat at travel agents and get away
                                        with it. How not knowing family trip ideas
                                        makes you a rookie. What everyone is saying
                                        about daily deals.
                                    </li>
                                </ul>
                            </TabPane>
                        </TabContent>
                    </div>
                </Row>
            </div>
        </div>
    </Col>
    <Col xxl={6}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Vertical Tabs Style-3</div>
            </div>
            <div class="card-body">
                <Row>
                    <div class="col-md-4">
                        <Nav
                            tabs
                            class="nav nav-tabs flex-column vertical-tabs-3 mb-3"
                            role="tablist"
                        >
                            <NavItem class="nav-item">
                                <NavLink
                                    on:click={() => (VerticalStyle3Tab = 1)}
                                    active={VerticalStyle3Tab == 1}
                                    class="nav-link  text-break"
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#!"
                                    aria-selected="true"
                                >
                                    <i
                                        class="ri-map-pin-user-line me-2 align-middle d-inline-block"
                                    ></i>Employees
                                </NavLink>
                            </NavItem>
                            <NavItem class="nav-item">
                                <NavLink
                                    on:click={() => (VerticalStyle3Tab = 2)}
                                    active={VerticalStyle3Tab == 2}
                                    class="nav-link text-break"
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#!"
                                    aria-selected="true"
                                >
                                    <i
                                        class="ri-group-line me-2 align-middle d-inline-block"
                                    ></i>Customers
                                </NavLink>
                            </NavItem>
                            <NavItem class="nav-item">
                                <NavLink
                                    on:click={() => (VerticalStyle3Tab = 3)}
                                    active={VerticalStyle3Tab == 3}
                                    class="nav-link text-break mb-0"
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#!"
                                    aria-selected="true"
                                >
                                    <i
                                        class="ri-gift-line me-2 align-middle d-inline-block"
                                    ></i>Products
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div class="col-md-8">
                        <TabContent class="text-muted" id="VerticalTabsStyle3">
                            <TabPane
                                class={` ${VerticalStyle3Tab == 1 ? "active" : ""}`}
                                id="employee-vertical"
                                role="tabpanel"
                            >
                                <ul class="mb-0">
                                    <li class="mb-2">
                                        How hotel deals can help you live a
                                        better life. <b>How celebrity cruises</b
                                        > aren't as bad as you think. How cultural
                                        solutions can help you predict the future.
                                        How to cheat at dog friendly hotels and get
                                        away with it. 17 problems with summer activities.
                                        How to cheat at travel agents and get away
                                        with it. How not knowing family trip ideas
                                        makes you a rookie. What everyone is saying
                                        about daily deals.
                                    </li>
                                    <li>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour, or randomised words
                                        which don't look even slightly
                                        believable.
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane
                                class={` ${VerticalStyle3Tab == 2 ? "active" : ""}`}
                                id="customers-vertical"
                                role="tabpanel"
                            >
                                <ul class="mb-0">
                                    <li class="mb-2">
                                        The standard chunk of Lorem Ipsum used
                                        since the 1500s is reproduced below for
                                        those interested. Sections 1.10.32 and
                                        1.10.33 from "de Finibus Bonorum et
                                        Malorum" by Cicero are also reproduced
                                        in their exact original form,
                                        accompanied by English versions from the
                                        1914 translation by H. Rackham,How hotel
                                        deals can help you live a better life. <b
                                            >How celebrity cruises</b
                                        >
                                    </li>
                                    <li>
                                        Contrary to popular belief, Lorem Ipsum
                                        is not simply random text. It has roots
                                        in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years
                                        old. Richard McClintock, a Latin
                                        professor at Hampden-Sydney.
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane
                                class={` ${VerticalStyle3Tab == 3 ? "active" : ""}`}
                                id="products-vertical"
                                role="tabpanel"
                            >
                                <ul class="mb-0">
                                    <li class="mb-2">
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour, or randomised words
                                        which don't look even slightly
                                        believable. If you are going to use a
                                        passage of Lorem Ipsum, you need to be
                                        sure there isn't anything embarrassing
                                        hidden.
                                    </li>
                                    <li>
                                        How hotel deals can help you live a
                                        better life. <b>How celebrity cruises</b
                                        > aren't as bad as you think. How cultural
                                        solutions can help you predict the future.
                                        How to cheat at dog friendly hotels and get
                                        away with it. 17 problems with summer activities.
                                        How to cheat at travel agents.
                                    </li>
                                </ul>
                            </TabPane>
                        </TabContent>
                    </div>
                </Row>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-10 -->

<!-- Start:: row-11 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Tabs with dropdowns</div>
            </div>
            <div class="card-body">
                <Nav class="mb-3" role="tablist">
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) =>
                                handleTabswithdropdowns(1, event)}
                            active={Tabswithdropdowns == 1}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            href="#hometab-dropdown"
                            aria-selected="true">Home</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <Dropdown nav isOpen={Tabswithdropdowns === 2}>
                            <DropdownToggle
                                nav
                                caret
                                class={`${Tabswithdropdowns === 2 ? "active" : ""}`}
                            >
                                Company
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem
                                    class={`${Tabswithdropdowns === 2 ? "active" : ""}`}
                                    on:click={(event) =>
                                        handleTabswithdropdowns(2, event)}
                                    >About</DropdownItem
                                >
                                <DropdownItem>Another Action</DropdownItem>
                                <DropdownItem>Something else here</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Seperated link</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) =>
                                handleTabswithdropdowns(3, event)}
                            active={Tabswithdropdowns == 3}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            href="#homeproducts-dropdown"
                            aria-selected="false">Products</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink href="#!" class="nav-link disabled"
                            >Services</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="tab-content" id="Tabswithdropdowns">
                    <TabPane
                        class={`text-muted ${Tabswithdropdowns == 1 ? "active" : ""} `}
                        id="hometab-dropdown"
                        role="tabpanel"
                    >
                        <b>Lorem Ipsum is simply dummy</b> text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${Tabswithdropdowns == 2 ? "active" : ""}`}
                        id="homeabout-dropdown"
                        role="tabpanel"
                    >
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, <b
                            >Making it over 2000 years old</b
                        >. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the
                        more obscure Latin words, consectetur.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${Tabswithdropdowns == 3 ? "active" : ""}`}
                        id="homeproducts-dropdown"
                        role="tabpanel"
                    >
                        There are many variations of passages of <b
                            >Lorem Ipsum available</b
                        >, but the majority have suffered alteration in some
                        form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Pills with dropdowns</div>
            </div>
            <div class="card-body">
                <Nav class="nav nav-pills mb-3" role="tablist">
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) =>
                                handlePillswithdropdowns(1, event)}
                            active={Pillswithdropdowns == 1}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#pill-products"
                            aria-selected="true">Products</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <Dropdown nav isOpen={Pillswithdropdowns === 2}>
                            <DropdownToggle
                                nav
                                caret
                                class={`${Pillswithdropdowns === 2 ? "active" : ""}`}
                            >
                                Cart
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem
                                    class={`${Pillswithdropdowns === 2 ? "active" : ""}`}
                                    on:click={(event) =>
                                        handlePillswithdropdowns(2, event)}
                                    >Wishlist</DropdownItem
                                >
                                <DropdownItem>Liked</DropdownItem>
                                <DropdownItem>Save For Later</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>recently Viewed</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) =>
                                handlePillswithdropdowns(3, event)}
                            active={Pillswithdropdowns == 3}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#pill-orders"
                            aria-selected="false">Orders</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink href="#!" class="nav-link disabled"
                            >Offers</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="tab-content" id="Pillswithdropdowns">
                    <TabPane
                        class={`text-muted ${Pillswithdropdowns == 1 ? "active" : ""} `}
                        id="pill-products"
                        role="tabpanel"
                    >
                        How travel coupons make you a better lover. Why cultural
                        solutions are the new black. Why mom was right about
                        travel insurances. How family trip ideas can help you
                        predict the future. <b
                            >How carnival cruises make you a better lover</b
                        >. Why you'll never succeed at daily deals.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${Pillswithdropdowns == 2 ? "active" : ""} `}
                        id="pill-wishlist"
                        role="tabpanel"
                    >
                        How hotel deals can help you live a better life. <b
                            >How celebrity cruises</b
                        >
                        aren't as bad as you think. How cultural solutions can help
                        you predict the future. How to cheat at dog friendly hotels
                        and get away with it. 17 problems with summer activities.
                        How to cheat at travel agents and get away with it.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${Pillswithdropdowns == 3 ? "active" : ""} `}
                        id="pill-orders"
                        role="tabpanel"
                    >
                        Unbelievable healthy snack success stories. 12 facts
                        about safe food handling tips that will impress your
                        friends. Restaurant weeks by the numbers. Will mexican
                        food ever rule the world? The 10 best thai restaurant
                        youtube videos. How restaurant weeks can make you sick.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-11 -->

<!-- Start:: row-12 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Fill Pills</div>
            </div>
            <div class="card-body">
                <Nav pills fill class=" " role="tablist">
                    <NavItem class="nav-item mb-3">
                        <NavLink
                            on:click={(event) => handleFIllPills(1, event)}
                            active={FIllPills == 1}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#fill-pill-home"
                            aria-selected="true">Home</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleFIllPills(2, event)}
                            active={FIllPills == 2}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#fill-pill-about"
                            aria-selected="false">Customer-ratings</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleFIllPills(3, event)}
                            active={FIllPills == 3}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#fill-pill-services"
                            aria-selected="false">Services</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink href="#!" class="nav-link disabled"
                            >Disabled</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="tab-content" id="FIllPills">
                    <TabPane
                        class={`text-muted ${FIllPills == 1 ? "active" : ""} `}
                        id="fill-pill-home"
                        role="tabpanel"
                    >
                        How travel coupons make you a better lover. Why cultural
                        solutions are the new black. Why mom was right about
                        travel insurances. How family trip ideas can help you
                        predict the future. <b
                            >How carnival cruises make you a better lover</b
                        >. Why you'll never succeed at daily deals.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${FIllPills == 2 ? "active" : ""} `}
                        id="fill-pill-about"
                        role="tabpanel"
                    >
                        How hotel deals can help you live a better life. <b
                            >How celebrity cruises</b
                        >
                        aren't as bad as you think. How cultural solutions can help
                        you predict the future. How to cheat at dog friendly hotels
                        and get away with it. 17 problems with summer activities.
                        How to cheat at travel agents and get away with it.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${FIllPills == 3 ? "active" : ""} `}
                        id="fill-pill-services"
                        role="tabpanel"
                    >
                        Unbelievable healthy snack success stories. 12 facts
                        about safe food handling tips that will impress your
                        friends. Restaurant weeks by the numbers. Will mexican
                        food ever rule the world? The 10 best thai restaurant
                        youtube videos. How restaurant weeks can make you sick.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">justified Pills</div>
            </div>
            <div class="card-body">
                <Nav
                    pills
                    class=" nav-justified d-sm-flex d-block"
                    role="tablist"
                >
                    <NavItem class="nav-item mb-3">
                        <NavLink
                            on:click={(event) => handleJustifiedPills(1, event)}
                            active={justifiedPills == 1}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#justified-pill-home"
                            aria-selected="true">Home</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleJustifiedPills(2, event)}
                            active={justifiedPills == 2}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#justified-pill-details"
                            aria-selected="true">Company Details</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink
                            on:click={(event) => handleJustifiedPills(3, event)}
                            active={justifiedPills == 3}
                            class="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-current="page"
                            href="#justified-pill-products"
                            aria-selected="true">Products</NavLink
                        >
                    </NavItem>
                    <NavItem class="nav-item">
                        <NavLink href="#!" class="nav-link disabled"
                            >Disabled</NavLink
                        >
                    </NavItem>
                </Nav>
                <TabContent class="tab-content" id="justifiedPills">
                    <TabPane
                        class={`text-muted ${justifiedPills == 1 ? "active" : ""}`}
                        id="justified-pill-home"
                        role="tabpanel"
                    >
                        How travel coupons make you a better lover. Why cultural
                        solutions are the new black. Why mom was right about
                        travel insurances. How family trip ideas can help you
                        predict the future. <b
                            >How carnival cruises make you a better lover</b
                        >. Why you'll never succeed at daily deals.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${justifiedPills == 2 ? "active" : ""}`}
                        id="justified-pill-details"
                        role="tabpanel"
                    >
                        How hotel deals can help you live a better life. <b
                            >How celebrity cruises</b
                        >
                        aren't as bad as you think. How cultural solutions can help
                        you predict the future. How to cheat at dog friendly hotels
                        and get away with it. 17 problems with summer activities.
                        How to cheat at travel agents and get away with it.
                    </TabPane>
                    <TabPane
                        class={`text-muted ${justifiedPills == 3 ? "active" : ""}`}
                        id="justified-pill-products"
                        role="tabpanel"
                    >
                        Unbelievable healthy snack success stories. 12 facts
                        about safe food handling tips that will impress your
                        friends. Restaurant weeks by the numbers. Will mexican
                        food ever rule the world? The 10 best thai restaurant
                        youtube videos. How restaurant weeks can make you sick.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-12 -->

<!-- Start:: row-13 -->
<Row>
    <Col xl={12}>
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Working with flex utilities</div>
            </div>
            <div class="card-body">
                <Nav pills class=" flex-column flex-sm-row mb-3">
                    <NavLink
                        on:click={(event) => handleWorkingTab(1, event)}
                        active={WorkingTab == 1}
                        class="flex-sm-fill text-sm-center  "
                        data-bs-toggle="tab"
                        role="tab"
                        aria-current="page"
                        href="#pill-flex-home"
                        aria-selected="true">Home</NavLink
                    >
                    <NavLink
                        on:click={(event) => handleWorkingTab(2, event)}
                        active={WorkingTab == 2}
                        class="flex-sm-fill text-sm-center "
                        data-bs-toggle="tab"
                        role="tab"
                        aria-current="page"
                        href="#pill-flex-big"
                        aria-selected="false"
                        >More Data More The Tab Size</NavLink
                    >
                    <NavLink
                        on:click={(event) => handleWorkingTab(3, event)}
                        active={WorkingTab == 3}
                        class="flex-sm-fill text-sm-center "
                        data-bs-toggle="tab"
                        role="tab"
                        aria-current="page"
                        href="#pill-flex-about"
                        aria-selected="false">About</NavLink
                    >
                    <NavLink
                        href="#!"
                        class="flex-sm-fill text-sm-center  disabled"
                        >Services</NavLink
                    >
                </Nav>
                <TabContent class="text-muted" id="WorkingWithFlexUtilities">
                    <TabPane
                        class={` ${WorkingTab == 1 ? "active" : ""}`}
                        id="pill-flex-home"
                        role="tabpanel"
                    >
                        How travel coupons make you a better lover. Why cultural
                        solutions are the new black. Why mom was right about
                        travel insurances. How family trip ideas can help you
                        predict the future. <b
                            >How carnival cruises make you a better lover</b
                        >. Why you'll never succeed at daily deals. 11 ways
                        cheapest flights can find you the love of your life. The
                        complete beginner's guide to mission trips. If you read
                        one article about cultural notes read this one. Why you
                        shouldn't eat vacation package in bed.
                    </TabPane>
                    <TabPane
                        class={` ${WorkingTab == 2 ? "active" : ""}`}
                        id="pill-flex-big"
                        role="tabpanel"
                    >
                        How hotel deals can help you live a better life. <b
                            >How celebrity cruises</b
                        >
                        aren't as bad as you think. How cultural solutions can help
                        you predict the future. How to cheat at dog friendly hotels
                        and get away with it. 17 problems with summer activities.
                        How to cheat at travel agents and get away with it. How not
                        knowing family trip ideas makes you a rookie. What everyone
                        is saying about daily deals. How twitter can teach you about
                        carnival cruises. How to start using cultural solutions.
                    </TabPane>
                    <TabPane
                        class={` ${WorkingTab == 3 ? "active" : ""}`}
                        id="pill-flex-about"
                        role="tabpanel"
                    >
                        Unbelievable healthy snack success stories. 12 facts
                        about safe food handling tips that will impress your
                        friends. Restaurant weeks by the numbers. Will mexican
                        food ever rule the world? The 10 best thai restaurant
                        youtube videos. How restaurant weeks can make you sick.
                        The complete beginner's guide to cooking healthy food.
                        Unbelievable food stamp success stories. How whole foods
                        markets are making the world a better place. 16 things
                        that won't happen in dish reviews.
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </Col>
</Row>
<!-- End:: row-13 -->
