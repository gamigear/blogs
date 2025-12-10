<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('', function () {
    return Inertia::render('Login'); // your React component
});
Route::get('dashboards/sales', action: function () {
    return Inertia::render('dashboards/sales'); // your React component
});

Route::get('pages/error/401-error', function () {
    return Inertia::render('pages/error/401-error');
});
Route::get('pages/error/404-error', function () {
    return Inertia::render('pages/error/404-error');
});
Route::get('pages/error/500-error', function () {
    return Inertia::render('pages/error/500-error');
});