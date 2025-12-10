<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        rangeslider1,
        rangeslider2,
        rangeslider3,
        rangeslider4,
    } from "@/shared/data/prism-code/formsprism";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import { Col, Input, Row } from "@sveltestrap/sveltestrap";
    import SpkBasicCard from "@/shared/@spk/SpkBasicCard.svelte";
    import {
        initializeSliders,
        initializeNonLinearSlider,
        initializeColorSliders,
        createLockedSlider,
        lockSliders,
        initializePipsSlider,
        initializeSoftSlider,
    } from "@/shared/data/forms/rangesliderdata";
    import { onMount } from "svelte"; // Import the function from slider

    let sliderStart;
    let FitHandles;
    let Rounded;
    let Square;
    let sliderPrimary;
    let sliderSecondary;
    let sliderWarning;
    let sliderInfo;
    let sliderSuccess;
    let sliderDanger;
    let verticalSlider;
    let colorSlider;
    let tooltipSlider;
    let marginSlider;
    //
    let nonlinearSlider;
    let lowerValue;
    let upperValue;
    //
    let sliders = [];
    let resultElement;
    //
    let pipsSlider;
    let softSlider;
    //
    let slider1;
    let slider2;
    let lockButton;
    let slider1Value = 60;
    let slider2Value = 80;
    onMount(() => {
        // Initialize all sliders by passing DOM references
        initializeSliders(
            sliderStart,
            FitHandles,
            Rounded,
            Square,
            sliderPrimary,
            marginSlider,
            sliderSecondary,
            sliderWarning,
            sliderInfo,
            sliderSuccess,
            sliderDanger,
            verticalSlider,
            colorSlider,
            tooltipSlider,
        );
        // Initialize the non-linear slider and pass the DOM references
        initializeNonLinearSlider(nonlinearSlider, lowerValue, upperValue);
        // Initialize the sliders and pass the resultElement reference
        initializeColorSliders(sliders, resultElement);
        // Initialize the sliders after the component is mounted
        initializePipsSlider(pipsSlider);
        initializeSoftSlider(softSlider);
        // Create the sliders and set the lock functionality after the component is mounted
        createLockedSlider(slider1, 60, 50, 100, (values, handle) => {
            slider1Value = Number(values[handle]);
        });

        createLockedSlider(slider2, 80, 50, 100, (values, handle) => {
            slider2Value = Number(values[handle]);
        });
        lockSliders(lockButton, slider1, slider2);
    });
</script>

<!-- Page Title -->
<svelte:head>
    <title>RangeSlider | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Range Slider"
    activepage="Forms"
    subTitle=" Form Elements"
    page="Range Slider"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row>
    <Col xl={6}>
        <ShowCode
            title="Default Range"
            customCardClass="overflow-hidden"
            svelteCode={rangeslider1}
        >
            <Input type="range" id="customRange1" />
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Disabled Range"
            customCardClass="overflow-hidden"
            svelteCode={rangeslider2}
        >
            <Input type="range" id="disabledRange" disabled />
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Range With Min and Max Values"
            customCardClass="overflow-hidden"
            svelteCode={rangeslider3}
        >
            <Input
                type="range"
                min={0}
                max={100}
                step={10}
                class="form-range"
                placeholder="range placeholder"
                id="customRange2"
            />
        </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
            title="Range With Steps"
            customCardClass="overflow-hidden"
            svelteCode={rangeslider4}
        >
            <Input
                type="range"
                min={0}
                max={100}
                step={0.5}
                class="form-range"
                placeholder="range placeholder"
                id="customRange3"
            />
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<h6 class="mb-3">noUiSlider:</h6>
<Row>
    <Col xl={6}>
        <SpkBasicCard
            headerTitle=" Default-Styling"
            cardProps="overflow-hidden"
        >
            <div slot="customheader"></div>
            <div slot="content">
                <div id="slider" bind:this={sliderStart}></div>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard headerTitle="Fit Handles" cardProps="overflow-hidden">
            <div slot="customheader"></div>
            <div slot="content">
                <div id="slider-fit" bind:this={FitHandles}></div>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard headerTitle="Rounded Styling" cardProps="overflow-hidden">
            <div slot="customheader"></div>
            <div slot="content">
                <div id="slider-round" bind:this={Rounded}></div>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard headerTitle="Square Styling" cardProps="overflow-hidden">
            <div slot="customheader"></div>
            <div slot="content">
                <div id="slider-square" bind:this={Square}></div>
            </div>
        </SpkBasicCard>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <Col xl={3}>
        <SpkBasicCard
            headerTitle=" Color Picker Slider"
            cardProps="overflow-hidden"
        >
            <div slot="customheader"></div>
            <div slot="content">
                <div class="sliders" id="color1" bind:this={sliders[0]}></div>
                <div class="sliders" id="color2" bind:this={sliders[1]}></div>
                <div class="sliders" id="color3" bind:this={sliders[2]}></div>
                <div id="result" bind:this={resultElement}></div>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <Col xl={12}>
            <SpkBasicCard
                headerTitle="Locking Sliders"
                cardProps="overflow-hidden"
            >
                <div slot="customheader"></div>
                <div slot="content">
                    <div id="slider1" bind:this={slider1}></div>
                    <span id="slider1-span" class="my-1">{slider1Value}</span>
                    <div id="slider2" bind:this={slider2}></div>
                    <span id="slider2-span" class="my-1">{slider2Value}</span>
                    <button
                        id="lockbutton"
                        class="btn btn-sm btn-primary float-end mt-4"
                        bind:this={lockButton}>Lock</button
                    >
                </div>
            </SpkBasicCard>
        </Col>
        <Col xl={12}>
            <SpkBasicCard
                headerTitle="Merging tooltips slider"
                cardProps="overflow-hidden"
            >
                <div slot="customheader"></div>
                <div slot="content">
                    <div id="merging-tooltips" bind:this={marginSlider}></div>
                </div>
            </SpkBasicCard>
        </Col>
    </Col>
    <Col xl={3}>
        <Row>
            <Col xl={12}>
                <SpkBasicCard
                    headerTitle="Non Linear Slider"
                    cardProps="overflow-hidden"
                >
                    <div slot="customheader"></div>
                    <div slot="content">
                        <div id="nonlinear" bind:this={nonlinearSlider}></div>
                        <div
                            id="lower-value"
                            class="mt-5"
                            bind:this={lowerValue}
                        ></div>
                        <div
                            id="upper-value"
                            class="mt-2"
                            bind:this={upperValue}
                        ></div>
                    </div>
                </SpkBasicCard>
            </Col>
            <Col xl={12}>
                <SpkBasicCard
                    headerTitle=" Sliding Handles Tooltips"
                    cardProps="overflow-hidden"
                >
                    <div slot="customheader"></div>
                    <div slot="content">
                        <div id="slider-hide" bind:this={tooltipSlider}></div>
                    </div>
                </SpkBasicCard>
            </Col>
        </Row>
    </Col>
