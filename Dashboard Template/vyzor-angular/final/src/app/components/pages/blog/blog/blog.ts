
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkBlogCard } from '../../../../@spk/reusable-pages/blog/spk-blog-card/spk-blog-card';
import { SpkPopularCard } from '../../../../@spk/reusable-pages/blog/spk-popular-card/spk-popular-card';


interface BlogPost {
  image: string;
  title: string;
  desc: string;
};
//Top Stories

interface TopStory {
  image: string;
  badgeText: string;
  badgeClass: string;
  title: string;
};
interface BlogCategoryCard {
  imgSrc: string;
  title: string;
};
interface BlogCard {
  image: string;
  title: string;
  desc: string;
};
interface PopularPost {
  image: string;
  title: string;
  dateViews: string;
};

@Component({
    selector: 'app-blog',
    templateUrl: './blog.html',
    styleUrls: ['./blog.scss'],
    standalone: true,
    imports: [NgbPaginationModule, SharedModule, RouterModule, SpkBlogCard, SpkPopularCard]
})
export class Blog implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  BlogPosts: BlogPost[] = [
    {
      image: "./assets/images/media/blog/2.jpg",
      title: "Automation",
      desc: "The Future of Automation: A Robot at Work",
    },
    {
      image: "./assets/images/media/blog/3.jpg",
      title: "Digital Trends",
      desc: "How Platforms are Shaping Digital Communication",
    },
    {
      image: "./assets/images/media/blog/4.jpg",
      title: "Robotics",
      desc: "The Role of Robotic Hands in Modern Technology",
    },
    {
      image: "./assets/images/media/blog/5.jpg",
      title: "Gadgets",
      desc: "Exploring the Latest Innovations in Headphone Technology.",
    },
  ];
  TopStories: TopStory[] = [
    {
      image: "./assets/images/media/blog/6.jpg",
      badgeText: "Technology & Innovation",
      badgeClass: "bg-primary-transparent",
      title: "How 5G is Revolutionizing Connectivity Across the Globe",
    },
    {
      image: "./assets/images/media/blog/7.jpg",
      badgeText: "Health & Wellness",
      badgeClass: "bg-secondary-transparent",
      title: "The Benefits of a Plant-Based Diet: What You Need to Know",
    },
    {
      image: "./assets/images/media/blog/8.jpg",
      badgeText: "Business & Finance",
      badgeClass: "bg-warning-transparent",
      title: "2025 Financial Trends: How to Prepare for a Changing Market",
    },
    {
      image: "./assets/images/media/blog/9.jpg",
      badgeText: "Travel & Adventure",
      badgeClass: "bg-success-transparent",
      title: "The Future of Travel Post-Pandemic: What to Expect",
    },
    {
      image: "./assets/images/media/blog/10.jpg",
      badgeText: "Entertainment & Culture",
      badgeClass: "bg-info-transparent",
      title: "How Social Media is Shaping the Entertainment Industry",
    },
  ];
  //Popular Topics

  BlogCategoryCards: BlogCategoryCard[] = [
    { imgSrc: "./assets/images/media/blog/11.jpg", title: "Technology" },
    { imgSrc: "./assets/images/media/blog/12.jpg", title: "Health" },
    { imgSrc: "./assets/images/media/blog/13.jpg", title: "Business" },
    { imgSrc: "./assets/images/media/blog/14.jpg", title: "Lifestyle" },
    { imgSrc: "./assets/images/media/blog/15.jpg", title: "Travel" },
    { imgSrc: "./assets/images/media/blog/16.jpg", title: "Entertainment" },
    { imgSrc: "./assets/images/media/blog/17.jpg", title: "Food & Recipes" },
    { imgSrc: "./assets/images/media/blog/18.jpg", title: "Animals" },
  ];
  BlogCards: BlogCard[] = [
    {
      image: "./assets/images/media/blog/19.jpg",
      title: "Technology",
      desc: "Tech Innovations and Future Trends",
    },
    {
      image: "./assets/images/media/blog/20.jpg",
      title: "Health & Wellness",
      desc: "How to Stay Fit and Healthy in 2025",
    },
    {
      image: "./assets/images/media/blog/21.jpg",
      title: "Business & Finance",
      desc: "The Ultimate Guide to Personal Finance for Beginners",
    },
    {
      image: "./assets/images/media/blog/22.jpg",
      title: "Lifestyle",
      desc: "The Art of Minimalism: Simplify Your Life",
    },
    {
      image: "./assets/images/media/blog/23.jpg",
      title: "Productivity",
      desc: "The Secret to Effective Time Management",
    },
    {
      image: "./assets/images/media/blog/24.jpg",
      title: "Travel",
      desc: "Top 10 Hidden Travel Gems You Need to Visit",
    },
    {
      image: "./assets/images/media/blog/25.jpg",
      title: "Entertainment",
      desc: "Breaking Down the Latest Blockbuster Movies of 2025",
    },
    {
      image: "./assets/images/media/blog/26.jpg",
      title: "Food & Recipes",
      desc: "Healthy and Delicious Recipes for Every Meal",
    },
  ];
  PopularPosts: PopularPost[] = [
    {
      image: "./assets/images/media/blog/11.jpg",
      title: "Building a Sustainable Future: How Green Technology is Changing the World",
      dateViews: "Mar 15, 2025 - 1.8k Views",
    },
    {
      image: "./assets/images/media/blog/10.jpg",
      title: "Exploring the Rise of Remote Work: Trends and Best Practices",
      dateViews: "Apr 3, 2025 - 2.3k Views",
    },
    {
      image: "./assets/images/media/blog/9.jpg",
      title: "Digital Marketing Trends: What You Need to Know for 2025",
      dateViews: "May 10, 2025 - 3.1k Views",
    },
    {
      image: "./assets/images/media/blog/4.jpg",
      title: "Top 5 Budget-Friendly Home Improvement Projects",
      dateViews: "Jun 22, 2025 - 4.0k Views",
    },
    {
      image: "./assets/images/media/blog/7.jpg",
      title: "Mastering the Art of Public Speaking",
      dateViews: "Jul 19, 2025 - 850 Views",
    },
  ];

}
