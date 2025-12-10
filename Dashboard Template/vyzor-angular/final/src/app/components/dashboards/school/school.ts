import { Component } from '@angular/core';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AttendanceData, SchoolRevenue, studentsData } from '../../../shared/data/dashboard/dashboard_charts';
import { SharedModule } from '../../../shared/shared.module';
import { SpkApexChart } from '../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { SpkReusableTables } from '../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkSchoolCard } from '../../../@spk/reusable-dashboards/spk-school-card/spk-school-card';


@Component({
  selector: 'app-school',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,CommonModule,NgbTooltipModule,SpkApexChart,SpkReusableTables,SpkDropdowns,SpkSchoolCard],
  templateUrl: './school.html',
  styleUrl: './school.scss'
})
export class School {

  public SchoolRevenue = SchoolRevenue;
  public studentsData = studentsData;
  public AttendanceData = AttendanceData

  cards = [
    {
      title: 'Students',
      value: '28,754',
      trend: '12.75%',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>`,
      bgColor: 'primary',
      trendColor: 'success'
    },
    {
      title: 'Teachers',
      value: '385',
      trend: '8.65%',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M9,12c0.83,0,1.5,0.67,1.5,1.5S9.83,15,9,15s-1.5-0.67-1.5-1.5S8.17,12,9,12z M12,18H6v-0.75c0-1,2-1.5,3-1.5 s3,0.5,3,1.5V18z M13,9h-2V4h2V9z M18,16.5h-4V15h4V16.5z M18,13.5h-4V12h4V13.5z"></path></g></svg>`,
      bgColor: 'secondary',
      trendColor: 'success'
    },
    {
      title: 'Awards',
      value: '32',
      trend: '0.75%',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><rect fill="none" height="24" width="24"></rect><path d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M19,8 c0,1.3-0.84,2.4-2,2.82V7h2V8z"></path></svg>`,
      bgColor: 'success',
      trendColor: 'danger'
    },
    {
      title: 'Earning',
      value: '$12,765,233',
      trend: '4.07%',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12.88,17.76V19h-1.75v-1.29 c-0.74-0.18-2.39-0.77-3.02-2.96l1.65-0.67c0.06,0.22,0.58,2.09,2.4,2.09c0.93,0,1.98-0.48,1.98-1.61c0-0.96-0.7-1.46-2.28-2.03 c-1.1-0.39-3.35-1.03-3.35-3.31c0-0.1,0.01-2.4,2.62-2.96V5h1.75v1.24c1.84,0.32,2.51,1.79,2.66,2.23l-1.58,0.67 c-0.11-0.35-0.59-1.34-1.9-1.34c-0.7,0-1.81,0.37-1.81,1.39c0,0.95,0.86,1.31,2.64,1.9c2.4,0.83,3.01,2.05,3.01,3.45 C15.9,17.17,13.4,17.67,12.88,17.76z"></path></g></svg>`,
      bgColor: 'warning',
      trendColor: 'success'
    }
  ];

  events = [
    {
      title: 'School Timings Update',
      date: 'Mar 10, 2025',
      icon: 'ti ti-alarm',
      description: 'New school hours are now in effect. Check the updated schedule.',
      bgColor: 'primary'
    },
    {
      title: 'Exam Guidelines',
      date: 'March 18, 2025',
      icon: 'ti ti-file-text',
      description: 'Students must adhere to exam rules and bring valid ID cards.',
      bgColor: 'secondary'
    },
    {
      title: 'Lost & Found',
      date: 'March 20, 2025',
      icon: 'ti ti-search',
      description: 'A wallet was found near the library. Contact the admin office to claim.',
      bgColor: 'warning'
    },
    {
      title: 'School Uniform',
      date: 'March 25, 2025',
      icon: 'ti ti-hanger-2',
      description: 'Students must follow proper uniform guidelines.',
      bgColor: 'info'
    },
    {
      title: 'Canteen Menu Change',
      date: 'March 28, 2025',
      icon: 'ti ti-tools-kitchen',
      description: 'The new weekly cafeteria menu is now available.',
      bgColor: 'success'
    },
    {
      title: 'Emergency Update',
      date: 'March 25, 2025',
      icon: 'ti ti-phone',
      description: 'Parents must update emergency contact details in the portal.',
      bgColor: 'danger'
    }
  ];
  activities = [
    {
      name: 'Aarav Sharma',
      dateBg:'primary',
      date: 'Mar 10, 2025',
      description: 'Submitted the Math Assignment on time',
      avatar: './assets/images/faces/12.jpg'
    },
    {
      name: 'Sophia Patel',
      dateBg:'secondary',
      date: 'Mar 11, 2025',
      description: 'Borrowed "Physics Essentials" from the library',
      avatar: './assets/images/faces/2.jpg'
    },
    {
      name: 'Ryan Verma',
      dateBg:'warning',
      date: 'Mar 11, 2025',
      description: 'Won 1st place in the Inter-School Debate Competition',
      avatar: '',
      initials: 'RV', // For students without an image
      avatarBgColor: 'bg-warning'
    },
    {
      name: 'Neha Kapoor',
      dateBg:'info',
      date: 'Mar 13, 2025',
      description: 'Uploaded a new Art Project for review.',
      avatar: './assets/images/faces/5.jpg'
    },
    {
      name: 'Karan Singh',
      dateBg:'success',
      date: 'Mar 14, 2025',
      description: 'Missed the deadline for the Science Project Submission.',
      avatar: './assets/images/faces/15.jpg'
    }
  ];

