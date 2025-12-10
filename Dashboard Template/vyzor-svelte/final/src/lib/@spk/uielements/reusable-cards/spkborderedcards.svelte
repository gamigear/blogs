<script lang="ts">
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";
    import SpkBadge from "../badge/SpkBadge.svelte";

    interface Badge {
        text: string;
        className?: string;
    }

    export let badges: Badge[] = [];
    export let images: string[] = [];
    export let Title: string = "";
    export let Color: string = "";
    export let Class: string = "";
    export let Navigate: string = "";
</script>

<Card class={`border border-${Color} custom-card`}>
    <CardBody>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <p class="fs-14 fw-medium mb-2 lh-1">
            {Title}
            <a href={Navigate}
                ><i class={`bi bi-plus-square float-end text-${Class} fs-18`}
                ></i></a
            >
        </p>
        <div class="d-flex flex-wrap gap-2 mb-4">
            {#each badges as badge}
                <SpkBadge CustomClass={badge.className}>
                    {badge.text}
                </SpkBadge>
            {/each}
        </div>
        <div class="avatar-list-stacked">
            {#each images as src}
                <span class="avatar avatar-sm avatar-rounded">
                    <Image {src} alt={`img-`} />
                </span>
            {/each}
        </div>
    </CardBody>
</Card>
