<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title inertia>Vyzor - Inertia + React & Laravel Admin & Dashboard Template</title>
    <meta name="keywords" content="admin bootstrap dashboard ,admin dashboard laravel ,admin dashboard react ,admin dashboard ui ,admin panel bootstrap template ,admin panel for laravel ,dashboard bootstrap template ,dashboard laravel ,dashboard template react ,laravel admin dashboard ,laravel user interface ,react admin panel ,react bootstrap template ,react template admin ,react template dashboard">

    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ URL::asset('favicon.ico') }}">

    <!-- ICONS CSS -->
    <link href="{{ asset('build/assets/icon-fonts/icons.css') }}" rel="stylesheet">
    <!--@routes-->
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
