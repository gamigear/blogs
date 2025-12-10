import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';
  //Order Activity
  type OrderStatus = {
    title: string;
    description: string;
    date: string;
    time: string;
    isVisible: boolean;
  };
  type Product = {
    id: string;
    brand: string;
    name: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    imageUrl: string;
  };
@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [SharedModule,SpkReusableTables],
  templateUrl: './order-details.html',
  styleUrl: './order-details.scss'
})
export class OrderDetails {
  OrderdetailsColumn=[
    { header: 'Product' },
    { header: 'SKU' },
    { header: 'Quantity', tableHeadColumn: 'text-center' },
    { header: 'Price Per Unit' },
    { header: 'Total', tableHeadColumn: 'text-end' }
  ]

 DetailsTable: Product[] = [
      {
        id: 'ADI-UB-2023',
        brand: 'Adidas',
        name: 'Adidas UltraBoost 2023',
        color: 'Green',
        size: '10 US',
        price: 159.99,
        quantity: 1,
        imageUrl: './assets/images/ecommerce/jpg/1.jpg',
      },
      {
        id: 'NIKE-AMX-2025',
        brand: 'Nike',
        name: 'Nike Air Max 2025 Sneakers',
        color: 'Teal',
        size: '10 US',
        price: 129.99,
        quantity: 2,
        imageUrl: './assets/images/ecommerce/jpg/4.jpg',
      },
  ];

  //Order Activity
 OrderTimeline: OrderStatus[] = [
      {
        title: 'Order Placed',
        description: 'Order successfully placed and awaiting processing.',
        date: 'March 15, 2025',
        time: '10:30 AM',
        isVisible: true,
      },
      {
        title: 'Payment Confirmed',
        description: 'Payment successfully processed via Visa Card.',
        date: 'March 15, 2025',
        time: '11:15 AM',
        isVisible: true,
      },
      {
        title: 'Order Processed',
        description: 'The order has been processed and is ready for packing.',
        date: 'March 15, 2025',
        time: '12:00 PM',
        isVisible: true,
      },
      {
        title: 'Shipped',
        description: 'Order dispatched from the warehouse and handed over to the carrier.',
        date: 'March 16, 2025',
        time: '8:00 AM',
        isVisible: true,
      },
      {
        title: 'Out for Delivery',
        description: 'The package is on its way to the delivery address.',
        date: 'March 17, 2025',
        time: '9:00 AM',
        isVisible: false,
      },
      {
        title: 'Delivered',
        description: 'The order was successfully delivered to the customer’s address.',
        date: 'March 17, 2025',
        time: '3:45 PM',
        isVisible: false,
      },
  ];






}
