import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { NgbAccordion } from '../../../@spk/spk-reusable-plugins/ngb-accordion/ngb-accordion';

@Component({
    selector: 'app-faqs',
    templateUrl: './faqs.html',
    styleUrls: ['./faqs.scss'],
    standalone: true,
    imports: [SharedModule, NgbModule, NgbAccordion]
})
export class Faqs implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Faqs1=[
    {
      title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-information-line fw-medium fs-5 text-primary"></i></span></div> What is this website about?',
      body: "This website provides information, services, and tools related to [your niche].",
      headingId: 'headingcustomicon2One',
      collapseId: 'collapsecustomicon2One',
      collapsed: false,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-user-add-line fw-medium fs-5 text-primary"></i></span></div> How do I create an account?',
       body: 'Click on the "Sign Up" button, fill in your details, and verify your email.',
       headingId: 'headingcustomicon2Two',
       collapseId: 'collapsecustomicon2Two',
       collapsed: true,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-money-dollar-circle-line fw-medium fs-5 text-primary"></i></span></div> Is this website free to use?',
       body: " Some features are free, while premium features may require a subscription.",
       headingId: 'headingcustomicon2Three',
       collapseId: 'collapsecustomicon2Three' ,
       collapsed: true,
      },
      {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-headphone-line fw-medium fs-5 text-primary"></i></span></div> How can I contact support?',
        body: 'You can reach our support team via the "Contact Us" page or email us at [support email].',
        headingId: 'headingcustomicon2Four',
        collapseId: 'collapsecustomicon2Four' ,
        collapsed: true,
       },
       {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-shield-check-line fw-medium fs-5 text-primary"></i></span></div> Is my personal data safe on this website?',
        body: "Yes, we use encryption and follow strict security measures to protect your data.",
        headingId: 'headingcustomicon2Five',
        collapseId: 'collapsecustomicon2Five' ,
        collapsed: true,
       }
  ]
  Faqs2=[
    {
      title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-lock-password-line fw-medium fs-5 text-primary"></i></span></div> How  do I reset my password?',
      body: 'Click on "Forgot Password" on the login page and follow the instructions.',
      headingId: 'headingcustomicon2Six',
      collapseId: 'collapsecustomicon2Six',
      collapsed: false,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-mail-line fw-medium fs-5 text-primary"></i></span></div> Can I change my registered email?',
       body: 'Yes, go to account settings and update your email address.',
       headingId: 'headingcustomicon2Seven',
       collapseId: 'collapsecustomicon2Seven',
       collapsed: true,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-mail-send-line fw-medium fs-5 text-primary"></i></span></div> Why am I not receiving the verification email?',
       body: " Check your spam folder or try resending the email from the login page.",
       headingId: 'headingcustomicon2Eight',
       collapseId: 'collapsecustomicon2Eight' ,
       collapsed: true,
      },
      {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-delete-bin-line fw-medium fs-5 text-primary"></i></span></div> Can I delete my account permanently?',
        body: 'Yes, you can request account deletion from your account settings.',
        headingId: 'headingcustomicon2Nine',
        collapseId: 'collapsecustomicon2Nine' ,
        collapsed: true,
       },
       {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-user-settings-line fw-medium fs-5 text-primary"></i></span></div> How do I update my profile information?',
        body: "Go to your profile page and edit your details as needed.",
        headingId: 'headingcustomicon2Ten',
        collapseId: 'collapsecustomicon2Ten' ,
        collapsed: true,
       }
  ]
  Faqs3=[
    {
      title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-bank-card-line fw-medium fs-5 text-primary"></i></span></div> What payment methods do you accept?',
      body: 'We accept credit/debit cards, PayPal, and other online payment gateways.',
      headingId: 'headingcustomicon2Eleven',
      collapseId: 'collapsecustomicon2Eleven',
      collapsed: false,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-file-text-line fw-medium fs-5 text-primary"></i></span></div> How can I get an invoice for my purchase?',
       body: ' You can download invoices from the "Billing" section in your account.',
       headingId: 'headingcustomicon2Twelve',
       collapseId: 'headingcustomicon2Twelve',
       collapsed: true,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-refund-line fw-medium fs-5 text-primary"></i></span></div>  Do you offer refunds?',
       body: "  Refunds are subject to our refund policy. Please check our terms and conditions.",
       headingId: 'headingcustomicon2Thirteen',
       collapseId: 'collapsecustomicon2Thirteen' ,
       collapsed: true,
      },
      {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-shield-check-line fw-medium fs-5 text-primary"></i></span></div> Is my payment information secure?',
        body: 'Yes, all transactions are processed securely using encrypted payment gateways.',
        headingId: 'headingcustomicon2Fourteen',
        collapseId: 'collapsecustomicon2Fourteen' ,
        collapsed: true,
       },
       {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-close-circle-line fw-medium fs-5 text-primary"></i></span></div> Can I cancel my subscription anytime?',
        body: "Yes, you can cancel your subscription from your account settings.",
        headingId: 'headingcustomicon2Fifteen',
        collapseId: 'collapsecustomicon2Fifteen' ,
        collapsed: true,
       }
  ]
  Faqs4=[
    {
      title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-search-line fw-medium fs-5 text-primary"></i></span></div> How do I search for specific content on the website?',
      body: ' Use the search bar at the top of the page to find what you need.',
      headingId: 'headingcustomicon2Sixteen',
      collapseId: 'collapsecustomicon2Sixteen',
      collapsed: false,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-bookmark-line fw-medium fs-5 text-primary"></i></span></div> Can I save my favorite content for later?',
       body: '  Yes, you can bookmark or save items to your profile for easy access.',
       headingId: 'headingcustomicon2Seventeen',
       collapseId: 'collapsecustomicon2Seventeen',
       collapsed: true,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-bug-line fw-medium fs-5 text-primary"></i></span></div> How do I report a bug or issue?',
       body: ' You can report bugs via the "Report Issue" form in the help section.',
       headingId: 'headingcustomicon2Eighteen',
       collapseId: 'collapsecustomicon2Eighteen' ,
       collapsed: true,
      },
      {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-smartphone-line fw-medium fs-5 text-primary"></i></span></div> Does the website support mobile devices?',
        body: 'Yes, the website is fully responsive and works on all devices.',
        headingId: 'headingcustomicon2Nineteen',
        collapseId: 'collapsecustomicon2Nineteen' ,
        collapsed: true,
       },
       {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-share-line fw-medium fs-5 text-primary"></i></span></div>  Can I share website content on social media?',
        body: "Yes, use the share buttons to post content on your preferred platform.",
        headingId: 'headingcustomicon2Twenty',
        collapseId: 'collapsecustomicon2Twenty' ,
        collapsed: true,
       }
  ]
  Faqs5=[
    {
      title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-time-line fw-medium fs-5 text-primary"></i></span></div> Why is the website not loading properly?',
      body: ' Try clearing your browser cache or switching to a different browser.',
      headingId: 'headingcustomicon2TwentyOne',
      collapseId: 'collapsecustomicon2TwentyOne',
      collapsed: false,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-wifi-off-line fw-medium fs-5 text-primary"></i></span></div> What should I do if I experience slow loading times?',
       body: '  Check your internet connection and try reloading the page.',
       headingId: 'headingcustomicon2TwentyTwo',
       collapseId: 'collapsecustomicon2TwentyTwo',
       collapsed: true,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-notification-2-line fw-medium fs-5 text-primary"></i></span></div> How do I enable notifications on this website?',
       body: ' Allow notifications when prompted by your browser or enable them in settings.',
       headingId: 'headingcustomicon2TwentyThree',
       collapseId: 'collapsecustomicon2TwentyThree' ,
       collapsed: true,
      },
      {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-apps-line fw-medium fs-5 text-primary"></i></span></div> Is there a mobile app for this website?',
        body: 'Yes, the website is fully responsive and works on all devices.',
        headingId: 'headingcustomicon2TwentyFour',
        collapseId: 'collapsecustomicon2TwentyFour' ,
        collapsed: true,
       },
       {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-flag-line fw-medium fs-5 text-primary"></i></span></div> How can I report inappropriate content?',
        body: 'Click the "Report" button next to the content or contact support.',
        headingId: 'headingcustomicon2TwentyFive',
        collapseId: 'collapsecustomicon2TwentyFive' ,
        collapsed: true,
       }
  ]
  Faqs6=[
    {
      title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-shield-keyhole-line fw-medium fs-5 text-primary"></i></span></div> How do you protect my personal data?',
      body: ' We use encryption, secure servers, and strict access controls to protect your data.',
      headingId: 'headingcustomicon2TwentySix',
      collapseId: 'collapsecustomicon2TwentySix',
      collapsed: false,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-eye-line fw-medium fs-5 text-primary"></i></span></div> Can I control who sees my information?',
       body: '  Yes, you can adjust privacy settings in your account preferences.',
       headingId: 'headingcustomicon2TwentySeven',
       collapseId: 'collapsecustomicon2TwentySeven',
       collapsed: true,
     },
    {
       title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-forbid-line fw-medium fs-5 text-primary"></i></span></div>  Do you sell my data to third parties?',
       body: ' No, we do not sell or share your personal information without your consent.',
       headingId: 'headingcustomicon2TwentyEight',
       collapseId: 'collapsecustomicon2TwentyEight' ,
       collapsed: true,
      },
      {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-alarm-warning-line fw-medium fs-5 text-primary"></i></span></div> How do I report a security concern?',
        body: 'Contact our security team via the "Report Security Issue" option in the Help section.',
        headingId: 'headingcustomicon2TwentyNine',
        collapseId: 'collapsecustomicon2TwentyNine' ,
        collapsed: true,
       },
       {
        title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-lock-line fw-medium fs-5 text-primary"></i></span></div> What should I do if I suspect unauthorized access to my account?',
        body: '   Change your password immediately and enable two-factor authentication (2FA).',
        headingId: 'headingcustomicon2Thirty',
        collapseId: 'collapsecustomicon2Thirty' ,
        collapsed: true,
       }
  ]
}
