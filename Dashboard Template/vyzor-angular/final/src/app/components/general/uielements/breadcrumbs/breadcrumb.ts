import { Component } from '@angular/core';
import * as PrismCode from '../../../../shared/prismData/breadcrumb';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
import { SpkBreadcrumb } from '../../../../@spk/reusable-ui-elements/spk-breadcrumb/spk-breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [SharedModule, ShowcodeCard, CommonModule, SpkBreadcrumb],
  templateUrl: './breadcrumb.html',
  styleUrls: ['./breadcrumb.scss']
})
export class Breadcrumb {
  prsimCodeData: any = PrismCode;
  breadcrumbStyle = {
    '--bs-breadcrumb-divider':
      'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'currentColor\'/%3E%3C/svg%3E")',
  };
  divider = {
    '--bs-breadcrumb-divider': "'~'"
}
divider1 = {
  '--bs-breadcrumb-divider': "''"
}
}
