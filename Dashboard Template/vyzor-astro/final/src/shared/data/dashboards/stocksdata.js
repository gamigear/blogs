
import apple from '../../../assets/images/media/apps/apple.png';
import google from '../../../assets/images/media/apps/google.png';
import microsoft from '../../../assets/images/media/apps/microsoft.png';
import amazon from '../../../assets/images/media/apps/amazon.png';
import tesla from '../../../assets/images/media/apps/tesla.png';
import meta from '../../../assets/images/media/apps/meta.png';
import nvidia from '../../../assets/images/media/apps/nvidia.png';
import alibaba from '../../../assets/images/media/apps/alibaba.png';


export const StockData = [
    {
        id: "apple",
        imgSrc: apple,
        title: "Apple",
        subtitle: "AAPL",
        percent: "+1.50",
        percentColor: "success",
        value: "244.60 USD",
        chartId: "apple-stock-chart",
    },
    {
        id: "google",
        imgSrc: google,
        title: "Alphabet",
        subtitle: "GOOGL",
        percent: "-5.25",
        percentColor: "danger",
        value: "185.23 USD",
        chartId: "alphabet-stock-chart",
    },
    {
        id: "microsoft",
        imgSrc: microsoft,
        title: "Microsoft Corp",
        subtitle: "MSFT",
        percent: "+2.30%",
        percentColor: "success",
        value: "408.43 USD",
        chartId: "microsoft-stock-chart",
    },
    {
        id: "amazon",
        imgSrc: amazon,
        title: "Amazon.com Inc",
        subtitle: "AMZN",
        percent: "-10.50%",
        percentColor: "danger",
        value: "228.68 USD",
        chartId: "amazon-stock-chart",
    },
    {
        id: "tesla",
        imgSrc: tesla,
        title: "Tesla Inc",
        subtitle: "TSLA",
        percent: "+8.00%",
        percentColor: "success",
        value: "355.84 USD",
        chartId: "tesla-stock-chart",
    },
    {
        id: "meta",
        imgSrc: meta,
        title: "Meta Platforms Inc.",
        subtitle: "META",
        percent: "-3.20%",
        percentColor: "danger",
        value: "736.67 USD",
        chartId: "meta-stock-chart",
    },
    {
        id: "nvidia",
        imgSrc: nvidia,
        title: "NVIDIA Corporation",
        subtitle: "NVDA",
        percent: "+5.75%",
        percentColor: "success",
        value: "138.85 USD",
        chartId: "nvidia-stock-chart",
    }
];


//  My Watchlist

export const Watchlistdata = [
    {
        id: "apple",
        name: "Apple Inc",
        symbol: "AAPL",
        price: "$189.32",
        change: "-0.78%",
        changeType: "danger",
        image: apple
    },
    {
        id: "tesla",
        name: "Tesla Inc",
        symbol: "TSLA",
        price: "$342.15",
        change: "+1.45%",
        changeType: "success",
        image: tesla
    },
    {
        id: "microsoft",
        name: "Microsoft Corp",
        symbol: "MSFT",
        price: "$408.97",
        change: "+0.62%",
        changeType: "success",
        image: microsoft
    },
    {
        id: "amazon",
        name: "Amazon.com Inc",
        symbol: "AMZN",
        price: "$156.48",
        change: "-0.23%",
        changeType: "danger",
        image: amazon
    },
    {
        id: "nvidia",
        name: "NVIDIA Corp",
        symbol: "NVDA",
        price: "$732.20",
        change: "+2.14%",
        changeType: "success",
        image: nvidia
    },
    {
        id: "meta",
        name: "Meta Platforms Inc",
        symbol: "META",
        price: "$678.56",
        change: "-1.35%",
        changeType: "danger",
        image: meta
    },
    {
        id: "google",
        name: "Alphabet Inc",
        symbol: "GOOGL",
        price: "$138.75",
        change: "+0.89%",
        changeType: "success",
        image: google
    },
    {
        id: "alibaba",
        name: "Alibaba Group",
        symbol: "BABA",
        price: "$104.23",
        change: "-0.47%",
        changeType: "danger",
        image: alibaba
    }
];

//Trending Stocks 


