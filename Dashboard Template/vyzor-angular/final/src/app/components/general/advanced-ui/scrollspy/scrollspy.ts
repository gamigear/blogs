import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as prismCodeData from '../../../../shared/prismData/advancedUi/scrollspy'
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';

@Component({
  selector: 'app-scrollspy',
  imports: [SharedModule,NgbModule,ShowcodeCard],
  templateUrl: './scrollspy.html',
  styleUrl: './scrollspy.scss'
})
export class Scrollspy {
  prismCode = prismCodeData;
}
