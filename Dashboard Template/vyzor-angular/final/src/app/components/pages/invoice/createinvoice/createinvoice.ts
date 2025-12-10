import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { SpkFlatpickr } from '../../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SpkFilepond } from '../../../../@spk/spk-reusable-plugins/spk-filepond/spk-filepond';
@Component({
  selector: 'app-createinvoice',
  standalone: true,
  imports: [SharedModule, NgSelectModule, FormsModule,
    ReactiveFormsModule, FlatpickrModule, SpkFilepond, SpkNgSelect, SpkFlatpickr, SpkReusableTables],
  providers:[FlatpickrDefaults],
  templateUrl: './createinvoice.html',
  styleUrl: './createinvoice.scss'
})
export class Createinvoice {
  quantity: number = 1;
  product: number = 1;
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  increase() {
    this.product++;
  }

  decrease() {
    if (this.product >0) {
      this.product--;
    }
  }
  createinvoiceColumns=[
    {header:"Product Name",field:"Product Name"},
    {header:"Description",field:"Description"},
    {header:"Quantity",field:"Quantity"},
    {header:"Price Per Unit",field:"Price Per Unit"},
    {header:"Total",field:"Total"},
    {header:"Action",field:"Action"},
  ]
  Currency=[
    {label:"Select Currency",value:1},
    {label:"USD - (United States Dollar)",value:2},
    {label:"BHD - (Bahraini Dinar)",value:3},
    {label:"KWD - (Kuwaiti Dinar)",value:4},
    {label:"CHF - (Swiss Franc)",value:5},
  ]
  Credit=[
    {label:"Credit/Debit Card",value:1},
    {label:"PayPal",value:2},
    {label:"Stripe",value:3},
    {label:"Apple Pay",value:4},
    {label:"UPI",value:5},
  ]
  Creditvalue=[1]
}
