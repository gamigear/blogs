<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Drag,
        Drag1,
        Drag10,
        Drag11,
        Drag12,
        Drag2,
        Drag3,
        Drag4,
        Drag5,
        Drag6,
        Drag7,
        Drag8,
        Drag9,
    } from "@/shared/data/adavanec-ui/sortabledata";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        ListGroupItem,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";

    import SortablePkg from "sortablejs";
    // but only on client-side - check for window
    let Sortable = SortablePkg;
    let MultiDrag = Sortable.MultiDrag || SortablePkg.MultiDrag;

    if (MultiDrag) {
        Sortable.mount(new MultiDrag());
    }

    let swap = Sortable.Swap || SortablePkg.Swap;
    if (swap) {
        Sortable.mount(new swap());
    }

    let listContainer;
    let containerA;
    let containerB;
    let cloningA;
    let cloningB;
    let disableA;
    let disableB;
    let HandleDrag;
    let filterDrag;
    let sortableGrid;
    let multiDrag;
    let swapDrag;
    onMount(() => {
        new Sortable(listContainer, {
            animation: 150,
        });
        new Sortable(containerA, {
            group: "shared", // shared group name enables drag between lists
            animation: 150,
        });
        new Sortable(containerB, {
            group: "shared", // shared group name enables drag between lists
            animation: 150,
        });
        new Sortable(cloningA, {
            group: { name: "shared", pull: "clone" }, // shared group name enables drag between lists
            animation: 150,
        });
        new Sortable(cloningB, {
            group: { name: "shared", pull: "clone" }, // shared group name enables drag between lists
            animation: 150,
        });
        new Sortable(disableA, {
            group: { name: "shared", pull: "clone", put: false }, // shared group name enables drag between lists
            animation: 150,
            sort: false, // To disable sorting: set sort to false
        });
        new Sortable(disableB, {
            group: { name: "shared", pull: "clone", put: false }, // shared group name enables drag between lists
            animation: 150,
            sort: false, // To disable sorting: set sort to false
        });
        new Sortable(HandleDrag, {
            handle: ".handle",
            animation: 150,
        });
        new Sortable(filterDrag, {
            filter: ".addImageButtonContainer",
            dragClass: "sortableDrag",
            animation: 200,
        });
        new Sortable(sortableGrid, {
            filter: ".addImageButtonContainer",
            dragClass: "sortableDrag",
            animation: 200,
        });
        new Sortable(multiDrag, {
            multiDrag: true,
            filter: ".addImageButtonContainer",
            dragClass: "sortableDrag",
            animation: 200,
            fallbackOnBody: true,
        });
        new Sortable(swapDrag, {
            swap: true,
            dragClass: "sortableDrag",
            filter: ".addImageButtonContainer",
            animation: 200,
            fallbackOnBody: true,
        });
    });

    let rootEl;
    let level1Els = {};
    let level2Els = {};

    function reorder(list, from, to) {
        const item = list.splice(from, 1)[0];
        list.splice(to, 0, item);
    }

    function setupSortable(list, id) {
        let el;

        if (id === "root") {
            el = rootEl;
        } else {
            el = level1Els[id] || level2Els[id];
        }

        if (!el) return;

        new Sortable(el, {
            group: "nested",
            animation: 200,
            fallbackOnBody: true,
            dragClass: "sortableDrag",
            handle: ".list-group-item",
            filter: ".addImageButtonContainer",
            draggable: ".list-group-item",
            onEnd: (evt) => {
                if (
                    evt.oldIndex == null ||
                    evt.newIndex == null ||
                    evt.oldIndex === evt.newIndex
                )
                    return;
                reorder(list, evt.oldIndex, evt.newIndex);
            },
        });

        list.forEach((item) => {
            if (item.children) {
                setupSortable(item.children, `level1-${item.id}`);
                item.children.forEach((child) => {
                    if (child.children) {
                        setupSortable(
                            child.children,
                            `level2-${item.id}-${child.id}`,
                        );
                    }
                });
            }
        });
    }

    onMount(() => {
        setupSortable(Drag11, "root");
    });
</script>

