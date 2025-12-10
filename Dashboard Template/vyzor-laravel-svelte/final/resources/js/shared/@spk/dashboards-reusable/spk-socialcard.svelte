<script>
    import { Card, CardBody } from "@sveltestrap/sveltestrap";
    import SpkDropdown from "../uielements/Dropdown/SpkDropdown.svelte";
    import { socialmediaDropdown } from "@/shared/data/uielements/dropdowndata";

    export let media = {};
    export let cardClass = "";
</script>

<Card class={`custom-card ${cardClass}`}>
    <CardBody>
        <div class="d-flex align-items-start gap-2 flex-wrap">
            <div class="lh-1">
                <span
                    class={`avatar avatar-md avatar-rounded bg-${media.svgColor}-transparent svg-${media.svgColor}`}
                >
                    {@html media.svgIcon}
                </span>
            </div>
            <div class="flex-fill">
                <div class="d-flex align-items-end justify-content-between">
                    <span class="d-block mb-1">{media.title}</span>
                    <SpkDropdown
                        option={socialmediaDropdown}
                        ToggleClass="btn btn-icon btn-sm rounded-circle btn-light no-caret"
                        parent={`<i class="ti ti-dots text-muted fs-5"></i>`}
                        Caret={false}
                    />
                </div>
                <div class="d-flex align-items-end justify-content-between">
                    <h4 class="fw-semibold mb-0">{media.value}</h4>
                    <div class={`text-${media.percentColor} fs-13`}>
                        <i
                            class={`ti ti-arrow-${media.title === "Like" ? "down" : "up"}`}
                        ></i>{media.percent}
                    </div>
                </div>
            </div>
        </div>
    </CardBody>
</Card>
