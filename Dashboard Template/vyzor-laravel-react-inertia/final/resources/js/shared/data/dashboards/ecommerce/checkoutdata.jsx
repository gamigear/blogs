
export const PaymentOptions = [
    {
      id: 'paypal-tab',
      icon: 'bi bi-paypal',
      label: 'PayPal',
      target: '#paypal-tab',
      isActive: true,
    },
    {
      id: 'card-tab',
      icon: 'bi bi-credit-card',
      label: 'Credit Or Debit Card',
      target: '#card-tab',
      isActive: false,
    },
    {
      id: 'netbanking-tab',
      icon: 'bi bi-globe',
      label: 'UPI / Net Banking',
      target: '#netbanking-tab',
      isActive: false,
    },
    {
      id: 'cod-tab',
      icon: 'bi bi-cash-stack',
      label: 'Cash On Delivery',
      target: '#cod-tab',
      isActive: false,
    },
];


export const CheckoutSummary = [
    {
      id: 1,
      name: 'Adidas UltraBoost 2023',
      color: 'Green',
      quantity: 2,
      price: 159.99,
      imageUrl: "/build/assets/images/ecommerce/jpg/1.jpg",
    },
    {
      id: 2,
      name: 'Reebok Classic Leather',
      color: 'Blue',
      quantity: 1,
      price: 89.99,
      imageUrl: "/build/assets/images/ecommerce/jpg/2.jpg",
    },
    {
      id: 3,
      name: 'Nike Air Max 2025 Sneakers',
      color: 'Teal Blue',
      quantity: 1,
      price: 129.99,
      imageUrl: "/build/assets/images/ecommerce/jpg/4.jpg",
    },
];

export const SummaryData = [
    { label: 'Sub Total', value: '$929.79' },
    { label: 'Discount (10%)', value: '- $92.97' },
    { label: 'Tax', value: '$0.00' },
    { label: 'Shipping', value: 'Free', isFree: true },
    { label: 'Total', value: '$836.82', isTotal: true },
  ];
