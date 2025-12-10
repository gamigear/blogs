
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import SpkNftcard from "@/shared/@spk/dashboards-reusable/nft/spk-nftcard.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        MartketPlaceItems,
        MartketPlaceItems1,
    } from "@/shared/data/dashboards/nft/marketplacedata";
    import { nftDashDropdown1 } from "@/shared/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        Col,
        Nav,
        NavItem,
        NavLink,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
        TabContent,
        TabPane,
    } from "@sveltestrap/sveltestrap";
    const Market = MartketPlaceItems.slice(0, 2);
    const MarketDomain = MartketPlaceItems.filter((items) =>
        [2].includes(items.id),
    );
    const MarketMusic = MartketPlaceItems.filter((items) =>
        [3].includes(items.id),
    );
    const MarketReal = MartketPlaceItems.filter((items) =>
        [4].includes(items.id),
    );
    const MarketSports = MartketPlaceItems.filter((items) =>
        [5].includes(items.id),
    );
    const MarketFashion = MartketPlaceItems.filter((items) =>
        [6].includes(items.id),
    );
    const MarketAvatars = MartketPlaceItems.filter((items) =>
        [7].includes(items.id),
    );
    const MarketMemes = MartketPlaceItems.filter((items) =>
        [8].includes(items.id),
    );

    let activeTab = 1;
</script>

