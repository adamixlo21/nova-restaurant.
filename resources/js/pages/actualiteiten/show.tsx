import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Actualiteit {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    image: string | null;
    published_at: string | null;
}

interface Props {
    actualiteit: Actualiteit;
}

export default function Show({ actualiteit }: Props) {
    function formatDate(date: string) {
        return new Date(date).toLocaleDateString('nl-NL', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }

    return (
        <>
            <Head title={`${actualiteit.title} | Brasserie De Bank`} />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 pb-16 pt-28 sm:px-10 sm:pt-32 lg:px-16 lg:pb-20">
                    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="max-w-5xl">
                            <Link
                                href="/actualiteiten"
                                className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#5d6948]"
                            >
                                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                    ←
                                </span>

                                Terug naar actualiteiten
                            </Link>

                            <div className="mt-10">
                                <p className="text-[10px] uppercase tracking-[0.32em] text-[#5d6948]">
                                    Nieuws uit De Bank
                                </p>

                                {actualiteit.published_at && (
                                    <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#20231f]/35">
                                        {formatDate(actualiteit.published_at)}
                                    </p>
                                )}

                                <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                                    {actualiteit.title}
                                </h1>

                                {actualiteit.excerpt && (
                                    <p className="mt-7 max-w-3xl text-base leading-8 text-[#20231f]/55 sm:text-lg sm:leading-9">
                                        {actualiteit.excerpt}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* IMAGE */}
                {actualiteit.image && (
                    <section className="px-6 sm:px-10 lg:px-16">
                        <div className="mx-auto max-w-7xl">
                            <div className="relative overflow-hidden bg-[#ebe7dc]">
                                <img
                                    src={`/storage/${actualiteit.image}`}
                                    alt={actualiteit.title}
                                    className="max-h-[720px] min-h-[320px] w-full object-cover sm:min-h-[450px]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                                <div className="absolute bottom-5 left-5 border border-black/10 bg-[#f7f4ee]/95 px-4 py-2 text-[9px] uppercase tracking-[0.22em] text-[#5d6948] shadow-sm backdrop-blur-sm sm:bottom-7 sm:left-7">
                                    Brasserie De Bank
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ARTICLE */}
                <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr]">
                        {/* Sidebar */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-28 border-t border-black/10 pt-5">
                                <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                    Artikel
                                </p>

                                {actualiteit.published_at && (
                                    <div className="mt-5">
                                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#5d6948]">
                                            Gepubliceerd
                                        </p>

                                        <p className="mt-2 text-sm text-[#20231f]/60">
                                            {formatDate(
                                                actualiteit.published_at,
                                            )}
                                        </p>
                                    </div>
                                )}

                                <div className="mt-7 border-t border-black/10 pt-5">
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#20231f]/35">
                                        Brasserie
                                    </p>

                                    <p className="mt-2 text-sm">De Bank</p>

                                    <p className="mt-1 text-xs text-[#20231f]/40">
                                        Harderwijk
                                    </p>
                                </div>

                                <Link
                                    href="/actualiteiten"
                                    className="group mt-8 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#5d6948]"
                                >
                                    Alle actualiteiten

                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </aside>

                        {/* Content */}
                        <article className="max-w-3xl">
                            {actualiteit.content ? (
                                <div className="whitespace-pre-line font-sans text-[16px] leading-8 text-[#20231f]/70 sm:text-[17px] sm:leading-9">
                                    {actualiteit.content}
                                </div>
                            ) : (
                                <div className="border border-black/10 bg-white px-6 py-12">
                                    <p className="font-serif text-2xl">
                                        Dit artikel heeft nog geen inhoud.
                                    </p>
                                </div>
                            )}

                            {/* Bottom navigation */}
                            <div className="mt-16 border-t border-black/10 pt-8">
                                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                            Meer ontdekken
                                        </p>

                                        <p className="mt-2 font-serif text-2xl">
                                            Nieuws uit De Bank
                                        </p>
                                    </div>

                                    <Link
                                        href="/actualiteiten"
                                        className="group inline-flex w-fit items-center gap-3 border border-[#5d6948]/25 bg-white/50 px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#20231f] transition hover:border-[#5d6948] hover:bg-white"
                                    >
                                        Alle actualiteiten

                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                {/* DISCOVER MORE */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-6 md:grid-cols-3">
                            <Link
                                href="/menus"
                                className="group border border-black/10 bg-[#f7f4ee] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(32,35,31,0.05)]"
                            >
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    01
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Onze kaarten
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Bekijk onze lunch-, diner- en borrelkaarten.
                                </p>

                                <div className="mt-7 text-[9px] uppercase tracking-[0.2em] text-[#5d6948]">
                                    Bekijk de kaart →
                                </div>
                            </Link>

                            <Link
                                href="/mogelijkheden"
                                className="group border border-black/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(32,35,31,0.05)]"
                            >
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    02
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Mogelijkheden
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Ontdek private dining, vergaderen en
                                    feestelijke mogelijkheden.
                                </p>

                                <div className="mt-7 text-[9px] uppercase tracking-[0.2em] text-[#5d6948]">
                                    Ontdek meer →
                                </div>
                            </Link>

                            <Link
                                href="/reservation"
                                className="group border border-black/10 bg-[#f7f4ee] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(32,35,31,0.05)]"
                            >
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    03
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Reserveren
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Zelf bij De Bank komen genieten? Reserveer
                                    eenvoudig online.
                                </p>

                                <div className="mt-7 text-[9px] uppercase tracking-[0.2em] text-[#5d6948]">
                                    Reserveer →
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
                                Zelf de sfeer van De Bank ervaren?
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                Bekijk onze kaart of reserveer direct een tafel.
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
