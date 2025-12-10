<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkWalletcard from "@/shared/@spk/dashboards-reusable/crypto-reusable/spk-walletcard.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        WalletAddresses,
        Wallets,
    } from "@/shared/data/dashboards/crypto/walletdata";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Image,
        Input,
        Row,
    } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Wallet | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Wallet"
    subTitle="Crypto"
    activepage="Dashboards"
    page="Wallet"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->

<Row>
    {#each Wallets as idx}
        <Col xxl={3} xl={6}>
            <SpkWalletcard wallet={idx} />
        </Col>
    {/each}
</Row>

<!-- End:: row-1 -->

<!-- Start::row-2 -->

<Row>
    {#each WalletAddresses as wallet}
        <Col xxl={4} class="">
            <Card class="custom-card">
                <CardHeader class="justify-content-between d-flex">
                    <div class="card-title">{wallet.title}</div>
                    <SpkButton
                        color=""
                        customClass="btn btn-primary-ghost btn-wave"
                        >Connect</SpkButton
                    >
                </CardHeader>
                <CardBody>
                    <div
                        class="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3"
                    >
                        <div class="flex-fill">
                            <label for={wallet.id} class="form-label"
                                >Wallet Address</label
                            >
                            <div class="input-group">
                                <Input
                                    type="text"
                                    class=""
                                    id={wallet.id}
                                    defaultValue={wallet.walletAddress}
                                    placeholder="Placeholder"
                                />
                                <SpkButton color="primary" customClass="btn"
                                    >Copy</SpkButton
                                >
                            </div>
                        </div>
                        <div>
                            <span class="avatar avatar-xxl border">
                                <Image
                                    src={wallet.imageSrc}
                                    class="p-1 qr-image"
                                    alt={`${wallet.currency} QR`}
                                />
                            </span>
                        </div>
                    </div>
                    <Row class="gy-3">
                        <Col xl={6}>
                            <div class="rounded p-3 border border-dashed">
                                <div
                                    class="d-flex align-items-center gap-3 flex-wrap"
                                >
                                    <span class="avatar bg-success">
                                        <i class="ti ti-arrow-narrow-down fs-20"
                                        ></i>
                                    </span>
                                    <div>
                                        <span class="d-block text-muted"
                                            >Received</span
                                        >
                                        <span class="d-block fw-medium">
                                            {wallet.received}
                                            <span
                                                class="fs-12 text-muted fw-normal"
                                                >{wallet.currency}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div class="rounded p-3 border border-dashed">
                                <div
                                    class="d-flex align-items-center gap-3 flex-wrap"
                                >
                                    <span class="avatar bg-danger">
                                        <i class="ti ti-caret-up fs-20"></i>
                                    </span>
                                    <div>
                                        <span class="d-block text-muted"
                                            >Sent</span
                                        >
                                        <span class="d-block fw-medium">
                                            {wallet.sent}
                                            <span
                                                class="fs-12 text-muted fw-normal"
                                                >{wallet.currency}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <div class="rounded p-3 border border-dashed">
                                <div
                                    class="d-flex align-items-center gap-3 flex-wrap"
                                >
                                    <span class="avatar bg-warning">
                                        <i class="ti ti-wallet fs-20"></i>
                                    </span>
                                    <div>
                                        <span class="d-block text-muted"
                                            >Wallet Balance</span
                                        >
                                        <span class="d-block fw-medium">
                                            {wallet.balance}
                                            <span
                                                class="fs-12 text-muted fw-normal"
                                                >{wallet.currency}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    {/each}
</Row>

<!--End::row-2 -->
