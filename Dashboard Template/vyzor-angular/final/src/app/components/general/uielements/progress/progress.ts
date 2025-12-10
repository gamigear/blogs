import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as prismcodeData from '../../../../shared/prismData/progress'
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
import { SpkProgressbar } from '../../../../@spk/reusable-ui-elements/spk-progressbar/spk-progressbar';
@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCard,SpkProgressbar],
  templateUrl: './progress.html',
  styleUrls: ['./progress.scss']
})
export class Progress {
  prismCode = prismcodeData;

}
