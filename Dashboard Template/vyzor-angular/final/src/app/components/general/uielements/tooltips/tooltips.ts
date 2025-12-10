import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as prismcodeData from '../../../../shared/prismData/tooltips'
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCard],
  templateUrl: './tooltips.html',
  styleUrls: ['./tooltips.scss']
})
export class Tooltips {
  prismCode = prismcodeData;

}
