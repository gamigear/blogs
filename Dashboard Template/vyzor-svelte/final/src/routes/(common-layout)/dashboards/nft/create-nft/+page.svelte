<script lang="ts">
    import FilePond, { registerPlugin } from "svelte-filepond";
    import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Input,
        Label,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { MartketPlaceItems } from "$lib/data/dashboards/nft/marketplacedata";
    import SpkNftcard from "$lib/@spk/dashboards-reusable/nft/spk-nftcard.svelte";
    import Select from "svelte-select";

    // Register the plugins
    registerPlugin(
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview,
    );

    const SelectType = [
        { value: "Choose Royalities", label: "Choose Royalities" },
        { value: "Flat Royalty", label: "Flat Royalty" },
        { value: "Graduated Royalty", label: "Graduated Royalty" },
        { value: "Tiered Royalty", label: "Tiered Royalty" },
        { value: "Time-Limited Royalty", label: "Time-Limited Royalty" },
        { value: "Customized Royalty", label: "Customized Royalty" },
    ];
</script>

<!-- Page Title -->
<svelte:head>
    <title>CreateNft | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Create NFT"
    subTitle="NFT"
    activepage="Dashboards"
    page="Create NFT"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xxl={9} xl={8} class="">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Create NFT</div>
            </CardHeader>
            <CardBody>
                <Row class="gy-3 justify-content-between">
                    <Col xxl={3} xl={12} class="">
                        <div class="create-nft-item nft-filepond">
                            <Label class="form-label">Upload NFT</Label>
                            <FilePond
                                labelIdle={`Drag & Drop your files or <span class="filepond--label-action">Browse</span>`}
                                stylePanelLayout="compact circle"
                                styleLoadIndicatorPosition="center bottom"
                                styleButtonRemoveItemPosition="center bottom"
                            />
                        </div>
                    </Col>
                    <Col xxl={7} xl={12} class="">
                        <Row class="gy-3">
                            <Col xl={12}>
                                <Label for="input-placeholder" class=""
                                    >NFT Title</Label
                                >
                                <Input
                                    type="text"
                                    class=""
                                    id="input-placeholder"
                                    placeholder="eg:Neo-Nebulae"
                                />
                            </Col>
                            <Col xl={12}>
                                <Label for="nft-description" class=""
                                    >NFT Description</Label
                                >
                                <Input
                                    type="textarea"
                                    class=""
                                    id="nft-description"
                                    rows={3}
                                    placeholder="Enter Description"
                                />
                            </Col>
                            <Col xl={12}>
                                <Label for="nft-link" class=""
                                    >External Link</Label
                                >
                                <Input
                                    type="text"
                                    class=""
                                    id="nft-link"
                                    placeholder="External Link Here"
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={12}>
                        <div class="row gy-3">
                            <Col xl={6}>
                                <Label for="nft-creator-name" class=""
                                    >Creator Name</Label
                                >
                                <Input
                                    type="text"
                                    class=""
                                    id="nft-creator-name"
                                    placeholder="Enter Name"
                                />
                            </Col>
                            <Col xl={6}>
                                <Label for="nft-price" class="">NFT Price</Label
                                >
                                <Input
                                    type="text"
                                    class=""
                                    id="nft-price"
                                    placeholder="Enter Price"
                                />
                            </Col>
                            <Col xl={4}>
                                <Label for="nft-size" class="">NFT Size</Label>
                                <Input
                                    type="text"
                                    class=""
                                    id="nft-size"
                                    placeholder="Enter Size"
                                />
                            </Col>
                            <Col xl={4}>
                                <Label for="nft-royality" class=""
                                    >Royality</Label
                                >
                                <Select
                                    items={SelectType}
                                    clearable={false}
                                    showChevron={true}
                                />
                            </Col>
                            <Col xl={4}>
                                <Label for="nft-property" class=""
                                    >Property</Label
                                >
                                <Input
                                    type="text"
                                    class=""
                                    id="nft-property"
                                    placeholder="Enter Property"
                                />
                            </Col>
                            <Col xl={12}>
                                <Label class="form-label d-block">Method</Label>
                                <div
                                    class="btn-group"
                                    role="group"
                                    aria-label="Basic radio toggle button group"
                                >
                                    <input
                                        type="radio"
                                        class="btn-check"
                                        name="strap-material"
                                        id="strap1"
                                        defaultChecked
                                    />
                                    <label
                                        class="btn btn-sm btn-outline-primary text-default z-0"
                                        for="strap1"
                                        ><i
                                            class="ti ti-tag me-1 align-middle fs-15 d-inline-block"
                                        ></i>Fixed Price</label
                                    >
                                    <input
                                        type="radio"
                                        class="btn-check"
                                        name="strap-material"
                                        id="strap2"
                                    />
                                    <label
                                        class="btn btn-sm btn-outline-primary text-default z-0"
                                        for="strap2"
                                        ><i
                                            class="ti ti-users fs-15 me-1 align-middle d-inline-block"
                                        ></i>Open For Bids</label
                                    >
                                    <input
                                        type="radio"
                                        class="btn-check"
                                        name="strap-material"
                                        id="strap3"
                                    />
                                    <label
                                        class="btn btn-sm btn-outline-primary text-default z-0"
                                        for="strap3"
                                        ><i
                                            class="ti ti-hourglass-low fs-15 me-1 align-middle d-inline-block"
                                        ></i>Timed Auction</label
                                    >
                                </div>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </CardBody>
            <div class="card-footer text-end">
                <a
                    href="#!"
                    class="btn btn-primary btn-wave waves-effect waves-light"
                    >Create NFT</a
                >
            </div>
        </Card>
    </Col>
    <Col xxl={3} xl={4} class="">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">NFT Preview Here</div>
            </CardHeader>
            <CardBody>
                {#each MartketPlaceItems.filter( (items) => [1].includes(items.id), ) as card}
                    <SpkNftcard nft={card} cardClass="mb-0" />
                {/each}
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
