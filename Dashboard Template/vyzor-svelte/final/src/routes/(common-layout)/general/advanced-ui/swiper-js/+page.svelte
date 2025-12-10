<script lang="ts">
    import { onMount } from "svelte";
    import SpkBasicCard from "$lib/@spk/SpkBasicCard.svelte";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { Col, Row } from "@sveltestrap/sveltestrap";
    import { register } from "swiper/element/bundle";
onMount(()=>{
register()
})
    const custompagination = {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index: any, className: any) => {
            return `<span class="${className}">${index + 1}</span>`;
        },
    };
    let thumbsSwiper:any; // This will store the swiper instance
    let autoplayConfig = { delay: 2500, disableOnInteraction: false };
    // Function to handle the swiper instance assignment
    const setThumbsSwiper = (swiper: any) => {
        thumbsSwiper = swiper;
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>SwiperJs | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Swiper" activepage="Advanced Ui" page="Swiper" />
<!-- Page Header Close -->

<!-- Start::row-1 -->
<Row>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle=" Basic Swiper">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container class="swiper swiper-basic" autoplay={autoplayConfig}>
          <swiper-slide class="swiper-slide"
            ><img  loading="lazy" src="../../images/media/media-27.jpg" alt="" /></swiper-slide
          >
          <swiper-slide class="swiper-slide"
            ><img  loading="lazy" src="../../images/media/media-26.jpg" alt="" /></swiper-slide
          >
          <swiper-slide class="swiper-slide"
            ><img  loading="lazy" src="../../images/media/media-25.jpg" alt="" /></swiper-slide
          >
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="Swiper With Navigation">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper swiper-navigation"
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
        >
          <swiper-slide class="swiper-slide"
            ><img  loading="lazy" src="../../images/media/media-29.jpg" alt="" /></swiper-slide
          >
          <swiper-slide class="swiper-slide"
            ><img  loading="lazy" src="../../images/media/media-28.jpg" alt="" /></swiper-slide
          >
          <swiper-slide class="swiper-slide"
            ><img  loading="lazy" src="../../images/media/media-30.jpg" alt="" /></swiper-slide
          >
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard
      cardProps="custom-card"
      headerTitle="  Swiper with Pagination"
    >
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper pagination mySwiper custom-swiper"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={autoplayConfig}
          pagination={{ clickable: true }}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-32.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-31.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-33.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="  Dynamic Pagination">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper pagination-dynamic mySwiper"
          autoplay={autoplayConfig}
          pagination={{ dynamicBullets: true, clickable: true }}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-21.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-17.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-16.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard
      cardProps="custom-card"
      headerTitle="  Pagination With Progress"
    >
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper pagination-progress mySwiper"
          pagination={{ type: "progressbar" }}
          spaceBetween={30}
          Navigation={true}
          centeredSlides={true}
          autoplay={autoplayConfig}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-12.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-8.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-5.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle=" Pagination Fraction">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper mySwiper pagination-fraction"
          pagination={{ type: "fraction" }}
          spaceBetween={30}
          Navigation={true}
          centeredSlides={true}
          autoplay={autoplayConfig}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-12.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-8.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-5.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="  Custom Paginatioin">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper custom-pagination mySwiper"
          Pagination={custompagination}
          spaceBetween={30}
          Navigation={true}
          centeredSlides={true}
          autoplay={autoplayConfig}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-25.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-5.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-33.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="Scrollbar Swiper">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper scrollbar-swiper mySwiper"
          scrollbar={{ hide: true }}
          autoplay={autoplayConfig}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-30.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-28.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-29.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle=" Vertical Swiper">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper vertical swiper-vertical mySwiper"
          direction={"vertical"}
          pagination={{ clickable: true }}
          autoplay={autoplayConfig}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-8.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-32.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-17.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="  Mouse Wheel Control">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper vertical vertical-mouse-control mySwiper"
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{ clickable: true }}
          autoplay={autoplayConfig}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-28.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-30.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-32.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="  Keyboard Control">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper keyboard-control mySwiper"
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          autoplay={autoplayConfig}
          navigation={true}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-31.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-12.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-8.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="Nested Swiper">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper mySwiper1 swiper-h swiper swiper-horizontal1"
          spaceBetween={50}
          pagination={{ clickable: true }}
        >
          <!-- Slide 1 -->
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-30.jpg" alt="" /></swiper-slide
          >

          <!-- Slide 2 with Nested Swiper -->
          <swiper-slide>
            <swiper-container
              class="swiper mySwiper2 swiper-v swiper vertical swiper-vertical1"
              direction={"vertical"}
              spaceBetween={50}
              pagination={{ clickable: true }}
            >
              <!-- Nested Swiper Slides -->
              <swiper-slide
                ><img  loading="lazy" src="../../images/media/media-28.jpg" alt="" /></swiper-slide
              >
              <swiper-slide
                ><img  loading="lazy" src="../../images/media/media-30.jpg" alt="" /></swiper-slide
              >
              <swiper-slide
                ><img  loading="lazy" src="../../images/media/media-32.jpg" alt="" /></swiper-slide
              >
              <!-- Add more slides as needed -->
            </swiper-container>
          </swiper-slide>

          <!-- Slide 3 -->
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-28.jpg" alt="" /></swiper-slide
          >

          <!-- Slide 4 -->
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-29.jpg" alt="" /></swiper-slide
          >
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="Effect Cube">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper swiper-effect-cube mySwiper"
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          autoplay={autoplayConfig}
          pagination={true}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-62.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-63.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-64.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="Effect Fade">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper swiper-effect-cube mySwiper"
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={autoplayConfig}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-18.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-19.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-20.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={4} lg={6} md={6} sm={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="  Effect Flip">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper swiper-effect-cube mySwiper"
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          autoplay={autoplayConfig}
        >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-20.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-62.jpg" alt="" /></swiper-slide
          >
          <swiper-slide
            ><img  loading="lazy" src="../../images/media/media-63.jpg" alt="" /></swiper-slide
          >
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!--End::row-1 -->

<!-- Start:: row-2 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="    Effect Coverflow">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper swiper-overflow mySwiper"
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={4}
          autoplay={autoplayConfig}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
        >
          <swiper-slide>
            <img
              class="img-fluid"
              src="../../images/media/media-40.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid"
              src="../../images/media/media-41.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid"
              src="../../images/media/media-42.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid"
              src="../../images/media/media-43.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid"
              src="../../images/media/media-44.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid"
              src="../../images/media/media-59.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid"
              src="../../images/media/media-46.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid"
              src="../../images/media/media-61.jpg"
              alt="img"
            />
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle=" Thumbs Gallery">
      <div slot="customheader"></div>
      <div slot="content">
        <swiper-container
          class="swiper mySwiper1 mb-2"
          thumbs-swiper=".my-thumbs"
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={autoplayConfig}
        >
          <swiper-slide>
            <img
              class="img-fluid rounded w-100"
              src="../../images/media/media-1.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid rounded w-100"
              src="../../images/media/media-2.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid rounded w-100"
              src="../../images/media/media-3.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid rounded w-100"
              src="../../images/media/media-6.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid rounded w-100"
              src="../../images/media/media-7.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid rounded w-100"
              src="../../images/media/media-10.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="img-fluid rounded w-100"
              src="../../images/media/media-11.jpg"
              alt="img"
            />
          </swiper-slide>
        </swiper-container>
        <swiper-container
          class="swiper swiper-view my-thumbs"
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
        >

          <swiper-slide class="swiper-slide">
            <img
              class="img-fluid"
              src="../../images/media/media-1.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img
              class="img-fluid"
              src="../../images/media/media-2.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img
              class="img-fluid"
              src="../../images/media/media-3.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img
              class="img-fluid"
              src="../../images/media/media-6.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img
              class="img-fluid"
              src="../../images/media/media-7.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img
              class="img-fluid"
              src="../../images/media/media-10.jpg"
              alt="img"
            />
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img
              class="img-fluid"
              src="../../images/media/media-11.jpg"
              alt="img"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-3 -->
