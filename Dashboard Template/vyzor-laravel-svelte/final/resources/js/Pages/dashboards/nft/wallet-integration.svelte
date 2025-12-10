<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Image,
        ListGroup,
        ListGroupItem,
        Row,
    } from "@sveltestrap/sveltestrap";

    const WalletList = [
        { name: "Etherium", image: "../../images/nft-images/34.png" },
        { name: "Binance", image: "../../images/nft-images/33.png" },
        { name: "Solana", image: "../../images/nft-images/32.png" },
        { name: "Tezos", image: "../../images/nft-images/28.png" },
        {
            name: "Avalanche",
            image: "../../images/nft-images/30.png",
        },
        { name: "Cardano", image: "../../images/nft-images/29.png" },
    ];

    const WalletCards = [
        {
            name: "MetaMask",
            image: "../../images/nft-images/22.png",
            active: true,
            avatarClass: "p-2",
        },
        {
            name: "Enjin Wallet",
            image: "../../images/nft-images/23.png",
            avatarClass: "p-2",
        },
        {
            name: "Trust Wallet",
            image: "../../images/nft-images/20.png",
            avatarClass: "",
        },
        {
            name: "Coinbase Wallet",
            image: "../../images/nft-images/24.png",
            avatarClass: "p-2",
        },
        {
            name: "Lido",
            image: "../../images/nft-images/19.png",
            avatarClass: "p-2",
        },
        {
            name: "Huobi Wallet",
            image: "../../images/nft-images/27.png",
            avatarClass: "",
        },
    ];
</script>

<!-- Page Title -->
<svelte:head>
    <title>WalletIntegration | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader
    homepage="Wallet Integration"
    subTitle="NFT"
    activepage="Dashboards"
    page="Wallet Integration"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<Row>
    <Col xl={3}>
        <Card class="custom-card overflow-hidden">
            <CardHeader>
                <div class="card-title">Choose Network</div>
            </CardHeader>
            <CardBody class="p-0">
                <ListGroup class="list-group-flush nft-list">
                    {#each WalletList as crypto}
                        <ListGroupItem class="">
                            <a href="#!" class="stretched-link"></a>
                            <div class="d-flex align-items-center gap-2">
                                <div>
                                    <span
                                        class="avatar avatar-rounded avatar-sm bg-light p-1"
                                    >
                                        <Image
                                            src={crypto.image}
                                            alt={crypto.name}
                                        />
                                    </span>
                                </div>
                                <div class="fs-14 fw-medium">{crypto.name}</div>
                            </div>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
            </CardBody>
        </Card>
    </Col>

    <Col xl={9}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Choose Wallet</div>
                <div>
                    <SpkButton color="secondary" customClass="btn btn-wave"
                        >Add New Wallet</SpkButton
                    >
                </div>
            </CardHeader>
            <CardBody class="p-4">
                <Row class="justify-content-center">
                    {#each WalletCards as wallet}
                        <Col xxl={3}>
                            <Card
                                class={`custom-card nft-wallet ${wallet.active ? "active" : ""}`}
                            >
                                <CardBody class="p-3">
                                    <a href="#!" class="stretched-link"></a>
                                    <div
                                        class="d-flex align-items-center justify-content-center gap-3"
                                    >
                                        <div class="lh-1">
                                            <span
                                                class={`avatar avatar-rounded bg-light ${wallet.avatarClass}`}
                                            >
                                                <Image
                                                    width={42}
                                                    height={42}
                                                    src={wallet.image}
                                                    alt={wallet.name}
                                                />
                                            </span>
                                        </div>
                                        <div>
                                            <h6 class="fw-medium mb-0">
                                                {wallet.name}
                                            </h6>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    {/each}
                </Row>
            </CardBody>
            <CardFooter>
                <div>
                    <SpkButton
                        color="success"
                        customClass="btn float-end btn-wave">Connect</SpkButton
                    >
                </div>
            </CardFooter>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
