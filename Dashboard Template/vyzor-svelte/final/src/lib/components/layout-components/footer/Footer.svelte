<script>
    // You can use Svelte's built-in date handling to get the current year.
    let currentYear = new Date().getFullYear();
</script>

<footer class="footer mt-auto py-3 text-center">
    <div class="container">
        <span class="text-muted">
            Copyright © <span id="year">{currentYear}</span>
            <a href="#!" class="text-dark fw-medium">Vyzor</a>. Designed with
            <span class="bi bi-heart-fill text-danger"></span>
            by
            <a href="https://spruko.com/" target="_blank">
                <span class="fw-medium text-primary">Spruko</span>
            </a> All rights reserved
        </span>
    </div>
</footer>
