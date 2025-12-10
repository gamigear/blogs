<script>
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";
    import SpkButton from "../uielements/Button/SpkButton.svelte";
    const basePath = __BASE_PATH__;

    export let member = {};

    const Icons = [
        {
            platform: "facebook",
            icon: "facebook-circle",
            url: member.socials?.facebook,
        },
        {
            platform: "twitter",
            icon: "twitter-x",
            url: member.socials?.twitter,
        },
        {
            platform: "linkedin",
            icon: "linkedin-box",
            url: member.socials?.linkedin,
        },
    ];
</script>

<Card class="custom-card">
    <Image
        src={`${basePath}${member.imgSrc}`}
        alt={member.name}
        class="card-img-top"
    />
    <CardBody class="text-center">
        <h6 class="fw-semibold mb-0">{member.name}</h6>
        <span class="text-muted fs-13">{member.role}</span>
        <div class="btn-list mt-3 justify-content-center d-flex gap-2">
            {#each Icons as idx}
                {#if idx.url}
                    <SpkButton
                        color=""
                        customClass="btn btn-light btn-icon rounded-circle border"
                    >
                        <i class={`ri-${idx.icon}-fill lh-1`}></i>
                    </SpkButton>
                {/if}
            {/each}
        </div>
    </CardBody>
</Card>
