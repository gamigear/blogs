import bitcoin_btc_logo from '../../../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg';
import ethereum_eth_logo from '../../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg';
import tether_usdt_logo from '../../../../assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg';
import binance_usd_busd_logo from '../../../../assets/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg';
import xrp_xrp_logo from '../../../../assets/images/crypto-currencies/crypto-icons/xrp-xrp-logo.svg';
import solana_sol_logo from '../../../../assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg';
import dogecoin_doge_logo from '../../../../assets/images/crypto-currencies/crypto-icons/dogecoin-doge-logo.svg';
import cardano_ada_logo from '../../../../assets/images/crypto-currencies/crypto-icons/cardano-ada-logo.svg';

import face4 from '../../../../assets/images/faces/4.jpg';
import face5 from '../../../../assets/images/faces/5.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face14 from '../../../../assets/images/faces/14.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face15 from '../../../../assets/images/faces/15.jpg';



export const CryptoCards = [
    {
        imgSrc: bitcoin_btc_logo,
        value: "21.235-BTC",
        percent: "4.21%",
        iconColor: "success",
        icon: "ti ti-trending-up",
        id: "btc-chart",
    },
    {
        imgSrc: ethereum_eth_logo,
        value: "164.75-ETH",
        percent: "2.21%",
        iconColor: "danger",
        icon: "ti ti-trending-down",
        id: "eth-chart",
    },
    {
        imgSrc: tether_usdt_logo,
        value: "31,421-USDT",
        percent: "12.43%",
        iconColor: "success",
        icon: "ti ti-trending-up",
        id: "tether-chart",
    },
    {
        imgSrc: binance_usd_busd_logo,
        value: "4,224-BNB",
        percent: "15.54%",
        iconColor: "danger",
        icon: "ti ti-trending-down",
        id: "bnb-chart",
    },
];



// Transactions History

export const Transactions = [
  {
    icon: bitcoin_btc_logo,
    title: "Deposit",
    date: "2025-02-10 14:30",
    amount: "0.25 BTC",
    status: "Completed",
  },
  {
    icon: ethereum_eth_logo,
    title: "Withdrawal",
    date: "2025-02-11 10:00",
    amount: "500 ETH",
    status: "Pending",
  },
  {
    icon: solana_sol_logo,
    title: "Transfer",
    date: "2025-02-12 16:45",
    amount: "2,000 XRP",
    status: "Completed",
    imageClass:'custom-bitcoin'
  },
  {
    icon: bitcoin_btc_logo,
    title: "Deposit",
    date: "2025-02-13 09:30",
    amount: "1.5 BTC",
    status: "Failed",
  },
  {
    icon: tether_usdt_logo,
    title: "Withdrawal",
    date: "2025-02-14 13:20",
    amount: "1500 USDT",
    status: "Completed",
  },
  {
    icon: bitcoin_btc_logo,
    title: "Deposit",
    date: "2025-02-14 17:05",
    amount: "5.0 BTC",
    status: "Pending",
  },
];

//Recent Activity

export const TransactionActivities = [
  {
    avatar: face4,
    name: "Emiley Jackson",
    currency: "Bitcoin",
    amount: "0.12",
    date: "2025-02-10",
    time: "04:24PM",
    status: "Sent",
  },
  {
    avatar: face15,
    name: "Jackie Shraff",
    currency: "Etherium",
    amount: "9.20",
    date: "2025-02-11",
    time: "11:57PM",
    status: "Received",
  },
  {
    avatar:face11,
    name: "Json Taylor",
    currency: "Dash",
    amount: "830.9",
    date: "2025-02-12",
    time: "02:28AM",
    status: "Received",
  },
  {
    avatar: face5,
    name: "Jessica May",
    currency: "Euro",
    amount: "11.23",
    date: "2025-02-13",
    time: "10:08AM",
    status: "Processing",
  },
  {
    avatar: face14,
    name: "Leo Phillip",
    currency: "Bitcoin",
    amount: "0.56",
    date: "2025-02-12",
    time: "02:34PM",
    status: "Sent",
  },
  {
    avatar: face12,
    name: "Lieonel Marsi",
    currency: "Litecoin",
    amount: "125.65",
    date: "2025-02-14",
    time: "06:05PM",
    status: "Received",
  },
];

//Coin Price Statistics

export const CryptoStats = [
  {
    label: "Bitcoin value in USD",
    value: "$97,133.00",
    valueColor: "text-dark",
  },
  {
    label: "Price Change",
    value: "+883.00(0.91%) today",
    valueColor: "text-success",
    badge: {
      text: "Increased",
      className: "bg-primary-transparent text-primary",
    },
  },
  {
    label: "Trade Value",
    value: "$34.64 billion",
    valueColor: "text-dark",
  },
  {
    label: "Market Rank",
    value: "#1",
    valueColor: "text-dark",
    badge: {
      text: "3 Years",
      className: "bg-secondary-transparent",
    },
  },
  {
    label: "This Week High",
    value: "$97,253.24",
    valueColor: "text-success",
  },
  {
    label: "This Week Low",
    value: "$95,220.00",
    valueColor: "text-danger",
  },
  {
    label: "Market Dominance",
    value: "70%",
    valueColor: "text-dark",
  },
  {
    label: "Alltime High",
    value: "$109,358.01",
    valueColor: "text-info",
  },
];



//Portfolio Overview

export const CryptoTableRows = [
  {
    name: "Bitcoin (BTC)",
    image: bitcoin_btc_logo,
    quantity: "2.5",
    price: "$29,472.60",
    totalValue: "$73,681.50",
    change: "+1.2%",
    changeColor: "bg-success",
    profitLoss: "+$5,800.00",
    marketCap: "$6.5 Billion",
    rank: "#1",
  },
  {
    name: "Ethereum (ETH)",
    image: ethereum_eth_logo,
    quantity: "15",
    price: "$1,842.30",
    totalValue: "$27,634.50",
    change: "+0.9%",
    changeColor: "bg-success",
    profitLoss: "+$2,000.00",
    marketCap: "$2.2 Billion",
    rank: "#2",
  },
  {
    name: "Dogecoin (DOGE)",
    image: dogecoin_doge_logo,
    quantity: "100,000",
    price: "$0.075",
    totalValue: "$7,500.00",
    change: "+4.5%",
    changeColor: "bg-success",
    profitLoss: "+$320.00",
    marketCap: "$1.8 Billion",
    rank: "#9",
  },
  {
    name: "Tether (USDT)",
    image: tether_usdt_logo,
    quantity: "10,000",
    price: "$1.00",
    totalValue: "$10,000.00",
    change: "0.0%",
    changeColor: "bg-success",
    profitLoss: "$0.00",
    marketCap: "$25 Billion",
    rank: "#3",
  },
  {
    name: "Ripple (XRP)",
    image: xrp_xrp_logo,
    quantity: "5,000",
    price: "$0.75",
    totalValue: "$3,750.00",
    change: "+2.5%",
    changeColor: "bg-success",
    profitLoss: "+$500.00",
    marketCap: "$1.5 Billion",
    rank: "#6",
  },
  {
    name: "Cardano (ADA)",
    image: cardano_ada_logo,
    quantity: "10,000",
    price: "$0.35",
    totalValue: "$3,500.00",
    change: "-0.8%",
    changeColor: "bg-danger",
    profitLoss: "-$100.00",
    marketCap: "$350 Million",
    rank: "#8",
  },
];



