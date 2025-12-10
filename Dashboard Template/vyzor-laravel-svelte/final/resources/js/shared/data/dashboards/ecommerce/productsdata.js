


export let productsData = [
    ['SPK001', 'Smart TV 50', '/images/ecommerce/png/1.png', '$699.99', 'In Stock', 'Published', '120', 'Mar 12, 2025', 'electronics'],
    ['SPK002', 'Running Shoes', '/images/ecommerce/png/2.png', '$89.99', 'Out of Stock', 'Draft', '0', 'Mar 10, 2025', 'fashion'],
    ['SPK003', 'Wooden Dining Table', '/images/ecommerce/png/3.png', '$399.99', 'In Stock', 'Published', '45', 'Mar 5, 2025', 'home'],
    ['SPK004', 'Wireless Earbuds', '/images/ecommerce/png/4.png', '$129.99', 'In Stock', 'Published', '250', 'Mar 2, 2025', 'electronics'],
    ['SPK005', 'Leather Jacket', '/images/ecommerce/png/5.png', '$199.99', 'In Stock', 'Archived', '75', 'Feb 28, 2025', 'fashion'],
    ['SPK006', 'Office Desk Chair', '/images/ecommerce/png/7.png', '$149.99', 'Out of Stock', 'Draft', '0', 'Feb 25, 2025', 'home'],
    ['SPK007', 'Portable Speaker', '/images/ecommerce/png/8.png', '$79.99', 'In Stock', 'Published', '300', 'Feb 20, 2025', 'electronics'],
    ['SPK008', 'Summer Dress', '/images/ecommerce/png/9.png', '$59.99', 'In Stock', 'Published', '150', 'Feb 18, 2025', 'fashion'],
    ['SPK009', 'Coffee Maker', '/images/ecommerce/png/10.png', '$59.99', 'In Stock', 'Published', '60', 'Feb 15, 2025', 'home'],
    ['SPK010', 'Electric Kettle', '/images/ecommerce/png/16.png', '$39.99', 'Out of Stock', 'Archived', '0', 'Feb 10, 2025', 'electronics']
];

export const CategoriesProduct = [
    { value: 'categories', label: 'Categories' },
    { value: 'all categories', label: 'All Categories' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'home', label: 'Home' },
];
export const StatusProduct = [
    { value: 'status', label: 'Status' },
    { value: 'all status', label: 'All Status' },
    { value: 'published', label: 'Published' },
    { value: 'draft', label: 'Draft' },
    { value: 'archived', label: 'Archived' },
]
export const StockProduct = [
    { value: 'stock', label: 'Stock' },
    { value: 'all status', label: 'All Status' },
    { value: 'in stock', label: 'In Stock' },
    { value: 'out of stock', label: 'Out of Stock' },
]
export const FilterProduct = [
    { value: 'Sort By', label: 'Sort By' },
    { value: 'Date Added', label: 'Date Added' },
    { value: 'Price', label: 'Price' },
    { value: 'Product Name', label: 'Product Name' },
]


export const ProductCards = [
    {
        title: "Total Products",
        avatarClass: "avatar-md flex-shrink-0",
        count: "12,350",
        percent: "+15%",
        priceColor: "primary",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"></path></svg>`,
        percentColor: 'bg-success-transparent badge fs-12'
    },
    {
        title: "Products in Stock",
        avatarClass: "avatar-md flex-shrink-0",
        count: "7,890",
        percent: "+10%",
        priceColor: "success",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z"></path></svg>`,
        percentColor: 'bg-success-transparent badge fs-12'
    },
    {
        title: "Out of Stock Products",
        avatarClass: "avatar-md flex-shrink-0",
        count: "2,430",
        percent: "-8%",
        priceColor: "warning",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>`,
        percentColor: 'bg-danger-transparent badge fs-12'
    },
    {
        title: "Recently Added",
        avatarClass: "avatar-md flex-shrink-0",
        count: "550",
        percent: "+30%",
        priceColor: "secondary",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg>`,
        percentColor: 'bg-success-transparent badge fs-12'
    },
    {
        title: "Total Revenue",
        avatarClass: "avatar-md flex-shrink-0",
        count: "$1.25M",
        percent: "+25%",
        priceColor: "info",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Zm80-64V192a8,8,0,0,1-8,8H16a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H240A8,8,0,0,1,248,64Zm-16,46.35A56.78,56.78,0,0,1,193.65,72H62.35A56.78,56.78,0,0,1,24,110.35v35.3A56.78,56.78,0,0,1,62.35,184h131.3A56.78,56.78,0,0,1,232,145.65Z"></path></svg>`,
        percentColor: 'bg-success-transparent badge fs-12'
    },
];
