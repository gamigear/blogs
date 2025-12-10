<script context="module">
    import MainLayout from "@/layouts/MainLayout.svelte";
    export const layout = MainLayout;
</script>

<script>
    import { onMount } from "svelte";
    import FullCalendar from "svelte-fullcalendar/src/FullCalendar.svelte";
    import timeGridPlugin from "@fullcalendar/timegrid";
    import listPlugin from "@fullcalendar/list";
    import dayGridPlugin from "@fullcalendar/daygrid";
    import CalendarEventsList from "@/shared/data/applications/calender";
    import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import {
        Card,
        CardBody,
        CardHeader,
        Col,
        Input,
        Label,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Row,
    } from "@sveltestrap/sveltestrap";
    import SpkBadge from "@/shared/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import Select from "svelte-select";

    let eventGuid = 0;
    function createEventId() {
        return String(eventGuid++);
    }

    let options = {
        dateClick: handleDateClick,
        eventClick: handleEventClick,
        eventDrop: handleEventDrop,
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        droppable: true,
        editable: true,
        events: CalendarEventsList.events,
        dayMaxEvents: true,
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
        },
        weekends: true,
    };
    let calendarComponentRef;
    let eventData$ = [
        {
            title: "Calendar Events",
            id: "1",
            bg: "primary",
            bgColor: "text-primary",
        },
        {
            title: "Birthday Events",
            id: "2",
            bg: "secondary",
            bgColor: "text-secondary",
        },
        {
            title: "Holiday Calendar",
            id: "3",
            bg: "success",
            bgColor: "text-success",
        },
        {
            title: "Office Events",
            id: "4",
            bg: "info",
            bgColor: "text-info",
            border: "border-info-transparent",
        },
        {
            title: "Other Events",
            id: "5",
            bg: "warning",
            bgColor: "text-warning",
        },
        {
            title: "Festival Events",
            id: "6",
            bg: "danger",
            bgColor: "text-danger",
        },
        {
            title: "Timeline Events",
            id: "7",
            bg: "teal",
            bgColor: "text-teal",
        },
    ];

    // function handleDateClick(event) {
    //     const title = prompt("Please enter a new title for your event");
    //     if (title) {
    //         const newEvent = {
    //             id: createEventId(),
    //             title,
    //             start: event.date,
    //             allDay: event.allDay,
    //         };

    //         options.events = [...options.events, newEvent];
    //         event.view.calendar.addEvent(newEvent);
    //     }
    // }

    // function handleEventClick(info) {
    //     if (
    //         window.confirm(
    //             `Are you sure you want to delete the event '${info.event.title}'?`,
    //         )
    //     ) {
    //         options.events = options.events.filter(
    //             (event) => event.id !== info.event.id,
    //         );
    //         info.event.remove();
    //     }
    // }

    function handleEventDrop(info) {
        const updatedEvent = info.event;

        options.events = options.events.map((event) => {
            if (event.id === updatedEvent.id) {
                return {
                    ...event,
                    start: updatedEvent.start,
                    end: updatedEvent.end,
                };
            }
            return event;
        });

        calendarComponentRef.getAPI().refetchEvents();
    }

    let mounted = false;

    onMount(() => {
        const draggableEl = document.getElementById("external-events");
        const { events } = options;
        if (draggableEl) {
            new Draggable(draggableEl, {
                itemSelector: ".fc-event",
                eventData: function (eventEl) {
                    const title = eventEl.getAttribute("title");
                    const id = createEventId();
                    const classValue = eventEl.getAttribute("class");
                    return {
                        title: title,
                        id: id,
                        className: classValue,
                    };
                },
            });
        }
        mounted = true;
    });

    const SchoolEvents = [
        {
            title: "Annual School Day",
            date: "02 Mar, 2025",
            description:
                "A celebration of the school year with various events and activities for students and staff.",
            badgeColor: "bg-primary",
        },
        {
            title: "Science Fair",
            date: "17 Mar, 2025",
            description:
                "Students will showcase their science projects. Open to all parents and students.",
            badgeColor: "bg-secondary",
        },
        {
            title: "Parent-Teacher Meeting",
            date: "15 Mar, 2025",
            description:
                "An important event where parents meet teachers to discuss the progress of their children.",
            badgeColor: "bg-warning",
        },
        {
            title: "Spring Break",
            date: "13 Mar,2025",
            description:
                "The students get a break for the spring holidays. No school during this period.",
            badgeColor: "bg-info",
        },
        {
            title: "Holiday Celebrations",
            date: "Due Date",
            description:
                "Celebrating the upcoming national holiday with various cultural activities and festivities.",
            badgeColor: "bg-success",
        },
    ];

    const EventSelect = [
        { value: "bg-primary", label: "Primary" },
        { value: "bg-secondary", label: "Secondary" },
        { value: "bg-success", label: "Success" },
        { value: "bg-info", label: "Info" },
        { value: "bg-warning", label: "Warning" },
        { value: "bg-danger", label: "Danger" },
        { value: "bg-teal", label: "Teal" },
    ];

    let selectedDate = null;

    // Modal form fields
    let eventTitle = "";
    let eventType = EventSelect[0];
    let fromDate = "";
    let toDate = "";
    let description = "";
    // THIS is the variable to store the dateClick info
    let modalInfo = null;

    function handleDateClick(info) {
        selectedDate = info.date;
        show = true;
        modalInfo = info;
    }

    function addEvent() {
        if (!eventTitle) return;

        // Use date from modal or clicked cell
        const startDate = fromDate || modalInfo.date;
        const endDate = toDate || modalInfo.date;

        const today = new Date();
        today.setHours(0, 0, 0, 0); // reset time for comparison

        const start = new Date(startDate);
        const end = new Date(endDate);

        // Disable past dates
        if (start < today || end < today) {
            alert("You can only create events for today or future dates.");
            return;
        }

        // Create event object
        const newEvent = {
            id: createEventId(),
            title: eventTitle,
            start: startDate,
            end: endDate,
            allDay: true,
            className: eventType.value,
            borderColor: mapEventColor(eventType.value),    
        };

        console.log(newEvent)

        // Add event to calendar
        modalInfo.view.calendar.addEvent(newEvent);

        // Update local events state
        options.events = [...options.events, newEvent];

        // Reset modal
        eventTitle = "";
        eventType = EventSelect[0];
        fromDate = "";
        toDate = "";
        description = "";
        show = false;
    }

    function mapEventColor(type) {
        switch (type) {
            case "Primary":
                return "#0d6efd";
            case "Secondary":
                return "#6c757d";
            case "Success":
                return "#198754";
            case "Info":
                return "#0dcaf0";
            case "Warning":
                return "#ffc107";
            case "Danger":
                return "#dc3545";
            case "Teal":
                return "#20c997";
            default:
                return "#0d6efd";
        }
    }

    function handleEventClick(info) {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${info.event.title}'?`,
            )
        ) {
            options.events = options.events.filter(
                (event) => event.id !== info.event.id,
            );
            info.event.remove();
        }
    }

    let show = false;

    const handleShow = () => {
        show = true;
    };

    const handleClose = () => {
        show = false;
    };
