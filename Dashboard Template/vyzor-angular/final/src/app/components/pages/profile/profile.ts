import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { Gallery, GalleryItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import {
  DropzoneConfigInterface,
  DropzoneModule,
  DROPZONE_CONFIG} from 'ngx-dropzone-wrapper';
import { SharedModule } from '../../../shared/shared.module';
import { SpkFriendsCard } from '../../../@spk/reusable-pages/spk-friends-card/spk-friends-card';
import { SpkProfileCard } from '../../../@spk/reusable-pages/spk-profile-card/spk-profile-card';
import { SpkGallery } from '../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery';
import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';

  const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    // Change this to your upload POST address:
     url: 'https://httpbin.org/post',
     maxFilesize: 50,
     acceptedFiles: 'image/*'
   };
interface Friend {
  name: string;
  mail: string;
  imgSrc: string;
}
interface UserProfile {
  name: string;
  mail: string;
  imgSrc: string;
  icon: string;
  color: string;
  followers: string;
}
@Component({
    selector: 'app-profile',
    templateUrl: './profile.html',
    styleUrls: ['./profile.scss'],
     providers: [
          {
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG
          }
        ],
    standalone: true,
    imports: [SharedModule, NgbNavModule, NgSelectModule,DropzoneModule, RouterModule, SpkFriendsCard, SpkProfileCard, SpkGallery, SpkDropdowns]
})
export class Profile implements OnInit {
  items!: GalleryItem[];
  activeNav=[1]
  imageData = data;
  // items!: GalleryItem[];
  constructor(public gallery: Gallery, public lightbox: Lightbox) {}
  ngOnInit() {

  }
  public type: string = 'component';

  public disabled: boolean = false;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 100,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  public onUploadInit(args: any): void {
  }

  public onUploadError(args: any): void {
  }

  public onUploadSuccess(args: any): void {
  }
  FriendsList: Friend[] = [
    {
        name: "JohnDoe",
        mail: "john.doe@example.com",
        imgSrc: "./assets/images/faces/9.jpg",
    },
    {
        name: "SarahSmith",
        mail: "sarah.smith@example.com",
        imgSrc: "./assets/images/faces/1.jpg",
    },
    {
        name: "MichaelBrown",
        mail: "michael.brown@example.com",
        imgSrc: "./assets/images/faces/10.jpg",
    },
    {
        name: "EmmaWilson",
        mail: "emma.wilson@example.com",
        imgSrc: "./assets/images/faces/2.jpg",
    },
    {
        name: "JamesTaylor",
        mail: "james.taylor@example.com",
        imgSrc: "./assets/images/faces/11.jpg",
    },
    {
        name: "OliviaJohnson",
        mail: "olivia.johnson@example.com",
        imgSrc: "./assets/images/faces/3.jpg",
    },
    {
        name: "DavidMartinez",
        mail: "david.martinez@example.com",
        imgSrc: "./assets/images/faces/13.jpg"
    },
    {
        name: "SophiaGarcia",
        mail: "sophia.garcia@example.com",
        imgSrc: "./assets/images/faces/4.jpg"
    },
    {
        name: "DanielLee",
        mail: "daniel.lee@example.com",
        imgSrc: "./assets/images/faces/14.jpg"
    },
    {
        name: "IsabellaHarris",
        mail: "isabella.harris@example.com",
        imgSrc: "./assets/images/faces/6.jpg"
    },
    {
        name: "WilliamClark",
        mail: "william.clark@example.com",
        imgSrc: "./assets/images/faces/15.jpg"
    },
    {
        name: "JohnDoe",
        mail: "john.doe@example.com",
        imgSrc: "./assets/images/faces/9.jpg"
    },
];
Profiles: UserProfile[] = [
  {
      name: "JohnDoe",
      mail: "john.doe@example.com",
      imgSrc: "./assets/images/faces/9.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "SarahSmith",
      mail: "sarah.smith@example.com",
      imgSrc: "./assets/images/faces/1.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "MichaelBrown",
      mail: "michael.brown@example.com",
      imgSrc: "./assets/images/faces/10.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "EmmaWilson",
      mail: "emma.wilson@example.com",
      imgSrc: "./assets/images/faces/2.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "JamesTaylor",
      mail: "james.taylor@example.com",
      imgSrc: "./assets/images/faces/11.jpg",
      icon: "minus",
      color: 'danger',
      followers: 'Unfollow'
  },
  {
      name: "OliviaJohnson",
      mail: "olivia.johnson@example.com",
      imgSrc: "./assets/images/faces/3.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "DavidMartinez",
      mail: "david.martinez@example.com",
      imgSrc: "./assets/images/faces/13.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "SophiaGarcia",
      mail: "sophia.garcia@example.com",
      imgSrc: "./assets/images/faces/4.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "DanielLee",
      mail: "daniel.lee@example.com",
      imgSrc: "./assets/images/faces/14.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "IsabellaHarris",
      mail: "isabella.harris@example.com",
      imgSrc: "./assets/images/faces/5.jpg",
      icon: "minus",
      color: 'danger',
      followers: 'Unfollow'
  },
  {
      name: "WilliamClark",
      mail: "william.clark@example.com",
      imgSrc: "./assets/images/faces/15.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "MiaLewis",
      mail: "mia.lewis@example.com",
      imgSrc: "./assets/images/faces/6.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "AlexanderWalker",
      mail: "alexander.walker@example.com",
      imgSrc: "./assets/images/faces/16.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "CharlotteAllen",
      mail: "charlotte.allen@example.com",
      imgSrc: "./assets/images/faces/7.jpg",
      icon: "add",
      color: 'primary',
      followers: 'Follow'
  },
  {
      name: "BenjaminYoung",
      mail: "benjamin.young@example.com",
      imgSrc: "./assets/images/faces/8.jpg",
      icon: "minus",
      color: 'danger',
      followers: 'Unfollow'
  },
];

}
const data = [
  {
    srcUrl: './assets/images/media/media-40.jpg',
    previewUrl: './assets/images/media/media-40.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-43.jpg',
    previewUrl: './assets/images/media/media-43.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-44.jpg',
    previewUrl: './assets/images/media/media-44.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-45.jpg',
    previewUrl: './assets/images/media/media-45.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-26.jpg',
    previewUrl: './assets/images/media/media-26.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-32.jpg',
    previewUrl: './assets/images/media/media-32.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-30.jpg',
    previewUrl: './assets/images/media/media-30.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-31.jpg',
    previewUrl: './assets/images/media/media-31.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-59.jpg',
    previewUrl: './assets/images/media/media-59.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-61.jpg',
    previewUrl: './assets/images/media/media-61.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
    lightboxClass: 'mb-0',
    colClass:"col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
  },
];
