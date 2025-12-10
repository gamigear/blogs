import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkMarketcapCard } from '../../../../@spk/reusable-dashboards/crypto/spk-marketcap-card/spk-marketcap-card';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';
export interface MarketData {
  imgSrc: string;
  title: string;
  subtitle: string;
  price: string;
  value: string;
  percent: string;
  chartOptions: any;
  todayPrice: string;
  badge?:  boolean;
  rank: string;
  id: string;
}
interface PortfolioItem {
  imgSrc: string;
  name: string;
  quantity: string;
  value: string;
}
interface CryptoData {
  rank: number;
  name: string;
  symbol: string;
  marketCap: string;
  price: string;
  priceChange1h: string;
  priceChange24h: string;
  volume: string;
  circulatingSupply: string;
  chartId: string;
  priceChangeColor: string;
  priceChange24hColor: string;
  chartOptions: any;
}
@Component({
  selector: 'app-marketcap',
  imports: [SharedModule,SpkMarketcapCard,SpkDropdowns,SpkApexChart,SpkReusableTables],
  templateUrl: './marketcap.html',
  styleUrl: './marketcap.scss'
})
export class Marketcap {

Options = ({ color }: any) => ({
  series : [{
    name: 'Value',
    data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
}],
    chart: {
        type: 'bar',
        height: 40,
        width: 150,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
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
        axisBorder: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "75%",
            borderRadius: 1
        }
    },
    colors: [color],
})
  MarketData: MarketData[] = [
    {
        imgSrc: "./assets/images/crypto-currencies/regular/Bitcoin.svg",
        title: "Bitcoin - BTC",
        subtitle: "BTC / USD",
        price: "$35,876.29",
        value: "$0.04",
        percent: "(+2.33%)",
        todayPrice: "+280.30(0.96%)",
        badge: true,
        rank: "#1",
        chartOptions: this.Options({ color: 'rgb(50, 212, 132)' }),
        id: '#1'
    },
    {
        imgSrc: "./assets/images/crypto-currencies/regular/Ethereum.svg",
        title: "Ethereum - ETH",
        subtitle: "ETH / USD",
        price: "$31,244.12",
        value: "$2.57",
        percent: "(+13.45%)",
        todayPrice: "+2,044.24(1.32%)",
        rank: "#2",
        chartOptions: this.Options({ color: 'rgb(50, 212, 132)' }),
        id: '#2'
    },
    {
        imgSrc: "./assets/images/crypto-currencies/regular/Dash.svg",
        title: "Dash - DASH",
        subtitle: "DASH / USD",
        price: "$26,345.000",
        value: "$12.32",
        percent: "(+112.95%)",
        todayPrice: "+40.17 (1.52%)",
        rank: "#105",
        chartOptions: this.Options({ color: 'rgb(255, 103, 87)' }),
        id: '#105'
    },
];
// types.ts

 PortfolioData: PortfolioItem[] = [
  {
      imgSrc: "./assets/images/crypto-currencies/regular/Bitcoin.svg",
      name: "Bitcoin",
      quantity: "0.5 BTC",
      value: "$22,500",
  },
  {
      imgSrc: "./assets/images/crypto-currencies/regular/litecoin.svg",
      name: "Litecoin",
      quantity: "20 LTC",
      value: "$4,000",
  },
  {
      imgSrc: "./assets/images/crypto-currencies/regular/Ethereum.svg",
      name: "Ethereum",
      quantity: "5 ETH",
      value: "$16,000",
  },
];
//
MarketOptions = ({ color }: any) => ({
  series :[
    {
        name: "Value",
        data: [
            0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
            61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
            35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
            65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
            46,
        ],
    },
],
  chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
          enabled: true,
      },
      dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.1,
      },
  },
  stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
  },
  fill: {
      gradient: {
          enabled: false,
      },
  },
   yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
    },
  },
  xaxis: {
      axisBorder: {
          show: false,
      },
  },
  tooltip: {
      enabled: false,
  },
  colors: [color],
})
MarketCapColumn=[
  { header: "" },
  { header: '#', headerClassname: 'fw-medium' },
   { header: 'Crypto Name' }, { header: 'MarketCap' },
   { header: "Price (USD)" },
    { header: '1h Change' }, { header: '24h Change' }, { header: 'Volume (24h)' }, { header: 'Circulating Supply' }, { header: 'last 1Week' }, { header: 'Trade' }
]
MartketTable: CryptoData[] = [
  {
      rank: 1,
      name: "Bitcoin",
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
      chartOptions: this.MarketOptions({ color: 'rgb(255, 103, 87)' }),

  },
  {
      rank: 2,
      name: "Ethereum",
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
      chartOptions: this.MarketOptions({ color: 'rgb(50, 212, 132)' }),

  },
  {
      rank: 3,
      name: "Golem",
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
      chartOptions: this.MarketOptions({ color: 'rgb(50, 212, 132)' }),

  },
  {
      rank: 4,
      name: "Dash",
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
      chartOptions: this.MarketOptions({ color: 'rgb(50, 212, 132)' }),

  },
  {
      rank: 5,
      name: "Litecoin",
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
      chartOptions: this.MarketOptions({ color: 'rgb(255, 103, 87)' }),

  },
  {
      rank: 6,
      name: "Ripple",
      symbol: "XRP",
      marketCap: "$35B",
      price: "$1.00",
      priceChange24h: "+0.5%",
      priceChange1h: "+0.1%",
      volume: "$2B",
      circulatingSupply: "40B XRP",
      chartId: "ripple-chart",
      priceChangeColor: 'success',
      priceChange24hColor: 'success',
      chartOptions: this.MarketOptions({ color: 'rgb(50, 212, 132)' }),
  },
  {
      rank: 7,
      name: "EOS",
      symbol: "EOS",
      marketCap: "$6.5B",
      price: "$7.00",
      priceChange24h: "+1.4%",
      priceChange1h: "-0.3%",
      volume: "$800M",
      circulatingSupply: "1B EOS",
      chartId: "eos-chart",
      priceChangeColor: 'danger',
      priceChange24hColor: 'success',
      chartOptions: this.MarketOptions({ color: 'rgb(50, 212, 132)' }),
  },
  {
      rank: 8,
      name: "Bytecoin",
      symbol: "BCN",
      marketCap: "$3.5B",
      price: "$0.03",
      priceChange24h: "+0.9%",
      priceChange1h: "+2.1%",
      volume: "$50M",
      circulatingSupply: "184B BCN",
      chartId: "bytecoin-chart",
      priceChangeColor: 'success',
      priceChange24hColor: 'success',
      chartOptions: this.MarketOptions({ color: 'rgb(255, 103, 87)' }),
  },
  {
      rank: 9,
      name: "IOTA",
      symbol: "IOTA",
      marketCap: "$3.2B",
      price: "$1.15",
      priceChange24h: "-0.4%",
      priceChange1h: "+0.2%",
      volume: "$100M",
      circulatingSupply: "2.7B IOTA",
      chartId: "iota-chart",
      priceChangeColor: 'success',
      priceChange24hColor: 'danger',
      chartOptions: this.MarketOptions({ color: 'rgb(255, 103, 87)' }),
  },
  {
      rank: 10,
      name: "Monero",
      symbol: "XMR",
      marketCap: "$3.8B",
      price: "$200",
      priceChange24h: "-1.3%",
      priceChange1h: "-0.8%",
      volume: "$200M",
      circulatingSupply: "18M XMR",
      chartId: "monero-chart",
      priceChangeColor: 'danger',
      priceChange24hColor: 'danger',
      chartOptions: this.MarketOptions({ color: 'rgb(50, 212, 132)' }),
  }
];
}
