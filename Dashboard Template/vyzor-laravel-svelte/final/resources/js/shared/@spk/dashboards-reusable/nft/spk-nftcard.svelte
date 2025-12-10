<script >
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import { Link } from "@inertiajs/svelte";
    import { Card, Image } from "@sveltestrap/sveltestrap";
    const basePath = __BASE_PATH__;

    export let nft = {};
    export let cardClass = "";
</script>

<Card class={`custom-card ${cardClass}`}>
    <div
        class="d-flex align-items-center justify-content-between nft-like-section w-100 px-3"
    >
        <div class="flex-fill">
            <SpkButton
                color="danger"
                customClass="btn btn-sm btn-icon rounded-pill btn-wave"
            >
                <i class="ri-heart-fill"></i>
            </SpkButton>
        </div>
        <div>
            <SpkBadge Color="" CustomClass="nft-like-badge text-default">
                <i
                    class="ri-heart-fill me-1 text-danger align-middle d-inline-block"
                ></i>
                {nft.likes}
            </SpkBadge>
        </div>
        <p class="mb-0 nft-auction-time">{nft.time}</p>
    </div>
    <div class="card-body p-2 grid-cards">
        <Image src={nft.image} class="card-img mb-3" alt={nft.title} />
        <div class="p-2">
            <div class="mb-3">
                <Link href={`${basePath}/dashboards/nft/nft-details`}>
                    <h6 class="fw-semibold mb-1 text-truncate">{nft.title}</h6>
                </Link>
                <a href="#!">
                    <span class="fs-13 text-muted fw-medium">{nft.author}</span>
                </a>
            </div>
            <div
                class="d-flex align-items-end justify-content-between flex-wrap gap-2"
            >
                <div class="flex-fill">
                    <span class="text-muted fs-12 d-block mb-1"
                        >Current Bid</span
                    >
                    <div class="d-flex align-items-center gap-2 fw-semibold">
                        <div class="lh-1">
                            <span class="avatar avatar-xs avatar-rounded">
                                <Image
                                    src="../../images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg"
                                    alt="ETH"
                                />
                            </span>
                        </div>
                        <div>{nft.currentBid}</div>
                    </div>
                </div>
                <div>
                    <SpkButton color="primary" customClass="btn"
                        >{nft.bidAmount}</SpkButton
                    >
                </div>
            </div>
        </div>
    </div>
</Card>
