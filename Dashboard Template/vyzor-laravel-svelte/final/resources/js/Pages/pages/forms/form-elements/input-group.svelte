
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
  import Pageheader from "@/components/page-header/Pageheader.svelte";
  import {
    inputgroup1,
    inputgroup10,
    inputgroup11,
    inputgroup2,
    inputgroup3,
    inputgroup4,
    inputgroup5,
    inputgroup6,
    inputgroup7,
    inputgroup8,
    inputgroup9,
  } from "@/shared/data/prism-code/formsprism";
  import {
    Col,
    Row,
    InputGroup,
    InputGroupText,
    Input,
    Label,
  } from "@sveltestrap/sveltestrap";
  import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
  import SpkDropdown from "@/shared/@spk/uielements/Dropdown/SpkDropdown.svelte";
  import ShowCode from "@/components/showcode/ShowCode.svelte";
  import { Dropdownoption } from "@/shared/data/uielements/dropdowndata";
</script>

<!-- Page Title -->
<svelte:head>
  <title>InputGroup | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
  homepage="Input Group"
  activepage="Forms"
  subTitle=" Form Elements"
  page="Input Group"
/>
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row>
  <Col xl={12}>
    <ShowCode title="Input Groups" svelteCode={inputgroup1}>
      <InputGroup class="mb-3">
        <InputGroupText id="basic-addon1">@</InputGroupText>
        <Input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup class="mb-3">
        <Input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroupText id="basic-addon2">@example.com</InputGroupText>
      </InputGroup>
      <Label for="basic-url" class="form-label">Your vanity URL</Label>
      <InputGroup class="mb-3">
        <InputGroupText class="" id="basic-addon3"
          >https://example.com/</InputGroupText
        >
        <Input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </InputGroup>
      <InputGroup class="mb-3">
        <InputGroupText class="">$</InputGroupText>
        <Input
          type="text"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <InputGroupText>.00</InputGroupText>
      </InputGroup>
      <InputGroup class="mb-3">
        <Input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
        />
        <InputGroupText class="">@</InputGroupText>
        <Input
          type="text"
          class="form-control"
          placeholder="Server"
          aria-label="Server"
        />
      </InputGroup>
      <InputGroup class="">
        <InputGroupText class="">With textarea</InputGroupText>
        <Input
          type="textarea"
          class="form-control"
          aria-label="With textarea"
        />
      </InputGroup>
    </ShowCode>
  </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
  <Col xl={12} class="col-xl-12">
    <Row class="row">
      <Col xl={12}>
        <ShowCode title="Multiple inputs" svelteCode={inputgroup7}>
          <InputGroup>
            <InputGroupText>First, last name</InputGroupText>
            <Input type="text" aria-label="First name" />
            <Input type="text" aria-label="Last name" />
          </InputGroup>
        </ShowCode>
      </Col>
      <Col xl={12}>
        <ShowCode title="Checkboxes and radios" svelteCode={inputgroup8}>
          <InputGroup class="mb-3 custom-form-input">
            <InputGroupText>
              <Input
                class=" mt-0"
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </InputGroupText>
            <Input type="text" aria-label="Text input with checkbox" />
          </InputGroup>
          <InputGroup class="custom-form-input">
            <InputGroupText>
              <Input
                class="mt-0"
                type="radio"
                value=""
                aria-label="checkbox button for following text input"
              />
            </InputGroupText>
            <Input type="text" aria-label="Text input with radio button" />
          </InputGroup>
        </ShowCode>
      </Col>
      <Col xl={12}>
        <ShowCode title="Multiple addons" svelteCode={inputgroup9}>
          <InputGroup class="mb-3 custom-form-input">
            <InputGroupText>
              <Input
                class="mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </InputGroupText>
            <Input type="text" aria-label="Text input with checkbox" />
          </InputGroup>
          <InputGroup class="custom-form-input">
            <InputGroupText>
              <Input
                class="mt-0"
                type="radio"
                value=""
                aria-label="Radio button for following text input"
              />
            </InputGroupText>
            <Input type="text" aria-label="Text input with radio button" />
          </InputGroup>
        </ShowCode>
      </Col>
      <Col xl={12}>
        <ShowCode title="Segmented buttons" svelteCode={inputgroup10}>
          <InputGroup class="mb-3 segment-group">
            <SpkButton color="primary" buttontype="button" text="Action" />
            <SpkDropdown
              Color="primary custom-form-btn"
              Caret={true}
              parent=""
              Split={true}
              option={Dropdownoption}
            />
            <Input
              type="text"
              class=""
              aria-label="Text input with segmented dropdown button"
            />
          </InputGroup>
          <InputGroup class="segment-left-group">
            <Input
              type="text"
              aria-label="Text input with segmented dropdown button"
            />
            <SpkButton color="primary" buttontype="button" text="Action" />
            <SpkDropdown
              Color="primary custom-form-btn1"
              Caret={true}
              Split={true}
              parent=""
              option={Dropdownoption}
            />
          </InputGroup>
        </ShowCode>
      </Col>
      <Col xl={12}>
        <ShowCode
          title="Custom select"
          customCardBodyClass=""
          svelteCode={inputgroup11}
        >
          <InputGroup class="mb-3">
            <label class="input-group-text" for="inputGroupSelect01"
              >Options</label
            >
            <Input
              type="select"
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Input>
          </InputGroup>
          <InputGroup class="mb-3">
            <Input type="select" class="form-select" id="inputGroupSelect02">
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Input>
            <label class="input-group-text" for="inputGroupSelect02"
              >Options</label
            >
          </InputGroup>
          <InputGroup class="mb-3">
            <SpkButton color="primary" buttontype="button" text="Button" />
            <Input
              type="select"
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Input>
          </InputGroup>
          <InputGroup>
            <Input
              type="select"
              class="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Input>
            <SpkButton color="primary" buttontype="button" text="Button" />
          </InputGroup>
        </ShowCode>
      </Col>
    </Row>
  </Col>
  <Col xl={12}>
    <Row>
      <Col xl={12}>
        <ShowCode title="Sizing" svelteCode={inputgroup3}>
          <InputGroup class="input-group-sm mb-3">
            <InputGroupText class="" id="inputGroup-sizing-sm"
              >Small</InputGroupText
            >
            <Input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <InputGroup class="mb-3">
            <InputGroupText class="" id="inputGroup-sizing-default"
              >Default</InputGroupText
            >
            <Input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup class="input-group-lg">
            <InputGroupText class="" id="inputGroup-sizing-lg"
              >Large</InputGroupText
            >
            <Input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </InputGroup>
        </ShowCode>
      </Col>
      <Col xl={12}>
        <ShowCode title="Buttons addons" svelteCode={inputgroup4}>
          <InputGroup class="mb-3">
            <SpkButton
              color="primary"
              buttontype="button"
              id="button-addon1"
              text="Button"
            />
            <Input
              type="text"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </InputGroup>
          <InputGroup class="mb-3">
            <Input
              type="text"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <SpkButton
              color="primary"
              buttontype="button"
              id="button-addon1"
              text="Button"
            />
          </InputGroup>
          <InputGroup class="mb-3">
            <SpkButton
              color="primary"
              buttontype="button"
              id="button-addon1"
              text="Button"
            />
            <SpkButton
              color="primary"
              buttontype="button"
              id="button-addon1"
              text="Button"
            />
            <Input
              type="text"
              placeholder=""
              aria-label="Example text with two button addons"
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              placeholder="Recipient's username"
              aria-label="Recipient's username with two button addons"
            />
            <SpkButton
              color="primary"
              buttontype="button"
              id="button-addon1"
              text="Button"
            />
            <SpkButton
              color="primary"
              buttontype="button"
              id="button-addon1"
              text="Button"
            />
          </InputGroup>
        </ShowCode>
      </Col>
      <Col xl={12}>
        <ShowCode title="Buttons with dropdowns" svelteCode={inputgroup5}>
          <InputGroup class="mb-3 btn-dropdown-grp custom-drop">
            <SpkDropdown
              Color="primary"
              Caret={true}
              parent={`Dropdown`}
              option={Dropdownoption}
            />
            <Input
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
            />
          </InputGroup>
          <InputGroup class="mb-3 btn-dropdown-grp custom-drop1">
            <Input
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
            />
            <SpkDropdown
              Color="outline-primary"
              Caret={true}
              parent={`Dropdown`}
              option={Dropdownoption}
            />
          </InputGroup>
          <InputGroup class="flex-nowrap btn-dropdown-grp ">
            <SpkDropdown
              Color="primary-transparent px-2 px-sm-3 custom-drop2"
              Caret={true}
              parent={`Dropdown`}
              option={Dropdownoption}
            />
            <Input
              type="text"
              class=""
              aria-label="Text input with 2 dropdown buttons"
            />
            <SpkDropdown
              Color="primary-transparent px-2 px-sm-3 custom-drop3"
              Caret={true}
              parent={`Dropdown`}
              option={Dropdownoption}
            />
          </InputGroup>
        </ShowCode>
      </Col>
      <Col xl={12}>
        <ShowCode title="Custom file input" svelteCode={inputgroup6}>
          <InputGroup class="mb-3 custom-upload">
            <InputGroupText class="input-group-text" for="inputGroupFile01"
              >Upload</InputGroupText
            >
            <Input type="file" class="form-control" id="inputGroupFile01" />
          </InputGroup>
          <InputGroup class="mb-3 custom-upload">
            <Input type="file" class="form-control" id="inputGroupFile02" />
            <InputGroupText class="input-group-text" for="inputGroupFile02"
              >Upload</InputGroupText
            >
          </InputGroup>

          <InputGroup class="mb-3 custom-upload">
            <SpkButton
              color="primary"
              buttontype="button"
              id="inputGroupFileAddon03"
              text="Button"
            />
            <Input
              type="file"
              class="form-control"
              id="inputGroupFile03"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
            />
          </InputGroup>
          <InputGroup class="custom-upload">
            <Input
              type="file"
              class="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
            />
            <SpkButton
              color="primary"
              buttontype="button"
              id="inputGroupFileAddon04"
              text="Button"
            />
          </InputGroup>
        </ShowCode>
      </Col>
    </Row>
  </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
  <Col xl={12}>
    <ShowCode title="Warpping" svelteCode={inputgroup2}>
      <InputGroup class="flex-nowrap">
        <InputGroupText id="addon-wrapping">@</InputGroupText>
        <Input
          type="text"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </InputGroup>
    </ShowCode>
  </Col>
</Row>
<!-- End:: row-3 -->
