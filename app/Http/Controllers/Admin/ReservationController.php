<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReservationController extends Controller
{
    public function index()
    {
        $upcomingReservations = Reservation::whereDate(
            'date',
            '>=',
            now()->toDateString(),
        )
            ->orderBy('date')
            ->orderBy('time')
            ->get();

        $pastReservations = Reservation::whereDate(
            'date',
            '<',
            now()->toDateString(),
        )
            ->orderByDesc('date')
            ->orderByDesc('time')
            ->get();

        return Inertia::render('admin/reservations/index', [
            'upcomingReservations' => $upcomingReservations,
            'pastReservations' => $pastReservations,
        ]);
    }

    public function update(
        Request $request,
        Reservation $reservation,
    ) {
        $validated = $request->validate([
            'status' => [
                'required',
                'in:pending,confirmed,completed,cancelled',
            ],
        ]);

        $reservation->update($validated);

        return redirect()
            ->route('admin.reservations.index');
    }
}
