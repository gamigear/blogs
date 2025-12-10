
<script lang="ts">
      import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
  import SpkBasicCard from "$lib/@spk/SpkBasicCard.svelte";

  import {
    Col,
    Navbar,
    Row,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavLink,
    NavItem,
    Offcanvas,
    Collapse,
  } from "@sveltestrap/sveltestrap";
  import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
  import { Dropdownoption } from "$lib/data/uielements/dropdowndata";
  import { dayDropdown } from "$lib/data/uielements/dropdowndata";
  
  let toggles: Record<string, boolean> = {};

  function toggle(key: string): void {
    // If the key doesn't exist, initialize it as false first
    if (!(key in toggles)) {
      toggles[key] = false;
    }
    toggles[key] = !toggles[key];
    toggles = { ...toggles }; // trigger reactivity
  }
</script>

<!-- Page Title -->
<svelte:head>
    <title>Navbar | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader homepage="Navbar" activepage="Advanced Ui" page="Navbar" />
<!-- Page Header Close -->

<!-- Start:: row-1 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard
      cardProps="custom-card"
      headerTitle=" Navbar with sub-component"
    >
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar expand="lg" color="light">
          <NavbarBrand aria-label="anchor" href="#!">
            <img
              src="../../images/brand-logos/toggle-logo.png"
              alt=""
              class="d-inline-block align-text-top"
            />
          </NavbarBrand>
          <NavbarToggler
            class=""
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={() => toggle("first")}
          ></NavbarToggler>
          <Collapse
            class="navbar-collapse"
            isOpen={toggles["first"]}
            navbar
            id="navbarSupportedContent"
            expand="lg"
          >
            <Nav navbar class="me-auto mb-2 mb-lg-0">
              <NavItem class="nav-item">
                <NavLink class="active text-primary" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem class="nav-item">
                <NavLink class="nav-link" href="#!">Link</NavLink>
              </NavItem>
              <SpkDropdown
                CustomClass="nav-item dropdown"
                Size=""
                Color=""
                ToggleClass="nav-link fs-14"
                Caret={true}
                parent={` Dropdown`}
                option={Dropdownoption}
              />

              <NavItem class="nav-item">
                <NavLink href="#!" class="nav-link disabled">Disabled</NavLink>
              </NavItem>
            </Nav>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-primary" type="button" >Search</button>
            </form>
          </Collapse>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-1 -->


