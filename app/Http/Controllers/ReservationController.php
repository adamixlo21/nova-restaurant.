<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReservationController extends Controller
{

    public function index()
    {
        $reservations = Reservation::whereDate('date', '>=', now()->toDateString())
            ->orderBy('date', 'asc')
            ->orderBy('time', 'asc')
            ->get();

        return Inertia::render('admin/reservations/index', [
            'reservations' => $reservations,
        ]);
    }
    public function create()
    {
        return Inertia::render('reservation');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
            'date' => ['required', 'date'],
            'time' => ['required'],
            'guests' => ['required', 'integer', 'min:1', 'max:20'],
            'message' => ['nullable', 'string'],
        ]);

        Reservation::create($validated);

        return redirect()
            ->route('home')
            ->with(
                'success',
                'Bedankt! Je reserveringsaanvraag is succesvol verstuurd.'
            );
    }
}
