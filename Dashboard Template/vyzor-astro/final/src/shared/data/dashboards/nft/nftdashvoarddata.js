
import nft2 from '../../../../assets/images/nft-images/2.png';
import nft3 from '../../../../assets/images/nft-images/3.png';
import nft4 from '../../../../assets/images/nft-images/4.png';
import nft6 from '../../../../assets/images/nft-images/6.jpg';
import nft8 from '../../../../assets/images/nft-images/8.jpg';
import nft9 from '../../../../assets/images/nft-images/9.jpg';
import nft11 from '../../../../assets/images/nft-images/11.jpg';
import nft15 from '../../../../assets/images/nft-images/15.jpg';
import nft16 from '../../../../assets/images/nft-images/16.jpg';
import nft17 from '../../../../assets/images/nft-images/17.jpg';
import nft35 from '../../../../assets/images/nft-images/35.png';
import nft36 from '../../../../assets/images/nft-images/36.png';
import nft37 from '../../../../assets/images/nft-images/37.png';
import nft38 from '../../../../assets/images/nft-images/38.png';
import nft39 from '../../../../assets/images/nft-images/39.png';
import nft40 from '../../../../assets/images/nft-images/40.png';
import nft41 from '../../../../assets/images/nft-images/41.png';
import nft42 from '../../../../assets/images/nft-images/42.png';
import nft43 from '../../../../assets/images/nft-images/43.png';
import ethereum_eth_logo from '../../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg';

import face5 from '../../../../assets/images/faces/5.jpg';
import face10 from '../../../../assets/images/faces/10.jpg'
import face15 from '../../../../assets/images/faces/15.jpg';

  
export const NftTags= [
    { label: 'Music', className: 'nft-tag-primary', isActive: true },
    { label: 'Games', className: 'nft-tag-secondary' },
    { label: 'Art', className: 'nft-tag-info' },
    { label: 'Photography', className: 'nft-tag-success' },
    { label: 'Sport', className: 'nft-tag-danger' },
    { label: 'Cartoon', className: 'nft-tag-purple' },
];



export const NftCards = [
  {
    id: 'nft1',
    image: nft2,
    title: 'Neon Samurai: Blade of the Future',
    author: 'By Kairo Tetsuo',
    likes: '1.32k',
    currentBid: '12.45ETH',
    bidAmount: 'Place a Bid',
    time:'04hrs : 24m : 38s'
  },
  {
    id: 'nft2',
    image: nft3,
    title: 'Cybercity Uprising: Rebels of the Neon Streets',
    author: 'By Aiko Nakamura',
    likes: '1.26k',
    currentBid: '18.34ETH',
    bidAmount: 'Place a Bid',
    time:'04hrs : 24m : 38s'
  },
  {
    id: 'nft3',
    image: nft4,
    title: 'Holo-Vision: The Last Cyberpunk Hero',
    author: 'By Ryo Takahashi',
    likes: '2.45k',
    currentBid: '26.50ETH',
    bidAmount: 'Place a Bid',
    time:'04hrs : 24m : 38s'
  },
];


  
export const Followers = [
    {
      id: '1',
      name: 'Kairo Tetsuo',
      handle: '@KairoX',
      image: nft6,
      isFollowing: false,
    },
    {
      id: '2',
      name: 'Aiko Nakamura',
      handle: '@NamiGhost',
      image: nft15,
      isFollowing: true,
    },
    {
      id: '3',
      name: 'Kairo Tetsuo',
      handle: '@KairoX',
      image: nft16,
      isFollowing: false,
    },
    {
      id: '4',
      name: 'Ryo Takahashi',
      handle: '@TakaraVision',
      image: nft17,
      isFollowing: false,
    },
    {
      id: '5',
      name: 'Nova Cypher',
      handle: '@CypherNova',
      image: nft11,
      isFollowing: false,
    },
    {
      id: '6',
      name: 'Zara Kai',
      handle: '@ZaraKx',
      image: nft9,
      isFollowing: false,
    },
    {
      id: '7',
      name: 'Maxim Xeno',
      handle: '@XenoMax',
      image: nft8,
      isFollowing: false,
    },
];
  

export const StatItems = [
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


  
export const NftSales = [
    {
      image: nft36,
      title: "Blade of the Future",
      author: "Kairo Tetsuo",
      avatar: ethereum_eth_logo,
      price: "10 ETH",
    },
    {
      image: nft38,
      title: "Rebels of the Neon Streets",
      author: "Aiko Nakamura",
      avatar: ethereum_eth_logo,
      price: "5 ETH",
    },
    {
      image: nft40,
      title: "The Last Cyberpunk Hero",
      author: "Ryo Takahashi",
      avatar: ethereum_eth_logo,
      price: "7 ETH",
    },
    {
      image: nft41,
      title: "Reborn in the Matrix",
      author: "Nova Cypher",
      avatar: ethereum_eth_logo,
      price: "12 ETH",
    },
    {
      image: nft42,
      title: "Neon Rage",
      author: "Zara Kai",
      avatar: ethereum_eth_logo,
      price: "7 ETH",
    },
    {
      image: nft43,
      title: "Dawn of Darkness",
      author: "Maxim Xeno",
      avatar: ethereum_eth_logo,
      price: "8 ETH",
    },
];
  

  
export const NftTableData = [
    {
      id: 1,
      image: nft40,
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
      image: nft42,
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
      image: nft35,
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
      image: nft36,
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
      image: nft37,
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
      image: nft38,
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
    


export const nftCards = [
  {
    images: [
      nft38,
      nft40,
      nft41,
    ],
    user: {
      name: "Melissa Smith",
      username: "@melissa",
      avatar: face5,
    },
  },
  {
    images: [
      nft35,
      nft36,
      nft37,
    ],
    user: {
      name: "Simon Cowell",
      username: "@simon",
      avatar: face15,
    },
  },
  {
    images: [
      nft39,
      nft42,
      nft43,
    ],
    user: {
      name: "Json Talor",
      username: "@taylor",
      avatar: face10,
    },
  },
];

