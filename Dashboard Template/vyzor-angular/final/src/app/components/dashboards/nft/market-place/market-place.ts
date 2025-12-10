import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkNftCard } from '../../../../@spk/reusable-dashboards/nft/spk-nft-card/spk-nft-card';

interface Market {
  id: number;
  title: string;
  author: string;
  likes: string;
  time: string;
  image: string;
  currentBid: string;
  bidAmount:string;
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
  selector: 'app-market-place',
  imports: [SharedModule, NgbModule,SpkDropdowns, SpkNftCard],
  templateUrl: './market-place.html',
  styleUrl: './market-place.scss'
})
export class MarketPlace {


  Market: any[] = [];
  MarketDomain: any[] = [];
  MarketMusic: any[] = [];
  MarketReal: any[] = [];
  MarketSports: any[] = [];
  MarketFashion: any[] = [];
  MarketAvatars: any[] = [];
  MarketMemes: any[] = [];
  ngOnInit(): void {
    this.Market = this.MartketPlaceItems.slice(0, 2);
    this.MarketDomain = this.MartketPlaceItems.filter(item => item.id === 2);
    this.MarketMusic = this.MartketPlaceItems.filter(item => item.id === 3);
    this.MarketReal = this.MartketPlaceItems.filter(item => item.id === 4);
    this.MarketSports = this.MartketPlaceItems.filter(item => item.id === 5);
    this.MarketFashion = this.MartketPlaceItems.filter(item => item.id === 6);
    this.MarketAvatars = this.MartketPlaceItems.filter(item => item.id === 7);
    this.MarketMemes = this.MartketPlaceItems.filter(item => item.id === 8);
  }

 MartketPlaceItems: NFTItem[] = [
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
    author: "Holo-author",
    currentBid: "0.75 ETH",
    likes: "800",
    bidAmount:'Place a Bid',
    time:'01hrs : 47m : 08s'
  },
  {
    id: 7,
    image: "./assets/images/nft-images/14.png",
    title: "Neon District",
    author: "TechnoVision",
    currentBid: "1.6 ETH",
    likes: "1.6k",
    bidAmount:'Place a Bid',
    time:'04hrs : 05m : 40s'
  },
  {
    id: 8,
    image: "./assets/images/nft-images/13.png",
    title: "Synthwave Dream",
    author: "CyborgDreamer",
    currentBid: "1.8 ETH",
    likes: "2.1k",
    bidAmount:'Place a Bid',
    time:'05hrs : 28m : 59s'
  }
];

 MartketPlaceItems1: Market[] = [
  {
    id: 1,
    title: 'Chrome Guardian',
    author: 'NeonRider',
    likes: '3.5k',
    time: '03hrs : 10m : 45s',
    image: './assets/images/nft-images/12.png',
    currentBid: '2.5 ETH',
    bidAmount:'Place a Bid',
  },
  {
    id: 2,
    title: 'Electric Reaper',
    author: 'DarkSynth',
    likes: '2.7k',
    time: '02hrs : 58m : 12s',
    image: './assets/images/nft-images/10.png',
    currentBid: '3.1 ETH',
    bidAmount:'Place a Bid',
  },
  {
    id: 3,
    title: 'Robo-Punk Revolution',
    author: 'UrbanPixel',
    likes: '1.8k',
    time: '06hrs : 45m : 20s',
    image: './assets/images/nft-images/7.png',
    currentBid: '2.3 ETH',
    bidAmount:'Place a Bid',
  },
];


}
