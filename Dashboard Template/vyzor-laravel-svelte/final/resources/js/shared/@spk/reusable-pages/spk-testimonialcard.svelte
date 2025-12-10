<script>
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";
    const basePath = __BASE_PATH__;

    export let test = {};
    export let cardClass = "";
</script>

<Card class={`custom-card mb-0 ${cardClass}`}>
    <CardBody class="p-5 pb-4">
        <div
            class="d-flex align-items-center justify-content-between mb-3 flex-wrap"
        >
            <h5 class="fw-semibold mb-0">{test.title}</h5>
            <div class="text-warning fs-14 my-auto">
                {@html test.stars}
            </div>
        </div>
        <p class="mb-3 text-muted">
            {test.description}
        </p>
        <div class="d-flex align-items-start justify-content-end gap-2">
            <div class="lh-1">
                <span class="avatar avatar-md avatar-rounded">
                    <Image src={`${basePath}${test.imgSrc}`} alt="" />
                </span>
            </div>
            <div>
                <span class="d-block fw-semibold">{test.name}</span>
                <span class="text-muted fs-13">{test.role}</span>
            </div>
        </div>
    </CardBody>
</Card>