<!-- Start:: row-2 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard
      cardProps="custom-card"
      headerTitle="Brand With And Without Links"
    >
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar class="bg-light mb-3" container="fluid">
          <NavbarBrand aria-label="anchor" class="navbar-brand" href=""
            ><img
              src="../../images/brand-logos/toggle-logo.png"
              alt=""
            /></NavbarBrand
          >
        </Navbar>
        <Navbar class="bg-light" container="fluid">
          <NavbarBrand class="navbar-brand mb-0 h1" href=''
            ><img
              src="../../images/brand-logos/toggle-logo.png"
              alt=""
            /></NavbarBrand
          >
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="    Image and text">
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar class="bg-light" container="fluid">
          <NavbarBrand class="text-default" href="#!">
            <img
              src="../../images/brand-logos/toggle-logo.png"
              alt=""
              class="d-inline-block align-text-top"
            />
            Bootstrap
          </NavbarBrand>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard
      cardProps="custom-card"
      headerTitle=" Nav with lists, links and dropdowns"
    >
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar class="bg-light mb-3" expand="lg" container="fluid">
          <NavbarBrand aria-label="anchor" href="#!"
            ><img
              src="../../images/brand-logos/toggle-logo.png"
              alt=""
            /></NavbarBrand
          >
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('navWithList')}
          ></NavbarToggler>
          <Collapse isOpen={toggles['navWithList']} navbar expand="lg" id="navbarNav">
            <Nav navbar>
              <NavItem>
                <NavLink class="active" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem>
                <NavLink href="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!" class="disabled">Disabled</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Navbar expand="lg" container="fluid" class="bg-light mb-3">
          <NavbarBrand aria-label="anchor" class="navbar-brand" href="#!"
            ><img
              src="../../images/brand-logos/toggle-logo.png"
              alt=""
            /></NavbarBrand
          >
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('navWithList1')}
          ></NavbarToggler>
          <Collapse expand="lg" isOpen={toggles['navWithList1']} navbar id="navbarNavAltMarkup">
            <Nav navbar>
              <NavLink class="active" aria-current="page" href="#!"
                >Home</NavLink
              >
              <NavLink class="nav-link" href="#!">Features</NavLink>
              <NavLink class="nav-link" href="#!">Pricing</NavLink>
              <NavLink href="#!" class="nav-link disabled">Disabled</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
        <Navbar expand="lg" container="fluid" class="bg-light">
          <NavbarBrand aria-label="anchor" class="navbar-brand" href="#!"
            ><img
              src="../../images/brand-logos/toggle-logo.png"
              alt=""
            /></NavbarBrand
          >
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('navWithList2')}
          ></NavbarToggler>
          <Collapse expand="lg" isOpen={toggles['navWithList2']} navbar id="navbarNavDropdown">
            <Nav navbar>
              <NavItem>
                <NavLink class="active" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem>
                <NavLink href="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Pricing</NavLink>
              </NavItem>
              <SpkDropdown
                CustomClass="nav-item dropdown"
                Size=""
                Color=""
                ToggleClass="nav-link"
                Caret={true}
                parent={` Dropdown link`}
                option={Dropdownoption}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-4 -->

<!-- Start:: row-5 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="Forms In Navbar">
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar container="fluid" class="bg-light mb-3">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary" type="button">Search</button>
          </form>
        </Navbar>
        <Navbar class="bg-light mb-3" container="fluid">
          <NavbarBrand href="#!" aria-label="anchor" class="navbar-brand"
            ><img
              src="../../images/brand-logos/toggle-logo.png"
              alt=""
            /></NavbarBrand
          >
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary" type="button">Search</button>
          </form>
        </Navbar>
        <h6 class="mb-3 fw-semibold">Input groups in navbar forms</h6>
        <Navbar class="bg-light mb-3" container="fluid">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </Navbar>
        <h6 class="mb-3 fw-semibold">
          Variation buttons are supported as part of the navbar forms
        </h6>
        <nav class="navbar bg-light">
          <form class="container-fluid justify-content-start">
            <button class="btn btn-primary m-1" type="button"
              >Main button</button
            >
            <button class="btn btn-sm btn-outline-secondary m-1" type="button"
              >Smaller button</button
            >
          </form>
        </nav>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-5 -->

<!-- Start:: row-6 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="  Navbar With Text">
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar class="bg-light mb-3" container="fluid">
          <span class="navbar-text"> Navbar text with an inline element </span>
        </Navbar>
        <Navbar expand="lg" container="fluid" class="bg-light">
          <NavbarBrand href="#!">Navbar with text</NavbarBrand>
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('navBarWithText')}
          ></NavbarToggler>
          <Collapse isOpen={toggles['navBarWithText']} expand="lg" navbar id="navbarText">
            <Nav navbar class="me-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink class="active" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem>
                <NavLink href="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Pricing</NavLink>
              </NavItem>
            </Nav>
            <span class="navbar-text">
              Navbar text with an inline element
            </span>
          </Collapse>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-6 -->

