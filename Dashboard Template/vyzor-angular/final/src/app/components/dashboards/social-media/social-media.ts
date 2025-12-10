import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudienceData, AudienceMetricsData, EngagementData, ProfileData } from '../../../shared/data/dashboard/dashboard_charts';
import { SharedModule } from '../../../shared/shared.module';
import { SpkSocialMediaCard } from '../../../@spk/reusable-dashboards/spk-social-media-card/spk-social-media-card';
import { SpkApexChart } from '../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { SpkReusableTables } from '../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SharedModule,CommonModule,SpkSocialMediaCard,SpkApexChart,SpkReusableTables,SpkDropdowns],
  templateUrl: './social-media.html',
  styleUrl: './social-media.scss'
})
export class SocialMedia {
  public ProfileData = ProfileData
  public AudienceData = AudienceData
  public AudienceMetricsData = AudienceMetricsData
  public EngagementData = EngagementData
  dashboardCards = [
    {
      title: 'Total Visitors',
      value: '125,350',
      percentage: '2.38%',
      status: 'Paid',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><g></g><g><g><path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.43,13.53,16.67,13.13z" fill-rule="evenodd"></path></g><g><circle cx="9" cy="8" fill-rule="evenodd" r="4"></circle></g><g><path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24 C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76C14.09,11.9,14.53,12,15,12z" fill-rule="evenodd"></path></g><g><path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z" fill-rule="evenodd"></path></g></g></g></svg>`,
      backgroundClass: 'bg-primary-transparent svg-primary',
      statusClass: 'text-success'
    },
    {
      title: 'Engagement',
      value: '28,754',
      percentage: '1.23%',
      status: 'Pending',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z"></path></svg>`,
      backgroundClass: 'bg-secondary-transparent svg-secondary' ,
      statusClass: 'text-success'
    },
    {
      title: 'Like',
      value: '34,890',
      percentage: '-0.96%',
      status: 'Overdue',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`,
      backgroundClass: 'bg-success-transparent svg-success',
      statusClass: 'text-danger'
    },
    {
      title: 'Bounce Rate',
      value: '15.4%',
      percentage: '6.06%',
      status: 'Pending',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>`,
      backgroundClass: 'bg-info-transparent svg-info',
      statusClass: 'text-success'
    }
  ];

  activities = [
    {
      platform: 'Facebook',
      time: '10:15 AM',
      activityDescription: 'Published new post on "Spring Sale Launch"',
      avatarClass: 'bg-primary-transparent',
      iconClass: 'ri-facebook-line fs-5',
      timeClass: 'bg-primary-transparent'
    },
    {
      platform: 'Instagram',
      time: '3:45 PM',
      activityDescription: 'Uploaded 3 new photos to "Beach Vacation Highlights" album',
      avatarClass: 'bg-secondary-transparent',
      iconClass: 'ri-instagram-line fs-5',
      timeClass: 'bg-secondary-transparent'
    },
    {
      platform: 'LinkedIn',
      time: '11:30 AM',
      activityDescription: 'Updated job position for "Marketing Manager"',
      avatarClass: 'bg-info-transparent',
      iconClass: 'ri-linkedin-box-line fs-5',
      timeClass: 'bg-info-transparent'
    },
    {
      platform: 'Twitter',
      time: '6:00 PM',
      activityDescription: 'Tweeted "Exciting product launch tomorrow!"',
      avatarClass: 'bg-dark-transparent',
      iconClass: 'ri-twitter-x-line fs-5',
      timeClass: 'bg-dark-transparent'
    },
    {
      platform: 'Pinterest',
      time: '11:30 AM',
      activityDescription: 'Pinned new "Holiday Decoration Ideas" board',
      avatarClass: 'bg-danger-transparent',
      iconClass: 'ri-pinterest-line fs-5',
      timeClass: 'bg-danger-transparent'
    }
  ];

  CountriesTable = [
    {header:'S.No'},
    {header:'Country'},
    {header:'Engagement'},
    {header:'Followers'},
  ]

  countryData = [
    {
      rank: 1,
      country: 'United States',
      flag: 'us_flag.jpg',
      total: "15,000",
      change: "35,000",
      percentage: 34.6,
      status: 'success'
    },
    {
      rank: 2,
      country: 'India',
      flag: 'india_flag.jpg',
      total: "12,000",
      change: "25,000",
      percentage: 18.74,
      status: 'danger'
    },
    {
      rank: 3,
      country: 'Canada',
      flag: 'canada_flag.jpg',
      total: "8,500",
      change: "20,000",
      percentage: 16.06,
      status: 'success'
    },
    {
      rank: 4,
      country: 'Germany',
      flag: 'germany_flag.jpg',
      total: "4,800",
      change: "12,500",
      percentage: 53.22,
      status: 'success'
    },
    {
      rank: 5,
      country: 'France',
      flag: 'french_flag.jpg',
      total: "4,000",
      change: "11,000",
      percentage: 31.54,
      status: 'danger'
    }
  ];

