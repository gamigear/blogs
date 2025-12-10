import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularDualListBoxModule, DualListComponent } from 'angular-dual-listbox';
import { CountryISO, NgxIntlTelInputModule, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { MaterialModuleModule } from '../../../../materialModule/material-module/material-module.module';
import { TagifyModule, TagifySettings } from 'ngx-tagify';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-form-advanced',
  imports: [SharedModule,AngularDualListBoxModule,TagifyModule,FormsModule,ReactiveFormsModule,SpkNgSelect,CdkDropList, CdkDrag,MaterialModuleModule,NgxIntlTelInputModule],
  templateUrl: './form-advanced.html',
  styleUrl: './form-advanced.scss'
})
export class FormAdvanced {
  items = ['tag 1', 'tag 2', 'tag 3', 'tag 4', 'tag 5', 'tag 6'];
  userTags = [
    { value: 'abatisse2@nih.gov' },
    { value: 'Justinian Hattersley' }
  ];

  userWhitelist$ = new BehaviorSubject<string[]>(['abatisse2@nih.gov', 'Justinian Hattersley']);
	Food=['Pizza, Soda','Burger, Milkshake','Tacos, Margarita','Pasta, Red Wine','Sushi, Green Tea']
	cities = [
		{ value: 1, label: 'Lavender' },
		{ value: 2, label: 'Emerald' },
		{ value: 3, label: 'Periwinkle' },
		{ value: 4, label: 'Rose Gold' },
		{ value: 5, label: 'Goldenrod' },
		{ value: 3, label: 'Amethyst' },
		{ value: 4, label: 'Mint Green' },
		{ value: 5, label: 'Tangerine' },
	  ];
	drop(event: CdkDragDrop<string[]>) {
	  moveItemInArray(this.items, event.previousIndex, event.currentIndex);
	}

	readonly = false;

	onAdd(tagify: any) {

	}

	onRemove(tags: any) {

	}

	ngOnInit(){
	  this.doReset();
	  this.companiesNames.forEach((c, i) => {
		  this.companies.push({ id: i, name: c });
	  });
	}

	disabled = false;

	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
    PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

	separateDialCode1 = false;
	SearchCountryField1 = SearchCountryField;
	CountryISO1 = CountryISO;
    PhoneNumberFormat1 = PhoneNumberFormat;
	preferredCountries1: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm1 = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries1() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

   constructor(private fb: FormBuilder,) {

	}
  addTagFn(name: any) {
    return { name: name, tag: true };
  }
     tags=[{label:'first option',value:1},{label:'second option',value:1},{label:'third option',value:1}]
	selectedAccounts = ['Tag-1','Tag-2',];
	selectedCompanies =[1,2,3,4,5];
	companies: any[] = [];
	companiesNames = [{label:'css',value:1},
	                  {label:'html',value:2},
					  {label: 'javascript',value:3},
					  {label:'A+',value:4},
					  {label:'ABC ALGOL',value:5},
					  {label:'ABSET',value:6},
					  {label:'ABSYS',value:7},{label:'ACC',value:8},{label:'Accent',value:9},{label:'A++',value:10}];


  selectedAccounts1 = [];
  compareAccounts = (item:any, selected:any) => {
	  if (selected.country && item.country) {
		  return item.country === selected.country;
	  }
	  if (item.name && selected.name) {
		  return item.name === selected.name;
	  }
	  return false;
  };
  accounts = [
	  '1','2','3','4','5','6'
  ]
	//Dual ListBox
	  tab = 1;
	  keepSorted = true;
	  key!: any;
	  display: any;
	  filter = false;
	  source!: Array<any>;
	  confirmed!: Array<any>;
	  userAdd = '';
	sourceLeft = true;
	format: any = DualListComponent.DEFAULT_FORMAT;

	  private sourceTube!: Array<string>;
	  private sourceStations!: Array<any>;
	  private sourceChessmen!: Array<any>;

	  private confirmedTube!: Array<string>;
	  private confirmedStations!: Array<any>;
	  private confirmedChessmen!: Array<any>;

	arrayType = [
		  { name: 'Rio Grande', detail: '(object array)', value: 'station' },
		  { name: 'Chessmen', detail: '(object array)', value: 'chess' },
		  { name: 'Underground', detail: '(string array)', value: 'tube' }
	  ];

