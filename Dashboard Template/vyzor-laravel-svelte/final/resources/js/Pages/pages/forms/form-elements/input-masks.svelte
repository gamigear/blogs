
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import SpkBasicCard from "@/shared/@spk/SpkBasicCard.svelte";
    import { Col, Row } from "@sveltestrap/sveltestrap";
    import { cleave } from "svelte-cleavejs";
</script>

<!-- Page Title -->
<svelte:head>
    <title>InputMasks | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Input Masks"
    activepage="Forms"
    subTitle=" Form Elements"
    page="Input Masks"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row>
    <Col xl={6}>
        <SpkBasicCard cardProps="custom-card" headerTitle=" Date Format-1">
            <div slot="customheader"></div>
            <div slot="content">
                <input
                    class="form-control date-format"
                    placeholder="DD-MM-YYYY"
                    use:cleave={{
                        date: true,
                        delimiter: "-",
                        datePattern: ["d", "m", "Y"],
                    }}
                />
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard cardProps="custom-card" headerTitle=" Date Format-2">
            <div slot="customheader"></div>
            <div slot="content">
                <input class="form-control date-format-1" placeholder="MM-DD-YYYY" use:cleave={{ date: true, delimiter: '-', datePattern: ['m', 'd', 'Y']}} />
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard cardProps="custom-card" headerTitle="Date Format-3">
            <div slot="customheader"></div>
            <div slot="content">
                <input class="form-control date-format-2" placeholder="MM-YY" use:cleave={{ date: true, delimiter: '-', datePattern: ['m', 'y']}} />
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard cardProps="custom-card" headerTitle="Number Formatting">
            <div slot="customheader"></div>
            <div slot="content">
                <input class="form-control number-format" placeholder="Number Here" use:cleave={{ numeral: true, numeralThousandsGroupStyle: 'thousand'}} />
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
       <SpkBasicCard cardProps="custom-card" headerTitle="Time Format-1">
            <div slot="customheader"></div>
            <div slot="content">
                <input class="form-control time-format-1" placeholder="hh:mm:ss" use:cleave={{ time: true, timePattern: ['h', 'm', 's']}} />
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard cardProps="custom-card" headerTitle="Time Format-2">
            <div slot="customheader"></div>
            <div slot="content">
                <input class="form-control time-format-2" placeholder="hh:mm" use:cleave={{ time: true, timePattern: ['h', 'm']}} />
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard cardProps="custom-card" headerTitle="Formatting Into Blocks">
            <div slot="customheader"></div>
            <div slot="content">
                <input class="form-control formatting-blocks" placeholder="ABCD EFG HIJ KLMN" use:cleave={{ blocks: [4, 3, 3, 4], uppercase: true}} />
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
         <SpkBasicCard cardProps="custom-card" headerTitle="Delimiter">
            <div slot="customheader"></div>
            <div slot="content">
                <input class="form-control delimiter" placeholder="ABC.DEF.GHi" use:cleave={{ delimiter: '·', blocks: [3, 3, 3], uppercase: true}} />
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
        <SpkBasicCard cardProps="custom-card" headerTitle="Delimiters">
            <div slot="customheader"></div>
            <div slot="content">
                <input class="form-control delimiters" placeholder="ABC/DEF/GHi-JK" use:cleave={{ delimiters: ['/', '/', '-'], blocks: [3, 3, 3, 2], uppercase: true}} />
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
       <SpkBasicCard cardProps="custom-card" headerTitle="Prefix">
            <div slot="customheader"></div>
            <div slot="content">
                <input class="form-control prefix-element" type="text" use:cleave={{ prefix: 'PREFIX', delimiter: '-', blocks: [6, 4, 4, 4], uppercase: true }} />
            </div>
        </SpkBasicCard>
    </Col>
    <Col xl={6}>
       <SpkBasicCard cardProps="custom-card" headerTitle=" Phone Number Formatting">
            <div slot="customheader"></div>
            <div slot="content">
                <input class="form-control phone-number"  placeholder="US(+1)" use:cleave={{ blocks: [2, 4, 3, 4],}} />
            </div>
        </SpkBasicCard>
    </Col>
</Row>
<!-- End:: row-1 -->