<!-- Start:: row-7 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard
      cardProps="custom-card"
      headerTitle="Transparent Color Schemes"
    >
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar
          expand="lg"
          container="fluid"
          class="mb-3 navbar-primary-transparent"
        >
          <NavbarBrand aria-label="anchor" href="#!">
            <img  loading="lazy" src="../../images/brand-logos/toggle-logo.png" alt="" />
          </NavbarBrand>
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('primaryNav')}
          ></NavbarToggler>
          <Collapse isOpen={toggles['primaryNav']} expand="lg" navbar id="navbarColor01">
            <Nav navbar class="me-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink class="active" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem>
                <NavLink href="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">About</NavLink>
              </NavItem>
            </Nav>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-primary" type="button">Search</button>
            </form>
          </Collapse>
        </Navbar>
        <Navbar
          expand="lg"
          container="fluid"
          class="mb-3 navbar-secondary-transparent"
        >
          <NavbarBrand aria-label="anchor" class="navbar-brand" href="#!"
            ><img
              src="../../images/brand-logos/toggle-logo.png"
              alt=""
            /></NavbarBrand
          >
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('secondarNav')}
          ></NavbarToggler>
          <Collapse isOpen={toggles['secondarNav']} navbar expand="lg" id="navbarColor02">
            <Nav navbar class="me-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink class="active" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem>
                <NavLink href="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">About</NavLink>
              </NavItem>
            </Nav>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-secondary" type="button">Search</button>
            </form>
          </Collapse>
        </Navbar>
        <Navbar expand="lg" container="fluid"  class="navbar-dark-transparent">
          <NavbarBrand aria-label="anchor" class="navbar-brand" href="#!"
            ><img
              src="../../images/brand-logos/toggle-logo.png"
              alt=""
            /></NavbarBrand
          >
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('darkNav')}
          ></NavbarToggler>
          <Collapse navbar expand="lg" isOpen={toggles['darkNav']} id="navbarColor03">
            <Nav navbar class="me-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink class="active" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem>
                <NavLink href="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">About</NavLink>
              </NavItem>
            </Nav>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-dark" type="button">Search</button>
            </form>
          </Collapse>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="Solid Color Schemes">
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar expand="lg" container="fluid" class="mb-3 navbar-primary ">
          <NavbarBrand aria-label="anchor" href="#!">
            <img  loading="lazy" src="../../images/brand-logos/toggle-dark.png" alt="" />
          </NavbarBrand>
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor04"
            aria-controls="navbarColor04"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('sloidPrimary')}
          ></NavbarToggler>
          <Collapse isOpen={toggles['sloidPrimary']} navbar expand="lg" id="navbarColor04">
            <Nav navbar class="me-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink class="active" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem>
                <NavLink href="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">About</NavLink>
              </NavItem>
            </Nav>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 border-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-light" type="button">Search</button>
            </form>
          </Collapse>
        </Navbar>
        <Navbar expand="lg" container="fluid" class="mb-3 navbar-secondary ">
          <NavbarBrand aria-label="anchor" class="navbar-brand" href="#!"
            ><img
              src="../../images/brand-logos/toggle-dark.png"
              alt=""
            /></NavbarBrand
          >
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor05"
            aria-controls="navbarColor05"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('sloidSecondary')}
          ></NavbarToggler>
          <Collapse navbar expand="lg" isOpen={toggles['sloidSecondary']} id="navbarColor05">
            <Nav navbar class="me-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink class="active" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem>
                <NavLink href="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">About</NavLink>
              </NavItem>
            </Nav>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 border-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-light" type="button">Search</button>
            </form>
          </Collapse>
        </Navbar>
        <Navbar expand="lg" container="fluid" class="navbar-dark">
          <NavbarBrand aria-label="anchor" class="navbar-brand" href="#!"
            ><img
              src="../../images/brand-logos/toggle-logo.png"
              alt=""
            /></NavbarBrand
          >
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor06"
            aria-controls="navbarColor06"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('solidDark')}
          ></NavbarToggler>
          <Collapse
            isOpen={toggles['solidDark']}
            expand="lg"
            navbar
            class="collapse navbar-collapse"
            id="navbarColor06"
          >
            <Nav navbar class="me-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink class="active" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem>
                <NavLink href="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">About</NavLink>
              </NavItem>
            </Nav>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 border-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-light" type="button">Search</button>
            </form>
          </Collapse>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-7 -->

