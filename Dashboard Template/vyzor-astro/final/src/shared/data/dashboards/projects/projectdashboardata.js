
import face1 from '../../../../assets/images/faces/1.jpg';
import face2 from '../../../../assets/images/faces/2.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';
import face5 from '../../../../assets/images/faces/5.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face7 from '../../../../assets/images/faces/7.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face13 from '../../../../assets/images/faces/13.jpg';
import face14 from '../../../../assets/images/faces/14.jpg';
import face15 from '../../../../assets/images/faces/15.jpg';
import face16 from '../../../../assets/images/faces/16.jpg';


export const dashboardCards = [
    {
        id: 1,
        title: "Total Projects",
        price: 600,
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M10.94,18L7.4,14.46l1.41-1.41 l2.12,2.12l4.24-4.24l1.41,1.41L10.94,18z M13,9V3.5L18.5,9H13z"></path></g></svg>`
        ),
        svgColor: "primary",
        cardClass: 'dashboard-main-card primary'
    },
    {
        id: 2,
        title: "Completed Projects",
        price: 454,
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>`
        ),
        svgColor: "success",
        cardClass: 'dashboard-main-card success'
    },
    {
        id: 3,
        title: "In Progress Projects",
        price: 466,
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M6,2l0.01,6L10,12l-3.99,4.01L6,22h12v-6l-4-4l4-3.99V2H6z M16,16.5V20H8v-3.5l4-4L16,16.5z"></path></g></svg>`
        ),
        svgColor: "secondary",
        cardClass: 'dashboard-main-card secondary'
    },
    {
        id: 4,
        title: "Pending Projects",
        price: 353,
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M7,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C8.5,12.83,7.83,13.5,7,13.5z M12,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C13.5,12.83,12.83,13.5,12,13.5z M17,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C18.5,12.83,17.83,13.5,17,13.5z"></path></g></svg>`
        ),
        svgColor: "warning",
        cardClass: 'dashboard-main-card warning'
    }
];


export const TaskList = [
    {
        type: "On-Going Tasks",
        className: "on-going",
        trend: "increase",
        percentage: "0.45%",
        count: 440,
    },
    {
        type: "Completed Tasks",
        className: "completed",
        trend: "decrease",
        percentage: "2.54%",
        count: 550,
    },
    {
        type: "To Do Tasks",
        className: "todo",
        trend: "increase",
        percentage: "1.08%",
        count: 670,
    },
    {
        type: "Pending Tasks",
        className: "pending",
        trend: "increase",
        percentage: "3.65%",
        count: 830,
    },
];

// Recent Activity


export const Recentupdates = [
    {
        avatar: face1,
        name: "Jane Doe",
        status: "online",
        date: "February 17, 2025",
        description: "The redesign for NovaStream has been successfully completed. The new website is now live and accessible for users.",
    },
    {
        avatar: face11,
        name: "John Smith",
        status: "online",
        date: "February 16, 2025",
        description: "UI redesign completed and deployed.",
    },
    {
        avatar: face6,
        name: "Sarah Lee",
        status: "online",
        date: "February 15, 2025",
        description: "New algorithm ready for review.",
        file: {
            type: "PPT",
            name: "Project_discussion",
        },
    },
    {
        avatar: face14,
        name: "Mark Taylor",
        status: "offline",
        date: "February 14, 2025",
        description: "Ongoing work to optimize backend services, particularly in trip request handling and driver location updates.",
    },
    {
        avatar: face7,
        name: "Emily Clark",
        status: "online",
        date: "February 13, 2025",
        description: "Integrated third-party tools",
    },
    {
        avatar: face4,
        name: "Lisa Simpson",
        status: "online",
        date: "February 14, 2025",
        description: "Backend Optimization",
    },
];

//Urgent Tasks

