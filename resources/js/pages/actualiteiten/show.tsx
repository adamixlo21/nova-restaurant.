import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
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

            <main className="overflow-hidden bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 pt-28 pb-16 sm:px-10 sm:pt-32 lg:px-16 lg:pb-20">
                    <div className="pointer-events-none absolute top-10 -right-24 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute bottom-0 -left-20 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-7xl">
                        <div data-reveal className="article-hero max-w-5xl">
                            <Link
                                href="/actualiteiten"
                                className="article-hero-back group inline-flex items-center gap-3 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                            >
                                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                    ←
                                </span>
                                Terug naar actualiteiten
                            </Link>

                            <div className="article-hero-label mt-10 flex items-center gap-4">
                                <span className="h-px w-8 bg-[#5d6948]/40" />

                                <p className="text-[10px] tracking-[0.32em] text-[#5d6948] uppercase">
                                    Nieuws uit De Bank
                                </p>
                            </div>

                            {actualiteit.published_at && (
                                <p className="article-hero-date mt-4 text-[10px] tracking-[0.2em] text-[#20231f]/35 uppercase">
                                    {formatDate(actualiteit.published_at)}
                                </p>
                            )}

                            <h1 className="article-hero-title mt-5 max-w-5xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                                {actualiteit.title}
                            </h1>

                            {actualiteit.excerpt && (
                                <p className="article-hero-excerpt mt-7 max-w-3xl text-base leading-8 text-[#20231f]/55 sm:text-lg sm:leading-9">
                                    {actualiteit.excerpt}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* IMAGE */}
                {actualiteit.image && (
                    <section className="px-6 sm:px-10 lg:px-16">
                        <div className="mx-auto max-w-7xl">
                            <div
                                data-reveal
                                className="article-image-wrap relative overflow-hidden bg-[#ebe7dc]"
                            >
                                <img
                                    src={`/storage/${actualiteit.image}`}
                                    alt={actualiteit.title}
                                    className="article-image max-h-[720px] min-h-[320px] w-full object-cover sm:min-h-[450px]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                                <div className="absolute bottom-5 left-5 border border-black/10 bg-[#f7f4ee]/95 px-4 py-2 text-[9px] tracking-[0.22em] text-[#5d6948] uppercase shadow-sm backdrop-blur-sm sm:bottom-7 sm:left-7">
                                    Brasserie De Bank
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ARTICLE */}
                <section className="relative px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
                    <div className="pointer-events-none absolute top-28 -left-24 h-52 w-52 rounded-full border border-[#5d6948]/8" />

                    <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr]">
                        {/* SIDEBAR */}
                        <aside
                            data-reveal
                            className="article-sidebar hidden lg:block"
                        >
                            <div className="sticky top-28 border-t border-black/10 pt-5">
                                <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
                                    Artikel
                                </p>

                                {actualiteit.published_at && (
                                    <div className="mt-5">
                                        <p className="text-[9px] tracking-[0.2em] text-[#5d6948] uppercase">
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
                                    <p className="text-[9px] tracking-[0.2em] text-[#20231f]/35 uppercase">
                                        Brasserie
                                    </p>

                                    <p className="mt-2 text-sm">De Bank</p>

                                    <p className="mt-1 text-xs text-[#20231f]/40">
                                        Harderwijk
                                    </p>
                                </div>

                                <Link
                                    href="/actualiteiten"
                                    className="group mt-8 inline-flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#5d6948] uppercase"
                                >
                                    Alle actualiteiten
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </aside>

                        {/* CONTENT */}
                        <article
                            data-reveal
                            className="article-content max-w-3xl"
                        >
                            {actualiteit.content ? (
                                <div className="font-sans text-[16px] leading-8 whitespace-pre-line text-[#20231f]/70 sm:text-[17px] sm:leading-9">
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
                                        <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
                                            Meer ontdekken
                                        </p>

                                        <p className="mt-2 font-serif text-2xl">
                                            Nieuws uit De Bank
                                        </p>
                                    </div>

                                    <Link
                                        href="/actualiteiten"
                                        className="group inline-flex w-fit items-center gap-3 border border-[#5d6948]/25 bg-white/50 px-6 py-4 text-[10px] tracking-[0.22em] text-[#20231f] uppercase transition duration-300 hover:-translate-y-1 hover:border-[#5d6948] hover:bg-white"
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

                {/* CINEMATIC BREAK */}
                <section className="article-cinematic relative min-h-[48vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=90"
                        alt="Sfeer bij Brasserie De Bank"
                        className="article-cinematic-image absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

                    <div className="relative z-10 mx-auto flex min-h-[48vh] max-w-7xl items-end px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                        <div
                            data-reveal
                            className="article-cinematic-content max-w-3xl text-white"
                        >
                            <p className="article-cinematic-label text-[10px] tracking-[0.35em] text-white/60 uppercase">
                                Brasserie De Bank
                            </p>

                            <h2 className="article-cinematic-title mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                                Altijd iets
                                <br />
                                <span className="text-[#dce2ce] italic">
                                    nieuws aan tafel.
                                </span>
                            </h2>
                        </div>
                    </div>
                </section>

                {/* DISCOVER MORE */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    number: '01',
                                    title: 'Onze kaarten',
                                    text: 'Bekijk onze lunch-, diner- en borrelkaarten.',
                                    href: '/menus',
                                    action: 'Bekijk de kaart',
                                },
                                {
                                    number: '02',
                                    title: 'Mogelijkheden',
                                    text: 'Ontdek private dining, vergaderen en feestelijke mogelijkheden.',
                                    href: '/mogelijkheden',
                                    action: 'Ontdek meer',
                                },
                                {
                                    number: '03',
                                    title: 'Reserveren',
                                    text: 'Zelf bij De Bank komen genieten? Reserveer eenvoudig online.',
                                    href: '/reservation',
                                    action: 'Reserveer',
                                },
                            ].map((item, index) => (
                                <Link
                                    key={item.number}
                                    href={item.href}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 120}ms`,
                                    }}
                                    className={`article-discover-card group relative overflow-hidden border border-black/10 p-8 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_18px_50px_rgba(32,35,31,0.06)] ${
                                        index === 1
                                            ? 'bg-white'
                                            : 'bg-[#f7f4ee]'
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

                                    <div className="relative mt-7">
                                        <div className="h-px w-full bg-black/10">
                                            <div className="h-px w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                        </div>

                                        <p className="mt-4 text-[9px] tracking-[0.2em] text-[#5d6948] uppercase">
                                            {item.action} →
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative overflow-hidden border-t border-[#5d6948]/10 bg-[#edf0e7] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="article-cta relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
                    >
                        <div>
                            <p className="article-cta-label text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                Brasserie De Bank
                            </p>

                            <h2 className="article-cta-title mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                                Zelf de sfeer van De Bank ervaren?
                            </h2>

                            <p className="article-cta-text mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                Bekijk onze kaart of reserveer direct een tafel.
                            </p>
                        </div>

                        <div className="article-cta-actions flex flex-wrap gap-4">
                            <Link
                                href="/menus"
                                className="border border-[#5d6948]/25 bg-white/60 px-7 py-4 text-[10px] tracking-[0.22em] text-[#20231f] uppercase transition duration-300 hover:-translate-y-1 hover:border-[#5d6948] hover:bg-white"
                            >
                                Bekijk de kaart
                            </Link>

                            <Link
                                href="/reservation"
                                className="bg-[#5d6948] px-7 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d]"
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
