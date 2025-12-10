
import us_flag from '../../../assets/images/flags/us_flag.jpg';
import argentina_flag from '../../../assets/images/flags/argentina_flag.jpg';
import french_flag from '../../../assets/images/flags/french_flag.jpg';



export const Employeesdata = [
    {
        title: 'Total Employees',
        value: "1,754",
        badgeText: 'This Month',
        iconClass: 'ri-group-3-fill',
        color: 'primary',
        cardColor: 'primary',
        percentChange: '+1.04%',
        percentageColorClass: 'fs-15 text-success',
        badge: true,
    },
    {
        title: 'Employees In Leave',
        value: "234",
        badgeText: 'This Month',
        iconClass: 'ri-user-minus-fill',
        color: 'secondary',
        cardColor: 'secondary',
        percentChange: '+0.36%',
        percentageColorClass: 'fs-15 text-success',
        badge: true,
    },
    {
        title: 'Total Clients',
        value: "664",
        badgeText: 'This Month',
        iconClass: 'ri-briefcase-fill',
        color: 'warning',
        cardColor: 'warning',
        percentChange: '-1.28%',
        percentageColorClass: 'fs-15 text-danger',
        badge: true,
    },
    {
        title: 'New Leads',
        value: "855",
        badgeText: 'This Month',
        iconClass: 'ri-id-card-fill',
        color: 'success',
        cardColor: 'success',
        percentChange: '+2.25%',
        percentageColorClass: 'fs-15 text-success',
        badge: true,
    },
    {
        title: 'Total Deals',
        value: "325",
        badgeText: 'This Month',
        iconClass: 'ri-id-card-fill',
        color: 'info',
        cardColor: 'info',
        percentChange: '-5.96%',
        percentageColorClass: 'fs-15 text-danger',
        badge: true,
    },
];


export const Salesdata = [
    {
        id: "chart-2",
        title: "Total Sales",
        value: "12,432",
        inc: "Increases Today",
        color: "primary",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z"></path>
            </svg>`
        ),
        height: "40",
        width: '70',
        type: 'bar'
    },
    {
        id: "chart-3",
        title: "Total Revenue",
        value: "$9,432",
        inc: "Increases Today",
        color: "secondary",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                <path d="M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z"></path>
            </svg>`
        ),
        height: "40",
        width: '70',
        type: 'line'
    },
    {
        id: "chart-4",
        title: "Total Customers",
        value: "3,132",
        inc: "Increases Today",
        color: "success",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                <path d="M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z"></path>
            </svg>`
        ),
        height: "40",
        width: '70',
        type: 'line'
    },
    {
        id: "chart-5",
        title: "Total Profit",
        value: "$532",
        inc: "Increases Today",
        color: "info",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" class="svg-info" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm12,152h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24a28,28,0,0,1,0,56Z"></path></svg>`
        ),
        height: "40",
        width: '40',
        type: 'pie'
    },
];

