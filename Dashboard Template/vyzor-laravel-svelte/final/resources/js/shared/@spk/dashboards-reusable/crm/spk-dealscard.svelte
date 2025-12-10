<script>
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";

    export let deal = {};
    export let cardClass = "";
    export let bodyClass = "";
</script>

<Card class={`custom-card ${cardClass}`}>
    <CardBody class={bodyClass}>
        <div
            class="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap"
        >
            <div class="d-flex align-items-center gap-2 flex-wrap">
                <div class="lh-1">
                    <span class="avatar avatar-sm avatar-rounded">
                        <Image src={deal.imgSrc} alt={deal.title} />
                    </span>
                </div>
                <div class="fs-14">{deal.title}</div>
            </div>
            <div>{deal.price}</div>
        </div>
        <div class="deal-description">
            <div class="my-1">
                <a href="#!" class="company-name">
                    {deal.company}
                </a>
            </div>
            <div class="text-muted fs-12">{deal.date}</div>
        </div>
    </CardBody>
</Card>
