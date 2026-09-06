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
                    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Nieuws uit De Bank
                                </p>

                                <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                                    Actualiteiten
                                    <span className="text-[#5d6948] italic">
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

                {/* INTRO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-9 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-5xl gap-6 text-center sm:grid-cols-3">
                        <div>
                            <p className="font-serif text-2xl">
                                Nieuwe gerechten
                            </p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Uit onze keuken
                            </p>
                        </div>

                        <div className="sm:border-x sm:border-black/10">
                            <p className="font-serif text-2xl">
                                Evenementen
                            </p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Bij De Bank
                            </p>
                        </div>

                        <div>
                            <p className="font-serif text-2xl">
                                Verhalen
                            </p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Uit Harderwijk
                            </p>
                        </div>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
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
                                    evenementen en updates van Brasserie De
                                    Bank.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-16">
                                {/* FEATURED */}
                                {actualiteiten[0] && (
                                    <Link
                                        href={`/actualiteiten/${actualiteiten[0].slug}`}
                                        className="group grid overflow-hidden border border-black/10 bg-[#f7f4ee] transition hover:bg-white hover:shadow-[0_25px_70px_rgba(32,35,31,0.06)] lg:grid-cols-[1.2fr_0.8fr]"
                                    >
                                        <div className="relative min-h-[420px] overflow-hidden bg-[#ebe7dc] sm:min-h-[520px]">
                                            {actualiteiten[0].image ? (
                                                <img
                                                    src={`/storage/${actualiteiten[0].image}`}
                                                    alt={actualiteiten[0].title}
                                                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center bg-[#ebe7dc]">
                                                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#20231f]/25">
                                                        Brasserie De Bank
                                                    </span>
                                                </div>
                                            )}

                                            <div className="absolute left-5 top-5 bg-[#f7f4ee]/95 px-4 py-2 text-[8px] uppercase tracking-[0.22em] text-[#5d6948] backdrop-blur-sm">
                                                Uitgelicht
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                                            <div>
                                                <p className="text-[9px] uppercase tracking-[0.28em] text-[#5d6948]">
                                                    Uitgelicht
                                                </p>

                                                {actualiteiten[0]
                                                    .published_at && (
                                                    <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                                        {formatDate(
                                                            actualiteiten[0]
                                                                .published_at,
                                                        )}
                                                    </p>
                                                )}

                                                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                                                    {actualiteiten[0].title}
                                                </h2>

                                                {actualiteiten[0].excerpt && (
                                                    <p className="mt-6 text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                                                        {
                                                            actualiteiten[0]
                                                                .excerpt
                                                        }
                                                    </p>
                                                )}
                                            </div>

                                            <div className="mt-10 inline-flex items-center gap-3 border-t border-black/10 pt-5 text-[10px] uppercase tracking-[0.22em] text-[#5d6948]">
                                                Lees het artikel

                                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                )}

                                {/* MORE NEWS */}
                                {actualiteiten.length > 1 && (
                                    <div>
                                        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                                    Meer nieuws
                                                </p>

                                                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                                                    Ontdek meer uit De Bank
                                                </h2>
                                            </div>

                                            <p className="max-w-md text-sm leading-7 text-[#20231f]/45">
                                                Nieuws, updates en verhalen uit
                                                de brasserie.
                                            </p>
                                        </div>

                                        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                                            {actualiteiten
                                                .slice(1)
                                                .map((item) => (
                                                    <article
                                                        key={item.id}
                                                        className="group overflow-hidden border border-black/10 bg-[#f7f4ee] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(32,35,31,0.05)]"
                                                    >
                                                        <Link
                                                            href={`/actualiteiten/${item.slug}`}
                                                            className="block h-full"
                                                        >
                                                            <div className="relative aspect-[4/3] overflow-hidden bg-[#ebe7dc]">
                                                                {item.image ? (
                                                                    <img
                                                                        src={`/storage/${item.image}`}
                                                                        alt={
                                                                            item.title
                                                                        }
                                                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                                                                    />
                                                                ) : (
                                                                    <div className="flex h-full items-center justify-center">
                                                                        <span className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/25">
                                                                            Brasserie
                                                                            De
                                                                            Bank
                                                                        </span>
                                                                    </div>
                                                                )}

                                                                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-[#f7f4ee]/95 text-[#5d6948] shadow-sm transition duration-300 group-hover:bg-[#5d6948] group-hover:text-white">
                                                                    →
                                                                </div>
                                                            </div>

                                                            <div className="p-6">
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
                                                                        {
                                                                            item.excerpt
                                                                        }
                                                                    </p>
                                                                )}

                                                                <div className="mt-6 border-t border-black/10 pt-4 text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
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

                {/* DISCOVER MORE */}
                <section className="bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-6 md:grid-cols-3">
                            <Link
                                href="/menus"
                                className="group border border-black/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(32,35,31,0.05)]"
                            >
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    01
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Onze kaarten
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Bekijk wat er op dit moment op onze lunch-,
                                    diner- en borrelkaarten staat.
                                </p>

                                <div className="mt-7 text-[9px] uppercase tracking-[0.2em] text-[#5d6948]">
                                    Bekijk de kaart →
                                </div>
                            </Link>

                            <Link
                                href="/mogelijkheden"
                                className="group border border-black/10 bg-[#ebe7dc] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(32,35,31,0.05)]"
                            >
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    02
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Mogelijkheden
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Ontdek wat mogelijk is voor private dining,
                                    vergaderen en bijzondere gelegenheden.
                                </p>

                                <div className="mt-7 text-[9px] uppercase tracking-[0.2em] text-[#5d6948]">
                                    Ontdek meer →
                                </div>
                            </Link>

                            <Link
                                href="/reservation"
                                className="group border border-black/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(32,35,31,0.05)]"
                            >
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    03
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Reserveren
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Een tafel bij De Bank? Reserveer eenvoudig
                                    online.
                                </p>

                                <div className="mt-7 text-[9px] uppercase tracking-[0.2em] text-[#5d6948]">
                                    Reserveer een tafel →
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="border-t border-[#5d6948]/10 bg-[#edf0e7] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                Brasserie De Bank
                            </p>

                            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                                Liever zelf iets nieuws ontdekken?
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                Bekijk onze kaarten of reserveer direct een
                                tafel.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/menus"
                                className="border border-[#5d6948]/25 bg-white/60 px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-[#20231f] transition hover:border-[#5d6948] hover:bg-white"
                            >
                                Bekijk de kaart
                            </Link>

                            <Link
                                href="/reservation"
                                className="bg-[#5d6948] px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition hover:bg-[#4f5a3d]"
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
