import { Component } from '@angular/core';
import * as PrismCode from '../../../../shared/prismData/objectfit'
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
@Component({
  selector: 'app-objectfit',
  standalone: true,
  imports: [SharedModule,ShowcodeCard],
  templateUrl: './objectfit.html',
  styleUrls: ['./objectfit.scss']
})
export class Objectfit {
  prsimCodeData: any = PrismCode;

}
