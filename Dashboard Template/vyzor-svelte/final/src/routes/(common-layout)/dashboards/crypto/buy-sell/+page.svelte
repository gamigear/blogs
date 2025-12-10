<script lang="ts">
    import SpkListcard from "$lib/@spk/application-reusable/spk-listcard.svelte";
    import Spkapexcharts from "$lib/@spk/charts/Spkapexcharts.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        AccountSummary,
        Buycards,
        SellCrypto,
        SellCrypto1,
        Selloptions,
    } from "$lib/data/dashboards/crypto/buyselldata";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Image,
        Input,
        Nav,
        NavItem,
        NavLink,
        TabContent,
        TabPane,
    } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";
    let activeTab = 1;
</script>

<!-- Page Title -->
<svelte:head>
    <title>BuySell | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Buy & Sell"
    subTitle="Crypto"
    activepage="Dashboards"
    page="Buy & Sell"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<div class="row">
    {#each Buycards as idx}
        <Col xl={4}>
            <SpkListcard
                cardClass={idx.cardClass}
                bodyClass="p-4"
                listCard={true}
                titleClass="d-block text-muted mb-1"
                list={idx}
            />
        </Col>
    {/each}
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Buy & Sell Statistics</div>
                <div
                    class="btn-group flex-wrap"
                    role="group"
                    aria-label="Basic example"
                >
                    <SpkButton
                        color=""
                        buttontype="button"
                        customClass="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                        >1D</SpkButton
                    >
                    <SpkButton
                        color=""
                        buttontype="button"
                        customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                        >1W</SpkButton
                    >
                    <SpkButton
                        color=""
                        buttontype="button"
                        customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                        >1M</SpkButton
                    >
                    <SpkButton
                        color=""
                        buttontype="button"
                        customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                        >3M</SpkButton
                    >
                    <SpkButton
                        color=""
                        buttontype="button"
                        customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                        >6M</SpkButton
                    >
                    <SpkButton
                        color=""
                        buttontype="button"
                        customClass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                        >1Y</SpkButton
                    >
                </div>
            </CardHeader>
            <CardBody class="p-0">
                <div
                    class="d-flex flex-wrap align-items-center border-bottom border-block-end-dashed mb-3 p-4 gap-5 justify-content-sm-center"
                >
                    {#each AccountSummary as item}
                        <div>
                            <span class="d-block fs-12">{item.label}</span>
                            <span
                                class={`d-block fw-medium fs-15 text-${item.color}`}
                            >
                                {item.value}
                            </span>
                        </div>
                    {/each}
                    <div></div>
                </div>
                <div id="buy_sell-statistics" class="px-3">
                    <Spkapexcharts
                        id="buy_sell-statistics"
                        options={Selloptions}
                    />
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={3}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Quick Secure Transfer</div>
            </CardHeader>
            <CardBody>
                <div
                    class="tab-pane border-0 p-0"
                    id="sell-crypto"
                    role="tabpanel"
                    aria-labelledby="sell-crypto"
                >
                    <div class="mb-3">
                        <span class="form-label">Crypto Value :</span>
                        <div class="position-relative">
                            <!-- svelte-ignore a11y_consider_explicit_label -->
                            <a href="#!" class="stretched-link"></a>
                            <div
                                class="p-2 border rounded d-flex align-items-center flex-wrap justify-content-between gap-3 mt-1"
                            >
                                <div class="gap-2 d-flex align-items-center">
                                    <div class="lh-1">
                                        <span class="avatar bg-light p-2">
                                            <Image
                                                src="../../images/crypto-currencies/regular/Bitcoin.svg"
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                    <div class="fw-medium">Bitcoin - BTC</div>
                                </div>
                                <div class="text-end">
                                    <span class="fw-medium d-block"
                                        >0.374638535 BTC</span
                                    >
                                    <span class="text-muted">$5,364.65</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <span class="form-label">Deposit To :</span>
                        <div class="position-relative">
                            <!-- svelte-ignore a11y_consider_explicit_label -->
                            <a href="#!" class="stretched-link"></a>
                            <div
                                class="p-2 border rounded d-flex align-items-center gap-2 mt-1"
                            >
                                <div class="lh-1">
                                    <span class="avatar bg-light p-2">
                                        <i class="ri-bank-line text-info fs-20"
                                        ></i>
                                    </span>
                                </div>
                                <div>
                                    <span class="fw-medium d-block"
                                        >Banking</span
                                    >
                                    <span class="text-muted">Checking ...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <span class="d-block fw-medium">Amount :</span>
                        <div
                            class="d-flex align-items-center justify-content-between text-muted"
                        >
                            <div>Weekly Bank Limit</div>
                            <div>$10,000 remaining</div>
                        </div>
                    </div>
                    <div class="input-group mb-3 flex-nowrap custom-crypto">
                        <Input
                            type="text"
                            class=""
                            aria-label="crypto buy select"
                        />
                        <Select
                            items={SellCrypto1}
                            clearable={false}
                            showChevron={true}
                            value={SellCrypto1[0]}
                        />
                    </div>
                    <div>
                        <div class="fs-14 py-2">
                            <div class="d-inline-flex">
                                <span class="fw-medium text-dark">Price:</span
                                ><span class="text-muted ms-2 fs-14"
                                    >6.003435</span
                                >
                            </div>
                            <span class="text-dark fw-medium float-end"
                                >BTC</span
                            >
                        </div>
                        <div class="fs-14 py-2">
                            <div class="d-inline-flex">
                                <span class="fw-medium text-dark">Amount:</span
                                ><span class="text-muted ms-2 fs-14"
                                    >2,34,4543.00</span
                                >
                            </div>
                            <span class="text-dark fw-medium float-end"
                                >LTC</span
                            >
                        </div>
                    </div>
                    <div class="d-grid mt-4">
                        <SpkButton
                            color="success"
                            buttontype="button"
                            customClass="btn btn-wave btn-lg"
                            >Transfer</SpkButton
                        >
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={3}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between pb-2">
                <div class="card-title">Buy & Sell Crypto</div>
                <Nav
                    class="nav-tabs tab-style-8 scaleX"
                    id="myTab4"
                    role="tablist"
                >
                    <NavItem role="presentation">
                        <NavLink
                            on:click={(e) => {
                                (activeTab = 1), e.preventDefault();
                            }}
                            active={activeTab == 1}
                            class=""
                            id="buy-crypto-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#buy-crypto-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="buy-crypto-tab-pane"
                            aria-selected="true">Buy</NavLink
                        >
                    </NavItem>
                    <NavItem role="presentation">
                        <NavLink
                            on:click={(e) => {
                                (activeTab = 2), e.preventDefault();
                            }}
                            active={activeTab == 2}
                            class=""
                            id="sell-crypto-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#sell-crypto-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="sell-crypto-tab-pane"
                            aria-selected="false">Sell</NavLink
                        >
                    </NavItem>
                </Nav>
            </CardHeader>
            <CardBody>
                <TabContent class="" id="custmbuySell_dash">
                    <TabPane
                        class={`overflow-hidden border-0 p-0 ${activeTab == 1 ? "active" : ""}`}
                        id="buy-crypto-tab-pane"
                        role="tabpanel"
                        aria-labelledby="buy-crypto-tab"
                        tabindex={0}
                    >
                        <div>
                            <div
                                class="input-group mb-3 flex-nowrap custom-crypto"
                            >
                                <Input
                                    type="text"
                                    class=""
                                    aria-label="crypto buy select"
                                    placeholder="Enter Value"
                                />
                                <Select
                                    items={SellCrypto}
                                    class="basic-multi-select buysell custom-buy-sell"
                                    clearable={false}
                                    showChevron={true}
                                    value={SellCrypto[0]}
                                />
                            </div>
                            <div
                                class="input-group mb-3 flex-nowrap custom-crypto"
                            >
                                <Input
                                    type="text"
                                    class=""
                                    aria-label="crypto buy select"
                                    placeholder="Amount Obtained"
                                />
                                <Select
                                    items={SellCrypto1}
                                    class="basic-multi-select buysell custom-buy-sell"
                                    clearable={false}
                                    showChevron={true}
                                    value={SellCrypto1[0]}
                                />
                            </div>
                            <!-- svelte-ignore a11y_label_has_associated_control -->
                            <div>
                                <div class="fs-14 py-2">
                                    <span class="fw-medium text-dark"
                                        >Price:</span
                                    ><span
                                        class="text-muted ms-2 fs-14 d-inline-block"
                                        >6.003435</span
                                    ><span class="text-dark fw-medium float-end"
                                        >BTC</span
                                    >
                                </div>
                                <div class="fs-14 py-2">
                                    <span class="fw-medium text-dark"
                                        >Amount:</span
                                    ><span
                                        class="text-muted ms-2 fs-14 d-inline-block"
                                        >2,34,4543.00</span
                                    ><span class="text-dark fw-medium float-end"
                                        >LTC</span
                                    >
                                </div>
                                <div class="fw-medium fs-14 py-2">
                                    Total: <span class="fs-14 d-inline-block"
                                        >22.00 BTC</span
                                    >
                                </div>
                                <div class="fs-12 text-success">
                                    Additional Charges: 0.32%(0.0001231 BTC)
                                </div>
                                <label class="fw-medium fs-12 mt-4 mb-3"
                                    >SELECT PAYMENT METHOD :</label
                                >
                                <div class="row g-2">
                                    <Col xxl={6}>
                                        <div class="p-2 border rounded">
                                            <div class="form-check mb-0">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                    defaultChecked
                                                />
                                                <label
                                                    class="form-check-label fs-12"
                                                    for="flexRadioDefault1"
                                                >
                                                    Credit / Debit Cards
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6}>
                                        <div class="p-2 border rounded">
                                            <div class="form-check mb-0">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault2"
                                                />
                                                <label
                                                    class="form-check-label fs-12"
                                                    for="flexRadioDefault2"
                                                >
                                                    Paypal
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div class="p-2 border rounded">
                                            <div class="form-check mb-0">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault3"
                                                />
                                                <label
                                                    class="form-check-label fs-12"
                                                    for="flexRadioDefault3"
                                                >
                                                    Wallet
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                            <div class="d-grid mt-3 pt-1">
                                <SpkButton
                                    color="primary"
                                    buttontype="button"
                                    customClass="btn btn-wave btn-lg"
                                    >BUY CRYPTO</SpkButton
                                >
                            </div>
                        </div>
                    </TabPane>
                    <TabPane
                        class={`overflow-hidden border-0 p-0 ${activeTab == 2 ? "active" : ""}`}
                        id="sell-crypto-tab-pane"
                        role="tabpanel"
                        aria-labelledby="sell-crypto-tab"
                        tabindex={0}
                    >
                        <div class="input-group mb-3 flex-nowrap custom-crypto">
                            <Input
                                type="text"
                                class=""
                                aria-label="crypto buy select"
                                placeholder="Select Value"
                            />
                            <Select
                                items={SellCrypto}
                                class="basic-multi-select buysell custom-buy-sell"
                                clearable={false}
                                showChevron={true}
                                value={SellCrypto[0]}
                            />
                        </div>
                        <div class="input-group mb-3 flex-nowrap custom-crypto">
                            <Input
                                type="text"
                                class=""
                                aria-label="crypto buy select"
                                placeholder=""
                            />
                            <Select
                                items={SellCrypto1}
                                class="basic-multi-select buysell custom-buy-sell"
                                clearable={false}
                                showChevron={true}
                                value={SellCrypto1[0]}
                            />
                        </div>
                        <div class="mb-3">
                            <span class="form-label">Crypto Value :</span>
                            <div class="position-relative">
                                <div
                                    class="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1 flex-wrap"
                                >
                                    <div
                                        class="gap-2 d-flex align-items-center"
                                    >
                                        <div class="lh-1">
                                            <span class="avatar bg-light p-2">
                                                <Image
                                                    src="../../images/crypto-currencies/regular/Bitcoin.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </div>
                                        <div class="fw-medium">
                                            Bitcoin - BTC
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <span class="fw-medium d-block"
                                            >0.374638535 BTC</span
                                        >
                                        <span class="text-muted">$5,364.65</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <span class="form-label">Deposit To :</span>
                            <div class="position-relative">
                                <div
                                    class="p-2 border rounded d-flex align-items-center gap-2 mt-1"
                                >
                                    <div class="lh-1">
                                        <span class="avatar bg-light p-2">
                                            <i
                                                class="ri-bank-line text-info fs-20"
                                            ></i>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="fw-medium d-block"
                                            >Banking</span
                                        >
                                        <span class="text-muted"
                                            >Checking ...</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="fs-14 py-2">
                                <div class="d-inline-flex">
                                    <span class="fw-medium text-dark"
                                        >Price:</span
                                    ><span class="text-muted ms-2 fs-14"
                                        >6.003435</span
                                    >
                                </div>
                                <span class="text-dark fw-medium float-end"
                                    >BTC</span
                                >
                            </div>
                            <div class="fs-14 py-2">
                                <div class="d-inline-flex">
                                    <span class="fw-medium text-dark"
                                        >Amount:</span
                                    ><span class="text-muted ms-2 fs-14"
                                        >2,34,4543.00</span
                                    >
                                </div>
                                <span class="text-dark fw-medium float-end"
                                    >LTC</span
                                >
                            </div>
                        </div>
                        <div class="d-grid mt-3">
                            <SpkButton
                                color="danger"
                                buttontype="button"
                                customClass="btn btn-wave btn-lg"
                                >SELL CRYPTO</SpkButton
                            >
                        </div>
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    </Col>
</div>

<!-- End:: row-1 -->
