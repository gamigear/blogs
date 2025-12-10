import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
@Component({
    selector: 'app-gutters',
    standalone:true,
    templateUrl: './gutters.html',
    styleUrls: ['./gutters.scss'],
    imports: [SharedModule]
})
export class Gutters {

}
