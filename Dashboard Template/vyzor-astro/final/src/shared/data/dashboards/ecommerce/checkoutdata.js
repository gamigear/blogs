import ecommercejpg1 from '../../../../assets/images/ecommerce/jpg/1.jpg';
import ecommercejpg2 from '../../../../assets/images/ecommerce/jpg/2.jpg';
import ecommercejpg4 from '../../../../assets/images/ecommerce/jpg/4.jpg';

export const CheckoutSummary = [
    {
        id: 1,
        name: 'Adidas UltraBoost 2023',
        color: 'Green',
        quantity: 2,
        price: 159.99,
        imageUrl: ecommercejpg1,
    },
    {
        id: 2,
        name: 'Reebok Classic Leather',
        color: 'Blue',
        quantity: 1,
        price: 89.99,
        imageUrl: ecommercejpg2,
    },
    {
        id: 3,
        name: 'Nike Air Max 2025 Sneakers',
        color: 'Teal Blue',
        quantity: 1,
        price: 129.99,
        imageUrl: ecommercejpg4,
    },
];

export const SummaryData = [
    { label: 'Sub Total', value: '$929.79' },
    { label: 'Discount (10%)', value: '- $92.97' },
    { label: 'Tax', value: '$0.00' },
    { label: 'Shipping', value: 'Free', isFree: true },
    { label: 'Total', value: '$836.82', isTotal: true },
];