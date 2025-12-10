import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpkNftCard } from "../../../../@spk/reusable-dashboards/nft/spk-nft-card/spk-nft-card";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
interface NftTag {
  text: string;
  className: string;
  active?: boolean;
}
interface NftItem {
  image: string;
  title: string;
  author: string;
  price: string;
}
interface NotificationItem {
  image: string;
  title: string;
  time: string;
  content: string;
}
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
  selector: 'app-live-auction',
  imports: [SharedModule, CommonModule, SpkNftCard, SpkDropdowns],
  templateUrl: './live-auction.html',
  styleUrl: './live-auction.scss'
})
export class LiveAuction {
  constructor( private sanitizer: DomSanitizer) {
  }

    getSanitizedSVG(iconSvg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
    }

  LiveAcuationItems: NFTItem[] = [
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
    {
      id: 2,
      image: "./assets/images/nft-images/3.png",
      title: "Cybercity Uprising: Rebels of the Neon Streets",
      author: "Aiko Nakamura",
      currentBid: "18.34ETH",
      likes: "1.26k",
      bidAmount:'Place a Bid',
      time:'04hrs : 24m : 38s'
    },
    {
      id: 3,
      image: "./assets/images/nft-images/4.png",
      title: "Holo-Vision: The Last Cyberpunk Hero",
      author: "Ryo Takahashi",
      currentBid: "26.50ETH",
      likes: "2.45k",
      bidAmount:'Place a Bid',
      time:'04hrs : 24m : 38s'
    },
    {
      id: 4,
      image: "./assets/images/nft-images/44.png",
      title: "Neon Assassin",
      author: "TrixTheArtist",
      currentBid: "1.5 ETH",
      likes: "1.2k",
      bidAmount:'Place a Bid',
      time:'02hrs : 34m : 12s'
    },
    {
      id: 5,
      image: "./assets/images/nft-images/45.png",
      title: "Cyber Samurai",
      author: "PixelWarrior",
      currentBid: "2.0 ETH",
      likes: "2.3k",
      bidAmount:'Place a Bid',
      time:'03hrs : 15m : 22s'
    },
    {
      id: 6,
      image: "./assets/images/nft-images/18.png",
      title: "Robo-Revolution",
      author: "Holo-Creator",
      currentBid: "0.75 ETH",
      likes: "800",
      bidAmount:'Place a Bid',
      time:'01hrs : 47m : 08s'
    },

  ];
 LiveList: NftItem[] = [
    {
      image: "./assets/images/nft-images/36.png",
      title: "Blade of the Future",
      author: "Kairo Tetsuo",
      price: "10 ETH",
    },
    {
      image: "./assets/images/nft-images/38.png",
      title: "Rebels of the Neon Streets",
      author: "Aiko Nakamura",
      price: "5 ETH",
    },
    {
      image: "./assets/images/nft-images/40.png",
      title: "The Last Cyberpunk Hero",
      author: "Ryo Takahashi",
      price: "7 ETH",
    },
    {
      image: "./assets/images/nft-images/41.png",
      title: "Reborn in the Matrix",
      author: "Nova Cypher",
      price: "12 ETH",
    },
    {
      image: "./assets/images/nft-images/42.png",
      title: "Neon Rage",
      author: "Zara Kai",
      price: "7 ETH",
    },
    {
      image: "./assets/images/nft-images/43.png",
      title: "Dawn of Darkness",
      author: "Maxim Xeno",
      price: "8 ETH",
    },
];

 NotificationsLive: NotificationItem[] = [
    {
      image: "./assets/images/nft-images/31.png",
      title: 'DreamSpace',
      time: '24 mins ago',
      content: 'Purchsed from you by <a class="text-decoration-underline" href="javascript:void(0);">Mitchell</a> for <span class="text-success fw-medium fs-12">0.57ETH</span>.',
    },
    {
      image: "./assets/images/nft-images/25.png",
      title: 'DreamSpace',
      time: '16 mins ago',
      content: 'You started following mark zensberg.',
    },
    {
      image: "./assets/images/nft-images/21.png",
      title: 'Neo Nebulae',
      time: '5 mins ago',
      content: 'Showed interest in purchasing <a href="javascript:void(0);" class="fs-12 text-warning fw-medium">NeoNebulae</a>.',
    },
    {
      image: "./assets/images/nft-images/26.png",
      title: 'Neo Nebulae',
      time: '16 mins ago',
      content: 'Purchased from <a href="javascript:void(0);" class="text-decoration-underline">CyberCanvas</a> for <span class="fw-medium fs-12 text-pink">1.345ETH</span>.',
    },
];

 AcuationTags: NftTag[] = [
    { text: "Music", className: "nft-tag-primary", active: true },
    { text: "Games", className: "nft-tag-secondary" },
    { text: "Art", className: "nft-tag-info" },
    { text: "Photography", className: "nft-tag-success" },
    { text: "Sport", className: "nft-tag-danger" },
    { text: "Cartoon", className: "nft-tag-purple" },
  ];
}
