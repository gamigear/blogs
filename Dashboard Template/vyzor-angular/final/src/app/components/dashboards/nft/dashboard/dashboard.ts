import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpkNftSwiper } from "../../../../@spk/reusable-dashboards/nft/spk-nft-swiper/spk-nft-swiper";
import { SharedModule } from '../../../../shared/shared.module';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { SpkNftCard } from '../../../../@spk/reusable-dashboards/nft/spk-nft-card/spk-nft-card';
interface NftTag {
  label: string;
  className: string;
  isActive?: boolean;
}

interface NftCard {
  id: string;
  image: string;
  title: string;
  author: string;
  likes: string;
  currentBid: string;
  bidAmount: string;
  time:string;
}

interface Follower {
  id: string;
  name: string;
  handle: string;
  image: string;
  isFollowing: boolean;
}
interface StatItem {
  title: string;
  badge: string;
  badgeColor: string;
  badgeIcon: string;
  label: string;
  value: string;
}
interface NftSaleItem {
  image: string;
  title: string;
  author: string;
  avatar: string;
  price: string;
}
interface NftTableItem {
  id: number;
  image: string;
  title: string;
  handle: string;
  creator: string;
  date: string;
  price: string;
  status: string;
  statusClass: string;
  category: string;
  chain: string;
  edition: string;
  volume: string;
}
@Component({
  selector: 'app-dashboard',
  imports: [SharedModule, SpkDropdowns, CommonModule, SpkReusableTables, SpkApexChart, SpkNftSwiper, SpkNftCard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
    ngAfterViewInit(): void {
      const swiperEl = this.swiperContainer.nativeElement;

      Object.assign(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 20,
      });
      swiperEl.initialize();
    }
  NftHeader=[
    {header:'S.No'},
    {header:'NFT Name'},
    {header:'Creator'},
    {header:'Release Date'},
    {header:'Price'},
    {header:'Status'},
    {header:'Category'},
    {header:'Blockchain'},
    {header:'Ownership'},
    {header:'Volume (ETH)'},
  ]

 NftTags: NftTag[] = [
    { label: 'Music', className: 'nft-tag-primary', isActive: true },
    { label: 'Games', className: 'nft-tag-secondary' },
    { label: 'Art', className: 'nft-tag-info' },
    { label: 'Photography', className: 'nft-tag-success' },
    { label: 'Sport', className: 'nft-tag-danger' },
    { label: 'Cartoon', className: 'nft-tag-purple' },
];
 NftCards: NftCard[] = [
  {
    id: 'nft1',
    image: './assets/images/nft-images/2.png',
    title: 'Neon Samurai: Blade of the Future',
    author: 'Kairo Tetsuo',
    likes: '1.32k',
    currentBid: '12.45ETH',
    bidAmount: 'Place a Bid',
    time:'04hrs : 24m : 38s'
  },
  {
    id: 'nft2',
    image: './assets/images/nft-images/3.png',
    title: 'Cybercity Uprising: Rebels of the Neon Streets',
    author: 'Aiko Nakamura',
    likes: '1.26k',
    currentBid: '18.34ETH',
    bidAmount: 'Place a Bid',
    time:'04hrs : 24m : 38s'
  },
  {
    id: 'nft3',
    image: './assets/images/nft-images/4.png',
    title: 'Holo-Vision: The Last Cyberpunk Hero',
    author: 'Ryo Takahashi',
    likes: '2.45k',
    currentBid: '26.50ETH',
    bidAmount: 'Place a Bid',
    time:'04hrs : 24m : 38s'
  },
];


 Followers: Follower[] = [
    {
      id: '1',
      name: 'Kairo Tetsuo',
      handle: '@KairoX',
      image: './assets/images/nft-images/6.jpg',
      isFollowing: false,
    },
    {
      id: '2',
      name: 'Aiko Nakamura',
      handle: '@NamiGhost',
      image: './assets/images/nft-images/15.jpg',
      isFollowing: true,
    },
    {
      id: '3',
      name: 'Kairo Tetsuo',
      handle: '@KairoX',
      image: './assets/images/nft-images/16.jpg',
      isFollowing: false,
    },
    {
      id: '4',
      name: 'Ryo Takahashi',
      handle: '@TakaraVision',
      image: './assets/images/nft-images/17.jpg',
      isFollowing: false,
    },
    {
      id: '5',
      name: 'Nova Cypher',
      handle: '@CypherNova',
      image: './assets/images/nft-images/11.jpg',
      isFollowing: false,
    },
    {
      id: '6',
      name: 'Zara Kai',
      handle: '@ZaraKx',
      image: './assets/images/nft-images/9.jpg',
      isFollowing: false,
    },
    {
      id: '7',
      name: 'Maxim Xeno',
      handle: '@XenoMax',
      image: './assets/images/nft-images/8.jpg',
      isFollowing: false,
    },
];

 NftOptions = {
  series : [{
    name: "Last Year",
    data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
}, {
    name: "This Year",
    data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
}],
    chart: {
        height: 280,
        type: 'bar',
        zoom: {
            enabled: false
        },
        stacked: true,
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
            columnWidth: '45%',
            borderRadius: 2,
        }
    },
    legend: {
        show: true,
        position: 'bottom',
        markers: {
            width: 10,
            height: 10,
        }
    },
    stroke: {
        curve: 'smooth',
    },
    grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3,
    },
    colors: ["var(--primary-color)", "var(--primary02)"],
    yaxis: {
        title: {
            text: 'Statistics',
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
    xaxis: {
        type: 'month',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: true,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90
        }
    }
}
NftBalanceOptions={
  chart: {
    type: 'area',
    height: 60,
    sparkline: {
        enabled: true
    }
},
stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
},
fill: {
    type: 'gradient',
    gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
        colorStops: [
            [
                {
                    offset: 0,
                    color: "var(--primary01)",
                    opacity: 1
                },
                {
                    offset: 75,
                    color: "var(--primary01)",
                    opacity: 1
                },
                {
                    offset: 100,
                    color: "var(--primary01)",
                    opacity: 1
                }
            ]
        ]
    }
},
series: [{
    name: 'Value',
    data: [20, 14, 19, 10, 25, 20, 22, 9, 12]
}],
yaxis: {
    min: 0,
    show: false,
    axisBorder: {
        show: false
    },
},
xaxis: {
    show: false,
    axisBorder: {
        show: false
    },
},
colors: ["var(--primary-color)"],
}

 StatItems: StatItem[] = [
    {
      title: "Growth",
      badge: "2.35%",
      badgeColor: "success",
      badgeIcon: "ti ti-arrow-up",
      label: "NFT's Sold",
      value: "3,297",
    },
    {
      title: "Market",
      badge: "6.96%",
      badgeColor: "success",
      badgeIcon: "ti ti-arrow-up",
      label: "Total Market",
      value: "$1.45M",
    },
    {
      title: "Bid",
      badge: "3.85%",
      badgeColor: "danger",
      badgeIcon: "ti ti-arrow-down",
      label: "Highest Bid",
      value: "128ETH",
    },
];


 NftSales: NftSaleItem[] = [
    {
      image: "./assets/images/nft-images/36.png",
      title: "Blade of the Future",
      author: "Kairo Tetsuo",
      avatar: "./assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
      price: "10 ETH",
    },
    {
      image: "./assets/images/nft-images/38.png",
      title: "Rebels of the Neon Streets",
      author: "Aiko Nakamura",
      avatar: "./assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
      price: "5 ETH",
    },
    {
      image: "./assets/images/nft-images/40.png",
      title: "The Last Cyberpunk Hero",
      author: "Ryo Takahashi",
      avatar: "./assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
      price: "7 ETH",
    },
    {
      image: "./assets/images/nft-images/41.png",
      title: "Reborn in the Matrix",
      author: "Nova Cypher",
      avatar: "./assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
      price: "12 ETH",
    },
    {
      image: "./assets/images/nft-images/42.png",
      title: "Neon Rage",
      author: "Zara Kai",
      avatar: "./assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
      price: "7 ETH",
    },
    {
      image: "./assets/images/nft-images/43.png",
      title: "Dawn of Darkness",
      author: "Maxim Xeno",
      avatar: "./assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
      price: "8 ETH",
    },
];

 NftTableData: NftTableItem[] = [
    {
      id: 1,
      image: "./assets/images/nft-images/40.png",
      title: "Neon Samurai",
      handle: "@KairoX",
      creator: "Kairo Tetsuo",
      date: "Feb 25, 2025",
      price: "10 ETH",
      status: "Sold Out",
      statusClass: "bg-success-transparent",
      category: "Cyberpunk",
      chain: "Ethereum",
      edition: "1 of 1",
      volume: "50 ETH",
    },
    {
      id: 2,
      image: "./assets/images/nft-images/42.png",
      title: "Cybercity Uprising",
      handle: "@NamiGhost",
      creator: "Aiko Nakamura",
      date: "Mar 10, 2025",
      price: "5 ETH",
      status: "50% Sold",
      statusClass: "bg-success-transparent",
      category: "Cyberpunk",
      chain: "Polygon",
      edition: "3 of 10",
      volume: "15 ETH",
    },
    {
      id: 3,
      image: "./assets/images/nft-images/35.png",
      title: "Holo-Vision Hero",
      handle: "@TakaraVision",
      creator: "Ryo Takahashi",
      date: "Mar 18, 2025",
      price: "7 ETH",
      status: "80% Sold",
      statusClass: "bg-success-transparent",
      category: "Sci-Fi",
      chain: "Ethereum",
      edition: "5 of 5",
      volume: "20 ETH",
    },
    {
      id: 4,
      image: "./assets/images/nft-images/36.png",
      title: "Cyber Phoenix",
      handle: "@CypherNova",
      creator: "Nova Cypher",
      date: "Apr 2, 2025",
      price: "12 ETH",
      status: "10% Sold",
      statusClass: "bg-success-transparent",
      category: "Cyberpunk",
      chain: "Binance",
      edition: "10 of 20",
      volume: "10 ETH",
    },
    {
      id: 5,
      image: "./assets/images/nft-images/37.png",
      title: "Digital Outlaws",
      handle: "@ZaraKx",
      creator: "Zara Kai",
      date: "Apr 15, 2025",
      price: "15 ETH",
      status: "Coming Soon",
      statusClass: "bg-primary-transparent",
      category: "Cyberpunk",
      chain: "Solana",
      edition: "1 of 1",
      volume: "0 ETH",
    },
    {
      id: 6,
      image: "./assets/images/nft-images/38.png",
      title: "Cyber Reaper",
      handle: "@XenoMax",
      creator: "Maxim Xeno",
      date: "Apr 20, 2025",
      price: "8 ETH",
      status: "Pre-Sale",
      statusClass: "bg-warning-transparent",
      category: "Cyberpunk",
      chain: "Ethereum",
      edition: "7 of 10",
      volume: "25 ETH",
    },
  ];
  FeaturedAuthors=[
   {
    images:[
      {col:"12",src:"./assets/images/nft-images/38.png"},
      {col:"6",src:"./assets/images/nft-images/40.png"},
      {col:"6",src:"./assets/images/nft-images/41.png"}
    ],
    author:"./assets/images/faces/5.jpg",
    authorName:"Melissa Smith",
    mail:"@melissa"
   },
   {
    images:[
      {col:"12",src:"./assets/images/nft-images/35.png"},
      {col:"6",src:"./assets/images/nft-images/36.png"},
      {col:"6",src:"./assets/images/nft-images/37.png"}
    ],
    author:"./assets/images/faces/15.jpg",
    authorName:"Simon Cowell",
    mail:"@simon"
   },
   {
    images:[
      {col:"12",src:"./assets/images/nft-images/39.png"},
      {col:"6",src:"./assets/images/nft-images/42.png"},
      {col:"6",src:"./assets/images/nft-images/43.png"}
    ],
    author:"./assets/images/faces/10.jpg",
    authorName:"Json Talor",
    mail:"@taylor"
   }
  ]

}
