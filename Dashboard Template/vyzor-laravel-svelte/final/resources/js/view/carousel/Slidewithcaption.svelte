<script>
  import {
    Carousel,
    CarouselControl,
    CarouselIndicators,
    CarouselItem,
    CarouselCaption,
  } from "@sveltestrap/sveltestrap";

  import { items} from "@/shared/data/adavanec-ui/carouseldata.js";

  let activeIndex = 0;
</script>

<Carousel
  id="carouselExampleCaptions"
  {items}
  bind:activeIndex
  ride
  interval={100000000}
>
  <CarouselIndicators bind:activeIndex {items} />
  <div class="carousel-inner">
    {#each items as item, index}
      <CarouselItem bind:activeIndex itemIndex={index}>
        <img  loading="lazy" src={item.src} class="d-block w-100" alt={item.title01} />
        <CarouselCaption>
          <h5 class="text-fixed-white">{item.title01}</h5>
          <p>{item.subTitle}</p>
        </CarouselCaption>
      </CarouselItem>
    {/each}
  </div>

  <CarouselControl direction="prev" bind:activeIndex {items} />
  <CarouselControl direction="next" bind:activeIndex {items} />
</Carousel>
