<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import SpkCryptocard from "@/shared/@spk/dashboards-reusable/crypto-reusable/spk-cryptocard.svelte";
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Assetoptions,
        Coindata,
        CryptoCards,
        Cryptooptions,
        CryptoStats,
        CryptoTableRows,
        Currencydata,
        TransactionActivities,
        Transactions,
    } from "@/shared/data/dashboards/crypto/cryptodata";
    import {
        DropdownToday,
        SortByDropdown,
    } from "@/shared/data/uielements/dropdowndata";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Image,
        Input,
        ListGroup,
        ListGroupItem,
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
    import Select from "svelte-select";
    let activeTab = 1;
</script>

<!-- Page Title -->
<svelte:head>
    <title>Dashboard | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Dashboard"
    subTitle="Crypto"
    activepage="Dashboards"
    page="Dashboard"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    <Col xxl={9}>
        <Row>
            {#each CryptoCards as idx}
                <Col xxl={3} xl={6}>
                    <SpkCryptocard crypto={idx} />
                </Col>
            {/each}
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Crypto Performance</div>
                    </CardHeader>
                    <CardBody>
                        <div
                            class="p-3 d-flex align-items-center gap-4 border border-dashed rounded flex-wrap mb-2"
                        >
                            <div
                                class="d-flex align-items-center gap-2 flex-wrap"
                            >
                                <span class="avatar avatar-sm">
                                    <Image
                                        src="../../images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg"
                                        alt=""
                                    />
                                </span>
                                <div>
                                    <span class="fw-medium">Bitcoin</span> -
                                    <span class="text-muted">BTC</span>
                                </div>
                            </div>
                            <h6 class="fw-medium mb-0">
                                $42,761.32 USD<span class="text-success mx-2"
                                    >0.14%</span
                                >(24H)
                            </h6>
                            <div
                                class="d-flex gap-4 align-items-center flex-wrap"
                            >
                                <div>
                                    Open - <span class="text-success fw-medium"
                                        >6612.98</span
                                    >
                                </div>
                                <div>
                                    High - <span class="text-success fw-medium"
                                        >6625.97</span
                                    >
                                </div>
                                <div>
                                    Low - <span class="text-danger fw-medium"
                                        >6612.34</span
                                    >
                                </div>
                                <div>
                                    Close - <span class="text-success fw-medium"
                                        >6623.45</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div id="coin-statistics">
                            <Spkapexcharts
                                id="coin-statistics"
                                options={Cryptooptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={4}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Transactions History</div>
                    </CardHeader>
                    <CardBody>
                        <ul
                            class="list-unstyled crypto-transaction-history-list"
                        >
                            {#each Transactions as tx}
                                <li>
                                    <div
                                        class="d-flex align-items-center gap-2"
                                    >
                                        <div class="lh-1">
                                            <span
                                                class={`avatar avatar-md bg-light avatar-rounded p-2 border ${tx.title}`}
                                            >
                                                <Image
                                                    src={tx.icon}
                                                    alt={tx.title}
                                                    class={tx.imgClass}
                                                />
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold d-block"
                                                >{tx.title}</span
                                            >
                                            <span class="fs-12 text-muted"
                                                >{tx.date}</span
                                            >
                                        </div>
                                        <div class="text-end">
                                            <span class="fw-semibold d-block"
                                                >{tx.amount}</span
                                            >
                                            <SpkBadge
                                                Color=""
                                                CustomClass={`${tx.status === "Completed" ? "bg-success" : tx.status === "Pending" ? "bg-warning" : "bg-danger"}`}
                                            >
                                                {tx.status}
                                            </SpkBadge>
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={4}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader class="justify-content-between">
                        <div class="card-title">Recent Activity</div>
                        <a href="#!" class="fs-12 text-muted"
                            >View All <i class="ti ti-arrow-narrow-right ms-1"
                            ></i></a
                        >
                    </CardHeader>
                    <CardBody>
                        <ul class="list-unstyled recent-activity-crypto-list">
                            {#each TransactionActivities as tx}
                                <li>
                                    <div
                                        class="d-flex align-items-center gap-2"
                                    >
                                        <div>
                                            <span
                                                class="avatar avatar-sm avatar-rounded"
                                            >
                                                <Image
                                                    width={28}
                                                    height={28}
                                                    src={tx.avatar}
                                                    alt={tx.name}
                                                />
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold"
                                                >{tx.name}</span
                                            >
                                            <p class="mb-0">
                                                {tx.currency} -
                                                <span class="text-muted"
                                                    >({tx.amount})</span
                                                >
                                            </p>
                                        </div>
                                        <div class="text-end">
                                            <span class="fs-12 text-muted mb-1"
                                                >{tx.date}</span
                                            >
                                            <p class="mb-0">
                                                <span
                                                    class={`fs-11 fw-semibold ${tx.status === "Sent" ? "text-danger" : tx.status === "Received" ? "text-success" : "text-info"}`}
                                                >
                                                    {tx.status}
                                                </span>{" "}
                                                - {tx.time}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={4}>
                <Card class="custom-card overflow-hidden">
                    <CardHeader>
                        <div class="card-title">Coin Price Statistics</div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <ListGroup class="list-group list-group-flush">
                            {#each CryptoStats as item}
                                <ListGroupItem class="list-group-item">
                                    <div
                                        class="d-flex w-100 justify-content-between align-items-center"
                                    >
                                        <p
                                            class="tx-14 mb-0 font-weight-semibold text-dark"
                                        >
                                            {item.label}
                                            {#if item.badge}
                                                <SpkBadge
                                                    Color=""
                                                    CustomClass={`ms-3 ${item.badge.className}`}
                                                    >{item.badge.text}</SpkBadge
                                                >
                                            {/if}
                                        </p>
                                        <p
                                            class={`${item.valueColor} mb-0 tx-15`}
                                        >
                                            <span class="numberfont"
                                                >{item.value}</span
                                            >
                                        </p>
                                    </div>
                                </ListGroupItem>
                            {/each}
                        </ListGroup>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
    <Col xxl={3}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardBody>
                        <div class="d-flex justify-content-between">
                            <div>
                                <p class="mb-1 text-muted">Your Balance</p>
                                <h5 class="fw-semibold mb-1">$23,895.00</h5>
                                <p class=" text-muted fs-12 mb-4">
                                    Total Value : 13.50234BTC
                                </p>
                            </div>
                            <SpkDropdown
                                option={DropdownToday}
                                ToggleClass="btn-outline-light btn btn-sm text-muted"
                                parent={`View All`}
                                Caret={true}
                            />
                        </div>
                        <Row>
                            <Col xl={6} sm={6} class="col-6">
                                <div
                                    class="d-flex align-items-center flex-wrap gap-3"
                                >
                                    <div class="lh-1">
                                        <div
                                            class="avatar bg-primary-transparent"
                                        >
                                            <i
                                                class="ti ti-arrow-big-up-lines fs-20"
                                            ></i>
                                        </div>
                                    </div>
                                    <div class="flex-fill">
                                        <span class="text-md mb-1 fw-semibold"
                                            >$22,490.00</span
                                        >
                                        <p class="mb-0 fs-12 text-muted">
                                            Invested
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} sm={6} class="col-6">
                                <div
                                    class="d-flex align-items-center flex-wrap gap-3"
                                >
                                    <div class="lh-1">
                                        <div
                                            class="avatar bg-primary-transparent"
                                        >
                                            <i
                                                class="ti ti-corner-up-right-double fs-20"
                                            ></i>
                                        </div>
                                    </div>
                                    <div class="flex-fill">
                                        <span class="text-md mb-1 fw-semibold"
                                            >$22,490.00</span
                                        >
                                        <p class="mb-0 fs-12 text-muted">
                                            Expenditure
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Buy & Sell Crypto</div>
                    </CardHeader>
                    <CardBody>
                        <Nav
                            class="nav-tabs tab-style-1 d-sm-flex d-block nav-justified"
                            role="tablist"
                        >
                            <NavItem class=" me-sm-2 me-0" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 1), e.preventDefault();
                                    }}
                                    active={activeTab == 1}
                                    class=""
                                    href="#buy-crypto"
                                    aria-selected="true"
                                    role="tab">Buy</NavLink
                                >
                            </NavItem>
                            <NavItem class="" role="presentation">
                                <NavLink
                                    on:click={(e) => {
                                        (activeTab = 2), e.preventDefault();
                                    }}
                                    active={activeTab == 2}
                                    class=""
                                    href="#sell-crypto"
                                    aria-selected="false"
                                    role="tab"
                                    tabindex={-1}>Sell</NavLink
                                >
                            </NavItem>
                        </Nav>
                        <TabContent id="crypto_dashboard">
                            <TabPane
                                class={`border-0 p-0 ${activeTab == 1 ? "active" : ""}`}
                                id="buy-crypto"
                                role="tabpanel"
                                aria-labelledby="buy-crypto"
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
                                            items={Coindata}
                                            value={Coindata[0]}
                                            class="basic-multi-select custom-buy-sell"
                                            clearable={false}
                                            showChevron={true}
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
                                            items={Currencydata}
                                            value={Currencydata[0]}
                                            class="basic-multi-select custom-buy-sell"
                                            clearable={false}
                                            showChevron={true}
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
                                            ><span
                                                class="text-dark fw-medium float-end"
                                                >BTC</span
                                            >
                                        </div>
                                        <div class="fs-14 py-2">
                                            <span class="fw-medium text-dark"
                                                >Amount:</span
                                            ><span
                                                class="text-muted ms-2 fs-14 d-inline-block"
                                                >2,34,4543.00</span
                                            ><span
                                                class="text-dark fw-medium float-end"
                                                >LTC</span
                                            >
                                        </div>
                                        <div class="fw-medium fs-14 py-2">
                                            Total: <span
                                                class="fs-14 d-inline-block"
                                                >22.00 BTC</span
                                            >
                                        </div>
                                        <div class="fs-12 text-success">
                                            Additional Charges: 0.32%(0.0001231
                                            BTC)
                                        </div>
                                        <label class="fw-medium fs-12 mt-4 mb-3"
                                            >SELECT PAYMENT METHOD :</label
                                        >
                                        <div class="row g-2">
                                            <Col xl={6}>
                                                <div class="p-2 border rounded">
                                                    <div
                                                        class="form-check mb-0"
                                                    >
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
                                            <Col xl={6}>
                                                <div class="p-2 border rounded">
                                                    <div
                                                        class="form-check mb-0"
                                                    >
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
                                                    <div
                                                        class="form-check mb-0"
                                                    >
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
                                class={`border-0 p-0 ${activeTab == 2 ? "active" : ""}`}
                                id="sell-crypto"
                                role="tabpanel"
                                aria-labelledby="sell-crypto"
                            >
                                <div
                                    class="input-group mb-3 flex-nowrap custom-crypto"
                                >
                                    <Input
                                        type="text"
                                        class=""
                                        aria-label="crypto buy select"
                                        placeholder="Select Currency"
                                    />
                                    <Select
                                        items={Coindata}
                                        value={Coindata[0]}
                                        clearable={false}
                                        showChevron={true}
                                    />
                                </div>
                                <div
                                    class="input-group mb-3 flex-nowrap custom-crypto"
                                >
                                    <Input
                                        type="text"
                                        class=""
                                        aria-label="crypto buy select"
                                    />
                                    <Select
                                        items={Currencydata}
                                        value={Currencydata[0]}
                                        clearable={false}
                                        showChevron={true}
                                    />
                                </div>
                                <div class="mb-3">
                                    <span class="form-label"
                                        >Crypto Value :</span
                                    >
                                    <div class="position-relative">
                                        <div
                                            class="p-2 border rounded d-flex align-items-center flex-wrap justify-content-between gap-3 mt-1"
                                        >
                                            <div
                                                class="gap-2 d-flex align-items-center"
                                            >
                                                <div class="lh-1">
                                                    <span
                                                        class="avatar bg-light p-2"
                                                    >
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
                                                <span class="text-muted"
                                                    >$5,364.65</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <span class="form-label">Deposit To :</span>
                                    <div class="position-relative">
                                        <div
                                            class="p-2 border rounded d-flex align-items-center flex-wrap gap-2 mt-1"
                                        >
                                            <div class="lh-1">
                                                <span
                                                    class="avatar bg-light p-2"
                                                >
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
                                        <span
                                            class="text-dark fw-medium float-end"
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
                                        <span
                                            class="text-dark fw-medium float-end"
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
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">Assets Overview</div>
                    </CardHeader>
                    <CardBody class="p-0">
                        <div id="balanceAnalysis" class="p-3">
                            <Spkapexcharts
                                id="balanceAnalysis"
                                options={Assetoptions}
                            />
                        </div>
                        <div class="border-top border-block-start-dashed p-3">
                            <div class="d-flex align-items-center gap-3 mb-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm bg-primary">
                                        <i class="ri-wallet-3-line fs-16"></i>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div class="fw-medium text-muted">
                                        Funding
                                    </div>
                                    <h6 class="mb-0">$54,784 USD</h6>
                                </div>
                                <div class="text-end">
                                    <span class="d-block text-muted fs-12"
                                        >This Year</span
                                    >
                                    <span class="fw-medium text-success">
                                        <i
                                            class="ri-arrow-down-s-fill me-1 align-middle"
                                        ></i>1.05%
                                    </span>
                                </div>
                            </div>
                            <div
                                class="d-flex align-items-center justify-content-center gap-3"
                            >
                                <div class="lh-1">
                                    <span class="avatar avatar-sm bg-secondary">
                                        <i class="ri-arrow-up-down-line fs-16"
                                        ></i>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div class="fw-medium text-muted">
                                        Trading
                                    </div>
                                    <h6 class="mb-0">$23,489 USD</h6>
                                </div>
                                <div class="text-end">
                                    <span class="d-block text-muted fs-12"
                                        >This Year</span
                                    >
                                    <span class="fw-medium text-danger">
                                        <i
                                            class="ri-arrow-down-s-fill me-1 align-middle"
                                        ></i>1.05%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>

<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Portfolio Overview</div>
                <div class="d-flex flex-wrap gap-2">
                    <SpkDropdown
                        CustomClass="ecommerceDashboard"
                        option={SortByDropdown}
                        ToggleClass="btn btn-outline-light btn-wave waves-effect waves-light no-caret"
                        parent={`Filters<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>`}
                        Caret={false}
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
                        { title: "Asset Type" },
                        { title: "Current Balance (Crypto)" },
                        { title: "Current Price (USD)" },
                        { title: "Total Value (USD)" },
                        { title: "24h Change" },
                        { title: "Total Gain/Loss (USD)" },
                        { title: "24h Volume (USD)" },
                        {
                            title: "Market Rank",
                            headerClassname: "text-center",
                        },
                    ]}
                >
                    {#each CryptoTableRows as crypto, index}
                        <tr>
                            <td class={crypto.borderBottom}>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span
                                            class="avatar avatar-sm avatar-rounded"
                                        >
                                            <Image
                                                width={28}
                                                height={28}
                                                src={crypto.image}
                                                alt={crypto.name}
                                                class={crypto.imgClass}
                                            />
                                        </span>
                                    </div>
                                    <div>{crypto.name}</div>
                                </div>
                            </td>
                            <td class={crypto.borderBottom}
                                >{crypto.quantity}</td
                            >
                            <td class={crypto.borderBottom}>{crypto.price}</td>
                            <td class={crypto.borderBottom}
                                >{crypto.totalValue}</td
                            >
                            <td class={crypto.borderBottom}>
                                <SpkBadge
                                    Color=""
                                    CustomClass={`${crypto.changeColor}`}
                                    >{crypto.change}</SpkBadge
                                >
                            </td>
                            <td class={crypto.borderBottom}
                                >{crypto.profitLoss}</td
                            >
                            <td class={crypto.borderBottom}
                                >{crypto.marketCap}</td
                            >
                            <td class={`${crypto.borderBottom} text-center`}
                                >{crypto.rank}</td
                            >
                        </tr>
                    {/each}
                </SpkTablescomponent>
            </CardBody>
            <div class="card-footer">
                <div class="d-flex align-items-center flex-wrap">
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
                            <Pagination
                                class="mb-0 flex-wrap customPaginationPageBottom"
                            >
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
                                        ><i class="bi bi-three-dots"></i></PaginationLink
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

<!-- End:: row-2 -->
