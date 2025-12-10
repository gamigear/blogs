import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { NgbAlert, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
interface Alert {
  type: string;
  message: string;
}

interface SolidAlert {
  type: string;
  message: string;
  bg:string;
   closecolor:string;
}
interface OutlineAlert {
  type: string;
  message: string;
  bg:string;
}

export interface Alert1 {
  type: string;
  icon: string; // Make sure 'icon' property is defined
  message: string;
}

export interface Alert2 {
  type: string;
  image: string;
  message: string;
}
export interface Alert3 {
  type: string;
  image: string;
  avatarClass : string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'This is an success alert',
  },
  {
    type: 'info',
    message: 'This is an info alert',
  },
  {
    type: 'warning',
    message: 'This is a warning alert',
  },
  {
    type: 'danger',
    message: 'This is a danger alert',
  },
  {
    type: 'primary',
    message: 'This is a primary alert',
  },
  {
    type: 'secondary',
    message: 'This is a secondary alert',
  },
  {
    type: 'light',
    message: 'This is a light alert',
  },
  {
    type: 'dark',
    message: 'This is a dark alert',
  },
];

const CustomizedIconALERTS: Alert1[] = [
  {
    type: 'primary svg-primary  shadow-sm ',
    icon:' <svg class="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>',
    message: ' A customized primary alert with an icon ',

  },
  {
    type: 'success svg-success  shadow-sm',
    message: 'A customized success alert with an icon ',
    icon:' <svg class="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>'
  },
  {
    type: 'warning svg-warning  shadow-sm',
    message: ' A customized warning alert with an icon ',
    icon:'<svg class="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>'
  },
  {
    type: 'danger svg-danger  shadow-sm',
    message: ' A customized danger alert with an icon ',
    icon:'<svg class="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>'
  },
];

const roundeDefaultALERTS: Alert[] = [
  {
    type: 'primary rounded-pill',
    message: ' A simple rounded primary alert—check it out!',
  },
  {
    type: 'secondary rounded-pill',
    message: 'A simple rounded secondary alert—check it out!',
  },
  {
    type: 'warning rounded-pill',
    message: 'A simple rounded warning alert—check it out!',
  },
  {
    type: 'danger rounded-pill',
    message: 'A simple rounded danger alert—check it out!',
  },
];

const CustomizedButtonALERTS: Alert1[] = [
  {
    type: 'primary svg-primary custom-alert-icon shadow-sm ',
    icon:'  <svg  class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" > <path d="M0 0h24v24H0z" fill="none" /> <path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/> </svg>',
    message: ' A customized primary alert with an icon ',

  },
  {
    type: 'secondary svg-secondary custom-alert-icon shadow-sm',
    message: 'A customized secondary alert with an icon ',
    icon:' <svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
  },
  {
    type: 'warning svg-warning custom-alert-icon shadow-sm',
    message: ' A customized warning alert with an icon ',
    icon:'<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'
  },
  {
    type: 'danger svg-danger custom-alert-icon shadow-sm',
    message: ' A customized danger alert with an icon ',
    icon:'<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'
  },
];

const solidALERTS: SolidAlert[] = [
  {
    type: 'solid-primary ',
    message: ' A simple solid primary alert—check it out!',
    bg:'',
     closecolor:""
  },
  {
    type: 'solid-secondary ',
    message: 'A simple solid secondary alert—check it out!',
    bg:'',
     closecolor:""
  },
  {
    type: 'solid-info ',
    message: 'A simple solid info alert—check it out!',
    bg:'',
     closecolor:""

  },
  {
    type: 'solid-warning ',
    message: 'A simple solid warning alert—check it out!',
    bg:'',
    closecolor:""
  },
  {
    type: 'solid-success ',
    message: 'A simple solid success alert—check it out!',
    bg:'',
    closecolor:""

  },
  {
    type: 'solid-danger ',
    message: 'A simple solid danger alert—check it out!',
    bg:'',
    closecolor:""

  },
  {
    type: 'solid-light ',
    message: 'A simple solid light alert—check it out!',
    bg:'text-dark',
     closecolor:"text-default"

  },
  {
    type: 'solid-dark text-white ',
    message: 'A simple solid dark alert—check it out!',
    bg:'text-dark',
 closecolor:"text-white"
  },
];

import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as PrismCode from '../../../../shared/prismData/alert';
import * as tsCode from '../../../../shared/prismData/alert';
import * as reuseCode from '../../../../shared/prismData/alert';
import { SharedModule } from '../../../../shared/shared.module';
import { ShowcodeCard } from '../../../../shared/components/showcode-card/showcode-card';
import { SpkAlerts } from '../../../../@spk/reusable-ui-elements/spk-alerts/spk-alerts';

