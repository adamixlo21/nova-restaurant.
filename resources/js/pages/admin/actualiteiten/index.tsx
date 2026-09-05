import { Head, Link, router } from '@inertiajs/react';
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

export default function Index({ actualiteiten }: Props) {
    function destroy(id: number) {
        if (!confirm('Weet je zeker dat je dit bericht wilt verwijderen?')) {
            return;
        }

        router.delete(`/admin/actualiteiten/${id}`);
    }

    return (
        <>
            <Head title="Actualiteiten beheren" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-10 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.35em] text-[#5d6948]">
                                    Admin
                                </p>

                                <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                                    Actualiteiten
                                </h1>

                                <p className="mt-3 text-sm text-[#20231f]/60">
                                    Beheer nieuwsberichten en updates van De Bank.
                                </p>
                            </div>

                            <Link
                                href="/admin/actualiteiten/create"
                                className="inline-flex items-center justify-center bg-[#20231f] px-6 py-4 text-xs uppercase tracking-[0.18em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                            >
                                + Nieuw bericht
                            </Link>
                        </div>

                        {actualiteiten.length === 0 ? (
                            <div className="border border-[#5d6948]/20 bg-white px-6 py-16 text-center">
                                <h2 className="font-serif text-2xl">
                                    Nog geen actualiteiten
                                </h2>

                                <p className="mt-2 text-sm text-[#20231f]/50">
                                    Maak je eerste nieuwsbericht aan.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {actualiteiten.map((item) => (
                                    <article
                                        key={item.id}
                                        className="overflow-hidden border border-[#5d6948]/20 bg-white"
                                    >
                                        <div className="aspect-[4/3] overflow-hidden bg-[#ebe7dc]">
                                            {item.image ? (
                                                <img
                                                    src={`/storage/${item.image}`}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center text-[10px] uppercase tracking-[0.25em] text-[#20231f]/30">
                                                    Geen afbeelding
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center justify-between gap-4">
                                                <span
                                                    className={`text-[10px] uppercase tracking-[0.18em] ${
                                                        item.is_published
                                                            ? 'text-green-700'
                                                            : 'text-[#20231f]/40'
                                                    }`}
                                                >
                                                    {item.is_published
                                                        ? 'Gepubliceerd'
                                                        : 'Concept'}
                                                </span>

                                                {item.published_at && (
                                                    <span className="text-xs text-[#20231f]/40">
                                                        {new Date(
                                                            item.published_at,
                                                        ).toLocaleDateString(
                                                            'nl-NL',
                                                        )}
                                                    </span>
                                                )}
                                            </div>

                                            <h2 className="mt-4 font-serif text-2xl">
                                                {item.title}
                                            </h2>

                                            {item.excerpt && (
                                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#20231f]/55">
                                                    {item.excerpt}
                                                </p>
                                            )}

                                            <div className="mt-6 flex gap-3">
                                                <Link
                                                    href={`/admin/actualiteiten/${item.id}/edit`}
                                                    className="flex-1 border border-[#20231f] px-4 py-3 text-center text-xs uppercase tracking-[0.15em] transition hover:bg-[#20231f] hover:text-[#f7f4ee]"
                                                >
                                                    Bewerken
                                                </Link>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        destroy(item.id)
                                                    }
                                                    className="border border-red-300 px-4 py-3 text-xs uppercase tracking-[0.15em] text-red-600 transition hover:bg-red-50"
                                                >
                                                    Verwijderen
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
