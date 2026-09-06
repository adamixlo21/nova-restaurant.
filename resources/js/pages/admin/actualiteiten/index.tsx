import { Head, Link, router } from '@inertiajs/react';
import { useMemo, useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

interface Actualiteit {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    image: string | null;
    is_published: boolean;
    published_at: string | null;
}

interface Props {
    actualiteiten: Actualiteit[];
}

type StatusFilter = 'all' | 'published' | 'draft';

export default function Index({ actualiteiten }: Props) {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

    function destroy(id: number) {
        if (
            !confirm(
                'Weet je zeker dat je dit actualiteitsbericht wilt verwijderen?',
            )
        ) {
            return;
        }

        router.delete(`/admin/actualiteiten/${id}`, {
            preserveScroll: true,
        });
    }

    function formatDate(date: string | null) {
        if (!date) {
            return 'Nog niet gepubliceerd';
        }

        return new Date(date).toLocaleDateString('nl-NL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    const filteredActualiteiten = useMemo(() => {
        const query = search.toLowerCase().trim();

        return actualiteiten.filter((item) => {
            const matchesSearch =
                !query ||
                item.title.toLowerCase().includes(query) ||
                item.excerpt?.toLowerCase().includes(query) ||
                item.slug.toLowerCase().includes(query);

            const matchesStatus =
                statusFilter === 'all' ||
                (statusFilter === 'published' && item.is_published) ||
                (statusFilter === 'draft' && !item.is_published);

            return matchesSearch && matchesStatus;
        });
    }, [actualiteiten, search, statusFilter]);

    const publishedCount = actualiteiten.filter(
        (item) => item.is_published,
    ).length;

    const draftCount = actualiteiten.filter(
        (item) => !item.is_published,
    ).length;

    function resetFilters() {
        setSearch('');
        setStatusFilter('all');
    }

    return (
        <>
            <Head title="Actualiteiten beheren" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="mb-10">
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                                <Link
                                    href="/dashboard"
                                    className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                                >
                                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                        ←
                                    </span>
                                    Terug naar dashboard
                                </Link>
                                <div>
                                    <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                        Admin · Actualiteiten
                                    </p>

                                    <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                                        Actualiteiten
                                    </h1>

                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#20231f]/50">
                                        Beheer nieuwsberichten, aankondigingen
                                        en updates van De Bank.
                                    </p>
                                </div>

                                <Link
                                    href="/admin/actualiteiten/create"
                                    className="inline-flex items-center justify-center bg-[#20231f] px-6 py-4 text-[10px] tracking-[0.2em] text-[#f7f4ee] uppercase transition hover:bg-[#5d6948]"
                                >
                                    + Nieuw bericht
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
                                    {actualiteiten.length}
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
                        {actualiteiten.length > 0 && (
                            <div className="mb-6 border border-black/10 bg-white p-4 sm:p-5">
                                <div className="flex flex-col gap-4 md:flex-row">
                                    <div className="relative flex-1">
                                        <input
                                            type="text"
                                            value={search}
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
                                            placeholder="Zoek op titel, slug of tekst..."
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
                                            {filteredActualiteiten.length}{' '}
                                            {filteredActualiteiten.length === 1
                                                ? 'bericht'
                                                : 'berichten'}
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
                        {actualiteiten.length === 0 ? (
                            <div className="border border-black/10 bg-white px-6 py-20 text-center">
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Actualiteiten
                                </p>

                                <h2 className="mt-4 font-serif text-3xl">
                                    Nog geen actualiteiten
                                </h2>

                                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#20231f]/50">
                                    Maak je eerste nieuwsbericht of update aan.
                                </p>

                                <Link
                                    href="/admin/actualiteiten/create"
                                    className="mt-7 inline-flex bg-[#20231f] px-6 py-4 text-[9px] tracking-[0.18em] text-white uppercase transition hover:bg-[#5d6948]"
                                >
                                    + Nieuw bericht
                                </Link>
                            </div>
                        ) : filteredActualiteiten.length === 0 ? (
                            <div className="border border-black/10 bg-white px-6 py-20 text-center">
                                <h2 className="font-serif text-3xl">
                                    Geen berichten gevonden
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
                                    <div className="grid grid-cols-[90px_minmax(190px,1.1fr)_minmax(220px,1.5fr)_130px_120px_200px] gap-4 border-b border-black/10 bg-[#ebe7dc] px-5 py-4">
                                        <span />

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Titel
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Omschrijving
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Status
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Datum
                                        </p>

                                        <p className="text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                            Acties
                                        </p>
                                    </div>

                                    <div className="divide-y divide-black/10">
                                        {filteredActualiteiten.map((item) => (
                                            <div
                                                key={item.id}
                                                className="grid grid-cols-[90px_minmax(190px,1.1fr)_minmax(220px,1.5fr)_130px_120px_200px] items-center gap-4 px-5 py-5 transition hover:bg-[#f7f4ee]"
                                            >
                                                <div className="h-16 w-20 overflow-hidden bg-[#ebe7dc]">
                                                    {item.image ? (
                                                        <img
                                                            src={`/storage/${item.image}`}
                                                            alt={item.title}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full items-center justify-center text-[7px] tracking-[0.1em] text-[#20231f]/25 uppercase">
                                                            Geen foto
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="truncate font-medium">
                                                        {item.title}
                                                    </p>

                                                    <p className="mt-1 truncate text-[9px] text-[#20231f]/30">
                                                        /{item.slug}
                                                    </p>
                                                </div>

                                                <p className="truncate text-sm text-[#20231f]/50">
                                                    {item.excerpt ||
                                                        'Geen korte omschrijving'}
                                                </p>

                                                <span
                                                    className={`inline-flex w-fit border px-3 py-2 text-[8px] tracking-[0.14em] uppercase ${
                                                        item.is_published
                                                            ? 'border-green-200 bg-green-50 text-green-700'
                                                            : 'border-black/10 bg-[#f7f4ee] text-[#20231f]/45'
                                                    }`}
                                                >
                                                    {item.is_published
                                                        ? 'Gepubliceerd'
                                                        : 'Concept'}
                                                </span>

                                                <p className="text-xs text-[#20231f]/45">
                                                    {formatDate(
                                                        item.published_at,
                                                    )}
                                                </p>

                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        href={`/admin/actualiteiten/${item.id}/edit`}
                                                        className="inline-flex min-w-[88px] items-center justify-center bg-[#20231f] px-3 py-2.5 text-[8px] tracking-[0.12em] text-white uppercase transition hover:bg-[#5d6948]"
                                                    >
                                                        Bewerken
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            destroy(item.id)
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
                                    {filteredActualiteiten.map((item) => (
                                        <article
                                            key={item.id}
                                            className="overflow-hidden border border-black/10 bg-white"
                                        >
                                            <div className="aspect-[16/9] overflow-hidden bg-[#ebe7dc]">
                                                {item.image ? (
                                                    <img
                                                        src={`/storage/${item.image}`}
                                                        alt={item.title}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center text-[9px] tracking-[0.22em] text-[#20231f]/25 uppercase">
                                                        Geen afbeelding
                                                    </div>
                                                )}
                                            </div>

                                            <div className="p-5">
                                                <div className="flex items-center justify-between gap-4">
                                                    <span
                                                        className={`border px-3 py-2 text-[8px] tracking-[0.14em] uppercase ${
                                                            item.is_published
                                                                ? 'border-green-200 bg-green-50 text-green-700'
                                                                : 'border-black/10 bg-[#f7f4ee] text-[#20231f]/45'
                                                        }`}
                                                    >
                                                        {item.is_published
                                                            ? 'Gepubliceerd'
                                                            : 'Concept'}
                                                    </span>

                                                    <p className="text-xs text-[#20231f]/35">
                                                        {formatDate(
                                                            item.published_at,
                                                        )}
                                                    </p>
                                                </div>

                                                <h2 className="mt-5 font-serif text-2xl">
                                                    {item.title}
                                                </h2>

                                                {item.excerpt && (
                                                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#20231f]/55">
                                                        {item.excerpt}
                                                    </p>
                                                )}

                                                <div className="mt-6 grid grid-cols-2 gap-3">
                                                    <Link
                                                        href={`/admin/actualiteiten/${item.id}/edit`}
                                                        className="bg-[#20231f] px-4 py-3 text-center text-[9px] tracking-[0.15em] text-white uppercase transition hover:bg-[#5d6948]"
                                                    >
                                                        Bewerken
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            destroy(item.id)
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
