<script lang="ts">
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";

    export let Title: string = "";
    export let color: string = "";
    export let Customclass: string = "";
    export let Value: string = "";
    export let Imgsrc: string = "";
    export let Textclass: string = "";
    export let Class: string = "";
    export let Navigate: string = "";
</script>

<Card class={`custom-card card-bg-${color} ${Customclass}`}>
    <CardBody>
        <div class="d-flex align-items-center w-100">
            <div class="me-2">
                <span class="avatar avatar-rounded">
                    <Image src={Imgsrc} alt="img" />
                </span>
            </div>
            <div class="">
                <div class="fs-15 fw-medium">{Title}</div>
                <p class={`mb-0 text-${Textclass} op-7 fs-12`}>{Value}</p>
            </div>
            <div class="ms-auto">
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a href={Navigate} class={`text-${Class}`}
                    ><i class="bi bi-three-dots-vertical"></i></a
                >
            </div>
        </div>
    </CardBody>
</Card>
