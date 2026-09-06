import { Head, Link, router } from '@inertiajs/react';
import { useMemo, useState } from 'react';
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
    upcomingReservations: Reservation[];
    pastReservations: Reservation[];
}

type DateFilter = 'all' | 'today' | 'tomorrow';

type StatusFilter = 'all' | 'pending' | 'confirmed' | 'completed' | 'cancelled';

type ReservationTab = 'upcoming' | 'past';

export default function Index({
    upcomingReservations,
    pastReservations,
}: Props) {
    const [selectedReservation, setSelectedReservation] =
        useState<Reservation | null>(null);

    const [activeTab, setActiveTab] = useState<ReservationTab>('upcoming');

    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
    const [dateFilter, setDateFilter] = useState<DateFilter>('all');

    const reservations =
        activeTab === 'upcoming' ? upcomingReservations : pastReservations;

    function resetFilters() {
        setSearch('');
        setStatusFilter('all');
        setDateFilter('all');
    }

    function switchTab(tab: ReservationTab) {
        setActiveTab(tab);
        setSelectedReservation(null);
        resetFilters();
    }

    function updateStatus(id: number, status: string) {
        router.put(
            `/admin/reservations/${id}`,
            {
                status,
            },
            {
                preserveScroll: true,
            },
        );

        if (selectedReservation?.id === id) {
            setSelectedReservation({
                ...selectedReservation,
                status,
            });
        }
    }

    function parseReservationDate(date: string) {
        if (date.includes('T')) {
            return new Date(date);
        }

        return new Date(`${date}T00:00:00`);
    }

    function formatDate(date: string) {
        return parseReservationDate(date).toLocaleDateString('nl-NL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    function formatLongDate(date: string) {
        return parseReservationDate(date).toLocaleDateString('nl-NL', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }

    function isToday(date: string) {
        const reservationDate = parseReservationDate(date);
        const today = new Date();

        return (
            reservationDate.getFullYear() === today.getFullYear() &&
            reservationDate.getMonth() === today.getMonth() &&
            reservationDate.getDate() === today.getDate()
        );
    }

    function isTomorrow(date: string) {
        const reservationDate = parseReservationDate(date);
        const tomorrow = new Date();

        tomorrow.setDate(tomorrow.getDate() + 1);

        return (
            reservationDate.getFullYear() === tomorrow.getFullYear() &&
            reservationDate.getMonth() === tomorrow.getMonth() &&
            reservationDate.getDate() === tomorrow.getDate()
        );
    }

    function getRelativeDateLabel(date: string) {
        if (isToday(date)) {
            return 'Vandaag';
        }

        if (isTomorrow(date)) {
            return 'Morgen';
        }

        return parseReservationDate(date).toLocaleDateString('nl-NL', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
        });
    }

    function getStatusClass(status: string) {
        switch (status) {
            case 'pending':
                return 'border-amber-200 bg-amber-50 text-amber-700';

            case 'confirmed':
                return 'border-green-200 bg-green-50 text-green-700';

            case 'completed':
                return 'border-blue-200 bg-blue-50 text-blue-700';

            case 'cancelled':
                return 'border-red-200 bg-red-50 text-red-700';

            default:
                return 'border-black/10 bg-white text-[#20231f]';
        }
    }

    const filteredReservations = useMemo(() => {
        const query = search.toLowerCase().trim();

        return reservations.filter((reservation) => {
            const matchesSearch =
                !query ||
                reservation.name.toLowerCase().includes(query) ||
                reservation.email.toLowerCase().includes(query) ||
                reservation.phone?.toLowerCase().includes(query);

            const matchesStatus =
                statusFilter === 'all' || reservation.status === statusFilter;

            const matchesDate =
                activeTab === 'past' ||
                dateFilter === 'all' ||
                (dateFilter === 'today' && isToday(reservation.date)) ||
                (dateFilter === 'tomorrow' && isTomorrow(reservation.date));

            return matchesSearch && matchesStatus && matchesDate;
        });
    }, [reservations, search, statusFilter, dateFilter, activeTab]);

    const todayReservations = upcomingReservations.filter((reservation) =>
        isToday(reservation.date),
    );

    const pendingReservations = upcomingReservations.filter(
        (reservation) => reservation.status === 'pending',
    );

    const confirmedReservations = upcomingReservations.filter(
        (reservation) => reservation.status === 'confirmed',
    );

    const totalGuestsToday = todayReservations.reduce(
        (total, reservation) => total + reservation.guests,
        0,
    );

    return (
        <>
            <Head title="Reserveringen" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">


                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="mb-10">
                            <Link
                                href="/dashboard"
                                className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                            >
                                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                    ←
                                </span>
                                Terug naar dashboard
                            </Link>

                            <p className="mt-7 text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Admin · Reserveringen
                            </p>

                            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                                Reserveringen
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#20231f]/50">
                                {activeTab === 'upcoming'
                                    ? 'Bekijk komende reserveringen, bevestig aanvragen en houd eenvoudig overzicht over de planning.'
                                    : 'Bekijk eerdere reserveringen en afgeronde of geannuleerde boekingen.'}
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="mb-8 border-b border-black/10">
                            <div className="flex gap-8">
                                <button
                                    type="button"
                                    onClick={() => switchTab('upcoming')}
                                    className={`relative pb-4 text-[10px] tracking-[0.22em] uppercase transition ${
                                        activeTab === 'upcoming'
                                            ? 'text-[#20231f]'
                                            : 'text-[#20231f]/35 hover:text-[#5d6948]'
                                    }`}
                                >
                                    Komend
                                    <span
                                        className={`ml-2 px-2 py-1 text-[8px] ${
                                            activeTab === 'upcoming'
                                                ? 'bg-[#5d6948] text-white'
                                                : 'bg-[#ebe7dc] text-[#20231f]/45'
                                        }`}
                                    >
                                        {upcomingReservations.length}
                                    </span>
                                    {activeTab === 'upcoming' && (
                                        <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#5d6948]" />
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => switchTab('past')}
                                    className={`relative pb-4 text-[10px] tracking-[0.22em] uppercase transition ${
                                        activeTab === 'past'
                                            ? 'text-[#20231f]'
                                            : 'text-[#20231f]/35 hover:text-[#5d6948]'
                                    }`}
                                >
                                    Verleden
                                    <span
                                        className={`ml-2 px-2 py-1 text-[8px] ${
                                            activeTab === 'past'
                                                ? 'bg-[#5d6948] text-white'
                                                : 'bg-[#ebe7dc] text-[#20231f]/45'
                                        }`}
                                    >
                                        {pastReservations.length}
                                    </span>
                                    {activeTab === 'past' && (
                                        <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#5d6948]" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Stats */}
                        {activeTab === 'upcoming' && (
                            <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setDateFilter('today');
                                        setStatusFilter('all');
                                    }}
                                    className="border border-black/10 bg-white p-5 text-left transition hover:border-[#5d6948]/40"
                                >
                                    <p className="text-[9px] tracking-[0.24em] text-[#20231f]/35 uppercase">
                                        Vandaag
                                    </p>

                                    <p className="mt-2 font-serif text-3xl">
                                        {todayReservations.length}
                                    </p>

                                    <p className="mt-1 text-xs text-[#20231f]/40">
                                        {totalGuestsToday} gasten
                                    </p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setStatusFilter('pending');
                                        setDateFilter('all');
                                    }}
                                    className="border border-black/10 bg-white p-5 text-left transition hover:border-amber-300"
                                >
                                    <p className="text-[9px] tracking-[0.24em] text-amber-700 uppercase">
                                        In afwachting
                                    </p>

                                    <p className="mt-2 font-serif text-3xl">
                                        {pendingReservations.length}
                                    </p>

                                    <p className="mt-1 text-xs text-[#20231f]/40">
                                        Nog te behandelen
                                    </p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setStatusFilter('confirmed');
                                        setDateFilter('all');
                                    }}
                                    className="border border-black/10 bg-white p-5 text-left transition hover:border-green-300"
                                >
                                    <p className="text-[9px] tracking-[0.24em] text-green-700 uppercase">
                                        Bevestigd
                                    </p>

                                    <p className="mt-2 font-serif text-3xl">
                                        {confirmedReservations.length}
                                    </p>

                                    <p className="mt-1 text-xs text-[#20231f]/40">
                                        Komende reserveringen
                                    </p>
                                </button>

                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="border border-black/10 bg-[#20231f] p-5 text-left text-[#f7f4ee] transition hover:bg-[#5d6948]"
                                >
                                    <p className="text-[9px] tracking-[0.24em] text-white/40 uppercase">
                                        Totaal
                                    </p>

                                    <p className="mt-2 font-serif text-3xl">
                                        {upcomingReservations.length}
                                    </p>

                                    <p className="mt-1 text-xs text-white/40">
                                        Komende reserveringen
                                    </p>
                                </button>
                            </div>
                        )}

                        {/* Filters */}
                        <div className="mb-6 border border-black/10 bg-white p-4 sm:p-5">
                            <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
                                {/* Search */}
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        placeholder="Zoek op naam, e-mail of telefoon..."
                                        className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3.5 pr-10 text-sm transition outline-none placeholder:text-[#20231f]/30 focus:border-[#5d6948]"
                                    />

                                    {search && (
                                        <button
                                            type="button"
                                            onClick={() => setSearch('')}
                                            className="absolute top-1/2 right-4 -translate-y-1/2 text-lg text-[#20231f]/35 hover:text-[#20231f]"
                                            aria-label="Zoeken wissen"
                                        >
                                            ×
                                        </button>
                                    )}
                                </div>

                                {/* Date filters only upcoming */}
                                {activeTab === 'upcoming' && (
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            {
                                                value: 'all',
                                                label: 'Alle dagen',
                                            },
                                            {
                                                value: 'today',
                                                label: 'Vandaag',
                                            },
                                            {
                                                value: 'tomorrow',
                                                label: 'Morgen',
                                            },
                                        ].map((filter) => (
                                            <button
                                                key={filter.value}
                                                type="button"
                                                onClick={() =>
                                                    setDateFilter(
                                                        filter.value as DateFilter,
                                                    )
                                                }
                                                className={`px-4 py-3 text-[9px] tracking-[0.17em] uppercase transition ${
                                                    dateFilter === filter.value
                                                        ? 'bg-[#20231f] text-white'
                                                        : 'border border-black/10 bg-white text-[#20231f]/50 hover:border-[#5d6948]'
                                                }`}
                                            >
                                                {filter.label}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Status */}
                                <select
                                    value={statusFilter}
                                    onChange={(e) =>
                                        setStatusFilter(
                                            e.target.value as StatusFilter,
                                        )
                                    }
                                    className="border border-black/10 bg-[#f7f4ee] px-4 py-3.5 text-[10px] tracking-[0.15em] uppercase outline-none focus:border-[#5d6948]"
                                >
                                    <option value="all">Alle statussen</option>

                                    <option value="pending">
                                        In afwachting
                                    </option>

                                    <option value="confirmed">Bevestigd</option>

                                    <option value="completed">Afgerond</option>

                                    <option value="cancelled">
                                        Geannuleerd
                                    </option>
                                </select>
                            </div>

                            {(search ||
                                statusFilter !== 'all' ||
                                dateFilter !== 'all') && (
                                <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
                                    <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                        {filteredReservations.length}{' '}
                                        {filteredReservations.length === 1
                                            ? 'reservering'
                                            : 'reserveringen'}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={resetFilters}
                                        className="text-[9px] tracking-[0.18em] text-[#5d6948] uppercase"
                                    >
                                        Filters wissen
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Desktop table */}
                        {filteredReservations.length > 0 ? (
                            <>
                                <div className="hidden overflow-hidden border border-black/10 bg-white lg:block">
                                    <div className="grid grid-cols-[130px_90px_80px_minmax(160px,1.2fr)_minmax(180px,1fr)_150px_100px] gap-4 border-b border-black/10 bg-[#ebe7dc] px-5 py-4">
                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Datum
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Tijd
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Gasten
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Gast
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Contact
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Status
                                        </p>

                                        <span />
                                    </div>

                                    <div className="divide-y divide-black/10">
                                        {filteredReservations.map(
                                            (reservation) => (
                                                <div
                                                    key={reservation.id}
                                                    className="grid grid-cols-[130px_90px_80px_minmax(160px,1.2fr)_minmax(180px,1fr)_150px_100px] items-center gap-4 px-5 py-5 transition hover:bg-[#f7f4ee]"
                                                >
                                                    <div>
                                                        <p className="text-[9px] tracking-[0.18em] text-[#5d6948] uppercase">
                                                            {getRelativeDateLabel(
                                                                reservation.date,
                                                            )}
                                                        </p>

                                                        <p className="mt-1 text-xs text-[#20231f]/45">
                                                            {formatDate(
                                                                reservation.date,
                                                            )}
                                                        </p>
                                                    </div>

                                                    <p className="font-serif text-xl">
                                                        {reservation.time.slice(
                                                            0,
                                                            5,
                                                        )}
                                                    </p>

                                                    <p className="text-sm">
                                                        {reservation.guests}
                                                    </p>

                                                    <div className="min-w-0">
                                                        <p className="truncate font-medium">
                                                            {reservation.name}
                                                        </p>

                                                        {reservation.message && (
                                                            <p className="mt-1 truncate text-xs text-[#20231f]/40">
                                                                {
                                                                    reservation.message
                                                                }
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="min-w-0">
                                                        <a
                                                            href={`mailto:${reservation.email}`}
                                                            className="block truncate text-xs text-[#20231f]/55 transition hover:text-[#5d6948]"
                                                        >
                                                            {reservation.email}
                                                        </a>

                                                        {reservation.phone && (
                                                            <a
                                                                href={`tel:${reservation.phone}`}
                                                                className="mt-1 block text-xs text-[#20231f]/55 transition hover:text-[#5d6948]"
                                                            >
                                                                {
                                                                    reservation.phone
                                                                }
                                                            </a>
                                                        )}
                                                    </div>

                                                    <select
                                                        value={
                                                            reservation.status
                                                        }
                                                        onChange={(e) =>
                                                            updateStatus(
                                                                reservation.id,
                                                                e.target.value,
                                                            )
                                                        }
                                                        className={`w-full border px-2 py-2 text-[9px] tracking-[0.1em] uppercase outline-none ${getStatusClass(
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

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setSelectedReservation(
                                                                reservation,
                                                            )
                                                        }
                                                        className="inline-flex items-center justify-center border border-[#20231f] bg-[#20231f] px-3 py-2 text-[9px] font-medium tracking-[0.14em] text-[#f7f4ee] uppercase transition hover:border-[#5d6948] hover:bg-[#5d6948]"
                                                    >
                                                        Bekijken
                                                    </button>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Mobile */}
                                <div className="grid gap-4 lg:hidden">
                                    {filteredReservations.map((reservation) => (
                                        <article
                                            key={reservation.id}
                                            className="border border-black/10 bg-white p-5"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="text-[9px] tracking-[0.2em] text-[#5d6948] uppercase">
                                                        {getRelativeDateLabel(
                                                            reservation.date,
                                                        )}
                                                    </p>

                                                    <h2 className="mt-2 font-serif text-2xl">
                                                        {reservation.name}
                                                    </h2>
                                                </div>

                                                <span className="font-serif text-2xl">
                                                    {reservation.time.slice(
                                                        0,
                                                        5,
                                                    )}
                                                </span>
                                            </div>

                                            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-black/10 pt-4">
                                                <div>
                                                    <p className="text-[8px] tracking-[0.18em] text-[#20231f]/35 uppercase">
                                                        Datum
                                                    </p>

                                                    <p className="mt-1 text-sm">
                                                        {formatDate(
                                                            reservation.date,
                                                        )}
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-[8px] tracking-[0.18em] text-[#20231f]/35 uppercase">
                                                        Gasten
                                                    </p>

                                                    <p className="mt-1 text-sm">
                                                        {reservation.guests}
                                                    </p>
                                                </div>
                                            </div>

                                            <select
                                                value={reservation.status}
                                                onChange={(e) =>
                                                    updateStatus(
                                                        reservation.id,
                                                        e.target.value,
                                                    )
                                                }
                                                className={`mt-5 w-full border px-3 py-3 text-[9px] tracking-[0.12em] uppercase outline-none ${getStatusClass(
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

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setSelectedReservation(
                                                        reservation,
                                                    )
                                                }
                                                className="mt-3 w-full bg-[#20231f] px-5 py-3 text-[9px] tracking-[0.18em] text-white uppercase transition hover:bg-[#5d6948]"
                                            >
                                                Bekijk reservering
                                            </button>
                                        </article>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="border border-black/10 bg-white px-6 py-20 text-center">
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Reserveringen
                                </p>

                                <h2 className="mt-4 font-serif text-3xl">
                                    {activeTab === 'upcoming'
                                        ? 'Geen komende reserveringen gevonden'
                                        : 'Geen eerdere reserveringen gevonden'}
                                </h2>

                                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#20231f]/50">
                                    Pas je zoekopdracht of filters aan om andere
                                    reserveringen te bekijken.
                                </p>

                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="mt-7 border border-[#20231f]/15 px-6 py-4 text-[9px] tracking-[0.18em] uppercase transition hover:border-[#20231f]"
                                >
                                    Filters wissen
                                </button>
                            </div>
                        )}
                    </div>
                </main>
            </div>

            {/* Modal */}
            {selectedReservation && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8 backdrop-blur-[2px]"
                    onClick={() => setSelectedReservation(null)}
                >
                    <div
                        className="max-h-[90vh] w-full max-w-xl overflow-y-auto border border-black/10 bg-[#f7f4ee] shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-[#20231f] p-6 text-[#f7f4ee] sm:p-8">
                            <div className="flex items-start justify-between gap-5">
                                <div>
                                    <p className="text-[9px] tracking-[0.25em] text-white/40 uppercase">
                                        Reservering
                                    </p>

                                    <h2 className="mt-2 font-serif text-3xl">
                                        {selectedReservation.name}
                                    </h2>

                                    <p className="mt-2 text-sm text-white/45">
                                        {formatLongDate(
                                            selectedReservation.date,
                                        )}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedReservation(null)}
                                    className="text-2xl text-white/40 transition hover:text-white"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        <div className="p-6 sm:p-8">
                            <div className="grid grid-cols-3 gap-3">
                                <div className="border border-black/10 bg-white p-4">
                                    <p className="text-[8px] tracking-[0.18em] text-[#20231f]/35 text-black uppercase">
                                        Datum
                                    </p>

                                    <p className="mt-2 font-serif text-xl text-black">
                                        {formatDate(selectedReservation.date)}
                                    </p>
                                </div>

                                <div className="border border-black/10 bg-white p-4">
                                    <p className="text-[8px] tracking-[0.18em] text-[#20231f]/35 text-black uppercase">
                                        Tijd
                                    </p>

                                    <p className="mt-2 font-serif text-xl text-black">
                                        {selectedReservation.time.slice(0, 5)}
                                    </p>
                                </div>

                                <div className="border border-black/10 bg-white p-4">
                                    <p className="text-[8px] tracking-[0.18em] text-[#20231f]/35 text-black uppercase">
                                        Gasten
                                    </p>

                                    <p className="mt-2 font-serif text-xl text-black">
                                        {selectedReservation.guests}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="mb-2 block text-[9px] tracking-[0.2em] text-[#5d6948] text-black uppercase">
                                    Status
                                </label>

                                <select
                                    value={selectedReservation.status}
                                    onChange={(e) =>
                                        updateStatus(
                                            selectedReservation.id,
                                            e.target.value,
                                        )
                                    }
                                    className={`w-full border px-4 py-3.5 text-[10px] tracking-[0.12em] text-black uppercase outline-none ${getStatusClass(
                                        selectedReservation.status,
                                    )}`}
                                >
                                    <option value="pending">
                                        In afwachting
                                    </option>

                                    <option value="confirmed">Bevestigd</option>

                                    <option value="completed">Afgerond</option>

                                    <option value="cancelled">
                                        Geannuleerd
                                    </option>
                                </select>
                            </div>

                            <div className="mt-6 border border-black/10 bg-white p-5">
                                <p className="text-[9px] tracking-[0.2em] text-[#5d6948] text-black uppercase">
                                    Contactgegevens
                                </p>

                                <a
                                    href={`mailto:${selectedReservation.email}`}
                                    className="mt-4 block text-sm break-all text-black transition hover:text-[#5d6948]"
                                >
                                    {selectedReservation.email}
                                </a>

                                {selectedReservation.phone && (
                                    <a
                                        href={`tel:${selectedReservation.phone}`}
                                        className="hover:text-[#5d6948 mt-2 block text-sm text-black transition"
                                    >
                                        {selectedReservation.phone}
                                    </a>
                                )}

                                <div className="mt-5 flex gap-3">
                                    <a
                                        href={`mailto:${selectedReservation.email}`}
                                        className="flex-1 border border-black/10 px-4 py-3 text-center text-[9px] tracking-[0.16em] text-black uppercase transition hover:border-[#5d6948] hover:text-[#5d6948]"
                                    >
                                        E-mail sturen
                                    </a>

                                    {selectedReservation.phone && (
                                        <a
                                            href={`tel:${selectedReservation.phone}`}
                                            className="flex-1 bg-[#20231f] px-4 py-3 text-center text-[9px] tracking-[0.16em] text-black text-white uppercase transition hover:bg-[#5d6948]"
                                        >
                                            Bellen
                                        </a>
                                    )}
                                </div>
                            </div>

                            {selectedReservation.message && (
                                <div className="mt-6 border border-black/10 bg-[#ebe7dc] p-5">
                                    <p className="text-[9px] tracking-[0.2em] text-[#5d6948] text-black uppercase">
                                        Opmerking
                                    </p>

                                    <p className="mt-3 text-sm leading-7 whitespace-pre-wrap text-[#20231f]/65 text-black">
                                        {selectedReservation.message}
                                    </p>
                                </div>
                            )}

                            <button
                                type="button"
                                onClick={() => setSelectedReservation(null)}
                                className="mt-6 w-full border border-black/10 px-6 py-4 text-[9px] tracking-[0.18em] text-black uppercase transition hover:bg-[#20231f] hover:text-white"
                            >
                                Sluiten
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
