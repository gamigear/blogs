import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { SpkListCard } from '../../../../@spk/reusable-apps/spk-list-card/spk-list-card';

interface CryptoItem {
  label: string;
  value: number;
}
  //Buy & Sell Statistics
   interface AccountSummaryItem {
    label: string;
    value: string;
    color: "success" | "danger" | "primary" | "warning";
  }
  interface DashboardCardType {
    title: string;
    count: string;
    percent: string;
    headingClass: string;
    textClass: string;
    icon: string;
    bodyClass:string;
    iconColor: "success" | "danger";
    cardClass: string;
    svgIcon: string;
}
@Component({
  selector: 'app-buy-sell',
  imports: [SharedModule,SpkApexChart,SpkNgSelect,SpkListCard,NgbModule],
  templateUrl: './buy-sell.html',
  styleUrl: './buy-sell.scss'
})
export class BuySell {
  //Buy & Sell Statistics
 AccountSummary: AccountSummaryItem[] = [
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
    value: "$456,683.00 USD",
    color: "warning",
  },
];
  Selloptions = {
    series :[{
      name: "Buy",
      data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
  }, {
      name: "Sell",
      data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
  }],
    chart: {
        height: 370,
        type: 'bar',
        zoom: {
            enabled: false
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "50%",
            borderRadius: 2
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        markers: {
            size: 4,
            strokeWidth: 0,
        },
    },
    stroke: {
        curve: 'smooth',
        width: ["2", "2"],
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    colors: ["var(--primary-color)", "rgba(255, 73, 205, 1)"],
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
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

 SellCrypto: CryptoItem[] = [
  { label: 'BTC', value: 1 },
  { label: 'ETH', value: 2 },
  { label: 'XRP', value: 3 },
  { label: 'DASH', value: 4 },
  { label: 'NEO', value: 5 },
  { label: 'LTC', value: 6 },
  { label: 'BSD', value: 7 },
]

 SellCrypto1: CryptoItem[] = [
  { label: 'USD', value: 1 },
  { label: 'AED', value: 2 },
  { label: 'AUD', value: 3 },
  { label: 'ARS', value: 4 },
  { label: 'AZN', value: 5 },
  { label: 'BGN', value: 6 },
  { label: 'BRL', value: 7 },
]
Buycards: DashboardCardType[] = [
  {
      title: "BTC/USD",
      count: "3.2265",
      percent: "1.26%",
      headingClass: "h5",
      textClass: "fs-13",
      bodyClass:"p-4",
      icon: "ti ti-arrow-narrow-up me-1 lh-1 fs-16 align-middle",
      iconColor: "success",
      cardClass: "dashboard-main-card buySell-crypto-main warning",
      svgIcon: '<img src="./assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg" alt="">',
  },
  {
      title: "ETH/USD",
      count: "32.3534",
      percent: "3.64%",
      headingClass: "h5",
      textClass: "fs-13",
      bodyClass:"p-4",
      icon: "ti ti-arrow-narrow-down me-1 lh-1 fs-16 align-middle",
      iconColor: "danger",
      cardClass: "dashboard-main-card buySell-crypto-main dark",
      svgIcon: '<img src="./assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="">',
  },
  {
      title: "SOL/USD",
      count: "32.3534",
      bodyClass:"p-4",
      percent: "0.75%",
      headingClass: "h5",
      textClass: "fs-13",
      icon: "ti ti-arrow-narrow-up me-1 lh-1 fs-16 align-middle",
      iconColor: "success",
      cardClass: "dashboard-main-card buySell-crypto-main secondary",
      svgIcon:'<img src="./assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg" alt="">',
  },
];
handleSelectChange(value: any | any[]) {
}
}