<!-- Start:: row-8 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="  Containers">
      <div slot="customheader"></div>
      <div slot="content">
        <h6>Too center</h6>
        <div class="container">
          <Navbar expand="lg" container="fluid" class="bg-light mb-3">
            <NavbarBrand class="navbar-brand" href="#!">Navbar</NavbarBrand>
          </Navbar>
        </div>
        <h6>Change the responsive container to how to wide the content</h6>
        <Navbar expand="lg" container="md" class="bg-light">
          <NavbarBrand href="#!">Navbar</NavbarBrand>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-8 -->

<!-- Start:: row-9 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="  Placement">
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar class="bg-light" container="fluid">
          <NavbarBrand class="navbar-brand" href="#!">Default</NavbarBrand>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-9 -->

<!-- Start:: row-10 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="  Placement">
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar container="fluid" fixed="top" class="bg-light">
          <a class="navbar-brand" href="#!">Fixed top</a>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-10 -->

<!-- Start:: row-11 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="   Placement">
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar container="fluid" fixed="bottom" class="navbar-light bg-light">
          <NavbarBrand class="navbar-brand" href="#!">Fixed bottom</NavbarBrand>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-11 -->

<!-- Start:: row-12 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="    Placement">
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar
          container="fluid"
          sticky="top"
          class="navbar sticky-top navbar-light bg-light"
        >
          <NavbarBrand class="navbar-brand" href="#!">Sticky top</NavbarBrand>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-12 -->

<!-- Start:: row-13 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="Scrolling">
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar expand="lg" container="fluid" class="navbar-light bg-light">
          <NavbarBrand class="navbar-brand" href="#!">Navbar scroll</NavbarBrand
          >
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('scrollingNav')}
          ></NavbarToggler>
          <Collapse isOpen={toggles['scrollingNav']} expand="lg" navbar id="navbarScroll">
            <Nav
              navbar
              class="me-auto my-2 my-lg-0 navbar-nav-scroll"
              style="--bs-scroll-height: 100px;"
            >
              <NavItem>
                <NavLink class="active" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem>
                <NavLink href="#!">Link</NavLink>
              </NavItem>
              <SpkDropdown
                CustomClass="nav-item dropdown"
                Size=""
                Color=""
                ToggleClass="nav-link"
                Caret={true}
                parent={` Link`}
                option={Dropdownoption}
              />

              <NavItem class="nav-item">
                <NavLink
                  class="nav-link disabled"
                  href="#!"
                  tabindex={-1}
                  aria-disabled="true">Link</NavLink
                >
              </NavItem>
            </Nav>
            <form class="d-flex mt-3">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-primary" type="button">Search</button>
            </form>
          </Collapse>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-13 -->

