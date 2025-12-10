import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import * as prismCodeData from '../../../../../shared/prismData/forms/check_radio'
import { SharedModule } from '../../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../../shared/components/showcode-card/showcode-card';
import { ToggleBtnDirective } from '../../../../../shared/directives/toggle-btn.directive';
@Component({
    selector: 'app-checks-radio',
    standalone:true,
    templateUrl: './checks-radio.html',
    styleUrls: ['./checks-radio.scss'],
    imports: [SharedModule, FormsModule, ShowcodeCard, ToggleBtnDirective]
})
export class ChecksRadio {
  prismCode = prismCodeData;
}
