import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkTeamCard } from '../../../@spk/reusable-pages/spk-team-card/spk-team-card';

interface TeamMember {
  id:number;
  imgSrc: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-team',
  imports: [SharedModule, SpkTeamCard],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team {

  TeamMembers: TeamMember[] = [
    {
      id:1,
      imgSrc: "./assets/images/faces/team/1.png",
      name: "John Smith",
      role: "Senior Developer",
    },
    {
      id:2,
      imgSrc: "./assets/images/faces/team/2.png",
      name: "Emily Johnson",
      role: "Product Manager",
    },
    {
      id:3,
      imgSrc: "./assets/images/faces/team/3.png",
      name: "Sarah Davis",
      role: "Marketing Specialist",
    },
    {
      id:4,
      imgSrc: "./assets/images/faces/team/4.png",
      name: "Michael Brown",
      role: "Lead Designer",
    },
    {
      id:5,
      imgSrc: "./assets/images/faces/team/5.png",
      name: "Anna Martinez",
      role: "UX/UI Designer",
    },
    {
      id:6,
      imgSrc: "./assets/images/faces/team/6.png",
      name: "James Taylor",
      role: "Project Manager",
    },
    {
      id:7,
      imgSrc: "./assets/images/faces/team/7.png",
      name: "Olivia Harris",
      role: "Content Strategist",
    },
    {
      id:8,
      imgSrc: "./assets/images/faces/team/8.png",
      name: "Daniel Lee",
      role: "Software Engineer",
    },
    {
      id:9,
      imgSrc: "./assets/images/faces/team/9.png",
      name: "Mia White",
      role: "QA Engineer",
    },
    {
      id:10,
      imgSrc: "./assets/images/faces/team/10.png",
      name: "Ethan Scott",
      role: "Digital Marketing Lead",
    }
  ];


}
