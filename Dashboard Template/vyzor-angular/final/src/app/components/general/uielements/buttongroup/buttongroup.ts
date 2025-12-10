import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as PrismCode from '../../../../shared/prismData/buttongroup';
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'app-buttongroup',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCard,SpkDropdowns],
  templateUrl: './buttongroup.html',
  styleUrls: ['./buttongroup.scss']
})
export class Buttongroup {
  prsimCodeData: any = PrismCode;
  basicButtons=[
  {class:'btn-info btn-wave',icon:'bi bi-skip-backward'},
  {class:'btn-info btn-wave',icon:'bi bi-pause'},
  {class:'btn-info btn-wave',icon:'bi bi-skip-forward'}
  ]
}
