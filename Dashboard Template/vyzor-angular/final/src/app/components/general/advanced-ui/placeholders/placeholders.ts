import { Component } from '@angular/core';
import * as prismCodeData from '../../../../shared/prismData/advancedUi/placeholder';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
@Component({
    selector: 'app-placeholders',
    standalone:true,
    templateUrl: './placeholders.html',
    styleUrls: ['./placeholders.scss'],
    imports: [SharedModule, ShowcodeCard,CommonModule]
})
export class Placeholders {
    prismCode = prismCodeData;
}
