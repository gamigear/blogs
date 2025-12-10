import { Component,ViewChild } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import Choices, {Options } from 'choices.js';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilePondOptions } from 'filepond';
import { FilePondModule } from 'ngx-filepond';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/editor';
import { TagInputModule } from 'ngx-chips';
import { SpkFlatpickr } from '../../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { SharedModule } from '../../../../shared/shared.module';

interface Select {
  value: string;
  label: string;
}
@Component({
  selector: 'app-addproducts',
  standalone: true,
  imports: [SharedModule, SpkFlatpickr,SpkNgSelect,TagInputModule, NgSelectModule, FilePondModule,
    FormsModule,NgxEditorModule,ReactiveFormsModule],
  templateUrl: './addproducts.html',
  providers:[  FlatpickrDefaults],
  styleUrl: './addproducts.scss'
})
export class Addproducts {
  selectedTags=['Relaxed','Plain']
  public tagsElement!:Choices;
  public type: string = 'component';
  public disabled: boolean = false;



ngOnInit() {
  this.editor = new Editor();
  this.flatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',

  };

  myGroup: FormGroup;


  flatpickr('#inlinetime', this.flatpickrOptions);

    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: 'Y-m-d H:i', // Specify the format you want
      defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
    };

    flatpickr('#pretime', this.flatpickrOptions);
}

editor!: Editor;
toolbar: Toolbar = [
  ['bold', 'italic'],
  ['underline', 'strike'],
  ['code', 'blockquote'],
  ['ordered_list', 'bullet_list'],
  [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  ['link', 'image'],
  ['text_color', 'background_color'],
  ['align_left', 'align_center', 'align_right', 'align_justify'],
];

form = new FormGroup({
  editorContent: new FormControl(
    { value: jsonDoc, disabled: false },
    Validators.required()
  ),
});

flatpickrOptions: any = {
  inline: true,
};
@ViewChild('.product-Images') myPond!: Addproducts
@ViewChild('.product-documents') image!: Addproducts
pondOptions: FilePondOptions = {
  allowMultiple: true,
  labelIdle: 'Drop files here...'
}

pondFiles: FilePondOptions["files"] = []

pondHandleInit() {
}
pondHandleInit1() {
}
pondHandleAddFile(event: any) {
}

pondHandleActivateFile(event: any) {
}

 Sizeselect: Select[] = [
  { value: "Select", label: "Select" },
  { value: "Extra Small", label: "Extra Small" },
  { value: "Small", label: "Small" },
  { value: "Medium", label: "Medium" },
  { value: "Large", label: "Large" },
  { value: "Extra Large", label: "Extra Large" },
]

 Brandselect: Select[] = [
  { value: "", label: "Select" },
  { value: "Armani", label: "Armani" },
  { value: "Lacoste", label: "Lacoste" },
  { value: "Puma", label: "Puma" },
  { value: "Spykar", label: "Spykar" },
  { value: "Mufti", label: "Mufti" },
  { value: "Home Town", label: "Home Town" },
  { value: "Arrabi", label: "Arrabi" }
];

 Categoryselect: Select[] = [
  { value: "Category ", label: "Category" },
  { value: "Clothing ", label: "Clothing" },
  { value: "Footwear ", label: "Footwear" },
  { value: "Watches ", label: "Watches" },
  { value: "Accesories ", label: "Accesories" },
  { value: "Grooming ", label: "Grooming" },
  { value: "Ethnic & Festive ", label: "Ethnic & Festive" },
  { value: "Jewellery ", label: "Jewellery" },
  { value: "Toys & Babycare ", label: "Toys & Babycare" },
  { value: "Festive Gifts ", label: "Festive Gifts" },
  { value: "Kitchen ", label: "Kitchen" },
  { value: "Dining ", label: "Dining" },
  { value: "Home Decors ", label: "Home Decors" },
  { value: "Stationery ", label: "Stationery" }
];

 Genderselect: Select[] = [
  { value: "Select", label: "Select" },
  { value: "All", label: "All" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Others", label: "Others" }
];

 Colorselect: Select[] = [
  { value: "White", label: "White" },
  { value: "Black", label: "Black" },
  { value: "Red", label: "Red" },
  { value: "Orange", label: "Orange" },
  { value: "Yellow", label: "Yellow" },
  { value: "Green", label: "Green" },
  { value: "Blue", label: "Blue" },
  { value: "Pink", label: "Pink" },
  { value: "Purple", label: "Purple" }
];

 Availableselect: Select[] = [
  { value: "Select", label: "Select" },
  { value: "In Stock", label: "In Stock" },
  { value: "Out Of Stock", label: "Out Of Stock" }
];

 Publishselect: Select[] = [
  { value: "Select", label: "Select" },
  { value: "Published", label: "Published" },
  { value: "Scheduled", label: "Scheduled" }
];

 Productselect: Select[] = [
  { value: "Relaxed", label: "Relaxed" },
  { value: "Solid", label: "Solid" },
  { value: "Washed", label: "Washed" },
  { value: "Plain", label: "Plain" }
];
Passing=[
  'Sold',
 ]
}
