<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@//components/page-header/Pageheader.svelte";
    import ShowCode from "@//components/Showcode/ShowCode.svelte";
    import SpkBreadcrumbs from "@/shared/@spk/uielements/Breadcrumbs/SpkBreadcrumbs.svelte";
    import {
        breadcrumb1,
        breadcrumb2,
        breadcrumb3,
        breadcrumb4,
        breadcrumb5,
        breadcrumb6,
        breadcrumb7,
    } from "@/shared/data/prism-code/uielementsprim";
    import { Col, Row } from "@sveltestrap/sveltestrap";
    const breadcrumbItems = [
        { label: "Home", href: "#home" },
        { label: "Library" },
    ];
    const breadcrumbItems2 = [
        { label: "Home", href: "#home" },
        { label: "Library", href: "#library" },
        { label: "Data" }, // No href provided for the active item
    ];

    const breadcrumbItems3 = [
        {
            label: `<i class="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home`,
            href: "#home",
        },
        {
            label: '<i class="ti ti-apps me-1 fs-15 d-inline-block"></i>About',
            href: "#library",
        },
        { label: "Services" }, // No href provided for the active item
    ];

    const breadcrumbSvgItems = [
        { label: "Home", href: "#home" },
        { label: "Library", itemsClass: "embedded-breadcrumb" },
    ];
</script>

<!-- Page Title -->
<svelte:head>
    <title>Breadcrumb | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<Pageheader homepage="Breadcrumb" activepage="UI Elements" page="Breadcrumb" />
<!--ROW-START-->
<Row>
    <Col xl={12}>
        <ShowCode title="Example" svelteCode={breadcrumb1}>
            <SpkBreadcrumbs label="Home" Single={true} />
            <SpkBreadcrumbs items={breadcrumbItems} activeItem="Library" />
            <SpkBreadcrumbs
                items={breadcrumbItems2}
                CustomClass="breadcrumb-lastchild"
                activeItem="Data"
            />
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Example1" svelteCode={breadcrumb2}>
            <SpkBreadcrumbs label="Home" Single={true} />
            <SpkBreadcrumbs
                items={breadcrumbItems}
                CustomClass="breadcrumb-example1"
                activeItem="Library"
            />
            <SpkBreadcrumbs
                items={breadcrumbItems2}
                CustomClass="breadcrumb-example1 breadcrumb-lastchild"
                activeItem="Data"
            />
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Dividers" svelteCode={breadcrumb3}>
            <SpkBreadcrumbs
                divider="~"
                items={breadcrumbItems}
                CustomClass="breadcrumb-lastchild"
                activeItem="Library"
            />
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Embedded SVG icon" svelteCode={breadcrumb4}>
            <SpkBreadcrumbs
                style="--bs-breadcrumb-divider: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&quot;);"
                items={breadcrumbSvgItems}
                CustomClass=" breadcrumb-lastchild"
                activeItem="Library"
            />
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Breadcrumb Style-1" svelteCode={breadcrumb5}>
            <SpkBreadcrumbs
                items={breadcrumbItems2}
                activeItem="Data"
                CustomClass="breadcrumb-style1 breadcrumb-lastchild"
            />
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Breadcrumb Style-2" svelteCode={breadcrumb6}>
            <SpkBreadcrumbs
                items={breadcrumbItems3}
                activeItem="Services"
                CustomClass="breadcrumb-style2 breadcrumb-lastchild"
            ></SpkBreadcrumbs>
        </ShowCode>
    </Col>
</Row>
<!--ROW-END-->
