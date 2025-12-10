import { Component } from '@angular/core';
import { addSteps as defaultSteps, defaultStepOptions } from "./tour.data";
import { ShepherdService } from "angular-shepherd";
import { SharedModule } from '../../../../shared/shared.module';
@Component({
  selector: 'app-tour',
  imports: [SharedModule],
  templateUrl: './tour.html',
  styleUrl: './tour.scss'
})
export class Tour {
  constructor(private readonly _shepherdService: ShepherdService) {}

  ngAfterViewInit() {
    this._shepherdService.defaultStepOptions = defaultStepOptions;
    this._shepherdService.modal = true;
    this._shepherdService.confirmCancel = false;
    this._shepherdService.addSteps(defaultSteps);
    this._shepherdService.start();
  }
}
