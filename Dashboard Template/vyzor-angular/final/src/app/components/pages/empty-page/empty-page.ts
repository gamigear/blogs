import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'app-empty-page',
    templateUrl: './empty-page.html',
    styleUrls: ['./empty-page.scss'],
    standalone: true,
    imports:[SharedModule]
})
export class EmptyPage implements OnInit {
  constructor() { }

  ngOnInit(): void {}

}
