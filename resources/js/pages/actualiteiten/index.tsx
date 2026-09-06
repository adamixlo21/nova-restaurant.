import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
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
            <Head title="Actualiteiten | Brasserie De Bank" />

            <Navbar />

            <main className="overflow-hidden bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 pt-28 pb-20 sm:px-10 sm:pt-32 lg:px-16 lg:pb-28">
                    <div className="pointer-events-none absolute top-10 -right-24 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute bottom-0 -left-20 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <span className="pointer-events-none absolute right-0 -bottom-20 hidden font-serif text-[260px] leading-none text-[#5d6948]/[0.035] lg:block">
                        B
                    </span>

                    <div className="relative mx-auto max-w-7xl">
                        <div
                            data-reveal
                            className="actualiteiten-page-hero grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
                        >
                            <div>
                                <div className="actualiteiten-page-hero-label flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#5d6948]/40" />

                                    <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                        Nieuws uit De Bank
                                    </p>
                                </div>

                                <h1 className="actualiteiten-page-hero-title mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                                    Actualiteiten
                                    <span className="text-[#5d6948] italic">
                                        .
                                    </span>
                                </h1>
                            </div>

                            <div className="actualiteiten-page-hero-side max-w-xl lg:justify-self-end">
                                <p className="text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                                    Blijf op de hoogte van nieuwe gerechten,
                                    evenementen, bijzondere momenten en nieuws
                                    uit Brasserie De Bank.
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
                </section>

                {/* INTRO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-10 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">
                        {[
                            ['Nieuwe gerechten', 'Uit onze keuken'],
                            ['Evenementen', 'Bij De Bank'],
                            ['Verhalen', 'Uit Harderwijk'],
                        ].map(([title, subtitle], index) => (
                            <div
                                key={title}
                                data-reveal
                                style={{
                                    transitionDelay: `${index * 120}ms`,
                                }}
                                className={`actualiteiten-strip-item ${
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

                {/* CONTENT */}
                <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute top-20 -left-24 h-52 w-52 rounded-full border border-[#5d6948]/8" />
                    <div className="pointer-events-none absolute -right-24 bottom-20 h-64 w-64 rounded-full border border-[#5d6948]/8" />

                    <div className="relative mx-auto max-w-7xl">
                        {actualiteiten.length === 0 ? (
                            <div
                                data-reveal
                                className="border border-black/10 bg-[#f7f4ee] px-6 py-20 text-center"
                            >
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
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
                            <div className="space-y-20">
                                {/* FEATURED */}
                                {actualiteiten[0] && (
                                    <Link
                                        href={`/actualiteiten/${actualiteiten[0].slug}`}
                                        data-reveal
                                        className="actualiteiten-featured group grid overflow-hidden border border-black/10 bg-[#f7f4ee] transition duration-500 hover:bg-white hover:shadow-[0_25px_70px_rgba(32,35,31,0.06)] lg:grid-cols-[1.2fr_0.8fr]"
                                    >
                                        <div className="actualiteiten-featured-image relative min-h-[420px] overflow-hidden bg-[#ebe7dc] sm:min-h-[520px]">
                                            {actualiteiten[0].image ? (
                                                <img
                                                    src={`/storage/${actualiteiten[0].image}`}
                                                    alt={actualiteiten[0].title}
                                                    className="absolute inset-0 h-full w-full scale-[1.04] object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.08]"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center bg-[#ebe7dc]">
                                                    <span className="text-[10px] tracking-[0.3em] text-[#20231f]/25 uppercase">
                                                        Brasserie De Bank
                                                    </span>
                                                </div>
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                                            <div className="absolute top-5 left-5 bg-[#f7f4ee]/95 px-4 py-2 text-[8px] tracking-[0.22em] text-[#5d6948] uppercase backdrop-blur-sm">
                                                Uitgelicht
                                            </div>
                                        </div>

                                        <div className="actualiteiten-featured-content flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                                            <div>
                                                <p className="text-[9px] tracking-[0.28em] text-[#5d6948] uppercase">
                                                    Uitgelicht
                                                </p>

                                                {actualiteiten[0]
                                                    .published_at && (
                                                    <p className="mt-5 text-[10px] tracking-[0.22em] text-[#20231f]/35 uppercase">
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

                                            <div className="mt-10">
                                                <div className="h-px w-full bg-black/10">
                                                    <div className="h-px w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                                </div>

                                                <div className="mt-5 inline-flex items-center gap-3 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase">
                                                    Lees het artikel
                                                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )}

                                {/* MORE NEWS */}
                                {actualiteiten.length > 1 && (
                                    <div>
                                        <div
                                            data-reveal
                                            className="actualiteiten-more-header mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
                                        >
                                            <div>
                                                <div className="actualiteiten-more-label flex items-center gap-4">
                                                    <span className="h-px w-8 bg-[#5d6948]/40" />

                                                    <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                                        Meer nieuws
                                                    </p>
                                                </div>

                                                <h2 className="actualiteiten-more-title mt-3 font-serif text-3xl sm:text-4xl">
                                                    Ontdek meer uit De Bank
                                                </h2>
                                            </div>

                                            <p className="actualiteiten-more-text max-w-md text-sm leading-7 text-[#20231f]/45">
                                                Nieuws, updates en verhalen uit
                                                de brasserie.
                                            </p>
                                        </div>

                                        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                                            {actualiteiten
                                                .slice(1)
                                                .map((item, index) => (
                                                    <article
                                                        key={item.id}
                                                        data-reveal
                                                        style={{
                                                            transitionDelay: `${index * 110}ms`,
                                                        }}
                                                        className="actualiteiten-news-card group overflow-hidden border border-black/10 bg-[#f7f4ee] transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_18px_50px_rgba(32,35,31,0.06)]"
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
                                                                        className="h-full w-full scale-[1.03] object-cover transition duration-[1000ms] ease-out group-hover:scale-[1.08]"
                                                                    />
                                                                ) : (
                                                                    <div className="flex h-full items-center justify-center">
                                                                        <span className="text-[9px] tracking-[0.25em] text-[#20231f]/25 uppercase">
                                                                            Brasserie
                                                                            De
                                                                            Bank
                                                                        </span>
                                                                    </div>
                                                                )}

                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                                                <div className="absolute top-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-[#f7f4ee]/95 text-[#5d6948] opacity-0 shadow-sm transition duration-300 group-hover:translate-y-0 group-hover:bg-[#5d6948] group-hover:text-white group-hover:opacity-100">
                                                                    →
                                                                </div>
                                                            </div>

                                                            <div className="p-6">
                                                                {item.published_at && (
                                                                    <p className="text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                                                        {formatDate(
                                                                            item.published_at,
                                                                        )}
                                                                    </p>
                                                                )}

                                                                <h3 className="mt-3 font-serif text-3xl leading-tight transition duration-300 group-hover:text-[#5d6948]">
                                                                    {item.title}
                                                                </h3>

                                                                {item.excerpt && (
                                                                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#20231f]/50">
                                                                        {
                                                                            item.excerpt
                                                                        }
                                                                    </p>
                                                                )}

                                                                <div className="mt-6">
                                                                    <div className="h-px w-full bg-black/10">
                                                                        <div className="h-px w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                                                    </div>

                                                                    <p className="mt-4 text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                                                        Lees
                                                                        verder →
                                                                    </p>
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
                            {[
                                {
                                    number: '01',
                                    title: 'Onze kaarten',
                                    text: 'Bekijk wat er op dit moment op onze lunch-, diner- en borrelkaarten staat.',
                                    href: '/menus',
                                    action: 'Bekijk de kaart',
                                },
                                {
                                    number: '02',
                                    title: 'Mogelijkheden',
                                    text: 'Ontdek wat mogelijk is voor private dining, vergaderen en bijzondere gelegenheden.',
                                    href: '/mogelijkheden',
                                    action: 'Ontdek meer',
                                },
                                {
                                    number: '03',
                                    title: 'Reserveren',
                                    text: 'Een tafel bij De Bank? Reserveer eenvoudig online.',
                                    href: '/reservation',
                                    action: 'Reserveer een tafel',
                                },
                            ].map((item, index) => (
                                <Link
                                    key={item.number}
                                    href={item.href}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 120}ms`,
                                    }}
                                    className={`actualiteiten-discover-card group relative overflow-hidden border border-black/10 p-8 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_18px_50px_rgba(32,35,31,0.06)] ${
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
                        className="actualiteiten-page-cta relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
                    >
                        <div>
                            <p className="actualiteiten-page-cta-label text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                Brasserie De Bank
                            </p>

                            <h2 className="actualiteiten-page-cta-title mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                                Liever zelf iets nieuws ontdekken?
                            </h2>

                            <p className="actualiteiten-page-cta-text mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                Bekijk onze kaarten of reserveer direct een
                                tafel.
                            </p>
                        </div>

                        <div className="actualiteiten-page-cta-actions flex flex-wrap gap-4">
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
