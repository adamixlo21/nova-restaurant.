import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface MenuItemPrice {
    id: number;
    label: string;
    price: string;
    sort_order: number;
}

interface MenuItem {
    id: number;
    name: string;
    description: string | null;
    price: string | null;
    price_text: string | null;
    image: string | null;
    is_featured: boolean;
    prices: MenuItemPrice[];
}

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    menu_items: MenuItem[];
}

interface Menu {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    categories: Category[];
}

interface Props {
    menu: Menu;
}

export default function Show({ menu }: Props) {
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

    const formatPrice = (price: string) =>
        Number(price).toFixed(2).replace('.', ',');

    return (
        <>
            <Head title={menu.name} />

            <Navbar />

            <main className="overflow-hidden bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
                    <div className="pointer-events-none absolute top-10 -right-24 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute bottom-0 -left-20 h-56 w-56 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="menu-show-hero relative mx-auto max-w-5xl text-center"
                    >
                        <Link
                            href="/menus"
                            className="menu-show-back group inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                        >
                            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                ←
                            </span>
                            Terug naar alle kaarten
                        </Link>

                        <div className="menu-show-label mt-8 flex items-center justify-center gap-4">
                            <span className="h-px w-8 bg-[#5d6948]/40" />

                            <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Brasserie De Bank
                            </p>

                            <span className="h-px w-8 bg-[#5d6948]/40" />
                        </div>

                        <h1 className="menu-show-title mt-5 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                            {menu.name}
                        </h1>

                        {menu.description && (
                            <p className="menu-show-text mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                {menu.description}
                            </p>
                        )}

                        <div className="menu-show-line mx-auto mt-8 h-px w-14 bg-[#5d6948]/40" />
                    </div>
                </section>

                {/* CATEGORY NAV */}
                {menu.categories.length > 0 && (
                    <section className="sticky top-0 z-30 border-y border-black/5 bg-[#f7f4ee]/95 backdrop-blur-md">
                        <div className="mx-auto max-w-7xl overflow-x-auto px-6 sm:px-10 lg:px-16">
                            <div className="flex min-w-max items-center justify-start gap-8 py-5">
                                {menu.categories.map((category) => (
                                    <a
                                        key={category.id}
                                        href={`#${category.slug}`}
                                        className="group text-[10px] tracking-[0.22em] text-[#20231f]/45 uppercase transition duration-300 hover:text-[#5d6948]"
                                    >
                                        {category.name}

                                        <span className="mt-2 block h-px w-0 bg-[#5d6948] transition-all duration-300 group-hover:w-full" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* MENU */}
                <section className="relative bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="pointer-events-none absolute top-24 -left-20 h-48 w-48 rounded-full border border-[#5d6948]/8" />
                    <div className="pointer-events-none absolute -right-24 bottom-24 h-64 w-64 rounded-full border border-[#5d6948]/8" />

                    <div className="relative mx-auto max-w-6xl space-y-24">
                        {menu.categories.length === 0 ? (
                            <div
                                data-reveal
                                className="border border-[#5d6948]/20 bg-[#f7f4ee] px-6 py-20 text-center"
                            >
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    {menu.name}
                                </p>

                                <h2 className="mt-3 font-serif text-3xl">
                                    Nog geen gerechten beschikbaar
                                </h2>

                                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#20231f]/50">
                                    Deze kaart wordt momenteel bijgewerkt.
                                </p>
                            </div>
                        ) : (
                            menu.categories.map((category, categoryIndex) => (
                                <section
                                    key={category.id}
                                    id={category.slug}
                                    className="scroll-mt-28"
                                >
                                    {/* CATEGORY HEADER */}
                                    <div
                                        data-reveal
                                        className="menu-category-header mb-10"
                                    >
                                        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                                            <div>
                                                <p className="menu-category-number font-serif text-5xl text-[#5d6948]/15">
                                                    {String(
                                                        categoryIndex + 1,
                                                    ).padStart(2, '0')}
                                                </p>

                                                <p className="menu-category-label mt-3 text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                                    {menu.name}
                                                </p>

                                                <h2 className="menu-category-title mt-2 font-serif text-4xl leading-tight sm:text-5xl">
                                                    {category.name}
                                                </h2>
                                            </div>

                                            {category.description && (
                                                <p className="menu-category-text max-w-md text-sm leading-7 text-[#20231f]/50">
                                                    {category.description}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mt-6 h-px w-full bg-[#5d6948]/15">
                                            <div className="menu-category-line h-px w-0 bg-[#5d6948]/50" />
                                        </div>
                                    </div>

                                    {/* ITEMS */}
                                    {/* ITEMS */}
                                    {category.menu_items.length === 0 ? (
                                        <p className="text-sm text-[#20231f]/40">
                                            Geen gerechten beschikbaar.
                                        </p>
                                    ) : (
                                        <div className="grid gap-5">
                                            {category.menu_items.map((item, index) => (
                                                <article
                                                    key={item.id}
                                                    data-reveal
                                                    style={{
                                                        transitionDelay: `${index * 75}ms`,
                                                    }}
                                                    className="menu-detail-item group relative overflow-hidden border border-black/10 bg-[#f7f4ee] transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(32,35,31,0.06)]"
                                                >
                                                    <div className="p-6 sm:p-8">
                                                        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                                                            {/* DISH INFO */}
                                                            <div className="min-w-0 flex-1">
                                                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#5d6948]/60">
                                                                    {String(index + 1).padStart(2, '0')}
                                                                </p>

                                                                <h3 className="mt-3 font-serif text-2xl leading-tight sm:text-3xl">
                                                                    {item.name}
                                                                </h3>

                                                                {item.description && (
                                                                    <p className="mt-4 max-w-2xl text-sm leading-6 text-[#20231f]/55">
                                                                        {item.description}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* PRICES */}
                                                            <div className="shrink-0 sm:min-w-[150px] sm:text-right">
                                                                {item.price !== null && (
                                                                    <p className="text-base font-medium text-[#5d6948]">
                                                                        €{formatPrice(item.price)}
                                                                        {item.price_text &&
                                                                            ` ${item.price_text}`}
                                                                    </p>
                                                                )}

                                                                {item.price === null &&
                                                                    item.price_text && (
                                                                        <p className="text-sm font-medium text-[#5d6948]">
                                                                            {item.price_text}
                                                                        </p>
                                                                    )}

                                                                {item.prices?.length > 0 && (
                                                                    <div className="mt-2 space-y-2">
                                                                        {item.prices.map((price) => (
                                                                            <div
                                                                                key={price.id}
                                                                                className="flex items-center justify-between gap-5 text-sm sm:justify-end"
                                                                            >
                                            <span className="text-xs text-[#20231f]/40">
                                                {price.label}
                                            </span>

                                                                                <span className="font-medium text-[#5d6948]">
                                                €
                                                                                    {formatPrice(
                                                                                        price.price,
                                                                                    )}
                                            </span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div className="mt-7 h-px w-full bg-black/10">
                                                            <div className="h-px w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                                        </div>
                                                    </div>
                                                </article>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            ))
                        )}
                    </div>
                </section>

                {/* CINEMATIC BREAK */}
                <section className="menu-detail-cinematic relative min-h-[50vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=90"
                        alt="Dineren bij Brasserie De Bank"
                        className="menu-detail-cinematic-image absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

                    <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-7xl items-end px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                        <div
                            data-reveal
                            className="menu-detail-cinematic-content max-w-3xl text-white"
                        >
                            <p className="menu-detail-cinematic-label text-[10px] tracking-[0.35em] text-white/60 uppercase">
                                Brasserie De Bank
                            </p>

                            <h2 className="menu-detail-cinematic-title mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                                Kies iets lekkers.
                                <br />
                                <span className="text-[#dce2ce] italic">
                                    Wij zorgen voor de rest.
                                </span>
                            </h2>
                        </div>
                    </div>
                </section>

                {/* RESERVATION */}
                <section className="relative overflow-hidden bg-[#edf0e7] px-6 py-24 text-center sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="menu-detail-cta relative mx-auto max-w-4xl"
                    >
                        <p className="menu-detail-cta-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                            Zien we je binnenkort?
                        </p>

                        <h2 className="menu-detail-cta-title mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Reserveer jouw
                            <span className="text-[#5d6948] italic">
                                {' '}
                                tafel.
                            </span>
                        </h2>

                        <p className="menu-detail-cta-text mx-auto mt-6 max-w-lg text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Reserveer eenvoudig online en wij zorgen dat er een
                            tafel voor je klaarstaat.
                        </p>

                        <div className="menu-detail-cta-buttons mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
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
