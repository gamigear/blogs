import { ChangeDetectionStrategy, Component,  } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgxReusableTable } from '../../../@spk/spk-reusable-plugins/ngx-reusable-table/ngx-reusable-table';
@Component({
  selector: 'app-ngx-easy-table',
  imports: [SharedModule,NgxReusableTable,],
  templateUrl: './ngx-easy-table.html',
  styleUrl: './ngx-easy-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NgxEasyTable {

}