<!-- Page Title -->
<svelte:head>
    <title>MarketPlace | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Market Place"
    subTitle="NFT"
    activepage="Dashboards"
    page="Market Place"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardBody>
                <div
                    class="d-flex align-items-center justify-content-between flex-wrap gap-2"
                >
                    <div>
                        <Nav
                            class="nav-tabs nav-tabs-header mb-0"
                            role="tablist"
                        >
                            <NavItem class="" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 1), e.preventDefault();
                                    }}
                                    active={activeTab == 1}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#nft-all"
                                    aria-selected="true">All</NavLink
                                >
                            </NavItem>
                            <NavItem class="" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 2), e.preventDefault();
                                    }}
                                    active={activeTab == 2}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#nft-art"
                                    aria-selected="false"
                                    tabindex={-1}>Art</NavLink
                                >
                            </NavItem>
                            <NavItem class="" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 3), e.preventDefault();
                                    }}
                                    active={activeTab == 3}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#nft-gaming"
                                    aria-selected="false"
                                    tabindex={-1}>Gaming</NavLink
                                >
                            </NavItem>
                            <NavItem class="" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 4), e.preventDefault();
                                    }}
                                    active={activeTab == 4}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#nft-domain"
                                    aria-selected="false"
                                    tabindex={-1}>Domain</NavLink
                                >
                            </NavItem>
                            <NavItem class="" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 5), e.preventDefault();
                                    }}
                                    active={activeTab == 5}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#nft-music"
                                    aria-selected="false"
                                    tabindex={-1}>Music</NavLink
                                >
                            </NavItem>
                            <NavItem class="" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 6), e.preventDefault();
                                    }}
                                    active={activeTab == 6}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#nft-realestate"
                                    aria-selected="false"
                                    tabindex={-1}>Real Estate</NavLink
                                >
                            </NavItem>
                            <NavItem class="" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 7), e.preventDefault();
                                    }}
                                    active={activeTab == 7}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#nft-sports"
                                    aria-selected="false"
                                    tabindex={-1}>Sports</NavLink
                                >
                            </NavItem>
                            <NavItem class="" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 8), e.preventDefault();
                                    }}
                                    active={activeTab == 8}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#nft-fashion"
                                    aria-selected="false"
                                    tabindex={-1}>Fashion</NavLink
                                >
                            </NavItem>
                            <NavItem class="" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 9), e.preventDefault();
                                    }}
                                    active={activeTab == 9}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#nft-avatars"
                                    aria-selected="false"
                                    tabindex={-1}>Avatars</NavLink
                                >
                            </NavItem>
                            <NavItem class="" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 10), e.preventDefault();
                                    }}
                                    active={activeTab == 10}
                                    class=""
                                    data-bs-toggle="tab"
                                    role="tab"
                                    aria-current="page"
                                    href="#nft-memes"
                                    aria-selected="false"
                                    tabindex={-1}>Memes</NavLink
                                >
                            </NavItem>
                        </Nav>
                    </div>
                    <div class="d-flex gap-2">
                        <SpkButton
                            color="secondary"
                            buttontype="button"
                            customClass="btn btn-sm btn-wave">Filters</SpkButton
                        >
                        <SpkDropdown
                            option={nftDashDropdown1}
                            ToggleClass="btn btn-sm btn-wave waves-effect waves-light no-caret"
                            Color="primary"
                            parent={`Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                        />
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xl={12}>
        <TabContent id="nft_marketPlace">
            <TabPane
                class={`p-0 border-0 ${activeTab == 1 ? "active" : ""}`}
                id="nft-all"
                role="tabpanel"
            >
                <div class="row">
                    {#each MartketPlaceItems as card}
                        <Col xxl={3} xl={4} lg={4} md={6} sm={6} class="col-12">
                            <SpkNftcard nft={card} />
                        </Col>
                    {/each}
                    <nav aria-label="Page navigation">
                        <Pagination class="justify-content-end d-flex mb-4 customPaginationPageBottom">
                            <PaginationItem disabled>
                                <PaginationLink on:click={e=>e.preventDefault()}>Previous</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink on:click={e=>e.preventDefault()}>1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink on:click={e=>e.preventDefault()}>2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink on:click={e=>e.preventDefault()}>Next</PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </nav>
                </div>
            </TabPane>
            <TabPane
                class={`p-0 border-0 ${activeTab == 2 ? "active" : ""}`}
                id="nft-art"
                role="tabpanel"
            >
                <Row>
                    {#each MartketPlaceItems1 as card}
                        <Col xxl={3} xl={4} lg={4} md={6} sm={6} class="col-12">
                            <SpkNftcard nft={card} />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
            <TabPane
                class={`p-0 border-0 ${activeTab == 3 ? "active" : ""}`}
                id="nft-gaming"
                role="tabpanel"
            >
                <Row>
                    {#each Market as card}
                        <Col xxl={3} xl={4} lg={4} md={6} sm={6} class="col-12">
                            <SpkNftcard nft={card} />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
            <TabPane
                class={`p-0 border-0 ${activeTab == 4 ? "active" : ""}`}
                id="nft-domain"
                role="tabpanel"
            >
                <Row>
                    {#each MarketDomain as card}
                        <Col xxl={3} xl={4} lg={4} md={6} sm={6} class="col-12">
                            <SpkNftcard nft={card} />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
            <TabPane
                class={`p-0 border-0 ${activeTab == 5 ? "active" : ""}`}
                id="nft-music"
                role="tabpanel"
            >
                <Row>
                    {#each MarketMusic as card}
                        <Col xxl={3} xl={4} lg={4} md={6} sm={6} class="col-12">
                            <SpkNftcard nft={card} />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
            <TabPane
                class={`p-0 border-0 ${activeTab == 6 ? "active" : ""}`}
                id="nft-realestate"
                role="tabpanel"
            >
                <Row>
                    {#each MarketReal as card}
                        <Col xxl={3} xl={4} lg={4} md={6} sm={6} class="col-12">
                            <SpkNftcard nft={card} />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
            <TabPane
                class={`p-0 border-0 ${activeTab == 7 ? "active" : ""}`}
                id="nft-sports"
                role="tabpanel"
            >
                <Row>
                    {#each MarketSports as card}
                        <Col xxl={3} xl={4} lg={4} md={6} sm={6} class="col-12">
                            <SpkNftcard nft={card} />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
            <TabPane
                class={`p-0 border-0 ${activeTab == 8 ? "active" : ""}`}
                id="nft-fashion"
                role="tabpanel"
            >
                <Row>
                    {#each MarketFashion as card}
                        <Col xxl={3} xl={4} lg={4} md={6} sm={6} class="col-12">
                            <SpkNftcard nft={card} />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
            <TabPane
                class={`p-0 border-0 ${activeTab == 9 ? "active" : ""}`}
                id="nft-avatars"
                role="tabpanel"
            >
                <Row>
                    {#each MarketAvatars as card}
                        <Col xxl={3} xl={4} lg={4} md={6} sm={6} class="col-12">
                            <SpkNftcard nft={card} />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
            <TabPane
                class={`p-0 border-0 ${activeTab == 10 ? "active" : ""}`}
                id="nft-memes"
                role="tabpanel"
            >
                <Row>
                    {#each MarketMemes as card}
                        <Col xxl={3} xl={4} lg={4} md={6} sm={6} class="col-12">
                            <SpkNftcard nft={card} />
                        </Col>
                    {/each}
                </Row>
            </TabPane>
        </TabContent>
    </Col>
</Row>

<!-- End:: row-2 -->
