<script lang="ts">
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";
    import SpkDropdown from "../uielements/Dropdown/SpkDropdown.svelte";
    import { kanbanKardDropdown } from "$lib/data/uielements/dropdowndata";

    interface Types {
        createdDate?: string;
        daysLeft?: string;
        tags?: string[];
        description?: string;
        title?: string;
        comments?: string;
        likes?: string;
        avatars?: string[];
        Content?: boolean;
        imgSrc?: boolean;
        src?: any;
    }

    export let kanban: Types = {};
    export let cardClass: string = "";
</script>

<Card class={`custom-card ${cardClass || ""}`}>
    <CardBody class="p-0">
        <div class="p-3 kanban-board-head">
            <div
                class="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium"
            >
                <div>
                    <i class="ri-time-line me-1 align-middle d-inline-block"
                    ></i>
                    Created - {kanban.createdDate}
                </div>
                <div>{kanban.daysLeft}</div>
            </div>

            <div class="d-flex align-items-center justify-content-between">
                <div class="task-badges">
                    {#each kanban.tags ?? [] as tag, index}
                        <span class={`badge ${index !== 0 ? "ms-1" : ""}`}>
                            {tag}
                        </span>
                    {/each}
                </div>
                <SpkDropdown
                    option={kanbanKardDropdown}
                    ToggleClass="btn btn-sm btn-light btn-white no-caret"
                    Caret={false}
                    parent={`<i class="ri-more-2-fill"></i>`}
                />
            </div>
            {#if kanban.Content}
                <div class="kanban-content mt-2">
                    <h6 class="fw-medium mb-0 mt-2 fs-15">{kanban.title}</h6>
                    <div class="kanban-task-description">
                        {kanban.description}
                    </div>
                </div>
            {/if}
            {#if kanban.imgSrc}
                <div class="kanban-content mt-2">
                    <div class="task-image mt-2">
                        <Image
                            src={kanban.src}
                            class="img-fluid rounded kanban-image"
                            alt=""
                        />
                    </div>
                    <h6 class="fw-medium mb-0 mt-2 fs-15">{kanban.title}</h6>
                </div>
            {/if}
        </div>

        <div class="p-3 border-top border-block-start-dashed">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <a href="#!" class="me-2 text-primary">
                        <span class="me-1"
                            ><i class="ri-thumb-up-fill align-middle fw-normal"
                            ></i></span
                        ><span class="fw-medium fs-12">{kanban.likes}</span>
                    </a>
                    <a href="#!" class="text-muted">
                        <span class="me-1"
                            ><i class="ri-message-2-line align-middle fw-normal"
                            ></i></span
                        ><span class="fw-medium fs-12">{kanban.comments}</span>
                    </a>
                </div>
                <div class="avatar-list-stacked">
                    {#each kanban.avatars ?? [] as src}
                        <span class="avatar avatar-sm avatar-rounded">
                            <Image {src} alt={`avatar`} />
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    </CardBody>
</Card>
