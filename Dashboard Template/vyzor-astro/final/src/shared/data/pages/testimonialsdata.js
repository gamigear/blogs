

//Testimonials Style 1

import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face9 from '../../../assets/images/faces/9.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face13 from '../../../assets/images/faces/13.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import face15 from '../../../assets/images/faces/15.jpg';


export const Reviews = [
    {
        title: 'Quality',
        stars: (
            `<i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-half-line"></i>`
        ),
        description:
            'The product is well-designed and of great quality. It met all my expectations, and I am satisfied with my purchase.',
        name: 'John Doe',
        role: 'Product Manager',
        imgSrc: face10,
    },
    {
        title: 'Overall Experience',
        stars: (
            `<i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>`
        ),
        description: 'The performance of this product is outstanding. It works smoothly without any lag.',
        name: 'Sarah Lee',
        role: 'Software Engineer',
        imgSrc: face2,
    },
    {
        title: 'Performance',
        stars: (
            `<i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-half-line"></i>`
        ),
        description:
            'The product is well-designed and of great quality. It met all my expectations, and I am satisfied with my purchase.',
        name: 'John Doe',
        role: 'Product Manager',
        imgSrc: face10,
    },
    {
        title: 'Usability',
        stars: (
            `<i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-line"></i>
                <i class="ri-star-line"></i>`
        ),
        description:
            'The usability of the product is okay, but there are some features that could be improved for easier navigation.',
        name: 'Emily Johnson',
        role: 'Marketing Lead',
        imgSrc: face4,
    },
    {
        title: 'Customer Support',
        stars: (
            `<i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-line"></i>`
        ),
        description:
            'The customer support team was very responsive and helpful in resolving my queries. The issue was fixed.',
        name: 'David Smith',
        role: 'Sales Manager',
        imgSrc: face13,
    },
    {
        title: 'Value for Money',
        stars: (
            `<i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-fill me-1"></i>
                <i class="ri-star-half-line"></i>`
        ),
        description:
            'The product is decent, but I feel it’s a little overpriced for the features it offers. It’s good, but not exceptional.',
        name: 'Michael Brown',
        role: 'Business Analyst',
        imgSrc: face15,
    },
];

//Testimonials Style 2


export const CustomReviews = [
    {
        title: "User Experience",
        description: "The customizable templates and clean, user-friendly interface make designing creative assets a breeze. It has boosted our team’s efficiency and allowed us to meet tight deadlines with ease.",
        name: "Clara Johnson",
        role: "Senior Graphic Designer",
        imgSrc: face1,
        color: "primary border-0",
        stars: (
            `<i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-half-line" ></i>`
        ),
    },
    {
        title: "Integration & Compatibility",
        description: "The integration features are excellent and have made a huge difference in streamlining our workflow. It fits perfectly with our existing tools and allows our teams to collaborate better.",
        name: "Peter Hayes",
        role: "Chief Technology Officer",
        imgSrc: face10,
        color: "success border-0",
        stars: (
            `<i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-half-line" ></i>`
        ),
    },
    {
        title: "Product Quality",
        description: "This product has revolutionized our marketing strategy by providing real-time analytics and a seamless experience. We’ve seen significant improvements in our customer engagement.",
        name: "John Thompson",
        role: "Marketing Director",
        imgSrc: face9,
        color: "warning border-0",
        stars: (
            `<i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-half-line" ></i>`
        ),
    },
    {
        title: "Efficiency",
        description: "The automation tools have saved us so much time, especially during critical project timelines. We've been able to reduce delays and improve our overall project delivery rates.",
        name: "Ashley Miller",
        role: "Project Manager",
        imgSrc: face5,
        color: "info border-0",
        stars: (
            `<i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-half-line" ></i>`
        ),
    },
    {
        title: "Customer Support",
        description: "Amazing customer support team—always available and ready to resolve issues. Their prompt responses and dedication to fixing problems have made our experience exceptional.",
        name: "Kevin Brown",
        role: "Customer Relations Manager",
        imgSrc: face14,
        color: "danger border-0",
        stars: (
            `<i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-half-line" ></i>`
        ),
    },
    {
        title: "Sales Performance",
        description: "The tools and analytics have significantly improved our sales process. I’m now able to track leads better, prioritize tasks, and close deals more efficiently. It’s truly a game-changer.",
        name: "Grace Lee",
        role: "Sales Executive",
        imgSrc: face3,
        color: "teal border-0",
        stars: (
            `<i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-fill me-1" ></i>
                <i class="ri-star-half-line" ></i>`
        ),
    },
];


