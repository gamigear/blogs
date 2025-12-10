<script>
    import { Card, CardBody } from "@sveltestrap/sveltestrap";

    export let ecommerce = {};
    export let cardClass = "";
</script>

 <Card class={`custom-card ${cardClass} ${ecommerce.color}`}>
                <CardBody>
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <h5 class="fw-semibold">{ecommerce.value}</h5>
                            <span class="d-block fs-12 text-muted">{ecommerce.title}</span>
                        </div>
                        <div>
                            <span class={`avatar avatar-lg bg-${ecommerce.color}-transparent svg-${ecommerce.color}`}>
                                {@html ecommerce.svgIcon}
                            </span>
                        </div>
                    </div>
                </CardBody>
            </Card>