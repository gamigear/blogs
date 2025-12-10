import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
    selector: 'app-columns',
    standalone:true,
    templateUrl: './columns.html',
    styleUrls: ['./columns.scss'],
    imports: [SharedModule]
})
export class Columns {

}