export const UrgentTasks = [
    {
        id: "urgent-task1",
        title: "Fix Critical Bug in Payment Gateway Integration",
        dueDate: "18-02-2025",
        avatars: [face2, face8, face2],
        priority: "High",
        status: "In Progress",
        statusClass: "bg-primary-transparent"
    },
    {
        id: "urgent-task2",
        title: "Deploy Latest Security Update",
        dueDate: "19-02-2025",
        avatars: [face6, face9],
        priority: "High",
        status: "Pending",
        statusClass: "bg-warning-transparent"
    },
    {
        id: "urgent-task3",
        title: "Complete Mobile App Feature Testing",
        dueDate: "21-02-2025",
        avatars: [face3, face5, face10, face15],
        priority: "Medium",
        status: "Completed",
        statusClass: "bg-success-transparent"
    },
    {
        id: "urgent-task4",
        title: "Resolve User Account Authentication Issue",
        dueDate: "17-02-2025",
        avatars: [face11],
        priority: "High",
        status: "In Progress",
        statusClass: "bg-primary-transparent"
    },
    {
        id: "urgent-task5",
        title: "Prepare Marketing Campaign Assets",
        dueDate: "20-02-2025",
        avatars: [face13, face16, face8],
        priority: "Medium",
        status: "In Progress",
        statusClass: "bg-primary-transparent"
    },
    {
        id: "urgent-task6",
        title: "Update API for New Payment Method",
        dueDate: "22-02-2025",
        avatars: [face10, face5],
        priority: "High",
        status: "Completed",
        statusClass: "bg-success-transparent"
    }
];

//Recent Transactions

export const Transactions = [
    {
        name: "Sarah Miller",
        avatarColor: "primary",
        dateTime: "Feb 17,2025 - 3:45 PM",
        amount: "$1,500.00",
        status: "Completed",
    },
    {
        name: "John Peterson",
        avatarColor: "secondary",
        dateTime: "Feb 16,2025 - 10:20 AM",
        amount: "$750.00",
        status: "Pending",
    },
    {
        name: "Emily Clark",
        avatarColor: "warning",
        dateTime: "Feb 15,2025 - 2:30 PM",
        amount: "$2,000.00",
        status: "Completed",
    },
    {
        name: "Mark Taylor",
        avatarColor: "info",
        dateTime: "Feb 14,2025 - 9:00 AM",
        amount: "$1,200.00",
        status: "Completed",
    },
    {
        name: "Alex Johnson",
        avatarColor: "danger",
        dateTime: "Feb 12,2025 - 11:55 AM",
        amount: "$2,300.00",
        status: "Completed",
    },
    {
        name: "Lisa Grant",
        avatarColor: "success",
        dateTime: "Feb 13,2025 - 4:10 PM",
        amount: "$500.00",
        status: "Failed",
    },
    {
        name: "Jessica Lee",
        avatarColor: "orange",
        dateTime: "Feb 11,2025 - 5:30 PM",
        amount: "$1,100.00",
        status: "Pending",
    },
];

//Projects Summary

export const ProjectsSummary = [
    {
        id: "checkbox1",
        name: "NovaStream - UI Overhaul",
        startDate: "25-01-2025",
        endDate: "17-02-2025",
        status: "Completed",
        progress: 100,
        progressColor: "primary",
        avatars: [face12, face5, face3],
        moreAvatars: 2,
        amount: "$15,000.00",
    },
    {
        id: "checkbox2",
        name: "TravelSphere - App Features",
        startDate: "01-12-2024",
        endDate: "30-03-2025",
        status: "In Progress",
        progress: 60,
        progressColor: "secondary",
        avatars: [face13],
        amount: "$10,000.00",
    },
    {
        id: "checkbox3",
        name: "SoundWave - Algorithm Integration",
        startDate: "10-11-2024",
        endDate: "15-02-2025",
        status: "Completed",
        progress: 100,
        progressColor: "warning",
        avatars: [face1, face15, face8],
        moreAvatars: 1,
        amount: "$20,000.00",
    },
    {
        id: "checkbox4",
        name: "RideMaster - Backend Optimization",
        startDate: "05-10-2024",
        endDate: "14-02-2025",
        status: "In Progress",
        progress: 80,
        progressColor: "info",
        avatars: [face6, face11],
        amount: "$12,000.00",
    },
    {
        id: "checkbox5",
        name: "Connectify - Tool Integration",
        startDate: "01-01-2025",
        endDate: "13-02-2025",
        status: "Completed",
        progress: 100,
        progressColor: "success",
        avatars: [face4, face14, face4],
        amount: "$8,500.00",
    },
    {
        id: "checkbox6",
        name: " NovaStream - UI Overhaul ",
        startDate: "25-01-2025",
        endDate: "17-02-2025",
        status: "Completed",
        progress: 100,
        progressColor: "danger",
        avatars: [face12, face12],
        amount: "$15,000.00",
        moreAvatars: 2,
        borderClass:'border-bottom-0'
    },
];
