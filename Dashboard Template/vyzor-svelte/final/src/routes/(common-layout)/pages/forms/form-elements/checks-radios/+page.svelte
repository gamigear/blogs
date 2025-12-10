<script lang="ts">
    import {
        radio1,
        radio10,
        radio11,
        radio12,
        dataradio16,
        radio13,
        radio14,
        radio24,
        radio15,
        radio16,
        radio17,
        radio18,
        radio19,
        radio2,
        radio20,
        radio21,
        radio22,
        radio23,
        radio3,
        radio4,
        radio5,
        radio6,
        radio7,
        radio8,
        radio9,
    } from "$lib/components/common/prism-code/formsprism";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import { Col, Input, Label, Row } from "@sveltestrap/sveltestrap";
    import { Checkdata } from "$lib/data/forms/checks&radiosdata";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

    // svelteive state variables for each toggle button
    let primary1 = "on";
    let secondary1 = "on";
    let warning1 = "on";
    let info1 = "on";
    let success1 = "on";
    let danger1 = "on";
    let light1 = "on";
    let dark1 = "on";
    let primary2 = "on";
    let secondary2 = "on";
    let success2 = "on";
    // Toggle handler
    function toggle(state: string) {
        return state === "on" ? "off" : "on";
    }
    let radioChecked = "exampleRadios1";
    let selectedValue:null = null;
</script>

<!-- Page Title -->
<svelte:head>
    <title>ChecksRadios | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Checks & Radios"
    activepage="Forms"
    subTitle=" Form Elements"
    page="Checks & Radios"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row >
    <Col xl={6} lg={6} md={6} sm={12} >
        <ShowCode title="Checks" svelteCode={radio1}>
            <Input
                type="checkbox"
                id="flexCheckDefault"
                label=" Default checkbox"
            />
            <Input
                type="checkbox"
                id="flexCheckChecked"
                label=" Checked checkbox"
                checked
            />
        </ShowCode>
    </Col>
    <Col xl={6} lg={6} md={6} sm={12}>
        <ShowCode title="Disabled" svelteCode={radio2}>
      <Input type="checkbox" disabled label="Disabled checkbox" />
      <Input
        type="checkbox"
        disabled
        label="Disabled checked checkbox"
        checked
      />
    </ShowCode>
    </Col>
    <Col xl={6} lg={6} md={6} sm={12}>
        <ShowCode title="Radios" svelteCode={radio3}>
      <Input type="radio" label="Default radio" name="example-radios1" />
      <Input
        type="radio"
        checked
        label="Default checked radio"
        name="example-radios1"
      />
    </ShowCode>
    </Col>
    <Col xl={6} lg={6} md={6} sm={12}>
        <ShowCode title="Disabled" svelteCode={radio4}>
      <Input type="radio" name="flexRadioDisabled" label="Disabled radio" disabled />
      <Input type="radio" name="flexRadioDisabled" disabled checked label="Disabled checked radio" />
    </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={6} lg={6} md=12 sm={12}>
        <ShowCode title="Default (stacked)" svelteCode={radio5}>
      <Input type="checkbox" label="Default checkbox" />
      <Input type="checkbox" disabled label="Disabled checkbox" />
      <Input type="radio" name="exampleRadios" checked id="exampleRadios1" label="Default radio" />
      <Input type="radio"  bind:group={radioChecked} name="exampleRadios" id="exampleRadios3" disabled label="Disabled radio"  />
    </ShowCode>
    </Col>
    <Col xl={6} lg={6} md=12 sm={12}>
       <ShowCode title="Switches" svelteCode={radio6}>
      <Input type="switch" label="Default switch checkbox input" />
      <Input type="switch" checked label="Checked switch checkbox input" />
      <Input type="switch"  disabled label="Disabled switch checkbox input" />
      <Input
        type="switch"
        disabled
        checked
        label="Disabled checked switch checkbox input"
      />
    </ShowCode>
    </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
    <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
       <ShowCode
      title="Checkbox Sizes"
      customCardBodyClass="d-sm-flex align-items-center justify-content-between"
      svelteCode={radio7}
    >
      <Input type="checkbox" checked label="Default" />
      <Input
        class="form-check-md d-flex align-items-center"
        type="checkbox"
        checked
        id="checkebox-md"
        label="Medium"
      />
      <Input
        class="form-check-lg d-flex align-items-center"
        type="checkbox"
        checked
        id="checkebox-lg"
        label="Large"
      />
    </ShowCode>
    </Col>
    <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
        <ShowCode
      title="Radio Sizes"
      customCardBodyClass="d-sm-flex align-items-center justify-content-between"
      svelteCode={radio8}
    >
      <Input type="radio" label="default" name="example-radios" />
      <Input
        type="radio"
        class="form-check-md"
        id="Radio-md"
        name="example-radios"
        label="Medium"
      />
      <Input
        type="radio"
        class="form-check-lg"
        name="example-radios"
        checked
        id="Radio-lg"
        label="Large"
      />
    </ShowCode>
    </Col>
    <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
        <ShowCode
      title="Switch Sizes"
      customCardBodyClass="d-sm-flex align-item-center justify-content-between"
      svelteCode={radio9}
    >
      <Input type="switch" label="Default" />
      <Input
        type="switch"
        class="form-check-md form-switch"
        id="switch-md"
        label="Medium"
      />
      <Input
        type="switch"
        class="form-check-lg form-switch"
        id="switch-lg"
        label="Large"
      />
    </ShowCode>
    </Col>
