<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ActualiteitController;
use App\Http\Controllers\Admin\ContactController as AdminContactController;
use App\Http\Controllers\Admin\ReservationController as AdminReservationController;
use App\Http\Controllers\Admin\ActualiteitController as AdminActualiteitController;
use App\Http\Controllers\VacancyController;
use App\Http\Controllers\Admin\VacancyController as AdminVacancyController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\MenuItemController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\MollieWebhookController;


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

Route::get('/vacatures', [VacancyController::class, 'index'])
    ->name('vacancies.index');

Route::get('/vacatures/{vacancy:slug}', [VacancyController::class, 'show'])
    ->name('vacancies.show');

Route::post('/checkout', [OrderController::class, 'store'])
    ->name('checkout.store');

Route::get('/checkout', function () {
    return Inertia::render('checkout');
});

Route::get('/checkout/success/{order}', function (\App\Models\Order $order) {
    return Inertia::render('checkout-success', [
        'order' => $order,
    ]);
})->name('checkout.success');

Route::post('/webhooks/mollie', MollieWebhookController::class)
    ->name('mollie.webhook');

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

    Route::delete(
        'reservations/{reservation}',
        [AdminReservationController::class, 'destroy']
    )->name('reservations.destroy');

    Route::get('contacts', [AdminContactController::class, 'index'])
        ->name('contacts.index');

    Route::delete('contacts/{contact}', [AdminContactController::class, 'destroy'])
        ->name('contacts.destroy');

    Route::resource('actualiteiten', AdminActualiteitController::class)
        ->parameters([
            'actualiteiten' => 'actualiteit',
        ])
        ->except(['show']);;

    Route::resource('vacancies', AdminVacancyController::class)
        ->except(['show']);
});
require __DIR__.'/settings.php';
