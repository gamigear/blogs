import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Swiper from 'swiper'

import { SharedModule } from '../../../shared/shared.module';
import { register } from 'swiper/element/bundle';

register();

interface CustomReview {
  title: string;
  description: string;
  name: string;
  role: string;
  imgSrc: string;
  cardClass: string;
}
interface Testimonial {
  id: number;
  image: string;
  name: string;
  role: string;
  text: string;
}
interface Testimonialsprop {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
  cardClass: string;
}
@Component({
  selector: 'app-testimonials',
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
	@ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef;
  @ViewChild('swiperContainer2') swiperContainer2!: ElementRef;
  @ViewChild('swiperContainer3') swiperContainer3!: ElementRef;
	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;

		Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperEl1 = this.swiperContainer1.nativeElement;

		Object.assign(swiperEl1, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperEl2 = this.swiperContainer2.nativeElement;

		Object.assign(swiperEl2, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperEl3 = this.swiperContainer3.nativeElement;

		Object.assign(swiperEl3, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},

		  },
	  });
  }
  testimonialSwiper1 = [
    {
        title: 'Quality',
        stars: '<i class="ri-star-fill"></i> <i class="ri-star-fill"></i>  <i class="ri-star-fill"></i> <i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
        description:
            'The product is well-designed and of great quality. It met all my expectations, and I am satisfied with my purchase.',
        name: 'John Doe',
        role: 'Product Manager',
        imgSrc: './assets/images/faces/10.jpg',
    },
    {
        title: 'Overall Experience',
        stars: '<i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-fill"></i>',
        description: 'The performance of this product is outstanding. It works smoothly without any lag.',
        name: 'Sarah Lee',
        role: 'Software Engineer',
        imgSrc: './assets/images/faces/2.jpg',
    },
    {
        title: 'Performance',
        stars: '<i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-half-line"></i>',
        description:
            'The product is well-designed and of great quality. It met all my expectations, and I am satisfied with my purchase.',
        name: 'John Doe',
        role: 'Product Manager',
        imgSrc: './assets/images/faces/10.jpg',
    },
    {
        title: 'Usability',
        stars: ' <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-line"></i> <i class="ri-star-line"></i>',
        description:
            'The usability of the product is okay, but there are some features that could be improved for easier navigation.',
        name: 'Emily Johnson',
        role: 'Marketing Lead',
        imgSrc: './assets/images/faces/4.jpg',
    },
    {
        title: 'Customer Support',
        stars: ' <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-line"></i>',
        description:
            'The customer support team was very responsive and helpful in resolving my queries. The issue was fixed.',
        name: 'David Smith',
        role: 'Sales Manager',
        imgSrc: './assets/images/faces/13.jpg',
    },
    {
        title: 'Value for Money',
        stars: ' <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-fill"></i> <i class="ri-star-half-line"></i>',
        description:
            'The product is decent, but I feel it’s a little overpriced for the features it offers. It’s good, but not exceptional.',
        name: 'Michael Brown',
        role: 'Business Analyst',
        imgSrc: './assets/images/faces/15.jpg',
    },
];
CustomReviews: CustomReview[] = [
  {
      title: "User Experience",
      description: "The customizable templates and clean, user-friendly interface make designing creative assets a breeze. It has boosted our team’s efficiency and allowed us to meet tight deadlines with ease.",
      name: "Clara Johnson",
      role: "Senior Graphic Designer",
      imgSrc: "./assets/images/faces/1.jpg",
      cardClass: "primary border-0",

  },
  {
      title: "Integration & Compatibility",
      description: "The integration features are excellent and have made a huge difference in streamlining our workflow. It fits perfectly with our existing tools and allows our teams to collaborate better.",
      name: "Peter Hayes",
      role: "Chief Technology Officer",
      imgSrc: "./assets/images/faces/10.jpg",
      cardClass: "success border-0",

  },
  {
      title: "Product Quality",
      description: "This product has revolutionized our marketing strategy by providing real-time analytics and a seamless experience. We’ve seen significant improvements in our customer engagement.",
      name: "John Thompson",
      role: "Marketing Director",
      imgSrc: "./assets/images/faces/9.jpg",
      cardClass: "warning border-0",

  },
  {
      title: "Efficiency",
      description: "The automation tools have saved us so much time, especially during critical project timelines. We've been able to reduce delays and improve our overall project delivery rates.",
      name: "Ashley Miller",
      role: "Project Manager",
      imgSrc: "./assets/images/faces/5.jpg",
      cardClass: "info border-0",

  },
  {
      title: "Customer Support",
      description: "Amazing customer support team—always available and ready to resolve issues. Their prompt responses and dedication to fixing problems have made our experience exceptional.",
      name: "Kevin Brown",
      role: "Customer Relations Manager",
      imgSrc: "./assets/images/faces/14.jpg",
      cardClass: "danger border-0",

  },
  {
      title: "Sales Performance",
      description: "The tools and analytics have significantly improved our sales process. I’m now able to track leads better, prioritize tasks, and close deals more efficiently. It’s truly a game-changer.",
      name: "Grace Lee",
      role: "Sales Executive",
      imgSrc: "./assets/images/faces/3.jpg",
      cardClass: "teal border-0",

  },
];
Testimonials3: Testimonial[] = [
  {
      id: 1,
      image: "./assets/images/faces/1.jpg",
      name: "Clara Johnson",
      role: "Senior Graphic Designer",
      text: "This product has made a difference in my daily routine. Simple, effective, and worth every penny.",
  },
  {
      id: 2,
      image: "./assets/images/faces/6.jpg",
      name: "Ashley Miller",
      role: "Project Manager",
      text: "I love the modern design, and it delivers top-notch performance. A great addition to my setup!",
  },
  {
      id: 3,
      image: "./assets/images/faces/3.jpg",
      name: "Grace Lee",
      role: "Sales Executive",
      text: "Initially skeptical, but this product exceeded my expectations. Highly recommended.",
  },
  {
      id: 4,
      image: "./assets/images/faces/10.jpg",
      name: "Lucas Scott",
      role: "Business Consultant",
      text: "Does exactly what it promises. Easy to use, durable, and fantastic. I'm a happy customer!",
  },
  {
      id: 5,
      image: "./assets/images/faces/5.jpg",
      name: "Maria Evans",
      role: "Operations Manager",
      text: "Affordable and high-quality. This product outshines competitors. Thrilled with the value I got!",
  },
  {
      id: 6,
      image: "./assets/images/faces/6.jpg",
      name: "Rachel Walker",
      role: "Senior Analyst",
      text: "Exceptional product. Quick responses and a genuine commitment to customer satisfaction.",
  },
];
Testimonialsdata: Testimonialsprop[] = [
  {
      id: '1',
      name: 'John Thompson',
      role: 'Marketing Director',
      text: 'This product has revolutionized our marketing strategy by providing real-time analytics and a seamless experience. We’ve seen significant improvements in our customer engagement.',
      image: './assets/images/faces/9.jpg',
      cardClass: 'primary',
  },
  {
      id: '2',
      name: 'Clara Johnson',
      role: 'Senior Graphic Designer',
      text: 'The customizable templates and clean, user-friendly interface make designing creative assets a breeze. It has boosted our team’s efficiency and allowed us to meet tight deadlines with ease.',
      image: './assets/images/faces/2.jpg',
      cardClass: 'success',
  },
  {
      id: '3',
      name: 'Peter Hayes',
      role: 'Chief Technology Officer',
      text: 'The integration features are excellent and have made a huge difference in streamlining our workflow. It fits perfectly with our existing tools and allows our teams to collaborate better.',
      image: './assets/images/faces/10.jpg',
      cardClass: 'warning',
  },
  {
      id: '4',
      name: 'Ashley Miller',
      role: 'Project Manager',
      text: 'The automation tools have saved us so much time, especially during critical project timelines. We\'ve been able to reduce delays and improve our overall project delivery rates and exceptional support.',
      image: './assets/images/faces/3.jpg',
      cardClass: 'info',
  },
  {
      id: '5',
      name: 'Kevin Brown',
      role: 'Customer Relations Manager',
      text: 'Amazing customer support team—always available and ready to resolve issues. Their prompt responses and dedication to fixing problems have made our experience exceptional.',
      image: './assets/images/faces/13.jpg',
      cardClass: 'danger',
  },
  {
      id: '6',
      name: 'Grace Lee',
      role: 'Sales Executive',
      text: 'The tools and analytics have significantly improved our sales process. I’m now able to track leads better, prioritize tasks, and close deals more efficiently. It’s truly a game-changer.',
      image: './assets/images/faces/5.jpg',
      cardClass: 'teal',
  },
];
}
