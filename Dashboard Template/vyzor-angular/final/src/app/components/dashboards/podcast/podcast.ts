import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkReusableTables } from '../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SharedModule } from '../../../shared/shared.module';

interface Tag {
  id: number;
  className: string;
  icon: string;
  text: string;
  isActive?: boolean;
};
//Top Podcasters
interface User {
  name: string;
  avatar: string;
  title: string;
  category: string;
  followers: string;
  badgeClass: string;
};
//Recommendations

interface MediaCard {
  image: string;
  title: string;
  author: string;
  id: number;
};
interface ListItem {
  id: number | string;
  image: string;
  title: string;
  author: string;
  likes: number;
};
type TableRow = {
  id: number;
  image: string;
  title: string;
  author: string;
  category: string;
  episodes: number;
  views: string;
  duration: string;
  comments: string;
  likes: string;
  shares: string;
  rating: number;
  status: string;
};
@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [SharedModule, NgbDropdownModule, CommonModule, SpkDropdowns, SpkReusableTables],
  templateUrl: './podcast.html',
  styleUrl: './podcast.scss'
})
export class Podcast {

  PodcastCategeries: Tag[] = [
    { id: 1, className: 'nft-tag-primary active', icon: 'ti ti-world', text: 'All', isActive: true },
    { id: 2, className: 'nft-tag-secondary', icon: 'ti ti-flame', text: 'New Trends' },
    { id: 3, className: 'nft-tag-info', icon: 'ti ti-palette', text: 'Art Work' },
    { id: 4, className: 'nft-tag-success', icon: 'ti ti-device-gamepad-2', text: 'Games' },
    { id: 5, className: 'nft-tag-danger', icon: 'ti ti-tie', text: 'Fashion' },
    { id: 6, className: 'nft-tag-purple', icon: 'ti ti-music', text: 'Music' },
  ];
  Podcasters: User[] = [
    {
      name: 'John Doe',
      avatar: './assets/images/faces/13.jpg',
      title: 'Tech Talks',
      category: 'Technology',
      followers: '1.2M - Followers',
      badgeClass: 'bg-primary-transparent',
    },
    {
      name: 'Sarah Lee',
      avatar: './assets/images/faces/3.jpg',
      title: 'Fitness Fuel',
      category: 'Health & Fitness',
      followers: '850K - Followers',
      badgeClass: 'bg-secondary-transparent',
    },
    {
      name: 'Emily Stone',
      avatar: './assets/images/faces/1.jpg',
      title: 'True Crime Chronicles',
      category: 'True Crime',
      followers: '2.1M - Followers',
      badgeClass: 'bg-success-transparent',
    },
    {
      name: 'Mark Taylor',
      avatar: './assets/images/faces/15.jpg',
      title: 'Financial Futures',
      category: 'Finance & Economics',
      followers: '1M - Followers',
      badgeClass: 'bg-info-transparent',
    },
    {
      name: 'David Brown',
      avatar: './assets/images/faces/11.jpg',
      title: 'The Comedy Show',
      category: 'Comedy',
      followers: '1.5M - Followers',
      badgeClass: 'bg-warning-transparent',
    },
];
MediaCards: MediaCard[] = [
  {
    id: 1,
    image: './assets/images/media/media-71.jpg',
    title: 'The Culture Lab',
    author: 'Sophia Miller',
  },
  {
    id: 2,
    image: './assets/images/media/media-73.jpg',
    title: 'Morning Brew',
    author: 'Jake Matthews',
  },
  {
    id: 3,
    image: './assets/images/media/media-79.jpg',
    title: 'Future of Finance',
    author: 'Sarah Lee',
  },
  {
    id: 4,
    image: './assets/images/media/media-77.jpg',
    title: 'Waves of Change',
    author: 'David Green',
  },
  {
    id: 5,
    image: './assets/images/media/media-76.jpg',
    title: 'Tech Deep Dive',
    author: 'Emily Scott',
  },
  {
    id: 6,
    image: './assets/images/media/media-75.jpg',
    title: 'Unsolved Mysteries',
    author: 'Rachel Adams',
  },
];
RecentlyMedia: MediaCard[] = [
  {
    id: 1,
    image: "./assets/images/media/media-43.jpg",
    title: "The Digital Revolution",
    author: "Alex Turner",
  },
  {
    id: 2,
    image: "./assets/images/media/media-44.jpg",
    title: "Unsolved Mysteries",
    author: "Rachel Adams",
  },
  {
    id: 3,
    image: "./assets/images/media/media-45.jpg",
    title: "Startup Stories",
    author: "James Hawkins",
  },
  {
    id: 4,
    image: "./assets/images/media/media-46.jpg",
    title: "Healthy Habits",
    author: "Olivia Reed",
  },
  {
    id: 5,
    image: "./assets/images/media/media-41.jpg",
    title: "Beyond the Horizon",
    author: "Michael Harris",
  },
];
ListItems: ListItem[] = [
  {
    id: "01",
    image: "./assets/images/media/media-73.jpg",
    title: "Voices of the Future",
    author: "John Harris",
    likes: 340,
  },
  {
    id: "02",
    image: "./assets/images/media/media-79.jpg",
    title: "The Art of Storytelling",
    author: "Mia Roberts",
    likes: 133,
  },
  {
    id: "03",
    image: "./assets/images/media/media-77.jpg",
    title: "The Healthy Life",
    author: "Laura Collins",
    likes: 234,
  },
  {
    id: "04",
    image: "./assets/images/media/media-76.jpg",
    title: "Crisis Management",
    author: "Robert Blake",
    likes: 432,
  },
  {
    id: "05",
    image: "./assets/images/media/media-75.jpg",
    title: "Gastronomic Adventures",
    author: "Lily Jackson",
    likes: 153,
  },
  {
    id: "06",
    image: "./assets/images/media/media-71.jpg",
    title: "Innovate to Win",
    author: "Chris Brooks",
    likes: 355,
  },
];
PodcastHeader = [
  {header:'S.No'},
  {header:'Podcast Name'},
  {header:'Genre'},
  {header:'Episodes'},
  {header:'Total Listeners'},
  {header:'Avg. Play Time'},
  {header:'Likes'},
  {header:'Comments'},
  {header:'Shares'},
  {header:'Rating'},
  {header:'Status'},
  ];
  PodcastTable: TableRow[] = [
    {
      id: 1,
      image: "./assets/images/media/media-71.jpg",
      title: "The Digital Revolution",
      author: "Alex Turner",
      category: "Technology",
      episodes: 25,
      views: "1.2M",
      duration: "35 min",
      comments: "24K",
      likes: "5K",
      shares: "1.5K",
      rating: 4.8,
      status: "Active",
    },
    {
      id: 2,
      image: "./assets/images/media/media-79.jpg",
      title: "Unsolved Mysteries",
      author: "Rachel Adams",
      category: "True Crime",
      episodes: 40,
      views: "3.1M",
      duration: "50 min",
      comments: "32K",
      likes: "8K",
      shares: "3.2K",
      rating: 4.9,
      status: "Active",
    },
    {
      id: 3,
      image: "./assets/images/media/media-78.jpg",
      title: "Startup Stories",
      author: "James Hawkins",
      category: "Business",
      episodes: 15,
      views: "850K",
      duration: "45 min",
      comments: "19K",
      likes: "3K",
      shares: "1K",
      rating: 4.7,
      status: "Inactive",
    },
    {
      id: 4,
      image: "./assets/images/media/media-77.jpg",
      title: "Healthy Habits",
      author: "Olivia Reed",
      category: "Health & Fitness",
      episodes: 20,
      views: "900K",
      duration: "38 min",
      comments: "22K",
      likes: "4.5K",
      shares: "1.2K",
      rating: 4.5,
      status: "Active",
    },
    {
      id: 5,
      image: "./assets/images/media/media-76.jpg",
      title: "Beyond the Horizon",
      author: "Michael Harris",
      category: "Travel",
      episodes: 12,
      views: "500K",
      duration: "40 min",
      comments: "15K",
      likes: "2K",
      shares: "800",
      rating: 4.6,
      status: "Active",
    },
    {
      id: 6,
      image: "./assets/images/media/media-75.jpg",
      title: "The Culture Lab",
      author: "Sophia Miller",
      category: "Culture",
      episodes: 30,
      views: "1.8M",
      duration: "28 min",
      comments: "27K",
      likes: "6K",
      shares: "2.5K",
      rating: 4.8,
      status: "Active",
    },
];
}
