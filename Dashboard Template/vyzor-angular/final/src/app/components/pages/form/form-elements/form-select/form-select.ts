import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as prismCodeData from '../../../../../shared/prismData/forms/formselect'
import { TagInputModule } from 'ngx-chips';
import { SharedModule } from '../../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../../shared/components/showcode-card/showcode-card';
import { SpkNgSelect } from '../../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
@Component({
    selector: 'app-form-select',
    standalone:true,
    templateUrl: './form-select.html',
    styleUrls: ['./form-select.scss'],
    imports: [SharedModule, FormsModule, ReactiveFormsModule,TagInputModule, ShowcodeCard, SpkNgSelect]
})
export class FormSelect {
  prismCode = prismCodeData;
  uniqueOptions: any=['child1','child2'];

  selectedChoices: any=['choice 1'];

  selectedAccount = 'Adam';

  Countries = [
    {
      name: 'London',
      email: 'adam@email.com',
      age: 12,
      country: 'UK',
      child: { state: 'Active' },
    },
    {
      name: 'Manchester',
      email: 'homer@email.com',
      age: 47,
      country: 'UK',
      child: { state: 'Active' },
    },
    {
      name: 'Liverpool',
      email: 'samantha@email.com',
      age: 30,
      country: 'UK',
      child: { state: 'Active' },
    },
    {
      name: 'Paris',
      email: 'amalie@email.com',
      age: 12,
      country: 'FR',
      child: { state: 'Active' },
    },
    {
      name: 'Lyon',
      email: 'estefania@email.com',
      age: 21,
      country: 'FR',
      child: { state: 'Active' },
    },
    {
      name: 'Marseille',
      email: 'adrian@email.com',
      age: 21,
      country: 'FR',
      child: { state: 'Active' },
    },
    {
      name: 'Wladimir',
      email: 'wladimir@email.com',
      age: 30,
      country: 'Ecuador',
      child: { state: 'Inactive' },
    },
    {
      name: 'Natasha',
      email: 'natasha@email.com',
      age: 54,
      country: 'Ecuador',
      child: { state: 'Inactive' },
    },
    {
      name: 'Nicole',
      email: 'nicole@email.com',
      age: 43,
      country: 'Colombia',
      child: { state: 'Inactive' },
    },
    {
      name: 'Michael',
      email: 'michael@email.com',
      age: 15,
      country: 'Colombia',
      child: { state: 'Inactive' },
    },
    {
      name: 'Nicolás',
      email: 'nicole@email.com',
      age: 43,
      country: 'Colombia',
      child: { state: 'Inactive' },
    },
  ];
  addTagFn(name: any) {
    return { name: name, tag: true };
  }
  companies: any[] = ['One','Two'];
  emails=['abc@hotmail.com'];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  Single=[
    {label:'Choice 1',value:1},
    {label:'Choice 2',value:2},
    {label:'Choice 3',value:3},
  ]
  handleSelectChange(value: any | any[]) {
}
accounts = [
  { label: 'UK', disabled: true },
  { label: 'London', value: 'London' },
  { label: 'Manchester', value: 'Manchester' },
  { label: 'Liverpool', value: 'Liverpool' },
  { label: 'FR', disabled: true },
  { label: 'Paris', value: 'Paris' },
  { label: 'Lyon', value: 'Lyon' },
  { label: 'Marseille', value: 'Marseille' },
  { label: 'US', disabled: true },
  { label: 'New York', value: 'New York' },
  { label: 'Washington', value: 'Washington', disabled: true },
  { label: 'Michigan', value: 'Michigan' },
  { label: 'SP', disabled: true },
  { label: 'Madrid', value: 'Madrid' },
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Malaga', value: 'Malaga' },
  { label: 'CA', disabled: true },
  { label: 'Montreal', value: 'Montreal' },
  { label: 'Toronto', value: 'Toronto' },
  { label: 'Vancouver', value: 'Vancouver' },
];
cityOptions = [
  { label: 'Choose a city', value: '' },
  { label: 'UK', disabled: true },
  { label: 'London', value: 'London' },
  { label: 'Manchester', value: 'Manchester' },
  { label: 'Liverpool', value: 'Liverpool' },
  { label: 'FR', disabled: true },
  { label: 'Paris', value: 'Paris' },
  { label: 'Lyon', value: 'Lyon' },
  { label: 'Marseille', value: 'Marseille' },
  { label: 'US', disabled: true },
  { label: 'New York', value: 'New York' },
  { label: 'Washington', value: 'Washington', disabled: true },
  { label: 'Michigan', value: 'Michigan' },
  { label: 'SP', disabled: true },
  { label: 'Madrid', value: 'Madrid' },
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Malaga', value: 'Malaga' },
  { label: 'CA', disabled: true },
  { label: 'Montreal', value: 'Montreal' },
  { label: 'Toronto', value: 'Toronto' },
  { label: 'Vancouver', value: 'Vancouver' },
];
multipleSelect = [
  { label: 'Choice 1', value: 1 },
  { label: 'Choice 2', value: 2 },
  { label: 'Choice 3', value: 3 },
  { label: 'Choice 4', value: 4 },
  { label: 'Choice 5', value: 5 },
  { label: 'Choice 6', value: 6, disabled: true },
  // Add more options as needed
];
multipleRemove = [
  { label: 'Choice 1', value: 1 },
  { label: 'Choice 2', value: 2 },
  { label: 'Choice 3', value: 3 },
  { label: 'Choice 4', value: 4 },
  // Add more options as needed
];
selectedCompanies=[1,2,3];
selected=[1]

selectedValues=[1,2];
Options=[
  { label: 'Label Five', value: 1 },
  { label: 'Label Four', value: 2 },
  { label: 'Label One', value: 3 },
  { label: 'Label Six', value: 4 },
  { label: 'Label Three', value: 5 },
  { label: 'Label Two', value: 6 },
  { label: 'Label Zero', value: 7 },
]
PassingUnique=[
  'child-1',
 'child-2',
 ];
 Passing=[
  'one',
  'two',
  'three',
  'four',
 ]
selectedValues1=[1,2];
}