  InsightsTable = [
    {header:'Post Name'},
    {header:'Posted'},
    {header:'Platform'},
    {header:'Views'},
    {header:'Action'},
  ]
  socialMediaPosts = [
    {
      id: 'SPK01',
      avatar: './assets/images/media/media-23.jpg',
      title: 'Behind the Scenes',
      date: '02,feb',
      platform: 'Youtube',
      views: '9.5k+',
    },
    {
      id: 'SPK02',
      avatar: './assets/images/media/media-24.jpg',
      title: 'Monday Motivation',
      date: '14,Feb',
      platform: 'Instagram',
      views: '1M+',
    },
    {
      id: 'SPK03',
      avatar: './assets/images/media/media-25.jpg',
      title: 'Travel Diaries',
      date: '13,Feb',
      platform: 'Twitter',
      views: '10k+',
    },
    {
      id: 'SPK04',
      avatar: './assets/images/media/media-26.jpg',
      title: 'Recipe of the Day',
      date: '12,Feb',
      platform: 'Linked In',
      views: '3.5k',
    },
    {
      id: 'SPK05',
      avatar: './assets/images/media/media-27.jpg',
      title: 'Fashion Forward',
      date: '11,Feb',
      platform: 'Pinterest',
      views: '1.6M+',
    }
  ];

  PerformanceTable = [

    {header:'Platform'},
    {header:'Posts'},
    {header:'Likes'},
    {header:'Shares'},
    {header:'Comments'},
    {header:'Impressions'},
    {header:'Followers'},
    {header:'CTR (%)'},
    {header:'Actions'},
  ]
  socialMediaData = [
    {
      id: 1,
      platform: 'Facebook',
      avatar: 'facebook',
      followers: 120,
      views: "8,500",
      likes: "1,200",
      engagementRate: '12.5%',
      comments: 950,
      shares: '35K',
      ctr:"4.2%",
      checked:true,
      badgeClass: 'bg-primary-transparent'
    },
    {
      id: 2,
      platform: 'Instagram',
      avatar: 'instagram',
      followers: 95,
      views: "12,000",
      likes: "2,100",
      engagementRate: '14.3%',
      comments: "1,800",
      shares: '42k',
      ctr:"5.0%",
      checked:false,
      badgeClass: 'bg-secondary-transparent'
    },
    {
      id: 3,
      platform: 'Twitter',
      avatar: 'twitter-x',
      followers: 180,
      views: "5,600",
      likes: "1,500",
      engagementRate: '9.8%',
      comments: "1,000",
      shares: '	28k',
      ctr:"3.5%",
      checked:false,
      badgeClass: 'bg-warning-transparent'
    },
    {
      id: 4,
      platform: 'LinkedIn',
      avatar: 'linkedin-box',
      followers: 75,
      views: "4,200",
      likes: 800,
      engagementRate: '11.2%',
      comments: "600",
      shares: '20k',
      ctr:"3.8%",
      checked:true,
      badgeClass: 'bg-info-transparent'
    },
    {
      id: 5,
      platform: 'YouTube',
      avatar: 'youtube',
      followers: 30,
      views: "22,000",
      likes: "4,000",
      engagementRate: '18.5%',
      comments: "3,800",
      shares: '65k',
      ctr:"7.8%",
      checked:true,
      badgeClass: 'bg-success-transparent'
    },
    {
      id: 6,
      platform: 'Snapchat',
      avatar: 'snapchat',
      followers: 60,
      views: "6,500",
      likes: "1,200",
      engagementRate: '10.1%',
      comments: "900",
      shares: '22k',
      ctr:"3.9%",
      checked:false,
      badgeClass: 'bg-danger-transparent'
    }
  ];

  socialSuggestions = [
    {
      name: 'Socrates Itumay',
      mutualFriends: 3,
      avatar: './assets/images/faces/2.jpg'
    },
    {
      name: 'Ryan Gercia',
      mutualFriends: 1,
      avatar: './assets/images/faces/3.jpg'
    },
    {
      name: 'Prax Bhav',
      mutualFriends: 2,
      avatar: './assets/images/faces/10.jpg'
    },
    {
      name: 'Jackie Chen',
      mutualFriends: 12,
      avatar: './assets/images/faces/12.jpg'
    },
    {
      name: 'Samantha Sam',
      mutualFriends: 6,
      avatar: './assets/images/faces/5.jpg'
    }
  ];
}



