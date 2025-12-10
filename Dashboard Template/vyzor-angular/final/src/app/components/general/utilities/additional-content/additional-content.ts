import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
    selector: 'app-additional-content',
    standalone:true,
    templateUrl: './additional-content.html',
    styleUrls: ['./additional-content.scss'],
    imports: [SharedModule]
})
export class AdditionalContent {

}