//Testimonials Style 3


export const Testimonials3 = [
    {
        id: 1,
        image: face1,
        name: "Clara Johnson",
        role: "Senior Graphic Designer",
        rating: 4.5,
        text: "This product has made a difference in my daily routine. Simple, effective, and worth every penny.",
    },
    {
        id: 2,
        image: face6,
        name: "Ashley Miller",
        role: "Project Manager",
        rating: 4.5,
        text: "I love the modern design, and it delivers top-notch performance. A great addition to my setup!",
    },
    {
        id: 3,
        image: face3,
        name: "Grace Lee",
        role: "Sales Executive",
        rating: 4.5,
        text: "Initially skeptical, but this product exceeded my expectations. Highly recommended.",
    },
    {
        id: 4,
        image: face10,
        name: "Lucas Scott",
        role: "Business Consultant",
        rating: 4.5,
        text: "Does exactly what it promises. Easy to use, durable, and fantastic. I'm a happy customer!",
    },
    {
        id: 5,
        image: face5,
        name: "Maria Evans",
        role: "Operations Manager",
        rating: 4.5,
        text: "Affordable and high-quality. This product outshines competitors. Thrilled with the value I got!",
    },
    {
        id: 6,
        image: face6,
        name: "Rachel Walker",
        role: "Senior Analyst",
        rating: 4.5,
        text: "Exceptional product. Quick responses and a genuine commitment to customer satisfaction.",
    },
];


//Testimonials Style 4


export const Testimonialsdata = [
    {
        id: '1',
        name: 'John Thompson',
        role: 'Marketing Director',
        text: 'This product has revolutionized our marketing strategy by providing real-time analytics and a seamless experience. We’ve seen significant improvements in our customer engagement.',
        image: face9,
        rating: 4.5,
        cardClass: 'primary',
    },
    {
        id: '2',
        name: 'Clara Johnson',
        role: 'Senior Graphic Designer',
        text: 'The customizable templates and clean, user-friendly interface make designing creative assets a breeze. It has boosted our team’s efficiency and allowed us to meet tight deadlines with ease.',
        image: face2,
        rating: 4.5,
        cardClass: 'success',
    },
    {
        id: '3',
        name: 'Peter Hayes',
        role: 'Chief Technology Officer',
        text: 'The integration features are excellent and have made a huge difference in streamlining our workflow. It fits perfectly with our existing tools and allows our teams to collaborate better.',
        image: face10,
        rating: 4.5,
        cardClass: 'warning',
    },
    {
        id: '4',
        name: 'Ashley Miller',
        role: 'Project Manager',
        text: 'The automation tools have saved us so much time, especially during critical project timelines. We\'ve been able to reduce delays and improve our overall project delivery rates and exceptional support.',
        image: face3,
        rating: 4.5,
        cardClass: 'info',
    },
    {
        id: '5',
        name: 'Kevin Brown',
        role: 'Customer Relations Manager',
        text: 'Amazing customer support team—always available and ready to resolve issues. Their prompt responses and dedication to fixing problems have made our experience exceptional.',
        image: face13,
        rating: 4.5,
        cardClass: 'danger',
    },
    {
        id: '6',
        name: 'Grace Lee',
        role: 'Sales Executive',
        text: 'The tools and analytics have significantly improved our sales process. I’m now able to track leads better, prioritize tasks, and close deals more efficiently. It’s truly a game-changer.',
        image: face5,
        rating: 4.5,
        cardClass: 'teal',
    },
];


