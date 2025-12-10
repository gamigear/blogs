import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
    selector: 'app-colors',
    standalone:true,
    templateUrl: './colors.html',
    styleUrls: ['./colors.scss'],
    imports: [SharedModule]
})
export class Colors {

}
