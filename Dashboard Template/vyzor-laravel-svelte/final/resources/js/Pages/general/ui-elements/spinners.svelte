<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import {
        dataspinner2,
        spinner1,
        spinner2,
        spinner3,
        spinner4,
        spinner5,
        spinner6,
        spinner7,
        spinner8,
        spinner9,
        dataspinner10,
        spinner10,
    } from "@/shared/data/prism-code/uielementsprim";
    import { Col, Row } from "@sveltestrap/sveltestrap";
    import SpkSpinners from "@/shared/@spk/uielements/spinners/SpkSpinners.svelte";
    import {
        Buttonspinner,
        Colorspinner,
    } from "@/shared/data/uielements/spinnersdata";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Spinners | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<Pageheader homepage="Spinners" activepage="UI Elements" page="Spinners" />

<!-- Start:: row-1 -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Border spinner"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={spinner1}
        >
            <SpkSpinners type="border" />
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Growing spinner"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={spinner3}
        >
            <SpkSpinners type="grow" />
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Colors"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={spinner2}
            dataCode={dataspinner2}
        >
            {#each Colorspinner as spinner (spinner.id)}
                <SpkSpinners
                    type="border"
                    color={spinner.color}
                    customClass="me-2"
                />
            {/each}
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Growing Color spinners"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={spinner4}
            dataCode={dataspinner2}
        >
            {#each Colorspinner as spinner (spinner.id)}
                <SpkSpinners
                    type="grow"
                    color={spinner.color}
                    customClass="me-2"
                />
            {/each}
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Alignment Flex"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={spinner5}
        >
            <div class="d-flex justify-content-center mb-4">
                <SpkSpinners type="border" />
            </div>
            <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <SpkSpinners type="border" customClass="ms-auto" />
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Alignment Float"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={spinner6}
        >
            <div class="clearfix mb-4">
                <SpkSpinners type="border" customClass="float-end" />
            </div>
            <div class="clearfix">
                <SpkSpinners type="border" customClass="float-start" />
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Alignment Text center"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={spinner7}
        >
            <div class="text-center">
                <SpkSpinners type="border" />
            </div>
        </ShowCode>
        <ShowCode
            title="Spinner Sizes"
            customCardClass=""
            customCardBodyClass="d-flex align-items-center"
            svelteCode={spinner8}
        >
            <SpkSpinners type="border" size="sm" customClass="me-4" />
            <SpkSpinners type="grow" size="sm" customClass="me-4" />
            <SpkSpinners
                type="border"
                customClass="me-4 flex-shrink-0"
                width="3rem"
                height="3rem"
            />
            <SpkSpinners
                type="grow"
                customClass="me-4"
                width="3rem"
                height="3rem"
            />
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Alignment Margin"
            customCardClass=""
            customCardBodyClass="d-flex align-items-center"
            svelteCode={spinner9}
        >
            <SpkSpinners type="border" customClass="m-5" />
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-4 -->

<!-- Start:: row-5 -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Buttons"
            customCardClass=""
            customCardBodyClass=""
            svelteCode={spinner10}
            dataCode={dataspinner10}
        >
            <div class="btn-list">
                <SpkButton
                    color="primary-light"
                    buttontype="button"
                    disabled={true}
                >
                    <SpkSpinners
                        size="sm"
                        type="border"
                        customClass="align-middle m-0"
                    />
                </SpkButton>
                <SpkButton
                    color="primary-light"
                    buttontype="button"
                    disabled={true}
                >
                    <SpkSpinners
                        size="sm"
                        type="border"
                        customClass="align-middle m-0 me-2"
                    />Loading...
                </SpkButton>
                <SpkButton
                    color="primary-light"
                    buttontype="button"
                    disabled={true}
                >
                    <SpkSpinners
                        size="sm"
                        type="grow"
                        customClass="align-middle m-0"
                    />
                </SpkButton>
                {#each Buttonspinner as spinner (spinner.id)}
                    <SpkButton
                        color={spinner.color}
                        buttontype="button"
                        disabled={true}
                    >
                        <SpkSpinners
                            size="sm"
                            type="grow"
                            customClass="align-middle m-0 me-2"
                        />Loading...
                    </SpkButton>
                {/each}
            </div>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-5 -->