</Row>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<Row>
    <Col xl={6} lg={12} md={12} sm={12}>
        <ShowCode title="Inline" svelteCode={radio10}>
      <Input class="form-check-inline" type="checkbox" label="1" />
      <Input class="form-check-inline" type="checkbox" label="2" />
      <Input
        class="form-check-inline"
        disabled
        type="checkbox"
        label="3 (disabled)"
      />
      <Input class="form-check-inline" name="inlineRadioOptions" type="radio" label="1" bind:group={selectedValue}  />
      <Input class="form-check-inline" name="inlineRadioOptions" type="radio" label="2" bind:group={selectedValue} />
      <Input
        class="form-check-inline"
        disabled 
        type="radio"
        name="inlineRadioOptions"
        label="3 (disabled)"
        bind:group={radioChecked}
      />
    </ShowCode>
       <ShowCode title="Without labels" svelteCode={radio11}>
      <div class="d-flex">
        <Input class="me-4" type="checkbox" />
        <Input type="radio" />
      </div>
    </ShowCode>
    </Col>
    <Col xl={3} lg={12} md={12} sm={12} >
       <ShowCode title="Reverse" svelteCode={radio12}>
      <Input reverse class=" mb-3" type="checkbox" label="Reverse checkbox" />
      <Input
        reverse
        class=" mb-3"
        type="checkbox"
        disabled
        label="Disabled reverse checkbox"
      />
      <Input
        reverse
        class=" mb-3"
        type="switch"
        label=" Reverse switch checkbox input"
      />
    </ShowCode>
    </Col>
    <Col xl={3} lg={12} md={12} sm={12} >
        <ShowCode title="Outlined styles" svelteCode={radio13}>
      <input type="checkbox" class="btn-check" id="btn-check-outlined" />
      <label class="btn btn-outline-primary mb-3" for="btn-check-outlined"
        >Single toggle</label
      ><br />

      <input
        type="checkbox"
        class="btn-check"
        id="btn-check-2-outlined"
        checked
      />
      <label class="btn btn-outline-secondary mb-3" for="btn-check-2-outlined"
        >Checked</label
      ><br />

      <input
        type="radio"
        class="btn-check"
        name="options-outlined"
        id="success-outlined"
        checked
      />
      <label class="btn btn-outline-success m-1" for="success-outlined"
        >Checked success radio</label
      >

      <input
        type="radio"
        class="btn-check"
        name="options-outlined"
        id="danger-outlined"
      />
      <label class="btn btn-outline-danger m-1" for="danger-outlined"
        >Danger radio</label
      >
    </ShowCode>
    </Col>
</Row>
<!-- End:: row-4 -->

