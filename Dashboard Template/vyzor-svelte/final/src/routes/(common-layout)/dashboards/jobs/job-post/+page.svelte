<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        CategoriesSelect,
        CountrySelect,
        Employeesname,
        Genderselect,
        JobSelect,
        Languagesselect,
        PrioritySelect,
        Qualificationselect,
        Salaryselect,
        Skillselect,
        Vacancieselect,
        WorkSelect,
    } from "$lib/data/dashboards/jobs/jobpostdata";
    import {
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Input,
        Label,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { DateInput } from "date-picker-svelte";
    import Select from "svelte-select";

    let date = new Date();
    let date1 = new Date();
</script>

<!-- Page Title -->
<svelte:head>
    <title>JobPost | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader
    homepage="Job Post"
    subTitle="Jobs"
    activepage="Dashboards"
    page="Job Post"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xxl={3} xl={4} class="">
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Assign To Employer</div>
            </CardHeader>
            <CardBody>
                <Col xl={12}>
                     <Label for="Company-Name" class="">Employer Name</Label>
                    <Select
                        items={Employeesname}
                        clearable={false}
                                    showChevron={true}
                        value={Employeesname[0]}

                    />
                </Col>
            </CardBody>
        </Card>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Company Details</div>
            </CardHeader>
            <CardBody>
                <Row class="gy-3">
                    <Col xl={12}>
                        <Label for="Company-Name" class="">Company Name</Label>
                        <Input
                            type="text"
                            class=""
                            id="Company-Name"
                            placeholder="Company Name"
                            defaultValue="Obligation Pvt.Ltd"
                        />
                    </Col>
                    <Col xl={12}>
                        <Label for="Company-Website" class=""
                            >Company Website</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="Company-Website"
                            placeholder="Company Website"
                            defaultValue="http//www.obligationpvtltd.com"
                        />
                    </Col>
                    <Col xl={12}>
                        <Label class="">Country</Label>
                        <Select
                            items={CountrySelect}
                            clearable={false}
                                    showChevron={true}
                            value={CountrySelect[0]}
                        />
                    </Col>
                    <Col xl={12}>
                        <Label for="Company-Address" class="">Address</Label>
                        <Input
                            type="text"
                            class=""
                            id="Company-Address"
                            placeholder="Company Address"
                            defaultValue="USA"
                        />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={9} xl={8} class="">
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">Post New Job</div>
            </CardHeader>
            <CardBody>
                <Row class="gy-4 mb-4">
                    <Col xl={6}>
                        <Label for="job-title" class="">Job Title</Label>
                        <Input
                            type="text"
                            class=""
                            id="job-title"
                            placeholder="Job Title"
                            defaultValue="Web Developer"
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="">Job Category</Label>
                        <Select
                            items={CategoriesSelect}
                            value={CategoriesSelect[0]}
                            clearable={false}
                                    showChevron={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="">Working Experience</Label>
                        <Select
                            items={WorkSelect}
                            value={WorkSelect[0]}
                           clearable={false}
                                    showChevron={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="">Job Type</Label>
                        <Select
                            items={JobSelect}
                            value={JobSelect[0]}
                            clearable={false}
                                    showChevron={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="">Priority</Label>
                        <Select
                            items={PrioritySelect}
                            value={PrioritySelect[0]}
                            clearable={false}
                                    showChevron={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="">Vacancies</Label>
                        <Select
                            items={Vacancieselect}
                            value={Vacancieselect[0]}
                            clearable={false}
                                    showChevron={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="">Salary</Label>
                        <Select
                            items={Salaryselect}
                            value={Salaryselect[0]}
                            clearable={false}
                                    showChevron={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="skills" class="">Skills :</Label>
                        <Select
                            multiFullItemClearable
                            multiple
                            items={Skillselect}
                            value={[
                                Skillselect[1],
                                Skillselect[0],
                                Skillselect[2],
                            ]}
                            clearable={false}
                                    showChevron={true}
                        />
                    </Col>
                    <Col xl={6} class="job-deadline-column">
                        <Label for="job-deadline" class="">Job Deadline</Label>
                        <DateInput
                            bind:value={date}
                            class="form-control flatpickr-input custom-date-picker"
                            format="yy-MM-dd"
                            closeOnSelection={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label class="">Gender Requirement</Label>
                        <Select
                            items={Genderselect}
                            value={Genderselect[0]}
                            clearable={false}
                                    showChevron={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="language" class="">Languages :</Label>
                        <Select
                            multiFullItemClearable
                            multiple
                            items={Languagesselect}
                            value={[Languagesselect[0], Languagesselect[3]]}
                            clearable={false}
                                    showChevron={true}
                        />
                    </Col>
                    <Col xl={6}>
                        <Label for="qualification" class=""
                            >Qualification :</Label
                        >
                        <Select
                            multiFullItemClearable
                            multiple
                            items={Qualificationselect}
                            value={[
                                Qualificationselect[0],
                                Qualificationselect[3],
                                Qualificationselect[2],
                            ]}
                            clearable={false}
                                    showChevron={true}
                        />
                    </Col>
                    <Col xl={12}>
                        <Label for="job-description" class=""
                            >Job Description :</Label
                        >
                        <Input
                            type="textarea"
                            class="form-control"
                            id="job-description"
                            rows={4}
                            defaultValue={"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"}
                        />
                    </Col>
                </Row>
            </CardBody>
            <CardFooter class="text-end">
                <a
                    href="#!"
                    class="btn btn-primary btn-wave waves-effect waves-light"
                >
                    <i class="bi bi-plus-circle"></i> Post Job
                </a>
            </CardFooter>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
