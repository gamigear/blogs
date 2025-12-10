import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule, FormsModule, RouterModule,NgbModule,CommonModule,SpkReusableTables],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  constructor() {}

  products = [
    {
      brand: 'Adidas',
      name: 'Adidas UltraBoost 2023',
      color: 'Green',
      size: '10 US',
      status: 'In Stock',
      price: 159.99,
      quantity: 1,
      imageUrl: './assets/images/ecommerce/jpg/1.jpg'
    },
    {
      brand: 'Puma',
      name: 'Puma RS-X Sneakers',
      color: 'Gray',
      size: '8 US',
      status: 'Limited Stock',
      price: 119.99,
      quantity: 2,
      imageUrl: './assets/images/ecommerce/jpg/2.jpg'
    },
    {
      brand: 'Reebok',
      name: 'Reebok Classic Leather',
      color: 'Blue',
      size: '11 US',
      status: 'In Stock',
      price: 89.99,
      quantity: 1,
      imageUrl: './assets/images/ecommerce/jpg/3.jpg'
    },
    {
      brand: 'Nike',
      name: 'Nike Air Max 2025 Sneakers',
      color: 'Teal',
      size: '10 US',
      status: 'In Stock',
      price: 129.99,
      quantity: 1,
      imageUrl: './assets/images/ecommerce/jpg/4.jpg'
    },
    {
      brand: 'Under Armour',
      name: 'Under Armour HOVR Phantom',
      color: 'Neon Green',
      size: '10 US',
      status: 'In Stock',
      price: 139.99,
      quantity: 2,
      imageUrl: './assets/images/ecommerce/jpg/5.jpg'
    }
  ];

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  increaseQuantity(product: any) {
    product.quantity++;
  }

  updateQuantity(event: any, product: any) {
    const newQuantity = event.target.value;
    if (!isNaN(newQuantity) && newQuantity > 0) {
      product.quantity = newQuantity;
    }
  }

  deleteProduct(product: any) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}
