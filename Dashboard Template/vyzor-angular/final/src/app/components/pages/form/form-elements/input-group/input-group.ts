import { Component } from '@angular/core';
import * as prismCodeData from '../../../../../shared/prismData/forms/input_group'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../../shared/components/showcode-card/showcode-card';
@Component({
    selector: 'app-input-group',
    standalone:true,
    templateUrl: './input-group.html',
    styleUrls: ['./input-group.scss'],
    imports: [SharedModule, ShowcodeCard,NgbModule]
})
export class InputGroup {
  prismCode = prismCodeData;
}
