<script>
    import { onMount, onDestroy } from "svelte";
    let timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    // Function to update the timer
    const updateTimer = () => {
        const future = new Date("Dec 30, 2025 12:00:00").getTime();
        const now = new Date().getTime();
        const diff = future - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timeRemaining = { days, hours, minutes, seconds };
    };

    // Set up the timer when the component is mounted
    let timer;
    onMount(() => {
        timer = setInterval(updateTimer, 1000);
    });

    // Clean up the timer when the component is destroyed
    onDestroy(() => {
        clearInterval(timer);
    });
</script>

<div
    class="d-flex gap-5 flex-wrap gy-xxl-0 gy-3 justify-content-center my-4 rounded p-4 timer-container"
    id="timer"
>
    <div class="text-center">
        <div class="">
            <p class="mb-1 fs-13 fw-medium">Days</p>
            <h4 class="mb-0 fw-semibold">{timeRemaining.days}</h4>
        </div>
    </div>
    <div class="text-center">
        <div class="">
            <p class="mb-1 fs-13 fw-medium">Hours</p>
            <h4 class="mb-0 fw-semibold">{timeRemaining.hours}</h4>
        </div>
    </div>
    <div class="text-center">
        <div class="">
            <p class="mb-1 fs-13 fw-medium">Minutes</p>
            <h4 class="mb-0 fw-semibold">{timeRemaining.minutes}</h4>
        </div>
    </div>
    <div class="text-center">
        <div class="">
            <p class="mb-1 fs-13 fw-medium">Seconds</p>
            <h4 class="mb-0 fw-semibold">{timeRemaining.seconds}</h4>
        </div>
    </div>
</div>