</Row>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<Row>
    <Col xl={10}>
        <SpkBasicCard
            headerTitle="Colored Connect Elements"
            cardProps="overflow-hidden"
        >
            <div slot="customheader"></div>
            <div slot="content">
                <div id="color-slider" bind:this={colorSlider}></div>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={2}>
        <SpkBasicCard headerTitle="Slider Toggle" cardProps="overflow-hidden">
            <div slot="customheader"></div>
            <div slot="content">
                <div id="slider-toggle" bind:this={verticalSlider}></div>
            </div>
        </SpkBasicCard>
    </Col>
</Row>
<!-- End:: row-4 -->

<!-- Start:: row-5 -->
<Row>
    <Col xl={12}>
        <SpkBasicCard
            headerTitle=" Toggle Movement By Clicking Pips"
            cardBodyProps="pb-5"
            cardProps="overflow-hidden"
        >
            <div slot="customheader"></div>
            <div slot="content">
                <div id="slider-pips" bind:this={pipsSlider}></div>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={12}>
        <SpkBasicCard
            headerTitle=" Soft Limits"
            cardBodyProps="pb-5"
            cardProps="overflow-hidden"
        >
            <div slot="customheader"></div>
            <div slot="content">
                <div id="soft" bind:this={softSlider}></div>
            </div>
        </SpkBasicCard>
    </Col>
</Row>
<!-- End:: row-5 -->

<!-- Start:: row-6 -->
<h6 class="mb-3">noUiSlider Colors:</h6>
<Row>
    <Col xl={6}>
        <SpkBasicCard headerTitle="Primary" cardProps="overflow-hidden">
            <div slot="customheader"></div>
            <div slot="content">
                <div
                    id="primary-colored-slider"
                    bind:this={sliderPrimary}
                ></div>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard headerTitle="Secondary" cardProps="overflow-hidden">
            <div slot="customheader"></div>
            <div slot="content">
                <div
                    id="secondary-colored-slider"
                    bind:this={sliderSecondary}
                ></div>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard headerTitle="Warning" cardProps="overflow-hidden">
            <div slot="customheader"></div>
            <div slot="content">
                <div
                    id="warning-colored-slider"
                    bind:this={sliderWarning}
                ></div>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard headerTitle="Info" cardProps="overflow-hidden">
            <div slot="customheader"></div>
            <div slot="content">
                <div id="info-colored-slider" bind:this={sliderInfo}></div>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard headerTitle="Success" cardProps="overflow-hidden">
            <div slot="customheader"></div>
            <div slot="content">
                <div
                    id="success-colored-slider"
                    bind:this={sliderSuccess}
                ></div>
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard headerTitle="Danger" cardProps="overflow-hidden">
            <div slot="customheader"></div>
            <div slot="content">
                <div id="danger-colored-slider" bind:this={sliderDanger}></div>
            </div>
        </SpkBasicCard>
    </Col>
</Row>
<!-- End:: row-6 -->
