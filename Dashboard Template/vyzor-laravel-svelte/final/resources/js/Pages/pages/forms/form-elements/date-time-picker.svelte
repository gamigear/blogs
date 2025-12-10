<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        InputGroup,
        InputGroupText,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { DateInput, localeFromDateFnsLocale } from "date-picker-svelte";
    import { ru } from "date-fns/locale";
    let date = new Date();
    let date1 = new Date();
    let date2 = new Date();
    let date3 = new Date();
    let date4 = new Date();
    //  disabling dates
    let date5 = new Date();
    const isWeekend = (d) => d.getDay() === 0 || d.getDay() === 6;

    let date6 = new Date();
    const locale = localeFromDateFnsLocale(ru);
</script>

<!-- Page Title -->
<svelte:head>
    <title>DateTimePicker | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Date & Time Pickers"
    activepage="Form Elements"
    page="Date & Time Pickers"
/>
<!-- Page Header Close -->

<Row>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Basic Date picker</div>
            </CardHeader>
            <CardBody class="custom-time-picker custom-date-picker">
                <div class="form-group">
                    <InputGroup class="datepicker-inputwraper custom-input-group">
                        <InputGroupText class="input-group-text text-muted">
                            <i class="ri-calendar-line"></i></InputGroupText
                        >
                        <DateInput bind:value={date} class="form-control" format="yyyy-MM-dd"  />
                    </InputGroup>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Min/Max Date Boundaries</div>
            </CardHeader>
            <CardBody class="custom-time-picker custom-date-picker">
                <div class="form-group">
                    <InputGroup class="datepicker-inputwraper custom-input-group">
                        <InputGroupText class="input-group-text text-muted">
                            <i class="ri-calendar-line"></i>
                        </InputGroupText>
                        <DateInput
                            class="form-control"
                            format="yyyy-MM-dd"
                            bind:value={date1}
                            min={new Date(2020, 0, 1)}
                            max={new Date(2026, 11, 31)}
                        />
                    </InputGroup>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">
                    Date & Time Picker with Custom Format
                </div>
            </CardHeader>
            <CardBody class="custom-date-picker">
                <div class="form-group">
                    <InputGroup class="datepicker-inputwraper custom-input-group">
                        <InputGroupText class="input-group-text text-muted">
                            <i class="ri-calendar-line"></i>
                        </InputGroupText>
                        <DateInput
                            class="form-control"
                            bind:value={date2}
                            format="yyyy-MM-dd HH:mm"
                            timePrecision="minute"
                        />
                    </InputGroup>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">
                    Placeholder, Required, and Disabled States
                </div>
            </CardHeader>
            <CardBody class="custom-time-picker  custom-date-picker">
                <div class="form-group">
                    <InputGroup class="datepicker-inputwraper custom-input-group">
                        <InputGroupText class="input-group-text text-muted">
                            <i class="ri-calendar-line"></i>
                        </InputGroupText>
                        <DateInput
                            bind:value={date3}
                            class="form-control"
                            placeholder="Select a start date"
                            format="yyyy-MM-dd"
                            required={true}
                            disabled={false}
                        />
                    </InputGroup>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Close Calendar on Selection</div>
            </CardHeader>
            <CardBody class="custom-time-picker  custom-date-picker">
                <div class="form-group">
                    <InputGroup class="datepicker-inputwraper custom-input-group">
                        <InputGroupText class="input-group-text text-muted">
                            <i class="ri-calendar-line"></i>
                        </InputGroupText>
                        <DateInput
                            bind:value={date}
                            class="form-control"
                            format="yyyy-MM-dd"
                            closeOnSelection={true}
                        />
                    </InputGroup>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">
                    Dynamic Positioning and Browsing Without Selecting
                </div>
            </CardHeader>
            <CardBody class="custom-time-picker custom-date-picker ">
                <div class="form-group">
                    <InputGroup class="datepicker-inputwraper custom-input-group">
                        <InputGroupText class="input-group-text text-muted">
                            <i class="ri-calendar-line"></i>
                        </InputGroupText>
                        <DateInput
                            class="form-control"
                            bind:value={date4}
                            format="yyyy-MM-dd"
                            dynamicPositioning={true}
                            browseWithoutSelecting={true}
                        />
                    </InputGroup>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Disable Specific Dates</div>
            </CardHeader>
            <CardBody
                class="custom-time-picker datedropdown-custom custom-date-picker"
            >
                <div class="form-group">
                    <InputGroup class="datepicker-inputwraper custom-input-group">
                        <InputGroupText class="input-group-text text-muted">
                            <i class="ri-calendar-line"></i>
                        </InputGroupText>
                        <DateInput
                            bind:value={date5}
                            isDisabledDate={isWeekend}
                            class="form-control"
                            format="yyyy-MM-dd"
                        />
                    </InputGroup>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xl={6}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Locale Support (Eg: Russian)</div>
            </CardHeader>
            <CardBody
                class="custom-time-picker Locale-datepicker datedropdown-custom custom-date-picker"
            >
                <div class="form-group">
                    <InputGroup class="datepicker-inputwraper custom-input-group">
                        <InputGroupText class="input-group-text text-muted">
                            <i class="ri-calendar-line"></i>
                        </InputGroupText>
                        <DateInput
                            bind:value={date6}
                            {locale}
                            format="yyyy-MM-dd"
                            class="form-control"
                        />
                    </InputGroup>
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>
