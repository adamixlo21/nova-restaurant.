import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Actualiteit {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    image: string | null;
    published_at: string | null;
}

interface Props {
    actualiteiten: Actualiteit[];
}

export default function Index({ actualiteiten }: Props) {
    function formatDate(date: string) {
        return new Date(date).toLocaleDateString('nl-NL', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }

    return (
        <>
            <Head title="Actualiteiten | Brasserie De Bank" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">

                {/* HERO */}
                <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-10 sm:pt-32 lg:px-16 lg:pb-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Nieuws uit De Bank
                                </p>

                                <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                                    Actualiteiten
                                    <span className="italic text-[#5d6948]">
                                        .
                                    </span>
                                </h1>
                            </div>

                            <div className="max-w-xl lg:justify-self-end">
                                <p className="text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                                    Blijf op de hoogte van nieuwe gerechten,
                                    evenementen, bijzondere momenten en nieuws
                                    uit Brasserie De Bank.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-8 border-t border-black/10 pt-5">
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                            Locatie
                                        </p>

                                        <p className="mt-2 text-sm">
                                            Harderwijk
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                            Updates
                                        </p>

                                        <p className="mt-2 text-sm">
                                            Nieuws · Events · Menu
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <span className="pointer-events-none absolute -bottom-20 right-0 hidden font-serif text-[260px] leading-none text-[#5d6948]/[0.035] lg:block">
                        B
                    </span>
                </section>

                {/* CONTENT */}
                <section className="border-t border-black/5 bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">

                        {actualiteiten.length === 0 ? (
                            <div className="border border-black/10 bg-[#f7f4ee] px-6 py-20 text-center">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                    Binnenkort
                                </p>

                                <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                                    Nog geen actualiteiten
                                </h2>

                                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#20231f]/50">
                                    Houd deze pagina in de gaten voor nieuws,
                                    evenementen en updates van Brasserie De Bank.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-16">

                                {/* Featured */}
                                {actualiteiten[0] && (
                                    <Link
                                        href={`/actualiteiten/${actualiteiten[0].slug}`}
                                        className="group grid overflow-hidden bg-[#20231f] text-[#f7f4ee] lg:grid-cols-[1.2fr_0.8fr]"
                                    >
                                        <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px]">
                                            {actualiteiten[0].image ? (
                                                <img
                                                    src={`/storage/${actualiteiten[0].image}`}
                                                    alt={actualiteiten[0].title}
                                                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center bg-[#5d6948]">
                                                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                                                        Brasserie De Bank
                                                    </span>
                                                </div>
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                                        </div>

                                        <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                                            <div>
                                                <p className="text-[9px] uppercase tracking-[0.28em] text-[#aeb69b]">
                                                    Uitgelicht
                                                </p>

                                                {actualiteiten[0].published_at && (
                                                    <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-white/45">
                                                        {formatDate(
                                                            actualiteiten[0].published_at,
                                                        )}
                                                    </p>
                                                )}

                                                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                                                    {actualiteiten[0].title}
                                                </h2>

                                                {actualiteiten[0].excerpt && (
                                                    <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                                                        {actualiteiten[0].excerpt}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="mt-10 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white">
                                                Lees het artikel

                                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                )}

                                {/* Remaining */}
                                {actualiteiten.length > 1 && (
                                    <div>
                                        <div className="mb-10 flex items-end justify-between gap-6">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                                    Meer nieuws
                                                </p>

                                                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                                                    Ontdek meer uit De Bank
                                                </h2>
                                            </div>
                                        </div>

                                        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                                            {actualiteiten.slice(1).map((item) => (
                                                <article
                                                    key={item.id}
                                                    className="group"
                                                >
                                                    <Link
                                                        href={`/actualiteiten/${item.slug}`}
                                                        className="block"
                                                    >
                                                        <div className="relative aspect-[4/3] overflow-hidden bg-[#ebe7dc]">
                                                            {item.image ? (
                                                                <img
                                                                    src={`/storage/${item.image}`}
                                                                    alt={item.title}
                                                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                                                                />
                                                            ) : (
                                                                <div className="flex h-full items-center justify-center">
                                                                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/25">
                                                                        Brasserie De Bank
                                                                    </span>
                                                                </div>
                                                            )}

                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                                            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-[#f7f4ee] text-[#5d6948] transition duration-300 group-hover:bg-[#20231f] group-hover:text-white">
                                                                →
                                                            </div>
                                                        </div>

                                                        <div className="pt-5">
                                                            {item.published_at && (
                                                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                                                    {formatDate(
                                                                        item.published_at,
                                                                    )}
                                                                </p>
                                                            )}

                                                            <h3 className="mt-3 font-serif text-3xl leading-tight">
                                                                {item.title}
                                                            </h3>

                                                            {item.excerpt && (
                                                                <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#20231f]/50">
                                                                    {item.excerpt}
                                                                </p>
                                                            )}

                                                            <div className="mt-5 h-px bg-black/10" />

                                                            <div className="mt-4 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                                                Lees verder
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[#5d6948] px-6 py-20 text-[#f7f4ee] sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f7f4ee]/55">
                                Brasserie De Bank
                            </p>

                            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                                Liever zelf iets nieuws ontdekken?
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#f7f4ee]/65">
                                Bekijk onze kaarten of reserveer direct een tafel.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/menus"
                                className="border border-[#f7f4ee]/60 px-7 py-4 text-[10px] uppercase tracking-[0.22em] transition hover:bg-[#f7f4ee] hover:text-[#5d6948]"
                            >
                                Bekijk de kaart
                            </Link>

                            <Link
                                href="/reservation"
                                className="bg-[#20231f] px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-[#f7f4ee] transition hover:bg-[#f7f4ee] hover:text-[#20231f]"
                            >
                                Reserveren
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