export const Productsdata = [
    {
        color: "primary",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm16,160h-8v8a8,8,0,0,1-16,0v-8h-8a32,32,0,0,1-32-32,8,8,0,0,1,16,0,16,16,0,0,0,16,16h32a16,16,0,0,0,0-32H116a32,32,0,0,1,0-64h4V64a8,8,0,0,1,16,0v8h4a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H116a16,16,0,0,0,0,32h28a32,32,0,0,1,0,64Z"></path></svg>`
        ),
        title: "Total Sales",
        value: "$54,320",
        percentage: "+ 0.54%",
        percentageColor: "success",
    },
    {
        color: "secondary",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"></path></svg>`
        ),
        title: "Total Products",
        value: "1,320",
        percentage: "- 3.96%",
        percentageColor: "danger",
    },
    {
        color: "warning",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"></path></svg>`
        ),
        title: "Pending Orders",
        value: "240",
        percentage: "+ 5.53%",
        percentageColor: "success",
    },
    {
        color: "info",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z"></path></svg>`
        ),
        title: "Delivered Orders",
        value: "1,050",
        percentage: "+ 1.86%",
        percentageColor: "success",
    },
    {
        color: "success",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,112H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168a8,8,0,0,1,0,16Z"></path></svg>`
        ),
        title: "Returned Orders",
        value: "80",
        percentage: "- 4.43%",
        percentageColor: "danger",
    },
    {
        color: "danger",
        svgIcon: (
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path></svg>`
        ),
        title: "Total Customers",
        value: "1,540",
        percentage: "+ 6.12%",
        percentageColor: "success",
    },
];


//Top Categories


export const CategoryData = [
    {
        title: "Electronics",
        sales: "19,754",
        percentage: "18.67%",
        percentageChange: "Increased By",
        percentageColor: "success",
    },
    {
        title: "Fashion",
        sales: "16,236",
        percentage: "35.46%",
        percentageChange: "Increased By",
        percentageColor: "success",
    },
    {
        title: "Furniture",
        sales: "12,645",
        percentage: "23.43%",
        percentageChange: "Decreased By",
        percentageColor: "danger",
    },
];



export const CategoryItemsData = [
    { name: "Electronics", percentage: "31%", colorClass: "text-primary" },
    { name: "Fashion", percentage: "26%", colorClass: "text-secondary" },
    { name: "Furniture", percentage: "18%", colorClass: "text-info" },
    { name: "Appliances", percentage: "14%", colorClass: "text-warning" },
    { name: "Gaming", percentage: "11%", colorClass: "text-success" },
];

//Recent Orders

export const Ordersdata = [
    {
        id: '#ORD789ABC',
        method: 'Rupay Card ****2783',
        methodDetails: 'Card Payment',
        status: 'Completed',
        amount: '$1,234.78',
        date: 'Nov 22,2023',
        statusColor: 'success',
    },
    {
        id: '#ORD253SFW',
        method: 'Digital Wallet',
        methodDetails: 'Online Transaction',
        status: 'Pending',
        amount: '$623.99',
        date: 'Nov 22,2023',
        statusColor: 'warning',
    },
    {
        id: '#ORD356SKF',
        method: 'Mastro Card ****7893',
        methodDetails: 'Card Payment',
        status: 'Cancelled',
        amount: '$1,324',
        date: 'Nov 21,2023',
        statusColor: 'danger',
    },
    {
        id: '#ORD363ESD',
        method: 'Cash On Delivery',
        methodDetails: 'Pay On Delivery',
        status: 'Completed',
        amount: '$1,123.49',
        date: 'Nov 20,2023',
        statusColor: 'success',
    },
    {
        id: '#ORD253KSE',
        method: 'Visa Card ****2563',
        methodDetails: 'Card Payment',
        status: 'Completed',
        amount: '$1,289',
        date: 'Nov 18,2023',
        statusColor: 'success',
        borderClass:'border-bottom-0'
    }
];


export const StatusData = [
    {
        label: 'Delivered',
        count: "1,754",
        colorClass: 'bg-primary-transparent svg-primary',
        svg: (
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <path d="M223.68,66.15L135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z" />
            </svg>`
        )
    },
    {
        label: 'Cancelled',
        count: 634,
        colorClass: 'bg-success-transparent svg-success',
        svg: (
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>`
        )
    },
    {
        label: 'Pending',
        count: 878,
        colorClass: 'bg-warning-transparent svg-warning',
        svg: (
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z" />
            </svg>`
        )
    },
    {
        label: 'Returned',
        count: 470,
        colorClass: 'bg-info-transparent svg-info',
        svg: (
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,112H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168a8,8,0,0,1,0,16Z" />
            </svg>`
        )
    }
];

//Recent Transactions

export const Transactionsdata = [
    {
        name: 'Wireless Headphones',
        time: '2024-10-08, 14:35',
        amount: '$150.00',
        status: 'Paid',
        badgeClass: 'bg-success-transparent',
        bgClass: 'bg-primary-transparent svg-primary',
        svg: (
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368">
                <g><rect fill="none" height="24" width="24" /></g>
                <g><path d="M12,3c-4.97,0-9,4.03-9,9v7c0,1.1,0.9,2,2,2h4v-8H5v-1c0-3.87,3.13-7,7-7s7,3.13,7,7v1h-4v8h4c1.1,0,2-0.9,2-2v-7 C21,7.03,16.97,3,12,3z" /></g>
            </svg>`
        )
    },
    {
        name: 'Smartwatch',
        time: '2024-10-08, 13:20',
        amount: '$75.50',
        status: 'Pending',
        badgeClass: 'bg-orange-transparent',
        bgClass: 'bg-secondary-transparent svg-secondary',
        svg: (
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M0 0h24v24H0z" fill="none" opacity=".1" />
                <path d="M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" />
            </svg>`
        )
    },
    {
        name: 'Gaming Laptop',
        time: '2024-10-08, 12:05',
        amount: '$250.00',
        status: 'Paid',
        badgeClass: 'bg-success-transparent',
        bgClass: 'bg-warning-transparent svg-warning',
        svg: (
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M20,18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z" />
            </svg>`
        )
    },
    {
        name: 'Bluetooth Speaker',
        time: '2024-10-08, 11:50',
        amount: '$120.00',
        status: 'Paid',
        badgeClass: 'bg-success-transparent',
        bgClass: 'bg-info-transparent svg-info',
        svg: (
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            </svg>`
        )
    },
    {
        name: 'Fitness Tracker',
        time: '2024-10-08, 10:30',
        amount: '$60.00',
        status: 'Failed',
        badgeClass: 'bg-danger-transparent',
        bgClass: 'bg-success-transparent svg-success',
        svg: (
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M15.11,12.45L14,10.24l-3.11,6.21C10.73,16.79,10.38,17,10,17s-0.73-0.21-0.89-0.55L7.38,13H2v5c0,1.1,0.9,2,2,2h16 c1.1,0,2-0.9,2-2v-5h-6C15.62,13,15.27,12.79,15.11,12.45z" />
                <path d="M20,4H4C2.9,4,2,4.9,2,6v5h6c0.38,0,0.73,0.21,0.89,0.55L10,13.76l3.11-6.21c0.34-0.68,1.45-0.68,1.79,0L16.62,11H22V6 C22,4.9,21.1,4,20,4z" />
            </svg>`
        )
    }
];

