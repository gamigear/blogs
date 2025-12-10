
import bitcoin_btc_logo from '../../../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg';
import ethereum_eth_logo from '../../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg';
import solana_sol_logo from '../../../../assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg';

export const Buycards = [
    {
        title: "BTC/USD",
        count: 3.2265,
        decimals: 4,
        percent: "1.26%",
        icon: "ti ti-arrow-narrow-up me-1 lh-1 fs-16 align-middle",
        iconColor: "success fw-medium",
        cardClass: "dashboard-main-card warning",
        priceColor: '  grid-cards',
        image: bitcoin_btc_logo,
        avatarClass: 'avatar-lg'
    },
    {
        title: "ETH/USD",
        count: 32.3534,
        decimals: 4,
        percent: "3.64%",
        icon: "ti ti-arrow-narrow-down me-1 lh-1 fs-16 align-middle",
        iconColor: "danger fw-medium",
        priceColor: '  grid-cards',
        cardClass: "dashboard-main-card dark",
        image: ethereum_eth_logo,
        avatarClass: 'avatar-lg'
    },
    {
        title: "SOL/USD",
        count: 32.3534,
        decimals: 4,
        percent: "0.75%",
        priceColor: '  grid-cards',
        icon: "ti ti-arrow-narrow-up me-1 lh-1 fs-16 align-middle",
        iconColor: "success fw-medium",
        cardClass: "dashboard-main-card secondary",
        image: solana_sol_logo,
        avatarClass: 'avatar-lg'
    },
];

//Buy & Sell Statistics


export const AccountSummary = [
    {
        label: "Total Buy",
        value: "$324.25 USD",
        color: "success",
    },
    {
        label: "Total Sell",
        value: "$4,235.25 USD",
        color: "danger",
    },
    {
        label: "Available Balance",
        value: "$22,803.92 USD",
        color: "primary",
    },
    {
        label: "Total Crypto Asset Value",
        value: "$4,56,683.00 USD",
        color: "warning",
    },
];


