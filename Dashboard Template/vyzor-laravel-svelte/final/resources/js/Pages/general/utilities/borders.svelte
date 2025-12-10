<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import {
        border1,
        border2,
        border3,
        border4,
        border5,
        border6,
        border7,
        border8,
    } from "@/shared/data/prism-code/utilitiesprism";
    import { Col, Image, Row } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Borders | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Borders" activepage="Utilities" page="Borders" />
<!-- Page Header Close -->

<!-- {/* Start:: row-1 */} -->

<Row>
    <Col xl={12}>
        <ShowCode
            title="Borders"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={border1}
        >
            <span class="border border-container"></span>
            <span class="border-top border-container"></span>
            <span class="border-end border-container"></span>
            <span class="border-bottom border-container"></span>
            <span class="border-start border-container"></span>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Remove borders"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={border2}
        >
            <span class="border-0 border-container"></span>
            <span class="border border-top-0 border-container"></span>
            <span class="border border-end-0 border-container"></span>
            <span class="border border-bottom-0 border-container"></span>
            <span class="border border-start-0 border-container"></span>
        </ShowCode>
    </Col>
</Row>

<!-- {/* End:: row-1 */} -->

<!-- {/* Start:: row-2 */} -->

<Row>
    <Col xl={12}>
        <ShowCode
            title="Border Widths"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={border3}
        >
            <span class="border border-container border-1"></span>
            <span class="border border-container border-2"></span>
            <span class="border border-container border-3"></span>
            <span class="border border-container border-4"></span>
            <span class="border border-container border-5"></span>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Border colors"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={border4}
        >
            <span class="border border-container border-primary"></span>
            <span class="border border-container border-secondary"></span>
            <span class="border border-container border-success"></span>
            <span class="border border-container border-danger"></span>
            <span class="border border-container border-warning"></span>
            <span class="border border-container border-info"></span>
            <span class="border border-container border-light"></span>
            <span class="border border-container border-dark"></span>
            <span class="border border-container border-white"></span>
        </ShowCode>
    </Col>
</Row>

<!-- {/* End:: row-2 */} -->

<!-- {/* Start:: row-4 */} -->

<Row>
    <Col xl={12}>
        <ShowCode
            title="Border color Styling"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={border5}
        >
            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label"
                    >Email address</label
                >
                <input
                    type="email"
                    class="form-control border-success"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                />
            </div>
            <div class="h4 pb-3 mb-4 text-danger border-bottom border-danger">
                Below Shows Danger Border
            </div>
            <div
                class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1"
            >
                Customizing borders with background colors
            </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Border with opacity"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={border6}
        >
            <div class="border border-success p-2 mb-2">
                This is default success border
            </div>
            <div class="border border-success p-2 mb-2 border-opacity-75">
                This is 75% opacity success border
            </div>
            <div class="border border-success p-2 mb-2 border-opacity-50">
                This is 50% opacity success border
            </div>
            <div class="border border-success p-2 mb-2 border-opacity-25">
                This is 25% opacity success border
            </div>
            <div class="border border-success p-2 border-opacity-10">
                This is 10% opacity success border
            </div>
        </ShowCode>
    </Col>
</Row>

<!-- {/* End:: row-4 */} -->

<!-- {/* Start:: row-3 */} -->

<Row>
    <Col xl={12}>
        <ShowCode
            title="Border Radius"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={border7}
        >
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img rounded"
                alt="..."
            />
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img rounded-top"
                alt="..."
            />
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img rounded-end"
                alt="..."
            />
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img rounded-bottom"
                alt="..."
            />
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img rounded-start"
                alt="..."
            />
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img rounded-circle"
                alt="..."
            />
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img  rounded-pill"
                alt="..."
            />
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode
            title="Sizes"
            customCardClass="custom-card"
            customCardBodyClass=""
            svelteCode={border8}
        >
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img bd-placeholder-img rounded-0"
                alt="..."
            />
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img bd-placeholder-img rounded-1"
                alt="..."
            />
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img bd-placeholder-img rounded-2"
                alt="..."
            />
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img bd-placeholder-img rounded-3"
                alt="..."
            />
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img bd-placeholder-img rounded-4"
                alt="..."
            />
            <Image
                src="../../images/media/media-58.jpg"
                class="bd-placeholder-img bd-placeholder-img rounded-5"
                alt="..."
            />
        </ShowCode>
    </Col>
</Row>

<!-- /* End:: row-3 */ -->
