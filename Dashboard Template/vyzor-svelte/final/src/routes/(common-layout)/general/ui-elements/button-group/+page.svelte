<script lang="ts">
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import {
        btngroup1,
        btngroup2,
        btngroup3,
        btngroup4,
        btngroup5,
        btngroup6,
        btngroup7,
        btngroup8,
        btngroup9,
        btngroup10,
        btngroup11,
        databutton16,
    } from "$lib/components/common/prism-code/uielementsprim";
    import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
    import {
        ButtonGroup,
        Col,
        Row,
        InputGroup,
        InputGroupText,
        Input,
        ButtonToolbar,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from "@sveltestrap/sveltestrap";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import { SocialIconButtons } from "$lib/data/uielements/buttonsdata";
</script>

<!-- Page Title -->
<svelte:head>
    <title>ButtonGroup | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<Pageheader
    homepage="Button Group"
    activepage="UI Elements"
    page="Buttongroup"
/>
<!--ROW-START-->
<Row>
    <Col xl={6}>
        <ShowCode title="Basic example" svelteCode={btngroup1}>
      <ButtonGroup  role="group" aria-label="Basic example">
        <SpkButton color="info" buttontype="button" customClass="btn-wave"
          ><i class="bi bi-skip-backward"></i></SpkButton
        >
        <SpkButton color="info" buttontype="button" customClass="btn-wave"
          ><i class="bi bi-pause"></i></SpkButton
        >
        <SpkButton color="info" buttontype="button" customClass="btn-wave"
          ><i class="bi bi-skip-forward"></i></SpkButton
        >
      </ButtonGroup>
    </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Navigation" svelteCode={btngroup2}>
      <ButtonGroup >
        <SpkButton
          color="primary"
          active
          href="#!"
          customClass="  active btn-wave"
          text="Active link"
        />
        <SpkButton color="primary" href="#!"  text="Link" />
        <SpkButton color="primary" href="#!"  text="Link" />
      </ButtonGroup>
    </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Mixed Style" svelteCode={btngroup3}>
      <ButtonGroup
        
        role="group"
        aria-label="Basic mixed styles example"
      >
        <SpkButton
          color="danger"
          buttontype="button"
          customClass="btn-wave"
          text="Left"
        />
        <SpkButton
          color="warning"
          buttontype="button"
          customClass="btn-wave"
          text="Middle"
        />
        <SpkButton
          color="success"
          buttontype="button"
          customClass="btn-wave"
          text="Right"
        />
      </ButtonGroup>
    </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode title="Outline styled" svelteCode={btngroup4}>
      <ButtonGroup
        class="btn-group1"
        role="group"
        aria-label="Basic outlined example"
      >
        <SpkButton
          outline={true}
          color="primary"
          buttontype="button"
          customClass="btn-wave"
          text="Left"
        />
        <SpkButton
          outline={true}
          color="primary"
          buttontype="button"
          customClass="btn-wave"
          text="Middle"
        />
        <SpkButton
          outline={true}
          color="primary"
          buttontype="button"
          customClass="btn-wave"
          text="Right"
        />
      </ButtonGroup>
    </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
      title="Checkbox button groups"
      customCardBodyClass=" checkbox-button-group"
      svelteCode={btngroup5}
    >
      <ButtonGroup
        class="btn-group2"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input type="checkbox" class="btn-check" id="btncheck1" />
        <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label
        >
        <input type="checkbox" class="btn-check" id="btncheck2" />
        <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label
        >
        <input type="checkbox" class="btn-check" id="btncheck3" />
        <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label
        >
      </ButtonGroup>
    </ShowCode>
    </Col>
    <Col xl={6}>
        <ShowCode
      title=" Radio button groups"
      customCardBodyClass="radio-button-group"
      svelteCode={btngroup6}
    >
      <ButtonGroup
        class="btn-group2"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          checked
        />
        <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
        <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
        <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
      </ButtonGroup>
    </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Sizing" svelteCode={btngroup7}>
          <ButtonGroup
            class=" btn-group-lg my-1 me-1"
            role="group"
            aria-label="Large button group"
          >
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Left"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Middle"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Right"
            />
          </ButtonGroup>
          <ButtonGroup
            class=" my-1 me-1"
            role="group"
            aria-label="Default button group"
          >
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Left"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Middle"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Right"
            />
          </ButtonGroup>
          <ButtonGroup
            class=" btn-group-sm my-1 me-1"
            role="group"
            aria-label="Small button group"
          >
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Left"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Middle"
            />
            <SpkButton
              outline={true}
              color="success"
              buttontype="button"
              text="Right"
            />
          </ButtonGroup>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Button toolbar" svelteCode={btngroup8}>
          <ButtonToolbar
            class="mb-4 btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <ButtonGroup
              class=" me-2 my-1"
              role="group"
              aria-label="First group"
            >
              <SpkButton color="primary" buttontype="button" text="1" />
              <SpkButton color="primary" buttontype="button" text="2" />
              <SpkButton color="primary" buttontype="button" text="3" />
              <SpkButton color="primary" buttontype="button" text="4" />
            </ButtonGroup>
            <ButtonGroup
              class=" me-2 my-1"
              role="group"
              aria-label="Second group"
            >
              <SpkButton color="secondary" buttontype="button" text="5" />
              <SpkButton color="secondary" buttontype="button" text="6" />
              <SpkButton color="secondary" buttontype="button" text="7" />
            </ButtonGroup>
            <ButtonGroup class=" my-1" role="group" aria-label="Third group">
              <SpkButton color="info" buttontype="button" class="btn btn-info"
                >8</SpkButton
              >
            </ButtonGroup>
          </ButtonToolbar>
          <ButtonToolbar
            class="mb-3 btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <ButtonGroup
              class=" me-2 my-1"
              role="group"
              aria-label="First group"
            >
              <SpkButton
                outline={true}
                color="secondary"
                buttontype="button"
                text="1"
              />
              <SpkButton
                outline={true}
                color="secondary"
                buttontype="button"
                text="2"
              />
              <SpkButton
                outline={true}
                color="secondary"
                buttontype="button"
                text="3"
              />
              <SpkButton
                outline={true}
                color="secondary"
                buttontype="button"
                text="4"
              />
            </ButtonGroup>
            <InputGroup>
              <InputGroupText id="btnGroupAddon">@</InputGroupText>
              <Input
                type="text"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
            </InputGroup>
          </ButtonToolbar>
          <ButtonToolbar
            class="justify-content-between btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <ButtonGroup class="me-2 my-1" role="group" aria-label="First group">
              <SpkButton
                outline={true}
                color="secondary"
                buttontype="button"
                text="1"
              />
              <SpkButton
                outline={true}
                color="secondary"
                buttontype="button"
                text="2"
              />
              <SpkButton
                outline={true}
                color="secondary"
                buttontype="button"
                text="3"
              />
              <SpkButton
                outline={true}
                color="secondary"
                buttontype="button"
                text="4"
              />
            </ButtonGroup>
            <InputGroup>
              <InputGroupText id="btnGroupAddon2">@</InputGroupText>
              <Input
                type="text"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
              />
            </InputGroup>
          </ButtonToolbar>
        </ShowCode>
    </Col>
    <Col xl={12}>
       <ShowCode title="Nesting" svelteCode={btngroup9}>
          <ButtonGroup
            
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <SpkButton color="primary" buttontype="button" text="1" />
            <SpkButton color="primary" buttontype="button" text="2" />
            <Dropdown
              title="Dropdown"
              id="bg-nested-dropdown"
              direction="down"
              class="btn-group"
              role="group"
            >
              <DropdownToggle
                color="primary"
                class="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem
                  ><a  href="#!">Dropdown link</a></DropdownItem
                >
                <DropdownItem
                  ><a  href="#!">Dropdown link</a></DropdownItem
                >
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Vertical variation" svelteCode={btngroup10}>
          <div class="row gap-2">
            <Col sm={3}>
              <ButtonGroup
                vertical
                role="group"
                aria-label="Vertical button group"
              >
                <SpkButton color="primary" buttontype="button">Button</SpkButton>
                <SpkButton color="primary" buttontype="button">Button</SpkButton>
                <Dropdown
                  title="Dropdown"
                  id="bg-nested-dropdown"
                  direction="down"
                  class="btn-group"
                  role="group"
                >
                  <DropdownToggle
                    color="primary"
                    class="dropdown-toggle"
                    typetype="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem
                      ><a  href="#!">Dropdown link</a></DropdownItem
                    >
                    <DropdownItem
                      ><a  href="#!">Dropdown link</a></DropdownItem
                    >
                  </DropdownMenu>
                </Dropdown>
                <SpkButton color="primary" buttontype="button">Button</SpkButton>
                <SpkButton color="primary" buttontype="button">Button</SpkButton>
                <Dropdown
                  title="Dropdown"
                  id="bg-nested-dropdown"
                  direction="down"
                  class="btn-group"
                  role="group"
                >
                  <DropdownToggle
                    color="primary"
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem
                      ><a  href="#!">Dropdown link</a></DropdownItem
                    >
                    <DropdownItem
                      ><a  href="#!">Dropdown link</a></DropdownItem
                    >
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  title="Dropdown"
                  id="bg-nested-dropdown"
                  direction="down"
                  class="btn-group"
                  role="group"
                >
                  <DropdownToggle
                    color="primary"
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem
                      ><a  href="#!">Dropdown link</a></DropdownItem
                    >
                    <DropdownItem
                      ><a  href="#!">Dropdown link</a></DropdownItem
                    >
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  title="Dropdown"
                  id="bg-nested-dropdown"
                  direction="down"
                  class="btn-group"
                  role="group"
                >
                  <DropdownToggle
                    color="primary"
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem
                      ><a  href="#!">Dropdown link</a></DropdownItem
                    >
                    <DropdownItem
                      ><a  href="#!">Dropdown link</a></DropdownItem
                    >
                  </DropdownMenu>
                </Dropdown>
              </ButtonGroup>
            </Col>
            <Col sm={3}>
              <ButtonGroup
                vertical
                role="group"
                aria-label="Vertical button group"
              >
                <SpkButton color="info" buttontype="button" text="Button" />
                <SpkButton color="info" buttontype="button" text="Button" />
                <SpkButton color="info" buttontype="button" text="Button" />
                <SpkButton color="info" buttontype="button" text="Button" />
                <SpkButton color="info" buttontype="button" text="Button" />
                <SpkButton color="info" buttontype="button" text="Button" />
              </ButtonGroup>
            </Col>
            <Col sm={3}>
              <ButtonGroup
                vertical
                role="group"
                aria-label="Vertical radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio1"
                  checked
                />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio1"
                  >Radio 1</label
                >
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio2"
                />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio2"
                  >Radio 2</label
                >
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio3"
                />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio3"
                  >Radio 3</label
                >
              </ButtonGroup>
            </Col>
          </div>
        </ShowCode>
    </Col>
    <Col xl={12}>
       <ShowCode
          title="Social Group Buttons"
          svelteCode={btngroup11}
          dataCode={databutton16}
        >
          <ButtonGroup
            class="btn-group"
            role="group"
            aria-label="Basic example"
          >
            {#each SocialIconButtons as button}
              <SpkButton
                color={button.class1}
                customClass=" btn-icon  btn-wave waves-effect waves-light"
              >
                <i class={`fs-16 ri-${button.class}-line`}></i>
              </SpkButton>
            {/each}
          </ButtonGroup>
        </ShowCode>
    </Col>
</Row>
<!--ROW-END-->