<!-- Start:: row-5 -->
<Row >
    <Col xl={6} lg={12} md={12} sm={12}>
        <ShowCode title="Radio toggle buttons" svelteCode={radio14}>
      <Input
        type="radio"
        class="btn-check"
        name="options"
        id="option1"
        checked
      />
      <SpkButton
        buttontype="button"
        color="primary"
        customClass="m-1"
        text="Checked"
      />
      <Input type="radio" class="btn-check" name="options" id="option2" />
      <SpkButton
        buttontype="button"
        color="primary"
        customClass="m-1"
        text="Radio"
      />
      <Input
        type="radio"
        class="btn-check"
        name="options"
        id="option3"
        disabled
      />
      <SpkButton
        disabled={true}
        buttontype="button"
        color="primary"
        customClass="m-1"
        text="Disabled"
      />
      <Input type="radio" class="btn-check" name="options" id="option4" />
      <SpkButton
        buttontype="button"
        color="primary"
        customClass="m-1"
        text="Radio"
      />
    </ShowCode>
    </Col>
    <Col xl={6} lg={12} md={12} sm={12}>
        <ShowCode title="Checkbox toggle buttons" svelteCode={radio15}>
      <Input type="checkbox" class="btn-check" id="btn-check" />
      <SpkButton
        buttontype="button"
        color="primary"
        customClass="m-1"
        text="Single toggle"
      />
      <Input type="checkbox" class="btn-check" id="btn-check-2" checked />
      <SpkButton
        buttontype="button"
        color="primary"
        customClass="m-1"
        text="Checked"
      />
      <Input type="checkbox" class="btn-check" id="btn-check-3" disabled />
      <SpkButton
        disabled={true}
        buttontype="button"
        color="primary"
        customClass="m-1"
        text="Disabled"
      />
    </ShowCode>
    </Col>
</Row>
<!-- End:: row-5 -->

