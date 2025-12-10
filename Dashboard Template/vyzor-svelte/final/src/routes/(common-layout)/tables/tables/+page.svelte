<script>
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { Col, Image, Progress, Row } from "@sveltestrap/sveltestrap";
    import SpkTablescomponent from "$lib/@spk/SpkTablescomponent.svelte";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import {
        Activedata,
        Basictable,
        Borderdata,
        Bordertable,
        Captiondata,
        ColorTables,
        Groupdata,
        Hoverable,
        Hoverabledata,
        Primaryhead,
        Primarytable,
        Responsivedata,
        Smalltables,
        Strippedtable,
        Successtable,
        Tablefoot,
        Topcaptuiondata,
        VerticalTables,
        Warninghead,
        Warningtable,
        tablePrimary,
    } from "$lib/data/tables/tabledata";
    import {
        BasicTable5,
        BasictableData,
        basicTable1,
        basicTable10,
        basicTable11,
        basicTable12,
        basicTable13,
        basicTable14,
        basicTable15,
        basicTable16,
        basicTable17,
        basicTable18,
        basicTable19,
        basicTable2,
        basicTable20,
        basicTable21,
        basicTable22,
        basicTable23,
        basicTable24,
        basicTable25,
        basicTable26,
        basicTable27,
        basicTable28,
        basicTable29,
        basicTable3,
        basicTable30,
        basicTable31,
        basicTable32,
        basicTable4,
        basicTable6,
        basicTable7,
        basicTable8,
        basicTable9,
        loopTable10,
        loopTable16,
        loopTable17,
        loopTable18,
        loopTable19,
        loopTable2,
        loopTable24,
        loopTable25,
        loopTable26,
        loopTable27,
        loopTable28,
        loopTable29,
        loopTable3,
        loopTable31,
        loopTable32,
        loopTable4,
        loopTable5,
        loopTable6,
        loopTable7,
        loopTable8,
    } from "$lib/components/common/prism-code/tablesprism";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Tables | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader homepage="Tables" activepage="Tables" page="Tables" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Basic Tables"
            svelteCode={basicTable1}
            dataCode={BasictableData}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                header={[
                    { title: "Name" },
                    { title: "Created On" },
                    { title: "Number" },
                    { title: "Status" },
                ]}
            >
                {#each Basictable as idx}
                    <tr>
                        <th scope="row">{idx.name}</th>
                        <td>{idx.date}</td>
                        <td>{idx.number}</td>
                        <td
                            ><SpkBadge
                                Color=""
                                CustomClass={`bg-outline-${idx.color}`}
                                >{idx.status}</SpkBadge
                            ></td
                        >
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Bordered Tables"
            svelteCode={basicTable2}
            dataCode={loopTable2}
        >
            <SpkTablescomponent
                Responsive={true}
                Bordered={true}
                tableClass="text-nowrap"
                header={[
                    { title: "User" },
                    { title: "Status" },
                    { title: "Email" },
                    { title: "Action" },
                ]}
            >
                {#each Bordertable as idx}
                    <tr>
                        <th scope="row">
                            <div class="d-flex align-items-center">
                                <span
                                    class="avatar avatar-xs me-2 online avatar-rounded"
                                >
                                    <Image
                                        width={20}
                                        height={20}
                                        src={idx.src}
                                        alt="img"
                                    />
                                </span>{idx.name}
                            </div>
                        </th>
                        <td
                            ><SpkBadge
                                Color=""
                                CustomClass={`${idx.class} bg-${idx.color} `}
                                >{idx.text}</SpkBadge
                            ></td
                        >
                        <td>{idx.mail}</td>
                        <td>
                            <div class="hstack gap-2 flex-wrap">
                                <a href="#!" class="text-info fs-14 lh-1">
                                    <i class="ri-edit-line"></i>
                                </a>
                                <a href="#!" class="text-danger fs-14 lh-1">
                                    <i class="ri-delete-bin-5-line"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xl={4}>
        <ShowCode
            title=" Bordered Primary"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable3}
            dataCode={loopTable3}
        >
            <SpkTablescomponent
                Responsive={true}
                Bordered={true}
                tableClass="text-nowrap border-primary"
                header={[
                    { title: "Order" },
                    { title: "Date" },
                    { title: "Customer" },
                    { title: "Action" },
                ]}
            >
                {#each Primarytable as idx}
                    <tr>
                        <th scope="row">
                            {idx.order}
                        </th>
                        <td>
                            <SpkBadge Color="light" CustomClass="text-dark"
                                >{idx.date}</SpkBadge
                            >
                        </td>
                        <td>
                            <div class="d-flex align-items-center">
                                <span
                                    class="avatar avatar-xs me-2 online avatar-rounded"
                                >
                                    <Image
                                        width={20}
                                        height={20}
                                        src={idx.src}
                                        alt="img"
                                    />
                                </span>{idx.name}
                            </div>
                        </td>
                        <td
                            ><SpkBadge
                                Color=""
                                CustomClass="bg-primary-transparent"
                                >Booked</SpkBadge
                            ></td
                        >
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={4}>
        <ShowCode
            title="Bordered Success"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable4}
            dataCode={loopTable4}
        >
            <SpkTablescomponent
                Responsive={true}
                Bordered={true}
                tableClass="text-nowrap border-success"
                header={[
                    { title: "Order" },
                    { title: "Date" },
                    { title: "Customer" },
                    { title: "Status" },
                ]}
            >
                {#each Successtable as idx}
                    <tr>
                        <th scope="row">
                            {idx.order}
                        </th>
                        <td>
                            <SpkBadge Color="light" CustomClass=" text-dark"
                                >{idx.date}</SpkBadge
                            >
                        </td>
                        <td>
                            <div class="d-flex align-items-center">
                                <span
                                    class="avatar avatar-xs me-2 online avatar-rounded"
                                >
                                    <Image
                                        width={20}
                                        height={20}
                                        src={idx.src}
                                        alt="img"
                                    />
                                </span>{idx.name}
                            </div>
                        </td>
                        <td
                            ><SpkBadge
                                Color=""
                                CustomClass="bg-success-transparent"
                                >Delivered</SpkBadge
                            ></td
                        >
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={4}>
        <ShowCode
            title="Bordered warning"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={BasicTable5}
            dataCode={loopTable5}
        >
            <SpkTablescomponent
                Responsive={true}
                Bordered={true}
                tableClass="text-nowrap border-warning"
                header={[
                    { title: "Order" },
                    { title: "Date" },
                    { title: "Customer" },
                    { title: "Status" },
                ]}
            >
                {#each Warningtable as idx}
                    <tr>
                        <th scope="row">
                            {idx.order}
                        </th>
                        <td>
                            <SpkBadge Color="light" CustomClass="text-dark"
                                >{idx.date}</SpkBadge
                            >
                        </td>
                        <td>
                            <div class="d-flex align-items-center">
                                <span
                                    class="avatar avatar-xs me-2 online avatar-rounded"
                                >
                                    <Image
                                        width={20}
                                        height={20}
                                        src={idx.src}
                                        alt="img"
                                    />
                                </span>{idx.name}
                            </div>
                        </td>
                        <td
                            ><SpkBadge
                                Color=""
                                CustomClass="bg-warning-transparent"
                                >Accepted</SpkBadge
                            ></td
                        >
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xl={6}>
        <ShowCode
            title="Table Without Borders"
            customCardClass="custom-card"
            customCardBodyClass=""
            dataCode={loopTable6}
            svelteCode={basicTable6}
        >
            <SpkTablescomponent
                Responsive={true}
                borderless={true}
                tableClass="text-nowrap"
                header={[
                    { title: "User Name" },
                    { title: "Transaction Id" },
                    { title: "Created" },
                    { title: "Status" },
                ]}
            >
                {#each Borderdata as idx}
                    <tr>
                        <th scope="row">{idx.name}</th>
                        <td>{idx.transactionid}</td>
                        <td>{idx.date}</td>
                        <td
                            ><SpkBadge Color="" CustomClass={`bg-${idx.color}`}
                                >{idx.status}</SpkBadge
                            ></td
                        >
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Table Group Divideres"
            dataCode={loopTable7}
            svelteCode={basicTable7}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                tBodyClass="table-group-divider"
                header={[
                    { title: "Product" },
                    { title: "Seller" },
                    { title: "Sale Percentage" },
                    { title: "Quantity Sold" },
                ]}
            >
                {#each Groupdata as idx}
                    <tr>
                        <th scope="row">{idx.product}</th>
                        <td>{idx.seller}</td>
                        <td
                            ><a href="#!" class={`text-${idx.color}`}
                                >{idx.percent}<i
                                    class={`ri-arrow-${idx.icon}-fill ms-1`}
                                ></i></a
                            ></td
                        >
                        <td>{idx.sold}</td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>

<!-- End:: row-3 -->

<!-- Start:: row-4 -->

<Row>
    <Col xl={6}>
        <ShowCode
            title="Striped rows"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable8}
            dataCode={loopTable8}
        >
            <SpkTablescomponent
                Responsive={true}
                Striped={true}
                tableClass="text-nowrap"
                header={[
                    { title: "ID" },
                    { title: "Date" },
                    { title: "Customer" },
                    { title: "Action" },
                ]}
            >
                {#each Strippedtable as idx}
                    <tr>
                        <th scope="row">{idx.order}</th>
                        <td>{idx.date}</td>
                        <td>{idx.name}</td>
                        <td>
                            <SpkButton
                                color="success"
                                size="sm"
                                customClass="waves-effect waves-light"
                            >
                                <i
                                    class="ri-download-2-line align-middle me-2 d-inline-block"
                                ></i>Download
                            </SpkButton>
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Striped columns"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable9}
            dataCode={loopTable8}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap table-striped-columns"
                header={[
                    { title: "ID" },
                    { title: "Date" },
                    { title: "Customer" },
                    { title: "Action" },
                ]}
            >
                {#each Strippedtable as idx}
                    <tr>
                        <th scope="row">{idx.order}</th>
                        <td>{idx.date}</td>
                        <td>{idx.name}</td>
                        <td>
                            <SpkButton
                                color="danger"
                                size="sm"
                                customClass="waves-effect waves-light"
                            >
                                <i
                                    class="ri-delete-bin-line align-middle me-2 d-inline-block"
                                ></i>Delete
                            </SpkButton>
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>

<!-- End:: row-4 -->

<!-- Start:: row-5 -->

<Row>
    <Col xl={4}>
        <ShowCode
            title="Primary Table"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable10}
            dataCode={loopTable10}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap table-primary"
                header={[
                    { title: "#" },
                    { title: "First" },
                    { title: "Last" },
                    { title: "Handle" },
                ]}
            >
                {#each tablePrimary as idx}
                    <tr>
                        <th scope="row">{idx.id}</th>
                        <td>{idx.text1}</td>
                        <td>{idx.text2}</td>
                        <td>{idx.text3}</td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={4}>
        <ShowCode
            title="Secondary Table"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable11}
            dataCode={loopTable10}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap table-secondary"
                header={[
                    { title: "#" },
                    { title: "First" },
                    { title: "Last" },
                    { title: "Handle" },
                ]}
            >
                {#each tablePrimary as idx}
                    <tr>
                        <th scope="row">{idx.id}</th>
                        <td>{idx.text1}</td>
                        <td>{idx.text2}</td>
                        <td>{idx.text3}</td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={4}>
        <ShowCode
            title="Warning Table"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable12}
            dataCode={loopTable10}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap table-warning"
                header={[
                    { title: "#" },
                    { title: "First" },
                    { title: "Last" },
                    { title: "Handle" },
                ]}
            >
                {#each tablePrimary as idx}
                    <tr>
                        <th scope="row">{idx.id}</th>
                        <td>{idx.text1}</td>
                        <td>{idx.text2}</td>
                        <td>{idx.text3}</td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={4}>
        <ShowCode
            title="Danger Table"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable13}
            dataCode={loopTable10}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap table-danger"
                header={[
                    { title: "#" },
                    { title: "First" },
                    { title: "Last" },
                    { title: "Handle" },
                ]}
            >
                {#each tablePrimary as idx}
                    <tr>
                        <th scope="row">{idx.id}</th>
                        <td>{idx.text1}</td>
                        <td>{idx.text2}</td>
                        <td>{idx.text3}</td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={4}>
        <ShowCode
            title="Dark Table"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable14}
            dataCode={loopTable10}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap table-dark"
                header={[
                    { title: "#" },
                    { title: "First" },
                    { title: "Last" },
                    { title: "Handle" },
                ]}
            >
                {#each tablePrimary as idx}
                    <tr>
                        <th scope="row">{idx.id}</th>
                        <td>{idx.text1}</td>
                        <td>{idx.text2}</td>
                        <td>{idx.text3}</td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={4}>
        <ShowCode
            title="Success Table With Striped Rows"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable15}
            dataCode={loopTable10}
        >
            <SpkTablescomponent
                Responsive={true}
                Striped={true}
                tableClass="text-nowrap table-success"
                header={[
                    { title: "#" },
                    { title: "First" },
                    { title: "Last" },
                    { title: "Handle" },
                ]}
            >
                {#each tablePrimary as idx}
                    <tr>
                        <th scope="row">{idx.id}</th>
                        <td>{idx.text1}</td>
                        <td>{idx.text2}</td>
                        <td>{idx.text3}</td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>

<!-- End:: row-5 -->

<!-- Start:: row-6 -->

<Row>
    <Col xl={6}>
        <ShowCode
            title="Hoverable Rows"
            customCardClass="custom-card custom-table-tasks"
            svelteCode={basicTable16}
            dataCode={loopTable16}
        >
            <SpkTablescomponent
                Responsive={true}
                Hover={true}
                tableClass="text-nowrap"
                header={[
                    { title: "Product Manager" },
                    { title: "Category" },
                    { title: "Team" },
                    { title: "Status" },
                ]}
            >
                {#each Hoverabledata as idx}
                    <tr>
                        <td>
                            <div class="d-flex align-items-center">
                                <div
                                    class="avatar avatar-sm me-2 avatar-rounded"
                                >
                                    <Image
                                        height={28}
                                        width={28}
                                        src={idx.src}
                                        alt="img"
                                    />
                                </div>
                                <div>
                                    <div class="lh-1">
                                        <span>{idx.product}</span>
                                    </div>
                                    <div class="lh-1">
                                        <span class="fs-11 text-muted"
                                            >{idx.mail}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td
                            ><SpkBadge
                                CustomClass={`bg-${idx.color}-transparent`}
                                >{idx.category}</SpkBadge
                            ></td
                        >
                        <td>
                            {@html idx.team}
                        </td>
                        <td>
                            <Progress value={idx.status} class="progress-xs" />
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title=" Hoverable rows With striped rows"
            customCardClass="custom-card"
            svelteCode={basicTable17}
            dataCode={loopTable17}
        >
            <SpkTablescomponent
                Responsive={true}
                Striped={true}
                Hover={true}
                tableClass="text-nowrap"
                header={[
                    { title: "Invoice" },
                    { title: "Customer" },
                    { title: "Status" },
                    { title: "Date" },
                ]}
            >
                {#each Hoverable as idx}
                    <tr>
                        <th scope="row">{idx.text1}</th>
                        <td>
                            <div class="d-flex align-items-center">
                                <div
                                    class="avatar avatar-sm me-2 avatar-rounded"
                                >
                                    <Image
                                        height={28}
                                        width={28}
                                        src={idx.src}
                                        alt="img"
                                    />
                                </div>
                                <div>
                                    <div class="lh-1">
                                        <span>{idx.name}</span>
                                    </div>
                                    <div class="lh-1">
                                        <span class="fs-11 text-muted"
                                            >{idx.mail}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td
                            ><SpkBadge
                                Color=""
                                CustomClass={`${idx.class} bg-${idx.color}`}
                                ><i class={`ri-${idx.icon} align-middle me-1`}
                                ></i>{idx.text2}</SpkBadge
                            ></td
                        >
                        <td>{idx.date}</td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>

<!-- End:: row-6 -->

<!-- Start:: row-7 -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Table Head Primary"
            customCardClass="custom-card"
            svelteCode={basicTable18}
            dataCode={loopTable18}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                headerClass="table-primary"
                header={[
                    { title: "User Name" },
                    { title: "Transaction Id" },
                    { title: "Created" },
                    { title: "Status" },
                ]}
            >
                {#each Primaryhead as idx}
                    <tr>
                        <th scope="row">{idx.name}</th>
                        <td>{idx.text}</td>
                        <td>{idx.date}</td>
                        <td>
                            <div class="hstack gap-2 fs-15">
                                <a
                                    href="#!"
                                    class="btn btn-icon btn-sm btn-success-light rounded-pill"
                                    ><i class="ri-download-2-line"></i></a
                                >
                                <a
                                    href="#!"
                                    class="btn btn-icon btn-sm btn-info-light rounded-pill"
                                    ><i class="ri-edit-line"></i></a
                                >
                                <a
                                    href="#!"
                                    class="btn btn-icon btn-sm btn-danger-light rounded-pill"
                                    ><i class="ri-delete-bin-line"></i></a
                                >
                            </div>
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Table Head warning"
            customCardClass="custom-card"
            svelteCode={basicTable19}
            dataCode={loopTable19}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                headerClass="table-warning"
                header={[
                    { title: "User Name" },
                    { title: "Transaction Id" },
                    { title: "Created" },
                    { title: "Status" },
                ]}
            >
                {#each Warninghead as idx}
                    <tr>
                        <th scope="row">{idx.name}</th>
                        <td>{idx.text}</td>
                        <td>{idx.date}</td>
                        <td>
                            <SpkButton color={idx.color} size="sm"
                                >{idx.btn}</SpkButton
                            >
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Table Head Success"
            customCardClass="custom-card"
            svelteCode={basicTable20}
            dataCode={loopTable19}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                headerClass="table-success"
                header={[
                    { title: "User Name" },
                    { title: "Transaction Id" },
                    { title: "Created" },
                    { title: "Status" },
                ]}
            >
                {#each Warninghead as idx}
                    <tr>
                        <th scope="row">{idx.name}</th>
                        <td>{idx.text}</td>
                        <td>{idx.date}</td>
                        <td>
                            <SpkButton color={idx.color} size="sm"
                                >{idx.btn}</SpkButton
                            >
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Table Head Info"
            customCardClass="custom-card"
            svelteCode={basicTable21}
            dataCode={loopTable19}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                headerClass="table-info"
                header={[
                    { title: "User Name" },
                    { title: "Transaction Id" },
                    { title: "Created" },
                    { title: "Status" },
                ]}
            >
                {#each Warninghead as idx}
                    <tr>
                        <th scope="row">{idx.name}</th>
                        <td>{idx.text}</td>
                        <td>{idx.date}</td>
                        <td>
                            <SpkButton color={idx.color} size="sm"
                                >{idx.btn}</SpkButton
                            >
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Table Head Secondary"
            customCardClass="custom-card"
            svelteCode={basicTable22}
            dataCode={loopTable19}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                headerClass="table-secondary"
                header={[
                    { title: "User Name" },
                    { title: "Transaction Id" },
                    { title: "Created" },
                    { title: "Status" },
                ]}
            >
                {#each Warninghead as idx}
                    <tr>
                        <th scope="row">{idx.name}</th>
                        <td>{idx.text}</td>
                        <td>{idx.date}</td>
                        <td>
                            <SpkButton color={idx.color} size="sm"
                                >{idx.btn}</SpkButton
                            >
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Table Head Danger"
            customCardClass="custom-card"
            svelteCode={basicTable23}
            dataCode={loopTable19}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                headerClass="table-danger"
                header={[
                    { title: "User Name" },
                    { title: "Transaction Id" },
                    { title: "Created" },
                    { title: "Status" },
                ]}
            >
                {#each Warninghead as idx}
                    <tr>
                        <th scope="row">{idx.name}</th>
                        <td>{idx.text}</td>
                        <td>{idx.date}</td>
                        <td>
                            <SpkButton color={idx.color} size="sm"
                                >{idx.btn}</SpkButton
                            >
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>

<!-- End:: row-7 -->

<!-- Start:: row-8 -->

<Row>
    <Col xl={4}>
        <ShowCode
            title="Table Foot"
            customCardClass="custom-card"
            svelteCode={basicTable24}
            dataCode={loopTable24}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                footerClass="table-primary"
                headerClass="table-primary"
                header={[
                    { title: "S.No" },
                    { title: "Team" },
                    { title: "Matches Won" },
                    { title: "Win Ratio" },
                ]}
            >
                {#each Tablefoot as idx}
                    <tr>
                        <th scope="row">
                            {idx.text1}
                        </th>
                        <td>{idx.text2}</td>
                        <td>{idx.text3}</td>
                        <td><SpkBadge Color="primary">{idx.text4}</SpkBadge></td
                        >
                    </tr>
                {/each}
                <tr class="table-primary">
                    <th scope="row"> Total </th>
                    <td>United States</td>
                    <td>558</td>
                    <td><SpkBadge Color="primary">56%</SpkBadge></td>
                </tr>
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={4}>
        <ShowCode
            title="Table With Caption"
            customCardClass="custom-card"
            svelteCode={basicTable25}
            dataCode={loopTable25}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                headerContent={`<caption class='px-3'>Top 3 Countries</caption>`}
                header={[
                    { title: "S.No" },
                    { title: "Country" },
                    { title: "Medals Won" },
                    { title: "No Of Athletes" },
                ]}
            >
                {#each Captiondata as idx}
                    <tr>
                        <th scope="row">0{idx.id}</th>
                        <td>{idx.country}</td>
                        <td>{idx.won}<i class="ri-medal-line mx-2"></i></td>
                        <td>{idx.athletes}</td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={4}>
        <ShowCode
            title="Table With Top Caption"
            customCardClass="custom-card"
            svelteCode={basicTable26}
            dataCode={loopTable26}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap caption-top"
                headerContent={`<caption>Top IT Companies</caption>`}
                header={[
                    { title: "S.No" },
                    { title: "Name" },
                    { title: "Revenue" },
                    { title: "Country" },
                ]}
            >
                {#each Topcaptuiondata as idx}
                    <tr>
                        <th scope="row">{idx.id}</th>
                        <td>{idx.name}</td>
                        <td>{idx.revenue}</td>
                        <td>{idx.country}</td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>

<!-- End:: row-8 -->

<!-- Start:: row-9 -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Active Tables"
            customCardClass="custom-card"
            svelteCode={basicTable27}
            dataCode={loopTable27}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                header={[
                    { title: "Name" },
                    { title: "Created On" },
                    { title: "Number" },
                    { title: "Status" },
                ]}
            >
                {#each Activedata as idx}
                    <tr class={idx.class}>
                        <th scope="row">{idx.name}</th>
                        <td>{idx.create}</td>
                        <td class={idx.tdclass}>{idx.number}</td>
                        <td
                            ><SpkBadge CustomClass={`bg-${idx.color}`}
                                >{idx.status}</SpkBadge
                            ></td
                        >
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Small Tables"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable28}
            dataCode={loopTable28}
        >
            <SpkTablescomponent
                Responsive={true}
                Size="sm"
                tableClass="text-nowrap"
                header={[
                    { title: "Invoice" },
                    { title: "Created Date" },
                    { title: "Status" },
                    { title: "Action" },
                ]}
            >
                {#each Smalltables as idx}
                    <tr>
                        <th scope="row">
                            <div class="form-check">
                                <input
                                    id={idx.id}
                                    defaultChecked={idx.checked ===
                                        "defaultChecked"}
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                />
                                <div class="form-check-label">
                                    {idx.name}
                                </div>
                            </div>
                        </th>
                        <td>{idx.date}</td>
                        <td
                            ><SpkBadge
                                Color={idx.class}
                                CustomClass="bg-success-transparent"
                                >{idx.text}</SpkBadge
                            ></td
                        >
                        <td>
                            <div class="hstack gap-2 fs-15">
                                <a
                                    href="#!"
                                    class="btn btn-icon btn-sm btn-light"
                                    ><i class="ri-download-2-line"></i></a
                                >
                                <a
                                    href="#!"
                                    class="btn btn-icon btn-sm btn-light"
                                    ><i class="ri-edit-line"></i></a
                                >
                            </div>
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>

<!-- End:: row-9 -->

<!-- Start:: row-10 -->

<Row>
    <Col xl={6}>
        <ShowCode
            title="Color variants tables"
            customCardClass="custom-card"
            svelteCode={basicTable29}
            dataCode={loopTable29}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                header={[
                    { title: "Color" },
                    { title: "Client" },
                    { title: "State" },
                    { title: "Quantity" },
                    { title: "Total Price" },
                ]}
            >
                {#each ColorTables as idx}
                    <tr class={idx.bgcolor}>
                        <th scope="row">{idx.text}</th>
                        <td>{idx.name}</td>
                        <td
                            ><SpkBadge
                                Color=""
                                CustomClass={`${idx.class2} bg-${idx.color}`}
                                >Processed</SpkBadge
                            ></td
                        >
                        <td>{idx.quantity}</td>
                        <td>{idx.price}</td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Nesting"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={basicTable30}
        >
            <SpkTablescomponent
                Responsive={true}
                Bordered={true}
                Striped={true}
                tableClass="text-nowrap"
                header={[
                    { title: "#" },
                    { title: "First" },
                    { title: "Last" },
                    { title: "Handle" },
                ]}
            >
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <table class="table text-nowrap mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Alphabets</th>
                                    <th scope="col">Users</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">A</th>
                                    <td>Dino King</td>
                                    <td>dinoking231@gmail.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">B</th>
                                    <td>Poppins sams</td>
                                    <td>pops@gmail.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">C</th>
                                    <td>Brian Shaw</td>
                                    <td>swanbrian@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Jimmy</td>
                    <td>the Ostrich</td>
                    <td>Dummy Text</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Cobra Kai</td>
                    <td>the Snake</td>
                    <td>Another Name</td>
                </tr>
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>

<!-- End:: row-10 -->

<!-- Start:: row-11 -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<Row>
    <Col xl={12}>
        <ShowCode
            title="Always responsive"
            customCardClass="custom-card"
            svelteCode={basicTable31}
            dataCode={loopTable31}
        >
            <SpkTablescomponent
                Responsive={true}
                showCheckClass=""
                showCheckbox={true}
                showCheckid="checkboxNoLabel"
                tableClass="text-nowrap"
                header={[
                    { title: "Team Head" },
                    { title: "Category" },
                    { title: "Role" },
                    { title: "Gmail" },
                    { title: "Team" },
                    { title: "Work Progress" },
                    { title: "Revenue" },
                    { title: "Action" },
                ]}
            >
                {#each Responsivedata as idx}
                    <tr>
                        <th scope="row"
                            ><input
                                class="form-check-input"
                                type="checkbox"
                                id="checkboxNoLabel1"
                                value=""
                                aria-label="..."
                            /></th
                        >
                        <td>
                            <div class="d-flex align-items-center">
                                <span
                                    class="avatar avatar-xs me-2 online avatar-rounded"
                                >
                                    <Image
                                        width={20}
                                        height={20}
                                        src={idx.src}
                                        alt="img"
                                    />
                                </span>{idx.name}
                            </div>
                        </td>
                        <td>{idx.category}</td>
                        <td
                            ><SpkBadge
                                Color="primary-transparent"
                                CustomClass={`bg-${idx.color}-transparent`}
                                >{idx.role}</SpkBadge
                            ></td
                        >
                        <td>{idx.mail}</td>
                        <td>
                            {@html idx.team}
                        </td>
                        <td>
                            <Progress
                                value={idx.progress}
                                class="progress-xs"
                            />
                        </td>
                        <td>{idx.revenue}</td>

                        <td>
                            <div class="hstack gap-2 fs-15">
                                <a
                                    href="#!"
                                    class="btn btn-icon btn-sm btn-success"
                                    ><i class="ri-download-2-line"></i></a
                                >
                                <a
                                    href="#!"
                                    class="btn btn-icon btn-sm btn-info"
                                    ><i class="ri-edit-line"></i></a
                                >
                            </div>
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>

<!-- End:: row-11 -->

<!-- Start:: row-12 -->

<Row>
    <Col xl={12}>
        <ShowCode
            title="Vertical alignment"
            customCardClass="custom-card vertical-alignment-table"
            svelteCode={basicTable32}
            dataCode={loopTable32}
        >
            <SpkTablescomponent
                Responsive={true}
                tableClass="align-middle"
                header={[
                    { title: "Heading 1", headerClassname: "w-25" },
                    { title: "Heading 2", headerClassname: "w-25" },
                    { title: "Heading 3", headerClassname: "w-25" },
                    { title: "Heading 4", headerClassname: "w-25" },
                ]}
            >
                {#each VerticalTables as idx}
                    <tr class={idx.class1}>
                        <td
                            >{idx.text1} <code>{idx.code1}</code>
                            {idx.text2}</td
                        >
                        <td
                            >{idx.text1} <code>{idx.code1}</code>
                            {idx.text2}</td
                        >
                        <td class={idx.class2}
                            >{idx.text3} <code>{idx.code2}</code>
                            {idx.text4}</td
                        >
                        <td
                            >This here is some placeholder text, intended to
                            take up quite a bit of vertical space, to
                            demonstrate how the vertical alignment works in the
                            preceding cells.</td
                        >
                    </tr>
                {/each}
            </SpkTablescomponent>
        </ShowCode>
    </Col>
</Row>

<!-- End:: row-12 -->
