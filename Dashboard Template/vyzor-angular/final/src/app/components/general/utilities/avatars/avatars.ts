import { Component } from '@angular/core';
import * as prismcodeData from '../../../../shared/prismData/avatars';
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
@Component({
  selector: 'app-avatars',
  imports: [SharedModule,ShowcodeCard],
  templateUrl: './avatars.html',
  styleUrl: './avatars.scss'
})
export class Avatars {
  prismcode = prismcodeData;
}
