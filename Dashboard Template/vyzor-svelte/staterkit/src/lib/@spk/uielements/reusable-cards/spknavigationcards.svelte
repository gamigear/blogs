<script lang="ts">
    import { Card, CardBody, CardHeader } from "@sveltestrap/sveltestrap";

    export let Navigationclass: string = "";
    export let Customheaderclass: string = "";
    export let Navigate: string = "";
    export let ActiveNavigate: string = "";
    export let LinkNavigate: string = "";

</script>

<Card class="custom-card text-center">
    <CardHeader class={Customheaderclass}>
        <ul
            class={`nav nav-${Navigationclass} card-header-${Navigationclass} ms-1`}
        >
            <li class="nav-item">
                <a
                    class="nav-link active"
                    aria-current="true"
                    href={ActiveNavigate}
                    on:click={(e)=>e.preventDefault()}
                    
                    >Active</a
                >
            </li>
            <li class="nav-item">
                <a class="nav-link" href={Navigate} on:click={(e)=>e.preventDefault()}>Link</a>
            </li>
            <li class="nav-item">
                <!-- svelte-ignore a11y_missing_attribute -->
                <a class="nav-link disabled" >Disabled</a>
            </li>
        </ul>
    </CardHeader>
    <CardBody>
        <h6 class="card-title fw-medium">Special title treatment</h6>
        <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
        </p>
        <a href={LinkNavigate} class="btn btn-primary">Go somewhere</a>
    </CardBody>
</Card>
