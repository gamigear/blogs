
import { Fragment, useState } from "react"
import { Col } from "react-bootstrap"
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import BaseLink from "@/shared/layouts-components/baselink/baselink";
import { Lightboxcomponent } from "../../@spk-reusable-components/reusable-plugins/spk-lightbox";
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";

//Users
export const ChatUsers = [
    {
        id: 1,
        name: 'John Doe',
        time: '10:30 AM',
        message: "Got your email 😊, I’ll send over the details by EOD! 😄",
        image: "/build/assets/images/faces/15.jpg",
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
        image: "/build/assets/images/faces/2.jpg",
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
        image: "/build/assets/images/faces/10.jpg",
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
        image: "/build/assets/images/faces/8.jpg",
        unreadCount: 0,
        typing: false,
        status: "online",
        isActive: false,
    },
];
export const ChatUsers1 = [
    {
        id: 11,
        name: 'Michael Brown',
        time: '7:00 PM',
        message: 'I’ll finish the remaining tasks tomorrow.',
        image: "/build/assets/images/faces/11.jpg",
        online: false,
        status: "offline"
    },
    {
        id: 12,
        name: 'Sarah Lee',
        time: '10:45 AM',
        message: 'Can you share the meeting notes from yesterday?',
        image: "/build/assets/images/faces/3.jpg",
        online: false,
        status: "offline"
    },
    {
        id: 13,
        name: 'David Williams',
        time: '3:30 PM',
        message: 'I think we should revise the design before the next meeting.',
        image: "/build/assets/images/faces/16.jpg",
        online: false,
        status: "offline"
    },
    {
        id: 14,
        name: 'Olivia Wilson',
        time: '3 days ago',
        message: 'Just wanted to confirm the new meeting time.',
        image: "/build/assets/images/faces/4.jpg",
        online: false,
        status: "offline"
    },
    {
        id: 15,
        name: 'William Clark',
        time: '9:00 AM',
        message:
            'I’ve added the new features to the app. Let me know your thoughts.',
        image: "/build/assets/images/faces/13.jpg",
        online: false,
        status: "offline"
    },
    {
        id: 16,
        name: 'Sophia Lewis',
        time: '5 days ago',
        message:
            'I’m looking forward to seeing the final version of the presentation.',
        image: "/build/assets/images/faces/5.jpg",
        online: false,
        status: "offline"
    },
];

//Groups

export const GroupChats = [
    {
        id: 1,
        name: 'Team Innovators',
        onlineCount: 4,
        avatars: [
            "/build/assets/images/faces/2.jpg",
            "/build/assets/images/faces/8.jpg",
            "/build/assets/images/faces/2.jpg",
            "/build/assets/images/faces/10.jpg",
        ],
        extraCount: 19,
    },
    {
        id: 2,
        name: 'Creative Minds Chat',
        onlineCount: 32,
        avatars: [
            "/build/assets/images/faces/1.jpg",
            "/build/assets/images/faces/7.jpg",
            "/build/assets/images/faces/3.jpg",
            "/build/assets/images/faces/9.jpg",
            "/build/assets/images/faces/12.jpg",
        ],
        extraCount: 123,
    },
    {
        id: 3,
        name: 'Social Media Managers',
        onlineCount: 3,
        avatars: [
            "/build/assets/images/faces/4.jpg",
            "/build/assets/images/faces/8.jpg",
            "/build/assets/images/faces/13.jpg",
        ],
        extraCount: 15,
    },
    {
        id: 4,
        name: 'Startup Hustlers',
        onlineCount: 5,
        avatars: [
            "/build/assets/images/faces/1.jpg",
            "/build/assets/images/faces/7.jpg",
            "/build/assets/images/faces/14.jpg",
        ],
        extraCount: 28,
    },
    {
        id: 5,
        name: 'Sales Team Network',
        onlineCount: 0,
        avatars: [
            "/build/assets/images/faces/5.jpg",
            "/build/assets/images/faces/6.jpg",
            "/build/assets/images/faces/12.jpg",
            "/build/assets/images/faces/3.jpg",
        ],
        extraCount: 53,
    },
];

