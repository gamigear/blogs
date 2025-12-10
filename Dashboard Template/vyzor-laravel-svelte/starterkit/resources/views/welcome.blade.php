<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords"
        content="admin dashboard template,admin dashboard ui,admin panel template,inertia js laravel,laravel admin dashboard,laravel admin panel,laravel admin template,laravel dashboard template,laravel inertia template,laravel template admin,svelte admin panel,svelte admin template,svelte dashboard template,svelte framework,
template admin laravel" />
    <title inertia>Vyzor - Inertia + Svelte & Laravel Admin & Dashboard Template</title>
    <!-- Favicon -->
    <link rel="icon" href="{{asset('/images/brand-logos/favicon.ico')}}" type="image/x-icon">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap">
    <link href="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://unpkg.com/quill@2.0.2/dist/quill.snow.css" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsvectormap/dist/jsvectormap.min.css" />
    <!-- ICONS CSS -->
    <link href="{{asset('/icon-fonts/icons.css')}}" rel="stylesheet">

    @vite('resources/js/app.js')
    @inertiaHead
</head>

<body>
    @inertia
</body>

<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-element-bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jsvectormap"></script>
<script src="https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js"></script>

</html>