import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
    selector: 'app-flex',
    standalone:true,
    templateUrl: './flex.html',
    styleUrls: ['./flex.scss'],
    imports: [SharedModule]
})
export class Flex implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