  students = [
    {
      name: 'Aarav Sharma',
      grade: 'Grade-10',
      gpa: 9.8,
      achievementBg:'primary',
      achievement: 'Science Olympiad Winner',
      avatar: './assets/images/faces/13.jpg'
    },
    {
      name: 'Sophia Patel',
      grade: 'Grade-9',
      gpa: 9.7,
      achievementBg:'secondary',
      achievement: 'Best Speaker in Debate',
      avatar: './assets/images/faces/5.jpg'
    },
    {
      name: 'Ryan Verma',
      grade: 'Grade-12',
      gpa: 9.6,
      achievementBg:'warning',
      achievement: 'Top Scorer in Math',
      avatar: './assets/images/faces/3.jpg'
    },
    {
      name: 'Neha Kapoor',
      grade: 'Grade-11',
      gpa: 9.5,
      achievementBg:'info',
      achievement: 'Art Competition Champion',
      avatar: './assets/images/faces/7.jpg'
    },
    {
      name: 'Karan Singh',
      grade: 'Grade-8',
      gpa: 9.4,
      achievementBg:'success',
      achievement: 'Chess Tournament Winner',
      avatar: './assets/images/faces/14.jpg'
    }
  ];
  studentsFees = [
    {
      id: '#SP01',
      name: 'Aarav Sharma',
      feeType: 'Tuition Fees',
      status: 'Paid',
      avatar: './assets/images/faces/12.jpg'
    },
    {
      id: '#SP02',
      name: 'Sophia Patel',
      feeType: 'Library Fees',
      status: 'Pending',
      avatar: './assets/images/faces/4.jpg'
    },
    {
      id: '#SP03',
      name: 'Ryan Verma',
      feeType: 'Exam Fees',
      status: 'Paid',
      avatar: './assets/images/faces/15.jpg'
    },
    {
      id: '#SP04',
      name: 'Neha Kapoor',
      feeType: 'Sports Fees',
      status: 'Overdue',
      avatar: './assets/images/faces/8.jpg'
    },
    {
      id: '#SP05',
      name: 'Karan Singh',
      feeType: 'Lab Fees',
      status: 'Paid',
      avatar: './assets/images/faces/10.jpg'
    }
  ];

  TransactionsHeader = [
    {header:'Student ID'},
    {header:'Name'},
    {header:'Grade'},
    {header:'Fee Status'},
    {header:'Attendance (%)'},
    {header:'Marks (%)'},
    {header:'Last Payment Date'},
    {header:'Total Fees Paid'},
   ]
   studentsSummary = [
    {
      id: 'SPK01',
      name: 'Aarav Sharma',
      grade: 10,
      status: 'Paid',
      performance: {
        current: '95%',
        previous: '92%'
      },
      date: 'March 1, 2025',
      amount: '₹50,000',
      avatar: './assets/images/faces/11.jpg'
    },
    {
      id: 'SPK02',
      name: 'Sophia Patel',
      grade: 9,
      status: 'Pending',
      performance: {
        current: '88%',
        previous: '85%'
      },
      date: 'January 15, 2025',
      amount: '₹20,000',
      avatar: './assets/images/faces/2.jpg'
    },
    {
      id: 'SPK03',
      name: 'Ryan Verma',
      grade: 12,
      status: 'Overdue',
      performance: {
        current: '80%',
        previous: '78%'
      },
      date: 'February 10, 2025',
      amount: '₹40,000',
      avatar: './assets/images/faces/14.jpg'
    },
    {
      id: 'SPK04',
      name: 'Karan Singh',
      grade: 8,
      status: 'Paid',
      performance: {
        current: '70%',
        previous: '65%'
      },
      date: 'March 5, 2025',
      amount: '₹25,000',
      avatar: './assets/images/faces/13.jpg'
    },
    {
      id: 'SPK05',
      name: 'Sia Thrills',
      grade: 8,
      status: 'Paid',
      performance: {
        current: '40%',
        previous: '75%'
      },
      date: 'March 8, 2025',
      amount: '₹22,000',
      avatar: './assets/images/faces/3.jpg'
    },
    {
      id: 'SPK06',
      name: 'Aditi Rao',
      grade: 10,
      status: 'Pending',
      performance: {
        current: '85%',
        previous: '88%'
      },
      date: 'February 25, 2025',
      amount: '₹30,000',
      avatar: './assets/images/faces/15.jpg'
    }
  ];
}
