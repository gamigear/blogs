import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.html',
    styleUrls: ['./terms.scss'],
   standalone: true,
   imports:[SharedModule]
})
export class Terms {

}
