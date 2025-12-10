
import face1 from '../../../../assets/images/faces/1.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';

import comppanyLogo1 from '../../../../assets/images/company-logos/1.png';
import comppanyLogo2 from '../../../../assets/images/company-logos/2.png';
import comppanyLogo3 from '../../../../assets/images/company-logos/3.png';
import comppanyLogo4 from '../../../../assets/images/company-logos/4.png';
import comppanyLogo5 from '../../../../assets/images/company-logos/5.png';
import comppanyLogo6 from '../../../../assets/images/company-logos/6.png';



export const StatCards = [
    {
        id: "1",
        title: "Total Customers",
        value: "32,152",
        valueClass: "mb-0",
        iconClass: "ti ti-users",
        color: "primary",
        crmpercentChange: "4.21%",
        crmicon: "up",
        percentageColorClass: "text-success",
        crmbadge: true,
        crmiconColor: 'success',
        endText: 'text-end',
        divClass: 'flex-wrap',
    },
    {
        id: "2",
        title: "Total Deals",
        value: "5,543",
        valueClass: "mb-0",
        iconClass: "ti ti-briefcase",
        color: "secondary",
        crmpercentChange: "2.35%",
        crmicon: "up",
        percentageColorClass: "text-success",
        crmbadge: true,
        crmiconColor: 'success',
        endText: 'text-end',
        divClass: 'flex-wrap',
    },
    {
        id: "3",
        title: "Conversion Ratio",
        value: "12.34%",
        valueClass: "mb-0",
        iconClass: "ti ti-wave-square",
        color: "success",
        crmpercentChange: "4.75%",
        crmicon: "down",
        percentageColorClass: "text-danger",
        crmbadge: true,
        crmiconColor: 'danger',
        endText: 'text-end',
        divClass: 'flex-wrap',
    },
    {
        id: "4",
        title: "Total Revenue",
        value: "$53,276",
        valueClass: "mb-0",
        iconClass: "ti ti-wallet",
        color: "warning",
        crmpercentChange: "0.59%",
        crmicon: "up",
        percentageColorClass: "text-success",
        crmbadge: true,
        crmiconColor: 'success',
        endText: 'text-end',
        divClass: 'flex-wrap',
    },
];



//Tasks


export const Tasks = [
    {
        id: '1',
        title: 'Follow up with Acme Corp',
        status: 'In Progress',
        code: '#SPK - 101',
        assignee: 'John Doe',
        priority: 'High',
        dueTime: '11:00 AM',
        completed: true,
    },
    {
        id: '2',
        title: 'Send proposal to Beta Industries',
        status: 'In Progress',
        code: '#SPK - 102',
        assignee: 'Sarah Lee',
        priority: 'Medium',
        dueTime: '2:00 PM',
        completed: false,
    },
    {
        id: '3',
        title: 'Call Gamma LLC for contract renewal',
        status: 'In Progress',
        code: '#SPK - 103',
        assignee: 'Mark Smith',
        priority: 'High',
        dueTime: '10:30 AM',
        completed: true,
    },
    {
        id: '4',
        title: 'Schedule meeting with Delta Ltd.',
        status: 'In Progress',
        code: '#SPK - 104',
        assignee: 'Emma Johnson',
        priority: 'Low',
        dueTime: '4:00 PM',
        completed: false,
    },
    {
        id: '5',
        title: 'Review Epsilon Inc. payment terms',
        status: 'In Progress',
        code: '#SPK - 105',
        assignee: 'Chris Brown',
        priority: 'High',
        dueTime: '5:30 PM',
        completed: false,
    },
    {
        id: '6',
        title: 'Update lead status in CRM',
        status: 'In Progress',
        code: '#SPK - 106',
        assignee: 'Anna Wilson',
        priority: 'Medium',
        dueTime: '1:00 PM',
        completed: true,
    },
];


export const Upcoming = [
    {
        id: '107',
        title: 'Prepare pitch for new client',
        status: 'Not Started',
        code: '#SPK - 107',
        assignee: 'John Doe',
        priority: 'High',
        dueDate: '2025-02-16',
        completed: true,
    },
    {
        id: '108',
        title: 'Team meeting for Q1 strategy',
        status: 'Scheduled',
        code: '#SPK - 108',
        assignee: 'Sarah Lee',
        priority: 'Medium',
        dueDate: '2025-02-18',
        completed: false,
    },
    {
        id: '109',
        title: 'Update CRM data for leads',
        status: 'Not Started',
        code: '#SPK - 109',
        assignee: 'Mark Smith',
        priority: 'Low',
        dueDate: '2025-02-20',
        completed: true,
    },
    {
        id: '110',
        title: 'Conduct market research',
        status: 'In Progress',
        code: '#SPK - 110',
        assignee: 'Emma Johnson',
        priority: 'Medium',
        dueDate: '2025-02-22',
        completed: false,
    },
    {
        id: '111a',
        title: 'Review contract terms for new partnership',
        status: 'Not Started',
        code: '#SPK - 111',
        assignee: 'Chris Brown',
        priority: 'High',
        dueDate: '2025-02-25',
        completed: false,
    },
    {
        id: '111b',
        title: 'Follow up with investors',
        status: 'Pending',
        code: '#SPK - 111',
        assignee: 'Anna Wilson',
        priority: 'High',
        dueDate: '2025-02-28',
        completed: true,
    },
];




