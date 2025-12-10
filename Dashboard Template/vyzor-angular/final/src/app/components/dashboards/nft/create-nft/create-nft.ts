import { Component, ViewChild } from '@angular/core';
import * as FilePond from 'filepond';
import { FilePondComponent, FilePondModule,registerPlugin } from 'ngx-filepond';
import { SpkNftCard } from "../../../../@spk/reusable-dashboards/nft/spk-nft-card/spk-nft-card";
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(
  FilePondPluginImagePreview,
  // FilePondPluginImageResize,
  // FilePondPluginImageTransform
);

interface NFTItem {
  id: number;
  image: string;
  title: string;
  author: string;
  currentBid: string;
  likes: string;
  bidAmount:string;
  time:string;
}

@Component({
  selector: 'app-create-nft',
  imports: [SharedModule, FilePondModule, SpkNgSelect, SpkNftCard],
  templateUrl: './create-nft.html',
  styleUrl: './create-nft.scss'
})
export class CreateNft {
  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Png, Gif, MP4 (or) MP3, WEBP, 3D Model ",

  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Png, Gif, MP4 (or) MP3, WEBP, 3D Model ",
  };
  dropzoneOptions: FilePond.FilePondOptions = {
    allowImagePreview: true,
    imagePreviewHeight: 400,
    // imageResizeTargetWidth: 600,
    // imageResizeTargetHeight: 400,
    // imageResizeMode: 'contain',
    // imageResizeUpscale: false,
    stylePanelLayout: 'compact circle',
    labelIdle: "Png, Gif, MP4 (or) MP3, WEBP, 3D Model ",
    styleLoadIndicatorPosition: 'center bottom',
    styleButtonRemoveItemPosition: 'center bottom',
  };

  pondFiles: FilePond.FilePondOptions["files"] = [];

  pondHandleInit() { }

  pondHandleAddFile(event: any) { }

  pondHandleActivateFile(event: any) { }
  Royality=[
    {label:'Choose Royalities',value:1},
    {label:'Flat Royalty',value:2},
    {label:'Graduated Royalty',value:3},
    {label:'Tiered Royalty',value:4},
    {label:'Time-Limited Royalty',value:5},
    {label:'Customized Royalty',value:6},
  ]
  NftCards: NFTItem[] = [
    {
      id: 1,
      image: "./assets/images/nft-images/2.png",
      title: "Neon Samurai: Blade of the Future",
      author: "Kairo Tetsuo",
      currentBid: "12.45ETH",
      likes: "1.32k",
      bidAmount:'Place a Bid',
      time:'04hrs : 24m : 38s'
    },
  ]
}
