import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Gallery, GalleryItem, GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { SharedModule } from '../../../shared/shared.module';
import { SpkSearchCard } from '../../../@spk/reusable-pages/spk-search-card/spk-search-card';
import { SpkGallery } from '../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery';
import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';

//News
interface Post {
  title: string;
  description: string;
  dateTime: string;
}
interface Book {
  imgSrc: string;
  title: string;
  subTitle: string;
  date: string;
  tags: string[];
  bgColor:string;
}
@Component({
  selector: 'app-search',
  imports: [SharedModule, NgbModule, GalleryModule, LightboxModule, SpkSearchCard, SpkGallery, SpkDropdowns],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  imageData1 = [
    {
      srcUrl: './assets/images/media/media-40.jpg',
      galleryId: 'gallery1',
      companyLogo: './assets/images/company-logos/6.png',
      title: 'Tech Gadgets',
      text: 'Innovative Marvels',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'

    },
    {
      srcUrl: './assets/images/media/media-41.jpg',
      galleryId: 'gallery1',
      companyLogo: './assets/images/company-logos/2.png',
      title: 'Healthy Recipes',
      text: 'Nutrient Nourish',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: './assets/images/media/media-42.jpg',
      galleryId: 'gallery1',
      companyLogo: './assets/images/company-logos/4.png',
      title: 'Travel Explorer',
      text: 'Global Wander',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: './assets/images/media/media-43.jpg',
      galleryId: 'gallery1',
      companyLogo: './assets/images/company-logos/5.png',
      title: 'Fashion Finds',
      text: 'Chic Styles',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: './assets/images/media/media-44.jpg',
      galleryId: 'gallery1',
      companyLogo: './assets/images/company-logos/6.png',
      title: 'Nature Photography',
      text: 'Wild Beauty',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: './assets/images/media/media-45.jpg',
      galleryId: 'gallery1',
      companyLogo: './assets/images/company-logos/7.png',
      title: 'Future Tales',
      text: 'Innovative Marvels',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: './assets/images/media/media-46.jpg',
      galleryId: 'gallery1',
      companyLogo: './assets/images/company-logos/8.png',
      title: 'Science Fiction Books',
      text: 'Future Tales',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: './assets/images/media/media-60.jpg',
      galleryId: 'gallery1',
      companyLogo: './assets/images/company-logos/9.png',
      title: 'Fitness Fanatics',
      text: 'Active Vibes',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    }
  ];
  items!: GalleryItem[];
  constructor(public gallery: Gallery, public lightbox: Lightbox) {}
  ngOnInit() {
  }
  News: Post[] = [
    {
      title: "JavaScript Frameworks: What’s New in 2025?",
      description:
        "A look at the most popular JavaScript frameworks and how they are evolving in 2025. Find out what’s driving the future of web development.",
      dateTime: "March 12, 2025 - 10:00 AM",
    },
    {
      title: "React vs Vue: Which Framework Reigns Supreme?",
      description:
        "We compare React and Vue in terms of speed, scalability, and community support. Which framework is winning the 2025 battle?",
      dateTime: "March 11, 2025 - 2:30 PM",
    },
    {
      title: "Top 5 JavaScript Frameworks for Developers in 2025",
      description:
        "Discover the best frameworks every developer should know this year, from React to Svelte. Find out why each one stands out.",
      dateTime: "March 10, 2025 - 9:15 AM",
    },
    {
      title: "What’s Next for Web Development Frameworks in 2025?",
      description:
        "Explore the future of web development frameworks and what trends developers need to keep an eye on this year.",
      dateTime: "March 9, 2025 - 1:00 PM",
    },
    {
      title: "Is Svelte the Future of Web Development?",
      description:
        "With more developers switching to Svelte, we analyze its rapid growth and why it's being touted as the future of front-end frameworks.",
      dateTime: "March 8, 2025 - 4:45 PM",
    },
];
Books: Book[] = [
  {
    imgSrc: "./assets/images/media/books/6.jpg",
    title: "The Great Gatsby",
    subTitle: "F. Scott Fitzgerald",
    date: "May 10, 1925",
    tags: ["Classic", "Fiction", "Jazz Age"],
    bgColor:'primary'
  },
  {
    imgSrc: "./assets/images/media/books/1.jpg",
    title: "To Kill a Mockingbird",
    subTitle: "Harper Lee",
    date: "July 11, 1960",
    tags: ["Fiction", "Legal", "Southern Gothic"],
    bgColor:'primary'
  },
  {
    imgSrc: "./assets/images/media/books/2.jpg",
    title: "Nineteen Eighty-Four",
    subTitle: "George Orwell",
    date: "June 8, 1949",
    tags: ["Dystopian", "Political", "Science Fiction"],
    bgColor:'primary'
  },
  {
    imgSrc: "./assets/images/media/books/3.jpg",
    title: "The Hobbit",
    subTitle: "J.R.R. Tolkien",
    date: "September 21, 1937",
    tags: ["Fantasy", "Adventure"],
    bgColor:'primary'
  },
  {
    imgSrc: "./assets/images/media/books/4.jpg",
    title: "The Da Vinci Code",
    subTitle: "Dan Brown",
    date: "March 18, 2003",
    tags: ["Mystery", "Thriller", "Conspiracy"],
    bgColor:'primary'
  },
  {
    imgSrc: "./assets/images/media/books/5.jpg",
    title: "Pride and Prejudice",
    subTitle: "Jane Austen",
    date: "January 28, 1813",
    tags: ["Classic", "Romance"],
    bgColor:'primary'
  },
];
}
