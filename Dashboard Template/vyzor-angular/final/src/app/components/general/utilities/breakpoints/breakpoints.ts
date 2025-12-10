import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
    selector: 'app-breakpoints',
    standalone:true,
    templateUrl: './breakpoints.html',
    styleUrls: ['./breakpoints.scss'],
    imports: [SharedModule]
})
export class Breakpoints {

}
