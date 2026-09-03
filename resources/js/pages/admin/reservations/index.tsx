import {Head, Link, router} from '@inertiajs/react';
import {useState} from 'react';
import Navbar from "@/components/Navbar";
import AdminSidebar from "@/components/AdminSidebar";

interface Reservation {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    date: string;
    time: string;
    guests: number;
    message: string | null;
    status: string;
}

interface Props {
    reservations: Reservation[];
}

export default function Index({reservations}: Props) {

    const [selectedReservation, setSelectedReservation] =
        useState<Reservation | null>(null);


    function updateStatus(id: number, status: string) {
        router.put(`/admin/reservations/${id}`, {
            status,
        });
    }

    return (
        <>
            <div className="flex min-h-screen bg-[#f7f4ee]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-10 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="min-h-screen bg-[#f7f4ee] px-4 py-8 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-7xl">
                                <Link
                                    href="/dashboard"

                                    className="text-xs uppercase tracking-[0.15em] text-[#5d6948]"
                                >
                                    ← Back to Dashboard
                                </Link>

                                {/* Page heading */}
                                <div className="mb-10">
                                    <p className="text-xs uppercase tracking-[0.35em] text-[#5d6948]">
                                        Admin
                                    </p>

                                    <h1 className="mt-3 font-serif text-4xl text-[#20231f] sm:text-5xl">
                                        Reservations
                                    </h1>

                                    <p className="mt-3 text-sm text-[#20231f]/60">
                                        Manage incoming table reservations.
                                    </p>
                                </div>

                                {/* Reservation cards */}
                                {reservations.length > 0 ? (
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {reservations.map((reservation) => (
                                            <div
                                                key={reservation.id}
                                                className="group border border-[#5d6948]/20 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5d6948]/40 hover:shadow-lg"
                                            >
                                                {/* Top */}
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                                            Reservation
                                                        </p>

                                                        <h2 className="mt-2 font-serif text-2xl text-[#20231f]">
                                                            {reservation.name}
                                                        </h2>
                                                    </div>

                                                    {/* Status */}
                                                    <select
                                                        value={reservation.status}
                                                        onChange={(e) =>
                                                            updateStatus(
                                                                reservation.id,
                                                                e.target.value,
                                                            )
                                                        }
                                                        className={`shrink-0 border px-2 py-1.5 text-[10px] uppercase tracking-[0.1em] outline-none ${
                                                            reservation.status === 'pending'
                                                                ? 'border-amber-300 bg-amber-50 text-amber-700'
                                                                : reservation.status === 'confirmed'
                                                                    ? 'border-green-300 bg-green-50 text-green-700'
                                                                    : reservation.status === 'completed'
                                                                        ? 'border-blue-300 bg-blue-50 text-blue-700'
                                                                        : 'border-red-300 bg-red-50 text-red-700'
                                                        }`}
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="confirmed">Confirmed</option>
                                                        <option value="completed">Completed</option>
                                                        <option value="cancelled">Cancelled</option>
                                                    </select>
                                                </div>

                                                {/* Divider */}
                                                <div className="my-6 border-t border-[#5d6948]/10"/>

                                                {/* Reservation information */}
                                                <div className="space-y-4">

                                                    <div className="flex items-center justify-between">
                                        <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                            Date
                                        </span>

                                                        <span className="text-sm text-[#20231f]">
                                            {new Date(
                                                reservation.date,
                                            ).toLocaleDateString('en-GB')}
                                        </span>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                        <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                            Time
                                        </span>

                                                        <span className="text-sm text-[#20231f]">
                                            {reservation.time.slice(0, 5)}
                                        </span>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                        <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                            Guests
                                        </span>

                                                        <span className="text-sm text-[#20231f]">
                                            {reservation.guests}
                                        </span>
                                                    </div>

                                                    <div className="pt-1">
                                        <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                            Contact
                                        </span>

                                                        <p className="mt-1 truncate text-sm text-[#20231f]/60">
                                                            {reservation.email}
                                                        </p>

                                                        {reservation.phone && (
                                                            <p className="mt-1 text-sm text-[#20231f]/60">
                                                                {reservation.phone}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                        <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                            message
                                        </span>

                                                        <span className="text-sm text-[#20231f]">
                                            {reservation.message}
                                        </span>
                                                    </div>
                                                </div>

                                                {/* View button */}
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedReservation(reservation)
                                                    }
                                                    className="mt-6 w-full border border-[#20231f] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#20231f] transition duration-300 hover:bg-[#20231f] hover:text-[#f7f4ee]"
                                                >
                                                    View Reservation
                                                </button>
                                            </div>
                                        ))}
                                        {selectedReservation && (
                                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
                                                <div
                                                    className="w-full max-w-lg border border-[#5d6948]/20 bg-[#f7f4ee] p-8 shadow-xl">

                                                    <div className="mb-8 flex items-start justify-between">
                                                        <div>
                                                            <p className="text-xs uppercase tracking-[0.2em] text-[#5d6948]">
                                                                Reservation
                                                            </p>

                                                            <h2 className="mt-2 font-serif text-3xl text-[#20231f]">
                                                                {selectedReservation.name}
                                                            </h2>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => setSelectedReservation(null)}
                                                            className="text-xl text-[#20231f]/50 transition hover:text-[#20231f]"
                                                        >
                                                            ×
                                                        </button>
                                                    </div>

                                                    <div className="space-y-5 text-sm text-[#20231f]">

                                                        <div>
                                                            <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                                Date
                                                            </p>
                                                            <p className="mt-1">
                                                                {new Date(
                                                                    selectedReservation.date,
                                                                ).toLocaleDateString('en-GB')}
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                                Time
                                                            </p>
                                                            <p className="mt-1">
                                                                {selectedReservation.time.slice(0, 5)}
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                                Guests
                                                            </p>
                                                            <p className="mt-1">
                                                                {selectedReservation.guests}
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                                Email
                                                            </p>
                                                            <p className="mt-1">
                                                                {selectedReservation.email}
                                                            </p>
                                                        </div>

                                                        {selectedReservation.phone && (
                                                            <div>
                                                                <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                                    Phone
                                                                </p>
                                                                <p className="mt-1">
                                                                    {selectedReservation.phone}
                                                                </p>
                                                            </div>
                                                        )}

                                                        {selectedReservation.message && (
                                                            <div>
                                                                <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                                    Message
                                                                </p>
                                                                <p className="mt-1 whitespace-pre-wrap">
                                                                    {selectedReservation.message}
                                                                </p>
                                                            </div>
                                                        )}

                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedReservation(null)}
                                                        className="mt-8 w-full bg-[#20231f] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                                                    >
                                                        Close
                                                    </button>

                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="border border-[#5d6948]/20 bg-white px-6 py-16 text-center">
                                        <p className="font-serif text-2xl text-[#20231f]">
                                            No reservations yet
                                        </p>

                                        <p className="mt-2 text-sm text-[#20231f]/50">
                                            New reservations will appear here.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    );
}