<!-- Start:: row-6 -->
<Row class="row-cols-12">
    <Col md={6} lg={6} class="col-xl">
        <ShowCode
      title="Colored Checkboxes"
      svelteCode={radio16}
      dataCode={dataradio16}
    >
      {#each Checkdata as idx (idx.id)}
        <div class="form-check {idx.checkclass}">
          <input
            id={idx.id}
            class="form-check-input form-checked-{idx.checkcolor}"
            type="checkbox"
            checked
          />
          <label for={idx.lablefor}>{idx.text}</label>
        </div>
      {/each}
    </ShowCode>
    </Col>
    <Col md={6} lg={6} class="col-xl">
        <ShowCode
      title="Outline Checkboxes"
      svelteCode={radio17}
      dataCode={dataradio16}
    >
      {#each Checkdata as idx (idx.id)}
        <div class={`form-check ${idx.checkclass}`}>
          <input
            id={idx.id}
            class={`form-check-input form-checked-outline form-checked-${idx.checkcolor}`}
            type="checkbox"
            checked
          />
          <label for={idx.lablefor}>{idx.text}</label>
        </div>
      {/each}
    </ShowCode>
    </Col>
    <Col md={12} class="col-lg col-xl">
        <ShowCode
      title="Colored Radios"
      svelteCode={radio18}
      dataCode={dataradio16}
    >
      {#each Checkdata as idx (idx.id)}
        <div class="form-check {idx.checkclass}">
          <input
            id={idx.id}
            class="form-check-input form-checked-{idx.checkcolor}"
            type="radio"
            checked
          />
          <label for={idx.lablefor}>{idx.text}</label>
        </div>
      {/each}
    </ShowCode>
    </Col>
    <Col sm={6} class=" col-lg">
        <ShowCode
      title="Outline Radios"
      svelteCode={radio19}
      dataCode={dataradio16}
    >
      {#each Checkdata as idx (idx.id)}
        <div class={`form-check ${idx.checkclass}`}>
          <input
            id={idx.id}
            class={`form-check-input form-checked-outline form-checked-${idx.checkcolor}`}
            type="radio"
            checked
          />
          <label for={idx.lablefor}>{idx.text}</label>
        </div>
      {/each}
    </ShowCode>
    </Col>
    <Col sm={6} class="col col-lg">
        <ShowCode
      title="Switches Colors"
      svelteCode={radio20}
      dataCode={dataradio16}
    >
      {#each Checkdata as idx (idx.id)}
        <div class="form-check form-switch {idx.checkclass}">
          <input
            id={idx.id}
            class="form-check-input form-checked-{idx.checkcolor}"
            type="checkbox"
            role="switch"
            checked
          />
          <label for={idx.lablefor}>{idx.text}</label>
        </div>
      {/each}
    </ShowCode>
    </Col>
</Row>
<!-- End:: row-6 -->

<!-- Start:: row-7 -->
<Row >
    <Col xl={12} lg={12} md={12} sm={12}>
        <ShowCode title="Toggle Switches Style-1" svelteCode={radio21}>
      <Row class=" gy-1">
        <Col xl={4}>
          <div class="d-flex gap-2">
            <div
              class="toggle {primary1}"
              role="button"
              on:click={() => (primary1 = toggle(primary1))}
              tabindex="0"
              on:keydown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  () => (primary1 = toggle(primary1));
                }
              }}
            >
              <span></span>
            </div>
            primary
          </div>
        </Col>
        <Col xl={4}>
          <div class="d-flex gap-2">
            <div
              class="toggle mb-3 toggle-secondary {secondary1}"
              role="button"
              on:click={() => (secondary1 = toggle(secondary1))}
              tabindex="0"
              on:keydown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  () => (secondary1 = toggle(secondary1));
                }
              }}
            >
              <span></span>
            </div>
            Secondary
          </div>
        </Col>
        <Col xl={4}>
          <div class="d-flex gap-2">
            <div
              class="toggle mb-3 toggle-warning {warning1}"
              on:click={() => (warning1 = toggle(warning1))}
              role="button"
              tabindex="0"
              on:keydown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  () => (warning1 = toggle(warning1));
                }
              }}
            >
              <span></span>
            </div>
            Warning
          </div>
        </Col>
        <Col xl={4}>
          <div class="d-flex gap-2">
            <div
              class="toggle mb-3 toggle-info {info1}"
              on:click={() => (info1 = toggle(info1))}
              role="button"
              tabindex="0"
              on:keydown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  () => (info1 = toggle(info1));
                }
              }}
            >
              <span></span>
            </div>
            Info
          </div>
        </Col>
        <Col xl={4}>
          <div class="d-flex gap-2">
            <div
              class="toggle mb-3 toggle-success {success1}"
              on:click={() => (success1 = toggle(success1))}
              role="button"
              tabindex="0"
              on:keydown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  () => (success1 = toggle(success1));
                }
              }}
            >
              <span></span>
            </div>
            Success
          </div>
        </Col>
        <Col xl={4}>
          <div class="d-flex gap-2">
            <div
              class="toggle mb-3 toggle-danger {danger1}"
              on:click={() => (danger1 = toggle(danger1))}
              role="button"
              tabindex="0"
              on:keydown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  () => (danger1 = toggle(danger1));
                }
              }}
            >
              <span></span>
            </div>
            Danger
          </div>
        </Col>
        <Col xl={4}>
          <div class="d-flex gap-2">
            <div
              class="toggle mb-3 toggle-light {light1}"
              on:click={() => (light1 = toggle(light1))}
              role="button"
              tabindex="0"
              on:keydown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  () => (light1 = toggle(light1));
                }
              }}
            >
              <span></span>
            </div>
            light
          </div>
        </Col>
        <Col xl={4}>
          <div class="d-flex gap-2">
            <div
              class="toggle ms-sm-2 toggle-dark {dark1}"
              on:click={() => (dark1 = toggle(dark1))}
              role="button"
              tabindex="0"
              on:keydown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  () => (dark1 = toggle(dark1));
                }
              }}
            >
              <span></span>
            </div>
            Dark
          </div>
        </Col>
      </Row>
    </ShowCode>
    </Col>
    <Col xl={12} lg={12} md={12} sm={12}>
        <ShowCode
      title="Toggle Switches Style-2"
      svelteCode={radio22}
    >
      <Row class="gy-1">
        <Col xl={4}>
          <div class="custom-toggle-switch d-flex align-items-center mb-4">
            <input
              id="toggleswitchPrimary"
              name="toggleswitch001"
              type="checkbox"
              checked
            />
            <Label for="toggleswitchPrimary" class="label-primary"></Label><span
              class="ms-3">Primary</span
            >
          </div>
        </Col>
        <Col xl={4}>
          <div class="custom-toggle-switch d-flex align-items-center mb-4">
            <input
              id="toggleswitchSecondary"
              name="toggleswitch001"
              type="checkbox"
              checked
            />
            <Label for="toggleswitchSecondary" class="label-secondary"
            ></Label><span class="ms-3">Secondary</span>
          </div>
        </Col>
        <Col xl={4}>
          <div class="custom-toggle-switch d-flex align-items-center mb-4">
            <input
              id="toggleswitchWarning"
              name="toggleswitch001"
              type="checkbox"
              checked
            />
            <Label for="toggleswitchWarning" class="label-warning"></Label><span
              class="ms-3">Warning</span
            >
          </div>
        </Col>
        <Col xl={4}>
          <div class="custom-toggle-switch d-flex align-items-center mb-4">
            <input
              id="toggleswitchInfo"
              name="toggleswitch001"
              type="checkbox"
              checked
            />
            <Label for="toggleswitchInfo" class="label-info"></Label><span
              class="ms-3">Info</span
            >
          </div>
        </Col>
        <Col xl={4}>
          <div class="custom-toggle-switch d-flex align-items-center mb-4">
            <input
              id="toggleswitchSuccess"
              name="toggleswitch001"
              type="checkbox"
              checked
            />
            <Label for="toggleswitchSuccess" class="label-success"></Label><span
              class="ms-3">Success</span
            >
          </div>
        </Col>
        <Col xl={4}>
          <div class="custom-toggle-switch d-flex align-items-center mb-4">
            <input
              id="toggleswitchDanger"
              name="toggleswitch001"
              type="checkbox"
              checked
            />
            <Label for="toggleswitchDanger" class="label-danger"></Label><span
              class="ms-3">Danger</span
            >
          </div>
        </Col>
        <Col xl={4}>
          <div class="custom-toggle-switch d-flex align-items-center mb-4">
            <input
              id="toggleswitchLight"
              name="toggleswitch001"
              type="checkbox"
              checked
            />
            <Label for="toggleswitchLight" class="label-light"></Label><span
              class="ms-3">Light</span
            >
          </div>
        </Col>
        <Col xl={4}>
          <div class="custom-toggle-switch d-flex align-items-center mb-4">
            <input
              id="toggleswitchDark"
              name="toggleswitch001"
              type="checkbox"
              checked
            />
            <Label for="toggleswitchDark" class="label-dark"></Label><span
              class="ms-3">Dark</span
            >
          </div>
        </Col>
      </Row>
    </ShowCode>
    </Col>
