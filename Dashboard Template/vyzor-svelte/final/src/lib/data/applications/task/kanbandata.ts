

export let columnItems = [
    {
        id: 1,
        status: "New",
        statusCount: "04",
        class:"new",
        idClass:'new-tasks',
        items: [
            {
                createdDate: "28 May",
                daysLeft: "2 days left",
                tags: ["#SPK - 11", "UI/UX"],
                title: "New Dashboard design.",
                Content: true,
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit, Nulla soluta consectetur sit amet elit dolor sit amet.",
                comments: "02",
                likes: "12",
                avatars: [
                    "../../images/faces/11.jpg",
                    "../../images/faces/12.jpg",
                    "../../images/faces/7.jpg",
                    "../../images/faces/8.jpg"
                ]
            },
            {
                createdDate: "30 May",
                daysLeft: "2 days left",
                tags: ["#SPK - 05", "Marketing", "Finance"],
                title: "Marketing next projects.",
                Content: true,
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
                comments: "08",
                likes: "40",
                avatars: [
                    "../../images/faces/13.jpg",
                    "../../images/faces/6.jpg"
                ]
            },
            {
                createdDate: "02 Jun",
                daysLeft: "1 days left",
                tags: ["#SPK - 08", "Designing"],
                title: "Design multi usage landing.",
                imgSrc: true,
                comments: "28",
                likes: "16",
                avatars: [
                    "../../images/faces/2.jpg",
                    "../../images/faces/8.jpg",
                    "../../images/faces/5.jpg",
                    "../../images/faces/10.jpg"
                ],
                src: "../../images/media/media-36.jpg"
            }
        ]
    },
    {
        id: 2,
        status: "Todo", // status of the column
        statusCount: "36",
        class:'todo',
        idClass:'todo-tasks',
        items: [
            {
                createdDate: "01 Jun",
                daysLeft: "10 days left",
                tags: ["#SPK - 07", "Admin", "Authentication"],
                title: "Adding Authentication Pages.",
                Content: true,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
                comments: "02",
                likes: "06",
                avatars: [
                    "../../images/faces/9.jpg",
                    "../../images/faces/8.jpg",
                    "../../images/faces/14.jpg"
                ]
            },
            {
                createdDate: "05 Jun",
                daysLeft: "14 days left",
                tags: ["#SPK - 15", "Planning"],
                title: "New Project Discussion.",
                imgSrc: true,
                src: "../../images/media/media-41.jpg",
                description: "",
                comments: "06",
                likes: "17",
                avatars: [
                    "../../images/faces/2.jpg",
                    "../../images/faces/8.jpg",
                    "../../images/faces/5.jpg",
                    "../../images/faces/10.jpg"
                ]
            }
        ]
    },
    {
        id: 3,
        status: "On Going ", // status of the column
        statusCount: "25",
        class:'in-progress',
        idClass:'inprogress-tasks',
        items: [
            {
                createdDate: "02 Jun",
                daysLeft: "5 days left",
                tags: ["#SPK - 13", "UI Design", "Development"],
                title: "Create Calendar & Mail pages.",
                Content: true,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
                comments: "13",
                likes: "05",
                avatars: [
                    "../../images/faces/13.jpg",
                    "../../images/faces/6.jpg"
                ]
            },
            {
                createdDate: "03 Jun",
                daysLeft: "12 days left",
                Content: true,
                tags: ["#SPK - 09", "Product"],
                title: "Project design Figma,Sketch.",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
                comments: "0",
                likes: "02",
                avatars: [
                    "../../images/faces/12.jpg"
                ]
            },
            {
                createdDate: "07 Jun",
                daysLeft: "Done",
                imgSrc: true,
                tags: ["#SPK - 09", "Product"],
                title: "Project discussion with client",
                description: "",
                comments: "05",
                likes: "11",
                src: '../../images/media/media-69.jpg',
                avatars: [
                    "../../images/faces/4.jpg"
                ]
            }
        ]
    },
    {
        id: 4,
        status: "In Review", // status of the column
        statusCount: "02",
        class:'inreview',
        idClass:"inreview-tasks",
        items: [
            {
                id: 'SPK-15',
                createdDate: '05 Jun',
                daysLeft: "14 days left",
                imgSrc: true,
                tags: ['#SPK - 15', 'Review'],
                title: 'Design Architecture strategy.',
                src: '../../images/media/media-43.jpg',
                likes: "9",
                comments: "35",
                avatars: [
                    '../../images/faces/3.jpg',
                    '../../images/faces/5.jpg',
                    '../../images/faces/7.jpg',
                ],
            },
        ]
    },
    {
        id: 5,
        status: "Completed", // status of the column
        statusCount: "36",
        class:'completed',
        idClass:'completed-tasks',
        items: [
            {
                id: '#SPK - 04',
                createdDate: '12 Jun',
                daysLeft: 'Done',
                Content: true,
                tags: ['#SPK - 04', 'UI/UX'],
                title: 'Sash project update.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
                likes: "18",
                comments: "3",
                avatars: ['../../images/faces/6.jpg', '../../images/faces/13.jpg']
            },
            {
                id: '#SPK - 10',
                createdDate: '10 Jun',
                daysLeft: 'Done',
                tags: ['#SPK - 10', 'Development'],
                title: 'React JS new version update.',
                Content: true,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
                likes: "22",
                comments: "12",
                avatars: ['../../images/faces/10.jpg', '../../images/faces/11.jpg', '../../images/faces/1.jpg']
            },
            {
                id: '#SPK - 16',
                createdDate: '07 Jun',
                daysLeft: 'Done',
                tags: ['#SPK - 16', 'Discussion'],
                title: 'Project discussion with client.',
                imgSrc: true,
                src: '../../images/media/media-69.jpg',
                likes: "11",
                comments: "5",
                avatars: ['../../images/faces/4.jpg']
            }
        ]
    }
]

