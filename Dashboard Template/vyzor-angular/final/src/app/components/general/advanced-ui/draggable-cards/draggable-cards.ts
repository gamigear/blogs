
import { Component } from '@angular/core';
import { SortablejsModule } from '@maksim_m/ngx-sortablejs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkBgcolorCard } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-bgcolor-card/spk-bgcolor-card';
import { SpkOverlayCard } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-overlay-card/spk-overlay-card';
import { SpkLinkCard } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-link-card/spk-link-card';
import { SpkBlockquoteCard } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-blockquote-card/spk-blockquote-card';
import { SpkCollapseCard } from '../../../../@spk/reusable-ui-elements/spk-cards/spk-collapse-card/spk-collapse-card';


@Component({
  selector: 'app-draggable-cards',
  imports: [SharedModule, NgbModule, SortablejsModule, SpkCollapseCard, SpkBgcolorCard, SpkOverlayCard, SpkLinkCard, SpkBlockquoteCard],
  templateUrl: './draggable-cards.html',
  styleUrl: './draggable-cards.scss'
})
export class DraggableCards {
  isCollapsed = false;
    isCollapsed1 = false;
    closeResult: string | undefined;

    ngOnInit(): void {}
    fullScreenToggle() {
      document
        .querySelector('.fullscreentoggle')
        ?.classList.toggle('card-fullscreen');
    }

      // Define sortable options
      normalOptions = {
        animation: 150,
        group: 'shared',
        // Add other options here as needed
      };
      // Handle sort end event
      onSortEnd(event: any) { }
      normalList1:any
      normalList2:any
}


