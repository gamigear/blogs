import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {  API, APIDefinition, Columns, Config, DefaultConfig, TableModule } from 'ngx-easy-table';

import { Company, data } from '../../../../shared/data/tables_data/customer_data';

import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkFlatpickr } from '../../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { SharedModule } from '../../../../shared/shared.module';
interface SelectType {
  value:string;
  label:string;
}
@Component({
  selector: 'app-customers',
  imports: [SharedModule,TableModule,SpkDropdowns,SpkFlatpickr,CommonModule,SpkNgSelect],
  templateUrl: './customers.html',
  styleUrl: './customers.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Customers {
  constructor(config: NgbModalConfig, private modalService: NgbModal,) {

  }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }
  @ViewChild('phoneTpl', { static: true }) phoneTpl!: TemplateRef<any>;
  @ViewChild('Action', { static: true }) Action!: TemplateRef<any>;
  @ViewChild('Status', { static: true }) Status!: TemplateRef<any>;
  public configuration!: Config;
  public columns!: Columns[];
  public data: Company[] = [];
  public selected = new Set();

  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.checkboxes = true;
    this.columns = [
      { key: 'customerIp', title: 'Customer Ip' },
      { key: 'customerName', title: 'Customer Name' ,cellTemplate: this.phoneTpl},
      { key: 'status', title: 'Status',cellTemplate: this.Status },
      { key: 'joiningDate', title: 'Joining Date' },
      { key: 'actions', title: 'Actions',cellTemplate: this.Action },
    ];
    this.data = data;
  }
  @ViewChild('table') table!: APIDefinition;
  public TableWithSearchColumns!: Columns[];
  onTableWithSearchChange(event: Event): void {
    this.table.apiEvent({
      type: API.onGlobalSearch,
      value: (event.target as HTMLInputElement).value,
    });
  }
  CustomerSelect:SelectType[] = [
    {value:'Customer Status', label:'Customer Status'},
    {value:'All Status', label:'All Status'},
    {value:'Active', label:'Active'},
    {value:'Blocked', label:'Blocked'},
  ]

  StatusSelect:SelectType[] = [
    {value:'Select', label:'Select'},
    {value:'Active', label:'Active'},
    {value:'Block', label:'Block'}
  ]
}
