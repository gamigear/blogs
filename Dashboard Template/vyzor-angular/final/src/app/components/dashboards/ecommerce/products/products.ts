import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { API, APIDefinition, Columns, Config, DefaultConfig, TableModule } from 'ngx-easy-table';

import { data } from '../../../../shared/data/tables_data/product_data';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkProductsCard } from '../../../../@spk/reusable-dashboards/spk-products-card/spk-products-card';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule, RouterModule, SpkProductsCard, FormsModule, TableModule, SpkDropdowns, SpkNgSelect],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products  {

 

  public configuration!: Config;
    public columns!: Columns[];
    public data: any[] = [];
    public selected = new Set();
    allSelected = false;
    ngOnInit(): void {
      this.configuration = { ...DefaultConfig };
      this.configuration.checkboxes = true;
      this.columns = [
        { key: 'Id', title: 'Product ID' },
        { key: 'productName', title: 'Product Name' ,},
        { key: 'price', title: 'Price', },
        { key: 'Stock', title: 'Stock Status', },
        { key: 'Quantity', title: 'Quantity', },
        { key: 'status', title: 'Status', },
        { key: 'Date', title: 'Date Added' },
        { key: 'Actions', title: 'Actions', },

      ];
      this.data = data;
    }
    tableEventEmitted(event: { event: string; value: any }): void {
      if (event.event === 'onSelectAll') {
        this.data.forEach((row: any) => (row.selected = event.value));
      }
    }

    rowSelected(): void {
      this.allSelected = this.data.every((row) => !!row.selected);
    }
    @ViewChild('table') table!: APIDefinition;
    public TableWithSearchColumns!: Columns[];
    onTableWithSearchChange(event: Event): void {
      this.table.apiEvent({
        type: API.onGlobalSearch,
        value: (event.target as HTMLInputElement).value,
      });
    }
  cards = [
    {
      cardTitle: 'Total Products',
      cardValue: '12,350',
      cardPercentage: '+15%',
      cardPercentageColor: 'bg-success',
      cardIcon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"></path></svg>
      `,
      cardIconColor: 'primary',
      cardBgColor: 'primary',
      cardSubtitle: 'this month',
    },
    {
      cardTitle: 'Products in Stock',
      cardValue: '7,890',
      cardPercentage: '+10%',
      cardPercentageColor: 'bg-success',
      cardIcon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z"></path></svg>
      `,
      cardIconColor: 'success',
      cardBgColor: 'success',
      cardSubtitle: 'this month',
    },
    {
      cardTitle: 'Out of Stock Products',
      cardValue: '2,430',
      cardPercentage: '-8%',
      cardPercentageColor: 'bg-danger',
      cardIcon: `
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
      `,
      cardIconColor: 'warning',
      cardBgColor: 'warning',
      cardSubtitle: 'this month',
    },
    {
      cardTitle: 'Recently Added',
      cardValue: '550',
      cardPercentage: '+30%',
      cardPercentageColor: 'bg-success',
      cardIcon: `
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg>
      `,
      cardIconColor: 'secondary',
      cardBgColor: 'secondary',
      cardSubtitle: 'this month',
    },
    {
      cardTitle: 'Total Revenue',
      cardValue: '$1,250,450',
      cardPercentage: '+25%',
      cardPercentageColor: 'bg-success',
      cardIcon: `
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Zm80-64V192a8,8,0,0,1-8,8H16a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H240A8,8,0,0,1,248,64Zm-16,46.35A56.78,56.78,0,0,1,193.65,72H62.35A56.78,56.78,0,0,1,24,110.35v35.3A56.78,56.78,0,0,1,62.35,184h131.3A56.78,56.78,0,0,1,232,145.65Z"></path></svg>
      `,
      cardIconColor: 'info',
      cardBgColor: 'info',
      cardSubtitle: 'this month',
    },
  ];

  category = [
    { id: "Categories", label: 'Categories' },
    { id: "All Categories", label: 'All Categories' },
    { id: "Electronics", label: 'Electronics' },
    { id: "Fashion", label: 'Fashion' },
    { id: "Home", label: 'Home' },
  ]
  Status = [
    { id: "All Status", label: 'All Status' },
    { id: "Published", label: 'Published' },
    { id: "Draft", label: 'Draft' },
    { id: "Archived", label: 'Archived' },
    { id: "Status", label: 'Status' },
  ]
  Stock = [
    { id: "All Stock", label: 'All Stock' },
    { id: "In Stock", label: 'In Stock' },
    { id: "Out of Stock", label: 'Out of Stock' },
  ]

  SortBy = [
    { id: "Sort By", label: 'Sort By' },
    { id: "Date Added", label: 'Date Added' },
    { id: "Price", label: 'Price' },
    { id: "Product Name", label: 'Product Name' },
  ]


}
