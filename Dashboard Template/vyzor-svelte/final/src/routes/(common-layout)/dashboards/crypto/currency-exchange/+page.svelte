<script lang="ts">
    import SpkCurrencycard from "$lib/@spk/dashboards-reusable/crypto-reusable/spk-currencycard.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        Bitciondata,
        CurrencyCards,
        UsdData,
    } from "$lib/data/dashboards/crypto/currencydata";
    import {
        Card,
        CardBody,
        Col,
        Image,
        Input,
        Row,
    } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";
</script>

<!-- Page Title -->
<svelte:head>
    <title>CurrencyExchange | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Currency Exchange"
    subTitle="Crypto"
    activepage="Dashboards"
    page="Currency Exchange"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card currency-exchange-card border-0">
            <CardBody
                class="p-sm-5 d-flex align-items-center justify-content-center"
            >
                <div class="crypto-currency-exchange-background grid-cards">
                    <Image src="../../images/media/media-65.png" alt="" />
                </div>
                <div class="container">
                    <h3 class="text-center">
                        Buy and Sell Coins without additional fees
                    </h3>
                    <span class="d-block fs-16 text-center text-muted mb-4">
                        Buy now and get +50% extra bonus Minimum pre-sale amount
                        100 Crypto Coin. We accept BTC crypto-currency..
                    </span>
                    <div class="p-3 mb-4 rounded currency-exchange-area">
                        <Row class="gy-3">
                            <Col xxl={3} class="col-12">
                                <Input
                                    type="text"
                                    class=""
                                    defaultValue="0.0453"
                                    placeholder="Enter Amount"
                                />
                            </Col>
                            <Col xxl={2} class="col-12">
                                <div>
                                    <Select
                                        items={Bitciondata}
                                        value={Bitciondata[0]}
                                       clearable={false}
                                    showChevron={true}
                                    />
                                </div>
                            </Col>
                            <Col xxl={2} class="col-12">
                                <div
                                    class="fs-2 text-fixed-white text-center op-8 lh-1 mt-1"
                                >
                                    =
                                </div>
                            </Col>
                            <Col xxl={3} class="col-12">
                                <Input
                                    type="text"
                                    class=""
                                    defaultValue="1350.93"
                                    placeholder="Exchange Amount"
                                />
                            </Col>
                            <Col xxl={2} class="col-12">
                                <Select
                                    items={UsdData}
                                    value={UsdData[0]}
                                   clearable={false}
                                    showChevron={true}
                                />
                            </Col>
                        </Row>
                    </div>
                    <div class="text-center">
                        <SpkButton color="danger" customClass="btn btn-wave"
                            >Exchange Now</SpkButton
                        >
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>
<!--End::row-1 -->

<!-- Start:: row-2 -->
<Row class="justify-content-center">
    {#each CurrencyCards as idx}
        <Col xl={3} lg={6} class="">
            <SpkCurrencycard cardClass="overflow-hidden" currency={idx} />
        </Col>
    {/each}
    <Col xl={12} class="">
        <div class="text-center my-4">
            <SpkButton
                color=""
                customClass="btn btn-primary-light"
                buttontype="button"
                disabled
            >
                <span
                    class="spinner-border spinner-border-sm align-middle me-2"
                    role="status"
                    aria-hidden="true"
                ></span>
                Loading...
            </SpkButton>
        </div>
    </Col>
</Row>

<!-- End:: row-2 -->
