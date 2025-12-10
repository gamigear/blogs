<script lang="ts">
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import SpkNftcard from "$lib/@spk/dashboards-reusable/nft/spk-nftcard.svelte";
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        BalanceOptions,
        Followers,
        nftCards,
        NftCards,
        NftOptions,
        NftSales,
        NftTableData,
        NftTags,
        StatItems,
    } from "$lib/data/dashboards/nft/nftdashvoarddata";
    import { Dropdownoption, nftDashDropdown } from "$lib/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        Input,
        Pagination,
        PaginationItem,
        PaginationLink,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";
    import type { SwiperContainer } from "swiper/element";

     let swiperEl: SwiperContainer | undefined;
    onMount(() => {
        if (swiperEl != undefined) {
            const swiperParams = {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: true,
            };

            // now we need to assign all parameters to Swiper element
            Object.assign(swiperEl, swiperParams);

            // and now initialize it
            swiperEl.initialize();
        }
    });

</script>

<!-- Page Title -->
<svelte:head>
    <title>Dashboard | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="NFT"
    subTitle="NFT"
    activepage="Dashboards"
    page="Dashboard"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={9}>
        <div class="row">
            <Col xl={12}>
                <Card class="custom-card nft-main-banner-card border-0">
                    <CardBody>
                        <div class="nft-main-bannr-background grid-cards">
                            <Image
                                src="../../images/nft-images/1.png"
                                alt=""
                                class="d-lg-block d-none"
                            />
                        </div>
                        <!-- svelte-ignore a11y_consider_explicit_label -->
                        <h2 class="text-fixed-white">
                            Discover, buy, and sell unique NFTs
                        </h2>
                        <p class="fs-16 op-8 mb-4">
                            Immerse yourself in a world where digital creativity <br
                            /> meets blockchain technology
                        </p>
                        <div class="btn-list">
                            <SpkButton
                                color=""
                                customClass="btn btn-lg btn-light"
                                >Explore</SpkButton
                            >
                            <SpkButton
                                color=""
                                customClass="btn btn-lg btn-outline-light text-fixed-white"
                                >Sell Artwork</SpkButton
                            >
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <div
                class="mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2"
            >
                <h6 class="fw-medium mb-0">Trending NFT'S :</h6>
                <div
                    class="btn-group btn-group-sm"
                    role="group"
                    aria-label="Basic example"
                >
                    <SpkButton
                        buttontype="button"
                        color=""
                        customClass="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                        >1D</SpkButton
                    >
                    <SpkButton
                        buttontype="button"
                        color=""
                        customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                        >1W</SpkButton
                    >
                    <SpkButton
                        buttontype="button"
                        color=""
                        customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                        >1M</SpkButton
                    >
                    <SpkButton
                        buttontype="button"
                        color=""
                        customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                        >1Y</SpkButton
                    >
                </div>
            </div>
            <div class="d-flex align-items-center gap-4 mb-4 flex-wrap">
                {#each NftTags as tag}
                    <div
                        class={`nft-tag ${tag.className} ${tag.isActive ? "active" : ""}`}
                    >
                        <!-- svelte-ignore a11y_consider_explicit_label -->
                        <a href="#!" class="stretched-link"></a>
                        <span class="nft-tag-text">{tag.label}</span>
                    </div>
                {/each}
            </div>
            {#each NftCards as card}
                <Col
                    xxl={4}
                    xl={4}
                    lg={4}
                    md={4}
                    sm={6}
                    class="col-12"
                >
                    <SpkNftcard nft={card} />
                </Col>
            {/each}
        </div>
    </Col>
    <Col xxl={3}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardBody>
                        <div class="d-flex align-items-start gap-3 mb-2">
                            <div class="lh-1">
                                <span
                                    class="avatar avatar-md bg-primary-transparent svg-primary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        fill="#000000"
                                        ><path d="M0 0h24v24H0V0z" fill="none"
                                        ></path><path
                                            d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"
                                        ></path><circle cx="16" cy="12" r="1.5"
                                        ></circle></svg
                                    >
                                </span>
                            </div>
                            <div>
                                <span class="d-block fs-13">Your Balance</span>
                                <h4 class="fw-semibold mb-1">162.87ETH</h4>
                                <span
                                    class="text-muted fs-12 d-inline-flex align-items-center"
                                    ><span class="text-success me-2"
                                        ><i class="ti ti-arrow-narrow-up me-1"
                                        ></i>2.55%</span
                                    >This Year</span
                                >
                            </div>
                        </div>
                        <div id="nft-balance-chart">
                            <Spkapexcharts
                                id="nft-balance-chart"
                                options={BalanceOptions}
                            />
                        </div>
                        <div class="d-grid mt-3">
                            <SpkButton
                                color="primary"
                                customClass="btn d-inline-flex align-items-center justify-content-center"
                                ><i
                                    class="ti ti-circle-plus me-1 align-middle fs-14"
                                ></i>Top Up Balance</SpkButton
                            >
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Top Creators</div>
                        <a href="#!" class="text-muted fs-13"
                            >View All <i class="ti ti-arrow-narrow-right ms-1"
                            ></i></a
                        >
                    </CardHeader>
                    <CardBody>
                        <ul class="list-unstyled nft-top-collectors-list">
                            {#each Followers as follower}
                                <li>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap"
                                    >
                                        <div class="lh-1">
                                            <span
                                                class="avatar avatar-md avatar-rounded"
                                            >
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={follower.image}
                                                    alt={follower.name}
                                                />
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold d-block">
                                                {follower.name}
                                                <i
                                                    class="bi bi-patch-check-fill text-primary align-middle ms-2"
                                                ></i>
                                            </span>
                                            <span class="text-muted fs-13"
                                                >{follower.handle}</span
                                            >
                                        </div>
                                        <div>
                                            <SpkButton
                                                color=""
                                                customClass={`btn rounded-pill ${follower.isFollowing ? "btn-primary" : "btn-light"}`}
                                            >
                                                {follower.isFollowing
                                                    ? "Following"
                                                    : "Follow"}
                                            </SpkButton>
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xxl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">NFT Statistics</div>
            </CardHeader>
            <CardBody class="pb-2">
                <div class="p-3 border border-dashed rounded mb-4">
                    <div
                        class="d-flex align-items-center justify-content-center flex-wrap gap-5"
                    >
                        {#each StatItems as item}
                            <div>
                                <div class="mb-2">
                                    {item.title}
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`badge bg-${item.badgeColor} ms-2`}
                                    >
                                        <i class={`${item.badgeIcon} me-1`}></i>
                                        {item.badge}
                                    </SpkBadge>
                                </div>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="fs-13 text-muted">
                                        {item.label}
                                    </div>
                                    <h5 class="fw-semibold mb-0">
                                        {item.value}
                                    </h5>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                <div id="nft-statistics">
                    <Spkapexcharts id="nft-statistics" options={NftOptions} />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3} xl={6}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Top Drops</div>
                <a href="#!" class="text-muted fs-13"
                    >View All<i class="ti ti-arrow-narrow-right ms-1"></i></a
                >
            </CardHeader>
            <CardBody>
                <ul class="list-unstyled nft-top-drops-list">
                    {#each NftSales as item}
                        <li>
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span
                                        class="avatar avatar-md avatar-rounded"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="d-block fw-semibold"
                                        >{item.title}</span
                                    >
                                    <span class="fs-13 text-muted"
                                        >By {item.author}</span
                                    >
                                </div>
                                <div class="text-end">
                                    <div
                                        class="d-flex align-items-center gap-1"
                                    >
                                        <div class="lh-1">
                                            <span class="avatar avatar-xs">
                                                <Image
                                                    width={20}
                                                    height={20}
                                                    src={item.avatar}
                                                    alt="ETH"
                                                />
                                            </span>
                                        </div>
                                        <span class="fw-semibold"
                                            >{item.price}</span
                                        >
                                    </div>
                                    <span class="fs-13 text-muted d-block"
                                        >Sold At</span
                                    >
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={3} xl={6}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Featured Authors</div>
                <a href="#!" class="text-muted fs-13"
                    >View All <i class="ti ti-arrow-narrow-right ms-1"></i></a
                >
            </CardHeader>
            <CardBody class="p-2">
<swiper-container
                    init="false"
                    bind:this={swiperEl}
                    class="swiper pagination-dynamic text-start featured-collections"
                >
                    {#each nftCards as card}
                        <swiper-slide class="swiper-slide">
                            <Card class="custom-card border-0 shadow-none mb-0">
        <CardBody class="card-body p-0">
          <Row class="g-2">
            <div class="col-12">
              <Image  src={card.images[0]} alt="" class="nft-featuredcollect-image rounded" />
            </div>
            <div class="col-6">
              <Image  src={card.images[1]} alt="" class="nft-featuredcollect-image rounded" />
            </div>
            <div class="col-6">
              <Image  src={card.images[2]} alt="" class="nft-featuredcollect-image rounded" />
            </div>
          </Row>
        </CardBody>
        <CardFooter class="border-top-0 pb-0">
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center flex-fill">
              <div class="me-2 lh-1">
                <span class="avatar avatar-md avatar-rounded">
                  <Image  src={card.user.avatar} alt="" />
                  <!-- svelte-ignore a11y_consider_explicit_label -->
                  <a  href="#!" class="badge rounded-pill bg-primary avatar-badge">
                    <i class="ri-check-line align-mmiddle"></i>
                  </a>
                </span>
              </div>
              <div>
                <p class="mb-0 fw-semibold">
                  <a  href="#!">{card.user.name}</a>
                </p>
                <p class="text-muted fs-12 mb-0">{card.user.username}</p>
              </div>
            </div>
            <div>
                <SpkDropdown 
                option={Dropdownoption}
                ToggleClass="btn btn-icon btn-sm btn-primary-light no-caret"
                Caret={false}
                parent={`<i class="fe fe-more-vertical"></i>`}
                Direction="up"
                />
            </div>
          </div>
        </CardFooter>
      </Card>
                        </swiper-slide>
                    {/each}
                </swiper-container>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">NFT Collection Overview</div>
                <div class="d-flex flex-wrap gap-2">
                    <SpkDropdown
                        option={nftDashDropdown}
                        ToggleClass="btn btn-outline-light btn-wave waves-effect waves-light no-caret"
                        Caret={false}
                        parent={`Price <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                    />
                    <div>
                        <Input
                            class=""
                            type="text"
                            placeholder="Search Here"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <SpkTablescomponent
                    Responsive={true}
                    tableClass="text-nowrap"
                    header={[
                        { title: "S.No" },
                        { title: "NFT Name" },
                        { title: "Creator" },
                        { title: "Release Date" },
                        { title: "Price" },
                        { title: "Status" },
                        { title: "Category" },
                        { title: "Blockchain" },
                        { title: "Ownership" },
                        { title: "Volume (ETH)" },
                    ]}
                >
                    {#each NftTableData as item}
                        <tr>
                            <td>{item.id}</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-md avatar-rounded"
                                        >
                                            <Image
                                                width={40}
                                                height={40}
                                                src={item.image}
                                                alt={item.title}
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <span class="fw-semibold d-block"
                                            >{item.title}</span
                                        >
                                        <span class="fs-13 text-muted"
                                            >{item.handle}</span
                                        >
                                    </div>
                                </div>
                            </td>
                            <td>{item.creator}</td>
                            <td>{item.date}</td>
                            <td>{item.price}</td>
                            <td>
                                <span class={`badge ${item.statusClass}`}
                                    >{item.status}</span
                                >
                            </td>
                            <td>{item.category}</td>
                            <td>{item.chain}</td>
                            <td>{item.edition}</td>
                            <td>{item.volume}</td>
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <div class="card-footer border-top-0">
                <div class="d-flex align-items-center">
                    <div>
                        Showing 6 Entries <i
                            class="bi bi-arrow-right ms-2 fw-semibold"
                        ></i>
                    </div>
                    <div class="ms-auto">
                        <nav
                            aria-label="Page navigation"
                            class="pagination-style-2"
                        >
                            <Pagination class="mb-0 flex-wrap customPaginationPageBottom ">
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >Prev</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >1</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >2</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >...</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        >17</PaginationLink
                                    >
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        on:click={(e) => e.preventDefault()}
                                        class="text-primary"
                                        >Next</PaginationLink
                                    >
                                </PaginationItem>
                            </Pagination>
                        </nav>
                    </div>
                </div>
            </div>
        </Card>
    </Col>
</Row>

<!-- End:: row-3 -->
