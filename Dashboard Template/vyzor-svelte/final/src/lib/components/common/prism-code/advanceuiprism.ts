/*------ accordion(prism-code for showcode purpose) start ------*/
export const accordion1 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

 {#each Basicdata as card }
<SpkAccordions  card={card} Id="accordionExample" />
{/each}`;
export const dataaccordion1 = `export const Basicdata = [
  {
      items:[
          {
              header: "Accordion Item #1",
              active: true,
              content: "<strong>This is the first item's accordion body.</strong> It is shown by
      default, until the collapse plugin adds the appropriate classes that we
      use to style each element. These classes control the overall appearance, as
      well as the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It's also worth noting that
      just  about any HTML can go within the <code>.accordion-body</code>, though the
      transition does limit overflow."
          },
          {
              header: "Accordion Item #2",
              active: false,
              content: "<strong>This is the second item's accordion body.</strong> It is hidden
      default, until the collapse plugin adds the appropriate classes that we
      use to style each element. These classes control the overall appearance, as
      well as the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It's also worth noting that
      just  about any HTML can go within the <code>.accordion-body</code>, though the
      transition does limit overflow."
          },
          {
              header: "Accordion Item #3",
              active: false,
              content: "<strong>This is the third item's accordion body.</strong> It is hidden
      default, until the collapse plugin adds the appropriate classes that we
      use to style each element. These classes control the overall appearance, as
      well as the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It's also worth noting that
      just  about any HTML can go within the <code>.accordion-body</code>, though the
      transition does limit overflow."
          },
         ] 
  },
  
];`
export const accordion2 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Basicdata as card }
<SpkAccordions  card={card} Id="accordionPanelsStayOpenExample" />
{/each}`;

export const accordion3 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Basicdata as card }
                                <SpkAccordions  Flush={true}  card={card} Id="accordionFlushExample" />
                            {/each}`;

export const accordion4 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Basicdata as card }
                                <SpkAccordions  CustomClass="accordion-primary"  card={card} Id="accordionPrimaryExample" />
                            {/each}`;

export const accordion5 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Basicdata as card }
                                <SpkAccordions  CustomClass="accordion-secondary"  card={card} Id="accordionSecondaryExample" />
                            {/each}`;

export const accordion6 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Basicdata as card }
                                <SpkAccordions  CustomClass="accordion-solid-primary"  card={card} Id="accordionPrimarySolidExample" />
                            {/each}`;

export const accordion7 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Basicdata as card }
<SpkAccordions  CustomClass="accordion-solid-secondary"  card={card} Id="accordionSecondarySolidExample" />
{/each}`;

export const accordion8 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Basicdata as card }
<SpkAccordions  CustomClass="accordion-border-primary accordions-items-seperate"  card={card} Id="accordionprimaryborderExample" />
{/each}`;

export const accordion9 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Basicdata as card }
<SpkAccordions  CustomClass="accordion-border-success accordions-items-seperate"  card={card} Id="accordionsuccessborderExample" />
{/each}`;

export const accordion10 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Basicdata as card }
                                <SpkAccordions  CustomClass="accordionicon-left accordions-items-seperate"  card={card} Id="accordioniconLeftExample" />
                            {/each}`;

export const accordion11 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Basicdata as card }
<SpkAccordions  CustomClass="accordionicon-none accordions-items-seperate"  card={card} Id="accordioniconnoIconExample" />
{/each}`;

export const accordion12 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Basicdata as card }
<SpkAccordions  CustomClass="accordion-customicon1 accordions-items-seperate"  card={card} Id="accordioncustomicon1Example" />
{/each}`;

export const accordion13 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Basicdata } from "$lib/data/adavanec-ui/accordionsdata.js";

{#each Customdata as card }
<SpkAccordions  CustomClass="customized-accordion accordions-items-seperate"  card={card} Id="customizedAccordion" />
{/each}`;

export const accordion14 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Collapse} from "@sveltestrap/sveltestrap";


<p class="mb-0">
                                <a class="btn btn-primary collapsed mb-2" data-bs-toggle="collapse"
                                id="collapseExample" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">
                                    Link with href
                                </a>
                                <button class="btn btn-secondary collapsed mb-2" type="button"
                                    data-bs-toggle="collapse" id="collapseExample"
                                    aria-expanded="false" aria-controls="collapseExample">
                                    Button with data-bs-target
                                </button>
                            </p>
                            <Collapse class="collapse" toggler="#collapseExample" isOpen>
                                <div class="card card-body mb-0">
                                    Some placeholder content for the collapse component. This panel
                                    is
                                    hidden by default but revealed when the user activates the
                                    relevant
                                    trigger.
                                </div>
                            </Collapse>`;

export const accordion15 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Collapse} from "@sveltestrap/sveltestrap";

//Functionality

<p class="mb-0">
                                <a class="btn btn-primary mb-2" data-bs-toggle="collapse"
                                id="multiCollapseExample1" role="button" aria-expanded="false"
                                    aria-controls="multiCollapseExample1">Toggle first element</a>
                                <button class="btn btn-success mb-2" type="button" data-bs-toggle="collapse"
                                id="multiCollapseExample2"    data-bs-target="#multiCollapseExample2" aria-expanded="false"
                                    aria-controls="multiCollapseExample2">Toggle second
                                    element</button>
                                <button class="btn btn-danger mb-2" type="button" data-bs-toggle="collapse"
                                    data-bs-target=".multi-collapse" aria-expanded="false" id="multiCollapseExample2"
                                    aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle
                                    both elements</button>
                            </p>
                            <Row>
                                <div class="col m-1">
                                    <Collapse  toggler="#multiCollapseExample1"
                                    class="multi-collapse"
                                    >
                                        <div class="card card-body mb-0">
                                            Some placeholder content for the first collapse
                                            component of
                                            this multi-collapse example. This panel is hidden by
                                            default
                                            but revealed when the user activates the relevant
                                            trigger.
                                        </div>
                                    </Collapse>
                                </div>
                                <div class="col m-1">
                                    <Collapse toggler="#multiCollapseExample2"
                                    class="multi-collapse"
                                    >
                                        <div class="card card-body mb-0">
                                            Some placeholder content for the second collapse
                                            component
                                            of this multi-collapse example. This panel is hidden by
                                            default but revealed when the user activates the
                                            relevant
                                            trigger.
                                        </div>
                                    </Collapse>
                                </div>
                            </Row>`;

export const accordion16 = `  import SpkAccordions from "$lib/@spk/advanced-ui/SpkAccordions.svelte";
import { Collapse} from "@sveltestrap/sveltestrap";