export const Option1 = [
    { value: 'Sort By', label: 'Sort By' },
    { value: 'Newest', label: 'Newest' },
    { value: 'Date Added', label: 'Date Added' },
    { value: 'Type', label: 'Type' },
    { value: 'A - Z', label: 'A - Z' },
];

export const cars = [
    { value: 1, label: 'Admin' },
    { value: 2, label: 'Authentication' },
    { value: 3, label: 'Designing' },
    { value: 4, label: 'Development' },
    { value: 5, label: 'Finance' },
    { value: 5, label: 'Marketing' },
];

export const simpleItems1 = [
    { value: 1, label: 'Angelina May' },
    { value: 2, label: 'Hercules Jhon' },
    { value: 3, label: 'Kairar Advin' },
    { value: 4, label: 'Mayour Kim' },
];

export const KanbanCards = [
    {
      createdDate: "28 May",
      daysLeft: "2 days left",
      tags: ["#SPK - 11", "UI/UX"],
      title: "New Dashboard design.",
      Content:true,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Nulla soluta consectetur sit amet elit dolor sit amet.",
      comments: "02",
      likes: "12",
      avatars: [
        "../../images/faces/11.jpg",
        "../../images/faces/12.jpg",
        "../../images/faces/7.jpg",
        "../../images/faces/8.jpg"
      ]
    },
    {
      createdDate: "30 May",
      daysLeft: "2 days left",
      tags: ["#SPK - 05", "Marketing", "Finance"],
      title: "Marketing next projects.",
      Content:true,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
      comments: "08",
      likes: "40",
      avatars: [
        "../../images/faces/13.jpg",
        "../../images/faces/6.jpg"
      ]
    },
    {
      createdDate: "02 Jun",
      daysLeft: "1 days left",
      tags: ["#SPK - 08", "Designing"],
      title: "Design multi usage landing.",
      imgSrc: true, 
      comments: "28",
      likes: "16",
      avatars: [
        "../../images/faces/2.jpg",
        "../../images/faces/8.jpg",
        "../../images/faces/5.jpg",
        "../../images/faces/10.jpg"
      ],
      src: "../../images/media/media-36.jpg"
    }
];

