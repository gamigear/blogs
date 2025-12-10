
<script lang="ts">
    
    import SpkNftcard from "$lib/@spk/dashboards-reusable/nft/spk-nftcard.svelte";
    import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { AcuationTags, LiveList, NotificationsLive } from "$lib/data/dashboards/nft/liveacuationdata";
    import { MartketPlaceItems } from "$lib/data/dashboards/nft/marketplacedata";
    import { DropdownToday } from "$lib/data/uielements/dropdowndata";
    import { Card, CardBody, CardHeader, Col, Image, ListGroup, ListGroupItem, Pagination, PaginationItem, PaginationLink, Row } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>LiveAuction | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Live Auction"
    subTitle="NFT"
    activepage="Dashboards"
    page="Live Auction"
/>
<!-- Page Header Close -->
    
 <!-- Start::row-1 --> 

            <Row>
                <Col xxl={9} xl={12} lg={12} class="">
                    <div class="d-flex align-items-center gap-4 mb-4 flex-wrap">
                        {#each AcuationTags as tag}
                        <div  class={`nft-tag ${tag.className} ${tag.active ? "active" : ""}`}>
                            <!-- svelte-ignore a11y_consider_explicit_label -->
                            <a  href="#!" class="stretched-link"></a>
                            <span class="nft-tag-text">{tag.text}</span>
                        </div>
                        {/each}
                    </div>
                    <Row>
                        <h6 class="fw-medium mb-3">Live Auction:</h6>
                        {#each MartketPlaceItems.slice(0, 6) as card}
                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} class="col-12">
                            <SpkNftcard nft={card} />
                        </Col>
                        {/each}
                        <nav aria-label="Page navigation ">
                            <Pagination class="justify-content-end d-flex mb-4 customPaginationPageBottom">
                                <PaginationItem disabled >
                                    <PaginationLink on:click={e=>e.preventDefault()} >Previous</PaginationLink>
                                </PaginationItem>
                                 <PaginationItem active >
                                    <PaginationLink on:click={e=>e.preventDefault()}>1</PaginationLink>
                                </PaginationItem>
                                 <PaginationItem  >
                                    <PaginationLink on:click={e=>e.preventDefault()}>2</PaginationLink>
                                </PaginationItem>
                                 <PaginationItem  >
                                    <PaginationLink on:click={e=>e.preventDefault()}>Next</PaginationLink>
                                </PaginationItem>
                            </Pagination>
                        </nav>
                    </Row>
                </Col>
                <Col xxl={3} xl={12} lg={12} class="">
                    <Row>
                        <Col xl={12}>
                            <Card class="custom-card">
                                <CardHeader class="justify-content-between">
                                    <div class="card-title">
                                        Top Drops
                                    </div>
                                    <a  href="#!" class="text-muted fs-13">View All<i class="ti ti-arrow-narrow-right ms-1"></i></a>
                                </CardHeader>
                                <CardBody>
                                    <ul class="list-unstyled nft-top-drops-list">
                                        {#each LiveList as item}
                                        <li >
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="lh-1">
                                                    <span class="avatar avatar-md avatar-rounded">
                                                        <Image  src={item.image} alt={item.title} />
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <span class="d-block fw-semibold">{item.title}</span>
                                                    <span class="fs-13 text-muted">By {item.author}</span>
                                                </div>
                                                <div class="text-end">
                                                    <div class="d-flex align-items-center gap-1">
                                                        <div class="lh-1">
                                                            <span class="avatar avatar-xs">
                                                                <Image src="../../images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg"
                                                                    alt="ETH" />
                                                            </span>
                                                        </div>
                                                        <span class="fw-semibold">{item.price}</span>
                                                    </div>
                                                    <span class="fs-13 text-muted d-block">Sold At</span>
                                                </div>
                                            </div>
                                        </li>
                                        {/each}
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card class="custom-card overflow-hidden">
                                <CardHeader class="justify-content-between">
                                    <div class="card-title">
                                        Recent Activity
                                    </div>
                                    <SpkDropdown
                                    option={DropdownToday}
                                    ToggleClass="p-2 fs-12 text-muted no-caret border-0"
                                    Caret={false}
                                    parent={`Today <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                                    />
                                </CardHeader>
                                <CardBody class="p-0">
                                    <ListGroup class="list-group-flush nft-live-auction">
                                        {#each NotificationsLive  as item}
                                        <ListGroupItem  class="">
                                            <div class="d-flex gap-3 align-items-start">
                                                <div class="lh-1">
                                                    <span class="avatar avatar-lg">
                                                        <Image width={48} height={48} src={item.image} alt={item.title} />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div class="mb-1">
                                                        <span class="fw-medium">{item.title}</span>
                                                        <span class="fs-12 text-muted ms-2 d-inline-block">{item.time}</span>
                                                    </div>
                                                    <div class="fs-13">
                                                        {@html item.content}
                                                    </div>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        {/each}
                                    </ListGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <!--End::row-1 --> 