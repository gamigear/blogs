<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import SpkTablescomponent from "@/shared/@spk/SpkTablescomponent.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import FilePond, { registerPlugin } from "svelte-filepond";
    import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import { DateInput } from "date-picker-svelte";
    import {
        Card,
        CardBody,
        Col,
        Input,
        Label,
        Row,
        Table,
    } from "@sveltestrap/sveltestrap";
    import Select from "svelte-select";
    // Register the plugins
    registerPlugin(
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview,
    );
    function dec(el) {
        let unit = parseInt(
            el.currentTarget.parentElement.querySelector("input").value,
            10,
        );
        if (unit <= 0) {
            return false;
        } else {
            el.currentTarget.parentElement.querySelector("input").value =
                unit - 1;
        }
    }
    function inc(el) {
        let unit = parseInt(
            el.currentTarget.parentElement.querySelector("input").value,
            10,
        );
        el.currentTarget.parentElement.querySelector("input").value = unit + 1;
    }

    //  date

    let date = new Date();
    let date1 = new Date();

    //  svelte select
    const invoiceCurrencydata2 = [
        {
            value: "USD - (United States Dollar)",
            label: "USD - (United States Dollar)",
        },
        { value: "BHD - (Bahraini Dinar)", label: "BHD - (Bahraini Dinar)" },
        { value: "KWD - (Kuwaiti Dinar)", label: "KWD - (Kuwaiti Dinar)" },
        { value: "CHF - (Swiss Franc)", label: "CHF - (Swiss Franc)" },
    ];

    const Payapaldata = [
        { value: "Credit/Debit Card", label: "Credit/Debit Card" },
        { value: "PayPal", label: "PayPal" },
        { value: "Stripe", label: "Stripe" },
        { value: "Apple Pay", label: "Apple Pay" },
        { value: "UPI", label: "UPI" },
    ];
</script>

<!-- Page Title -->
<svelte:head>
    <title>Create-Invoice | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Create-Invoice"
    subTitle="Invoice"
    activepage="Pages"
    page="Create-Invoice"
/>
<!-- Page Header Close -->

<!-- Start::row-1 -->

