import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Vacancy {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    contract_type: string | null;
    hours: string | null;
    location: string | null;
    image: string | null;
    published_at: string | null;
}

interface Props {
    vacancies: Vacancy[];
}

export default function Index({ vacancies }: Props) {
    return (
        <>
            <Head title="Vacatures | Brasserie De Bank" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-10 sm:pt-32 lg:px-16 lg:pb-28">
                    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="max-w-4xl">
                            <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                Werken bij De Bank
                            </p>

                            <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                                Werken met sfeer,
                                <br />
                                <span className="text-[#5d6948] italic">
                                    smaak en gastvrijheid.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                                Zin om onderdeel te worden van Brasserie De
                                Bank? Bekijk onze openstaande functies en ontdek
                                of er een plek voor jou tussen zit.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INTRO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-8 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-5xl gap-6 text-center sm:grid-cols-3">
                        <div>
                            <p className="font-serif text-2xl">Gastvrij</p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Samen voor de gast
                            </p>
                        </div>

                        <div className="sm:border-x sm:border-black/10">
                            <p className="font-serif text-2xl">Persoonlijk</p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Werken in een hecht team
                            </p>
                        </div>

                        <div>
                            <p className="font-serif text-2xl">Harderwijk</p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Midden in de stad
                            </p>
                        </div>
                    </div>
                </section>

                {/* VACANCIES */}
                <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Openstaande functies
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                    Misschien zit jouw plek
                                    <span className="text-[#5d6948] italic">
                                        {' '}
                                        ertussen.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#20231f]/50">
                                Bekijk hieronder de functies waarvoor we op dit
                                moment versterking zoeken.
                            </p>
                        </div>

                        {vacancies.length === 0 ? (
                            <div className="border border-black/10 bg-[#f7f4ee] px-6 py-20 text-center">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                    Momenteel
                                </p>

                                <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                                    Geen openstaande vacatures
                                </h2>

                                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#20231f]/50">
                                    Op dit moment hebben we geen openstaande
                                    functies, maar een open sollicitatie is
                                    altijd welkom.
                                </p>

                                <a
                                    href="mailto:info@brasseriedebank.nl"
                                    className="mt-7 inline-flex bg-[#5d6948] px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition hover:bg-[#4f5a3d]"
                                >
                                    Open sollicitatie
                                </a>
                            </div>
                        ) : (
                            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                                {vacancies.map((vacancy) => (
                                    <article
                                        key={vacancy.id}
                                        className="group overflow-hidden border border-black/10 bg-[#f7f4ee] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(32,35,31,0.06)]"
                                    >
                                        <Link
                                            href={`/vacatures/${vacancy.slug}`}
                                            className="block h-full"
                                        >
                                            <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe7dc]">
                                                {vacancy.image ? (
                                                    <img
                                                        src={`/storage/${vacancy.image}`}
                                                        alt={vacancy.title}
                                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center">
                                                        <span className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/25">
                                                            Brasserie De Bank
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-[#f7f4ee]/95 text-[#5d6948] shadow-sm transition duration-300 group-hover:bg-[#5d6948] group-hover:text-white">
                                                    →
                                                </div>
                                            </div>

                                            <div className="p-6 sm:p-7">
                                                <div className="flex flex-wrap gap-2">
                                                    {vacancy.contract_type && (
                                                        <span className="border border-[#5d6948]/15 bg-white px-3 py-2 text-[8px] uppercase tracking-[0.18em] text-[#5d6948]">
                                                            {
                                                                vacancy.contract_type
                                                            }
                                                        </span>
                                                    )}

                                                    {vacancy.hours && (
                                                        <span className="border border-black/5 bg-white px-3 py-2 text-[8px] uppercase tracking-[0.18em] text-[#20231f]/55">
                                                            {vacancy.hours}
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="mt-5 font-serif text-3xl leading-tight">
                                                    {vacancy.title}
                                                </h3>

                                                {vacancy.excerpt && (
                                                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#20231f]/50">
                                                        {vacancy.excerpt}
                                                    </p>
                                                )}

                                                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
                                                    {vacancy.location ? (
                                                        <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                                            {
                                                                vacancy.location
                                                            }
                                                        </p>
                                                    ) : (
                                                        <span />
                                                    )}

                                                    <span className="text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35 transition group-hover:text-[#5d6948]">
                                                        Bekijk vacature
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* WHY WORK HERE */}
                <section className="bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto mb-12 max-w-2xl text-center">
                            <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                Werken bij De Bank
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                                Een plek waar je met plezier werkt.
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#20231f]/50 sm:text-base">
                                Samen zorgen we voor een fijne sfeer, goed eten
                                en gastvrijheid voor iedere bezoeker.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="border border-black/10 bg-white p-8">
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    01
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Samenwerken
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Je werkt samen in een team waar iedereen
                                    bijdraagt aan een fijne ervaring voor de
                                    gast.
                                </p>
                            </div>

                            <div className="border border-black/10 bg-[#ebe7dc] p-8">
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    02
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Gastvrijheid
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Persoonlijke aandacht en een ontspannen sfeer
                                    staan centraal in alles wat we doen.
                                </p>
                            </div>

                            <div className="border border-black/10 bg-white p-8">
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    03
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Midden in Harderwijk
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Een levendige werkplek midden in de stad,
                                    tussen gasten, collega’s en gezelligheid.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OPEN APPLICATION */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                Open sollicitatie
                            </p>

                            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                                Staat jouw functie er niet tussen?
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                Denk je dat je goed bij Brasserie De Bank past?
                                Stuur dan gerust een open sollicitatie.
                            </p>
                        </div>

                        <a
                            href="mailto:info@brasseriedebank.nl"
                            className="w-fit bg-[#5d6948] px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition hover:bg-[#4f5a3d]"
                        >
                            Open sollicitatie
                        </a>
                    </div>
                </section>

                {/* CLOSING */}
                <section className="bg-[#edf0e7] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                            Tot snel?
                        </p>

                        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Misschien werk jij binnenkort
                            <br />
                            <span className="text-[#5d6948] italic">
                                bij De Bank.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Bekijk de vacatures of neem gerust contact met ons
                            op als je meer wilt weten.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:info@brasseriedebank.nl"
                                className="bg-[#5d6948] px-8 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition hover:bg-[#4f5a3d]"
                            >
                                Solliciteer
                            </a>

                            <Link
                                href="/contacts"
                                className="border border-[#5d6948]/25 bg-white/60 px-8 py-4 text-[10px] uppercase tracking-[0.22em] text-[#20231f] transition hover:border-[#5d6948] hover:bg-white"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
