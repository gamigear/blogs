<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
// $routes->get('/', 'Home::index');

/******** Dashboards ********/
$routes->get('/', 'Dashboards::redirectToIndex');
$routes->get('/index', 'Dashboards::index');
