import { Component } from '@angular/core';
import * as prismcodeData from '../../../../shared/prismData/typography'
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [SharedModule,ShowcodeCard],
  templateUrl: './typography.html',
  styleUrl: './typography.scss'
})
export class Typography {
  prismCode = prismcodeData;
}
