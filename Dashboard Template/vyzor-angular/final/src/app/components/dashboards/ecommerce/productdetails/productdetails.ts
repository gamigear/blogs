import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import Swiper from 'swiper'
import { register as registerSwiperElements } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
Swiper.use([Autoplay, Navigation, Pagination]);
registerSwiperElements();
const data = [
  {
    srcUrl: './assets/images/ecommerce/png/1.png',
    previewUrl: './assets/images/ecommerce/png/2.png',
    previewUrl1: './assets/images/ecommerce/png/3.png',
    previewUrl2: './assets/images/ecommerce/png/4.png',
    previewUrl4: './assets/images/ecommerce/png/5.png',
  },
]
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [SharedModule,RouterModule,GalleryModule,NgbModule,FormsModule,LightboxModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.scss'
})
export class Productdetails {


  product: number = 1;

  increase() {
    this.product++;
  }

  decrease() {
    if (this.product >0) {
      this.product--;
    }
  }

  productData = {
    brand: 'Nike',
    quantityAvailable: 150,
    productCode: 'SPK-SNEAKER-2025',
    colors: ['Black', 'White', 'Red', 'Blue', 'Gray'],
    restockStatus: 'Not Restocking (Limited Edition)',
    material: ['Mesh', 'Rubber', 'Textile']
  };

}