export const kanbanCardswarning = [
    {
      createdDate: "01 Jun",
      daysLeft: "10 days left",
      tags: ["#SPK - 07", "Admin", "Authentication"],
      title: "Adding Authentication Pages.",
      Content:true,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
      comments: "02",
      likes: "06",
      avatars: [
        "../../images/faces/9.jpg",
        "../../images/faces/8.jpg",
        "../../images/faces/14.jpg"
      ]
    },
    {
      createdDate: "05 Jun",
      daysLeft: "14 days left",
      tags: ["#SPK - 15", "Planning"],
      title: "New Project Discussion.",
      imgSrc:true,
      src: "../../images/media/media-41.jpg",
      description: "",
      comments: "06",
      likes: "17",
      avatars: [
        "../../images/faces/2.jpg",
        "../../images/faces/8.jpg",
        "../../images/faces/5.jpg",
        "../../images/faces/10.jpg"
      ]
    }
];

export const kanbanCardsinfo = [
    {
      createdDate: "02 Jun",
      daysLeft: "5 days left",
      tags: ["#SPK - 13", "UI Design", "Development"],
      title: "Create Calendar & Mail pages.",
      Content:true,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
      comments: "13",
      likes: "05",
      avatars: [
        "../../images/faces/13.jpg",
        "../../images/faces/6.jpg"
      ]
    },
    {
      createdDate: "03 Jun",
      daysLeft: "12 days left",
      Content:true,
      tags: ["#SPK - 09", "Product"],
      title: "Project design Figma,Sketch.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
      comments: "0",
      likes: "02",
      avatars: [
        "../../images/faces/12.jpg"
      ]
    },
    {
      createdDate: "07 Jun",
      daysLeft: "Done",
      imgSrc:true,
      tags: ["#SPK - 09", "Product"],
      title: "Project discussion with client",
      description: "",
      comments: "05",
      likes: "11",
      src:'../../images/media/media-69.jpg',
      avatars: [
        "../../images/faces/4.jpg"
      ]
    }
  ];
export const kanbanCardsdanger = [
    {
      id: 'SPK-15',
      createdDate: '05 Jun',
      daysLeft: "14 days left",
      imgSrc:true,
      tags: ['#SPK - 15', 'Review'],
      title: 'Design Architecture strategy.',
      src: '../../images/media/media-43.jpg',
      likes: "9",
      comments: "35",
      avatars: [
        '../../images/faces/3.jpg',
        '../../images/faces/5.jpg',
        '../../images/faces/7.jpg',
      ],
    },
];

export const kanbanCardsuccess = [
    {
      id: '#SPK - 04',
      createdDate: '12 Jun',
       daysLeft: 'Done',
      Content:true,
      tags: ['#SPK - 04', 'UI/UX'],
      title: 'Sash project update.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
      likes: "18",
      comments: "3",
      avatars: ['../../images/faces/6.jpg', '../../images/faces/13.jpg']
    },
    {
      id: '#SPK - 10',
      createdDate: '10 Jun',
       daysLeft: 'Done',
      tags: ['#SPK - 10', 'Development'],
      title: 'React JS new version update.',
      Content:true,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
      likes: "22",
      comments: "12",
      avatars: ['../../images/faces/10.jpg', '../../images/faces/11.jpg', '../../images/faces/1.jpg']
    },
    {
      id: '#SPK - 16',
      createdDate: '07 Jun',
       daysLeft: 'Done',
      tags: ['#SPK - 16', 'Discussion'],
      title: 'Project discussion with client.',
      imgSrc:true,
      src: '../../images/media/media-69.jpg',
      likes: "11",
      comments: "5",
      avatars: ['../../images/faces/4.jpg']
    }
  ];