<script>
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";
    import SpkDropdown from "../uielements/Dropdown/SpkDropdown.svelte";
    import { dropdown1 } from "@/shared/data/pages/profiledata";
    import SpkButton from "../uielements/Button/SpkButton.svelte";

    export let obj = {};
    export let cardClass = "";
</script>

<Card class={`custom-card ${cardClass}`}>
    <CardBody class="p-4 text-center">
        <SpkDropdown
            CustomClass="profile-friends-actions"
            Color="light"
            option={dropdown1}
            ToggleClass="tn btn-icon rounded-circle border no-caret"
            Caret={false}
            parent={`<i class="fe fe-more-vertical"></i>`}
        />
        <div class="lh-1 mb-2">
            <span class="avatar avatar-xxl avatar-rounded">
                <Image src={obj.imgSrc} alt="" />
            </span>
        </div>
        <div class="mb-3">
            <span class="d-block fw-semibold">{obj.name}</span>
            <span class="text-muted fs-13">{obj.mail}</span>
        </div>
        <div class="btn-list">
            <SpkButton
                color=""
                customClass="btn btn-icon btn-facebook btn-wave rounded-circle waves-effect waves-light"
            >
                <i class="ri-facebook-line"></i>
            </SpkButton>
            <SpkButton
                color=""
                customClass="btn btn-icon btn-twitter btn-wave rounded-circle waves-effect waves-light"
            >
                <i class="ri-twitter-x-line"></i>
            </SpkButton>
            <SpkButton
                color=""
                customClass="btn btn-icon btn-instagram btn-wave rounded-circle waves-effect waves-light"
            >
                <i class="ri-instagram-line"></i>
            </SpkButton>
        </div>
    </CardBody>
</Card>
