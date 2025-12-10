
import us_flag from '../../../assets/images/flags/us_flag.jpg';
import argentina_flag from '../../../assets/images/flags/argentina_flag.jpg';
import italy_flag from '../../../assets/images/flags/italy_flag.jpg';
import russia_flag from '../../../assets/images/flags/russia_flag.jpg';
import spain_flag from '../../../assets/images/flags/spain_flag.jpg';
import uae_flag from '../../../assets/images/flags/uae_flag.jpg';
import germany_flag from '../../../assets/images/flags/germany_flag.jpg';
import canada_flag from '../../../assets/images/flags/canada_flag.jpg';
import india_flag from '../../../assets/images/flags/india_flag.jpg';

import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import face15 from '../../../assets/images/faces/15.jpg';

import chrome from "../../../assets/images/browsers/chrome.png";
import edge from "../../../assets/images/browsers/edge.png";
import firefox from "../../../assets/images/browsers/firefox.png";
import opera from "../../../assets/images/browsers/opera.png";
import safari from "../../../assets/images/browsers/safari.png";
import uc from "../../../assets/images/browsers/uc.png";


export const AnalyticData = [
    {
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"></path></g></svg>`
        ),
        svgColor: "primary",
        title: "Total Users",
        value: "42,643",
        icon: "ti ti-arrow-narrow-up me-1",
        iconColor: "success",
        percent: "0.45%",
        year: "This Year",
    },
    {
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"></path></svg>`
        ),
        svgColor: "secondary",
        title: "Total Sessions",
        value: "143K",
        icon: "ti ti-arrow-narrow-up me-1",
        iconColor: "success",
        percent: "2.76%",
        year: "This Year",
    },
    {
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><g><path d="M7.5,11C9.43,11,11,9.43,11,7.5S9.43,4,7.5,4S4,5.57,4,7.5S5.57,11,7.5,11z M7.5,6C8.33,6,9,6.67,9,7.5S8.33,9,7.5,9 S6,8.33,6,7.5S6.67,6,7.5,6z"></path></g></g><g><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)" width="20.63" x="1.69" y="11"></rect></g><g><g><path d="M16.5,13c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S18.43,13,16.5,13z M16.5,18 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S17.33,18,16.5,18z"></path></g></g></g></g></svg>`
        ),
        svgColor: "success",
        title: "Bounce Rate",
        value: "91.6%",
        icon: "ti ti-arrow-narrow-up me-1",
        iconColor: "success",
        percent: "3.85%",
        year: "This Year",
    },
    {
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><g><rect height="2" width="6" x="9" y="1"></rect><path d="M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9 c0,4.97,4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M13,14h-2V8h2V14z"></path></g></g></svg>`
        ),
        svgColor: "warning",
        title: "Avg Session Duration",
        value: "2m 27s",
        icon: "ti ti-arrow-narrow-down me-1",
        iconColor: "danger",
        percent: "2.44%",
        year: "This Year",
    },
];



export const Devices = [
    { label: "Mobile", percentage: "1,754", border: true },
    { label: "Tablet", percentage: "1,234", border: true },
    { label: "Desktop", percentage: "878" },
];


//Visitors By Countries

export const CountryData = [
    {
        rank: 1,
        country: "USA",
        flagUrl: us_flag,
        percentageChange: "2.15%",
        count: 45234,
    },
    {
        rank: 2,
        country: "Argentina",
        flagUrl: argentina_flag,
        percentageChange: "1.62%",
        count: 12234,
    },
    {
        rank: 3,
        country: "Italy",
        flagUrl: italy_flag,
        percentageChange: "-0.85%",
        count: 7234,
    },
    {
        rank: 4,
        country: "Russia",
        flagUrl: russia_flag,
        percentageChange: "3.51%",
        count: 3543,
    },
    {
        rank: 5,
        country: "Spain",
        flagUrl: spain_flag,
        percentageChange: "0.56%",
        count: 2463,
    },
    {
        rank: 6,
        country: "Uae",
        flagUrl: uae_flag,
        percentageChange: "1.92%",
        count: 1832,
    },
];

//Top Campaigns

export const InfluencerData = [
    {
        name: "Leo Phillips",
        role: "Influencer",
        avatarUrl: face1,
        earnings: "$12,465",
        percentage: "23.3%",
        status: "On process",
        percentageColor:'primary'
    },
    {
        name: "Noah Russell",
        role: "Influencer",
        avatarUrl: face2,
        earnings: "$3,576",
        percentage: "19.4%",
        status: "Achieved",
        percentageColor:'secondary'
    },
    {
        name: "Henry Morgan",
        role: "Youtuber",
        avatarUrl: face3,
        earnings: "$12,764",
        percentage: "12.76%",
        status: "On Process",
        percentageColor:'success'
    },
    {
        name: "Ava Taylor",
        role: "Content Creator",
        avatarUrl: face4,
        earnings: "$13,864",
        percentage: "16.78%",
        status: "Achieved",
        percentageColor:'warning'
    },
    {
        name: "Liam Parker",
        role: "Youtuber",
        avatarUrl: face5,
        earnings: "$9,756",
        percentage: "6.13%",
        status: "Achieved",
        percentageColor:'info',
        borderClass:'border-bottom-0'
    },
];

//Engagement Metrics

export const Engagementdata = [
    {
        rank: 1,
        name: "John Doe",
        avatarUrl: face12,
        countryFlagUrl: us_flag,
        country: "United States",
        clicks: 120,
        conversionRate: "45%",
        percentage: "5.2%",
        views:'350'
    },
    {
        rank: 2,
        name: "Jane Smith",
        avatarUrl: face1,
        countryFlagUrl: germany_flag,
        country: "Germany",
        clicks: 95,
        conversionRate: "38%",
        percentage: "6.8%",
        views:'240'
    },
    {
        rank: 3,
        name: "Chris Johnson",
        avatarUrl:face14,
        countryFlagUrl: canada_flag,
        country: "Canada",
        clicks: 110,
        conversionRate: "40%",
        percentage: "4.5%",
        views:'290'
    },
    {
        rank: 4,
        name: "Emily Davis",
        avatarUrl: face4,
        countryFlagUrl: argentina_flag,
        country: "Argentina",
        clicks: 75,
        conversionRate: "50%",
        percentage: "3.8%",
        views:'200'
    },
    {
        rank: 5,
        name: "Michael Brown",
        avatarUrl: face15,
        countryFlagUrl: india_flag,
        country: "India",
        clicks: 135,
        conversionRate: "30%",
        percentage: "7.1%",
        views:'400'
    },
];

//Browser Insights

export const BrowsersData = [
    {
        name: "Google",
        company: "Google, Inc",
        imageUrl: chrome,
        flagUrl: "",
        downloads: "1,215",
        progress: 78,
        progressColor: "primary",
    },
    {
        name: "Edge",
        company: "Microsoft Corp, Inc",
        imageUrl: edge,
        flagUrl: "",
        downloads: 978,
        progress: 72,
        progressColor: "secondary",
    },
    {
        name: "Firefox",
        company: "Mozilla, Inc",
        imageUrl: firefox,
        flagUrl: "",
        downloads: 815,
        progress: 64,
        progressColor: "warning",
    },
    {
        name: "Opera",
        company: "Opera, Inc",
        imageUrl: opera,
        flagUrl: "",
        downloads: "1,347",
        progress: 58,
        progressColor: "info",
    },
    {
        name: "Safari",
        company: "Apple Corp, Inc",
        imageUrl: safari,
        flagUrl: "",
        downloads: "1,123",
        progress: 63,
        progressColor: "success",
    },
    {
        name: "Uc Browser",
        company: "Uc Browser, Inc",
        imageUrl: uc,
        flagUrl: "",
        downloads: "1,189",
        progress: 55,
        progressColor: "danger",
    },
];



//Top Referral Pages

export const ListItemsData = [
    {
      path: "blog/how-to-improve-seo",
      views: "1,250",
      className: "primary",
    },
    {
      path: "products/new-launch",
      views: "1,100",
      className: "info",
    },
    {
      path: "services/digital-marketing",
      views: "950",
      className: "warning",
    },
    {
      path: "pricing",
      views: "890",
      className: "success",
    },
];