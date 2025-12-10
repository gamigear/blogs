import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterModule,SharedModule,ReactiveFormsModule,NgbModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class Checkout {
  constructor(private modalService: NgbModal) { }

  Address(content: any) {
    this.modalService.open(content,{ size: 'lg',centered:true });
  }

  cityData=[
    {label:'Georgetown',value:1},
    {label:'Alexandria',value:2},
    {label:'Rockville',value:3},
    {label:'Frederick',value:4},
  ]
  StateData=[
    {label:'Washington,D.C',value:1},
    {label:'California',value:2},
    {label:'Texas',value:3},
    {label:'Alaska',value:4},
  ]
  handleSelectChange(value: any | any[]) {
  }
}
