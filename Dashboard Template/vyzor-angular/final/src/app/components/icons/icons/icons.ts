import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'app-icons',
    standalone: true,
    templateUrl: './icons.html',
    styleUrl: './icons.scss',
    imports: [SharedModule, NgbTooltipModule]
})
export class Icons {

}