@Component({
  selector: 'app-alerts',
  standalone: true,
  templateUrl: './alerts.html',
  styleUrls: ['./alerts.scss'],
  imports: [SharedModule, NgbModule, ShowcodeCard,SpkAlerts,CommonModule]
})

export class Alerts {
  prsimCodeData: any = PrismCode;
  tsCodeData: any = tsCode;
  reusableCode: any = reuseCode;
  i!: any;
  toggleClass = "line";

  alerts!: Alert[];
///////

alertData = [
  { color: 'primary', title: 'A simple primary alert—check it out!' },
  { color: 'secondary', title: 'A simple secondary alert—check it out!' },
  { color: 'success', title: 'A simple success alert—check it out!' },
  { color: 'danger', title: 'A simple danger alert—check it out!' },
  { color: 'warning', title: 'A simple warning alert—check it out!' },
  { color: 'info', title: 'A simple info alert—check it out!' },
  { color: 'light', title: 'A simple light alert—check it out!' },
  { color: 'dark', title: 'A simple dark alert—check it out!' },
];

outlineAlerts = [
  { color: 'outline-primary',  closecolor:"",title: 'A simple outline primary alert—check it out!' },
  { color: 'outline-secondary', closecolor:"",title: 'A simple outline secondary alert—check it out!' },
  { color: 'outline-info', closecolor:"",title: 'A simple outline info alert—check it out!' },
  { color: 'outline-warning', closecolor:"",title: 'A simple outline warning alert—check it out!' },
  { color: 'outline-success', closecolor:"",title: 'A simple outline success alert—check it out!' },
  { color: 'outline-danger',closecolor:"", title: 'A simple outline danger alert—check it out!' },
  { color: 'outline-light', closecolor:"text-default",title: 'A simple outline light alert—check it out!' },
  { color: 'outline-dark', closecolor:"",title: 'A simple outline dark alert—check it out!' },
];

// Method to handle closing alerts
OutlineClose(index: number) {
  this.outlineAlerts.splice(index, 1); // Remove the alert from the array
}
solidAlerts: SolidAlert[] = solidALERTS;
solidClose(index: number): void {
  this.solidAlerts.splice(index, 1);  // Remove alert from array
}
shadowAlert = [
  { color: 'primary shadow-sm', title: 'A simple solid primary alert—check it out!' },
  { color: 'primary shadow', title: 'A simple solid primary alert—check it out!' }, // No shadow
  { color: 'primary shadow-lg', title: 'A simple solid primary alert—check it out!'  },
  { color: 'secondary shadow-sm', title: 'A simple solid secondary alert—check it out!'}, // No shadow
  { color: 'secondary ', title: 'A simple solid secondary alert—check it out!'},
  { color: 'secondary', title: 'A simple solid secondary alert—check it out!'}, // No shadow
];

shodowClose(index: number) {
  this.shadowAlert.splice(index, 1); // Remove the alert from the array
}

 getVariant(alert: any) {
    return alert.outline ? `alert-outline-${alert.color}` : `solid-${alert.color}`;
  }

  DiffshadowAlert = [
    { title: 'A simple primary alert with small shadow—check it out!', color: 'primary shadow-sm', },
    { title: 'A simple primary alert with normal shadow—check it out!', color: 'primary shadow',  },
    { title: 'A simple primary alert with large shadow—check it out!', color: 'primary shadow-lg', },
    { title: 'A simple secondary alert with small shadow—check it out!', color: 'secondary shadow-sm', },
    { title: 'A simple secondary alert with normal shadow—check it out!', color: 'secondary shadow',  },
    { title: 'A simple secondary alert with large shadow—check it out!', color: 'secondary shadow-lg', },
  ];
  differentShadowsAlertsClose(index: number) {
    this.DiffshadowAlert.splice(index, 1); // Remove the alert from the array
  }

  LinkAlerts = [
    { variant: 'primary', title: 'A simple primary alert with'},
    { variant: 'secondary', title: 'A simple secondary alert with'},
    { variant: 'success', title: 'A simple success alert with'},
    { variant: 'danger', title: 'A simple danger alert with'},
    { variant: 'warning', title: 'A simple warning alert with'},
    { variant: 'info', title: 'A simple info alert with'},
    { variant: 'light', title: 'A simple light alert with'},
    { variant: 'dark', title: 'A simple dark alert with'},
  ];

  handleClose(index: number) {
    this.LinkAlerts.splice(index, 1); // Remove the alert from the list when closed
  }


