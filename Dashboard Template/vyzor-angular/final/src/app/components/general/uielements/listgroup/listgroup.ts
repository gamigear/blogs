import { Component } from '@angular/core';
import * as PrismCode from '../../../../shared/prismData/listgroup'
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';

@Component({
  selector: 'app-listgroup',
  standalone: true,
  imports: [SharedModule,ShowcodeCard],
  templateUrl: './listgroup.html',
  styleUrls: ['./listgroup.scss']
})
export class Listgroup {
  prsimCodeData: any = PrismCode;

}
