
<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { Card, CardBody, CardHeader, Col, Row } from "@sveltestrap/sveltestrap";
    import VectorMap from "./VectorMap.svelte";
    import Map from "$lib/view/maps/Map.svelte";
    import MapImage from "$lib/view/maps/MapImage.svelte";
    import MapLine from "$lib/view/maps/MapLine.svelte";
</script>

<!-- Page Title -->
<svelte:head>
    <title>VectorMaps | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<!-- Page Header -->
<Pageheader homepage="Vector Maps" activepage=" Maps" page="Vector Maps" />
<!-- Page Header Close -->

<!-- Start::row-1 -->
<Row class="row">
    <Col class="col-xl-6">
        <Card class=" custom-card">
            <CardHeader class="card-header">
                <div class="card-title">Basic Vector Map</div>
            </CardHeader>
            <CardBody class="card-body overflow-auto">
                <VectorMap id="vector-map" />
            </CardBody>
        </Card>
    </Col>
    <div class="col-xl-6">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Map With Markers</div>
            </div>
            <div class="card-body overflow-auto">
                <Map id="marker-map" />
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Map With Image Markers</div>
            </div>
            <div class="card-body overflow-auto">
                <MapImage id="marker-image-map"></MapImage>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="card custom-card">
            <div class="card-header">
                <div class="card-title">Map With Lines</div>
            </div>
            <div class="card-body overflow-auto">
                <MapLine id="lines-map"></MapLine>
            </div>
        </div>
    </div>
    <!-- <div class="col-xl-6">
          <div class="card custom-card">
              <div class="card-header">
                  <div class="card-title">US Vector Map</div>
              </div>
              <div class="card-body">
                  <div id="us-map"></div>
              </div>
          </div>
      </div>
      <div class="col-xl-6">
          <div class="card custom-card">
              <div class="card-header">
                  <div class="card-title">Russia Vector Map</div>
              </div>
              <div class="card-body">
                  <div id="russia-map"></div>
              </div>
          </div>
      </div>
      <div class="col-xl-6">
          <div class="card custom-card">
              <div class="card-header">
                  <div class="card-title">Spain Vector Map</div>
              </div>
              <div class="card-body">
                  <div id="spain-map"></div>
              </div>
          </div>
      </div>
      <div class="col-xl-6">
          <div class="card custom-card">
              <div class="card-header">
                  <div class="card-title">Canada Vector Map</div>
              </div>
              <div class="card-body">
                  <div id="canada-map"></div>
              </div>
          </div>
      </div> -->
</Row>

<!--End::row-1 -->
    