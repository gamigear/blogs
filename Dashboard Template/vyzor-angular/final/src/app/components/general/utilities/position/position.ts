import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
    selector: 'app-position',
    standalone:true,
    templateUrl: './position.html',
    styleUrls: ['./position.scss'],
    imports: [SharedModule]
})
export class Position implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
