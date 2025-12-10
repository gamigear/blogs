<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('', function () {
    return Inertia::render('Login'); // your React component
});
Route::get('dashboards/sales', function () {
    return Inertia::render('dashboards/sale/sale'); // your React component
});
Route::get('pages/error/404-error', function () {
    return Inertia::render('pages/error/404-error/404-error');
});
