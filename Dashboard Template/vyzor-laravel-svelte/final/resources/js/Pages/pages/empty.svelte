
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import { Card, CardBody, Col, Row } from "@sveltestrap/sveltestrap";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Empty | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader homepage="Empty" activepage="Pages" page="Empty" />
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardBody>
                <h6 class="mb-0">Empty Card</h6>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
