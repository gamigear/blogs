<script lang="ts">
  import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
  import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
  import { Col, Row, Image } from "@sveltestrap/sveltestrap";
  import {
    objectfit1,
    objectfit10,
    objectfit11,
    objectfit12,
    objectfit13,
    objectfit14,
    objectfit15,
    objectfit2,
    objectfit3,
    objectfit4,
    objectfit5,
    objectfit6,
    objectfit7,
    objectfit8,
    objectfit9,
  } from "$lib/components/common/prism-code/uielementsprim";
</script>

<!-- Page Title -->
<svelte:head>
  <title>ObjectFit | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<Pageheader homepage="Object Fit" activepage="UI Elements" page="Object Fit" />
<!-- Start::row-1 -->
<Row>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Contain"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit1}
    >
      <Image
        src="../../images/media/media-28.jpg"
        class="object-fit-contain border rounded"
        alt="..."
      />
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Cover"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit2}
    >
      <Image
        src="../../images/media/media-28.jpg"
        class="object-fit-cover border rounded"
        alt="..."
      />
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Fill"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit3}
    >
      <Image
        src="../../images/media/media-28.jpg"
        class="object-fit-fill border rounded"
        alt="..."
      />
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Scale Down"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit4}
    >
      <Image
        src="../../images/media/media-28.jpg"
        class="object-fit-scale border rounded"
        alt="..."
      />
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit None"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit5}
    >
      <Image
        src="../../images/media/media-28.jpg"
        class="object-fit-none border rounded"
        alt="..."
      />
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Contain (SM - responsive)"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit6}
    >
      <Image
        src="../../images/media/media-28.jpg"
        class="object-fit-sm-contain border rounded"
        alt="..."
      />
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Contain (MD - responsive)"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit7}
    >
      <Image
        src="../../images/media/media-28.jpg"
        class="object-fit-md-contain border rounded"
        alt="..."
      />
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Contain (LG - responsive)"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit8}
    >
      <Image
        src="../../images/media/media-28.jpg"
        class="object-fit-lg-contain border rounded"
        alt="..."
      />
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Contain (XL - responsive)"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit9}
    >
      <Image
        src="../../images/media/media-28.jpg"
        class="object-fit-xl-contain border rounded"
        alt="..."
      />
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Contain (XXL - responsive)"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit10}
    >
      <Image
        src="../../images/media/media-28.jpg"
        class="object-fit-xxl-contain border rounded"
        alt="..."
      />
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Contain Video"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit11}
    >
      <video
        src="../../video/1.mp4"
        class="object-fit-contain rounded border"
        autoPlay
        loop
        muted
      ></video>
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Cover Video"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit12}
    >
      <video
        src="../../video/1.mp4"
        class="object-fit-cover rounded border"
        autoPlay
        loop
        muted
      ></video>
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Fill Video"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit13}
    >
      <video
        src="../../video/1.mp4"
        class="object-fit-fill rounded border"
        autoPlay
        loop
        muted
      ></video>
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit Scale Video"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit14}
    >
      <video
        src="../../video/1.mp4"
        class="object-fit-scale rounded border"
        autoPlay
        loop
        muted
      ></video>
    </ShowCode>
  </Col>
  <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
    <ShowCode
      title="Object Fit None Video"
      customCardBodyClass="object-fit-container"
      svelteCode={objectfit15}
    >
      <video
        src="../../video/1.mp4"
        class="object-fit-none rounded border"
        autoPlay
        loop
        muted
      ></video>
    </ShowCode>
  </Col>
</Row>
<!-- End::row-1 -->
