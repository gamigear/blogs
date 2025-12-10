<script>
    import SpkTooltips from "@/shared/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";

    export let search = {};
    export let cardClass = "";
</script>

<Card class={`custom-card shadow-none ${cardClass}`}>
    <CardBody>
        <div
            class="d-flex align-items-start flex-wrap gap-3 justify-content-between"
        >
            <div class="d-flex align-items-center">
                <div>
                    <span
                        class={`avatar avatar-lg avatar-rounded bg-${search.bgColor} bg-opacity-10 border`}
                    >
                        <Image src={search.imgSrc} alt="" />
                    </span>
                </div>
                <div class="ms-2">
                    <h6 class="fw-medium mb-0 d-flex align-items-center">
                        <a href="#!">{search.title}</a>
                    </h6>
                    <a href="#!">{search.subTitle}</a>
                </div>
            </div>
            <div class="btn-list">
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a
                    href="#!"
                    id={`SearcBook-${search.id}`}
                    class="btn btn-sm btn-icon btn-light"
                >
                    <span>
                        <i class="ri-heart-3-fill align-middle text-muted"></i>
                    </span>
                </a>
                <SpkTooltips
                    placement="top"
                    content="Add to favourite"
                    targetId={`SearcBook-${search.id}`}
                ></SpkTooltips>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a
                    href="#!"
                    id={`Featured-${search.id}`}
                    class="btn btn-sm btn-icon btn-warning-light"
                >
                    <span>
                        <i class="ri-star-fill"></i>
                    </span>
                </a>
                <SpkTooltips
                    placement="top"
                    content="Featured Book"
                    targetId={`Featured-${search.id}`}
                ></SpkTooltips>
            </div>
        </div>
        <div class="popular-tags my-3">
            {#each search.tags ?? [] as tag}
                <a
                    href="#!"
                    class="badge rounded-pill bg-light text-default me-1"
                >
                    {tag}
                </a>
            {/each}
        </div>
        <div class="d-flex justify-content-between flex-wrap gap-2">
            <div>
                <span class="text-muted">Published On</span> -{" "}
                <span class="fw-medium mb-0">{search.date}</span>
            </div>
            <a href="#!" class="text-primary fw-semibold fs-14">
                Preview <i class="fe fe-arrow-right"></i>
            </a>
        </div>
    </CardBody>
</Card>
