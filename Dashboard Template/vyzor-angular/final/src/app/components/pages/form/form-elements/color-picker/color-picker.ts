import { Component } from '@angular/core';
import { ColorPickerDirective } from 'ngx-color-picker';
import { NgxColorsModule } from 'ngx-colors';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import * as prismCodeData from '../../../../../shared/prismData/color-pickers'
import { ShowcodeCard } from '../../../../../shared/components/showcode-card/showcode-card';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
    selector: 'app-color-picker',
    standalone:true,
    templateUrl: './color-picker.html',
    styleUrls: ['./color-picker.scss'],
    imports: [SharedModule, MatIconModule, ColorPickerDirective, NgxColorsModule, FormsModule, ShowcodeCard]
})
export class ColorPicker {
  public color: string = '#2889e9';
  public color1: string = '#2889e9';
  public color2: string = '#e920e9';



  public onEventLog(event: string, data: any): void {
  }

  constructor() { }
  color3:string = '#EC407A';
  input1: string = "#00897B";
  prismCode = prismCodeData;


}
