<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import {
        badge1,
        badge2,
        databadge1,
        badge3,
        badge4,
        databadge3,
        badge5,
        badge6,
        badge7,
        badge8,
        databadge7,
        badge10,
        badge11,
        badge9,
        badge12,
        badge13,
        badge14,
    } from "$lib/components/common/prism-code/uielementsprim";
    import { Col, Row } from "@sveltestrap/sveltestrap";
    import {
        badges1,
        badgesdata,
        Outlinebadgesdata,
    } from "$lib/data/uielements/badgedata";
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Badge | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<Pageheader homepage="Badge" activepage="UI Elements" page="Badge" />
<!-- Start::row-1 -->
                <Row>
                    <Col xl={12}>
                         <ShowCode
      title="Badges"
      customCardClass=""
      customCardBodyClass="d-flex flex-wrap gap-2"
      svelteCode={badge1}
      dataCode={databadge1}
    >
      {#each badgesdata as badge (badge.id)}
        <SpkBadge
          Color={badge.color}
          CustomClass={` bg-${badge.color} ${badge.class} me-1`}
          text={badge.heading}
        />
      {/each}
    </ShowCode>
                    </Col>
                    <Col xl={12}>
                        <ShowCode
      title="Light Badges"
      customCardClass=""
      customCardBodyClass="d-flex flex-wrap gap-2"
      svelteCode={badge3}
      dataCode={databadge3}
    >
      {#each Outlinebadgesdata as badge (badge.id)}
        <SpkBadge
          CustomClass={`${badge.color} bg-${badge.color}-transparent ${badge.class} me-1`}
          text={badge.heading}
        />
      {/each}
    </ShowCode>
                    </Col>
                </Row>
                <!-- End::row-1 -->

                <!-- Start::row-2 -->
                <Row>
                    <Col xl={12}>
                        <ShowCode
      title="Pill badges"
      customCardClass=""
      customCardBodyClass="d-flex flex-wrap gap-2"
      svelteCode={badge2}
      dataCode={databadge1}
    >
      {#each badgesdata as badge (badge.id)}
        <SpkBadge
          Pill={true}
          Color={badge.color}
          CustomClass={` bg-${badge.color} ${badge.class} me-1`}
          text={badge.heading}
        />
      {/each}
    </ShowCode>
                    </Col>
                    <Col xl={12}>
                        <ShowCode
      title="Light Pill Badges"
      customCardClass=""
      customCardBodyClass="d-flex flex-wrap gap-2"
      svelteCode={badge4}
      dataCode={databadge3}
    >
      {#each Outlinebadgesdata as badge (badge.id)}
        <SpkBadge
          Pill={true}
          CustomClass={`${badge.color} bg-${badge.color}-transparent ${badge.class} me-1`}
          text={badge.heading}
        />
      {/each}
    </ShowCode>
                    </Col>
                </Row>
                <!-- End::row-2 -->

                <!-- Start::row-3 -->
                <Row>
                    <Col xl={12}>
                        <ShowCode
      title="Gradient Badges"
      customCardClass=""
      customCardBodyClass="d-flex flex-wrap gap-2"
      svelteCode={badge7}
      dataCode={databadge7}
    >
      {#each badges1 as badge (badge.id)}
        <SpkBadge
          CustomClass={`${badge.color} bg-${badge.color}-gradient me-1`}
          text={badge.heading}
        />
      {/each}
    </ShowCode>
                    </Col>
                    <Col xl={12}>
                        <ShowCode
      title="Gradient Pill Badges"
      customCardClass=""
      customCardBodyClass="d-flex flex-wrap gap-2"
      svelteCode={badge8}
      dataCode={databadge7}
    >
      {#each badges1 as badge (badge.id)}
        <SpkBadge
          Pill={true}
          CustomClass={`${badge.color} bg-${badge.color}-gradient me-1`}
          text={badge.heading}
        />
      {/each}
    </ShowCode>
                    </Col>
                </Row>
                <!-- End::row-3 -->

                <!-- Start::row-4 -->
                <Row>
                    <Col xl={12}>
                        <ShowCode
      title="Outline Badges"
      customCardClass=""
      customCardBodyClass="d-flex flex-wrap gap-2"
      svelteCode={badge5}
      dataCode={databadge3}
    >
      {#each Outlinebadgesdata as badge (badge.id)}
        <SpkBadge
          CustomClass={`bg-outline-${badge.color}  outline-${badge.color}-transparent ${badge.class} me-1`}
          text={badge.heading}
        />
      {/each}
    </ShowCode>
                    </Col>
                    <Col xl={12}>
                        <ShowCode
      title="Outline Pill Badges"
      customCardClass=""
      customCardBodyClass="d-flex flex-wrap gap-2"
      svelteCode={badge6}
      dataCode={databadge3}
    >
      {#each Outlinebadgesdata as badge (badge.id)}
        <SpkBadge
          Pill={true}
          CustomClass={`bg-outline-${badge.color}  outline-${badge.color}-transparent ${badge.class} me-1`}
          text={badge.heading}
        />
      {/each}
    </ShowCode>
                    </Col>
                </Row>
                <!-- End::row-4 -->

                <!-- Start::row-5 -->
                <Row>
                    <Col xl={12}>
                        <ShowCode
      title="Buttons With Badges"
      customCardClass=""
      customCardBodyClass="d-flex flex-wrap gap-2"
      svelteCode={badge10}
    >
      <SpkButton
        color="primary"
        buttontype="button"
        customClass="my-1 me-2"
        text="Notifications"
      >
        <SpkBadge Color="secondary" CustomClass=" ms-2 " text="4" />
      </SpkButton>
      <SpkButton
        color="secondary"
        buttontype="button"
        customClass="my-1 me-2"
        text="Notifications"
      >
        <SpkBadge Color="primary" CustomClass=" ms-2" text="7" />
      </SpkButton>
      <SpkButton
        color="success"
        buttontype="button"
        customClass="my-1 me-2"
        text="Notifications"
      >
        <SpkBadge Color="danger" CustomClass=" ms-2 " text="12" />
      </SpkButton>
      <SpkButton
        color="info"
        buttontype="button"
        customClass="my-1 me-2"
        text="Notifications"
      >
        <SpkBadge Color="warning" CustomClass=" ms-2 " text="32" />
      </SpkButton>
    </ShowCode>
                    </Col>
                    <Col xl={12}>
                        <ShowCode
      title="Outline Button Badges"
      customCardClass=""
      customCardBodyClass="d-flex flex-wrap gap-2"
      svelteCode={badge11}
    >
      <SpkButton
        outline={true}
        color="primary"
        buttontype="button"
        customClass="my-1 me-2"
        text="Notifications"
      >
        <SpkBadge Color="" CustomClass=" ms-2 " text="4" />
      </SpkButton>
      <SpkButton
        outline={true}
        color="secondary"
        buttontype="button"
        customClass="my-1 me-2"
        text="Notifications"
      >
        <SpkBadge Color="" CustomClass=" ms-2" text="7" />
      </SpkButton>
      <SpkButton
        outline={true}
        color="success"
        buttontype="button"
        customClass="my-1 me-2"
        text="Notifications"
      >
        <SpkBadge Color="" CustomClass=" ms-2 " text="12" />
      </SpkButton>
      <SpkButton
        outline={true}
        color="info"
        buttontype="button"
        customClass="my-1 me-2"
        text="Notifications"
      >
        <SpkBadge Color="" CustomClass=" ms-2 " text="32" />
      </SpkButton>
    </ShowCode>
                    </Col>
                </Row>
                <!-- End::row-5 -->

                <!-- Start::row- -->
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xl={12}>
                                <ShowCode
          title="Positioned Badges"
          customCardClass=""
          customCardBodyClass=""
          svelteCode={badge13}
        >
          <div class="d-flex flex-wrap gap-4">
            <SpkButton
              buttontype="button"
              color="primary"
              customClass="position-relative"
              text="Inbox"
            >
              <SpkBadge
                Color="danger"
                Positioned={true}
                Pill={true}
                text="99+"
              />
            </SpkButton>
            <SpkButton
              buttontype="button"
              color="secondary"
              customClass="position-relative"
              text="Profile"
            >
              <span
                class="position-absolute top-80 start-100 translate-middle p-2 bg-success border border-light rounded-circle"
              >
                <span class="visually-hidden">New alerts</span>
              </span>
            </SpkButton>
            <span class="avatar">
              <img  loading="lazy" src={"../../images/faces/2.jpg"} alt="img" />
              <span
                class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle"
              >
                <span class="visually-hidden">New alerts</span>
              </span>
            </span>
            <span class="avatar avatar-rounded">
              <img  loading="lazy" src={"../../images/faces/15.jpg"} alt="img" />
              <span
                class="position-absolute top-80 start-100 translate-middle p-1 bg-success border border-light rounded-circle"
              >
                <span class="visually-hidden">New alerts</span>
              </span>
            </span>
            <span class="avatar avatar-rounded">
              <img  loading="lazy" src={"../../images/faces/10.jpg"} alt="img" />
              <span
                class="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg"
                >1000+
                <span class="visually-hidden">New alerts</span>
              </span>
            </span>
          </div>
        </ShowCode>
                            </Col>
                            <Col xl={12}>
                               <ShowCode
          title="Custom Badges"
          customCardClass=""
          customCardBodyClass=""
          svelteCode={badge14}
        >
          <div class="d-flex align-items-center gap-5 flex-wrap">
            <div>
              <SpkBadge
                CustomClass=" bg-outline-secondary custom-badge fs-15"
                text="Hot"><i class="ti ti-flame me-1"></i></SpkBadge
              >
            </div>
            <div>
              <span class="icon-badge">
                <svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                  ><path
                    d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                  /></svg
                >
                <SpkBadge Color="success" Pill={true} text="14" />
              </span>
            </div>
            <div>
              <SpkBadge
                Color="bg-light"
                Border="border"
                CustomClass="text-default custom-badge"
                text="13.2k"
                ><i class="fe fe-eye me-1 d-inline-block"></i></SpkBadge
              >
            </div>
            <div>
              <span class="text-badge">
                <span class="text fs-18">Inbox</span>
                <SpkBadge
                  Color="success"
                  Pill={true}
                  CustomClass=""
                  text="32"
                />
              </span>
            </div>
          </div>
        </ShowCode>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={12}>
                        <ShowCode
      title="Headings"
      customCardClass=""
      customCardBodyClass=""
      svelteCode={badge12}
    >
      <h1>Example heading <SpkBadge Color="primary" text="New" /></h1>
      <h2>Example heading <SpkBadge Color="primary" text="New" /></h2>
      <h3>Example heading <SpkBadge Color="primary" text="New" /></h3>
      <h4>Example heading <SpkBadge Color="primary" text="New" /></h4>
      <h5>Example heading <SpkBadge Color="primary" text="New" /></h5>
      <h6>Example heading <SpkBadge Color="primary" text="New" /></h6>
    </ShowCode>
                    </Col>
                </Row>
                <!-- End::row- -->