export const GroupChatPreviews = [
    {
        id: 17,
        name: 'Family Chat 😍',
        time: '10:45 AM',
        sender: 'Lily Perez',
        message: 'How are you doing today? 😊',
        image: "/build/assets/images/faces/17.jpg",
        status: "online",
    },
    {
        id: 18,
        name: 'Home Team',
        time: '4:54 PM',
        sender: 'Paul Carter',
        message: 'Let me know if you need anything else.',
        image: "/build/assets/images/faces/18.jpg",
        status: "offline",
        unread: true,
    },
    {
        id: 19,
        name: 'Our Tribe 😎',
        time: '8:32 AM',
        message: 'Simon,Melissa,Amanda,Patrick,Siddique',
        image: "/build/assets/images/faces/19.jpg",
        status: "offline",
    },
    {
        id: 20,
        name: 'The Circle',
        time: 'Yesterday',
        message: 'Kamalan,Subha,Ambrose,Kiara,Jackson',
        image: "/build/assets/images/faces/20.jpg",
        status: "offline",
    },
    {
        id: 21,
        name: 'Family Bond',
        time: '2 Days ago',
        message: 'Subman,Rajen,Kairo,Dibasha,Alexa',
        image: "/build/assets/images/faces/21.jpg",
        status: "offline",
    },
];

//Contacts

export const GroupedContacts = [
    {
        letter: 'A',
        contacts: [{ name: 'Emma Johnson', avatar: "/build/assets/images/faces/5.jpg" }],
    },
    {
        letter: 'B',
        contacts: [{ name: 'James Miller', avatar: "/build/assets/images/faces/12.jpg" }],
    },
    {
        letter: 'C',
        contacts: [{ name: 'John Smith', avatar: "/build/assets/images/faces/14.jpg" }],
    },
    {
        letter: 'D',
        contacts: [{ name: 'Robert Johnson', avatar: "/build/assets/images/faces/9.jpg" }],
    },
    {
        letter: 'E',
        contacts: [{ name: 'Olivia Smith', avatar: "/build/assets/images/faces/7.jpg" }],
    },
    {
        letter: 'J',
        contacts: [{ name: 'Paul Carter', avatar: "/build/assets/images/faces/15.jpg" }],
    },
    {
        letter: 'L',
        contacts: [{ name: 'Andrew Young', initials: 'AY' }],
    },
    {
        letter: 'M',
        contacts: [{ name: 'Isabella Davis', avatar: "/build/assets/images/faces/2.jpg" }],
    },
    {
        letter: 'N',
        contacts: [{ name: 'Michael Brown', avatar: "/build/assets/images/faces/10.jpg" }],
    },
    {
        letter: 'W',
        contacts: [{ name: 'Thomas King', avatar: "/build/assets/images/faces/16.jpg" }],
    },
];

//Offcanvas

export const Files = [
    {
        fileName: 'Vacation_Photo_01.jpg',
        fileSize: '3.4 MB',
        fileDate: '24,Oct 2025 - 14:24PM',
        fileIcon: "/build/assets/images/media/files/1.png",
    },
    {
        fileName: 'Document_Report_2025.pdf',
        fileSize: '1.2 MB',
        fileDate: '22,Oct 2025 - 10:19AM',
        fileIcon: "/build/assets/images/media/files/2.png",
    },
    {
        fileName: 'Design_Assets_Logo.png',
        fileSize: '1.5 MB',
        fileDate: '22,Oct 2025 - 10:18AM',
        fileIcon: "/build/assets/images/media/files/3.png",
    },
    {
        fileName: 'Project_Files_Backup.zip',
        fileSize: '25.8 MB',
        fileDate: '22,Oct 2025 - 10:18AM',
        fileIcon: "/build/assets/images/media/files/4.png",
    },
];

export const ChatGallery = () => {

    const [open, setOpen] = useState(false);

    const Slides = [

        { src: "/build/assets/images/media/media-40.jpg" },
        { src: "/build/assets/images/media/media-41.jpg" },
        { src: "/build/assets/images/media/media-42.jpg" },
        { src: "/build/assets/images/media/media-43.jpg" },
        { src: "/build/assets/images/media/media-44.jpg" },
        { src: "/build/assets/images/media/media-45.jpg" },
        { src: "/build/assets/images/media/media-46.jpg" },
        { src: "/build/assets/images/media/media-60.jpg" },
        { src: "/build/assets/images/media/media-61.jpg" },
    ]

    return (
        <Fragment>
            <div className="row g-2">
                <Col lg={4} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-40.jpg" alt="image" />
                    </BaseLink>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-40.jpg" alt="image" />
                    </BaseLink>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-42.jpg" alt="image" />
                    </BaseLink>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-43.jpg" alt="image" />
                    </BaseLink>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-44.jpg" alt="image" />
                    </BaseLink>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-45.jpg" alt="image" />
                    </BaseLink>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-46.jpg" alt="image" />
                    </BaseLink>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-60.jpg" alt="image" />
                    </BaseLink>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <BaseLink href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <BaseImage src="/build/assets/images/media/media-61.jpg" alt="image" />
                    </BaseLink>
                </Col>
            </div>
            <Lightboxcomponent close={() => setOpen(false)} open={open} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} slides={Slides} index={0} />
        </Fragment>
    )
}





