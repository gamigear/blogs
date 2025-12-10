import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../../shared/shared.module';
import { SpkFlatpickr } from '../../../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';

@Component({
    selector: 'app-date-time-picker',
    standalone:true,
    templateUrl: './date-time-picker.html',
    styleUrls: ['./date-time-picker.scss'],
    imports: [SharedModule, FormsModule, SpkFlatpickr],
})
export class DateTimePicker {
  // timepicker
  basicDemoValue = '2017-01-01';
  modelValueAsDate: Date = new Date();
  dateTimeValue: Date = new Date();
  dateTimeValue2: Date = new Date();

  multiDates: Date[] = [new Date(), (new Date() as any)['fp_incr'](10)];
  rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };
  inlineDatePicker: Date = new Date();
  timePicker: Date | null = null;
  timePicker1: Date | null = null;
  timePicker2: Date | null = null;
  timePicker3: Date | null = null;
  timePicker4: Date | null = null;


  min='16:00 pm';
  max='22:00 pm';
  min1='04:00';
  max1='10:00';
  basicDemoValue1= '10:00';

}
