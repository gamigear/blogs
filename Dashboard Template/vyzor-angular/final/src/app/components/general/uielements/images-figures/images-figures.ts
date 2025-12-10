import { Component } from '@angular/core';
import * as PrismCode from '../../../../shared/prismData/image_figures'
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
import { SharedModule } from '../../../../shared/shared.module';
@Component({
  selector: 'app-images-figures',
  standalone: true,
  imports: [SharedModule,ShowcodeCard],
  templateUrl: './images-figures.html',
  styleUrls: ['./images-figures.scss']
})
export class ImagesFigures {
  prsimCodeData: any = PrismCode;

}