</script>

<!-- Page Title -->
<svelte:head>
    <title>FullCalendar | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Full Calendar"
    activepage="Applications"
    page="Full Calendar"
/>

<!-- Start::row-1 -->

<Row>
    <Col xxl={3}>
        <Card class="custom-card">
            <CardHeader class="justify-content-between">
                <div class="card-title">All Events</div>
                <button
                    class="btn btn-primary btn-wave"
                    onclick={handleShow}
                    data-bs-toggle="modal"
                    data-bs-target="#addEvent"
                    ><i
                        class="ri-add-line align-middle me-1 fw-medium d-inline-block"
                    ></i>Create New Event</button
                >
            </CardHeader>
            <CardBody class="">
                <div id="external-events" class="">
                    {#each eventData$ as { title, id, bg, bgColor }}
                        <div
                            class={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-${bg}`}
                            data-id={id}
                            {title}
                        >
                            <div
                                class={`fc-event-main text-fixed-white ${bgColor}`}
                            >
                                {title}
                            </div>
                        </div>
                    {/each}
                </div>
            </CardBody>
        </Card>
        <Card class="custom-card">
            <CardBody class="p-0">
                <div class="p-3">
                    <div
                        class="d-flex align-items-center justify-content-between"
                    >
                        <h6 class="fw-medium mb-0">Upcoming Events</h6>
                        <a
                            href="#!"
                            class="fs-13 text-muted text-decoration-underline"
                            >View All<i class="ti ti-arrow-narrow-right"></i></a
                        >
                    </div>
                </div>
                <div
                    class="p-3 overflow-y-scroll customfullcalederheight"
                    id="full-calendar-activity "
                >
                    <ul class="list-unstyled mb-0 fullcalendar-events-activity">
                        {#each SchoolEvents as event}
                            <li>
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap"
                                >
                                    <p class="mb-1 fw-medium">{event.title}</p>
                                    <SpkBadge
                                        Color=""
                                        CustomClass={`${event.badgeColor} mb-1`}
                                        >{event.date}</SpkBadge
                                    >
                                </div>
                                <p class="mb-0 text-muted fs-13">
                                    {event.description}
                                </p>
                            </li>
                        {/each}
                    </ul>
                </div>
            </CardBody>
        </Card>
    </Col>
    <Col xxl={9}>
        <Card class="custom-card">
            <CardHeader>
                <div class="card-title">Full Calendar</div>
            </CardHeader>
            <CardBody>
                <div id="calendar">
                    {#if mounted}
                        <FullCalendar
                            bind:this={calendarComponentRef}
                            {options}
                        />
                    {/if}
                </div>
            </CardBody>
        </Card>
    </Col>
</Row>

<!-- Add Event Modal -->

<!-- Add Event Modal -->

<Modal isOpen={show} toggle={() => (show = false)}>
    <ModalHeader toggle={() => (show = false)}>Add Event</ModalHeader>
    <ModalBody>
        <div class="form-group">
            <Label>Event Type:</Label>
            <Select
                items={EventSelect}
                bind:value={eventType}
                showChevron={true}
                clearable={false}
            />
        </div>
        <div class="form-group">
            <Label>Event Name:</Label>
            <Input
                type="text"
                bind:value={eventTitle}
                placeholder="Enter event"
            />
        </div>
        <div class="form-group">
            <Label>From:</Label>
            <Input type="date" bind:value={fromDate} />
        </div>
        <div class="form-group">
            <Label>To:</Label>
            <Input type="date" bind:value={toDate} />
        </div>
        <div class="form-group">
            <Label>Description:</Label>
            <Input type="textarea" bind:value={description} rows={3} />
        </div>
    </ModalBody>
    <ModalFooter>
        <SpkButton color="primary" onclickfunc={addEvent}>Add Event</SpkButton>
    </ModalFooter>
</Modal>

<!-- Add Event Modal -->
