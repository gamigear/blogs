<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import {
        dataListgroup1,
        dataListgroup2,
        Listgroup1,
        Listgroup2,
        Listgroup3,
        dataListgroup5,
        Listgroup4,
        Listgroup5,
        dataListgroup7,
        dataListgroup11,
        dataListgroup15,
        dataListgroup16,
        Listgroup11,
        Listgroup12,
        Listgroup13,
        Listgroup14,
        Listgroup15,
        Listgroup16,
        Listgroup6,
        Listgroup7,
        Listgroup8,
        dataListgroup10,
        Listgroup10,
        Listgroup9,
    } from "@/shared/data/prism-code/uielementsprim";
    import {
        Badge,
        Col,
        ListGroupItem,
        Image,
        Row,
    } from "@sveltestrap/sveltestrap";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import {
        ActiveButtons,
        BasicButtons,
        ContextualButtons,
        CustomButtons,
        HorizontalButtons,
        LinksButtons,
        ListbadgesButtons,
        SubheadingsButtons,
    } from "@/shared/data/uielements/listgroupdata";
    import SpkListGroup from "@/shared/@spk/uielements/ListGroup/SpkListGroup.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>ListGroup | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<Pageheader homepage="List Group" activepage="UI Elements" page="List Group" />

<!-- Start:: row-1 -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Basic List"
            svelteCode={Listgroup1}
            dataCode={dataListgroup1}
        >
            <SpkListGroup>
                {#each BasicButtons as listgroup}
                    <ListGroupItem>
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-sm">
                                <Image src={listgroup.src} alt="img" />
                            </span>
                            <div class="ms-2 fw-semibold">
                                {listgroup.text}
                            </div>
                        </div>
                    </ListGroupItem>
                {/each}
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Active items"
            svelteCode={Listgroup2}
            dataCode={dataListgroup2}
        >
            <SpkListGroup>
                {#each ActiveButtons as listgroup}
                    <ListGroupItem
                        class={`list-group-item ${listgroup.class1}`}
                        aria-current="true"
                    >
                        <div class="d-flex align-items-center">
                            <div>
                                <span class="fs-15">
                                    <i class={`bi bi-${listgroup.class}`}></i>
                                </span>
                            </div>
                            <div class="ms-2">
                                {listgroup.text}
                            </div>
                        </div>
                    </ListGroupItem>
                {/each}
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Disabled items" svelteCode={Listgroup3}>
            <SpkListGroup>
                <ListGroupItem disabled aria-disabled="true"
                    >A disabled item meant to be disabled
                </ListGroupItem>
                <ListGroupItem>Simply dummy text of the printing</ListGroupItem>
                <ListGroupItem
                    >There are many variations of passages</ListGroupItem
                >
                <ListGroupItem>All the Lorem Ipsum generators</ListGroupItem>
                <ListGroupItem
                    >Written in 45 BC. This book is a treatise on the theory</ListGroupItem
                >
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Flush" svelteCode={Listgroup4}>
            <SpkListGroup Flush={true}>
                <ListGroupItem class="fw-semibold"
                    ><i class="bi bi-envelope align-middle me-2 text-muted"
                    ></i>Asish Trivedhi<span
                        class="ms-1 text-muted fw-normal d-inline-block"
                        >(+1023-84534)</span
                    ></ListGroupItem
                >
                <ListGroupItem class="fw-semibold"
                    ><i class="bi bi-tiktok align-middle me-2 text-muted"
                    ></i>Alezander Russo<span
                        class="ms-1 text-muted fw-normal d-inline-block"
                        >(+7546-12342)</span
                    ></ListGroupItem
                >
                <ListGroupItem class="fw-semibold"
                    ><i class="bi bi-whatsapp align-middle me-2 text-muted"
                    ></i>Karem Smith<span
                        class="ms-1 text-muted fw-normal d-inline-block"
                        >(+9944-56632)</span
                    ></ListGroupItem
                >
                <ListGroupItem class="fw-semibold"
                    ><i class="bi bi-facebook align-middle me-2 text-muted"
                    ></i>Melissa Brien<span
                        class="ms-1 text-muted fw-normal d-inline-block"
                        >(+1023-34323)</span
                    ></ListGroupItem
                >
                <ListGroupItem class="fw-semibold"
                    ><i class="bi bi-instagram align-middle me-2 text-muted"
                    ></i>Kamala Harris<span
                        class="ms-1 text-muted fw-normal d-inline-block"
                        >(+91-63421)</span
                    ></ListGroupItem
                >
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Links"
            svelteCode={Listgroup5}
            dataCode={dataListgroup5}
        >
            <SpkListGroup>
                {#each LinksButtons as listgroup}
                    <ListGroupItem
                        action
                        tag="a"
                        href="#!"
                        class={`${listgroup.class1}`}
                        aria-current="true"
                    >
                        <div class="d-flex align-items-center">
                            <div>
                                <span
                                    class={`avatar avatar-xs bg-${listgroup.class} text-${listgroup.color} avatar-rounded`}
                                >
                                    {listgroup.text1}
                                </span>
                            </div>
                            <div class="ms-2">{listgroup.text}</div>
                        </div>
                    </ListGroupItem>
                {/each}
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="buttons" svelteCode={Listgroup6}>
            <SpkListGroup>
                <ListGroupItem
                    action
                    tag="button"
                    active
                    class=" "
                    aria-current="true"
                    >Simply dummy text of the printing<span
                        class="badge float-end bg-primary">243</span
                    ></ListGroupItem
                >
                <ListGroupItem action tag="button"
                    >There are many variations of passages<span
                        class="badge float-end bg-secondary-transparent"
                        >35</span
                    ></ListGroupItem
                >
                <ListGroupItem action tag="button"
                    >All the Lorem Ipsum generators<span
                        class="badge float-end bg-info-transparent">132</span
                    ></ListGroupItem
                >
                <ListGroupItem action tag="button"
                    >All the Lorem Ipsum generators<span
                        class="badge float-end bg-success-transparent"
                        >2525</span
                    ></ListGroupItem
                >
                <ListGroupItem action tag="button" disabled
                    >A disabled item meant to be disabled<span
                        class="badge float-end bg-danger-transparent">21</span
                    ></ListGroupItem
                >
            </SpkListGroup>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Contextual classes"
            svelteCode={Listgroup7}
            dataCode={dataListgroup7}
        >
            <SpkListGroup>
                {#each ContextualButtons as listgroup}
                    <ListGroupItem color={listgroup.class}
                        >{listgroup.text}</ListGroupItem
                    >
                {/each}
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Contextual classes with hover styles"
            svelteCode={Listgroup8}
            dataCode={dataListgroup7}
        >
            <SpkListGroup>
                {#each ContextualButtons as listgroup}
                    <ListGroupItem action color={listgroup.class}
                        >{listgroup.text}</ListGroupItem
                    >
                {/each}
            </SpkListGroup>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Solid Colored Lists"
            svelteCode={Listgroup9}
            dataCode={dataListgroup7}
        >
            <SpkListGroup>
                {#each ContextualButtons as listgroup}
                    <ListGroupItem
                        class={`list-item-solid-${listgroup.class} ${listgroup.class1}`}
                        >{listgroup.text}</ListGroupItem
                    >
                {/each}
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Custom content"
            svelteCode={Listgroup10}
            dataCode={dataListgroup10}
        >
            <SpkListGroup>
                {#each CustomButtons as listgroup}
                    <ListGroupItem
                        action
                        class={` ${listgroup.class1}`}
                        aria-current="true"
                    >
                        <div class="d-flex w-100 justify-content-between gap-1">
                            <h6
                                class={`mb-1 fw-semibold text-${listgroup.color}`}
                            >
                                {listgroup.heading}
                            </h6>
                            <small class={listgroup.class2}
                                >{listgroup.text1}</small
                            >
                        </div>
                        <p class="mb-1">{listgroup.text2}</p>
                        <small>{listgroup.text3}.</small>
                    </ListGroupItem>
                {/each}
            </SpkListGroup>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Sub headings"
            svelteCode={Listgroup11}
            dataCode={dataListgroup11}
        >
            <SpkListGroup Numbered={true}>
                {#each SubheadingsButtons as listgroup}
                    <ListGroupItem
                        class="list-group-item d-flex justify-content-between align-items-start"
                    >
                        <div class="ms-2 me-auto text-muted">
                            <div class="fw-semibold fs-14 text-default">
                                {listgroup.text1}
                            </div>
                            {listgroup.text2}
                        </div>
                        <SpkBadge CustomClass={listgroup.class}
                            >{listgroup.text3}</SpkBadge
                        >
                    </ListGroupItem>
                {/each}
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Numbered Lists" svelteCode={Listgroup12}>
            <SpkListGroup Numbered={true}>
                <ListGroupItem>Simply dummy text of the printing.</ListGroupItem
                >
                <ListGroupItem
                    >There are many variations of passages.</ListGroupItem
                >
                <ListGroupItem>All the Lorem Ipsum generators.</ListGroupItem>
                <ListGroupItem
                    >Written in 45 BC. This book is a treatise on the theory.</ListGroupItem
                >
                <ListGroupItem>Randomised words which don't look.</ListGroupItem
                >
                <ListGroupItem
                    >Always free from repetition, injected humour.</ListGroupItem
                >
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="List With Checkboxes" svelteCode={Listgroup13}>
            <SpkListGroup>
                <ListGroupItem>
                    <input
                        class="form-check-input me-2 fw-semibold"
                        type="checkbox"
                        value=""
                        aria-label="..."
                        checked
                    />
                    Accurate information at any given point.
                </ListGroupItem>
                <ListGroupItem>
                    <input
                        class="form-check-input me-2 fw-semibold"
                        type="checkbox"
                        value=""
                        aria-label="..."
                    />
                    Hearing the information and responding.
                </ListGroupItem>
                <ListGroupItem>
                    <input
                        class="form-check-input me-2 fw-semibold"
                        type="checkbox"
                        value=""
                        aria-label="..."
                        checked
                    />
                    Setting up and customizing your own sales.
                </ListGroupItem>
                <ListGroupItem>
                    <input
                        class="form-check-input me-2 fw-semibold"
                        type="checkbox"
                        value=""
                        aria-label="..."
                        checked
                    />
                    New Admin Launched.
                </ListGroupItem>
                <ListGroupItem>
                    <input
                        class="form-check-input me-2 fw-semibold"
                        type="checkbox"
                        value=""
                        aria-label="..."
                    />
                    To maximize profits and improve productivity.
                </ListGroupItem>
                <ListGroupItem>
                    <input
                        class="form-check-input me-2 fw-semibold"
                        type="checkbox"
                        value=""
                        aria-label="..."
                    />
                    To have a complete 360° overview of sales information, having.
                </ListGroupItem>
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="List With Radios" svelteCode={Listgroup14}>
            <SpkListGroup>
                <ListGroupItem class="list-group-item">
                    <input
                        class="form-check-input me-2"
                        type="radio"
                        value=""
                        name="list-radio"
                    />
                    Accurate information at any given point.
                </ListGroupItem>
                <ListGroupItem class="list-group-item">
                    <input
                        class="form-check-input me-2"
                        type="radio"
                        value=""
                        name="list-radio"
                    />
                    Hearing the information and responding.
                </ListGroupItem>
                <ListGroupItem class="list-group-item">
                    <input
                        class="form-check-input me-2"
                        type="radio"
                        value=""
                        name="list-radio"
                        checked
                    />
                    Setting up and customizing your own sales.
                </ListGroupItem>
                <ListGroupItem class="list-group-item">
                    <input
                        class="form-check-input me-2"
                        type="radio"
                        value=""
                        name="list-radio"
                    />
                    New Admin Launched.
                </ListGroupItem>
                <ListGroupItem class="list-group-item">
                    <input
                        class="form-check-input me-2"
                        type="radio"
                        value=""
                        name="list-radio"
                    />
                    To maximize profits and improve productivity.
                </ListGroupItem>
                <ListGroupItem class="list-group-item">
                    <input
                        class="form-check-input me-2"
                        type="radio"
                        value=""
                        name="list-radio"
                    />
                    To have a complete 360° overview of sales information, having.
                </ListGroupItem>
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="List With badges"
            svelteCode={Listgroup15}
            dataCode={dataListgroup15}
        >
            <SpkListGroup>
                {#each ListbadgesButtons as listgroup}
                    <ListGroupItem
                        class="list-group-item d-flex justify-content-between align-items-center fw-semibold"
                    >
                        {listgroup.text1}
                        <Badge color={listgroup.class} class={listgroup.color}
                            >{listgroup.text2}</Badge
                        >
                    </ListGroupItem>
                {/each}
            </SpkListGroup>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Horizontal"
            svelteCode={Listgroup16}
            dataCode={dataListgroup16}
        >
            {#each HorizontalButtons as listgroup}
                <SpkListGroup
                    CustomClass={`mb-2 list-group-horizontal${listgroup.class} `}
                >
                    <ListGroupItem>An item</ListGroupItem>
                    <ListGroupItem>A second item</ListGroupItem>
                    <ListGroupItem>A third item</ListGroupItem>
                </SpkListGroup>
            {/each}
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-4 -->
