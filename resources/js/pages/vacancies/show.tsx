import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
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
            <Head title={`${vacancy.title} | Brasserie De Bank`} />

            <Navbar />

            <main className="overflow-hidden bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 pt-28 pb-16 sm:px-10 sm:pt-32 lg:px-16 lg:pb-20">
                    <div className="pointer-events-none absolute top-10 -right-24 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute bottom-0 -left-20 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-7xl">
                        <div data-reveal className="vacancy-detail-hero">
                            <Link
                                href="/vacatures"
                                className="vacancy-detail-back group inline-flex items-center gap-3 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                            >
                                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                    ←
                                </span>
                                Terug naar vacatures
                            </Link>

                            <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
                                {/* LEFT */}
                                <div>
                                    <div className="vacancy-detail-label flex items-center gap-4">
                                        <span className="h-px w-8 bg-[#5d6948]/40" />

                                        <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                            Werken bij De Bank
                                        </p>
                                    </div>

                                    <h1 className="vacancy-detail-title mt-5 max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                                        {vacancy.title}

                                        <span className="text-[#5d6948] italic">
                                            .
                                        </span>
                                    </h1>

                                    {vacancy.excerpt && (
                                        <p className="vacancy-detail-excerpt mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                                            {vacancy.excerpt}
                                        </p>
                                    )}
                                </div>

                                {/* META */}
                                <div className="vacancy-detail-meta border-t border-black/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
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
                    </div>
                </section>

                {/* IMAGE */}
                {vacancy.image && (
                    <section className="px-6 sm:px-10 lg:px-16">
                        <div className="mx-auto max-w-7xl">
                            <div
                                data-reveal
                                className="vacancy-detail-image-wrap relative overflow-hidden bg-[#ebe7dc]"
                            >
                                <img
                                    src={`/storage/${vacancy.image}`}
                                    alt={vacancy.title}
                                    className="vacancy-detail-image max-h-[720px] min-h-[320px] w-full object-cover sm:min-h-[450px]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

                                <div className="absolute bottom-5 left-5 bg-[#f7f4ee]/95 px-4 py-2 text-[9px] tracking-[0.22em] text-[#5d6948] uppercase backdrop-blur-sm sm:bottom-7 sm:left-7">
                                    Brasserie De Bank
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* CONTENT */}
                <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute top-20 -left-24 h-52 w-52 rounded-full border border-[#5d6948]/8" />

                    <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_320px]">
                        {/* ARTICLE */}
                        <article data-reveal className="vacancy-detail-content">
                            <div className="vacancy-detail-content-label flex items-center gap-4">
                                <span className="h-px w-8 bg-[#5d6948]/40" />

                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    De functie
                                </p>
                            </div>

                            <h2 className="vacancy-detail-content-title mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                                Meer over deze functie
                            </h2>

                            <div className="vacancy-detail-content-text mt-7 text-base leading-8 whitespace-pre-line text-[#20231f]/70">
                                {vacancy.content ||
                                    'Meer informatie over deze vacature volgt binnenkort.'}
                            </div>
                        </article>

                        {/* APPLICATION CARD */}
                        <aside
                            data-reveal
                            className="vacancy-application lg:sticky lg:top-28 lg:self-start"
                        >
                            <div className="group relative overflow-hidden border border-[#5d6948]/15 bg-[#f7f4ee] p-7 shadow-[0_18px_50px_rgba(32,35,31,0.04)]">
                                <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full border border-[#5d6948]/10 transition duration-700 group-hover:scale-150" />

                                <p className="relative text-[9px] tracking-[0.25em] text-[#5d6948] uppercase">
                                    Solliciteren
                                </p>

                                <h2 className="relative mt-4 font-serif text-3xl leading-tight">
                                    Enthousiast geworden?
                                </h2>

                                <p className="relative mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Stuur je motivatie en cv naar Brasserie De
                                    Bank. We horen graag van je.
                                </p>

                                <a
                                    href={`mailto:info@brasseriedebank.nl?subject=Sollicitatie - ${encodeURIComponent(
                                        vacancy.title,
                                    )}`}
                                    className="group/button relative mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#5d6948] px-5 py-4 text-center text-[9px] tracking-[0.22em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d]"
                                >
                                    Solliciteer direct
                                    <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                                        →
                                    </span>
                                </a>

                                <a
                                    href="tel:+31341472582"
                                    className="relative mt-3 inline-flex w-full items-center justify-center border border-[#5d6948]/20 bg-white/60 px-5 py-4 text-center text-[9px] tracking-[0.22em] text-[#20231f]/65 uppercase transition duration-300 hover:border-[#5d6948] hover:bg-white"
                                >
                                    0341 - 472 582
                                </a>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* CINEMATIC */}
                <section className="vacancy-detail-cinematic relative min-h-[52vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=90"
                        alt="Werken bij Brasserie De Bank"
                        className="vacancy-detail-cinematic-image absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

                    <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-7xl items-end px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                        <div
                            data-reveal
                            className="vacancy-detail-cinematic-content max-w-3xl text-white"
                        >
                            <p className="vacancy-detail-cinematic-label text-[10px] tracking-[0.35em] text-white/60 uppercase">
                                Samen bij De Bank
                            </p>

                            <h2 className="vacancy-detail-cinematic-title mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                                Samen werken.
                                <br />
                                <span className="text-[#dce2ce] italic">
                                    Samen gastvrij.
                                </span>
                            </h2>

                            <p className="vacancy-detail-cinematic-text mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                                Iedere dag werken we samen aan een fijne sfeer,
                                goed eten en een gastvrije ervaring.
                            </p>
                        </div>
                    </div>
                </section>

                {/* WHY DE BANK */}
                <section className="relative bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div
                            data-reveal
                            className="vacancy-detail-why-header mx-auto mb-12 max-w-2xl text-center"
                        >
                            <p className="vacancy-detail-why-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Werken bij De Bank
                            </p>

                            <h2 className="vacancy-detail-why-title mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                                Werken in een warme en gastvrije omgeving.
                            </h2>

                            <p className="vacancy-detail-why-text mt-5 text-sm leading-7 text-[#20231f]/55 sm:text-base">
                                Samen zorgen we voor een fijne sfeer, goed eten
                                en persoonlijke aandacht voor iedere gast.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    number: '01',
                                    title: 'Samenwerken',
                                    text: 'Je werkt in een team waarin samenwerken en aandacht voor de gast centraal staan.',
                                },
                                {
                                    number: '02',
                                    title: 'Gastvrijheid',
                                    text: 'Een ontspannen en persoonlijke sfeer voor zowel gasten als collega’s.',
                                },
                                {
                                    number: '03',
                                    title: 'Harderwijk',
                                    text: 'Een levendige werkplek midden in Harderwijk.',
                                },
                            ].map((item, index) => (
                                <div
                                    key={item.number}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 120}ms`,
                                    }}
                                    className={`vacancy-detail-why-card group relative overflow-hidden border border-black/10 p-8 transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(32,35,31,0.06)] ${
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

                {/* BOTTOM CTA */}
                <section className="relative overflow-hidden border-t border-[#5d6948]/10 bg-[#edf0e7] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="vacancy-detail-cta relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
                    >
                        <div>
                            <p className="vacancy-detail-cta-label text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                Brasserie De Bank
                            </p>

                            <h2 className="vacancy-detail-cta-title mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                                Bekijk ook onze andere vacatures
                            </h2>

                            <p className="vacancy-detail-cta-text mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                Misschien staat er nog een andere functie tussen
                                die goed bij je past.
                            </p>
                        </div>

                        <div className="vacancy-detail-cta-button">
                            <Link
                                href="/vacatures"
                                className="group inline-flex w-fit items-center gap-3 bg-[#5d6948] px-7 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d]"
                            >
                                Alle vacatures
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
