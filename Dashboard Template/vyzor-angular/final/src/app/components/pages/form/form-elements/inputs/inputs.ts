import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as prismCodeData from '../../../../../shared/prismData/forms/inputs'
import { ShowcodeCard } from '../../../../../shared/components/showcode-card/showcode-card';
import { SharedModule } from '../../../../../shared/shared.module';
@Component({
    selector: 'app-inputs',
    standalone:true,
    templateUrl: './inputs.html',
    styleUrls: ['./inputs.scss'],
    imports: [SharedModule, FormsModule, ShowcodeCard]
})
export class Inputs {
  prismCode = prismCodeData;
}