</Row>
<!-- End:: row-7 -->

<!-- Start:: row-8 -->
<Row >
    <Col xl={12} lg={12} md={12} sm={12}>
        <ShowCode title="Toggle Switch-1 Sizes" svelteCode={radio23}>
      <div class="d-flex align-items-center flex-wrap mb-3">
        <div >
          <p class="text-muted m-0">
            Small size toggle switch <code>toggle-sm</code>
          </p>
        </div>
        <div
          class="toggle toggle-sm mb-0 {primary2}"
          on:click={() => (primary2 = toggle(primary2))}
          role="button"
          tabindex="0"
          on:keydown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              () => (primary2 = toggle(primary2));
            }
          }}
        >
          <span></span>
        </div>
      </div>
      <div class="d-flex align-items-center flex-wrap mb-3">
        <div >
          <p class="text-muted m-0">Default toggle switch <code></code></p>
        </div>
        <div
          class="toggle toggle-secondary mb-0 {secondary2}"
          on:click={() => (secondary2 = toggle(secondary2))}
          role="button"
          tabindex="0"
          on:keydown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              () => (secondary2 = toggle(secondary2));
            }
          }}
        >
          <span></span>
        </div>
      </div>
      <div class="d-flex align-items-center flex-wrap">
        <div >
          <p class="text-muted m-0">
            Large size toggle switch <code>toggle-lg</code>
          </p>
        </div>
        <div
          class="toggle toggle-lg toggle-success mb-0 {success2}"
          on:click={() => (success2 = toggle(success2))}
          role="button"
          tabindex="0"
          on:keydown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              () => (success2 = toggle(success2));
            }
          }}
        >
          <span></span>
        </div>
      </div>
    </ShowCode>
    </Col>
    <Col xl={12} lg={12} md={12} sm={12}>
        <ShowCode title="Toggle Switch-2 Sizes" svelteCode={radio24}>
      <div class="d-flex align-items-center flex-wrap mb-2">
        <div>
          <p class="text-muted">
            Small size toggle switch <code>toggle-sm</code>
          </p>
        </div>
        <div class="custom-toggle-switch toggle-sm ms-2">
          <input id="size-sm" name="toggleswitchsize" type="checkbox" checked />
          <Label for="size-sm" class="label-primary"></Label>
        </div>
      </div>
      <div class="d-flex align-items-center flex-wrap mb-4">
        <div ><p class="text-muted m-0">Default toggle switch</p></div>
        <div class="custom-toggle-switch ms-2">
          <input
            id="size-default"
            name="toggleswitchsize"
            type="checkbox"
            checked
          />
          <Label for="size-default" class="label-secondary mb-1"></Label>
        </div>
      </div>
      <div class="d-sm-flex d-block align-items-center flex-wrap">
        <div class="mb-sm-0 mb-2">
          <p class="text-muted m-0">
            Large size toggle switch <code>toggle-lg</code>
          </p>
        </div>
        <div class="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
          <input id="size-lg" name="toggleswitchsize" type="checkbox" checked />
          <Label for="size-lg" class="label-success mb-2"></Label>
        </div>
      </div>
    </ShowCode>
    </Col>
</Row>
<!-- End:: row-8 -->