	type = this.arrayType[0].value;

	  private stations: Array<any> = [
		  { key: 1, station: 'Antonito', state: 'CO' },
		  { key: 2, station: 'Big Horn', state: 'NM' },
		  { key: 3, station: 'Sublette', state: 'NM' },
		  { key: 4, station: 'Toltec', state: 'NM' },
		  { key: 5, station: 'Osier', state: 'CO' },
		  { key: 6, station: 'Chama', state: 'NM'},
		  { key: 7, station: 'Monero', state: 'NM' },
		  { key: 8, station: 'Lumberton', state: 'NM' },
		  { key: 9, station: 'Duice', state: 'NM' },
		  { key: 10, station: 'Navajo', state: 'NM' },
		  { key: 11, station: 'Juanita', state: 'CO' },
		  { key: 12, station: 'Pagosa Jct', state: 'CO' },
		  { key: 13, station: 'Carracha', state: 'CO' },
		  { key: 14, station: 'Arboles', state: 'CO' },
		  { key: 15, station: 'Solidad', state: 'CO' },
		  { key: 16, station: 'Tiffany', state: 'CO' },
		  { key: 17, station: 'La Boca', state: 'CO' },
		  { key: 18, station: 'Ignacio', state: 'CO' },
		  { key: 19, station: 'Oxford', state: 'CO' },
		  { key: 20, station: 'Florida', state: 'CO' },
		  { key: 21, station: 'Bocea', state: 'CO' },
		  { key: 22, station: 'Carbon Jct', state: 'CO' },
		  { key: 23, station: 'Durango', state: 'CO' },
		  { key: 24, station: 'Home Ranch', state: 'CO' },
		  { key: 25, station: 'Trimble Springs', state: 'CO' },
		  { key: 26, station: 'Hermosa', state: 'CO' },
		  { key: 27, station: 'Rockwood', state: 'CO' },
		  { key: 28, station: 'Tacoma', state: 'CO' },
		  { key: 29, station: 'Needleton', state: 'CO' },
		  { key: 30, station: 'Elk Park', state: 'CO' },
		  { key: 31, station: 'Silverton', state: 'CO' },
		  { key: 32, station: 'Eureka', state: 'CO' }
	  ];

	  private chessmen: Array<any> = [
		  { _id: 1, name: 'Pawn' },
		  { _id: 2, name: 'Rook' },
		  { _id: 3, name: 'Knight' },
		  { _id: 4, name: 'Bishop' },
		  { _id: 5, name: 'Queen' },
		  { _id: 6, name: 'King' }
	  ];

	private stationLabel(item: any) {
		  return item.station + ', ' + item.state;
	  }

	  private useStations() {
		  this.key = 'key';
		  this.display = this.stationLabel;
		  this.keepSorted = true;
		  this.source = this.sourceStations;
		  this.confirmed = this.confirmedStations;
	  }

	  private useChessmen() {
		  this.key = '_id';
		  this.display = 'name';
		  this.keepSorted = false;
		  this.source = this.sourceChessmen;
		  this.confirmed = this.confirmedChessmen;
	  }

	  private useTube() {
		  this.key = undefined;
		  this.display = undefined;
		  this.keepSorted = false;
		  this.source = this.sourceTube;
		  this.confirmed = this.confirmedTube;
	  }


	  doReset() {
		  this.sourceChessmen = JSON.parse(JSON.stringify(this.chessmen));
		  this.sourceStations = JSON.parse(JSON.stringify(this.stations));
		  this.confirmedChessmen = new Array<any>();
		  this.confirmedStations = new Array<any>();
		  this.confirmedTube = new Array<string>();

		  // Preconfirm some items.
		  this.confirmedStations.push( this.stations[31] );


		  switch (this.type) {
		  case this.arrayType[0].value:
			  this.useStations();
			  break;
		  case this.arrayType[1].value:
			  this.useChessmen();
			  break;
		  case this.arrayType[2].value:
			  this.useTube();
			  break;
		  }
	  }
	  Tagify=[
		{label:"Tag-1",value:1},
		{label:"Tag-2",value:2},
	  ]
	  selected=[1,2]
    //
    isPhoneValid: boolean = false;
    showValidation = false;
    validatePhone() {
      this.showValidation = true;
      this.isPhoneValid = this.phoneForm.get('phone')?.valid ?? false;
    }
}
