import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from 'ngx-owl-carousel-o';
import * as prismCodeData from '../../../../shared/prismData/advancedUi/carousel';
import * as reuseCode from '../../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../../shared/prismData/advancedUi/carousel';
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
import { NgbCarousel } from '../../../../@spk/spk-reusable-plugins/ngb-carousel/ngb-carousel';
@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.html',
    styleUrls: ['./carousel.scss'],
    providers: [NgbCarouselConfig],
    standalone: true,
        imports:[SharedModule,NgbCarouselModule,CarouselModule,ShowcodeCard,NgbCarousel]
})
export class Carousel{
  prismCode = prismCodeData;
  reusableCode: any = reuseCode;

  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  images = [
    './assets/images/media/media-26.jpg',
    './assets/images/media/media-27.jpg',
    './assets/images/media/media-33.jpg',
  ];
  imagescontrol = [
    './assets/images/media/media-28.jpg',
    './assets/images/media/media-31.jpg',
    './assets/images/media/media-29.jpg',
  ];
  imagesIndicators = [
    './assets/images/media/media-25.jpg',
    './assets/images/media/media-29.jpg',
    './assets/images/media/media-30.jpg',
  ];
  carouselImages = [
    {
      src: './assets/images/media/media-59.jpg',
      alt: 'First slide',
      title: 'First slide label',
      description: 'Some representative placeholder content for the first slide.'
    },
    {
      src: './assets/images/media/media-60.jpg',
      alt: 'Second slide',
      title: 'Second slide label',
      description: 'Some representative placeholder content for the second slide.'
    },
    {
      src: './assets/images/media/media-61.jpg',
      alt: 'Third slide',
      title: 'Third slide label',
      description: 'Some representative placeholder content for the third slide.'
    }
  ];
  imagescross = [
    './assets/images/media/media-43.jpg',
    './assets/images/media/media-44.jpg',
    './assets/images/media/media-45.jpg',
  ];
  images1 = [
    './assets/images/media/media-63.jpg',
    './assets/images/media/media-62.jpg',
    './assets/images/media/media-64.jpg',
  ];
  imagesindividual = [
    './assets/images/media/media-40.jpg',
    './assets/images/media/media-41.jpg',
    './assets/images/media/media-42.jpg',
  ];
  darkVariantlImages = [
    {
      src: './assets/images/media/media-13.jpg',
      alt: 'First slide',
      title: 'First slide label',
      description: 'Some representative placeholder content for the first slide.'
    },
    {
      src: './assets/images/media/media-14.jpg',
      alt: 'Second slide',
      title: 'Second slide label',
      description: 'Some representative placeholder content for the second slide.'
    },
    {
      src: './assets/images/media/media-18.jpg',
      alt: 'Third slide',
      title: 'Third slide label',
      description: 'Some representative placeholder content for the third slide.'
    }
  ]
}
