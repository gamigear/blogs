<script lang="ts">
    import SpkBadge from "../uielements/badge/SpkBadge.svelte";

    interface TimelineItem {
        date?: string;
        title?: string;
        description?: string;
        bgColor?: string;
    }

    export let timeline: TimelineItem = {};
</script>

<div class="timeline-step">
    <div
        class="timeline-content"
        data-toggle="popover"
        data-placement="top"
        title=""
        data-content="And here's some amazing content. It's very engaging. Right?"
        data-original-title={timeline.date}
    >
        <div class="timeline-date_time-container">
            <SpkBadge Color="" CustomClass={`bg-${timeline.bgColor}`}
                >{timeline.date}</SpkBadge
            >
        </div>
        <div class={`inner-circle ${timeline.bgColor}`}></div>
        <p class="fw-medium mt-3 mb-1">{timeline.title}</p>
        <p class="text-muted mb-0 mb-lg-0">{timeline.description}</p>
    </div>
</div>