<!-- Page Title -->
<svelte:head>
    <title>SortableJs | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Sortable JS"
    activepage="Advanced Ui"
    page="Sortable JS"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={4}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">SIMPLE LIST</div>
            </CardHeader>
            <CardBody>
                <ol
                    class="list-group sortable-list list-group-numbered"
                    id="simple-list"
                    bind:this={listContainer}
                >
                    {#each Drag as item}
                        <ListGroupItem>{item.name}</ListGroupItem>
                    {/each}
                </ol>
            </CardBody>
        </Card>
    </Col>
    <Col xl={8}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">SHARED LISTS</div>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col xl={6}>
                        <ol
                            class="list-group sortable-list list-group-numbered"
                            id="simple-list"
                            bind:this={containerA}
                        >
                            {#each Drag1 as item}
                                <ListGroupItem>{item.name}</ListGroupItem>
                            {/each}
                        </ol>
                    </Col>
                    <Col xl={6}>
                        <ol
                            class="list-group sortable-list list-group-numbered"
                            id="shared-right"
                            bind:this={containerB}
                        >
                            {#each Drag2 as item}
                                <ListGroupItem>{item.name}</ListGroupItem>
                            {/each}
                        </ol>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->

<!-- Start:: row-2 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">CLONING</div>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col xl={6}>
                        <ul
                            class="list-group sortable-list"
                            id="cloning-left"
                            bind:this={cloningA}
                        >
                            {#each Drag8 as item}
                                <ListGroupItem class=""
                                    >{item.name}</ListGroupItem
                                >
                            {/each}
                        </ul>
                    </Col>
                    <Col xl={6}>
                        <ul
                            class="list-group sortable-list"
                            id="cloning-right"
                            bind:this={cloningB}
                        >
                            {#each Drag9 as item}
                                <ListGroupItem class=""
                                    >{item.name}</ListGroupItem
                                >
                            {/each}
                        </ul>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">DISABLING SORTING</div>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col xl={6}>
                        <ul
                            class="list-group sortable-list"
                            Id="disabling-sorting-left"
                            bind:this={disableA}
                        >
                            {#each Drag10 as item}
                                <ListGroupItem class=""
                                    >{item.name}</ListGroupItem
                                >
                            {/each}
                        </ul>
                    </Col>
                    <Col xl={6}>
                        <ul
                            class="list-group sortable-list"
                            Id="disabling-sorting-right"
                            bind:this={disableB}
                        >
                            {#each Drag3 as item}
                                <ListGroupItem class=""
                                    >{item.name}</ListGroupItem
                                >
                            {/each}
                        </ul>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-2 -->

<!-- Start:: row-3 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">SORTING WITH HANDLE</div>
            </CardHeader>
            <CardBody>
                <ul
                    class="list-group sortable-list list-item-numbered sortable-with-handle"
                    bind:this={HandleDrag}
                >
                    {#each Drag12 as item}
                        <ListGroupItem class="d-flex align-items-center">
                            <i
                                class="ri-drag-move-2-fill me-2 text-dark fs-16 handle lh-1"
                            ></i>
                            {item.name}
                        </ListGroupItem>
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">SORTING WITH FILTER</div>
            </CardHeader>
            <CardBody>
                <ul
                    class="list-group sortable-list"
                    id="sorting-with-filter"
                    bind:this={filterDrag}
                >
                    {#each Drag4 as item}
                        <ListGroupItem class={`list-group-item ${item.filter}`}
                            >{item.name}</ListGroupItem
                        >
                    {/each}
                </ul>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-3 -->

<!-- Start:: row-4 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">SORTABLE GRID</div>
            </CardHeader>
            <CardBody id="sortable-grid">
                <div bind:this={sortableGrid}>
                    {#each Drag7 as item}
                        <div class="grid-square">
                            <span class="fw-medium">{item.name}</span>
                        </div>
                    {/each}
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- End:: row-4 -->

<!-- Start:: row-5 -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">NESTED SORTABLE</div>
            </CardHeader>
            <CardBody>
                <div
                    id="nestedSortables"
                    class="list-group col nested-sortable"
                >
                    <div bind:this={rootEl} class="list-group nested-sortable">
                        {#each Drag11 as item (item.id)}
                            <div
                                class={`list-group-item nested-1 ${item.children ? "nested-1" : ""}`}
                                draggable={item.draggable === false
                                    ? "false"
                                    : "true"}
                            >
                                {item.name}

                                {#if item.children}
                                    <div
                                        class="list-group nested-sortable"
                                        bind:this={level1Els[item.id]}
                                    >
                                        {#each item.children as child (child.id)}
                                            <div
                                                class={`list-group-item nested-2 ${child.children ? "nested-2" : ""}`}
                                                draggable={child.draggable ===
                                                false
                                                    ? "false"
                                                    : "true"}
                                            >
                                                {child.name}

                                                {#if child.children}
                                                    <div
                                                        class="list-group nested-sortable"
                                                        bind:this={
                                                            level2Els[
                                                                `${item.id}-${child.id}`
                                                            ]
                                                        }
                                                    >
                                                        {#each child.children as grandchild (grandchild.id)}
                                                            <div
                                                                class="list-group-item nested-3"
                                                                draggable={grandchild.draggable ===
                                                                false
                                                                    ? "false"
                                                                    : "true"}
                                                            >
                                                                {grandchild.name}
                                                            </div>
                                                        {/each}
                                                    </div>
                                                {/if}
                                            </div>
                                        {/each}
                                    </div>
                                {/if}
                            </div>
                        {/each}
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Row>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">MULTIPLE DRAG</div>
                    </CardHeader>
                    <CardBody>
                        <ul
                            class="list-group sortable-list"
                            id="multiple-drag"
                            bind:this={multiDrag}
                        >
                            {#each Drag5 as item}
                                <ListGroupItem class=""
                                    >{item.name}</ListGroupItem
                                >
                            {/each}
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={12}>
                <Card class="custom-card">
                    <CardHeader>
                        <div class="card-title">SWAP</div>
                    </CardHeader>
                    <CardBody>
                        <ul
                            class="list-group sortable-list"
                            id="sortable-swap"
                            bind:this={swapDrag}
                        >
                            {#each Drag6 as item}
                                <ListGroupItem class=""
                                    >{item.name}</ListGroupItem
                                >
                            {/each}
                            <!-- <ReactSortable multiDrag filter=".addImageButtonContainer" dragClass="sortableDrag" list={swapList} swap={true} setList={setswapList} animation={200} easing="ease-out">
                                            {swapList.map(item => (
                                                <ListGroup.Item class="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable> -->
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>

<!-- End:: row-5 -->