  solidroundedAlerts = [
    { color: 'primary rounded-pill', title: 'A simple solid Rounded primary alert—check it out!', },
    { color: 'secondary rounded-pill', title: 'A simple solid Rounded secondary alert—check it out!' }, // No shadow
    { color: 'warning rounded-pill', title: 'A simple solid Rounded warning alert—check it out!' }, // No shadow
    { color: 'danger rounded-pill', title: 'A simple solid Rounded danger alert—check it out!' },
  ];

  roundedclose(index: number) {
    this.solidroundedAlerts.splice(index, 1); // Remove the alert from the array
  }

  roundedoutlineAlerts = [
    { color: 'outline-primary rounded-pill', title: 'A simple Rounded  outline primary alert—check it out!' },
    { color: 'outline-secondary rounded-pill', title: 'A simple Rounded outline secondary alert—check it out!' },
    { color: 'outline-warning rounded-pill', title: 'A simple Rounded outline warning alert—check it out!' },
    { color: 'outline-danger rounded-pill', title: 'A simple Rounded outline danger alert—check it out!' },

  ];
  // Method to handle closing alerts
  RoundedOutlineClose(index: number) {
    this.roundedoutlineAlerts.splice(index, 1); // Remove the alert from the array
  }

  roundedDefaultAlert = [
    { color: 'primary rounded-pill', title: 'A simple primary alert—check it out!' },
    { color: 'secondary rounded-pill', title: 'A simple secondary alert—check it out!' },
    { color: 'warning rounded-pill', title: 'A simple warning alert—check it out!' },
    { color: 'danger rounded-pill', title: 'A simple danger alert—check it out!' },
  ];

  roundeDefaultClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundeDefaultAlerts.splice(index, 1);
  }

  CustomeButtonAlerts = [
    { color: 'primary rounded-pill', title: 'A simple primary alert—check it out!' },
    { color: 'secondary rounded-pill', title: 'A simple secondary alert—check it out!' },
    { color: 'warning rounded-pill', title: 'A simple warning alert—check it out!' },
    { color: 'danger rounded-pill', title: 'A simple danger alert—check it out!' },
  ];

  CustomeButtonClose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomeButtonAlerts.splice(index, 1);
  }

  imageAlerts = [
    {  type: 'primary alert-img  rounded-pill flex-wrap', message: 'A simple primary alert with image—check it out!', image: './assets/images/faces/3.jpg' },
    {  type: 'secondary alert-img  rounded-pill flex-wrap', message: 'A simple secondary alert with image—check it out!', image: './assets/images/faces/5.jpg' },
    {  type: 'warning alert-img  rounded-pill flex-wrap', message: 'A simple warning alert with image—check it out!', image: './assets/images/faces/8.jpg' },
    {  type: 'danger alert-img  rounded-pill flex-wrap', message: 'A simple danger alert with image—check it out!', image: './assets/images/faces/11.jpg' },
    {  type: 'info alert-img  rounded-pill flex-wrap', message: 'A simple info alert with image—check it out!', image: './assets/images/faces/13.jpg' },
    {  type: 'light alert-img  rounded-pill flex-wrap', message: 'A simple light alert with image—check it out!', image: './assets/images/faces/10.jpg' },
    {  type: 'dark alert-img  rounded-pill flex-wrap', message: 'A simple dark alert with image—check it out!', image: './assets/images/faces/15.jpg' }
  ];

  imageAlertsClose(index: number) {
    this.imageAlerts.splice(index, 1); // Remove the alert from the array
  }

  imageSizeAlertsClose(index: number) {
    this.imageSizeAlerts.splice(index, 1); // Remove the alert from the array
  }

  additionalInfoClose(index: number) {
    this.additionalInfoAlert.splice(index, 1); // Remove the alert from the array
  }

  additionalInfoAlert = [
    {
      variant: 'primary p-0 overflow-hidden' ,
      title: 'Thank you for reporting this.',
      message: 'We appreciate you letting us know the bug in the template and for warning us about future consequences.',
      linkTitle :'Visit for support for queries ?'
    },
    {
      variant: 'secondary p-0 overflow-hidden',
      title: 'Thank you for reporting this.',
      message: 'We appreciate you letting us know the bug in the template and for warning us about future consequences.',
       linkTitle :'Visit for support for queries ?'
    },
    {
      variant: 'success p-0 overflow-hidden',
      title: 'Thank you for reporting this.',
      message: 'We appreciate you letting us know the bug in the template and for warning us about future consequences.',
      linkTitle :'Visit for support for queries ?'
    },
    {
      variant: 'warning p-0 overflow-hidden',
      title: 'Thank you for reporting this.',
      message: 'We appreciate you letting us know the bug in the template and for warning us about future consequences.',
      linkTitle :'Visit for support for queries ?'
    },
  ];


