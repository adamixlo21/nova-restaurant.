<?php

use App\Http\Controllers\ActualiteitController;
use App\Http\Controllers\Admin\ContactController as AdminContactController;
use App\Http\Controllers\Admin\ReservationController as AdminReservationController;
use App\Http\Controllers\Admin\ActualiteitController as AdminActualiteitController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\MenuItemController;
use App\Http\Controllers\ReservationController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/menus', [MenuController::class, 'publicIndex'])
    ->name('menus');

Route::get('/menus/{menu:slug}', [MenuController::class, 'publicShow'])
    ->name('menus.show');

Route::get('/reservation', [ReservationController::class, 'create'])
    ->name('reservation');

Route::post('/reservation', [ReservationController::class, 'store'])
    ->name('reservation.store');

Route::inertia('/about', 'about')
    ->name('about');

Route::get('/contacts', [ContactController::class, 'create'])
    ->name('contacts');

Route::post('/contacts', [ContactController::class, 'store'])
    ->name('contacts.store');

Route::inertia('/mogelijkheden', 'mogelijkheden')
    ->name('mogelijkheden');

Route::inertia('/locatie', 'locatie')
    ->name('locatie');

Route::get('/actualiteiten', [ActualiteitController::class, 'index'])
    ->name('actualiteiten.index');

Route::get('/actualiteiten/{actualiteit:slug}', [ActualiteitController::class, 'show'])
    ->name('actualiteiten.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

});


Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('menus', MenuController::class)
        ->except(['show']);

    Route::resource('categories', CategoryController::class)
        ->except(['show']);

    Route::resource('menu-items', MenuItemController::class)
        ->except(['show']);

    Route::get('reservations', [AdminReservationController::class, 'index'])
        ->name('reservations.index');

    Route::put('reservations/{reservation}', [AdminReservationController::class, 'update'])
        ->name('reservations.update');

    Route::get('contacts', [AdminContactController::class, 'index'])
        ->name('contacts.index');

    Route::delete('contacts/{contact}', [AdminContactController::class, 'destroy'])
        ->name('contacts.destroy');

    Route::resource('actualiteiten', AdminActualiteitController::class)
        ->parameters([
            'actualiteiten' => 'actualiteit',
        ])
        ->except(['show']);;
});
require __DIR__.'/settings.php';
