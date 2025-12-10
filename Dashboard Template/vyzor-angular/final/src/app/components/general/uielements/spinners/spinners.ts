import { Component } from '@angular/core';
import * as prismcodeData from '../../../../shared/prismData/spinners'
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
@Component({
  selector: 'app-spinners',
  standalone: true,
  imports: [SharedModule,ShowcodeCard],
  templateUrl: './spinners.html',
  styleUrls: ['./spinners.scss']
})
export class Spinners {
  prismCode = prismcodeData;
}
