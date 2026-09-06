import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
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
    useEffect(() => {
        const elements =
            document.querySelectorAll<HTMLElement>('[data-reveal]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px',
            },
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Head title="Vacatures | Brasserie De Bank" />

            <Navbar />

            <main className="overflow-hidden bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 pt-28 pb-20 sm:px-10 sm:pt-32 lg:px-16 lg:pb-28">
                    <div className="pointer-events-none absolute top-10 -right-24 h-72 w-72 rounded-full border border-[#5d6948]/10" />

                    <div className="pointer-events-none absolute bottom-0 -left-20 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <span className="pointer-events-none absolute right-0 -bottom-16 hidden font-serif text-[260px] leading-none text-[#5d6948]/[0.035] lg:block">
                        W
                    </span>

                    <div className="relative mx-auto max-w-7xl">
                        <div
                            data-reveal
                            className="vacancy-hero grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
                        >
                            <div>
                                <div className="vacancy-hero-label flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#5d6948]/40" />

                                    <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                        Werken bij De Bank
                                    </p>
                                </div>

                                <h1 className="vacancy-hero-title mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                                    Werken met sfeer,
                                    <br />
                                    <span className="text-[#5d6948] italic">
                                        smaak en gastvrijheid.
                                    </span>
                                </h1>
                            </div>

                            <div className="vacancy-hero-side max-w-xl lg:justify-self-end">
                                <p className="text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                                    Zin om onderdeel te worden van Brasserie De
                                    Bank? Bekijk onze openstaande functies en
                                    ontdek of er een plek voor jou tussen zit.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-8 border-t border-black/10 pt-5">
                                    <div>
                                        <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
                                            Locatie
                                        </p>

                                        <p className="mt-2 text-sm">
                                            Harderwijk
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
                                            Werkomgeving
                                        </p>

                                        <p className="mt-2 text-sm">
                                            Horeca · Team · Gastvrij
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-10 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">
                        {[
                            ['Gastvrij', 'Samen voor de gast'],
                            ['Persoonlijk', 'Werken in een hecht team'],
                            ['Harderwijk', 'Midden in de stad'],
                        ].map(([title, subtitle], index) => (
                            <div
                                key={title}
                                data-reveal
                                style={{
                                    transitionDelay: `${index * 120}ms`,
                                }}
                                className={`vacancy-strip-item ${
                                    index === 1
                                        ? 'sm:border-x sm:border-black/10'
                                        : ''
                                }`}
                            >
                                <p className="font-serif text-2xl">{title}</p>

                                <p className="mt-2 text-[9px] tracking-[0.22em] text-[#20231f]/35 uppercase">
                                    {subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* VACANCIES */}
                <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute top-20 -left-24 h-52 w-52 rounded-full border border-[#5d6948]/8" />

                    <div className="pointer-events-none absolute -right-20 bottom-20 h-60 w-60 rounded-full border border-[#5d6948]/8" />

                    <div className="relative mx-auto max-w-7xl">
                        <div
                            data-reveal
                            className="vacancy-section-header mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                        >
                            <div>
                                <div className="vacancy-section-label flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#5d6948]/40" />

                                    <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                        Openstaande functies
                                    </p>
                                </div>

                                <h2 className="vacancy-section-title mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                    Misschien zit jouw plek
                                    <span className="text-[#5d6948] italic">
                                        {' '}
                                        ertussen.
                                    </span>
                                </h2>
                            </div>

                            <p className="vacancy-section-text max-w-md text-sm leading-7 text-[#20231f]/50">
                                Bekijk hieronder de functies waarvoor we op dit
                                moment versterking zoeken.
                            </p>
                        </div>

                        {vacancies.length === 0 ? (
                            <div
                                data-reveal
                                className="vacancy-empty border border-black/10 bg-[#f7f4ee] px-6 py-20 text-center"
                            >
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
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
                                    className="group mt-8 inline-flex items-center gap-3 bg-[#5d6948] px-7 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d]"
                                >
                                    Open sollicitatie
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>
                        ) : (
                            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                                {vacancies.map((vacancy, index) => (
                                    <article
                                        key={vacancy.id}
                                        data-reveal
                                        style={{
                                            transitionDelay: `${index * 110}ms`,
                                        }}
                                        className="vacancy-card group overflow-hidden border border-black/10 bg-[#f7f4ee] transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_22px_60px_rgba(32,35,31,0.07)]"
                                    >
                                        <Link
                                            href={`/vacatures/${vacancy.slug}`}
                                            className="block h-full"
                                        >
                                            {/* IMAGE */}
                                            <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe7dc]">
                                                {vacancy.image ? (
                                                    <img
                                                        src={`/storage/${vacancy.image}`}
                                                        alt={vacancy.title}
                                                        className="h-full w-full scale-[1.03] object-cover transition duration-[1100ms] ease-out group-hover:scale-[1.08]"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center">
                                                        <span className="text-[9px] tracking-[0.25em] text-[#20231f]/25 uppercase">
                                                            Brasserie De Bank
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                                <span className="absolute top-4 left-4 bg-[#f7f4ee]/95 px-3 py-2 text-[9px] tracking-[0.2em] text-[#5d6948] uppercase backdrop-blur-sm">
                                                    Vacature{' '}
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0',
                                                    )}
                                                </span>

                                                <div className="absolute top-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-[#f7f4ee]/95 text-[#5d6948] opacity-0 shadow-sm transition duration-300 group-hover:translate-y-0 group-hover:bg-[#5d6948] group-hover:text-white group-hover:opacity-100">
                                                    →
                                                </div>
                                            </div>

                                            {/* CONTENT */}
                                            <div className="p-6 sm:p-7">
                                                <div className="flex flex-wrap gap-2">
                                                    {vacancy.contract_type && (
                                                        <span className="border border-[#5d6948]/15 bg-white px-3 py-2 text-[8px] tracking-[0.18em] text-[#5d6948] uppercase">
                                                            {
                                                                vacancy.contract_type
                                                            }
                                                        </span>
                                                    )}

                                                    {vacancy.hours && (
                                                        <span className="border border-black/5 bg-white px-3 py-2 text-[8px] tracking-[0.18em] text-[#20231f]/55 uppercase">
                                                            {vacancy.hours}
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="mt-5 font-serif text-3xl leading-tight transition duration-300 group-hover:text-[#5d6948]">
                                                    {vacancy.title}
                                                </h3>

                                                {vacancy.excerpt && (
                                                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#20231f]/50">
                                                        {vacancy.excerpt}
                                                    </p>
                                                )}

                                                <div className="mt-7">
                                                    <div className="h-px w-full bg-black/10">
                                                        <div className="h-px w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                                    </div>

                                                    <div className="mt-4 flex items-center justify-between gap-4">
                                                        {vacancy.location ? (
                                                            <p className="text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                                                {
                                                                    vacancy.location
                                                                }
                                                            </p>
                                                        ) : (
                                                            <span />
                                                        )}

                                                        <span className="text-[9px] tracking-[0.22em] text-[#20231f]/35 uppercase transition group-hover:text-[#5d6948]">
                                                            Bekijk vacature
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* CINEMATIC */}
                <section className="vacancy-cinematic relative min-h-[55vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=90"
                        alt="Werken bij Brasserie De Bank"
                        className="vacancy-cinematic-image absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />

                    <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-7xl items-end px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                        <div
                            data-reveal
                            className="vacancy-cinematic-content max-w-3xl text-white"
                        >
                            <p className="vacancy-cinematic-label text-[10px] tracking-[0.35em] text-white/60 uppercase">
                                Werken bij De Bank
                            </p>

                            <h2 className="vacancy-cinematic-title mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                                Samen maken we
                                <br />
                                <span className="text-[#dce2ce] italic">
                                    ieder moment bijzonder.
                                </span>
                            </h2>

                            <p className="vacancy-cinematic-text mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                                Van keuken tot bediening: samen zorgen we voor
                                de ervaring van onze gasten.
                            </p>
                        </div>
                    </div>
                </section>

                {/* WHY WORK HERE */}
                <section className="relative bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div
                            data-reveal
                            className="vacancy-why-header mx-auto mb-14 max-w-2xl text-center"
                        >
                            <p className="vacancy-why-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Werken bij De Bank
                            </p>

                            <h2 className="vacancy-why-title mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                                Een plek waar je met plezier werkt.
                            </h2>

                            <p className="vacancy-why-text mt-5 text-sm leading-7 text-[#20231f]/50 sm:text-base">
                                Samen zorgen we voor een fijne sfeer, goed eten
                                en gastvrijheid voor iedere bezoeker.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    number: '01',
                                    title: 'Samenwerken',
                                    text: 'Je werkt samen in een team waar iedereen bijdraagt aan een fijne ervaring voor de gast.',
                                },
                                {
                                    number: '02',
                                    title: 'Gastvrijheid',
                                    text: 'Persoonlijke aandacht en een ontspannen sfeer staan centraal in alles wat we doen.',
                                },
                                {
                                    number: '03',
                                    title: 'Midden in Harderwijk',
                                    text: 'Een levendige werkplek midden in de stad, tussen gasten, collega’s en gezelligheid.',
                                },
                            ].map((item, index) => (
                                <div
                                    key={item.number}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 120}ms`,
                                    }}
                                    className={`vacancy-why-card group relative overflow-hidden border border-black/10 p-8 transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(32,35,31,0.06)] ${
                                        index === 1
                                            ? 'bg-[#ebe7dc]'
                                            : 'bg-white'
                                    }`}
                                >
                                    <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full border border-[#5d6948]/10 transition duration-700 group-hover:scale-150" />

                                    <p className="relative text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                        {item.number}
                                    </p>

                                    <h3 className="relative mt-5 font-serif text-3xl">
                                        {item.title}
                                    </h3>

                                    <p className="relative mt-4 text-sm leading-7 text-[#20231f]/55">
                                        {item.text}
                                    </p>

                                    <div className="relative mt-7 h-px w-full bg-black/10">
                                        <div className="h-px w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OPEN APPLICATION */}
                <section className="relative overflow-hidden border-y border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="vacancy-open relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center"
                    >
                        <div>
                            <p className="vacancy-open-label text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                Open sollicitatie
                            </p>

                            <h2 className="vacancy-open-title mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                                Staat jouw functie er niet tussen?
                            </h2>

                            <p className="vacancy-open-text mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                Denk je dat je goed bij Brasserie De Bank past?
                                Stuur dan gerust een open sollicitatie.
                            </p>
                        </div>

                        <div className="vacancy-open-button">
                            <a
                                href="mailto:info@brasseriedebank.nl"
                                className="group inline-flex w-fit items-center gap-3 bg-[#5d6948] px-7 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d]"
                            >
                                Open sollicitatie
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CLOSING */}
                <section className="relative overflow-hidden bg-[#edf0e7] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="vacancy-closing relative mx-auto max-w-4xl text-center"
                    >
                        <p className="vacancy-closing-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                            Tot snel?
                        </p>

                        <h2 className="vacancy-closing-title mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Misschien werk jij binnenkort
                            <br />
                            <span className="text-[#5d6948] italic">
                                bij De Bank.
                            </span>
                        </h2>

                        <p className="vacancy-closing-text mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Bekijk de vacatures of neem gerust contact met ons
                            op als je meer wilt weten.
                        </p>

                        <div className="vacancy-closing-buttons mt-9 flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:info@brasseriedebank.nl"
                                className="group inline-flex items-center gap-3 bg-[#5d6948] px-8 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d]"
                            >
                                Solliciteer
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>

                            <Link
                                href="/contacts"
                                className="border border-[#5d6948]/25 bg-white/60 px-8 py-4 text-[10px] tracking-[0.22em] text-[#20231f] uppercase transition duration-300 hover:-translate-y-1 hover:border-[#5d6948] hover:bg-white"
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
