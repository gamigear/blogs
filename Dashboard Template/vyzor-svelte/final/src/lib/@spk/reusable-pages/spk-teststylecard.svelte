<script lang="ts">
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";
    import { base } from '$app/paths';
    const basePath=base
    interface Review {
        title?: string;
        stars?: any;
        description?: string;
        name?: string;
        role?: string;
        imgSrc?: string;
    }

    export let style: Review = {};
    export let cardClass: string = "";
</script>

<Card class={`custom-card testimonial-style-2-card ${cardClass}`}>
    <CardBody class="p-5">
        <h5 class="fw-semibold mb-3">{style.title}</h5>
        <div class="mb-3 text-muted">{style.description}</div>
        <div
            class="d-flex align-items-end justify-content-between flex-wrap gap-2"
        >
            <div class="lh-1">
                <span class="avatar rounded-circle me-2">
                    <Image
                        src={`${basePath}${style.imgSrc}`}
                        alt=""
                        class="img-fluid rounded-circle object-fit-cover"
                    />
                </span>
            </div>
            <div class="flex-fill">
                <span class="d-block fw-semibold">{style.name}</span>
                <span class="text-muted fs-13">{style.role}</span>
            </div>
            <div class="text-warning d-block ms-1">{@html style.stars}</div>
        </div>
    </CardBody>
</Card>
