
export const chatDropdown = [
    { lable: "New Chat", link: "#!" },
    { lable: "Create Group", link: "#!" },
    { lable: "Invite a Friend", link: "#!" },
]


//Users
interface ChatUser {
    id: number;
    name: string;
    time: string;
    message: string;
    image: string;
    unreadCount: number;
    typing: boolean;
    status: string;
    isActive: boolean;
};
export const ChatUsers: ChatUser[] = [
    {
        id: 1,
        name: 'John Doe',
        time: '10:30 AM',
        message: "Got your email 😊, I’ll send over the details by EOD! 😄",
        image: '../images/faces/15.jpg',
        unreadCount: 0,
        typing: false,
        status: "online",
        isActive: false,
    },
    {
        id: 2,
        name: 'Alice Smith',
        time: '12:15 PM',
        message: 'Typing...',
        image: '../images/faces/2.jpg',
        unreadCount: 1,
        typing: true,
        status: "online",
        isActive: true,
    },
    {
        id: 3,
        name: 'Bob Johnson',
        time: '2:00 PM',
        message: 'Let’s schedule a call to discuss the project timeline.',
        image: '../images/faces/10.jpg',
        unreadCount: 3,
        typing: false,
        status: "online",
        isActive: false,
    },
    {
        id: 4,
        name: 'Emily Davis',
        time: '4:30 PM',
        message: 'The document is ready for final approval! 💹',
        image: '../images/faces/8.jpg',
        unreadCount: 0,
        typing: false,
        status: "online",
        isActive: false,
    },
];

interface ChatUser1 {
    id: number;
    name: string;
    time: string;
    message: string;
    image: string;
    unreadCount?: number;
    typing?: boolean;
    isActive?: boolean;
    online: boolean;
    status: string
};
export const ChatUsers1: ChatUser1[] = [
    {
        id: 11,
        name: 'Michael Brown',
        time: '7:00 PM',
        message: 'I’ll finish the remaining tasks tomorrow.',
        image: '../images/faces/11.jpg',
        online: false,
        status: "offline"
    },
    {
        id: 12,
        name: 'Sarah Lee',
        time: '10:45 AM',
        message: 'Can you share the meeting notes from yesterday?',
        image: '../images/faces/3.jpg',
        online: false,
        status: "offline"
    },
    {
        id: 13,
        name: 'David Williams',
        time: '3:30 PM',
        message: 'I think we should revise the design before the next meeting.',
        image: '../images/faces/16.jpg',
        online: false,
        status: "offline"
    },
    {
        id: 14,
        name: 'Olivia Wilson',
        time: '3 days ago',
        message: 'Just wanted to confirm the new meeting time.',
        image: '../images/faces/4.jpg',
        online: false,
        status: "offline"
    },
    {
        id: 15,
        name: 'William Clark',
        time: '9:00 AM',
        message:
            'I’ve added the new features to the app. Let me know your thoughts.',
        image: '../images/faces/13.jpg',
        online: false,
        status: "offline"
    },
    {
        id: 16,
        name: 'Sophia Lewis',
        time: '5 days ago',
        message:
            'I’m looking forward to seeing the final version of the presentation.',
        image: '../images/faces/5.jpg',
        online: false,
        status: "offline"
    },
];


//Groups
interface GroupChat {
    id: number;
    name: string;
    onlineCount: number;
    avatars: string[];
    extraCount: number;
};
export const GroupChats: GroupChat[] = [
    {
        id: 1,
        name: 'Team Innovators',
        onlineCount: 4,
        avatars: [
            '../images/faces/2.jpg',
            '../images/faces/8.jpg',
            '../images/faces/2.jpg',
            '../images/faces/10.jpg',
        ],
        extraCount: 19,
    },
    {
        id: 2,
        name: 'Creative Minds Chat',
        onlineCount: 32,
        avatars: [
            '../images/faces/1.jpg',
            '../images/faces/7.jpg',
            '../images/faces/3.jpg',
            '../images/faces/9.jpg',
            '../images/faces/12.jpg',
        ],
        extraCount: 123,
    },
    {
        id: 3,
        name: 'Social Media Managers',
        onlineCount: 3,
        avatars: [
            '../images/faces/4.jpg',
            '../images/faces/8.jpg',
            '../images/faces/13.jpg',
        ],
        extraCount: 15,
    },
    {
        id: 4,
        name: 'Startup Hustlers',
        onlineCount: 5,
        avatars: [
            '../images/faces/1.jpg',
            '../images/faces/7.jpg',
            '../images/faces/14.jpg',
        ],
        extraCount: 28,
    },
    {
        id: 5,
        name: 'Sales Team Network',
        onlineCount: 0,
        avatars: [
            '../images/faces/5.jpg',
            '../images/faces/6.jpg',
            '../images/faces/12.jpg',
            '../images/faces/3.jpg',
        ],
        extraCount: 53,
    },
];

interface GroupChatPreview {
    id: number;
    name: string;
    time: string;
    message: string;
    sender?: string;
    image: string;
    online: boolean;
    unread?: boolean;
};
export const GroupChatPreviews: GroupChatPreview[] = [
    {
        id: 17,
        name: 'Family Chat 😍',
        time: '10:45 AM',
        sender: 'Lily Perez',
        message: 'How are you doing today? 😊',
        image: '../images/faces/17.jpg',
        online: true,
    },
    {
        id: 18,
        name: 'Home Team',
        time: '4:54 PM',
        sender: 'Paul Carter',
        message: 'Let me know if you need anything else.',
        image: '../images/faces/18.jpg',
        online: true,
        unread: true,
    },
    {
        id: 19,
        name: 'Our Tribe 😎',
        time: '8:32 AM',
        message: 'Simon,Melissa,Amanda,Patrick,Siddique',
        image: '../images/faces/19.jpg',
        online: false,
    },
    {
        id: 20,
        name: 'The Circle',
        time: 'Yesterday',
        message: 'Kamalan,Subha,Ambrose,Kiara,Jackson',
        image: '../images/faces/20.jpg',
        online: false,
    },
    {
        id: 21,
        name: 'Family Bond',
        time: '2 Days ago',
        message: 'Subman,Rajen,Kairo,Dibasha,Alexa',
        image: '../images/faces/21.jpg',
        online: false,
    },
];

