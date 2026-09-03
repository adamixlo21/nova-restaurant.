<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\Admin\ReservationController as AdminReservationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MenuItemController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/menu', [MenuItemController::class, 'publicMenu'])
    ->name('menu');

Route::get('/reservation', [ReservationController::class, 'create'])
    ->name('reservation');

Route::post('/reservation', [ReservationController::class, 'store'])
    ->name('reservation.store');

Route::inertia('/about', 'about')
    ->name('about');

Route::get('/contact', [ContactController::class, 'create'])
    ->name('contact');

Route::post('/contact', [ContactController::class, 'store'])
    ->name('contact.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

});


Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('categories', CategoryController::class)
        ->except(['show']);

    Route::resource('menu-items', MenuItemController::class)
        ->except(['show']);

    Route::get('reservations', [AdminReservationController::class, 'index'])
        ->name('reservations.index');

    Route::put('reservations/{reservation}', [AdminReservationController::class, 'update'])
        ->name('reservations.update');
});
require __DIR__.'/settings.php';
