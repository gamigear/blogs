import { Component } from '@angular/core';
import * as prismCodeData from '../../../../shared/prismData/forms/form_layouts'
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';

@Component({
    selector: 'app-form-layouts',
    standalone:true,
    templateUrl: './form-layouts.html',
    styleUrls: ['./form-layouts.scss'],
    imports: [SharedModule, ShowcodeCard, SpkNgSelect]
})
export class FormLayouts  {
  prismCode = prismCodeData;
  Preference=[
    {label:'Choose...',value:1},
    {label:'One',value:2},
    {label:'Two',value:3},
    {label:'Three',value:4},
  ]


}
