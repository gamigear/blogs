import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
    selector: 'app-helpers',
    standalone:true,
    templateUrl: './helpers.html',
    styleUrls: ['./helpers.scss'],
     imports: [SharedModule]
})
export class Helpers {

}