///////
  livealerts: string[] = []; // Initialize livealerts as an empty array

  removeAlert(index: number) {
    this.livealerts.splice(index, 1);
  }

  showAlert() {
    this.livealerts.push('Nice, you triggered this alert message!');
  }
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  closeAlerts(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }

  CustomizedIconAlerts: Alert1[] = CustomizedIconALERTS;

  roundeDefaultAlerts: Alert[] = roundeDefaultALERTS;

  CustomizedButtonAlerts: Alert1[] = CustomizedButtonALERTS;

  solidroundedClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidroundedAlerts.splice(index, 1);
  }

  customizedIconAlertclose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomizedIconAlerts.splice(index, 1);
  }

  roundedoutlineClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundedoutlineAlerts.splice(index, 1);
  }

  customizedAlertclose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomizedButtonAlerts.splice(index, 1);
  }
  customizedImageSizeAlertclose(index: number) {
    // Remove the alert from the array based on the index
    this.imageSizeAlerts.splice(index, 1);
  }

  imageSizeAlerts = [
    {  type: 'primary alert-img   flex-wrap', message: 'A simple primary alert with image—check it out!', image: './assets/images/faces/3.jpg', avatarClass: 'avatar-xs' },
    {  type: 'secondary alert-img   flex-wrap', message: 'A simple secondary alert with image—check it out!', image: './assets/images/faces/5.jpg', avatarClass: 'avatar-sm' },
    {  type: 'warning alert-img   flex-wrap', message: 'A simple warning alert with image—check it out!', image: './assets/images/faces/8.jpg', avatarClass: '' },
    {  type: 'danger alert-img   flex-wrap', message: 'A simple danger alert with image—check it out!', image: './assets/images/faces/11.jpg', avatarClass: 'avatar-md' },
    {  type: 'info alert-img   flex-wrap', message: 'A simple info alert with image—check it out!', image: './assets/images/faces/13.jpg', avatarClass: 'avatar-lg' },
    {  type: 'dark alert-img   flex-wrap', message: 'A simple dark alert with image—check it out!', image: './assets/images/faces/14.jpg', avatarClass: 'avatar-xl' }
  ];

  ImageSizeAlertclose(index: number) {
    // Remove the alert from the array based on the index
    this.imageSizeAlerts.splice(index, 1);
  }



  removeRow(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }

  public isClosed = false;
  public isClosed1 = false;
  public isClosed2 = false;
  public isClosed3 = false;
  public isClosed4 = false;
  public isClosed5 = false;
  public isClosed6 = false;
  public isClosed7 = false;
  public isClosed8 = false;
  public isClosed9 = false;
  public isClosed10 = false;
  public isClosed11 = false;
  public isClosed12 = false;
  public isClosed13 = false;
  public isClosedA = false;
  public isClosedB = false;
  public isClosedC = false;
  public isClosedD = false;

  Closetoggle(item: any) {
    if (item == 'zero') {
      this.isClosed = true;
    }
    if (item == 'one') {
      this.isClosed1 = true;
    }
    if (item == 'two') {
      this.isClosed2 = true;
    }
    if (item == 'three') {
      this.isClosed3 = true;
    }
    if (item == 'four') {
      this.isClosed4 = true;
    }
    if (item == 'five') {
      this.isClosed5 = true;
    }
    if (item == 'six') {
      this.isClosed6 = true;
    }
    if (item == 'seven') {
      this.isClosed7 = true;
    }
    if (item == 'eight') {
      this.isClosed8 = true;
    }
    if (item == 'nine') {
      this.isClosed9 = true;
    }
    if (item == 'ten') {
      this.isClosed10 = true;
    }
    if (item == 'eleven') {
      this.isClosed11 = true;
    }
    if (item == 'twelve') {
      this.isClosed12 = true;
    }
    if (item == 'A') {
      this.isClosedA = true;
    }
    if (item == 'B') {
      this.isClosedB = true;
    }
    if (item == 'C') {
      this.isClosedC = true;
    }
    if (item == 'D') {
      this.isClosedD = true;
    }
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
  private _message$ = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  @ViewChild('staticAlert', { static: false }) staticAlert: NgbAlert | any;
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert:
    | NgbAlert
    | any;

  constructor( private sanitizer: DomSanitizer) {

    // setTimeout(() => this.staticAlert.close(), 20000);
    this.reset();

    this._message$
      .pipe(
        takeUntilDestroyed(),
        tap((message) => (this.successMessage = message)),
        debounceTime(5000)
      )
      .subscribe(() => this.selfClosingAlert?.close());
  }

  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  public changeSuccessMessage() {
    this._message$.next(`${new Date()} - Message successfully changed.`);
  }
}