export const Trendingdata = [
    {
        id: "apple",
        name: "Apple",
        icon: "bi-apple",
        iconColor: "text-muted",
        value: "$12,289.44",
        percentChange: "0.14%",
        amountChange: "+$1,780.80"
    },
    {
        id: "bitcoin",
        name: "Bitcoin",
        icon: "bi-currency-bitcoin",
        iconColor: "text-warning",
        value: "$58,151.02",
        percentChange: "2.14%",
        amountChange: "+$5,745.62"
    },
    {
        id: "tesla",
        name: "Tesla",
        icon: "bi-card-list",
        iconColor: "text-success",
        value: "$14,452.36",
        percentChange: "4.02%",
        amountChange: "+$4,125.63"
    },
    {
        id: "amazon",
        name: "Amazon",
        icon: "bi-gift",
        iconColor: "text-primary",
        value: "$63,251.11",
        percentChange: "5.14%",
        amountChange: "+$936.30"
    },
    {
        id: "aliexpress",
        name: "Aliexpress",
        icon: "bi-truck",
        iconColor: "text-danger",
        value: "$5,401.50",
        percentChange: "3.32%",
        amountChange: "+$4,360.65"
    },
    {
        id: "samsung",
        name: "Samsung",
        icon: "bi-phone",
        iconColor: "text-secondary",
        value: "$10,732.12",
        percentChange: "1.24%",
        amountChange: "+$3,221.29"
    }
];

// Recent Activities


export const Recentstocks = [
    {
        id: "apple",
        name: "Apple Inc",
        symbol: "AAPL",
        logo: apple,
        valueChange: "+$5,000",
        progressBarWidth: "85",
        progressColor: 'primary'
    },
    {
        id: "microsoft",
        name: "Microsoft Corp",
        symbol: "MSFT",
        logo: microsoft,
        valueChange: "+$11,246",
        progressBarWidth: "80",
        progressColor: 'secondary'
    },
    {
        id: "nvidia",
        name: "NVIDIA Corp",
        symbol: "NVDA",
        logo: nvidia,
        valueChange: "+$1,566",
        progressBarWidth: "50",
        progressColor: 'success'
    },
    {
        id: "amazon",
        name: "Amazon.com Inc",
        symbol: "AMZN",
        logo: amazon,
        valueChange: "$23,855",
        progressBarWidth: "60",
        progressColor: 'warning'
    },
    {
        id: "google",
        name: "Alphabet Inc",
        symbol: "GOOGL",
        logo: google,
        valueChange: "+$6,274",
        progressBarWidth: "70",
        progressColor: 'info'
    },
    {
        id: "tesla",
        name: "Tesla Inc",
        symbol: "TSLA",
        logo: tesla,
        valueChange: "+$8,643",
        progressBarWidth: "50",
        progressColor: 'danger'
    },
];

// My Stocks


export const StockTable = [
    {
        id: 1,
        name: "Apple Inc",
        symbol: "AAPL",
        price: "$244.60",
        date: "Jan 15, 2025",
        marketCap: "2.5 Trillion USD",
        change: "+3.51%",
        volume: "18.5M",
        logo: apple
    },
    {
        id: 2,
        name: "NVIDIA Corp",
        symbol: "NVDA",
        price: "$138.85",
        date: "Feb 10, 2025",
        marketCap: "1.1 Trillion USD",
        change: "-3.51%",
        volume: "20.2M",
        logo: nvidia
    },
    {
        id: 3,
        name: "Amazon.com Inc",
        symbol: "AMZN",
        price: "$228.68",
        date: "Nov 5, 2024",
        marketCap: "1.7 Trillion USD",
        change: "+0.72%",
        volume: "30.3M",
        logo: amazon
    },
    {
        id: 4,
        name: "Microsoft Corp",
        symbol: "MSFT",
        price: "$408.43",
        date: "Aug 20, 2024",
        marketCap: "3.0 Trillion USD",
        change: "-1.11%",
        volume: "25.6M",
        logo: microsoft
    },
    {
        id: 5,
        name: "Alphabet Inc",
        symbol: "GOOGL",
        price: "$185.23",
        date: "Dec 3, 2024",
        marketCap: "1.8 Trillion USD",
        change: "+0.96%",
        volume: "15.7M",
        logo: google
    },
    {
        id: 6,
        name: "Tesla Inc",
        symbol: "TSLA",
        price: "$355.84",
        date: "Jan 10, 2025",
        marketCap: "710 Billion USD",
        change: "-0.06%",
        volume: "22.4M",
        logo: tesla
    },
];