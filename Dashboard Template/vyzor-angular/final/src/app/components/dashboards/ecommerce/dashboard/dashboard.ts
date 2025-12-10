import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { statisticsData, TopCategoriesData } from '../../../../shared/data/dashboard/dashboard_charts';
import { SpkEcommerceDashboard } from '../../../../@spk/reusable-dashboards/spk-ecommerce-dashboard/spk-ecommerce-dashboard';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';


@Component({
  selector: 'app-dashboard',
  imports: [SharedModule,SpkEcommerceDashboard,SpkReusableTables,CommonModule,SpkApexChart,SpkDropdowns],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
public statisticData = statisticsData
public TopCategoriesData = TopCategoriesData

  dashboardCards = [
    {
      title: 'Total Sales',
      value: '$43,038.00',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"></path></svg>',
      CardClass:'primary',
      colorClass: 'bg-primary-transparent svg-primary',
      description: 'Total sales for the current period',
    },
    {
      title: 'Total Expenses',
      value: '$28,346.00',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12v6a1 1 0 0 1-2 0V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6h-2zm-6-1v2H6v-2h8zM6 9V7h8v2H6zm8 6v2h-3v-2h3z"></path></svg>',
      CardClass:'secondary',
      colorClass: 'bg-secondary-transparent svg-secondary',
      description: 'Total expenses for the current period',
    },
    {
      title: 'Total Visitors',
      value: '1,29,368',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>',
      CardClass:'warning',
      colorClass: 'bg-warning-transparent svg-warning',
      description: 'Number of visitors this month',
    },
    {
      title: 'Total Orders',
      value: '35,367',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>',
      CardClass:'success',
      colorClass: 'bg-success-transparent svg-success',
      description: 'Total number of orders placed',
    }
  ];

  SellingHeader = [
    {header:'s.no'},
    {header:'Product Category'},
    {header:'Sale Value',tableHeadColumn:'text-center'},
    {header:'Total Sales',tableHeadColumn:'text-center'},
    {header:'Status'},
  ]
  products = [
    {
      id: 1,
      name: 'TaoTronics Wall Clock',
      imageUrl: './assets/images/ecommerce/png/11.png',
      price: '$699',
      stock: "1,000",
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Club Fleece Hoodie',
      imageUrl: './assets/images/ecommerce/png/12.png',
      price: '$55',
      stock: "3,100",
      status: 'In Stock',
    },
    {
      id: 3,
      name: 'SmartGizmo Pro',
      imageUrl: './assets/images/ecommerce/png/14.png',
      price: '$199',
      stock: "1,250",
      status: 'In Stock',
    },
    {
      id: 4,
      name: 'TaoTronics Cattle',
      imageUrl: './assets/images/ecommerce/png/16.png',
      price: '$699',
      stock: "1,000",
      status: 'Out Of Stock',
    },
    {
      id: 5,
      name: 'UltraMaze School Bag',
      imageUrl: './assets/images/ecommerce/png/13.png',
      price: '$89',
      stock: "2,150",
      status: 'In Stock',
    }
  ];
  RecentData = [
    {
      id: 1,
      name: 'Urban Chic Satchel',
      imageUrl: './assets/images/ecommerce/png/13.png',
      category: 'Fashion & Accessories',
      price: '$90',
    },
    {
      id: 2,
      name: 'TrailBlaze Runners',
      imageUrl: './assets/images/ecommerce/png/15.png',
      category: 'Sports & Fitness',
      price: '$60',
    },
    {
      id: 3,
      name: 'VisionTech SLR',
      imageUrl: './assets/images/ecommerce/png/19.png',
      category: 'Electronics',
      price: '$375',
    },
    {
      id: 4,
      name: 'FlexiSeat Office Chair',
      imageUrl: './assets/images/ecommerce/png/6.png',
      category: 'Furniture',
      price: '$150',
    },
    {
      id: 5,
      name: 'DecoDial Classic',
      imageUrl: './assets/images/ecommerce/png/11.png',
      category: 'Home Decor',
      price: '$35',
    }
  ];

  feedbacks = [
    {
      id: 1,
      score: '85%',
      label: 'Excellent',
      percentage: 85,
      emoji: './assets/images/faces/emojis/1.png',
      progressBarClass: 'primary'
    },
    {
      id: 2,
      score: '65%',
      label: 'Good',
      percentage: 65,
      emoji: './assets/images/faces/emojis/2.png',
      progressBarClass: 'success'
    },
    {
      id: 3,
      score: '64%',
      label: 'Neutral',
      percentage: 64,
      emoji: './assets/images/faces/emojis/3.png',
      progressBarClass: 'info'
    },
    {
      id: 4,
      score: '44%',
      label: 'Unsatisfied',
      percentage: 44,
      emoji: './assets/images/faces/emojis/4.png',
      progressBarClass: 'warning'
    },
    {
      id: 5,
      score: '35%',
      label: 'Very Unsatisfied',
      percentage: 35,
      emoji: './assets/images/faces/emojis/5.png',
      progressBarClass: 'orange'
    },
    {
      id: 6,
      score: '24%',
      label: 'Poor',
      percentage: 24,
      emoji: './assets/images/faces/emojis/6.png',
      progressBarClass: 'danger'
    }
  ];

  transactions = [
    {
      id: 1,
      name: 'John Doe',
      imageUrl: './assets/images/faces/11.jpg',
      paymentMethod: 'Credit Card',
      amount: '$120.50',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Jane Smith',
      imageUrl: './assets/images/faces/2.jpg',
      paymentMethod: 'PayPal',
      amount: '$45.00',
      status: 'Pending'
    },
    {
      id: 3,
      name: 'Robert Brown',
      imageUrl: './assets/images/faces/12.jpg',
      paymentMethod: 'Debit Card',
      amount: '$75.75',
      status: 'Failed'
    },
    {
      id: 4,
      name: 'Emma Williams',
      imageUrl: './assets/images/faces/3.jpg',
      paymentMethod: 'Credit Card',
      amount: '$220.00',
      status: 'Completed'
    },
    {
      id: 5,
      name: 'Michael Johnson',
      imageUrl: './assets/images/faces/10.jpg',
      paymentMethod: 'PayPal',
      amount: '$89.99',
      status: 'Completed'
    },
    {
      id: 6,
      name: 'Sarah Jones',
      imageUrl: './assets/images/faces/7.jpg',
      paymentMethod: 'Credit Card',
      amount: '$129.99',
      status: 'Pending'
    }
  ];
  TransactionsHeader = [
   {header:'Order ID'},
   {header:'Customer'},
   {header:'Product'},
   {header:'Quantity',tableHeadColumn:'text-center'},
   {header:'Total Amount'},
   {header:'Payment Method'},
   {header:'Date'},
   {header:'Status'},
   {header:'Action'},
  ]
  transactionsData = [
    {
      orderId: '$SPK15432',
      customerName: 'John Doe',
      productName: 'Urban Chic Ladies Bag',
      quantity: 2,
      price: '$150.00',
      paymentMethod: 'Credit Card',
      date: '2025-02-10',
      status: 'Completed',
      avatar: './assets/images/ecommerce/png/13.png',
    },
    {
      orderId: '$SPK15433',
      customerName: 'Jane Smith',
      productName: 'TrailBlaze Runners',
      quantity: 1,
      price: '$230.75',
      paymentMethod: 'PayPal',
      date: '2025-02-11',
      status: 'Pending',
      avatar: './assets/images/ecommerce/png/15.png',
    },
    {
      orderId: '$SPK15434',
      customerName: 'Michael Green',
      productName: 'VisionTech SLR',
      quantity: 3,
      price: '$95.50',
      paymentMethod: 'Debit Card',
      date: '2025-02-12',
      status: 'Failed',
      avatar: './assets/images/ecommerce/png/19.png',
    },
    {
      orderId: '$SPK15435',
      customerName: 'Sarah Johnson',
      productName: 'FlexiSeat Sofa Chair',
      quantity: 1,
      price: '$112.00',
      paymentMethod: 'Credit Card',
      date: '2025-02-13',
      status: 'Completed',
      avatar: './assets/images/ecommerce/png/6.png',
    },
    {
      orderId: '$SPK15436',
      customerName: 'William Brown',
      productName: 'DecoDial Classic',
      quantity: 5,
      price: '$60.25',
      paymentMethod: 'Credit Card',
      date: '2025-02-14',
      status: 'Pending',
      avatar: './assets/images/ecommerce/png/11.png',
    },
    {
      orderId: '$SPK15437',
      customerName: 'Emma White',
      productName: 'Club Fleece Hoodie',
      quantity: 2,
      price: '$145.80',
      paymentMethod: 'PayPal',
      date: '2025-02-14',
      status: 'Completed',
      avatar: './assets/images/ecommerce/png/12.png',
    },
  ];
}