//Functionality

<p>
<button class="btn btn-primary" type="button" data-bs-toggle="collapse"
   id="collapseWidthExample" aria-expanded="false"
    aria-controls="collapseWidthExample">
    Toggle width collapse
</button>
</p>
<div style="min-height: 120px;">
<Collapse class=" collapse-horizontal" toggler="#collapseWidthExample">
    <div class="card card-body" style="width: 230px;">
        This is some placeholder content for a horizontal collapse. It's
        hidden
        by default and shown when triggered.
    </div>
</Collapse>
</div>`;

/*------ accordion(prism-code for showcode purpose) end ------*/


/*------ carousel(prism-code for showcode purpose) start ------*/
export const carousel1 = `import Carousel from "svelte-carousel";
import { browser } from "$app/environment";
import { SlidesOnly } from "$lib/data/adavanec-ui/carouseldata.js";


{#if browser}
<!-- Ensure carousel only renders in the browser (client-side) -->
<Carousel id="carouselExampleSlidesOnly"  particlesToShow={1} particlesToScroll={1} arrows={false} dots={false} autoplay autoplayDuration={3000}>
  <!-- Loop through images array and render each image -->
  {#each SlidesOnly as src}
    <div class="item">
      <img  loading="lazy" {src} alt="" />
    </div>
  {/each}
</Carousel>
{/if}
`;
export const datacarousel1 = `export const SlidesOnly = [
  "../images/media/media-26.jpg",
  "../images/media/media-27.jpg",
  "../images/media/media-33.jpg", // Add more images if needed
];`

export const carousel2 = `import Carousel from "svelte-carousel";
import { browser } from "$app/environment";
import { Controls } from "$lib/data/adavanec-ui/carouseldata.js";

{#if browser}
<!-- Ensure carousel only renders in the browser (client-side) -->
<Carousel id="carouselExampleControls"  particlesToShow={1} particlesToScroll={1} arrows={true} dots={false} autoplay autoplayDuration={3000} >
  <!-- Loop through images array and render each image -->
  {#each Controls as src}
    <div class="item">
      <img  loading="lazy" {src} alt="" />
    </div>
  {/each}
</Carousel>
{/if}
`;
export const datacarousel2 = `export const Controls = [
  "../images/media/media-28.jpg",
  "../images/media/media-31.jpg",
  "../images/media/media-32.jpg", // Add more images if needed
];`
export const carousel3 = `import Carousel from "svelte-carousel";
import { browser } from "$app/environment";
import { Indicators } from "$lib/data/adavanec-ui/carouseldata.js";

{#if browser}
<!-- Ensure carousel only renders in the browser (client-side) -->
 <Carousel  id="carouselExampleIndicators" particlesToShow={1} particlesToScroll={1} arrows={true} dots={true} autoplay autoplayDuration={3000} >
   <!-- Loop through images array and render each image -->
   {#each Indicators as src}
     <div class="item">
       <img  loading="lazy" {src} alt="" />
     </div>
   {/each}
 </Carousel>
{/if}
`;
export const datacarousel3 = `export const Indicators = [
  "../images/media/media-25.jpg",
  "../images/media/media-29.jpg",
  "../images/media/media-30.jpg", // Add more images if needed
];`
export const carousel4 = `import Carousel from "svelte-carousel";
import { browser } from "$app/environment";
import { AutoPlay } from "$lib/data/adavanec-ui/carouseldata.js";

{#if browser}
<Carousel particlesToShow={3} particlesToScroll={1} autoplay arrows={false} autoplayDuration={1000} >
<!-- Loop through images array and render each image -->
{#each AutoPlay as src}
    <div class="item">
    <img  loading="lazy" {src} alt="" class="d-block w-100" />
    </div>
{/each}
</Carousel>
{/if}
`;
export const datacarousel4 = `export const AutoPlay = [
  "../images/media/media-25.jpg",
  "../images/media/media-26.jpg",
  "../images/media/media-27.jpg",
  "../images/media/media-29.jpg",
  "../images/media/media-28.jpg",
  "../images/media/media-30.jpg", // Add more images if needed
];`
export const carousel5 = `import Carousel from "svelte-carousel";
import { browser } from "$app/environment";
import { AutoPlay } from "$lib/data/adavanec-ui/carouseldata.js";

{#if browser}
<Carousel particlesToShow={3} particlesToScroll={1} autoplay arrows={true} autoplayDuration={1000} >
<!-- Loop through images array and render each image -->
{#each AutoPlay as src}
    <div class="item">
    <img  loading="lazy" {src} alt="" class="d-block w-100" />
    </div>
{/each}
</Carousel>
{/if}
`;

export const carousel6 = `import Carousel from "svelte-carousel";
import { browser } from "$app/environment";
import { AutoPlay } from "$lib/data/adavanec-ui/carouseldata.js";

{#if browser}
            <Carousel autoplayDuration={0} duration={2000} autoplay timingFunction="linear" dots={false} arrows={false} swiping={false} >
            <!-- Loop through images array and render each image -->
            {#each AutoPlay as src}
                <div class="item">
                <img  loading="lazy" {src} alt="" class="d-block w-100" />
                </div>
            {/each}
            </Carousel>
        {/if}
`;

export const carousel7 = `import Carousel from "svelte-carousel";
import { browser } from "$app/environment";
import { AutoPlay } from "$lib/data/adavanec-ui/carouseldata.js";

{#if browser}
            <Carousel particlesToShow={1} particlesToScroll={1} autoplay arrows={true} autoplayDuration={3000} autoplayProgressVisible >
            <!-- Loop through images array and render each image -->
            {#each AutoPlay as src}
                <div class="item">
                <img  loading="lazy" {src} alt="" class="d-block w-100" />
                </div>
            {/each}
            </Carousel>
        {/if}
`;

export const carousel8 = `import Carousel from "svelte-carousel";
import { browser } from "$app/environment";
import { AutoPlay } from "$lib/data/adavanec-ui/carouseldata.js";

{#if browser}
            <Carousel autoplay autoplayDuration={5000} autoplayProgressVisible pauseOnFocus >
            <!-- Loop through images array and render each image -->
            {#each AutoPlay as src}
                <div class="item">
                <img  loading="lazy" {src} alt="" class="d-block w-100" />
                </div>
            {/each}
            </Carousel>
        {/if}
`;
export const carousel9 = `import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, CarouselCaption,} from "@sveltestrap/sveltestrap";
import { items} from "$lib/data/adavanec-ui/carouseldata.js";
//
let activeIndex = 0;

<Carousel
id="carouselExampleCaptions"
{items}
bind:activeIndex
ride
interval={1000}
>
<CarouselIndicators bind:activeIndex {items} />
<div class="carousel-inner">
  {#each items as item, index}
    <CarouselItem bind:activeIndex itemIndex={index}>
      <img  loading="lazy" src={item.src} class="d-block w-100" alt={item.title} />
      <CarouselCaption>
        <h5 class="text-fixed-white">{item.title}</h5>
        <p>{item.subTitle}</p>
      </CarouselCaption>
    </CarouselItem>
  {/each}
</div>

<CarouselControl direction="prev" bind:activeIndex {items} />
<CarouselControl direction="next" bind:activeIndex {items} />
</Carousel>
`;
export const datacarousel9 = `export const items = [
  {
    src: "../images/media/media-26.jpg",
    title: "First  slide label",
    subTitle: "Some representative placeholder content for the first slide.",
  },
  {
    src: "../images/media/media-27.jpg",
    title: "Second slide label",
    subTitle: "Some representative placeholder content for the second slide.",
  },
  {
    src: "../images/media/media-25.jpg",
    title: "Third slide label",
    subTitle: "Some representative placeholder content for the third slide.",
  },
];`
export const carousel10 = `import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, CarouselCaption,} from "@sveltestrap/sveltestrap";
import { Crossfade} from "$lib/data/adavanec-ui/carouseldata.js";

let activeIndex = 0;

<Carousel
  id="carouselExampleFade"
  class="carousel-fade"
  {Crossfade}
  bind:activeIndex
  ride
  interval={1000}
>
  <div class="carousel-inner">
    {#each Crossfade as item, index}
      <CarouselItem bind:activeIndex itemIndex={index}>
        <img  loading="lazy" src={item.src} class="d-block w-100" alt={item.title} />
      </CarouselItem>
    {/each}
  </div>
  <CarouselControl direction="prev" bind:activeIndex {Crossfade} />
  <CarouselControl direction="next" bind:activeIndex {Crossfade} />
</Carousel>
`;
export const datacarousel10 = `export const Crossfade = [
  {
    src: "../images/media/media-43.jpg",
  },
  {
    src: "../images/media/media-44.jpg",
  },
  {
    src: "../images/media/media-45.jpg",
  },
];`

/*------ carousel(prism-code for showcode purpose) end ------*/


/*------ Modals & closes(prism-code for showcode purpose) start ------*/
export const modal1 = `  import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@sveltestrap/sveltestrap";
//
let open = false;
const toggle = () => {  size = undefined; open = !open};

<button type="button" on:click={toggle} class="btn btn-primary" data-bs-toggle="modal"
data-bs-target="#exampleModal">
Launch demo modal
</button>
<Modal isOpen={open} {toggle} {size}>
                                <ModalHeader {toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna aliqua.
                                </ModalBody>
                                <ModalFooter>
                                  <Button color="primary" on:click={toggle}>Do Something</Button>
                                  <Button color="secondary" on:click={toggle}>Cancel</Button>
                                </ModalFooter>
                              </Modal>`;

export const modal2 = `  import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@sveltestrap/sveltestrap";
//
let staticBackdrop = false;
const ToggleBackdrop = () => {staticBackdrop = !staticBackdrop};

<button type="button" class="btn btn-primary" on:click={ToggleBackdrop} data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop">
                                        Launch static backdrop modal
                                    </button>

                                    <Modal backdrop="static" isOpen={staticBackdrop} toggle={ToggleBackdrop} >
                                        <ModalHeader toggle={ToggleBackdrop}>Modal title</ModalHeader>
                                        <ModalBody>
                                         ...
                                        </ModalBody>
                                        <ModalFooter>
                                          <Button color="primary" on:click={ToggleBackdrop}>Do Something</Button>
                                          <Button color="secondary" on:click={ToggleBackdrop}>Cancel</Button>
                                        </ModalFooter>
                                      </Modal>`;

export const modal3 = `import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@sveltestrap/sveltestrap";
//
let Scrolling = false;
const ToggleScrolling = () => {Scrolling = !Scrolling};

<button type="button" class="btn btn-primary" data-bs-toggle="modal" on:click={ToggleScrolling}
data-bs-target="#exampleModalScrollable">
Scrolling long content
</button>

<Modal scrollable={true} isOpen={Scrolling} toggle={ToggleScrolling} >
    <ModalHeader toggle={ToggleScrolling}>Modal title</ModalHeader>
    <ModalBody>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Libero
            ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
            nisi
            ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
            voluptatibus, ipsam quo est rerum modi quos expedita facere,
            ex
            tempore fuga similique ipsa blanditiis et accusamus
            temporibus
            commodi voluptas! Nobis veniam illo architecto expedita quam
            ratione quaerat omnis. In, recusandae eos! Pariatur,
            deleniti
            quis ad nemo ipsam officia temporibus, doloribus fuga
            asperiores
            ratione distinctio velit alias hic modi praesentium aperiam
            officiis eaque, accusamus aut. Accusantium assumenda,
            commodi
            nulla provident asperiores fugit inventore iste amet aut
            placeat
            consequatur reprehenderit. Ratione tenetur eligendi, quis
            aperiam dolores magni iusto distinctio voluptatibus minus a
            unde
            at! Consequatur voluptatum in eaque obcaecati, impedit
            accusantium ea soluta, excepturi, quasi quia commodi
            blanditiis?
            Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
            consequuntur quod quo veniam? Labore dignissimos reiciendis
            accusamus recusandae est consequuntur iure.</p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <p>Lorem ipsum dolor sit amet.</p>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={ToggleScrolling}>Do Something</Button>
      <Button color="secondary" on:click={ToggleScrolling}>Cancel</Button>
    </ModalFooter>
  </Modal>`;

export const modal4 = `import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@sveltestrap/sveltestrap";
//
let Vertically = false;
const ToggleVertically = () => {Vertically = !Vertically};

<button type="button" class="btn btn-primary" data-bs-toggle="modal" on:click={ToggleVertically}
data-bs-target="#exampleModalScrollable2">
Vertically centered modal
</button>

<Modal centered fade isOpen={Vertically} toggle={ToggleVertically} id="exampleModalScrollable2">
    <ModalHeader toggle={ToggleVertically}>Modal title</ModalHeader>
    <ModalBody>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Libero
            ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
            nisi
            ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={ToggleVertically}>Do Something</Button>
      <Button color="secondary" on:click={ToggleVertically}>Cancel</Button>
    </ModalFooter>
  </Modal>`;

export const modal5 = `import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@sveltestrap/sveltestrap";
//
let ModalScrollable = false; 
const ToggleModalScrollable = () => {ModalScrollable = !ModalScrollable};

<button type="button" class="btn btn-primary" on:click={ToggleModalScrollable} data-bs-toggle="modal"
                                data-bs-target="#exampleModalScrollable3">
                                Vertically centered scrollable modal
                        </button>
        
                                            <Modal centered fade isOpen={ModalScrollable} toggle={ToggleModalScrollable} id="exampleModalScrollable2">
                                                <ModalHeader toggle={ToggleModalScrollable}>Modal title</ModalHeader>
                                                <ModalBody>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                                        voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                                        ex
                                                        tempore fuga similique ipsa blanditiis et accusamus
                                                        temporibus
                                                        commodi voluptas! Nobis veniam illo architecto expedita quam
                                                        ratione quaerat omnis. In, recusandae eos! Pariatur,
                                                        deleniti
                                                        quis ad nemo ipsam officia temporibus, doloribus fuga
                                                        asperiores
                                                        ratione distinctio velit alias hic modi praesentium aperiam
                                                        officiis eaque, accusamus aut. Accusantium assumenda,
                                                        commodi
                                                        nulla provident asperiores fugit inventore iste amet aut
                                                        placeat
                                                        consequatur reprehenderit. Ratione tenetur eligendi, quis
                                                        aperiam dolores magni iusto distinctio voluptatibus minus a
                                                        unde
                                                        at! Consequatur voluptatum in eaque obcaecati, impedit
                                                        accusantium ea soluta, excepturi, quasi quia commodi
                                                        blanditiis?
                                                        Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                                        consequuntur quod quo veniam? Labore dignissimos reiciendis
                                                        accusamus recusandae est consequuntur iure.</p>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <p>Lorem ipsum dolor sit amet.</p>
                                                </ModalBody>
                                                <ModalFooter>
                                                  <Button color="primary" on:click={ToggleModalScrollable}>Do Something</Button>
                                                  <Button color="secondary" on:click={ToggleModalScrollable}>Cancel</Button>
                                                </ModalFooter>
                                              </Modal>`;

export const modal6 = `import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@sveltestrap/sveltestrap";
//
let demomodal = false; 
const Toggledemomodal = () => {demomodal = !demomodal};

<button type="button" class="btn btn-primary" on:click={Toggledemomodal} data-bs-toggle="modal"
data-bs-target="#exampleModalScrollable4">
Launch demo modal
</button>

            <Modal centered fade isOpen={demomodal} toggle={Toggledemomodal} id="exampleModalScrollable2">
                <ModalHeader toggle={Toggledemomodal}>Modal title</ModalHeader>
                <ModalBody>
                    <h5>Popover in a modal</h5>
                    <p>This <a href="#!" role="button" class="btn btn-secondary"
                            data-bs-toggle="popover" title="Popover title"
                            data-bs-content="Popover body content is set in this attribute.">button</a>
                        triggers a popover on click.</p>
                    <hr>
                    <h5>Tooltips in a modal</h5>
                    <p><a href="#!" class="text-primary" data-bs-toggle="tooltip" title="Tooltip">This
                            link</a> and <a href="#!" class="text-primary" data-bs-toggle="tooltip"
                            title="Tooltip">that link</a> have tooltips on hover.
                    </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" on:click={Toggledemomodal}>Do Something</Button>
                  <Button color="secondary" on:click={Toggledemomodal}>Cancel</Button>
                </ModalFooter>
              </Modal>`;

export const modal7 = `import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@sveltestrap/sveltestrap";
//
let grid = false; 
const Togglegrid = () => {grid = !grid};

<button type="button" class="btn btn-primary" on:click={Togglegrid} data-bs-toggle="modal"
data-bs-target="#exampleModalScrollable5">
Launch demo modal
</button>
        <Modal scrollable centered fade isOpen={grid} toggle={Togglegrid} id="exampleModalScrollable2">
            <ModalHeader toggle={Togglegrid}>Modal title</ModalHeader>
            <ModalBody>
                <div class="container-fluid">
                    <Row>
                        <div class="col-md-4 bg-light border">.col-md-4</div>
                        <div class="col-md-4 ms-auto bg-light border">.col-md-4
                            .ms-auto</div>
                    </Row>
                    <div class="row mt-3">
                        <div class="col-md-3 ms-auto bg-light border">.col-md-3
                            .ms-auto</div>
                        <div class="col-md-2 ms-auto bg-light border">.col-md-2
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6 ms-auto bg-light border">.col-md-6
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-9 bg-light border">
                            Level 1: .col-sm-9
                            <Row>
                                <div class="col-8 col-sm-6 bg-light border">
                                    Level 2: .col-8 .col-sm-6
                                </div>
                                <div class="col-4 col-sm-6 bg-light border">
                                    Level 2: .col-4 .col-sm-6
                                </div>
                            </Row>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" on:click={Togglegrid}>Do Something</Button>
              <Button color="secondary" on:click={Togglegrid}>Cancel</Button>
            </ModalFooter>
          </Modal>`;

export const modal8 = `import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@sveltestrap/sveltestrap";
//
let firstmodal = false; 
const Togglefirstmodal = () => {firstmodal = !firstmodal};
let secondmodal = false;
const Togglesecondmodal = () => {secondmodal = !secondmodal};
  <a class="btn btn-primary"  data-bs-toggle="modal" href="#exampleModalToggle" on:click={Togglefirstmodal}
  role="button">Open first modal
</a>

              <Modal centered fade isOpen={firstmodal} toggle={Togglefirstmodal} id="exampleModalScrollable2">
                  <ModalHeader toggle={Togglefirstmodal}>Modal title</ModalHeader>
                  <ModalBody>
                      Show a second modal and hide this one with the button below.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" on:click={Togglesecondmodal}>Open second modal</Button>
                  </ModalFooter>
                </Modal>
                <Modal centered fade isOpen={secondmodal} toggle={Togglesecondmodal} id="exampleModalScrollable2">
                  <ModalHeader toggle={Togglesecondmodal}>Modal title</ModalHeader>
                  <ModalBody>
                      Show a second modal and hide this one with the button below.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" on:click={Togglefirstmodal}>Back to first</Button>
                  </ModalFooter>
                </Modal>`;

export const modal9 = `import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@sveltestrap/sveltestrap";
//
let open = false;
let size;
const toggleLg = () => {
  size = 'lg';
  open = !open;
};
const toggleSm = () => {
  size = 'sm';
  open = !open;
};
const toggleXl = () => {
  size = 'xl';
  open = !open;
};

<button type="button" on:click={toggleXl} class="btn btn-primary m-1" data-bs-toggle="modal"
data-bs-target="#exampleModalXl">Extra large modal</button>
<button type="button" on:click={toggleLg} class="btn btn-secondary m-1" data-bs-toggle="modal"
data-bs-target="#exampleModalLg">Large modal</button>
<button type="button" on:click={toggleSm} class="btn btn-warning m-1" data-bs-toggle="modal"
data-bs-target="#exampleModalSm">Small modal</button>
<Modal isOpen={open} {toggle} {size}>
<ModalHeader {toggle}>Modal title</ModalHeader>
<ModalBody>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
</ModalBody>
<ModalFooter>
  <Button color="primary" on:click={toggle}>Do Something</Button>
  <Button color="secondary" on:click={toggle}>Cancel</Button>
</ModalFooter>
</Modal>`;

export const modal10 = `import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@sveltestrap/sveltestrap";  
 //
 let fullscreenopen;
 const togglefullscreen = () => {fullscreen = true; fullscreenopen = !fullscreenopen};
    let modal_fullscreen_sm = false;
	const tog_fullscreen_sm = () =>(modal_fullscreen_sm = !modal_fullscreen_sm);
    let modal_fullscreen_md = false;
	const tog_fullscreen_md = () =>
		(modal_fullscreen_md = !modal_fullscreen_md);

	let modal_fullscreen_lg = false;
	const tog_fullscreen_lg = () =>
		(modal_fullscreen_lg = !modal_fullscreen_lg);

	let modal_fullscreen_xl = false;
	const tog_fullscreen_xl = () =>
		(modal_fullscreen_xl = !modal_fullscreen_xl);

	let modal_fullscreen_xxl = false;
	const tog_fullscreen_xxl = () =>
		(modal_fullscreen_xxl = !modal_fullscreen_xxl);
  <div class="bd-example">
  <button type="button" on:click={togglefullscreen} class="btn btn-primary mb-1" data-bs-toggle="modal"
      data-bs-target="#exampleModalFullscreen">Full screen</button>
  <button type="button" on:click={tog_fullscreen_sm}  class="btn btn-secondary mb-1" data-bs-toggle="modal"
      data-bs-target="#exampleModalFullscreenSm">Full screen below sm</button>
  <button type="button" on:click={tog_fullscreen_md} class="btn btn-warning mb-1" data-bs-toggle="modal"
      data-bs-target="#exampleModalFullscreenMd">Full screen below md</button>
  <button type="button" on:click={tog_fullscreen_lg} class="btn btn-info mb-1" data-bs-toggle="modal"
      data-bs-target="#exampleModalFullscreenLg">Full screen below lg</button>
  <button type="button" on:click={tog_fullscreen_xl} class="btn btn-success mb-1" data-bs-toggle="modal"
      data-bs-target="#exampleModalFullscreenXl">Full screen below xl</button>
  <button type="button" on:click={tog_fullscreen_xxl} class="btn btn-danger mb-1" data-bs-toggle="modal"
      data-bs-target="#exampleModalFullscreenXxl">Full screen below
      xxl</button>
</div>
<Modal isOpen={fullscreenopen} toggle={togglefullscreen} {fullscreen} id="exampleModalFullscreen">
  <ModalHeader toggle={togglefullscreen}>Full screen modal</ModalHeader>
  <ModalBody>
   ...
  </ModalBody>
  <ModalFooter>
    <Button color="secondary" on:click={togglefullscreen}>Cancel</Button>
  </ModalFooter>
</Modal>
<Modal isOpen={modal_fullscreen_sm} toggle={tog_fullscreen_sm}  id="exampleModalFullscreenSm">
  <ModalHeader toggle={tog_fullscreen_sm}> Full screen below sm</ModalHeader>
  <ModalBody>
   ...
  </ModalBody>
  <ModalFooter>
    <Button color="secondary" on:click={tog_fullscreen_sm}>Cancel</Button>
  </ModalFooter>
</Modal>
<Modal isOpen={modal_fullscreen_md} toggle={tog_fullscreen_md}  id="exampleModalFullscreenMd">
  <ModalHeader toggle={tog_fullscreen_md}> Full screen below md</ModalHeader>
  <ModalBody>
   ...
  </ModalBody>
  <ModalFooter>
    <Button color="secondary" on:click={tog_fullscreen_md}>Cancel</Button>
  </ModalFooter>
</Modal>
<Modal isOpen={modal_fullscreen_lg} toggle={tog_fullscreen_lg}  id="exampleModalFullscreenLg">
  <ModalHeader toggle={tog_fullscreen_lg}> Full screen below lg</ModalHeader>
  <ModalBody>
   ...
  </ModalBody>
  <ModalFooter>
    <Button color="secondary" on:click={tog_fullscreen_lg}>Cancel</Button>
  </ModalFooter>
</Modal>
<Modal isOpen={modal_fullscreen_xl} toggle={tog_fullscreen_xl}  id="exampleModalFullscreenXl">
  <ModalHeader toggle={tog_fullscreen_xl}> Full screen below xl</ModalHeader>
  <ModalBody>
   ...
  </ModalBody>
  <ModalFooter>
    <Button color="secondary" on:click={tog_fullscreen_xl}>Cancel</Button>
  </ModalFooter>
</Modal>
<Modal isOpen={modal_fullscreen_xxl} toggle={tog_fullscreen_xxl}  id="exampleModalFullscreenXxl">
  <ModalHeader toggle={tog_fullscreen_xxl}> Full screen below xxl</ModalHeader>
  <ModalBody>
   ...
  </ModalBody>
  <ModalFooter>
    <Button color="secondary" on:click={tog_fullscreen_xxl}>Cancel</Button>
  </ModalFooter>
</Modal>`;

export const modal11 = `import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@sveltestrap/sveltestrap";
//
let modal_mdo = false;
const tog_mdo = () => (modal_mdo = !modal_mdo);

let modal_fat = false;
const tog_fat = () => (modal_fat = !modal_fat);

let modal_getbootstrap = false;
const tog_getbootstrap = () => (modal_getbootstrap = !modal_getbootstrap);
<button type="button" on:click={tog_mdo} class="btn btn-primary mb-1" data-bs-toggle="modal"
                                            data-bs-target="#formmodal" data-bs-whatever="@mdo">Open modal for
                                            @mdo</button>
                                    <button type="button" on:click={tog_fat} class="btn btn-secondary mb-1" data-bs-toggle="modal"
                                        data-bs-target="#formmodal" data-bs-whatever="@fat">Open modal for
                                        @fat</button>
                                    <button type="button" on:click={tog_getbootstrap}  class="btn btn-light mb-1" data-bs-toggle="modal"
                                        data-bs-target="#formmodal" data-bs-whatever="@getbootstrap">Open modal for
                                        @getbootstrap</button>
                                        <Modal isOpen={modal_mdo} toggle={tog_mdo}   id="formmodal">
                                            <ModalHeader toggle={tog_mdo}> New message</ModalHeader>
                                            <ModalBody>
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="recipient-name"
                                                            class="col-form-label">Recipient:</label>
                                                        <input type="text" value="@mdo" class="form-control" id="recipient-name">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="message-text"
                                                            class="col-form-label">Message:</label>
                                                        <textarea class="form-control" id="message-text"></textarea>
                                                    </div>
                                                </form>
                                            </ModalBody>
                                            <ModalFooter>
                                              <Button color="secondary" on:click={tog_mdo}>Cancel</Button>
                                            </ModalFooter>
                                          </Modal>
                                          <Modal isOpen={modal_fat} toggle={tog_fat}   id="formmodal">
                                            <ModalHeader toggle={tog_fat}> New message</ModalHeader>
                                            <ModalBody>
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="recipient-name"
                                                            class="col-form-label">Recipient:</label>
                                                        <input type="text" value="@fat" class="form-control" id="recipient-name">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="message-text"
                                                            class="col-form-label">Message:</label>
                                                        <textarea class="form-control" id="message-text"></textarea>
                                                    </div>
                                                </form>
                                            </ModalBody>
                                            <ModalFooter>
                                              <Button color="secondary" on:click={tog_fat}>Cancel</Button>
                                            </ModalFooter>
                                          </Modal>
                                          <Modal isOpen={modal_getbootstrap} toggle={tog_getbootstrap}   id="formmodal">
                                            <ModalHeader toggle={tog_getbootstrap}> New message</ModalHeader>
                                            <ModalBody>
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="recipient-name"
                                                            class="col-form-label">Recipient:</label>
                                                        <input type="text" value="@getbootstrap" class="form-control" id="recipient-name">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="message-text"
                                                            class="col-form-label">Message:</label>
                                                        <textarea class="form-control" id="message-text"></textarea>
                                                    </div>
                                                </form>
                                            </ModalBody>
                                            <ModalFooter>
                                              <Button color="secondary" on:click={tog_getbootstrap}>Cancel</Button>
                                            </ModalFooter>
                                          </Modal>`;

export const modal12 = `  <button type="button" class="btn-close" aria-label="Close"></button>`;
export const modal13 = `import { Button } from "react-bootstrap";
<Button variant='' type="button" className="btn-close" 
aria-label="Close"></Button>`;

export const modal14 = `  <button type="button" class="btn-close" disabled aria-label="Close"></button>`;

export const modal15 = ` <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-white" disabled
    aria-label="Close"></button>`;
/*------ Modals & closes(prism-code for showcode purpose) end ------*/


/*------ offcanvas(prism-code for showcode purpose) start ------*/
export const offcanvas1 = `  import {  Offcanvas, OffcanvasBody } from "@sveltestrap/sveltestrap";
import { OffcanvasData } from "$lib/data/adavanec-ui/Offcanvasdata.js";
//
let isOpen = false;
const toggle = () => {isOpen = !isOpen};

<a class="btn btn-primary mb-1" data-bs-toggle="offcanvas" on:click={toggle} href="#offcanvasExample"
role="button" aria-controls="offcanvasExample">
Link with href
</a>
<button class="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas"
data-bs-target="#offcanvasExample"  on:click={toggle} aria-controls="offcanvasExample">
Button with data-bs-target
</button>
<Offcanvas  {isOpen} {toggle}  header="Notifications" placement="start"  tabindex="-1" id="offcanvasExample">
<OffcanvasBody class="p-0">
    <div class="">
        <ul class="list-group list-group-flush mb-0">
            {#each OffcanvasData as idx}
            <li class="list-group-item" >
              <div class="d-flex align-items-center">
                <div class="me-2">
                  {#if idx.src}
                    <div class="avatar avatar-md avatar-rounded">
                      <img  loading="lazy" alt="avatar" class="rounded-circle" src={idx.src} />
                    </div>
                  {:else}
                    <div class={"avatar avatar-md bg-{idx.color} text-fixed-white avatar-rounded"}>
                      {idx.text}
                    </div>
                  {/if}
                </div>
                <div class="flex-fill">
                  <p class="fw-semibold mb-0">{idx.name}<span class="badge bg-light text-muted float-end">{idx.date}</span></p>
                  <span class="fs-12 text-muted">
                    <i class="ri-time-line align-middle me-1 d-inline-block"></i>{idx.time}
                  </span>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
</OffcanvasBody>
    </Offcanvas>
  
    `;
export const dataoffcanvas1 = `export const OffcanvasData = [
	{ text: "NW", color: "primary ", name: "New Website Created", date: "20 Nov 2022", time: "30 mins ago" },
	{ text: "CH", color: "danger  ", name: "Prepare for the new project", date: "3 Jan 2023", time: "2 hrs ago" },
	{ text: "S", color: "info  ", name: "Decide the live discussion", date: "17 Feb 2023", time: "3 hrs ago" },
	{ src: "../images/faces/12.jpg", name: "Meeting at 3:00 pm", date: "29 Dec 2022", time: "4 hrs ago" },
	{ text: "RC", color: "success  ", name: "Prepare for presentation", date: "31 Dec 2022", time: "4 hrs ago" },
	{ src: "../images/faces/1.jpg", name: "Brenda New product launching", date: "1 Jan 2023", time: "7 hrs ago" },
	{ text: "M", color: "secondary  ", name: "Medeleine Hey! there i'm available", date: "5 Jan 2023", time: "3 hrs ago" },
	{ text: "OL", color: "info  ", name: "Olivia New schedule release", date: "6 Jan 2023", time: "45 mins ago" },
	{ text: "A", color: "warning  ", name: "Kamala Preparing for new admin launch", date: "7 Jan 2023", time: "28 mins ago" },
	{ src: "../images/faces/6.jpg", name: "Oisha Meeting with clinet for dinner", date: "10 Jan 2023", time: "14 hrs ago" },
	{ text: "CH", color: "danger  ", name: "Prepare for the new project", date: "3 Jan 2023", time: "2 hrs ago" },
	{ text: "S", color: "info  ", name: "Decide the live discussion", date: "17 Feb 2023", time: "3 hrs ago" },
	{ src: "../images/faces/14.jpg", name: "Meeting at 3:00 pm", date: "29 Dec 2022", time: "4 hrs ago" },
	{ text: "RC", color: "success  ", name: "Prepare for presentation", date: "31 Dec 2022", time: "4 hrs ago" },

];`
export const offcanvas2 = `  import {  Offcanvas, OffcanvasBody } from "@sveltestrap/sveltestrap";
import { OffcanvasData } from "$lib/data/adavanec-ui/Offcanvasdata.js";
//
let scrollOpen = false;
const togglescroll = () => (scrollOpen = !scrollOpen);

<button class="btn btn-primary" on:click={togglescroll}  type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable
                body scrolling
                </button>
                <Offcanvas scroll isOpen={scrollOpen} toggle={togglescroll} placement="start" header="Enable body scrolling"  tabindex="-1" id="offcanvasExample">
                    <OffcanvasBody class="p-0">
                        <div class="">
                            <ul class="list-group list-group-flush mb-0">
                                {#each OffcanvasData as idx}
                                <li class="list-group-item" >
                                  <div class="d-flex align-items-center">
                                    <div class="me-2">
                                      {#if idx.src}
                                        <div class="avatar avatar-md avatar-rounded">
                                          <img  loading="lazy" alt="avatar" class="rounded-circle" src={idx.src} />
                                        </div>
                                      {:else}
                                        <div class={"avatar avatar-md bg-{idx.color} text-fixed-white avatar-rounded"}>
                                          {idx.text}
                                        </div>
                                      {/if}
                                    </div>
                                    <div class="flex-fill">
                                      <p class="fw-semibold mb-0">{idx.name}<span class="badge bg-light text-muted float-end">{idx.date}</span></p>
                                      <span class="fs-12 text-muted">
                                        <i class="ri-time-line align-middle me-1 d-inline-block"></i>{idx.time}
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              {/each}
                            </ul>
                          </div>
                    </OffcanvasBody>
               </Offcanvas>`;

export const offcanvas3 = `  import {  Offcanvas, OffcanvasBody } from "@sveltestrap/sveltestrap";
import { OffcanvasData } from "$lib/data/adavanec-ui/Offcanvasdata.js";
//
let backdropOpen = false;
const togglebackdrop = () => (backdropOpen = !backdropOpen);

<button class="btn btn-primary" type="button" on:click={togglebackdrop} data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                Toggle static offcanvas
        </button>
                <Offcanvas  backdrop={true} isOpen={backdropOpen} toggle={togglebackdrop} placement="start" header="Notifications"  tabindex="-1" id="offcanvasExample">
                    <OffcanvasBody class="p-0">
                        <div class="">
                            <ul class="list-group list-group-flush mb-0">
                                {#each OffcanvasData as idx}
                                <li class="list-group-item" >
                                  <div class="d-flex align-items-center">
                                    <div class="me-2">
                                      {#if idx.src}
                                        <div class="avatar avatar-md avatar-rounded">
                                          <img  loading="lazy" alt="avatar" class="rounded-circle" src={idx.src} />
                                        </div>
                                      {:else}
                                        <div class={"avatar avatar-md bg-{idx.color} text-fixed-white avatar-rounded"}>
                                          {idx.text}
                                        </div>
                                      {/if}
                                    </div>
                                    <div class="flex-fill">
                                      <p class="fw-semibold mb-0">{idx.name}<span class="badge bg-light text-muted float-end">{idx.date}</span></p>
                                      <span class="fs-12 text-muted">
                                        <i class="ri-time-line align-middle me-1 d-inline-block"></i>{idx.time}
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              {/each}
                            </ul>
                          </div>
                    </OffcanvasBody>
               </Offcanvas>`;

export const offcanvas4 = `  import {  Offcanvas, OffcanvasBody } from "@sveltestrap/sveltestrap";
import { OffcanvasData } from "$lib/data/adavanec-ui/Offcanvasdata.js";
//
let BodybackdropOpen = false;
const Bodytogglebackdrop = () => (BodybackdropOpen = !BodybackdropOpen);

<button class="btn btn-primary" on:click={Bodytogglebackdrop} type="button" data-bs-toggle="offcanvas"
data-bs-target="#offcanvasWithBothOptions"
aria-controls="offcanvasWithBothOptions">Enable both scrolling &amp;
backdrop</button>
<Offcanvas  backdrop={true} isOpen={BodybackdropOpen}  toggle={Bodytogglebackdrop} placement="start" header="Notifications"  tabindex="-1" id="offcanvasExample">
<OffcanvasBody class="p-0">
<div class="">
    <ul class="list-group list-group-flush mb-0">
        {#each OffcanvasData as idx}
        <li class="list-group-item" >
          <div class="d-flex align-items-center">
            <div class="me-2">
              {#if idx.src}
                <div class="avatar avatar-md avatar-rounded">
                  <img  loading="lazy" alt="avatar" class="rounded-circle" src={idx.src} />
                </div>
              {:else}
                <div class={"avatar avatar-md bg-{idx.color} text-fixed-white avatar-rounded"}>
                  {idx.text}
                </div>
              {/if}
            </div>
            <div class="flex-fill">
              <p class="fw-semibold mb-0">{idx.name}<span class="badge bg-light text-muted float-end">{idx.date}</span></p>
              <span class="fs-12 text-muted">
                <i class="ri-time-line align-middle me-1 d-inline-block"></i>{idx.time}
              </span>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</OffcanvasBody>
</Offcanvas>`;

export const offcanvas5 = `  import {  Offcanvas, OffcanvasBody } from "@sveltestrap/sveltestrap";
import { OffcanvasData } from "$lib/data/adavanec-ui/Offcanvasdata.js";
//
let topOpen = false;
  let endOpen = false;
  let bottomOpen = false;
const toggleTop = () => (topOpen = !topOpen);
const toggleEnd = () => (endOpen = !endOpen);
const toggleBottom = () => (bottomOpen = !bottomOpen);

<button class="btn btn-primary mb-1" on:click={() => (topOpen = !topOpen)} type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top
                offcanvas</button>
                <Offcanvas  isOpen={topOpen} toggle={toggleTop} placement="top" header="Offcanvas top"  tabindex="-1" id="offcanvasTop">
                   ...
               </Offcanvas>
               <button class="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas"
               data-bs-target="#offcanvasRight" on:click={() => (endOpen = !endOpen)} aria-controls="offcanvasRight">Toggle right
               offcanvas</button>
                <Offcanvas  isOpen={endOpen} toggle={toggleEnd} placement="end" header="Notifications"  tabindex="-1" id="offcanvasExample">
                    <OffcanvasBody class="p-0">
                        <div class="">
                            <ul class="list-group list-group-flush mb-0">
                                {#each OffcanvasData as idx}
                                <li class="list-group-item" >
                                  <div class="d-flex align-items-center">
                                    <div class="me-2">
                                      {#if idx.src}
                                        <div class="avatar avatar-md avatar-rounded">
                                          <img  loading="lazy" alt="avatar" class="rounded-circle" src={idx.src} />
                                        </div>
                                      {:else}
                                        <div class={"avatar avatar-md bg-{idx.color} text-fixed-white avatar-rounded"}>
                                          {idx.text}
                                        </div>
                                      {/if}
                                    </div>
                                    <div class="flex-fill">
                                      <p class="fw-semibold mb-0">{idx.name}<span class="badge bg-light text-muted float-end">{idx.date}</span></p>
                                      <span class="fs-12 text-muted">
                                        <i class="ri-time-line align-middle me-1 d-inline-block"></i>{idx.time}
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              {/each}
                            </ul>
                          </div>
                    </OffcanvasBody>
               </Offcanvas>
               <button class="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas"
               data-bs-target="#offcanvasBottom" on:click={() => (bottomOpen = !bottomOpen)} aria-controls="offcanvasBottom">Toggle
               bottom
               offcanvas</button>
               <Offcanvas  isOpen={bottomOpen}
               toggle={toggleBottom}
               placement="bottom"
               header="Offcanvas bottom"  tabindex="-1" id="offcanvasTop">
                ...
            </Offcanvas>`;
/*------ offcanvas(prism-code for showcode purpose) end ------*/

/*------ placeholders(prism-code for showcode purpose) start ------*/
export const placeholder1 = ` <p class="placeholder-glow mb-0">
<span class="placeholder col-12"></span>
</p>
<p class="placeholder-wave mb-0">
<span class="placeholder col-12"></span>
</p>`;

export const placeholder2 = `  <span class="placeholder col-12 placeholder-xl mb-1"></span>
<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>
`;

export const placeholder3 = ` <span class="placeholder col-12"></span>
<span class="placeholder col-12 bg-primary"></span>
<span class="placeholder col-12 bg-secondary"></span>
<span class="placeholder col-12 bg-success"></span>
<span class="placeholder col-12 bg-danger"></span>
<span class="placeholder col-12 bg-warning"></span>
<span class="placeholder col-12 bg-info"></span>
<span class="placeholder col-12 bg-light"></span>
<span class="placeholder col-12 bg-dark"></span>`;

export const placeholder4 = ` <span class="placeholder bg-primary col-6"></span>
<span class="placeholder bg-primary w-75"></span>
<span class="placeholder bg-primary" style="width: 25%;"></span>`;
/*------ placeholders(prism-code for showcode purpose) end ------*/