<Row>
    <Col xl={12}>
        <Card class="custom-card">
            <CardBody>
                <div class="row gy-3">
                    <Col xl={12}>
                        <Row>
                            <Col xl={12} class="invoice-company">
                                <p class="fw-semibold mb-2">Company Logo :</p>
                                <FilePond
                                    class="multiple-filepond company-logo-upload mb-4"
                                    name="filepond"
                                    labelIdle="Drag & Drop your files here or click"
                                    stylePanelLayout=" "
                                    styleLoadIndicatorPosition="center bottom"
                                    styleButtonRemoveItemPosition="center bottom"
                                    allowMultiple={true}
                                />
                            </Col>
                            <Col xl={4} lg={4} md={6} sm={6} class="">
                                <p class="fw-semibold mb-2 mt-4">
                                    Billing From :
                                </p>
                                <div class="row gy-2">
                                    <Col xl={12}>
                                        <Input
                                            type="text"
                                            class=""
                                            id="Company-Name"
                                            placeholder="Company Name"
                                            defaultValue="SPRUKO TECHNOLOGIES"
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <Input
                                            type="textarea"
                                            class=""
                                            id="company-address"
                                            placeholder="Enter Address"
                                            rows={3}
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <Input
                                            type="text"
                                            class=""
                                            id="company-mail"
                                            placeholder="Company Email"
                                            defaultValue=""
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <Input
                                            type="text"
                                            class=""
                                            id="company-phone"
                                            placeholder="Phone Number"
                                            defaultValue=""
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <Input
                                            type="textarea"
                                            class=""
                                            id="invoice-subject"
                                            placeholder="Subject"
                                            rows={4}
                                        />
                                    </Col>
                                </div>
                            </Col>
                            <Col
                                xl={4}
                                lg={4}
                                md={6}
                                sm={6}
                                class="ms-auto mt-sm-0 mt-3"
                            >
                                <p class="fw-semibold mb-2 mt-4">
                                    Billing To :
                                </p>
                                <div class="row gy-2">
                                    <Col xl={12}>
                                        <Input
                                            type="text"
                                            class=""
                                            id="customer-Name"
                                            placeholder="Customer Name"
                                            defaultValue="Jack Miller"
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <Input
                                            type="textarea"
                                            class=""
                                            id="customer-address"
                                            placeholder="Enter Address"
                                            rows={3}
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <Input
                                            type="text"
                                            class=""
                                            id="customer-mail"
                                            placeholder="Customer Email"
                                            defaultValue=""
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <Input
                                            type="text"
                                            class=""
                                            id="customer-phone"
                                            placeholder="Phone Number"
                                            defaultValue=""
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <Input
                                            type="text"
                                            class=""
                                            id="zip-code"
                                            placeholder="Zip Code"
                                            defaultValue=""
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <p class="fw-semibold mb-2 mt-2">
                                            Currency :
                                        </p>
                                        <Select
                                            items={invoiceCurrencydata2}
                                            showChevron={true}
                                            clearable={false}
                                            value={invoiceCurrencydata2[1]
                                                .value}
                                            placeholder="Select Currency"
                                        />
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={3}>
                        <Label for="invoice-number" class="">Invoice ID</Label>
                        <Input
                            type="text"
                            class=""
                            id="invoice-number"
                            placeholder="Inv No"
                            defaultValue="#SPK120219890"
                        />
                    </Col>
                    <Col xl={3} class="custom-picker">
                        <Label for="invoice-date-issued" class=""
                            >Date Issued</Label
                        >
                        <DateInput
                            bind:value={date}
                            class="form-control custom-date-picker"
                            format="yy/MM/dd"
                            closeOnSelection={true}
                        />
                    </Col>
                    <Col xl={3} class="custom-picker">
                        <Label for="invoice-date-due" class="">Due Date</Label>
                        <DateInput
                            bind:value={date1}
                            class="form-control custom-date-picker"
                            format="yy/MM/dd"
                            closeOnSelection={true}
                        />
                    </Col>
                    <Col xl={3}>
                        <Label for="invoice-due-amount" class=""
                            >Due Amount</Label
                        >
                        <Input
                            type="text"
                            class=""
                            id="invoice-due-amount"
                            placeholder="Enter Amount"
                            defaultValue="$12,983.78"
                        />
                    </Col>
                    <Col xl={12}>
                        <SpkTablescomponent
                            Responsive={true}
                            tableClass="nowrap text-nowrap table-borderless border mt-3"
                            header={[
                                { title: "Product Name" },
                                { title: "Description" },
                                { title: "Quantity" },
                                { title: "Price Per Unit" },
                                { title: "Total" },
                                { title: "Action" },
                            ]}
                        >
                            <tr>
                                <td>
                                    <Input
                                        type="text"
                                        class=""
                                        placeholder="Enter Product Name"
                                    />
                                </td>
                                <td>
                                    <Input
                                        type="textarea"
                                        rows={1}
                                        class=""
                                        placeholder="Enter Description"
                                    />
                                </td>
                                <td class="invoice-quantity-container">
                                    <div
                                        class="input-group border rounded flex-nowrap"
                                    >
                                        <SpkButton
                                            color="primary"
                                            onclickfunc={dec}
                                            customClass="btn btn-icon input-group-text flex-fill product-quantity-minus"
                                            ><i class="ri-subtract-line"
                                            ></i></SpkButton
                                        >
                                        <Input
                                            type="text"
                                            class=" form-control-sm border-0 text-center w-100"
                                            aria-label="quantity"
                                            id="product-quantity4"
                                            defaultValue="1"
                                        />
                                        <SpkButton
                                            color="primary"
                                            onclickfunc={inc}
                                            customClass="btn btn-icon input-group-text flex-fill product-quantity-plus"
                                            ><i class="ri-add-line"
                                            ></i></SpkButton
                                        >
                                    </div>
                                </td>
                                <td
                                    ><Input
                                        class=""
                                        placeholder=""
                                        type="text"
                                        defaultValue="$60.00"
                                    /></td
                                >
                                <td
                                    ><Input
                                        class=""
                                        placeholder=""
                                        type="text"
                                        defaultValue="$120.00"
                                    /></td
                                >
                                <td>
                                    <SpkButton
                                        customClass="btn btn-sm btn-icon btn-danger-light"
                                        ><i class="ri-delete-bin-5-line"
                                        ></i></SpkButton
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Input
                                        type="text"
                                        class=""
                                        placeholder="Enter Product Name"
                                    />
                                </td>
                                <td>
                                    <Input
                                        type="textarea"
                                        rows={1}
                                        class=""
                                        placeholder="Enter Description"
                                    />
                                </td>
                                <td class="invoice-quantity-container">
                                    <div
                                        class="input-group border rounded flex-nowrap"
                                    >
                                        <SpkButton
                                            color="primary"
                                            onclickfunc={dec}
                                            customClass="btn btn-icon input-group-text flex-fill product-quantity-minus"
                                            ><i class="ri-subtract-line"
                                            ></i></SpkButton
                                        >
                                        <Input
                                            type="text"
                                            class=" form-control-sm border-0 text-center w-100"
                                            aria-label="quantity"
                                            id="product-quantity5"
                                            defaultValue="1"
                                        />
                                        <SpkButton
                                            color="primary"
                                            onclickfunc={inc}
                                            customClass="btn btn-icon input-group-text flex-fill product-quantity-plus"
                                            ><i class="ri-add-line"
                                            ></i></SpkButton
                                        >
                                    </div>
                                </td>
                                <td
                                    ><Input
                                        class=""
                                        placeholder="Enter Amount"
                                        type="text"
                                    /></td
                                >
                                <td
                                    ><Input
                                        class=""
                                        placeholder="Enter Amount"
                                        type="text"
                                    /></td
                                >
                                <td>
                                    <SpkButton
                                        customClass="btn btn-sm btn-icon btn-danger-light"
                                        ><i class="ri-delete-bin-5-line"
                                        ></i></SpkButton
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={6} class="border-bottom-0"
                                    ><a class="btn btn-primary-light" href="#!"
                                        ><i class="bi bi-plus-lg"></i> Add Product</a
                                    ></td
                                >
                            </tr>
                            <tr>
                                <td colSpan={4}></td>
                                <td colSpan={2}>
                                    <Table
                                        responsive
                                        borderless
                                        class="table-sm text-nowrap mb-0 "
                                    >
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div class="fw-medium">
                                                        Sub Total :
                                                    </div>
                                                </th>
                                                <td>
                                                    <Input
                                                        type="text"
                                                        class="invoice-amount-input"
                                                        placeholder="Enter Amount"
                                                        defaultValue="$1209.89"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="fw-medium">
                                                        Avail Discount :
                                                    </div>
                                                </th>
                                                <td>
                                                    <Input
                                                        type="text"
                                                        class="invoice-amount-input"
                                                        placeholder="Enter Amount"
                                                        defaultValue="$29.98"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="fw-medium">
                                                        Coupon Discount <span
                                                            class="text-success"
                                                            >(10%)</span
                                                        > :
                                                    </div>
                                                </th>
                                                <td>
                                                    <Input
                                                        type="text"
                                                        class="invoice-amount-input"
                                                        placeholder="Enter Amount"
                                                        defaultValue="$129.00"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="fw-medium">
                                                        Vat <span
                                                            class="text-danger"
                                                            >(20%)</span
                                                        > :
                                                    </div>
                                                </th>
                                                <td>
                                                    <Input
                                                        type="text"
                                                        class="invoice-amount-input"
                                                        placeholder="Enter Amount"
                                                        defaultValue="$258.00"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="fw-medium">
                                                        Due Till Date :
                                                    </div>
                                                </th>
                                                <td>
                                                    <Input
                                                        type="text"
                                                        class="invoice-amount-input"
                                                        placeholder="Enter Amount"
                                                        defaultValue="$0.00"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div
                                                        class="fs-14 fw-medium"
                                                    >
                                                        Total :
                                                    </div>
                                                </th>
                                                <td>
                                                    <Input
                                                        type="text"
                                                        class="invoice-amount-input"
                                                        placeholder="Enter Amount"
                                                        defaultValue="$1,071.89"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        </SpkTablescomponent>
                    </Col>
                    <Col xl={4}>
                        <div class="row gy-3">
                            <Col xl={12}>
                                <Select
                                    items={Payapaldata}
                                    showChevron={true}
                                    clearable={false}
                                    placeholder="Select Currency"
                                />
                            </Col>
                            <Col xl={12}>
                                <Input
                                    type="text"
                                    class=""
                                    placeholder="Card Holder Name"
                                />
                            </Col>
                            <Col xl={12}>
                                <Input
                                    type="text"
                                    class=""
                                    id="invoice-payment-cardname"
                                    placeholder="Card Number"
                                    defaultValue="1234 5678 9087 XXXX"
                                />
                                <Label
                                    for="invoice-payment-cardname"
                                    class="mb-0"
                                    ><a class="text-danger fs-11" href="#!"
                                        >Enter valid card number*</a
                                    ></Label
                                >
                            </Col>
                            <Col xl={12}>
                                <Input
                                    type="text"
                                    class=""
                                    placeholder="Enter OTP"
                                />
                            </Col>
                        </div>
                    </Col>
                    <Col xl={12}>
                        <div>
                            <Label for="invoice-note" class="">Note:</Label>
                            <Input
                                type="textarea"
                                class=""
                                id="invoice-note"
                                rows={3}
                                defaultValue={"Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment"}
                            />
                        </div>
                    </Col>
                </div>
            </CardBody>
            <div class="card-footer text-end">
                <SpkButton color="warning" customClass="btn m-1"
                    >Save As PDF<i
                        class="ri-file-pdf-line ms-1 align-middle d-inline-block"
                    ></i></SpkButton
                >
                <SpkButton color="success" customClass="btn m-1"
                    >Download Invoice<i
                        class="ri-download-2-line ms-1 d-inline-block"
                    ></i></SpkButton
                >
                <SpkButton color="primary" customClass="btn m-1"
                    >Send Invoice <i
                        class="ri-send-plane-2-line ms-1 align-middle d-inline-block"
                    ></i></SpkButton
                >
            </div>
        </Card>
    </Col>
</Row>

<!--End::row-1 -->
