<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import SpkTooltips from "@/shared/@spk/uielements/Tooltips/SpkTooltips.svelte";
    import { Col, Row } from "@sveltestrap/sveltestrap";
    import {
        Bootstrapicons,
        Remixicons,
        Feathericons,
        Tablericons,
        LineAwesomeicons,
        Boxicons,
    } from "@/shared/data/iconsdata";
    import SpkBasicCard from "@/shared/@spk/SpkBasicCard.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Icons | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Icons" activepage="Icons" page="Icons" />
<!-- Page Header Close -->

<!-- Start::row-1 -->
<Row>
    <Col xl={12}>
        <SpkBasicCard headerTitle="Bootstrap Icons">
            <div slot="customheader"></div>
            <div slot="content">
                <p class="mb-1">
                    Simply beautiful open source icons. For more info <a
                        href="https://icons.getbootstrap.com/"
                        target="_blank"
                        class="text-primary">click here</a
                    >.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="bi bi-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    {#each Bootstrapicons as icon}
                        <li class="icons-list-item" id={icon.id}>
                            <i class={`bi bi-${icon.text}`}></i>
                        </li>
                        <SpkTooltips
                            placement="top"
                            targetId={icon.id}
                            content={`bi bi-${icon.text}`}
                        />
                    {/each}
                </ul>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={12}>
        <SpkBasicCard headerTitle="Remix Icons">
            <div slot="customheader"></div>
            <div slot="content">
                <p class="mb-1">
                    Simply beautiful open source icons. For more info <a
                        href="https://remixicon.com/"
                        target="_blank"
                        class="text-primary">click here</a
                    >.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="ri-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    {#each Remixicons as icon}
                        <li class="icons-list-item" id={icon.text}>
                            <i class={`ri-${icon.text}`}></i>
                        </li>
                        <SpkTooltips
                            placement="top"
                            targetId={icon.text}
                            content={`ri-${icon.text}`}
                        />
                    {/each}
                </ul>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={12}>
        <SpkBasicCard headerTitle="Feather Icons">
            <div slot="customheader"></div>
            <div slot="content">
                <p class="mb-1">
                    Simply beautiful open source icons. For more info <a
                        href="https://feathericons.com/"
                        target="_blank"
                        class="text-primary">click here</a
                    >.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="fe fe-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    {#each Feathericons as icon}
                        <li
                            class="icons-list-item"
                            id={`Feathericons${icon.id}`}
                        >
                            <i class={`fe fe-${icon.text}`}></i>
                        </li>
                        <SpkTooltips
                            placement="top"
                            targetId={`Feathericons${icon.id}`}
                            content={`fe fe-${icon.text}`}
                        />
                    {/each}
                </ul>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={12}>
        <SpkBasicCard headerTitle="Tabler Icons">
            <div slot="customheader"></div>
            <div slot="content">
                <p class="mb-1">
                    Simply beautiful open source icons. For more info <a
                        href="https://tabler-icons.io/"
                        target="_blank"
                        class="text-primary">click here</a
                    >.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="ti ti-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    {#each Tablericons as icon}
                        <li
                            class="icons-list-item"
                            id={`Tablericons-${icon.id}`}
                        >
                            <i class={`ti ti-${icon.text}`}></i>
                        </li>
                        <SpkTooltips
                            placement="top"
                            targetId={`Tablericons-${icon.id}`}
                            content={`ti ti-${icon.text}`}
                        />
                    {/each}
                </ul>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={12}>
        <SpkBasicCard headerTitle="Line Awesome Icons">
            <div slot="customheader"></div>
            <div slot="content">
                <p class="mb-1">
                    Simply beautiful open source icons. For more info <a
                        href="https://icons8.com/line-awesome"
                        target="_blank"
                        class="text-primary">click here</a
                    >.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="las la-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    <li class="icons-list-item" id="la-bell">
                        <i class="las la-bell"></i>
                    </li>
                    <SpkTooltips
                        placement="top"
                        targetId="la-bell"
                        content="las la-bell"
                    />
                    {#each LineAwesomeicons as icon}
                        <li class="icons-list-item" id={icon.text}>
                            <i class={`las la-${icon.text}`}></i>
                        </li>
                        <SpkTooltips
                            placement="top"
                            targetId={icon.text}
                            content={`las la-${icon.text}`}
                        />
                    {/each}
                    <li class="icons-list-item" id="mapicon">
                        <i class="las la-map"></i>
                    </li>
                    <SpkTooltips
                        placement="top"
                        targetId="mapicon"
                        content="las la-map"
                    />
                </ul>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={12}>
        <SpkBasicCard headerTitle="Boxicons">
            <div slot="customheader"></div>
            <div slot="content">
                <p class="mb-1">
                    Simply beautiful open source icons. For more info <a
                        href="https://boxicons.com/"
                        target="_blank"
                        class="text-primary">click here</a
                    >.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="bx bx-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    {#each Boxicons as icon}
                        <li class="icons-list-item" id={icon.text}>
                            <i class={`bx bx-${icon.text}`}></i>
                        </li>
                        <SpkTooltips
                            placement="top"
                            targetId={icon.text}
                            content={`bx bx-${icon.text}`}
                        />
                    {/each}
                    <li class="icons-list-item" id="bx-box">
                        <i class="bx bx-box"></i>
                    </li>
                    <SpkTooltips
                        placement="top"
                        targetId="bx-box"
                        content="bx bx-box"
                    />
                    <li class="icons-list-item" id="bx-file">
                        <i class="bx bx-file"></i>
                    </li>
                    <SpkTooltips
                        placement="top"
                        targetId="bx-file"
                        content="bx bx-file"
                    />
                </ul>
            </div>
        </SpkBasicCard>
    </Col>
</Row>
<!--End::row-1 -->
