import { Component, OnInit } from '@angular/core';
import * as prismcodeData from '../../../../shared/prismData/borders'
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
@Component({
    selector: 'app-border',
    standalone:true,
    templateUrl: './border.html',
    styleUrls: ['./border.scss'],
    imports: [SharedModule, ShowcodeCard]
})
export class Border implements OnInit {
  prismCode = prismcodeData;
  constructor() { }

  ngOnInit(): void {
  }

}
