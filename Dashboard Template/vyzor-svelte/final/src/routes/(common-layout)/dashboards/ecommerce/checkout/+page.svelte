<script lang="ts">
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { CheckoutSummary, SummaryData } from "$lib/data/dashboards/ecommerce/checkoutdata";
    import { Card, CardBody, Col, Container, Image, Input, ListGroup, ListGroupItem, Modal, ModalBody, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "@sveltestrap/sveltestrap";

    let show = false;

    const handleShow = (e:Event) => {
        e.preventDefault()
        show = true;
    };

    const handleClose = () => {
        show = false;
    };

    let activeTab = 1

</script>

<!-- Page Title -->
<svelte:head>
    <title>Checkout | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Checkout"
    subTitle="Ecommerce"
    activepage="Dashboards"
    page="Checkout"
/>
<!-- Page Header Close -->

 <!-- Start::row-1 --> 

            <Container>
                <Row>
                    <Col xl={8}>
                        <Card class="custom-card border-0">
                            <CardBody>
                                <h5 class="mb-3">
                                    Personal Info
                                </h5>
                                <Row class="gy-4">
                                    <Col md={6}>
                                        <Input type="text" class="" id="firstName" placeholder="First Name" />
                                    </Col>
                                    <Col md={6}>
                                        <Input type="text" class="" id="lastName" placeholder="Last Name" />
                                    </Col>
                                    <Col md={6}>
                                        <Input type="email" class="" id="emailAddress" placeholder="Email Address" />
                                    </Col>
                                    <Col md={6}>
                                        <Input type="email" class="" id="mobileNumber" placeholder="Mobile Number" />
                                    </Col>
                                </Row>
                                <div class="mt-5 mb-3 d-flex align-items-center justify-content-between flex-wrap">
                                    <h5 class="fw-semibold mb-0">Shipping Address</h5>
                                    <a href="#select-address" onclick={handleShow} class="link-primary" data-bs-toggle="modal">Select From Address Book</a>
                                </div>
                                <Row class="mb-4">
                                    <Col md={6}>
                                        <Input type="email" class="" id="fullName" placeholder="Full Name" />
                                    </Col>
                                </Row>
                                <Row class="gy-4">
                                    <Col md={6}>
                                        <Input type="email" class="" id="address1" placeholder="Address 1" />
                                    </Col>
                                    <Col md={6}>
                                        <Input type="email" class="" id="address2" placeholder="Address 2" />
                                    </Col>
                                    <Col md={6}>
                                        <Input type="email" class="" id="landMark" placeholder="Landmark" />
                                    </Col>
                                    <Col md={6}>
                                        <Input type="email" class="" id="pinZipCode" placeholder="Pincode / Zipcode" />
                                    </Col>
                                    <Col md={6}>
                                        <Input type="email" class="" id="city" placeholder="City" />
                                    </Col>
                                    <Col md={6}>
                                        <Input type="email" class="" id="stateDistrict" placeholder="State, District" />
                                    </Col>
                                    <div class="col-md-12">
                                        <Input type="textarea" rows={3} class="form-control" id="deliveryInstructions" placeholder="Delivery Instructions" />
                                    </div>
                                    <Col md={12}>
                                        <div class="form-group d-flex align-items-center flex-wrap">
                                            <div class="min-w-fit-content me-4">
                                                <p class="mb-0 fw-medium">Address Type:</p>
                                            </div>
                                            <div class="flex-grow-1">
                                                <div class="d-flex gap-4 flex-wrap">
                                                    <div class="form-check mb-0">
                                                        <input class="form-check-input" type="radio" name="addressType" id="radio-1" defaultChecked />
                                                        <label class="form-check-labe fs-13l" for="radio-1">Home</label>
                                                    </div>
                                                    <div class="form-check mb-0">
                                                        <input class="form-check-input" type="radio" name="addressType" id="radio-2" />
                                                        <label class="form-check-label fs-13" for="radio-2">Work</label>
                                                    </div>
                                                    <div class="form-check mb-0">
                                                        <input class="form-check-input" type="radio" name="addressType" id="radio-3" />
                                                        <label class="form-check-label fs-13" for="radio-3">Other</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div class="mt-5">
                                    <h5 class="fw-semibold mb-3">Payment Method</h5>
                                        <Nav class="nav-tabs custom-nav-tabs-2 gap-3" id="myTab" role="tablist">
                                            <NavItem role="presentation" >
                                                <NavLink on:click={e=>{activeTab=1,e.preventDefault()}} active={activeTab==1} role="tab">
                                                    <div class="d-flex align-items-center">
                                                        <span class="min-w-fit-content me-3">
                                                            <i class={`bi bi-paypal fs-20`}></i>
                                                        </span>
                                                        <div class="flex-grow-1">PayPal</div>
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem role="presentation" >
                                                <NavLink on:click={e=>{activeTab=2,e.preventDefault()}} active={activeTab==2} role="tab">
                                                    <div class="d-flex align-items-center">
                                                        <span class="min-w-fit-content me-3">
                                                            <i class={`bi bi-credit-card fs-20`}></i>
                                                        </span>
                                                        <div class="flex-grow-1">Credit Or Debit Card</div>
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem role="presentation" >
                                                <NavLink on:click={e=>{activeTab=3,e.preventDefault()}} active={activeTab==3} role="tab">
                                                    <div class="d-flex align-items-center">
                                                        <span class="min-w-fit-content me-3">
                                                            <i class={`bi bi-globe fs-20`}></i>
                                                        </span>
                                                        <div class="flex-grow-1">UPI / Net Banking</div>
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem role="presentation" >
                                                <NavLink on:click={e=>{activeTab=4,e.preventDefault()}} active={activeTab==4} role="tab">
                                                    <div class="d-flex align-items-center">
                                                        <span class="min-w-fit-content me-3">
                                                            <i class={`bi bi-cash-stack fs-20`}></i>
                                                        </span>
                                                        <div class="flex-grow-1">Cash On Delivery</div>
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent id="checkoutTab">
                                            <TabPane  class={`p-0 border-0 ${activeTab==1?'active':''}`} id="paypal-tab" role="tabpanel">
                                                <p class="mb-3 mt-4 text-muted">Order will be placed once the payment is done. Please read all the terms &amp; conditions about <a href="#!" class="text-primary text-decoration-underline">refund policy</a>.</p>
                                                <a href="#!" class="btn btn-primary">Proceed to pay <i class="ti ti-arrow-right fs-18 ms-2 align-middle d-inline-block rtl-transform-icon"></i></a>
                                            </TabPane>
                                            <TabPane  class={`p-0 border-0 ${activeTab==2?'active':''}`} id="card-tab" role="tabpanel">
                                                <p class="mb-2 mt-4 fw-medium">Card Details:</p>
                                                <Row class="gy-4">
                                                    <Col md={6}>
                                                        <Input type="text" class="" id="cardHolderName" placeholder="Card Holder Name" />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Input type="text" class="" id="cardNumber" placeholder="Card Number" />
                                                    </Col>
                                                    <div class="col-md-3">
                                                        <Input type="text" class="" id="expDate" placeholder="Expiry Date" />
                                                    </div>
                                                    <div class="col-md-2">
                                                        <Input type="text" class="" id="cvv" placeholder="CVV" />
                                                    </div>
                                                </Row>
                                                <p class="mb-3 mt-2 fs-13 text-muted">
                                                    <span><i class="ti ti-lock fs-16"></i></span>
                                                    <span>Your transaction is secured with encryption.</span>
                                                </p>
                                                <a href="#!" class="btn btn-primary">Proceed to pay <i class="ti ti-arrow-right fs-18 ms-2 align-middle d-inline-block rtl-transform-icon"></i></a>
                                            </TabPane>
                                            <TabPane class={`p-0 border-0 ${activeTab==3?'active':''}`} id="netbanking-tab" role="tabpanel">
                                                <p class="mb-3 mt-4 text-muted">Order will be placed once the payment is done. Please read all the terms & conditions about <a href="#!" class="text-primary text-decoration-underline">refund policy</a>.</p>
                                                <a href="#!" class="btn btn-primary">Proceed to pay <i class="ti ti-arrow-right fs-18 ms-2 align-middle d-inline-block rtl-transform-icon"></i></a>
                                            </TabPane>
                                            <TabPane class={`p-0 border-0 ${activeTab==4?'active':''}`} id="cod-tab" role="tabpanel">
                                                <p class="mb-3 mt-4 text-muted">Proceed to place order. If you have any doubts regarding returning/exchanging products, checkout <a href="#!" class="text-primary text-decoration-underline">Return & Exchange policy</a></p>
                                                <a href="#!" class="btn btn-primary">Proceed to checkout <i class="ti ti-arrow-right align-middle fs-18 ms-2 d-inline-block rtl-transform-icon"></i></a>
                                            </TabPane>
                                        </TabContent>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card class="custom-card overflow-hidden">
                            <CardBody class="p-0">
                                <ListGroup class="list-group-flush">
                                    {#each CheckoutSummary as product}
                                    <ListGroupItem class="">
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-xxl">
                                                    <Image src={product.imageUrl} alt={product.name} />
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="fw-semibold d-block mb-2">{product.name}</span>
                                                <span class="text-muted d-block fs-13 mb-1">Color : {product.color}</span>
                                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                                    <span class="text-muted d-block fs-13">
                                                        Qty : {product.quantity} x ${product.price.toFixed(2)}
                                                    </span>
                                                    <div class="fw-semibold">
                                                        ${(product.quantity * product.price).toFixed(2)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    {/each}
                                </ListGroup>
                            </CardBody>
                            <div class="card-footer">
                                <span class="d-block fs-14 text-muted mb-1">Have a coupon ? Enter below</span>
                                <div class="input-group mb-1">
                                    <Input type="text" class="form-control-sm" placeholder="Coupon Code" aria-label="coupon-code" aria-describedby="coupons" />
                                    <SpkButton color="primary" customClass="btn input-group-text">Apply</SpkButton>
                                </div>
                                <ul class="list-unstyled cart-order-summary-list mt-3">
                                    {#each SummaryData as item}
                                    <li>
                                        <div class={`d-flex align-items-center justify-content-between ${item.isTotal ? 'text-primary' : ''}`}>
                                            <div>{item.label}</div>
                                            <div class={`fw-medium ${item.isTotal ? 'fw-semibold h5 mb-0 text-primary' : ''} ${item.isFree ? 'text-success' : ''}`}>
                                                {item.value}
                                            </div>
                                        </div>
                                    </li>
                                    {/each}
                                </ul>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

             <!--End::row-1 --> 

              <!-- Start:: select address modal --> 

            <Modal isOpen={show} size="lg" toggle={handleClose} class="modal-style-1 modal-3" fade centered id="select-address">
                <ModalBody>
                    <div class="d-flex align-items-start justify-content-between mb-4">
                        <h6 class="fs-18 mb-0">Select Address</h6>
                        <SpkButton color="" onclickfunc={handleClose} buttontype="button" customClass="btn-close" ></SpkButton>
                    </div>
                    <div class="row">
                        <Col md={12}>
                            <Card class="custom-card checkout-address-card">
                                <CardBody>

                                     <!-- form-check --> 

                                    <input class="form-check-input d-none" type="radio" id="address1_select" name="select-address" defaultChecked />
                                    <label class="position-absolute all-0 cursor-pointer" for="address1_select"></label>

                                     <!-- form-check --> 

                                    <SpkBadge Color="" CustomClass="bg-secondary rounded-pill custom-badge-3">Default</SpkBadge>

                                    <div class="d-flex align-items-center gap-2 mb-3">
                                        <div class="lh-1">
                                            <span class="avatar avatar-md avatar-rounded border"><i class="ti ti-home fs-5"></i></span>
                                        </div>
                                        <h6 class="fs-16 mb-0">Home</h6>
                                    </div>
                                    <p class="mb-1 fw-medium text-default">Ruby Disousa</p>
                                    <p class="mb-1 fw-medium text-muted fs-13">rubyakuner@ginna.mail</p>
                                    <p class="mb-2 fw-medium text-muted fs-13">+11-23-1116773</p>
                                    <p class="mb-0 fs-13 text-muted">
                                        H.No: 3-116/458, Golden Park, Marias St.,
                                        Near 12Amet Residency, 14756, United States Of America
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={12}>
                            <Card class="checkout-address-card">
                                <CardBody>

                                     <!-- form-check --> 

                                    <input class="form-check-input d-none" type="radio" id="address2_select" name="select-address" />
                                    <label class="position-absolute all-0 cursor-pointer" for="address2_select"></label>

                                     <!-- form-check --> 

                                    <div class="d-flex align-items-center gap-2 mb-3">
                                        <div class="lh-1">
                                            <span class="avatar avatar-md avatar-rounded border"><i class="ti ti-briefcase fs-16"></i></span>
                                        </div>
                                        <h6 class="fs-16 mb-0">Work</h6>
                                    </div>
                                    <p class="mb-1 fw-medium text-default">Ruby Disousa</p>
                                    <p class="mb-1 fw-medium text-muted fs-13">rubyakuner@ginna.mail</p>
                                    <p class="mb-2 fw-medium text-muted fs-13">+11-23-1116773</p>
                                    <p class="mb-0 fs-13 text-muted">
                                        Taj Building, 3rd Floor, Room No: 3, Silver St.,
                                        Adugiahsuk, LICE, 14756, United States Of America
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </div>
                    <div class="d-flex align-items-center gap-2 justify-content-end">
                        <a  href="#!" onclick={handleClose} class="btn btn-light" data-bs-dismiss="modal">Cancel</a>
                        <a  href="#!" class="btn btn-primary">Select address</a>
                    </div>
                </ModalBody>
            </Modal>

             <!-- End:: select address modal --> 
