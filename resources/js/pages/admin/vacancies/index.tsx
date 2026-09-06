import { Head, Link, router } from '@inertiajs/react';
import { useMemo, useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

interface Vacancy {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    contract_type: string | null;
    hours: string | null;
    location: string | null;
    image: string | null;
    is_published: boolean;
    published_at: string | null;
}

interface Props {
    vacancies: Vacancy[];
}

type StatusFilter = 'all' | 'published' | 'draft';

export default function Index({ vacancies }: Props) {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

    function formatDate(date: string | null) {
        if (!date) {
            return 'Geen datum';
        }

        return new Date(date).toLocaleDateString('nl-NL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    function destroyVacancy(vacancy: Vacancy) {
        if (
            !confirm(
                `Weet je zeker dat je "${vacancy.title}" wilt verwijderen?`,
            )
        ) {
            return;
        }

        router.delete(`/admin/vacancies/${vacancy.id}`, {
            preserveScroll: true,
        });
    }

    const filteredVacancies = useMemo(() => {
        const query = search.toLowerCase().trim();

        return vacancies.filter((vacancy) => {
            const matchesSearch =
                !query ||
                vacancy.title.toLowerCase().includes(query) ||
                vacancy.slug.toLowerCase().includes(query) ||
                vacancy.excerpt?.toLowerCase().includes(query) ||
                vacancy.contract_type?.toLowerCase().includes(query) ||
                vacancy.hours?.toLowerCase().includes(query) ||
                vacancy.location?.toLowerCase().includes(query);

            const matchesStatus =
                statusFilter === 'all' ||
                (statusFilter === 'published' && vacancy.is_published) ||
                (statusFilter === 'draft' && !vacancy.is_published);

            return matchesSearch && matchesStatus;
        });
    }, [vacancies, search, statusFilter]);

    const publishedCount = vacancies.filter(
        (vacancy) => vacancy.is_published,
    ).length;

    const draftCount = vacancies.length - publishedCount;

    function resetFilters() {
        setSearch('');
        setStatusFilter('all');
    }

    return (
        <>
            <Head title="Vacatures beheren" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="mb-10">
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                        Admin · Vacatures
                                    </p>

                                    <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                                        Vacatures
                                    </h1>

                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#20231f]/50">
                                        Beheer openstaande functies en publiceer
                                        vacatures op de website van Brasserie De
                                        Bank.
                                    </p>
                                </div>

                                <Link
                                    href="/admin/vacancies/create"
                                    className="inline-flex items-center justify-center bg-[#20231f] px-6 py-4 text-[10px] tracking-[0.2em] text-white uppercase transition hover:bg-[#5d6948]"
                                >
                                    + Nieuwe vacature
                                </Link>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mb-8 grid gap-4 sm:grid-cols-3">
                            <button
                                type="button"
                                onClick={() => setStatusFilter('all')}
                                className="border border-black/10 bg-white p-5 text-left transition hover:border-[#5d6948]/40"
                            >
                                <p className="text-[9px] tracking-[0.22em] text-[#20231f]/35 uppercase">
                                    Totaal
                                </p>

                                <p className="mt-2 font-serif text-3xl">
                                    {vacancies.length}
                                </p>
                            </button>

                            <button
                                type="button"
                                onClick={() => setStatusFilter('published')}
                                className="border border-black/10 bg-white p-5 text-left transition hover:border-green-300"
                            >
                                <p className="text-[9px] tracking-[0.22em] text-green-700 uppercase">
                                    Gepubliceerd
                                </p>

                                <p className="mt-2 font-serif text-3xl">
                                    {publishedCount}
                                </p>
                            </button>

                            <button
                                type="button"
                                onClick={() => setStatusFilter('draft')}
                                className="border border-black/10 bg-white p-5 text-left transition hover:border-[#5d6948]/40"
                            >
                                <p className="text-[9px] tracking-[0.22em] text-[#20231f]/45 uppercase">
                                    Concept
                                </p>

                                <p className="mt-2 font-serif text-3xl">
                                    {draftCount}
                                </p>
                            </button>
                        </div>

                        {/* Filters */}
                        {vacancies.length > 0 && (
                            <div className="mb-6 border border-black/10 bg-white p-4 sm:p-5">
                                <div className="flex flex-col gap-4 md:flex-row">
                                    <div className="relative flex-1">
                                        <input
                                            type="text"
                                            value={search}
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
                                            placeholder="Zoek op functie, locatie, uren of dienstverband..."
                                            className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3.5 pr-10 text-sm transition outline-none placeholder:text-[#20231f]/30 focus:border-[#5d6948]"
                                        />

                                        {search && (
                                            <button
                                                type="button"
                                                onClick={() => setSearch('')}
                                                className="absolute top-1/2 right-4 -translate-y-1/2 text-lg text-[#20231f]/35 transition hover:text-[#20231f]"
                                                aria-label="Zoeken wissen"
                                            >
                                                ×
                                            </button>
                                        )}
                                    </div>

                                    <select
                                        value={statusFilter}
                                        onChange={(e) =>
                                            setStatusFilter(
                                                e.target.value as StatusFilter,
                                            )
                                        }
                                        className="border border-black/10 bg-[#f7f4ee] px-4 py-3.5 text-[10px] tracking-[0.15em] uppercase outline-none focus:border-[#5d6948]"
                                    >
                                        <option value="all">
                                            Alle statussen
                                        </option>

                                        <option value="published">
                                            Gepubliceerd
                                        </option>

                                        <option value="draft">Concept</option>
                                    </select>
                                </div>

                                {(search || statusFilter !== 'all') && (
                                    <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            {filteredVacancies.length}{' '}
                                            {filteredVacancies.length === 1
                                                ? 'vacature'
                                                : 'vacatures'}
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
                        )}

                        {/* Empty */}
                        {vacancies.length === 0 ? (
                            <div className="border border-black/10 bg-white px-6 py-20 text-center">
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Vacatures
                                </p>

                                <h2 className="mt-4 font-serif text-3xl">
                                    Nog geen vacatures
                                </h2>

                                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#20231f]/50">
                                    Voeg de eerste vacature toe om deze op de
                                    website te publiceren.
                                </p>

                                <Link
                                    href="/admin/vacancies/create"
                                    className="mt-7 inline-flex bg-[#20231f] px-6 py-4 text-[9px] tracking-[0.18em] text-white uppercase transition hover:bg-[#5d6948]"
                                >
                                    + Eerste vacature toevoegen
                                </Link>
                            </div>
                        ) : filteredVacancies.length === 0 ? (
                            <div className="border border-black/10 bg-white px-6 py-20 text-center">
                                <h2 className="font-serif text-3xl">
                                    Geen vacatures gevonden
                                </h2>

                                <p className="mt-3 text-sm text-[#20231f]/50">
                                    Pas je zoekopdracht of filter aan.
                                </p>

                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="mt-7 border border-black/10 px-6 py-4 text-[9px] tracking-[0.18em] uppercase transition hover:border-[#20231f]"
                                >
                                    Filters wissen
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* Desktop */}
                                <div className="hidden overflow-hidden border border-black/10 bg-white xl:block">
                                    <div className="grid grid-cols-[90px_minmax(180px,1.1fr)_120px_100px_130px_120px_200px] gap-4 border-b border-black/10 bg-[#ebe7dc] px-5 py-4">
                                        <span />

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Functie
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Dienstverband
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Uren
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Locatie
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Status
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Acties
                                        </p>
                                    </div>

                                    <div className="divide-y divide-black/10">
                                        {filteredVacancies.map((vacancy) => (
                                            <div
                                                key={vacancy.id}
                                                className="grid grid-cols-[90px_minmax(180px,1.1fr)_120px_100px_130px_120px_200px] items-center gap-4 px-5 py-5 transition hover:bg-[#f7f4ee]"
                                            >
                                                {/* Image */}
                                                <div className="h-16 w-20 overflow-hidden bg-[#ebe7dc]">
                                                    {vacancy.image ? (
                                                        <img
                                                            src={`/storage/${vacancy.image}`}
                                                            alt={vacancy.title}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full items-center justify-center px-2 text-center text-[7px] tracking-[0.1em] text-[#20231f]/25 uppercase">
                                                            Geen foto
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Title */}
                                                <div className="min-w-0">
                                                    <p className="truncate font-medium">
                                                        {vacancy.title}
                                                    </p>

                                                    <p className="mt-1 truncate text-[9px] text-[#20231f]/30">
                                                        /vacatures/
                                                        {vacancy.slug}
                                                    </p>

                                                    {vacancy.published_at && (
                                                        <p className="mt-1 text-[9px] text-[#20231f]/35">
                                                            {formatDate(
                                                                vacancy.published_at,
                                                            )}
                                                        </p>
                                                    )}
                                                </div>

                                                <p className="truncate text-sm text-[#20231f]/55">
                                                    {vacancy.contract_type ||
                                                        '—'}
                                                </p>

                                                <p className="truncate text-sm text-[#20231f]/55">
                                                    {vacancy.hours || '—'}
                                                </p>

                                                <p className="truncate text-sm text-[#20231f]/55">
                                                    {vacancy.location || '—'}
                                                </p>

                                                <span
                                                    className={`inline-flex w-fit border px-3 py-2 text-[8px] tracking-[0.12em] uppercase ${
                                                        vacancy.is_published
                                                            ? 'border-green-200 bg-green-50 text-green-700'
                                                            : 'border-black/10 bg-[#f7f4ee] text-[#20231f]/45'
                                                    }`}
                                                >
                                                    {vacancy.is_published
                                                        ? 'Gepubliceerd'
                                                        : 'Concept'}
                                                </span>

                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        href={`/admin/vacancies/${vacancy.id}/edit`}
                                                        className="inline-flex min-w-[88px] items-center justify-center bg-[#20231f] px-3 py-2.5 text-[8px] tracking-[0.12em] text-white uppercase transition hover:bg-[#5d6948]"
                                                    >
                                                        Bewerken
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            destroyVacancy(
                                                                vacancy,
                                                            )
                                                        }
                                                        className="inline-flex min-w-[96px] items-center justify-center border border-red-200 bg-red-50 px-3 py-2.5 text-[8px] tracking-[0.1em] text-red-700 uppercase transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                                                    >
                                                        Verwijderen
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tablet / Mobile */}
                                <div className="grid gap-5 md:grid-cols-2 xl:hidden">
                                    {filteredVacancies.map((vacancy) => (
                                        <article
                                            key={vacancy.id}
                                            className="overflow-hidden border border-black/10 bg-white"
                                        >
                                            <div className="relative aspect-[16/9] overflow-hidden bg-[#ebe7dc]">
                                                {vacancy.image ? (
                                                    <img
                                                        src={`/storage/${vacancy.image}`}
                                                        alt={vacancy.title}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center text-[9px] tracking-[0.22em] text-[#20231f]/25 uppercase">
                                                        Geen afbeelding
                                                    </div>
                                                )}

                                                <span
                                                    className={`absolute top-4 left-4 border px-3 py-2 text-[8px] tracking-[0.14em] uppercase ${
                                                        vacancy.is_published
                                                            ? 'border-green-200 bg-green-50 text-green-700'
                                                            : 'border-white/10 bg-[#20231f]/90 text-white'
                                                    }`}
                                                >
                                                    {vacancy.is_published
                                                        ? 'Gepubliceerd'
                                                        : 'Concept'}
                                                </span>
                                            </div>

                                            <div className="p-5">
                                                <p className="text-[9px] tracking-[0.2em] text-[#5d6948] uppercase">
                                                    {formatDate(
                                                        vacancy.published_at,
                                                    )}
                                                </p>

                                                <h2 className="mt-3 font-serif text-2xl">
                                                    {vacancy.title}
                                                </h2>

                                                {vacancy.excerpt && (
                                                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#20231f]/55">
                                                        {vacancy.excerpt}
                                                    </p>
                                                )}

                                                <div className="mt-5 space-y-3 border-t border-black/10 pt-5">
                                                    <div className="flex items-center justify-between gap-4 text-sm">
                                                        <span className="text-[#20231f]/35">
                                                            Dienstverband
                                                        </span>

                                                        <span className="text-right">
                                                            {vacancy.contract_type ||
                                                                '—'}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center justify-between gap-4 text-sm">
                                                        <span className="text-[#20231f]/35">
                                                            Uren
                                                        </span>

                                                        <span className="text-right">
                                                            {vacancy.hours ||
                                                                '—'}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center justify-between gap-4 text-sm">
                                                        <span className="text-[#20231f]/35">
                                                            Locatie
                                                        </span>

                                                        <span className="text-right">
                                                            {vacancy.location ||
                                                                '—'}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="mt-6 grid grid-cols-2 gap-3">
                                                    <Link
                                                        href={`/admin/vacancies/${vacancy.id}/edit`}
                                                        className="bg-[#20231f] px-4 py-3 text-center text-[9px] tracking-[0.15em] text-white uppercase transition hover:bg-[#5d6948]"
                                                    >
                                                        Bewerken
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            destroyVacancy(
                                                                vacancy,
                                                            )
                                                        }
                                                        className="border border-red-200 bg-red-50 px-4 py-3 text-[9px] tracking-[0.12em] text-red-700 uppercase transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                                                    >
                                                        Verwijderen
                                                    </button>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
