import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

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

export default function Index({ reservations }: Props) {
    const [selectedReservation, setSelectedReservation] =
        useState<Reservation | null>(null);

    function updateStatus(id: number, status: string) {
        router.put(`/admin/reservations/${id}`, {
            status,
        });
    }

    function formatDate(date: string) {
        return new Date(date).toLocaleDateString('nl-NL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    function getRelativeDateLabel(date: string) {
        const reservationDate = new Date(date);
        const today = new Date();

        reservationDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        if (reservationDate.getTime() === today.getTime()) {
            return 'Vandaag';
        }

        if (reservationDate.getTime() === tomorrow.getTime()) {
            return 'Morgen';
        }

        return reservationDate.toLocaleDateString('nl-NL', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
        });
    }

    function getStatusClass(status: string) {
        switch (status) {
            case 'pending':
                return 'border-amber-300 bg-amber-50 text-amber-700';

            case 'confirmed':
                return 'border-green-300 bg-green-50 text-green-700';

            case 'completed':
                return 'border-blue-300 bg-blue-50 text-blue-700';

            case 'cancelled':
                return 'border-red-300 bg-red-50 text-red-700';

            default:
                return 'border-black/10 bg-white text-[#20231f]';
        }
    }

    return (
        <>
            <Head title="Reserveringen" />

            <div className="flex min-h-screen bg-[#f7f4ee]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-10 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <Link
                            href="/dashboard"
                            className="text-xs uppercase tracking-[0.15em] text-[#5d6948] transition hover:text-[#20231f]"
                        >
                            ← Terug naar dashboard
                        </Link>

                        {/* Page heading */}
                        <div className="mb-10 mt-6">
                            <p className="text-xs uppercase tracking-[0.35em] text-[#5d6948]">
                                Admin
                            </p>

                            <h1 className="mt-3 font-serif text-4xl text-[#20231f] sm:text-5xl">
                                Reserveringen
                            </h1>

                            <p className="mt-3 text-sm text-[#20231f]/60">
                                Beheer binnenkomende tafelreserveringen.
                            </p>
                        </div>

                        {/* Reservation cards */}
                        {reservations.length > 0 ? (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {reservations.map((reservation) => (
                                    <div
                                        key={reservation.id}
                                        className="group flex flex-col border border-[#5d6948]/20 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5d6948]/40 hover:shadow-lg"
                                    >
                                        {/* Top */}
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                                    {getRelativeDateLabel(
                                                        reservation.date,
                                                    )}
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
                                                className={`shrink-0 border px-2 py-1.5 text-[10px] uppercase tracking-[0.1em] outline-none ${getStatusClass(
                                                    reservation.status,
                                                )}`}
                                            >
                                                <option value="pending">
                                                    In afwachting
                                                </option>

                                                <option value="confirmed">
                                                    Bevestigd
                                                </option>

                                                <option value="completed">
                                                    Afgerond
                                                </option>

                                                <option value="cancelled">
                                                    Geannuleerd
                                                </option>
                                            </select>
                                        </div>

                                        <div className="my-6 border-t border-[#5d6948]/10" />

                                        {/* Info */}
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                    Datum
                                                </span>

                                                <span className="text-sm text-[#20231f]">
                                                    {formatDate(
                                                        reservation.date,
                                                    )}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                    Tijd
                                                </span>

                                                <span className="text-sm text-[#20231f]">
                                                    {reservation.time.slice(
                                                        0,
                                                        5,
                                                    )}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                    Gasten
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

                                            {reservation.message && (
                                                <div className="pt-1">
                                                    <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                        Opmerking
                                                    </span>

                                                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#20231f]/60">
                                                        {reservation.message}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Button */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedReservation(
                                                    reservation,
                                                )
                                            }
                                            className="mt-6 w-full border border-[#20231f] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#20231f] transition duration-300 hover:bg-[#20231f] hover:text-[#f7f4ee]"
                                        >
                                            Bekijk reservering
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="border border-[#5d6948]/20 bg-white px-6 py-16 text-center">
                                <p className="font-serif text-2xl text-[#20231f]">
                                    Nog geen reserveringen
                                </p>

                                <p className="mt-2 text-sm text-[#20231f]/50">
                                    Nieuwe reserveringen verschijnen hier.
                                </p>
                            </div>
                        )}
                    </div>
                </main>
            </div>

            {/* Modal */}
            {selectedReservation && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-8"
                    onClick={() => setSelectedReservation(null)}
                >
                    <div
                        className="max-h-[90vh] w-full max-w-lg overflow-y-auto border border-[#5d6948]/20 bg-[#f7f4ee] p-7 shadow-2xl sm:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-8 flex items-start justify-between gap-5">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-[#5d6948]">
                                    Reservering
                                </p>

                                <h2 className="mt-2 font-serif text-3xl text-[#20231f]">
                                    {selectedReservation.name}
                                </h2>

                                <p className="mt-2 text-sm text-[#20231f]/50">
                                    {getRelativeDateLabel(
                                        selectedReservation.date,
                                    )}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedReservation(null)
                                }
                                className="text-2xl leading-none text-[#20231f]/50 transition hover:text-[#20231f]"
                            >
                                ×
                            </button>
                        </div>

                        <div className="mb-7">
                            <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                Status
                            </label>

                            <select
                                value={selectedReservation.status}
                                onChange={(e) => {
                                    const status = e.target.value;

                                    updateStatus(
                                        selectedReservation.id,
                                        status,
                                    );

                                    setSelectedReservation({
                                        ...selectedReservation,
                                        status,
                                    });
                                }}
                                className={`w-full border px-4 py-3 text-xs uppercase tracking-[0.1em] outline-none ${getStatusClass(
                                    selectedReservation.status,
                                )}`}
                            >
                                <option value="pending">
                                    In afwachting
                                </option>

                                <option value="confirmed">
                                    Bevestigd
                                </option>

                                <option value="completed">
                                    Afgerond
                                </option>

                                <option value="cancelled">
                                    Geannuleerd
                                </option>
                            </select>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                    Datum
                                </p>

                                <p className="mt-1 text-sm text-[#20231f]">
                                    {formatDate(
                                        selectedReservation.date,
                                    )}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                    Tijd
                                </p>

                                <p className="mt-1 text-sm text-[#20231f]">
                                    {selectedReservation.time.slice(0, 5)}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                    Gasten
                                </p>

                                <p className="mt-1 text-sm text-[#20231f]">
                                    {selectedReservation.guests}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                    Telefoon
                                </p>

                                <p className="mt-1 text-sm text-[#20231f]">
                                    {selectedReservation.phone ||
                                        'Niet opgegeven'}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                E-mail
                            </p>

                            <a
                                href={`mailto:${selectedReservation.email}`}
                                className="mt-1 block break-all text-sm text-[#20231f] transition hover:text-[#5d6948]"
                            >
                                {selectedReservation.email}
                            </a>
                        </div>

                        {selectedReservation.message && (
                            <div className="mt-6 border-t border-[#5d6948]/10 pt-6">
                                <p className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                    Opmerking
                                </p>

                                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[#20231f]/70">
                                    {selectedReservation.message}
                                </p>
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={() =>
                                setSelectedReservation(null)
                            }
                            className="mt-8 w-full bg-[#20231f] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                        >
                            Sluiten
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
