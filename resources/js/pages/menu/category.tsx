import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface MenuItem {
    id: number;
    name: string;
    description: string | null;
    price: string | null;
    price_text?: string | null;
    image: string | null;
    is_featured: boolean;
}

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    menu_items: MenuItem[];
}

interface Props {
    category: Category;
}

export default function CategoryMenu({ category }: Props) {
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
            <Head title={category.name} />

            <Navbar />

            <main className="overflow-hidden bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
                    <div className="pointer-events-none absolute top-12 -right-24 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute bottom-0 -left-20 h-56 w-56 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="category-hero relative mx-auto max-w-5xl text-center"
                    >
                        <Link
                            href="/menus"
                            className="category-hero-back group inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                        >
                            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                ←
                            </span>
                            Terug naar de kaarten
                        </Link>

                        <div className="category-hero-label mt-8 flex items-center justify-center gap-4">
                            <span className="h-px w-8 bg-[#5d6948]/40" />

                            <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Brasserie De Bank
                            </p>

                            <span className="h-px w-8 bg-[#5d6948]/40" />
                        </div>

                        <h1 className="category-hero-title mt-5 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                            {category.name}
                        </h1>

                        {category.description && (
                            <p className="category-hero-text mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                {category.description}
                            </p>
                        )}

                        <div className="category-hero-line mx-auto mt-8 h-px w-14 bg-[#5d6948]/40" />
                    </div>
                </section>

                {/* MENU ITEMS */}
                <section className="relative border-t border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="pointer-events-none absolute top-20 -left-16 h-40 w-40 rounded-full border border-[#5d6948]/8" />
                    <div className="pointer-events-none absolute -right-20 bottom-12 h-52 w-52 rounded-full border border-[#5d6948]/8" />

                    <div className="relative mx-auto max-w-7xl">
                        {category.menu_items.length === 0 ? (
                            <div
                                data-reveal
                                className="border border-[#5d6948]/20 bg-[#f7f4ee] px-6 py-16 text-center"
                            >
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    {category.name}
                                </p>

                                <h2 className="mt-3 font-serif text-3xl">
                                    Geen gerechten beschikbaar
                                </h2>

                                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#20231f]/50">
                                    Deze kaart wordt momenteel bijgewerkt.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-6 lg:grid-cols-2">
                                {category.menu_items.map((item, index) => (
                                    <article
                                        key={item.id}
                                        data-reveal
                                        style={{
                                            transitionDelay: `${index * 90}ms`,
                                        }}
                                        className="category-item group relative overflow-hidden border border-black/10 bg-[#f7f4ee] transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(32,35,31,0.06)]"
                                    >
                                        <div
                                            className={`grid ${
                                                item.image
                                                    ? 'sm:grid-cols-[190px_1fr]'
                                                    : 'grid-cols-1'
                                            }`}
                                        >
                                            {item.image && (
                                                <div className="relative min-h-[220px] overflow-hidden bg-[#ded9cd] sm:min-h-full">
                                                    <img
                                                        src={`/storage/${item.image}`}
                                                        alt={item.name}
                                                        className="absolute inset-0 h-full w-full object-cover transition duration-[1000ms] ease-out group-hover:scale-[1.07]"
                                                    />

                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                                                    {item.is_featured && (
                                                        <span className="absolute top-4 left-4 bg-[#f7f4ee]/95 px-3 py-2 text-[9px] tracking-[0.2em] text-[#5d6948] uppercase backdrop-blur-sm">
                                                            Favoriet
                                                        </span>
                                                    )}
                                                </div>
                                            )}

                                            <div className="flex min-h-[220px] flex-col justify-between p-6 sm:p-7">
                                                <div>
                                                    <div className="flex items-start justify-between gap-5">
                                                        <div>
                                                            <p className="text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                                                Gerecht{' '}
                                                                {String(
                                                                    index + 1,
                                                                ).padStart(
                                                                    2,
                                                                    '0',
                                                                )}
                                                            </p>

                                                            <h2 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
                                                                {item.name}
                                                            </h2>
                                                        </div>

                                                        <div className="shrink-0 text-right text-sm font-medium text-[#5d6948]">
                                                            {item.price !==
                                                                null && (
                                                                <p>
                                                                    €
                                                                    {Number(
                                                                        item.price,
                                                                    )
                                                                        .toFixed(
                                                                            2,
                                                                        )
                                                                        .replace(
                                                                            '.',
                                                                            ',',
                                                                        )}
                                                                </p>
                                                            )}

                                                            {item.price_text && (
                                                                <p className="mt-1 text-[9px] tracking-[0.15em] text-[#20231f]/35 uppercase">
                                                                    {
                                                                        item.price_text
                                                                    }
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {item.description && (
                                                        <p className="mt-4 text-sm leading-6 text-[#20231f]/55">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="mt-7">
                                                    <div className="h-px w-full bg-black/10">
                                                        <div className="h-px w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                                    </div>

                                                    <div className="mt-4 flex items-center justify-between">
                                                        <span className="text-[9px] tracking-[0.2em] text-[#20231f]/30 uppercase">
                                                            Brasserie De Bank
                                                        </span>

                                                        {item.is_featured && (
                                                            <span className="text-[9px] tracking-[0.2em] text-[#5d6948] uppercase">
                                                                Keuze van de
                                                                chef
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* RESERVATION CTA */}
                <section className="relative overflow-hidden bg-[#edf0e7] px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-24">
                    <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -right-24 -bottom-28 h-80 w-80 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="category-cta relative mx-auto max-w-3xl"
                    >
                        <p className="category-cta-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                            Zin gekregen?
                        </p>

                        <h2 className="category-cta-title mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Schuif gezellig
                            <span className="text-[#5d6948] italic">
                                {' '}
                                bij ons aan.
                            </span>
                        </h2>

                        <p className="category-cta-text mx-auto mt-6 max-w-lg text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Reserveer eenvoudig online en wij zorgen dat er een
                            tafel voor je klaarstaat.
                        </p>

                        <div className="category-cta-actions mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/reservation"
                                className="group inline-flex items-center gap-4 bg-[#5d6948] px-8 py-4 text-[10px] tracking-[0.25em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d]"
                            >
                                Reserveer een tafel
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/menus"
                                className="group inline-flex items-center gap-3 border-b border-[#5d6948]/30 pb-2 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                            >
                                Alle kaarten
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
