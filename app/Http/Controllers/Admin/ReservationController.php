<?php
namespace App\Http\Controllers\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Reservation;
use Inertia\Inertia;

class ReservationController extends Controller
{
    public function index()
    {
        $reservations = Reservation::orderBy('date')
            ->orderBy('time')
            ->get();

        return Inertia::render('admin/reservations/index', [
            'reservations' => $reservations,
        ]);
    }
    public function update(Request $request, Reservation $reservation)
    {
        $validated = $request->validate([
            'status' => ['required', 'in:pending,confirmed,completed,cancelled'],
        ]);

        $reservation->update($validated);

        return redirect()
            ->route('admin.reservations.index');
    }
}
