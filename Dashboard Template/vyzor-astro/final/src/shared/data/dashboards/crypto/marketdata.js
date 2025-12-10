

import bitcoinsvgreg from '../../../../assets/images/crypto-currencies/regular/Bitcoin.svg';
import bitcoinsvg from '../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg';
import dashsvgreg from '../../../../assets/images/crypto-currencies/regular/Dash.svg';
import dashsvg from '../../../../assets/images/crypto-currencies/square-color/Dash.svg';
import IOTA from '../../../../assets/images/crypto-currencies/square-color/IOTA.svg';
import ethereumsvgreg from '../../../../assets/images/crypto-currencies/regular/Ethereum.svg';
import ethereumsvg from '../../../../assets/images/crypto-currencies/square-color/Ethereum.svg';
import golemsvg from '../../../../assets/images/crypto-currencies/square-color/Golem.svg';
import litecoinsvgreg from '../../../../assets/images/crypto-currencies/regular/litecoin.svg';
import litecoinsvg from '../../../../assets/images/crypto-currencies/square-color/litecoin.svg';
import ripplesvg from '../../../../assets/images/crypto-currencies/square-color/Ripple.svg';
import monerosvg from '../../../../assets/images/crypto-currencies/square-color/monero.svg';
import EOS from '../../../../assets/images/crypto-currencies/square-color/EOS.svg';
import Bytecoin from '../../../../assets/images/crypto-currencies/square-color/Bytecoin.svg';



export const MartketTable = [
    {
        rank: 1,
        name: "Bitcoin",
        imgsrc: bitcoinsvg,
        symbol: "BTC",
        marketCap: "$850B",
        price: "$44,500",
        priceChange1h: "+0.5%",
        priceChange24h: "-1.2%",
        volume: "$35B",
        circulatingSupply: "19M BTC",
        chartId: "btc-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'danger',
        priceIcon: "up",
        priceIcons: "down",
    },
    {
        rank: 2,
        name: "Ethereum",
        imgsrc: ethereumsvg,
        symbol: "ETH",
        marketCap: "$400B",
        price: "$3,200",
        priceChange1h: "-1.2%",
        priceChange24h: "-1.2%",
        volume: "$25B",
        circulatingSupply: "118M ETH",
        chartId: "eth-chart",
        priceChangeColor: 'danger',
        priceChange24hColor: 'danger',
        priceIcon: "down",
        priceIcons: "down",
    },
    {
        rank: 3,
        name: "Golem",
        imgsrc: golemsvg,
        symbol: "GLM",
        marketCap: "$1.2B",
        price: "$0.56",
        priceChange1h: "+0.3%",
        priceChange24h: "-2.0%",
        volume: "$15M",
        circulatingSupply: "1.2B GNT",
        chartId: "glm-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'danger',
        priceIcon: "up",
        priceIcons: "down",
    },
    {
        rank: 4,
        name: "Dash",
        imgsrc: dashsvg,
        symbol: "DASH",
        marketCap: "$12B",
        price: "$200",
        priceChange1h: "-0.5%",
        priceChange24h: "+2.8%",
        volume: "$5B",
        circulatingSupply: "10M DASH",
        chartId: "dash-chart",
        priceChangeColor: 'danger',
        priceChange24hColor: 'success',
        priceIcon: "down",
        priceIcons: "up",
    },
    {
        rank: 5,
        name: "Litecoin",
        imgsrc: litecoinsvg,
        symbol: "LTC",
        marketCap: "$13B",
        price: "$185",
        priceChange1h: "+0.7%",
        priceChange24h: "-1.0%",
        volume: "$3B",
        circulatingSupply: "69M LTC",
        chartId: "lite-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'danger',
        priceIcon: "up",
        priceIcons: "down",
    },
    {
        rank: 6,
        name: "Ripple",
        imgsrc: ripplesvg,
        symbol: "XRP",
        marketCap: "$35B",
        price: "$1.00",
        priceChange1h: "+0.1%",
        priceChange24h: "+0.5%",
        volume: "$2B",
        circulatingSupply: "40B XRP",
        chartId: "ripple-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'success',
        priceIcon: "up",
        priceIcons: "up",
    },
    {
        rank: 7,
        name: "EOS",
        imgsrc: EOS,
        symbol: "EOS",
        marketCap: "$6.5B",
        price: "$7.00",
        priceChange1h: "-0.3%",
        priceChange24h: "+1.4%",
        volume: "$800M",
        circulatingSupply: "1B EOS",
        chartId: "eos-chart",
        priceChangeColor: 'danger',
        priceChange24hColor: 'success',
        priceIcon: "down",
        priceIcons: "up",
    },
    {
        rank: 8,
        name: "Bytecoin",
        imgsrc: Bytecoin,
        symbol: "BCN",
        marketCap: "$3.5B",
        price: "$0.03",
        priceChange1h: "+2.1%",
        priceChange24h: "+0.9%",
        volume: "$50M",
        circulatingSupply: "184B BCN",
        chartId: "bytecoin-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'success',
        priceIcon: "up",
        priceIcons: "up",
    },
    {
        rank: 9,
        name: "IOTA",
        imgsrc: IOTA,
        symbol: "IOTA",
        marketCap: "$3.2B",
        price: "$1.15",
        priceChange1h: "+0.2%",
        priceChange24h: "-0.4%",
        volume: "$100M",
        circulatingSupply: "2.7B IOTA",
        chartId: "iota-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'danger',
        priceIcon: "up",
        priceIcons: "down",
    },
    {
        rank: 10,
        name: "Monero",
        imgsrc: monerosvg,
        symbol: "XMR",
        marketCap: "$3.8B",
        price: "$200",
        priceChange1h: "-0.8%",
        priceChange24h: "-1.3%",
        volume: "$200M",
        circulatingSupply: "18M XMR",
        chartId: "monero-chart",
        priceChangeColor: 'danger',
        priceChange24hColor: 'danger',
        priceIcon: "down",
        priceIcons: "down",
    }
];

