import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';

@Component({
  selector: 'app-navtabs',
  standalone: true,
  imports: [SharedModule,NgbModule,SpkReusableTables],
  templateUrl: './navtabs.html',
  styleUrls: ['./navtabs.scss']
})
export class Navtabs {
  active2 = 4;
  active3 = 10;
  active4 = 14;
  active5 = 17;
  active6 = 19;
  active7 = 28;
  active8 = 31;
  active9 = 34;
  active12 = 43;
  active13 = 46;
  active14 = 52;
  active15 = 53;
  active16 = 59;
  active17 = 60;
  active18=56;
  active=2;
  active1=3;
  activeJustified=2;
  activeNav=3;
  products = [
    {
      name: 'Bag Pack',
      category: 'Travel',
      price: '$1,299.00',
      imageUrl: './assets/images/ecommerce/jpg/3.jpg'
    },
    {
      name: 'Wrist Watch',
      category: 'Gadgets',
      price: '$7,249.29',
      imageUrl: './assets/images/ecommerce/jpg/4.jpg'
    },
    {
      name: 'HeadPhones',
      category: 'Electronics',
      price: '$799.00',
      imageUrl: './assets/images/ecommerce/jpg/6.jpg'
    }
  ];
  tabsColumn=[
    {header:"Product",field:"Product"},
    {header:"Name",field:"Name"},
    {header:"Category",field:"Category"},
    {header:"Price",field:"Price"},

  ]
}
