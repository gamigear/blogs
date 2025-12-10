import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-pos-system',
  standalone: true,
  imports: [SharedModule,NgbModule,CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './pos-system.html',
  styleUrl: './pos-system.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PosSystem {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;

		Object.assign(swiperEl, {
		  slidesPerView: 4,
		  spaceBetween: 30,
		  breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1800: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
	  });
	}
  orders = [
    {
      orderNumber: '#SPK12',
      customerName: 'Jhon Doe',
      itemsCount: "2 Items",
      timeAgo: '12 Mins ago',
      status: 'Completed',
      statusClass: 'bg-primary',
      avatar: './assets/images/faces/1.jpg'
    },
    {
      orderNumber: '#SPK13',
      customerName: 'Alex Turner',
      itemsCount: "3 Items",
      timeAgo: '15 Mins ago',
      status: 'Processing',
      statusClass: 'bg-secondary',
      avatar: './assets/images/faces/2.jpg'
    },
    {
      orderNumber: '#SPK14',
      customerName: 'Rachel Adams',
      itemsCount: "1 Item",
      timeAgo: '4 Mins ago',
      status: 'Ready for Pickup',
      statusClass: 'bg-warning',
      avatar: './assets/images/faces/3.jpg'
    },
    {
      orderNumber: '#SPK15',
      customerName: 'James Hawkins',
      itemsCount: "1 Item",
      timeAgo: '18 Mins ago',
      status: 'Out for Delivery',
      statusClass: 'bg-success',
      avatar: './assets/images/faces/4.jpg'
    },
    {
      orderNumber: '#SPK16',
      customerName: 'Olivia Reed',
      itemsCount:" 4 Items",
      timeAgo: '2 Hrs ago',
      status: 'Cancelled',
      statusClass: 'bg-danger',
      avatar: './assets/images/faces/5.jpg'
    },
    {
      orderNumber: '#SPK17',
      customerName: 'Michael Harris',
      itemsCount: "5 Items",
      timeAgo: '8 Mins ago',
      status: 'Pending',
      statusClass: 'bg-info',
      avatar: './assets/images/faces/6.jpg'
    },
    {
      orderNumber: '#SPK18',
      customerName: 'Sophia Miller',
      itemsCount: "1 Item",
      timeAgo: '10 Mins ago',
      status: 'Processing',
      statusClass: 'bg-pink',
      avatar: './assets/images/faces/7.jpg'
    }
  ];

  categories = [
    { name: 'All', class: '*',image: './assets/images/pos-system/20.png' ,activecolor:"nft-tag-primary"},
    { name: 'Appetizers', class: '.Appetizers' ,image: './assets/images/pos-system/1.png',activecolor:"nft-tag-secondary" },
    { name: 'Main Course', class: '.Main-Course',image: './assets/images/pos-system/2.png' ,activecolor:"nft-tag-info"},
    { name: 'Beverages', class: '.Beverages',image: './assets/images/pos-system/3.png',activecolor:"nft-tag-success" },
    { name: 'Desserts', class: '.Desserts',image: './assets/images/pos-system/4.png' ,activecolor:"nft-tag-danger"},
    { name: 'Soups', class: '.Soups',image: './assets/images/pos-system/6.png' ,activecolor:"nft-tag-warning"},
    { name: 'Salads', class: '.Salads' ,image: './assets/images/pos-system/5.png',activecolor:"nft-tag-purple"}
  ];

  // Data for cards
  cards = [
    { category: 'Soups', name: 'Velvety Tomato Soup', price: 14.99, oldPrice: 24.99, image: './assets/images/pos-system/16.png' },
    { category: 'Salads', name: 'Crispy Garden Medley', price: 8.49, oldPrice: 18.49, image: './assets/images/pos-system/17.png' },
    { category: 'Desserts', name: 'Frosty Dream Parfait', price: 6.99, oldPrice: 12.99, image: './assets/images/pos-system/19.png' },
    { category: 'Salads', name: 'Zesty Caesar', price: 6.99, oldPrice: 14.99, image: './assets/images/pos-system/18.png' },
    { category: 'Beverages', name: 'Citrus Breeze', price: 4.99, oldPrice: 6.99, image: './assets/images/pos-system/11.png' },
    { category: 'Soups', name: 'Creamy Corn Bisque', price: 5.49, oldPrice: 12.49, image: './assets/images/pos-system/15.png' },
    { category: 'Appetizers', name: 'Cheddar Poppers', price: 7.29, oldPrice: 14.99, image: './assets/images/pos-system/8.png' },
    { category: 'Desserts', name: 'Sugar Rush Pie', price: 5.99, oldPrice: 11.99, image: './assets/images/pos-system/13.png' },
    { category: 'Main-Course', name: 'Classic Prans Parmesan', price: 14.99, oldPrice: 24.99, image: './assets/images/pos-system/10.png' },
    { category: 'Desserts', name: 'Sugar Rush Pie', price: 5.99, oldPrice: 11.99, image: './assets/images/pos-system/14.png' },
    { category: 'Appetizers', name: 'Golden Crisps', price: 5.99, oldPrice: 7.99, image: './assets/images/pos-system/7.png' },
    { category: 'Main-Course', name: 'GrillMaster Steak', price: 18.99, oldPrice: 27.99, image: './assets/images/pos-system/9.png' }
  ];
  selectCategory(categoryName: string): void {
    this.selectedCategory = categoryName; // Set the clicked category as active
  }
  // Currently selected category
  selectedCategory = '*';

  // Filter by category
  filterCategory(category: string) {
    this.selectedCategory = category;
  }

  products = [
    {
      name: 'Frosty Dream Parfait',
      price: 6.99,
      oldPrice: 24.99,
      image: '13.png',
      quantity: 1
    },
    {
      name: 'Zesty Caesar',
      price: 6.99,
      oldPrice: 18.49,
      image: '18.png',
      quantity: 1
    },
    {
      name: 'GrillMaster Steak',
      price: 18.99,
      oldPrice: 27.99,
      image: '9.png',
      quantity: 1
    },
    {
      name: 'Berry Fusion',
      price: 4.99,
      oldPrice: 12.99,
      image: '12.png',
      quantity: 1
    }
  ];

  // Increase quantity function
  increaseQuantity(product: any) {
    product.quantity++;
  }

  // Decrease quantity function
  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  // Remove product function
  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}
