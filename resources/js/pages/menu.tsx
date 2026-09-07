import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/components/CartContext';

interface Menu {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    categories_count: number;
}

interface Props {
    menus: Menu[];
}

export default function Menu({ menus }: Props) {
    const { addToCart } = useCart();
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

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const menuImages = [
        'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85',
    ];

    return (
        <>
            <Head title="Menu" />

            <Navbar />

            <main className="overflow-hidden bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
                    <div className="pointer-events-none absolute top-10 -right-24 h-72 w-72 rounded-full border border-[#5d6948]/10" />

                    <div className="pointer-events-none absolute bottom-0 -left-20 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="menu-hero-content relative mx-auto max-w-5xl text-center"
                    >
                        <div className="menu-hero-label flex items-center justify-center gap-4">
                            <span className="h-px w-8 bg-[#5d6948]/40" />

                            <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Brasserie De Bank
                            </p>

                            <span className="h-px w-8 bg-[#5d6948]/40" />
                        </div>

                        <h1 className="menu-hero-title mt-6 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                            Onze
                            <span className="text-[#5d6948] italic">
                                {' '}
                                kaarten.
                            </span>
                        </h1>

                        <p className="menu-hero-text mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                            Van lunch tot diner, van een goed glas wijn tot een
                            gezellige borrel. Ontdek onze verschillende kaarten
                            en kies waar je zin in hebt.
                        </p>

                        <div className="menu-hero-scroll mt-10 flex flex-col items-center gap-3">
                            <span className="text-[9px] tracking-[0.3em] text-[#20231f]/35 uppercase">
                                Bekijk de kaarten
                            </span>

                            <span className="menu-scroll-line h-10 w-px bg-[#5d6948]/30" />
                        </div>
                    </div>
                </section>

                {/* CINEMATIC IMAGES */}
                <section className="px-6 pb-20 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-4">
                        <div
                            data-reveal
                            data-reveal-direction="left"
                            className="menu-photo group col-span-2 row-span-2 min-h-[360px] overflow-hidden sm:min-h-[520px]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=90"
                                alt="Dineren bij Brasserie De Bank"
                                className="h-full w-full scale-[1.04] object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.1]"
                            />
                        </div>

                        <div
                            data-reveal
                            className="menu-photo group min-h-[175px] overflow-hidden sm:min-h-[250px]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85"
                                alt="Gerechten"
                                className="h-full w-full scale-[1.04] object-cover transition duration-[1200ms] group-hover:scale-[1.1]"
                            />
                        </div>

                        <div
                            data-reveal
                            style={{
                                transitionDelay: '120ms',
                            }}
                            className="menu-photo group min-h-[175px] overflow-hidden sm:min-h-[250px]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=85"
                                alt="Restaurant"
                                className="h-full w-full scale-[1.04] object-cover transition duration-[1200ms] group-hover:scale-[1.1]"
                            />
                        </div>

                        <div
                            data-reveal
                            style={{
                                transitionDelay: '220ms',
                            }}
                            className="menu-photo group col-span-2 min-h-[175px] overflow-hidden sm:min-h-[250px]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
                                alt="Lunch en diner"
                                className="h-full w-full scale-[1.04] object-cover transition duration-[1200ms] group-hover:scale-[1.1]"
                            />
                        </div>
                    </div>
                </section>

                {/* MENU INTRO */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 pt-20 pb-12 sm:px-10 lg:px-16">
                    <div
                        data-reveal
                        className="menu-section-header mx-auto max-w-7xl"
                    >
                        <div className="menu-section-label flex items-center gap-4">
                            <span className="h-px w-8 bg-[#5d6948]/40" />

                            <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Ontdek onze keuken
                            </p>
                        </div>

                        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <h2 className="menu-section-title max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                Kies het moment dat
                                <span className="text-[#5d6948] italic">
                                    {' '}
                                    bij je past.
                                </span>
                            </h2>

                            <p className="menu-section-text max-w-md text-sm leading-7 text-[#20231f]/55 sm:text-base">
                                Bekijk per kaart alle categorieën, gerechten,
                                prijzen en omschrijvingen.
                            </p>
                        </div>
                    </div>
                </section>

                {/* MENU CARDS */}
                <section className="bg-[#ebe7dc] px-6 pb-24 sm:px-10 lg:px-16 lg:pb-28">
                    <div className="mx-auto max-w-7xl">
                        {menus.length === 0 ? (
                            <div
                                data-reveal
                                className="border border-[#5d6948]/20 bg-[#f7f4ee] px-6 py-20 text-center"
                            >
                                <p className="mb-3 text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Menu
                                </p>

                                <h2 className="font-serif text-3xl">
                                    Geen menu&apos;s beschikbaar
                                </h2>

                                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#20231f]/50">
                                    Onze kaarten worden momenteel bijgewerkt.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
                                {menus.map((menu, index) => (
                                    <Link
                                        key={menu.id}
                                        href={`/menus/${menu.slug}`}
                                        data-reveal
                                        style={{
                                            transitionDelay: `${index * 110}ms`,
                                        }}
                                        className={`menu-card group relative overflow-hidden border border-[#5d6948]/15 bg-[#f7f4ee] transition duration-500 hover:-translate-y-2 hover:border-[#5d6948]/30 hover:shadow-[0_25px_60px_rgba(32,35,31,0.09)] ${
                                            menus.length === 5 && index >= 3
                                                ? 'lg:col-span-3'
                                                : 'lg:col-span-2'
                                        }`}
                                    >
                                        {/* IMAGE */}
                                        <div className="relative aspect-[16/10] overflow-hidden bg-[#dcd8cd]">
                                            <img
                                                src={
                                                    menuImages[
                                                        index %
                                                            menuImages.length
                                                    ]
                                                }
                                                alt={menu.name}
                                                className="h-full w-full object-cover transition duration-[1100ms] ease-out group-hover:scale-[1.08]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent transition duration-500 group-hover:from-black/60" />

                                            <span className="absolute top-5 left-5 bg-[#f7f4ee]/95 px-3 py-2 text-[9px] tracking-[0.2em] text-[#5d6948] uppercase backdrop-blur-sm">
                                                Kaart{' '}
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </span>

                                            <span className="absolute top-4 right-5 font-serif text-5xl text-white/25">
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </span>

                                            <h3 className="absolute right-5 bottom-5 left-5 font-serif text-3xl leading-tight text-white sm:text-4xl">
                                                {menu.name}
                                            </h3>
                                        </div>

                                        {/* CONTENT */}
                                        <div className="p-6 sm:p-7">
                                            <div className="flex items-center justify-between gap-5">
                                                <p className="text-[9px] tracking-[0.2em] text-[#20231f]/35 uppercase">
                                                    {menu.categories_count}{' '}
                                                    {menu.categories_count === 1
                                                        ? 'categorie'
                                                        : 'categorieën'}
                                                </p>

                                                <span className="flex h-9 w-9 items-center justify-center border border-[#5d6948]/20 text-[#5d6948] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#5d6948] group-hover:text-white">
                                                    →
                                                </span>
                                            </div>

                                            {menu.description && (
                                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-[#20231f]/55">
                                                    {menu.description}
                                                </p>
                                            )}

                                            <div className="mt-6">
                                                <div className="h-px w-full bg-black/10">
                                                    <div className="h-px w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                                </div>

                                                <p className="mt-4 text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                                    Bekijk deze kaart
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* CINEMATIC BREAK */}
                <section className="menu-cinematic relative min-h-[55vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2000&q=90"
                        alt="Sfeer bij Brasserie De Bank"
                        className="menu-cinematic-image absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />

                    <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-7xl items-end px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                        <div
                            data-reveal
                            className="menu-cinematic-content max-w-3xl text-white"
                        >
                            <p className="menu-cinematic-label text-[10px] tracking-[0.35em] text-white/60 uppercase">
                                Van middag tot avond
                            </p>

                            <h2 className="menu-cinematic-title mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                                Neem plaats.
                                <br />
                                <span className="text-[#dce2ce] italic">
                                    Wij doen de rest.
                                </span>
                            </h2>

                            <p className="menu-cinematic-text mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                                Goed eten, een fijne sfeer en tijd voor elkaar.
                            </p>
                        </div>
                    </div>
                </section>

                {/* RESERVATION */}
                <section className="menu-reservation relative overflow-hidden bg-[#edf0e7] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full border border-[#5d6948]/10" />

                    <div className="pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="menu-reservation-content relative mx-auto max-w-4xl text-center"
                    >
                        <p className="menu-reservation-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                            Een tafel reserveren?
                        </p>

                        <h2 className="menu-reservation-title mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Kom gezellig
                            <span className="text-[#5d6948] italic">
                                {' '}
                                bij ons eten.
                            </span>
                        </h2>

                        <p className="menu-reservation-text mx-auto mt-6 max-w-lg text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Reserveer eenvoudig online en wij zorgen dat er een
                            tafel voor je klaarstaat.
                        </p>

                        <div className="menu-reservation-button mt-9">
                            <Link
                                href="/reservation"
                                className="group inline-flex items-center gap-4 bg-[#5d6948] px-8 py-4 text-[10px] tracking-[0.25em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d] hover:shadow-[0_16px_35px_rgba(93,105,72,0.22)]"
                            >
                                Reserveer een tafel
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
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