//

export const MarketData = [
    {
        imgSrc: bitcoinsvgreg,
        title: "Bitcoin - BTC",
        subtitle: "BTC / USD",
        price: "$35,876.29",
        value: "$0.04",
        percent: "(+2.33%)",
        todayPrice: "+280.30(0.96%)",
        badge: `3 Years`,
        rank: "#1",
        height: 40,
        width: 150,
        id: '#1',
        chartId: "bitcoin-chart"
    },
    {
        imgSrc: ethereumsvgreg,
        title: "Ethereum - ETH",
        subtitle: "ETH / USD",
        price: "$31,244.12",
        value: "$2.57",
        percent: "(+13.45%)",
        todayPrice: "+2,044.24(1.32%)",
        badge: "",
        rank: "#2",
        height: 40,
        width: 150,
        id: '#2',
        chartId: "etherium-chart"
    },
    {
        imgSrc: dashsvgreg,
        title: "Dash - DASH",
        subtitle: "DASH / USD",
        price: "$26,345.00",
        value: "$12.32",
        percent: "(+112.95%)",
        todayPrice: "+40.17 (1.52%)",
        badge: "",
        rank: "#105",
        height: 40,
        width: 150,
        id: '#105',
        chartId: 'dashcoin-chart'
    },
];

// types.ts


export const PortfolioData = [
    {
        imgSrc: bitcoinsvgreg,
        name: "Bitcoin",
        quantity: "0.5 BTC",
        value: "$22,500",
    },
    {
        imgSrc: litecoinsvgreg,
        name: "Litecoin",
        quantity: "20 LTC",
        value: "$4,000",
    },
    {
        imgSrc: ethereumsvgreg,
        name: "Ethereum",
        quantity: "5 ETH",
        value: "$16,000",
    },
];