//Contacts
interface Contact {
    name: string;
    avatar?: string;
    initials?: string;
};
interface GroupedContacts {
    letter: string;
    contacts: Contact[];
};
export const GroupedContacts: GroupedContacts[] = [
    {
        letter: 'A',
        contacts: [{ name: 'Emma Johnson', avatar: '../images/faces/5.jpg' }],
    },
    {
        letter: 'B',
        contacts: [{ name: 'James Miller', avatar: '../images/faces/12.jpg' }],
    },
    {
        letter: 'C',
        contacts: [{ name: 'John Smith', avatar: '../images/faces/14.jpg' }],
    },
    {
        letter: 'D',
        contacts: [{ name: 'Robert Johnson', avatar: '../images/faces/9.jpg' }],
    },
    {
        letter: 'E',
        contacts: [{ name: 'Olivia Smith', avatar: '../images/faces/7.jpg' }],
    },
    {
        letter: 'J',
        contacts: [{ name: 'Paul Carter', avatar: '../images/faces/15.jpg' }],
    },
    {
        letter: 'L',
        contacts: [{ name: 'Andrew Young', initials: 'AY' }],
    },
    {
        letter: 'M',
        contacts: [{ name: 'Isabella Davis', avatar: '../images/faces/2.jpg' }],
    },
    {
        letter: 'N',
        contacts: [{ name: 'Michael Brown', avatar: '../images/faces/10.jpg' }],
    },
    {
        letter: 'W',
        contacts: [{ name: 'Thomas King', avatar: '../images/faces/16.jpg' }],
    },
];

export const chatDropdown2 = [
    { lable: `<i class="ri-message-2-line me-2"></i>Chat`, link: "#!" },
    { lable: `<i class="ri-phone-line me-2"></i>Audio Call`, link: "#!" },
    { lable: `<i class="ri-live-line me-2"></i>Video Call`, link: "#!" },
    { lable: `<i class="ri-edit-line me-2"></i>Edit`, link: "#!" },
    { lable: `<i class="ri-spam-2-line me-2"></i>Block`, link: "#!" },
    { lable: `<i class="ri-delete-bin-line me-2"></i>Delete`, link: "#!" },
]

export const chatDropdown3 = [
    { lable: `<i class="ri-user-3-line me-1"></i>Profile`, link: "#!" },
    { lable: `<i class="ri-format-clear me-1"></i>Clear Chat`, link: "#!" },
    { lable: `<i class="ri-user-unfollow-line me-1"></i>Delete User`, link: "#!" },
    { lable: `<i class="ri-user-forbid-line me-1"></i>Block User`, link: "#!" },
    { lable: `<i class="ri-error-warning-line me-1"></i>Report`, link: "#!" },
]

//Offcanvas
interface FileItem {
    fileName: string;
    fileSize: string;
    fileDate: string;
    fileIcon: string;
};

export const Files: FileItem[] = [
    {
        fileName: 'Vacation_Photo_01.jpg',
        fileSize: '3.4 MB',
        fileDate: '24,Oct 2025 - 14:24PM',
        fileIcon: '../images/media/files/1.png',
    },
    {
        fileName: 'Document_Report_2025.pdf',
        fileSize: '1.2 MB',
        fileDate: '22,Oct 2025 - 10:19AM',
        fileIcon: '../images/media/files/2.png',
    },
    {
        fileName: 'Design_Assets_Logo.png',
        fileSize: '1.5 MB',
        fileDate: '22,Oct 2025 - 10:18AM',
        fileIcon: '../images/media/files/3.png',
    },
    {
        fileName: 'Project_Files_Backup.zip',
        fileSize: '25.8 MB',
        fileDate: '22,Oct 2025 - 10:18AM',
        fileIcon: '../images/media/files/4.png',
    },
];

export const images = [
    {
        src: "../images/media/media-40.jpg",
        w: 600,
        h: 400,
        thumbnail: "../images/media/media-40.jpg"
    },
    {
        src: "../images/media/media-41.jpg",
        w: 600,
        h: 400,
        thumbnail: "../images/media/media-41.jpg"
    },
    {
        src: "../images/media/media-42.jpg",
        w: 600,
        h: 400,
        thumbnail: "../images/media/media-42.jpg"
    },
    {
        src: "../images/media/media-43.jpg",
        w: 600,
        h: 400,
        thumbnail: "../images/media/media-43.jpg"
    },
    {
        src: "../images/media/media-44.jpg",
        w: 600,
        h: 400,
        thumbnail: "../images/media/media-44.jpg"
    },
    {
        src: "../images/media/media-45.jpg",
        w: 600,
        h: 400,
        thumbnail: "../images/media/media-45.jpg"
    },
    {
        src: "../images/media/media-46.jpg",
        w: 600,
        h: 400,
        thumbnail: "../images/media/media-46.jpg"
    },
    {
        src: "../images/media/media-60.jpg",
        w: 600,
        h: 400,
        thumbnail: "../images/media/media-60.jpg"
    },
    {
        src: "../images/media/media-61.jpg",
        w: 600,
        h: 400,
        thumbnail: "../images/media/media-61.jpg"
    },
]