export const TrafficSources = [
    { name: 'Organic Search', percentage: '0.64%', count: 1754, trend: 'up' },
    { name: 'Paid Search', percentage: '2.75%', count: 1234, trend: 'down' },
    { name: 'Direct Traffic', percentage: '1.54%', count: 878, trend: 'up' },
    { name: 'Social Media', percentage: '1.54%', count: 270, trend: 'up' },
    { name: 'Referrals', percentage: '1.54%', count: 878, trend: 'up' },
    { name: 'Others', percentage: '1.54%', count: 270, trend: 'up' },
];

//Top Deals

export const Deals = [
    {
        name: 'John Doe',
        email: 'jhondoe@example.com',
        avatar: face10,
        amount: '$2,893',
        badgeColor: ''
    },
    {
        name: 'Sarah Lee',
        email: 'sarah.lee@gmail.com',
        avatar: face1,
        amount: '$4,289',
        badgeColor: ''
    },
    {
        name: 'Mark Smith',
        email: 'mark.smith23@gmail.com',
        avatar: face12,
        amount: '$6,347',
        badgeColor: ''
    },
    {
        name: 'Emma Johnson',
        email: 'emmajhonson@gmail.com',
        avatar: face6,
        amount: '$3,894',
        badgeColor: ''
    },
    {
        name: 'Chris Brown',
        email: 'chrisbrown214@gmail.com',
        avatar: null,
        initials: 'CB',
        amount: '$2,679',
        badgeColor: 'bg-primary-transparent'
    },
    {
        name: 'Anna Wilson',
        email: 'annawilson238@gmail.com',
        avatar: face3,
        amount: '$2,679',
        badgeColor: ''
    },
];



//Leads Overview

export const Overviewtable = [
    {
        name: 'John Carter',
        company: 'Acme Corp',
        status: { label: 'New', colorClass: 'bg-primary' },
        source: 'Website Form',
        avatar: face12,
        assignedTo: 'Sarah Lee',
        assignedAvatar: face1,
    },
    {
        name: 'Lisa Brown',
        company: 'Beta Ltd',
        status: { label: 'Contacted', colorClass: 'bg-info' },
        source: 'Referral',
        avatar: face11,
        assignedTo: 'Mark Smith',
        assignedAvatar: face1,
    },
    {
        name: 'Michael Green',
        company: 'Gamma LLC',
        status: { label: 'Proposal Sent', colorClass: 'bg-warning' },
        source: 'LinkedIn',
        avatar: face3,
        assignedTo: 'Emma Johnson',
        assignedAvatar: face1,
    },
    {
        name: 'Sophia Wilson',
        company: 'Delta Enterprises',
        status: { label: 'Negotiation', colorClass: 'bg-secondary' },
        source: 'Cold Call',
        avatar: face6,
        assignedTo: 'Chris Brown',
        assignedAvatar: face1,
    },
    {
        name: 'David Miller',
        company: 'Epsilon Inc.',
        status: { label: 'Won', colorClass: 'bg-success' },
        source: 'Email Campaign',
        avatar: face10,
        assignedTo: 'John Doe',
        assignedAvatar: face1,
        borderClass: 'border-bottom-0'
    },
];

//Top Deals

export const TopdealsTable = [
    {
        id: '#SPK-1001',
        title: 'Enterprise Package',
        companyLogo: comppanyLogo1,
        companyName: 'Acme Corp',
        amount: '$50,000',
        status: { label: 'In Progress', colorClass: 'bg-primary-transparent' },
        closeDate: '2025-02-25',
        owner: 'John Doe',
        priority: 'High',
    },
    {
        id: '#SPK-1002',
        title: 'Annual Contract',
        companyLogo: comppanyLogo2,
        companyName: 'Beta Ltd',
        amount: '$75,000',
        status: { label: 'Closed Won', colorClass: 'bg-success-transparent' },
        closeDate: '2025-02-15',
        owner: 'Sarah Lee',
        priority: 'High',
    },
    {
        id: '#SPK-1003',
        title: 'Software Upgrade',
        companyLogo: comppanyLogo3,
        companyName: 'Gamma LLC',
        amount: '$30,000',
        status: { label: 'Closed Lost', colorClass: 'bg-danger-transparent' },
        closeDate: '2025-01-30',
        owner: 'Mark Smith',
        priority: 'Medium',
    },
    {
        id: '#SPK-1004',
        title: 'Premium Services',
        companyLogo: comppanyLogo4,
        companyName: 'Delta Ltd',
        amount: '$60,000',
        status: { label: 'In Progress', colorClass: 'bg-primary-transparent' },
        closeDate: '2025-03-05',
        owner: 'Emma Johnson',
        priority: 'High',
    },
    {
        id: '#SPK-1005',
        title: 'Subscription Plan',
        companyLogo: comppanyLogo5,
        companyName: 'Epsilon Inc',
        amount: '$40,000',
        status: { label: 'Closed Won', colorClass: 'bg-success-transparent' },
        closeDate: '2025-02-10',
        owner: 'Chris Brown',
        priority: 'Medium',
    },
    {
        id: '#SPK-1006',
        title: 'Custom Integration',
        companyLogo: comppanyLogo6,
        companyName: 'Zeta Solutions',
        amount: '$55,000',
        status: { label: 'Proposal Sent', colorClass: 'bg-warning-transparent' },
        closeDate: '2025-02-20',
        owner: 'Anna Wilson',
        priority: 'High',
        borderClass:'border-bottom-0'
    },
];





