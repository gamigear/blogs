<script lang="ts">
    import { Card, CardBody } from "@sveltestrap/sveltestrap";
    import SpkBadge from "../uielements/badge/SpkBadge.svelte";

    interface SpkPosCardProps {
        id?: string | number;
        title?: string;
        items?: string | number;
        time?: string;
        badge?: string;
        color?: string;
    }

    export let pos: SpkPosCardProps = {};
    export let cardClass: string = "";
    export let bodyClass: string = "";
</script>

<Card
    class={`custom-card border-0 shadow-none ${cardClass} bg-${pos.color}-transparent`}
>
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <CardBody class={bodyClass}>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="#!" class="stretched-link" />
        <div class="d-flex align-items-start justify-content-between mb-1">
            <div>
                <span class="fs-13">Order-{pos.id}</span>
                <span class="d-block fw-semibold">{pos.title}</span>
            </div>
            <div class="fs-13 text-muted">{pos.items}</div>
        </div>
        <div class="d-flex align-items-end justify-content-between flex-wrap">
            <span class="fs-13 text-muted">{pos.time}</span>
            <SpkBadge Color="" CustomClass={`bg-${pos.color}`}
                >{pos.badge}</SpkBadge
            >
        </div>
    </CardBody>
</Card>
