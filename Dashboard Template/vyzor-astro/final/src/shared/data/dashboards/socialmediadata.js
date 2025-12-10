
import face2 from '../../../assets/images/faces/2.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import us_flag from '../../../assets/images/flags/us_flag.jpg';
import french_flag from '../../../assets/images/flags/french_flag.jpg';
import germany_flag from '../../../assets/images/flags/germany_flag.jpg';
import canada_flag from '../../../assets/images/flags/canada_flag.jpg';
import india_flag from '../../../assets/images/flags/india_flag.jpg';
import media23 from '../../../assets/images/media/media-23.jpg';
import media24 from '../../../assets/images/media/media-24.jpg';
import media25 from '../../../assets/images/media/media-25.jpg';
import media26 from '../../../assets/images/media/media-26.jpg';
import media27 from '../../../assets/images/media/media-27.jpg';

// Top Audience Countries


export const Audiencedata = [
    { id: 1, country: 'United States', flag: us_flag, likes: 15000, change: 34.6, count: '35,000' },
    { id: 2, country: 'India', flag: india_flag, likes: 12000, change: -18.74, count: '25,000' },
    { id: 3, country: 'Canada', flag: canada_flag, likes: 8500, change: 16.06, count: '20,000' },
    { id: 4, country: 'Germany', flag: germany_flag, likes: 4800, change: 53.22, count: '12,500' },
    { id: 5, country: 'France', flag: french_flag, likes: 4000, change: -31.54, count: '11,000',borderClass:'border-bottom-0' },
];

// Post Insights


export const Insightsdata = [
    { id: 1, title: 'Behind the Scenes', image: media23, date: '02, Feb', platform: 'Youtube', followers: '9.5k+', platformColor: 'primary' },
    { id: 2, title: 'Monday Motivation', image: media24, date: '14, Feb', platform: 'Instagram', followers: '1M+', platformColor: 'secondary' },
    { id: 3, title: 'Travel Diaries', image: media25, date: '13, Feb', platform: 'Twitter', followers: '10k+', platformColor: 'success' },
    { id: 4, title: 'Recipe of the Day', image: media26, date: '12, Feb', platform: 'Linked In', followers: '3.5k', platformColor: 'warning' },
    { id: 5, title: 'Fashion Forward', image: media27, date: '11, Feb', platform: 'Pinterest', followers: '1.6M+', platformColor: 'primary',borderClass:'border-bottom-0' },
];

//Social Media Performance Overview

export const SocialMediaData = [
    {
        id: "1",
        platform: "Facebook",
        avatar: "ri-facebook-line",
        followers: 120,
        impressions: "8,500",
        clicks: "1,200",
        conversions: 950,
        conversionRate: 12.5,
        reach: "35k",
        growth: "4.2%",
        color: 'primary',
        badgeColor: 'primary'
    },
    {
        id: "2",
        platform: "Instagram",
        avatar: "ri-instagram-line",
        followers: 95,
        impressions: "12,000",
        clicks: "2,100",
        conversions: "1,800",
        conversionRate: 14.3,
        reach: "42k",
        growth: "5.0%",
        color: 'secondary',
        badgeColor: 'secondary'
    },
    {
        id: "3",
        platform: "Twitter",
        avatar: "ri-twitter-x-line",
        followers: 180,
        impressions: "5,600",
        clicks: "1,500",
        conversions: "1,000",
        conversionRate: 9.8,
        reach: "28k",
        growth: "3.5%",
        color: 'warning',
        badgeColor: 'warning'
    },
    {
        id: "4",
        platform: "LinkedIn",
        avatar: "ri-linkedin-box-line",
        followers: 75,
        impressions: "4,200",
        clicks: 800,
        conversions: 600,
        conversionRate: 11.2,
        reach: "20k",
        growth: "3.8%",
        color: 'info',
        badgeColor: 'info'
    },
    {
        id: "5",
        platform: "YouTube",
        avatar: "ri-youtube-line",
        followers: 30,
        impressions: "22,000",
        clicks: "4,000",
        conversions: "3,800",
        conversionRate: 18.5,
        reach: "65k",
        growth: "7.8%",
        color: 'success',
        badgeColor: 'info'
    },
    {
        id: "6",
        platform: "Snapchat",
        avatar: "ri-snapchat-line",
        followers: 60,
        impressions: "6,500",
        clicks: "1,200",
        conversions: 900,
        conversionRate: 10.1,
        reach: "22k",
        growth: "3.9%",
        color: 'danger',
        badgeColor: 'info'
    }
];

//Recent Acivity

export const AcivitySocial = [
    {
        platform: "Facebook",
        time: "10:15 AM",
        activity: 'Published new post on "Spring Sale Launch"',
        icon: "ri-facebook-line",
        badgeColor: "bg-primary-transparent"
    },
    {
        platform: "Instagram",
        time: "3:45 PM",
        activity: 'Uploaded 3 new photos to "Beach Vacation Highlights" album',
        icon: "ri-instagram-line",
        badgeColor: "bg-secondary-transparent"
    },
    {
        platform: "LinkedIn",
        time: "11:30 AM",
        activity: 'Updated job position for "Marketing Manager"',
        icon: "ri-linkedin-box-line",
        badgeColor: "bg-info-transparent"
    },
    {
        platform: "Twitter",
        time: "6:00 PM",
        activity: 'Tweeted "Exciting product launch tomorrow!"',
        icon: "ri-twitter-x-line",
        badgeColor: "bg-dark-transparent"
    },
    {
        platform: "Pinterest",
        time: "11:30 AM",
        activity: 'Pinned new "Holiday Decoration Ideas" board',
        icon: "ri-pinterest-line",
        badgeColor: "bg-danger-transparent"
    }
];


//Suggestions

export const Suggestion = [
    {
        name: "Socrates Itumay",
        mutualFriends: "3 Mutual Friends",
        imageSrc: face2
    },
    {
        name: "Ryan Gercia",
        mutualFriends: "1 Mutual Friend",
        imageSrc: face3
    },
    {
        name: "Prax Bhav",
        mutualFriends: "2 Mutual Friends",
        imageSrc: face10
    },
    {
        name: "Jackie Chen",
        mutualFriends: "12 Mutual Friends",
        imageSrc: face12
    },
    {
        name: "Samantha Sam",
        mutualFriends: "6 Mutual Friends",
        imageSrc: face5
    }
];




export const SocialCards = [
    {
        id: 1,
        title: "Total Visitors",
        value: "125,350",
        percent: "2.38%",
        percentColor: "success",
        svgColor: "primary",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><g></g><g><g><path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.43,13.53,16.67,13.13z" fillRule="evenodd"></path></g><g><circle cx="9" cy="8" fillRule="evenodd" r="4"></circle></g><g><path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24 C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76C14.09,11.9,14.53,12,15,12z" fillRule="evenodd"></path></g><g><path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z" fillRule="evenodd"></path></g></g></g></svg>`
        ),
    },
    {
        id: 2,
        title: "Engagement",
        value: "28,754",
        percent: "1.23%",
        percentColor: "success",
        svgColor: "secondary",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z"></path></svg>`
        ),
    },
    {
        id: 3,
        title: "Like",
        value: "34,890",
        percent: "0.96%",
        percentColor: "danger",
        svgColor: "success",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`
        ),
    },
    {
        id: 4,
        title: "Bounce Rate",
        value: "15.4%",
        percent: "6.06%",
        percentColor: "success",
        svgColor: "info",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>`
        ),
    },
];


