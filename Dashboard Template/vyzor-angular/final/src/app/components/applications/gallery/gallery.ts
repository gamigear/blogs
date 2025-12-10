import { Component } from '@angular/core';
import { GalleryModule, GalleryItem,Gallery, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import GLightbox from 'glightbox';
import { SharedModule } from '../../../shared/shared.module';
import { SpkGallery } from '../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery';

const data = [
  {
    srcUrl: './assets/images/media/media-40.jpg',
    previewUrl: './assets/images/media/media-40.jpg',
    colClass:"col-lg-3 col-md-4 col-sm-6 col-12",
    imageClass:"img-fluid rounded"
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
    colClass:"col-lg-3 col-md-4 col-sm-6 col-12",
    imageClass:"img-fluid rounded"
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
    colClass:"col-lg-3 col-md-4 col-sm-6 col-12",
    imageClass:"img-fluid rounded"
  },
  {
    srcUrl: './assets/images/media/media-43.jpg',
    previewUrl: './assets/images/media/media-43.jpg',
    colClass:"col-lg-3 col-md-4 col-sm-6 col-12",
    imageClass:"img-fluid rounded"
  },
  {
    srcUrl: './assets/images/media/media-44.jpg',
    previewUrl: './assets/images/media/media-44.jpg',
    colClass:"col-lg-3 col-md-4 col-sm-6 col-12",
    imageClass:"img-fluid rounded"
  },
  {
    srcUrl: './assets/images/media/media-45.jpg',
    previewUrl: './assets/images/media/media-45.jpg',
    colClass:"col-lg-3 col-md-4 col-sm-6 col-12"
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
    colClass:"col-lg-3 col-md-4 col-sm-6 col-12",
    imageClass:"img-fluid rounded"
  },
  {
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
    colClass:"col-lg-3 col-md-4 col-sm-6 col-12",
    imageClass:"img-fluid rounded"
  },
];
@Component({
  selector: 'app-gallery',
  imports: [SharedModule, SpkGallery,GalleryModule,FormsModule, ReactiveFormsModule,LightboxModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent {
  imageData = data;
  items!: GalleryItem[];
  constructor(public gallery: Gallery, public lightbox: Lightbox ) { }
  ngAfterViewInit(): void {
    GLightbox({ selector: '.glightbox3, .glightbox4, .glightbox2' });
  }

  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }





}
