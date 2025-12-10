import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { DataService } from '../../../../shared/services/data-service.service';


@Component({
    selector: 'app-select2',
    standalone:true,
    templateUrl: './select2.html',
    styleUrls: ['./select2.scss'],
    imports: [SharedModule, FormsModule, ReactiveFormsModule, NgbAlertModule, NgSelectModule, SpkNgSelect]
})
export class Select2 {
  disabled = false;
  Selection = [
    { value: 1, label: 'Selection-1' },
    { value: 2, label: 'Selection-2' },
    { value: 3, label: 'Selection-3' },
    { value: 3, label: 'Selection-4' },
    { value: 3, label: 'Selection-5' }
];
cities3 = [
  {id: 1, name: 'Vilnius', avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'},
  {id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'},
  {id: 3, name: 'Pavilnys', avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'}
];
selectedCityName = 'Vilnius';
singleSelection = [
  { value: 1, label: 'Texas' },
  { value: 2, label: 'Georgia' },
  { value: 3, label: 'California' },
  { value: 3, label: 'Washington D.C' },
  { value: 3, label: 'Virginia' }
];
multipleSelection = [
{ value: 1, label: ' Andrew' },
{ value: 2, label:  ' Maya' },
{ value: 3, label: ' Brodus Axel' },
{ value: 3, label: ' Goldhens' },
{ value: 3, label: ' Angelina' }
];
    //Templating
    options = [
      {
        value: "Andrew",
        label: "Andrew",
        image: "./assets/images/faces/1.jpg"
      },
      {
        value: "Maya",
        label: "Maya",
        image: "./assets/images/faces/2.jpg"
      },
      {
        value: "BrodusAxel",
        label: "BrodusAxel",
        image: "./assets/images/faces/3.jpg"
      },
      {
        value: "Goldhens",
        label: "Goldhens",
        image: "./assets/images/faces/4.jpg"
      },
      {
        value: "Angelina",
        label: "Angelina",
        image: "./assets/images/faces/5.jpg"
      }
    ];

    defaultValue: any; // Initialize as needed


cities1 = [

  {
    id: 1,
    name: ' Andrew',
    avatar: './assets/images/faces/select2/p-1.jpg',
  },
  {
    id: 2,
    name: ' Maya',
    avatar: './assets/images/faces/select2/p-2.jpg',
  },
  {
    id: 3,
    name: ' Brodus Axel',
    avatar: './assets/images/faces/select2/p-3.jpg',
  },
  {
    id: 4,
    name: ' Goldens',
    avatar: './assets/images/faces/select2/p-4.jpg',
  },
  {
    id: 5,
    name: ' Angelina',
    avatar: './assets/images/faces/select2/p-5.jpg',
  },
];
cities2 = [

  {
    id: 1,
    name: ' Andrew',
    avatar: './assets/images/faces/select2/p-1.jpg',
  },
  {
    id: 2,
    name: ' Maya',
    avatar: './assets/images/faces/select2/p-2.jpg',
  },
  {
    id: 3,
    name: ' Brodus Axel',
    avatar: './assets/images/faces/select2/p-3.jpg',
  },
  {
    id: 4,
    name: ' Goldens',
    avatar: './assets/images/faces/select2/p-4.jpg',
  },
  {
    id: 5,
    name: ' Angelina',
    avatar: './assets/images/faces/select2/p-5.jpg',
  },
];
cities = [
  { name: 'New York', avatar: './assets/images/faces/5.jpg' },
  { name: 'London', avatar: 'https://via.placeholder.com/15x15.png?text=LD' },
  { name: 'Paris', avatar: 'https://via.placeholder.com/15x15.png?text=PR' }
];


selectedCity = this.options[0].label;
selectedCity1 = this.cities2[1].name;
selectedCity2 = this.cities2[0].name;

people$!: Observable<any[]>;



  constructor(private dataService: DataService) {
  }

  ngOnInit() {
      this.people$ = this.dataService.getPeople('');
  }
  selectedPersonId:any=[1]
  selectedPerson:any=['Selection-1']

  enableSelect(): void {
    this.disable = false;
  }

  disableSelect(): void {
    this.disable = true;
  }
  disable:any;


customer:any;
// public onSelectAll() {
//   const selected = this.cities.map(item => item.id);
//   this.customer = selected;
// }

public onClearAll() {
  this.customer = [];
}
multipleSelect=[
  {label:"Multiple-1",value:1},
  {label:"Multiple-2",value:2},
  {label:"Multiple-3",value:3},
  {label:"Multiple-4",value:4},
  {label:"Multiple-5",value:5},
]
selectedMulti=[1]
onCitySelected(selected: any) {
  this.selectedCity = selected;
  // You can perform additional actions based on the selected city here
}
}
