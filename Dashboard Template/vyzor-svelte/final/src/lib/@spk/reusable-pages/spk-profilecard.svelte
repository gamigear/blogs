<script lang="ts">
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";
    import SpkButton from "../uielements/Button/SpkButton.svelte";

    interface ProfileData {
        imgSrc?: string;
        name?: string;
        mail?: string;
        color?: string;
        icon?: string;
        followers?: string;
    }

    export let profile: ProfileData = {};
    export let cardClass: string = "";
    export let bodyClass: string = "";
</script>

<Card class={`custom-card ${cardClass}`}>
    <CardBody class={bodyClass}>
        <div class="d-flex align-items-center gap-2 flex-wrap">
            <div class="lh-1">
                <span class="avatar avatar-lg avatar-rounded">
                    <Image src={profile.imgSrc} alt={profile.name} />
                </span>
            </div>
            <div class="flex-fill">
                <span class="fw-semibold d-block">{profile.name}</span>
                <span class="text-muted fs-13">{profile.mail}</span>
            </div>
            <div>
                <SpkButton
                    color=""
                    customClass={`btn btn-${profile.color}-ghost`}
                    ><i class={`ri-user-${profile.icon}-line me-1`}
                    ></i>{profile.followers}</SpkButton
                >
            </div>
        </div>
    </CardBody>
</Card>
