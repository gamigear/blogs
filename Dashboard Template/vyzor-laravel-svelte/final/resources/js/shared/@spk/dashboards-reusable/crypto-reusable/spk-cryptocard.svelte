<script>
    import Spkapexcharts from "@/shared/@spk/charts/Spkapexcharts.svelte";
    import { Card, CardBody, Image } from "@sveltestrap/sveltestrap";

    export let crypto = {};
</script>

<Card class="custom-card">
    <CardBody>
        <div class="d-flex align-items-start gap-3 flex-wrap">
            <div>
                <span class="avatar avatar-md">
                    <Image src={crypto.imgSrc} alt="crypto-icon" />
                </span>
            </div>
            <div class="flex-fill">
                <h5 class="fw-semibold">{crypto.value}</h5>
                <div
                    class="d-flex align-items-end justify-content-between gap-3 flex-wrap"
                >
                    <div class={`text-${crypto.iconColor} fw-medium fs-12`}>
                        <i class={crypto.icon}></i>
                        {crypto.percent}
                    </div>
                    <div id={crypto.id}>
                        <Spkapexcharts
                            id={crypto.id}
                            options={crypto.chartoptions}
                        />
                    </div>
                </div>
            </div>
        </div>
    </CardBody>
</Card>
