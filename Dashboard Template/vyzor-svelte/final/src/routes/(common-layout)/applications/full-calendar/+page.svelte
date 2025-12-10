<script lang="ts">
    import { onMount } from "svelte";
    import FullCalendar from "svelte-fullcalendar/src/FullCalendar.svelte";
    import timeGridPlugin from "@fullcalendar/timegrid";
    import listPlugin from "@fullcalendar/list";
    import type { DateClickArg } from "@fullcalendar/interaction";
    import dayGridPlugin from "@fullcalendar/daygrid";
    import CalendarEventsList from "$lib/data/applications/calender";
    import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
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
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
    import Select from "svelte-select";

    let eventGuid = 0;
    function createEventId() {
        return String(eventGuid++);
    }

    let options: any = {
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
    let calendarComponentRef: any;
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

    type CalendarEvent = {
        id: string;
        title: string;
        start: Date | string;
        allDay: boolean;
    };

    function handleDateClick(event: DateClickArg): void {
        const title = prompt("Please enter a new title for your event");
        if (title) {
            const newEvent: CalendarEvent = {
                id: createEventId(),
                title,
                start: event.date,
                allDay: event.allDay,
            };

            options.events = [...options.events, newEvent];
            event.view.calendar.addEvent(newEvent);
        }
    }
    function handleEventClick(info: any) {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${info.event.title}'?`,
            )
        ) {
            options.events = options.events.filter(
                (event: any) => event.id !== info.event.id,
            );
            info.event.remove();
        }
    }

    function handleEventDrop(info: any) {
        const updatedEvent = info.event;

        options.events = options.events.map((event: any) => {
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

    interface SchoolEvent {
        title: string;
        date: string;
        description: string;
        badgeColor: string;
    }

    const SchoolEvents: SchoolEvent[] = [
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
        { value: "Primary", label: "Primary" },
        { value: "Secondary", label: "Secondary" },
        { value: "Success", label: "Success" },
        { value: "Info", label: "Info" },
        { value: "Warning", label: "Warning" },
        { value: "Danger", label: "Danger" },
        { value: "Teal", label: "Teal" },
    ];

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
                <div class="p-3" id="full-calendar-activity ">
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

<Modal
    isOpen={show}
    toggle={handleClose}
    fade
    id="addEvent"
    tabindex={-1}
    aria-labelledby="addEventLabel"
>
    <ModalHeader toggle={handleClose}>
        <h6 class="modal-title" id="addEventLabel1">Add Event</h6>
    </ModalHeader>
    <ModalBody>
        <Row class="gy-3">
            <Col md={12}>
                <div class="form-group">
                    <Label class="" for="eventType">Event Type:</Label>
                    <Select
                        items={EventSelect}
                        value={EventSelect[0]}
                        showChevron={true}
                        clearable={false}
                    />
                </div>
            </Col>
            <Col md={12}>
                <div class="form-group">
                    <Label class="" for="eventName">Event Name:</Label>
                    <Input
                        type="text"
                        class=""
                        placeholder="Enter event"
                        id="eventName"
                    />
                </div>
            </Col>
            <Col md={6}>
                <div class="form-group">
                    <Label class="" for="fromDate">From:</Label>
                    <Input
                        type="text"
                        class=""
                        id="fromDate"
                        placeholder="From Date"
                    />
                </div>
            </Col>
            <Col md={6}>
                <div class="form-group">
                    <Label class="" for="toDate">To:</Label>
                    <Input
                        type="text"
                        class=""
                        id="toDate"
                        placeholder="To Date"
                    />
                </div>
            </Col>
            <Col xl={12}>
                <div class="form-group">
                    <Label class="" for="description">Description:</Label>
                    <Input
                        type="textarea"
                        class=""
                        id="event-description"
                        rows={3}
                    />
                </div>
            </Col>
        </Row>
    </ModalBody>
    <ModalFooter>
        <SpkButton color="primary" buttontype="button" customClass="btn"
            >Add Event</SpkButton
        >
    </ModalFooter>
</Modal>

<!-- Add Event Modal -->
