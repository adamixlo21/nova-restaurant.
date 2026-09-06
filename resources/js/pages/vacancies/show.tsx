import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Vacancy {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    contract_type: string | null;
    hours: string | null;
    location: string | null;
    image: string | null;
    published_at: string | null;
}

interface Props {
    vacancy: Vacancy;
}

export default function Show({ vacancy }: Props) {
    return (
        <>
            <Head title={`${vacancy.title} | Brasserie De Bank`} />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="px-6 pt-28 pb-16 sm:px-10 sm:pt-32 lg:px-16 lg:pb-20">
                    <div className="mx-auto max-w-6xl">
                        <Link
                            href="/vacatures"
                            className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                        >
                            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                ←
                            </span>
                            Terug naar vacatures
                        </Link>

                        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
                            <div>
                                <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                    Werken bij De Bank
                                </p>

                                <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                                    {vacancy.title}
                                    <span className="text-[#5d6948] italic">
                                        .
                                    </span>
                                </h1>

                                {vacancy.excerpt && (
                                    <p className="mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                                        {vacancy.excerpt}
                                    </p>
                                )}
                            </div>

                            <div className="border-t border-black/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                                <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
                                    Functiegegevens
                                </p>

                                <div className="mt-5 space-y-4">
                                    {vacancy.contract_type && (
                                        <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-4">
                                            <span className="text-sm text-[#20231f]/45">
                                                Dienstverband
                                            </span>

                                            <span className="text-sm">
                                                {vacancy.contract_type}
                                            </span>
                                        </div>
                                    )}

                                    {vacancy.hours && (
                                        <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-4">
                                            <span className="text-sm text-[#20231f]/45">
                                                Uren
                                            </span>

                                            <span className="text-sm">
                                                {vacancy.hours}
                                            </span>
                                        </div>
                                    )}

                                    {vacancy.location && (
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-sm text-[#20231f]/45">
                                                Locatie
                                            </span>

                                            <span className="text-sm">
                                                {vacancy.location}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* IMAGE */}
                {vacancy.image && (
                    <section className="px-6 sm:px-10 lg:px-16">
                        <div className="mx-auto max-w-7xl overflow-hidden bg-[#ebe7dc]">
                            <img
                                src={`/storage/${vacancy.image}`}
                                alt={vacancy.title}
                                className="max-h-[720px] w-full object-cover"
                            />
                        </div>
                    </section>
                )}

                {/* CONTENT */}
                <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_300px]">
                        <article>
                            <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                De functie
                            </p>

                            <div className="mt-6 text-base leading-8 whitespace-pre-line text-[#20231f]/70">
                                {vacancy.content ||
                                    'Meer informatie over deze vacature volgt binnenkort.'}
                            </div>
                        </article>

                        <aside className="lg:sticky lg:top-28 lg:self-start">
                            <div className="bg-[#20231f] p-7 text-[#f7f4ee]">
                                <p className="text-[9px] tracking-[0.25em] text-[#aeb69b] uppercase">
                                    Solliciteren
                                </p>

                                <h2 className="mt-4 font-serif text-3xl leading-tight">
                                    Enthousiast geworden?
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-white/55">
                                    Stuur je motivatie en cv naar Brasserie De
                                    Bank. We horen graag van je.
                                </p>

                                <a
                                    href={`mailto:info@brasseriedebank.nl?subject=Sollicitatie - ${encodeURIComponent(
                                        vacancy.title,
                                    )}`}
                                    className="mt-7 inline-flex w-full items-center justify-center bg-[#5d6948] px-5 py-4 text-center text-[9px] tracking-[0.22em] text-white uppercase transition hover:bg-[#f7f4ee] hover:text-[#20231f]"
                                >
                                    Solliciteer direct
                                </a>

                                <a
                                    href="tel:+31341472582"
                                    className="mt-3 inline-flex w-full items-center justify-center border border-white/15 px-5 py-4 text-center text-[9px] tracking-[0.22em] text-white/70 uppercase transition hover:border-white/40 hover:text-white"
                                >
                                    0341 - 472 582
                                </a>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* BOTTOM CTA */}
                <section className="bg-[#5d6948] px-6 py-20 text-[#f7f4ee] sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-[10px] tracking-[0.3em] text-[#f7f4ee]/55 uppercase">
                                Brasserie De Bank
                            </p>

                            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                                Bekijk ook onze andere vacatures
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#f7f4ee]/65">
                                Misschien staat er nog een andere functie tussen
                                die goed bij je past.
                            </p>
                        </div>

                        <Link
                            href="/vacatures"
                            className="w-fit bg-[#20231f] px-7 py-4 text-[10px] tracking-[0.22em] text-[#f7f4ee] uppercase transition hover:bg-[#f7f4ee] hover:text-[#20231f]"
                        >
                            Alle vacatures
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
