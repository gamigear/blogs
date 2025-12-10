<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkBasicpricecard from "@/shared/@spk/reusable-pages/spk-basicpricecard.svelte";
    import SpkPricecard from "@/shared/@spk/reusable-pages/spk-pricecard.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        BasicPricing1data,
        BasicPricingdata,
        PricingData,
        YearData,
    } from "@/shared/data/pages/pricingdata";
    import {
        Col,
        Nav,
        NavItem,
        NavLink,
        Row,
        TabContent,
        TabPane,
    } from "@sveltestrap/sveltestrap";

    let activeTab = 1;
    let activeTab2 = 1;
</script>

<!-- Page Title -->
<svelte:head>
    <title>Pricing | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Pricing" activepage="Pages" page="Pricing" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<div class="row d-flex justify-content-center mb-5">
    <div class="pricing-heading-section text-center mb-5">
        <span class="badge bg-primary-transparent rounded-pill">
            Pricing Plans
        </span>
        <h2 class="fw-semibold mt-2">Choose the Right Plan for Your Needs</h2>
        <span class="d-block text-muted fs-16 mb-3"
            >Choose a plan that fits your needs with scalable features and great
            value.</span
        >
        <div
            class="tab-style-1 border p-1 bg-white rounded-pill d-inline-block"
        >
            <Nav class=" nav-pills" role="tablist">
                <NavItem class="nav-item" role="presentation">
                    <NavLink
                        on:click={() => (activeTab = 1)}
                        active={activeTab == 1}
                        class="nav-link rounded-pill fw-medium"
                        data-bs-toggle="pill"
                        data-bs-target="#pricing-monthly"
                        aria-selected="true"
                        role="tab">Monthly</NavLink
                    >
                </NavItem>
                <NavItem class="nav-item" role="presentation">
                    <NavLink
                        on:click={() => (activeTab = 2)}
                        active={activeTab == 2}
                        class="nav-link rounded-pill fw-medium"
                        data-bs-toggle="pill"
                        data-bs-target="#pricing-yearly"
                        aria-selected="false"
                        role="tab"
                        tabindex={-1}>Yearly</NavLink
                    >
                </NavItem>
            </Nav>
        </div>
    </div>
    <div class="col-xl-9">
        <TabContent class="tab-content" id="pricingTab1">
            <TabPane
                class={`${activeTab == 1 ? "active" : ""} p-0 border-0`}
                id="pricing-monthly"
                role="tabpanel"
            >
                <Row>
                    {#each PricingData as idx}
                        <Col xxl={4} xl={12} class="">
                            <SpkPricecard price={idx} />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
            <TabPane
                class={`${activeTab == 2 ? "active" : ""} p-0 border-0`}
                id="pricing-yearly"
                role="tabpanel"
            >
                <Row>
                    {#each YearData as idx}
                        <Col xxl={4} xl={12} class="">
                            <SpkPricecard price={idx} />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
        </TabContent>
    </div>
</div>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<div class="row d-flex justify-content-center">
    <div class="pricing-heading-section text-center mb-5">
        <span class="badge bg-primary-transparent rounded-pill">
            Our Pricing
        </span>
        <h2 class="fw-semibold mt-2">Choose the Plan That Fits Your Needs</h2>
        <span class="d-block text-muted fs-16 mb-3"
            >Select the right fit and enjoy seamless access to all features.</span
        >
        <div class="tab-style-1 border bg-white rounded-0 d-inline-block">
            <Nav class="nav nav-pills" role="tablist">
                <NavItem class="nav-item" role="presentation">
                    <NavLink
                        on:click={() => (activeTab2 = 1)}
                        active={activeTab2 == 1}
                        class="nav-link rounded-0 fw-medium"
                        data-bs-toggle="pill"
                        data-bs-target="#pricing1-monthly"
                        aria-selected="true"
                        role="tab">Monthly</NavLink
                    >
                </NavItem>
                <NavItem class="nav-item" role="presentation">
                    <NavLink
                        on:click={() => (activeTab2 = 2)}
                        active={activeTab2 == 2}
                        class="nav-link rounded-0 fw-medium"
                        data-bs-toggle="pill"
                        data-bs-target="#pricing1-yearly"
                        aria-selected="false"
                        role="tab"
                        tabindex={-1}>Yearly</NavLink
                    >
                </NavItem>
            </Nav>
        </div>
    </div>
    <div class="col-xl-9">
        <TabContent id="pricingPlan2">
            <TabPane
                class={`${activeTab2 == 1 ? "active" : ""} p-0 border-0`}
                id="pricing1-monthly"
                role="tabpanel"
            >
                <Row>
                    {#each BasicPricingdata as card}
                        <Col xxl={4}>
                            <SpkBasicpricecard
                                cardClass={card.cardClass}
                                price={card}
                            />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
            <TabPane
                class={`${activeTab2 == 2 ? "active" : ""} p-0 border-0`}
                id="pricing1-yearly"
                role="tabpanel"
            >
                <Row>
                    {#each BasicPricing1data as card}
                        <Col xxl={4}>
                            <SpkBasicpricecard
                                cardClass={card.cardClass}
                                price={card}
                            />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
        </TabContent>
    </div>
</div>
<!-- End:: row-2 -->
