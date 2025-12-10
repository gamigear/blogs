<script lang="ts">
  import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
  import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";
  import { Col, Row } from "@sveltestrap/sveltestrap";
  import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
  import {
    datatooltip1,
    tooltip1,
    tooltip2,
    datatooltip2,
    datatooltip4,
    tooltip3,
    tooltip4,
    tooltip5,
    tooltip6,
  } from "$lib/components/common/prism-code/uielementsprim";
  import {
    Coloredtooltip,
    SVGtooltip,
    Tooltipdirtooltip,
  } from "$lib/data/uielements/tooltipsdata";
  import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
</script>

<!-- Page Title -->
<svelte:head>
  <title>Tooltips | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<Pageheader homepage="Tooltips" activepage="UI Elements" page="Tooltips" />
<!-- Start:: row-1 -->
<Row>
  <Col xl={12}>
    <ShowCode
      title="Tooltip Directions"
      customCardClass=""
      svelteCode={tooltip1}
      dataCode={datatooltip1}
    >
      <div class="btn-list">
        {#each Tooltipdirtooltip as tooltip (tooltip.id)}
          <SpkButton
            id={`tooltipButton-${tooltip.id}`}
            color="primary"
            text={tooltip.text}
          />
          <SpkTooltips
            customClass=""
            targetId={`tooltipButton-${tooltip.id}`}
            content={tooltip.text}
            placement={tooltip.text.split(" ")[2]}
          />
        {/each}
      </div>
    </ShowCode>
  </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
  <Col xl={12}>
    <ShowCode
      title="Colored Tooltips"
      customCardClass=""
      svelteCode={tooltip2}
      dataCode={datatooltip2}
    >
      <div class="btn-list">
        {#each Coloredtooltip as tooltip (tooltip.id)}
          <SpkButton
            id={`tooltip-${tooltip.id}`}
            color={tooltip.color}
            text={tooltip.text}
          />
          <SpkTooltips
            placement={tooltip.placement}
            customClass={`tooltip-${tooltip.color}`}
            targetId={`tooltip-${tooltip.id}`}
            content={tooltip.text}
          />
        {/each}
      </div>
    </ShowCode>
  </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
  <Col xl={6}>
    <ShowCode title="Tooltips on links" svelteCode={tooltip3}>
      <p class="text-muted mb-0">
        Hover on the link to view the
        <a href="#!" id="link" class="text-primary ms-1 d-inline-flex"
          >Tooltip
        </a>
        <SpkTooltips
          placement="top"
          customClass={`tooltip-primary`}
          targetId="link"
          content=" Link Tooltip"
        />
      </p>
    </ShowCode>
  </Col>
  <Col xl={6}>
    <ShowCode
      title="With an SVG's"
      svelteCode={tooltip4}
      dataCode={datatooltip4}
    >
      <!-- svelte-ignore a11y_consider_explicit_label -->
      {#each SVGtooltip as tooltip (tooltip.id)}
        <a
          href="#!"
          id={`svgtooltip-${tooltip.id}`}
          class={`me-3 svg-${tooltip.color}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`svg-${tooltip.color}`}
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" /><path
              d={tooltip.class}
            /></svg
          >
        </a>
        <SpkTooltips
          placement="top"
          customClass={`tooltip-${tooltip.color}`}
          targetId={`svgtooltip-${tooltip.id}`}
          content={tooltip.text}
        />
      {/each}
    </ShowCode>
  </Col>
  <Col xl={6}>
    <ShowCode title="Disabled elements" svelteCode={tooltip5}>
      <span id="tooltip-disabled" class="d-inline-block">
        <SpkButton color="primary" disabled={true} text="Disabled button" />
      </span>
      <SpkTooltips
        placement="top"
        targetId="tooltip-disabled"
        content="Disabled tooltip"
      />
    </ShowCode>
  </Col>
  <Col xl={6}>
    <ShowCode title="Tooltip For Images" svelteCode={tooltip6}>
      <a
        href="#!"
        id="Alex"
        class="avatar avatar-md me-2 online avatar-rounded"
      >
        <img loading="lazy" src="../../images/faces/12.jpg" alt="img" /></a
      >
      <SpkTooltips
        placement="top"
        customClass={`tooltip-primary`}
        targetId="Alex"
        content="Alex Carey"
      />
      <a
        href="#!"
        id="Marina"
        class="avatar avatar-lg me-2 online avatar-rounded"
      >
        <img loading="lazy" src="../../images/faces/3.jpg" alt="img" /></a
      >
      <SpkTooltips
        placement="top"
        customClass={`tooltip-primary`}
        targetId="Marina"
        content="Marina Kai"
      />
      <a href="#!" id="Tim" class="avatar avatar-xl me-2 online avatar-rounded">
        <img loading="lazy" src="../../images/faces/15.jpg" alt="img" /></a
      >
      <SpkTooltips
        placement="top"
        customClass={`tooltip-primary`}
        targetId="Tim"
        content="Tim Cook"
      />
    </ShowCode>
  </Col>
</Row>
<!-- End:: row-3 -->
