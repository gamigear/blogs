import { Component } from '@angular/core';
import * as prismCodeData from '../../../../shared/prismData/forms/floating_labels'
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModuleModule } from '../../../../materialModule/material-module/material-module.module';
@Component({
    selector: 'app-floating-labels',
    standalone:true,
    templateUrl: './floating-labels.html',
    styleUrls: ['./floating-labels.scss'],
    imports: [SharedModule, MaterialModuleModule, ShowcodeCard]
})
export class FloatingLabels {
  prismCode = prismCodeData;

}
