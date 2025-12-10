

interface NftTag {
    label: string;
    className: string;
    isActive?: boolean;
}

export const NftTags: NftTag[] = [
    { label: 'Music', className: 'nft-tag-primary', isActive: true },
    { label: 'Games', className: 'nft-tag-secondary' },
    { label: 'Art', className: 'nft-tag-info' },
    { label: 'Photography', className: 'nft-tag-success' },
    { label: 'Sport', className: 'nft-tag-danger' },
    { label: 'Cartoon', className: 'nft-tag-purple' },
];

interface NftCard {
    id: string;
    image: string;
    title: string;
    author: string;
    likes: string;
    currentBid: string;
    bidAmount: string;
    time: string;
}

export const NftCards: NftCard[] = [
    {
        id: 'nft1',
        image: '../../images/nft-images/2.png',
        title: 'Neon Samurai: Blade of the Future',
        author: 'By Kairo Tetsuo',
        likes: '1.32k',
        currentBid: '12.45ETH',
        bidAmount: 'Place a Bid',
        time: '04hrs : 24m : 38s'
    },
    {
        id: 'nft2',
        image: '../../images/nft-images/3.png',
        title: 'Cybercity Uprising: Rebels of the Neon Streets',
        author: 'By Aiko Nakamura',
        likes: '1.26k',
        currentBid: '18.34ETH',
        bidAmount: 'Place a Bid',
        time: '04hrs : 24m : 38s'
    },
    {
        id: 'nft3',
        image: '../../images/nft-images/4.png',
        title: 'Holo-Vision: The Last Cyberpunk Hero',
        author: 'By Ryo Takahashi',
        likes: '2.45k',
        currentBid: '26.50ETH',
        bidAmount: 'Place a Bid',
        time: '04hrs : 24m : 38s'
    },
];

interface Follower {
    id: string;
    name: string;
    handle: string;
    image: string;
    isFollowing: boolean;
}

export const Followers: Follower[] = [
    {
        id: '1',
        name: 'Kairo Tetsuo',
        handle: '@KairoX',
        image: '../../images/nft-images/6.jpg',
        isFollowing: false,
    },
    {
        id: '2',
        name: 'Aiko Nakamura',
        handle: '@NamiGhost',
        image: '../../images/nft-images/15.jpg',
        isFollowing: true,
    },
    {
        id: '3',
        name: 'Kairo Tetsuo',
        handle: '@KairoX',
        image: '../../images/nft-images/16.jpg',
        isFollowing: false,
    },
    {
        id: '4',
        name: 'Ryo Takahashi',
        handle: '@TakaraVision',
        image: '../../images/nft-images/17.jpg',
        isFollowing: false,
    },
    {
        id: '5',
        name: 'Nova Cypher',
        handle: '@CypherNova',
        image: '../../images/nft-images/11.jpg',
        isFollowing: false,
    },
    {
        id: '6',
        name: 'Zara Kai',
        handle: '@ZaraKx',
        image: '../../images/nft-images/9.jpg',
        isFollowing: false,
    },
    {
        id: '7',
        name: 'Maxim Xeno',
        handle: '@XenoMax',
        image: '../../images/nft-images/8.jpg',
        isFollowing: false,
    },
];


export const NftOptions = {
    series: [{
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
interface StatItem {
    title: string;
    badge: string;
    badgeColor: string;
    badgeIcon: string;
    label: string;
    value: string;
}

export const StatItems: StatItem[] = [
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

interface NftSaleItem {
    image: string;
    title: string;
    author: string;
    avatar: string;
    price: string;
}

export const NftSales: NftSaleItem[] = [
    {
        image: "../../images/nft-images/36.png",
        title: "Blade of the Future",
        author: "Kairo Tetsuo",
        avatar: "../../images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
        price: "10 ETH",
    },
    {
        image: "../../images/nft-images/38.png",
        title: "Rebels of the Neon Streets",
        author: "Aiko Nakamura",
        avatar: "../../images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
        price: "5 ETH",
    },
    {
        image: "../../images/nft-images/40.png",
        title: "The Last Cyberpunk Hero",
        author: "Ryo Takahashi",
        avatar: "../../images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
        price: "7 ETH",
    },
    {
        image: "../../images/nft-images/41.png",
        title: "Reborn in the Matrix",
        author: "Nova Cypher",
        avatar: "../../images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
        price: "12 ETH",
    },
    {
        image: "../../images/nft-images/42.png",
        title: "Neon Rage",
        author: "Zara Kai",
        avatar: "../../images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
        price: "7 ETH",
    },
    {
        image: "../../images/nft-images/43.png",
        title: "Dawn of Darkness",
        author: "Maxim Xeno",
        avatar: "../../images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
        price: "8 ETH",
    },
];

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

export const NftTableData: NftTableItem[] = [
    {
        id: 1,
        image: "../../images/nft-images/40.png",
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
        image: "../../images/nft-images/42.png",
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
        image: "../../images/nft-images/35.png",
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
        image: "../../images/nft-images/36.png",
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
        image: "../../images/nft-images/37.png",
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
        image: "../../images/nft-images/38.png",
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

//

export const BalanceOptions = {
    series:[{
    name: 'Value',
    data: [20, 14, 19, 10, 25, 20, 22, 9, 12]
}],
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

interface NftCardData {
    images: string[];
    user: {
        name: string;
        username: string;
        avatar: string;
    };
}
export const nftCards: NftCardData[] = [
    {
        images: [
            "../../images/nft-images/38.png",
            "../../images/nft-images/40.png",
            "../../images/nft-images/41.png",
        ],
        user: {
            name: "Melissa Smith",
            username: "@melissa",
            avatar: "../../images/faces/5.jpg",
        },
    },
    {
        images: [
            "../../images/nft-images/35.png",
            "../../images/nft-images/36.png",
            "../../images/nft-images/37.png",
        ],
        user: {
            name: "Simon Cowell",
            username: "@simon",
            avatar: "../../images/faces/15.jpg",
        },
    },
    {
        images: [
            "../../images/nft-images/39.png",
            "../../images/nft-images/42.png",
            "../../images/nft-images/43.png",
        ],
        user: {
            name: "Json Talor",
            username: "@taylor",
            avatar: "../../images/faces/10.jpg",
        },
    },
];

