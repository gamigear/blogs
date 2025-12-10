import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';

@Component({
  selector: 'app-invoicedetails',
  standalone: true,
  imports: [SharedModule, SpkReusableTables],
  templateUrl: './invoicedetails.html',
  styleUrl: './invoicedetails.scss'
})
export class Invoicedetails {
  invoiceColumn=[
    {header:"Brand Name"},
    {header:"Description"},
    {header:"Quantity"},
    {header:"Price Per Unit"},
    {header:"Total",field:"Total"},
  ];
}