//Recent Activity

export const ActivityItems = [
    {
        iconClass: "ri-shopping-cart-line",
        avatarTextClass: "text-primary",
        title: "New Order - #12345",
        subtitle: "2 items purchased by samantha",
        time: "2 hrs ago",
        timeColorClass: "text-danger"
    },
    {
        iconClass: "ri-checkbox-circle-line fs-14",
        avatarTextClass: "text-secondary",
        title: "Order Shipped - #12345",
        subtitle: "Shipped",
        time: "1 day ago",
        timeColorClass: "text-success"
    },
    {
        iconClass: "ri-heart-3-line fs-14",
        avatarTextClass: "text-warning",
        title: "Product Favorited - women frock 12",
        subtitle: "Added to favorites by mice",
        time: "2 days ago",
        timeColorClass: "text-success"
    },
    {
        iconClass: "ri-star-line fs-14",
        avatarTextClass: "text-orange",
        title: "Product Rated - DSL camera",
        subtitle: "Rated 4.5 stars by Johnson",
        time: "3 days ago",
        timeColorClass: "text-danger"
    },
    {
        iconClass: "ri-price-tag-3-line fs-14",
        avatarTextClass: "text-success",
        title: "Product Discount - Nike Air Max",
        subtitle: "Discounted price applied",
        time: "1 day ago",
        timeColorClass: "text-danger"
    }
];

export const Countries = [
    {
      id: 1,
      name: 'Argentina',
      flag: argentina_flag,
      population: 43765,
      now:75,
    },
    {
      id: 2,
      name: 'France',
      flag: french_flag,
      population: 36055,
      now:64,
    },
    {
      id: 3,
      name: 'USA',
      flag: us_flag,
      population: 26734,
      now:60,
    },
  ];