<!-- Start:: row-14 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard
      cardProps="custom-card"
      headerTitle="Responsive behaviors Toggler"
    >
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar
          expand="lg"
          container="fluid"
          class="navbar-light bg-light mb-3"
        >
          <NavbarToggler
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={()=>toggle('Responsive')}
          ></NavbarToggler>
          <Collapse
            navbar
            isOpen={toggles['Responsive']}
            expand="lg"
            class="collapse navbar-collapse"
            id="navbarTogglerDemo01"
          >
            <NavbarBrand class="navbar-brand text-default" href="#!"
              >Hidden brand</NavbarBrand
            >
            <Nav navbar class="me-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink class="active" aria-current="page" href="#!"
                  >Home</NavLink
                >
              </NavItem>
              <NavItem>
                <NavLink href="#!">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  class="disabled"
                  href="#!"
                  tabindex={-1}
                  aria-disabled="true">Disabled</NavLink
                >
              </NavItem>
            </Nav>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-primary" type="button">Search</button>
            </form>
          </Collapse>
        </Navbar>
        <h6>With a brand name shown on the left and toggler on the right:</h6>
        <Navbar expand='lg' container='fluid' class="navbar-light bg-light mb-3">
            <NavbarBrand class="text-default" href="#!">Navbar</NavbarBrand>
            <NavbarToggler
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              on:click={()=>toggle('Responsive1')}
            >
            </NavbarToggler>
            <Collapse expand='lg' isOpen={toggles['Responsive1']} navbar id="navbarTogglerDemo02">
              <Nav navbar class="me-auto mb-2 mb-lg-0">
                <NavItem>
                  <NavLink class="active" aria-current="page" href="#!"
                    >Home</NavLink
                  >
                </NavItem>
                <NavItem>
                  <NavLink href="#!">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    class="disabled"
                    href="#!"
                    tabindex={-1}
                    aria-disabled="true">Disabled</NavLink
                  >
                </NavItem>
              </Nav>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-primary" type="button">Search</button>
              </form>
            </Collapse>
        </Navbar>
        <h6>With a toggler on the left and brand name on the right:</h6>
        <Navbar expand='lg' container='fluid' class="navbar-light bg-light">
            <NavbarToggler
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
              on:click={()=>toggle('Responsive2')}
            >
            </NavbarToggler>
            <NavbarBrand class="text-default" href="#!">Navbar</NavbarBrand>
            <Collapse isOpen={toggles['Responsive2']} expand='lg' navbar id="navbarTogglerDemo03">
              <Nav navbar class="me-auto mb-2 mb-lg-0">
                <NavItem>
                  <NavLink class="active" aria-current="page" href="#!"
                    >Home</NavLink
                  >
                </NavItem>
                <NavItem>
                  <NavLink href="#!">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    class="disabled"
                    href="#!"
                    tabindex={-1}
                    aria-disabled="true">Disabled</NavLink
                  >
                </NavItem>
              </Nav>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-primary" type="button">Search</button>
              </form>
            </Collapse>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-14 -->

<!-- Start:: row-15 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle=" External content">
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar color="dark" class="navbar-dark" dark>
          <Collapse isOpen={toggles['externalContent']} navbar id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <h5 class="text-white h4">Collapsed content</h5>
              <span class="text-white op-7"
                >Toggleable via the navbar brand.</span
              >
            </div>
          </Collapse>
          <NavbarToggler on:click={()=>toggle('externalContent')} />
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-15 -->

<!-- Start:: row-16 -->
<Row>
  <Col xl={12}>
    <SpkBasicCard cardProps="custom-card" headerTitle="    Offcanvas">
      <div slot="customheader"></div>
      <div slot="content">
        <Navbar fixed='top' container='fluid' class="bg-light">
            <NavbarBrand class="navbar-brand" href="#!">Offcanvas navbar</NavbarBrand>
            <NavbarToggler
              on:click={()=>toggle('offcanvasNav')}
              aria-label="button"
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </NavbarToggler>
            <Offcanvas
              isOpen={toggles['offcanvasNav']}
              toggle={()=>toggle('offcanvasNav')}
              placement="end"
              header="Offcanvas"
            >
              <Nav navbar class="justify-content-end flex-grow-1 pe-3">
                <NavItem>
                  <NavLink class="p-2 active" aria-current="page" href="#!"
                    >Home</NavLink
                  >
                </NavItem>
                <NavItem >
                  <NavLink class="p-2" href="#!">Link</NavLink>
                </NavItem>
                <SpkDropdown
                  CustomClass="nav-item dropdown mb-3"
                  Size=""
                  Color=""
                  ToggleClass="nav-link px-2"
                  Caret={true}
                  parent={`Dropdown`}
                  option={dayDropdown}
                />
              </Nav>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-primary" type="button">Search</button>
              </form>
            </Offcanvas>
        </Navbar>
      </div>
    </SpkBasicCard>
  </Col>
</Row>
<!-- End:: row-16 -->