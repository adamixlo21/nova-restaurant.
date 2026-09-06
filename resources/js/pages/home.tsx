import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../../css/app.css';
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
    prices: MenuItemPrice[];
    image: string | null;
    category: {
        id: number;
        name: string;
    };
}

interface Actualiteit {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    image: string | null;
    published_at: string | null;
}

interface Props {
    featuredDishes: MenuItem[];
    actualiteiten: Actualiteit[];
}

export default function Home({ featuredDishes, actualiteiten }: Props) {
    const { flash } = usePage<{
        flash: {
            success?: string;
        };
    }>().props;

    function formatDate(date: string) {
        return new Date(date).toLocaleDateString('nl-NL', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }

    useEffect(() => {
        const elements =
            document.querySelectorAll<HTMLElement>('[data-reveal]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -60px 0px',
            },
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const [heroReady, setHeroReady] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setHeroReady(true);
        }, 150);

        return () => window.clearTimeout(timer);
    }, []);

    return (
        <>
            <Head title="Brasserie De Bank" />

            <Navbar />

            {flash.success && (
                <div className="border-b border-[#5d6948]/15 bg-[#edf0e7] px-6 py-4 text-[#20231f]">
                    <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 text-center">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5d6948] text-sm text-white">
                            ✓
                        </span>

                        <p className="text-sm">{flash.success}</p>
                    </div>
                </div>
            )}

            <main className="overflow-hidden bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative min-h-[calc(100svh-4.75rem)] overflow-hidden bg-[#20231f]">
                    <div className="absolute inset-0">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=90"
                            className="h-full w-full scale-[1.04] object-cover"
                        >
                            <source
                                src="/videos/watermarked_preview.mp4"
                                type="video/mp4"
                            />
                        </video>

                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/5" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
                    </div>

                    <div className="pointer-events-none absolute top-0 left-6 hidden h-full w-px bg-white/10 lg:block" />
                    <div className="pointer-events-none absolute top-0 right-6 hidden h-full w-px bg-white/10 lg:block" />

                    {/* Content */}
                    <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-[1600px] items-end px-6 pt-28 pb-16 sm:px-10 sm:pb-20 lg:items-center lg:px-16 lg:pb-0 xl:px-24">
                        <div className="max-w-4xl">
                            {/* Label */}
                            <div
                                className={`transition-all duration-1000 ease-out ${
                                    heroReady
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-6 opacity-0'
                                }`}
                            >
                                <p className="flex items-center gap-4 text-[9px] tracking-[0.35em] text-white/65 uppercase sm:text-[10px]">
                                    <span className="h-px w-8 bg-white/40" />
                                    Brasserie De Bank · Harderwijk
                                </p>
                            </div>

                            {/* Title */}
                            <div className="mt-6 overflow-hidden">
                                <h1
                                    className={`font-serif text-5xl leading-[0.91] tracking-tight text-white transition-all duration-[1200ms] ease-out sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[104px] ${
                                        heroReady
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-20 opacity-0'
                                    }`}
                                    style={{
                                        transitionDelay: '180ms',
                                    }}
                                >
                                    Genieten
                                    <br />
                                    <span className="text-[#dce2ce] italic">
                                        bij De Bank.
                                    </span>
                                </h1>
                            </div>

                            {/* Description */}
                            <div
                                className={`transition-all duration-1000 ease-out ${
                                    heroReady
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-10 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: '450ms',
                                }}
                            >
                                <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:text-lg">
                                    De huiskamer van Harderwijk. Een plek voor
                                    koffie, lunch, diner, borrel en een goed
                                    glas wijn.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div
                                className={`mt-9 flex flex-col gap-3 transition-all duration-1000 ease-out sm:flex-row sm:flex-wrap ${
                                    heroReady
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-10 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: '650ms',
                                }}
                            >
                                <Link
                                    href="/reservation"
                                    className="group inline-flex items-center justify-center gap-3 bg-[#5d6948] px-8 py-4 text-[10px] tracking-[0.23em] text-white uppercase transition duration-300 hover:-translate-y-0.5 hover:bg-[#4f5a3d]"
                                >
                                    Reserveer een tafel
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>

                                <Link
                                    href="/menus"
                                    className="group inline-flex items-center justify-center gap-3 border border-white/35 bg-white/5 px-8 py-4 text-[10px] tracking-[0.23em] text-white uppercase backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white hover:text-[#20231f]"
                                >
                                    Bekijk onze kaarten
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>

                            {/* Info */}
                            <div
                                className={`mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-white/20 pt-6 text-white transition-all duration-1000 ease-out ${
                                    heroReady
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-8 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: '850ms',
                                }}
                            >
                                <div>
                                    <p className="text-[8px] tracking-[0.25em] text-white/40 uppercase">
                                        Locatie
                                    </p>

                                    <p className="mt-2 text-sm text-white/80">
                                        Harderwijk
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[8px] tracking-[0.25em] text-white/40 uppercase">
                                        Keuken
                                    </p>

                                    <p className="mt-2 text-sm text-white/80">
                                        Lunch · Diner · Borrel
                                    </p>
                                </div>

                                <div className="hidden sm:block">
                                    <p className="text-[8px] tracking-[0.25em] text-white/40 uppercase">
                                        Adres
                                    </p>

                                    <p className="mt-2 text-sm text-white/80">
                                        Smeepoortstraat 1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-1/2 right-7 hidden -translate-y-1/2 rotate-90 xl:block">
                        <p className="text-[8px] tracking-[0.35em] text-white/35 uppercase">
                            Restaurant · Harderwijk · De Bank
                        </p>
                    </div>

                    <a
                        href="#home-intro"
                        className="hero-fade hero-delay-5 group absolute right-9 bottom-8 hidden items-center gap-4 text-white/50 transition hover:text-white lg:flex"
                    >
                        <span className="text-[8px] tracking-[0.3em] uppercase">
                            Scroll
                        </span>

                        <span className="relative flex h-10 w-5 justify-center rounded-full border border-white/30">
                            <span className="scroll-dot mt-2 h-1 w-1 rounded-full bg-white" />
                        </span>
                    </a>
                </section>

                {/* INTRO */}
                <section
                    id="home-intro"
                    className="relative overflow-hidden border-y border-black/5 bg-[#ebe7dc] px-6 py-12 sm:px-10 lg:px-16 lg:py-14"
                >
                    {/* Decorative background */}
                    <div className="pointer-events-none absolute top-1/2 -left-16 h-36 w-36 -translate-y-1/2 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute top-8 -right-16 h-44 w-44 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-7xl">
                        <div
                            data-reveal
                            className="mb-8 flex flex-col gap-3 text-center"
                        >
                            <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Voor ieder moment
                            </p>

                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
                                Van middag tot
                                <span className="text-[#5d6948] italic">
                                    {' '}
                                    avond.
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {[
                                {
                                    number: '01',
                                    title: 'Lunch',
                                    subtitle: 'Ontspannen middag',
                                    text: 'Even rustig zitten, goed eten en genieten van de middag in hartje Harderwijk.',
                                    href: '/menus',
                                },
                                {
                                    number: '02',
                                    title: 'Diner',
                                    subtitle: 'Avond bij De Bank',
                                    text: 'Een uitgebreide avond aan tafel met mooie gerechten, wijn en goed gezelschap.',
                                    href: '/menus',
                                },
                                {
                                    number: '03',
                                    title: 'Borrel',
                                    subtitle: 'Hapje & drankje',
                                    text: 'Samen proosten, kleine gerechten delen en de dag gezellig afsluiten.',
                                    href: '/menus',
                                },
                            ].map((item, index) => (
                                <Link
                                    key={item.number}
                                    href={item.href}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 110}ms`,
                                    }}
                                    className="group relative min-h-[235px] overflow-hidden border border-black/10 bg-[#f7f4ee] p-6 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_24px_60px_rgba(32,35,31,0.07)] sm:p-7"
                                >
                                    {/* Animated corner circle */}
                                    <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full border border-[#5d6948]/10 transition duration-700 group-hover:scale-150" />

                                    <div className="relative flex h-full flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <span className="font-serif text-3xl text-[#5d6948]/20">
                                                    {item.number}
                                                </span>

                                                <span className="flex h-9 w-9 items-center justify-center border border-[#5d6948]/20 text-sm text-[#5d6948] transition duration-300 group-hover:bg-[#5d6948] group-hover:text-white">
                                                    →
                                                </span>
                                            </div>

                                            <p className="mt-6 text-[9px] tracking-[0.24em] text-[#5d6948] uppercase">
                                                {item.subtitle}
                                            </p>

                                            <h3 className="mt-2 font-serif text-3xl leading-none">
                                                {item.title}
                                            </h3>

                                            <p className="mt-4 max-w-sm text-sm leading-6 text-[#20231f]/50">
                                                {item.text}
                                            </p>
                                        </div>

                                        <div className="mt-7 overflow-hidden">
                                            <div className="h-px w-full bg-black/10">
                                                <div className="h-px w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                            </div>

                                            <p className="mt-3 text-[9px] tracking-[0.2em] text-[#20231f]/35 uppercase transition duration-300 group-hover:text-[#5d6948]">
                                                Bekijk onze kaarten
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURED */}
                <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    {/* Decorative background */}
                    <div className="pointer-events-none absolute top-12 -right-24 h-72 w-72 rounded-full border border-[#5d6948]/8" />
                    <div className="pointer-events-none absolute bottom-16 -left-20 h-52 w-52 rounded-full border border-[#5d6948]/8" />

                    <div className="relative mx-auto max-w-7xl">
                        {/* Heading */}
                        <div
                            data-reveal
                            className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                        >
                            <div data-reveal className="section-reveal">
                                <p className="reveal-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                    Uit onze keuken
                                </p>

                                <h2 className="reveal-title mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                    Gerechten waar we
                                    <br />
                                    <span className="text-[#5d6948] italic">
                                        trots op zijn.
                                    </span>
                                </h2>

                                <p className="reveal-text mt-4 max-w-xl text-sm leading-7 text-[#20231f]/50 sm:text-base">
                                    Een selectie van favorieten uit onze keuken,
                                    zorgvuldig bereid voor ieder moment van de
                                    dag.
                                </p>
                            </div>

                            <Link
                                href="/menus"
                                className="group inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                            >
                                Bekijk alle kaarten
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>

                        {featuredDishes.length === 0 ? (
                            <div
                                data-reveal
                                className="border border-black/10 bg-[#f7f4ee] px-6 py-16 text-center"
                            >
                                <p className="font-serif text-2xl">
                                    Binnenkort meer gerechten
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {featuredDishes.map((dish, index) => (
                                    <article
                                        key={dish.id}
                                        data-reveal
                                        style={{
                                            transitionDelay: `${index * 90}ms`,
                                        }}
                                        className="group relative"
                                    >
                                        <Link href="/menus" className="block">
                                            {/* Image */}
                                            <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe7dc]">
                                                {dish.image ? (
                                                    <img
                                                        src={`/storage/${dish.image}`}
                                                        alt={dish.name}
                                                        className="h-full w-full object-cover transition duration-[1000ms] ease-out group-hover:scale-[1.07]"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center">
                                                        <span className="text-[10px] tracking-[0.25em] text-[#20231f]/25 uppercase">
                                                            Brasserie De Bank
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />

                                                {/* Category */}
                                                <div className="absolute top-4 left-4 bg-[#f7f4ee]/95 px-3 py-2 text-[9px] tracking-[0.2em] text-[#5d6948] uppercase backdrop-blur-sm">
                                                    {dish.category.name}
                                                </div>

                                                {/* Number */}
                                                <div className="absolute top-4 right-4 font-serif text-3xl text-white/25">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0',
                                                    )}
                                                </div>

                                                {/* Bottom content */}
                                                <div className="absolute right-0 bottom-0 left-0 p-5 text-white sm:p-6">
                                                    <div className="translate-y-2 transition duration-500 group-hover:translate-y-0">
                                                        <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
                                                            {dish.name}
                                                        </h3>

                                                        {dish.description && (
                                                            <p className="mt-2 line-clamp-2 max-w-sm text-sm leading-6 text-white/65">
                                                                {
                                                                    dish.description
                                                                }
                                                            </p>
                                                        )}

                                                        {/* Price */}
                                                        <div className="mt-4">
                                                            {dish.price !==
                                                                null && (
                                                                <p className="text-sm font-medium text-[#dce2ce]">
                                                                    €
                                                                    {Number(
                                                                        dish.price,
                                                                    )
                                                                        .toFixed(
                                                                            2,
                                                                        )
                                                                        .replace(
                                                                            '.',
                                                                            ',',
                                                                        )}
                                                                    {dish.price_text &&
                                                                        ` ${dish.price_text}`}
                                                                </p>
                                                            )}

                                                            {dish.price ===
                                                                null &&
                                                                dish.price_text && (
                                                                    <p className="text-sm font-medium text-[#dce2ce]">
                                                                        {
                                                                            dish.price_text
                                                                        }
                                                                    </p>
                                                                )}

                                                            {dish.prices
                                                                ?.length >
                                                                0 && (
                                                                <div className="mt-2 space-y-1">
                                                                    {dish.prices.map(
                                                                        (
                                                                            price,
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    price.id
                                                                                }
                                                                                className="flex items-center justify-between gap-4 text-xs"
                                                                            >
                                                                                <span className="text-white/50">
                                                                                    {
                                                                                        price.label
                                                                                    }
                                                                                </span>

                                                                                <span className="text-[#dce2ce]">
                                                                                    €
                                                                                    {Number(
                                                                                        price.price,
                                                                                    )
                                                                                        .toFixed(
                                                                                            2,
                                                                                        )
                                                                                        .replace(
                                                                                            '.',
                                                                                            ',',
                                                                                        )}
                                                                                </span>
                                                                            </div>
                                                                        ),
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Action */}
                                                    <div className="mt-5 flex translate-y-4 items-center justify-between border-t border-white/20 pt-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                                        <span className="text-[9px] tracking-[0.22em] text-white/60 uppercase">
                                                            Bekijk de kaart
                                                        </span>

                                                        <span className="flex h-9 w-9 items-center justify-center border border-white/30 text-sm transition duration-300 group-hover:bg-white group-hover:text-[#20231f]">
                                                            →
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                ))}{' '}
                            </div>
                        )}

                        {/* Bottom link mobile-friendly */}
                        <div
                            data-reveal
                            className="mt-10 flex justify-center sm:hidden"
                        >
                            <Link
                                href="/menus"
                                className="inline-flex items-center gap-3 border border-[#5d6948]/20 bg-[#f7f4ee] px-6 py-4 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                            >
                                Bekijk alle kaarten
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* MARQUEE */}
                <section className="relative overflow-hidden border-y border-black/5 bg-[#edf0e7] py-5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#edf0e7] to-transparent sm:w-32" />

                    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#edf0e7] to-transparent sm:w-32" />

                    <div className="marquee">
                        <div className="marquee-track">
                            {[0, 1].map((loop) => (
                                <div
                                    key={loop}
                                    className="flex shrink-0 items-center"
                                    aria-hidden={loop === 1}
                                >
                                    {[
                                        'Lunch',
                                        'Diner',
                                        'Borrel',
                                        'Private dining',
                                        'Wijn',
                                        'Harderwijk',
                                        'De Bank',
                                    ].map((item, index) => (
                                        <div
                                            key={`${loop}-${item}`}
                                            className="marquee-item group flex shrink-0 items-center"
                                        >
                                            <span className="px-7 font-serif text-xl text-[#20231f]/65 italic transition-all duration-300 group-hover:scale-105 group-hover:text-[#5d6948] sm:px-10 sm:text-2xl">
                                                {item}
                                            </span>

                                            <span
                                                className="marquee-star text-sm text-[#5d6948]/40"
                                                style={{
                                                    animationDelay: `${index * -0.4}s`,
                                                }}
                                            >
                                                ✦
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section className="relative overflow-hidden bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    {/* Decorative shapes */}
                    <div className="pointer-events-none absolute top-20 -left-24 h-56 w-56 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -right-28 bottom-12 h-72 w-72 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        {/* IMAGE SIDE */}
                        <div
                            data-reveal
                            data-reveal-direction="left"
                            className="about-image-reveal relative"
                        >
                            <div className="relative">
                                {/* Back panel */}
                                <div className="absolute -top-4 -left-4 hidden h-full w-full border border-[#5d6948]/15 sm:block" />

                                {/* Main image */}
                                <div className="group relative aspect-[4/5] overflow-hidden bg-[#ebe7dc]">
                                    <img
                                        src="/images/688354e3f0701849d625ddfb_DSC09150-Edit 1.png"
                                        alt="Restaurant interieur"
                                        className="h-full w-full scale-[1.03] object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.08]"
                                    />

                                    {/* Image overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70 transition duration-700 group-hover:opacity-40" />

                                    {/* Top label */}
                                    <div className="absolute top-5 left-5 border border-white/30 bg-black/10 px-4 py-2 text-[9px] tracking-[0.25em] text-white uppercase backdrop-blur-sm">
                                        Sinds 2013 een vertrouwde plek in Harderwijk. Sinds 2025 onder leiding van Patrick Elzinga en Robert Poel, met een frisse nieuwe visie.
                                    </div>

                                    {/* Number */}
                                    <div className="absolute top-4 right-5 font-serif text-5xl text-white/20">
                                        01
                                    </div>
                                </div>

                                {/* Floating card */}
                                <div className="absolute right-4 -bottom-8 hidden min-w-[190px] bg-white px-7 py-6 shadow-[0_20px_60px_rgba(32,35,31,0.10)] transition duration-500 hover:-translate-y-1 sm:block lg:right-[-24px]">
                                    <p className="font-serif text-3xl text-[#5d6948]">
                                        De Bank
                                    </p>

                                    <p className="mt-2 text-[9px] tracking-[0.3em] text-[#20231f]/40 uppercase">
                                        Harderwijk
                                    </p>

                                    <div className="mt-4 h-px w-full bg-black/10">
                                        <div className="h-px w-10 bg-[#5d6948]/50" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TEXT SIDE */}
                        <div
                            data-reveal
                            data-reveal-direction="right"
                            className="about-content lg:pl-10"
                        >
                            <div className="about-label flex items-center gap-4">
                                <span className="h-px w-8 bg-[#5d6948]/40" />

                                <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                    Over ons
                                </p>
                            </div>

                            <h2 className="about-title mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                Een plek waar je graag
                                <span className="text-[#5d6948] italic">
                                    {' '}
                                    blijft zitten.
                                </span>
                            </h2>

                            <p className="about-text-one mt-7 max-w-xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                Bij Brasserie De Bank draait het om goed eten,
                                een ontspannen sfeer en gezellig samen zijn. Van
                                een kop koffie tot een uitgebreide avond aan
                                tafel.
                            </p>

                            <p className="about-text-two mt-4 max-w-xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                Onze kaarten bieden voor ieder moment iets
                                lekkers: klassiekers, seizoensgerechten, mooie
                                wijnen en borrelhapjes om samen te delen.
                            </p>

                            {/* Small highlights */}
                            <div className="about-highlights mt-8 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
                                {[
                                    ['01', 'Lunch & diner'],
                                    ['02', 'Wijn & borrel'],
                                    ['03', 'Hartje Harderwijk'],
                                ].map(([number, label], index) => (
                                    <div
                                        key={number}
                                        className="about-highlight border-t border-black/10 pt-4"
                                        style={{
                                            transitionDelay: `${650 + index * 100}ms`,
                                        }}
                                    >
                                        <p className="font-serif text-2xl text-[#5d6948]/40">
                                            {number}
                                        </p>

                                        <p className="mt-1 text-[9px] tracking-[0.2em] text-[#20231f]/45 uppercase">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/about"
                                className="about-button group mt-9 inline-flex items-center gap-4 border-b border-[#5d6948]/30 pb-2 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                            >
                                Lees ons verhaal
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* MOGELIJKHEDEN */}
                <section className="relative overflow-hidden border-y border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    {/* Decorative background */}
                    <div className="pointer-events-none absolute top-16 -left-20 h-44 w-44 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-7xl">
                        {/* HEADER */}
                        <div
                            data-reveal
                            className="mogelijkheden-header mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                        >
                            <div>
                                <div className="mogelijkheden-label flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#5d6948]/40" />

                                    <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                        Mogelijkheden
                                    </p>
                                </div>

                                <h2 className="mogelijkheden-title mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                    Meer dan alleen
                                    <span className="text-[#5d6948] italic">
                                        {' '}
                                        een tafel.
                                    </span>
                                </h2>

                                <p className="mogelijkheden-text mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                                    Van een besloten diner tot een bijzondere
                                    viering. We creëren graag een moment dat
                                    past bij jouw gezelschap.
                                </p>
                            </div>

                            <Link
                                href="/mogelijkheden"
                                className="mogelijkheden-link group inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                            >
                                Alle mogelijkheden
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </Link>
                        </div>

                        {/* CARDS */}
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    number: '01',
                                    title: 'Private dining',
                                    subtitle: 'Besloten genieten',
                                    detail: '8 – 20 personen',
                                    text: 'Samen tafelen in een persoonlijke en ontspannen setting.',
                                },
                                {
                                    number: '02',
                                    title: 'Vergaderen',
                                    subtitle: 'Zakelijk & gastvrij',
                                    detail: 'Tot 20 personen',
                                    text: 'Een fijne plek voor overleg, presentatie of zakelijke lunch.',
                                },
                                {
                                    number: '03',
                                    title: 'Feestelijke gelegenheden',
                                    subtitle: 'Samen vieren',
                                    detail: 'Tot 50 personen',
                                    text: 'Van verjaardag tot jubileum, met ruimte voor een mooie avond.',
                                },
                                {
                                    number: '04',
                                    title: 'Wijnproeverij',
                                    subtitle: 'Ontdek & proef',
                                    detail: '8 – 25 personen',
                                    text: 'Ontdek bijzondere wijnen en geniet samen van nieuwe smaken.',
                                },
                            ].map((item, index) => (
                                <Link
                                    key={item.number}
                                    href="/mogelijkheden"
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 120}ms`,
                                    }}
                                    className="mogelijkheden-card group relative flex min-h-[320px] flex-col justify-between overflow-hidden border border-black/10 bg-[#f7f4ee] p-7 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_24px_60px_rgba(32,35,31,0.08)]"
                                >
                                    {/* Animated decorative circle */}
                                    <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full border border-[#5d6948]/10 transition duration-700 group-hover:scale-150" />

                                    {/* Green hover wash */}
                                    <div className="pointer-events-none absolute inset-0 bg-[#edf0e7]/0 transition duration-500 group-hover:bg-[#edf0e7]/35" />

                                    <div className="relative">
                                        <div className="flex items-start justify-between gap-4">
                                            <span className="font-serif text-4xl text-[#5d6948]/20 transition duration-500 group-hover:text-[#5d6948]/35">
                                                {item.number}
                                            </span>

                                            <span className="flex h-10 w-10 items-center justify-center border border-[#5d6948]/20 text-[#5d6948] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#5d6948] group-hover:text-white">
                                                →
                                            </span>
                                        </div>

                                        <p className="mt-8 text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                            {item.subtitle}
                                        </p>

                                        <h3 className="mt-3 font-serif text-3xl leading-tight transition duration-300 group-hover:translate-x-1">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-6 text-[#20231f]/50">
                                            {item.text}
                                        </p>
                                    </div>

                                    <div className="relative mt-8">
                                        <div className="h-px w-full overflow-hidden bg-black/10">
                                            <div className="h-full w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                        </div>

                                        <p className="mt-4 text-[9px] tracking-[0.2em] text-[#20231f]/35 uppercase transition duration-300 group-hover:text-[#5d6948]">
                                            {item.detail}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* REVIEWS */}
                <section className="relative overflow-hidden bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    {/* Decorative shapes */}
                    <div className="pointer-events-none absolute top-16 -left-20 h-44 w-44 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-7xl">
                        {/* HEADER */}
                        <div
                            data-reveal
                            className="reviews-header mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                        >
                            <div className="reviews-heading">
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#5d6948]/40" />

                                    <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                        Dit zeggen onze gasten
                                    </p>
                                </div>

                                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                    Gasten komen graag
                                    <br />
                                    <span className="text-[#5d6948] italic">
                                        terug naar De Bank.
                                    </span>
                                </h2>
                            </div>

                            <div className="reviews-rating lg:text-right">
                                <p className="reviews-stars text-lg tracking-[0.08em] text-[#5d6948]">
                                    ★★★★★
                                </p>

                                <p className="mt-2 text-sm text-[#20231f]/55">
                                    4,9 / 5 · 1303 reviews
                                </p>
                            </div>
                        </div>

                        {/* REVIEW CARDS */}
                        <div className="grid gap-6 lg:grid-cols-3">
                            {[
                                {
                                    name: 'Niels',
                                    review: 'Het eten was heerlijk en de service was top. Volgende keer zeker weer.',
                                },
                                {
                                    name: 'Lisa',
                                    review: 'De lunch is heerlijk, de sfeer heel gezellig en de bediening erg vriendelijk.',
                                },
                                {
                                    name: 'Jort',
                                    review: 'Heerlijk gegeten, verse bereiding en topbediening. Wij komen terug.',
                                },
                            ].map((review, index) => (
                                <article
                                    key={review.name}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 140}ms`,
                                    }}
                                    className={`review-card group relative flex min-h-[290px] flex-col justify-between overflow-hidden border border-[#5d6948]/15 bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(32,35,31,0.07)] sm:p-10 ${
                                        index === 0
                                            ? 'review-card-left'
                                            : index === 1
                                              ? 'review-card-center'
                                              : 'review-card-right'
                                    }`}
                                >
                                    {/* Decorative quote */}
                                    <div className="pointer-events-none absolute -top-8 -right-2 font-serif text-[120px] leading-none text-[#5d6948]/5">
                                        “
                                    </div>

                                    <div className="relative">
                                        <p className="review-stars text-sm tracking-[0.15em] text-[#5d6948]">
                                            ★★★★★
                                        </p>

                                        <p className="mt-7 font-serif text-2xl leading-relaxed">
                                            “{review.review}”
                                        </p>
                                    </div>

                                    <div className="relative mt-8 border-t border-[#5d6948]/15 pt-5">
                                        <p className="text-sm font-medium">
                                            {review.name}
                                        </p>

                                        <p className="mt-1 text-[10px] tracking-[0.2em] text-[#20231f]/35 uppercase">
                                            Gast van De Bank
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* LINK */}
                        <div
                            data-reveal
                            className="reviews-link mt-10 text-right"
                        >
                            <a
                                href="https://www.google.com/search?q=Brasserie+De+Bank+Harderwijk+reviews"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                            >
                                Bekijk meer reviews
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CINEMATIC BREAK */}
                <section className="cinematic-break relative min-h-[65vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=90"
                        alt="Dineren bij Brasserie De Bank"
                        className="cinematic-image absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

                    <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-end px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                        <div
                            data-reveal
                            className="cinematic-content max-w-3xl text-white"
                        >
                            <div className="cinematic-label flex items-center gap-4">
                                <span className="cinematic-line h-px w-0 bg-white/50" />

                                <p className="text-[10px] tracking-[0.35em] text-white/60 uppercase">
                                    Een avond bij De Bank
                                </p>
                            </div>

                            <h2 className="cinematic-title mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                                Goed eten.
                                <br />
                                <span className="text-[#dce2ce] italic">
                                    Mooie momenten.
                                </span>
                            </h2>

                            <p className="cinematic-text mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                                Een avond die draait om smaak, sfeer en samen
                                genieten.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ACTUALITEITEN */}
                <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    {/* Decorative shapes */}
                    <div className="pointer-events-none absolute top-24 -left-20 h-44 w-44 rounded-full border border-[#5d6948]/8" />
                    <div className="pointer-events-none absolute -right-24 bottom-16 h-60 w-60 rounded-full border border-[#5d6948]/8" />

                    <div className="relative mx-auto max-w-7xl">
                        {/* HEADER */}
                        <div
                            data-reveal
                            className="actualiteiten-header mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                        >
                            <div>
                                <div className="actualiteiten-label flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#5d6948]/40" />

                                    <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                        Nieuws uit De Bank
                                    </p>
                                </div>

                                <h2 className="actualiteiten-title mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                    Altijd iets nieuws
                                    <span className="text-[#5d6948] italic">
                                        {' '}
                                        aan tafel.
                                    </span>
                                </h2>

                                <p className="actualiteiten-text mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                                    Nieuwe gerechten, evenementen, updates en
                                    verhalen uit Brasserie De Bank.
                                </p>
                            </div>

                            <Link
                                href="/actualiteiten"
                                className="actualiteiten-link group inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                            >
                                Alle actualiteiten
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </Link>
                        </div>

                        {actualiteiten.length === 0 ? (
                            <div
                                data-reveal
                                className="border border-black/10 bg-[#f7f4ee] px-6 py-16 text-center"
                            >
                                <p className="font-serif text-2xl">
                                    Binnenkort meer nieuws
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-6 lg:grid-cols-3">
                                {actualiteiten
                                    .slice(0, 3)
                                    .map((item, index) => (
                                        <Link
                                            key={item.id}
                                            href={`/actualiteiten/${item.slug}`}
                                            data-reveal
                                            style={{
                                                transitionDelay: `${index * 130}ms`,
                                            }}
                                            className="actualiteit-card group overflow-hidden border border-black/10 bg-[#f7f4ee] transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_22px_60px_rgba(32,35,31,0.07)]"
                                        >
                                            <div className="actualiteit-image-wrap relative aspect-[16/10] overflow-hidden bg-[#ebe7dc]">
                                                {item.image ? (
                                                    <img
                                                        src={`/storage/${item.image}`}
                                                        alt={item.title}
                                                        className="actualiteit-image h-full w-full object-cover transition duration-[1000ms] ease-out group-hover:scale-[1.07]"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center">
                                                        <span className="text-[9px] tracking-[0.25em] text-[#20231f]/25 uppercase">
                                                            De Bank
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                                <div className="absolute top-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center bg-white/95 text-[#5d6948] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                                    →
                                                </div>
                                            </div>

                                            <div className="p-6 sm:p-7">
                                                {item.published_at && (
                                                    <p className="text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                                        {formatDate(
                                                            item.published_at,
                                                        )}
                                                    </p>
                                                )}

                                                <h3 className="mt-3 font-serif text-2xl leading-tight transition duration-300 group-hover:text-[#5d6948]">
                                                    {item.title}
                                                </h3>

                                                {item.excerpt && (
                                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#20231f]/50">
                                                        {item.excerpt}
                                                    </p>
                                                )}

                                                <div className="mt-6">
                                                    <div className="h-px w-full bg-black/10">
                                                        <div className="h-px w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                                    </div>

                                                    <p className="mt-4 text-[9px] tracking-[0.2em] text-[#5d6948] uppercase">
                                                        Lees verder →
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* ATMOSPHERE */}
                <section className="relative overflow-hidden bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="pointer-events-none absolute bottom-10 -left-24 h-56 w-56 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute top-10 -right-28 h-72 w-72 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid overflow-hidden bg-[#ebe7dc] lg:grid-cols-[1.25fr_0.75fr]">
                            {/* IMAGE */}
                            <div
                                data-reveal
                                data-reveal-direction="left"
                                className="atmosphere-image-reveal group relative min-h-[460px] overflow-hidden sm:min-h-[560px]"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=90"
                                    alt="Sfeer in het restaurant"
                                    className="atmosphere-image absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.08]"
                                />

                                <div className="absolute inset-0 bg-black/10 transition duration-700 group-hover:bg-transparent" />

                                <div className="absolute bottom-5 left-5 border border-white/30 bg-black/10 px-4 py-2 text-[9px] tracking-[0.25em] text-white uppercase backdrop-blur-sm">
                                    Brasserie De Bank
                                </div>
                            </div>

                            {/* TEXT */}
                            <div
                                data-reveal
                                data-reveal-direction="right"
                                className="atmosphere-content flex items-center px-8 py-14 sm:px-12 lg:px-14"
                            >
                                <div>
                                    <div className="atmosphere-label flex items-center gap-4">
                                        <span className="h-px w-8 bg-[#5d6948]/40" />

                                        <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                            Sfeer bij De Bank
                                        </p>
                                    </div>

                                    <h2 className="atmosphere-title mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                                        Goed eten.
                                        <br />
                                        <span className="text-[#5d6948] italic">
                                            Goed gezelschap.
                                        </span>
                                    </h2>

                                    <p className="atmosphere-text mt-6 text-sm leading-7 text-[#20231f]/55 sm:text-base">
                                        Voor een gezellige lunch, een uitgebreid
                                        diner of gewoon een drankje aan tafel.
                                    </p>

                                    <Link
                                        href="/locatie"
                                        className="atmosphere-link group mt-8 inline-flex items-center gap-3 border-b border-[#5d6948]/40 pb-2 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                                    >
                                        Ontdek onze locatie
                                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RESERVATION */}
                <section className="reservation-section relative overflow-hidden border-t border-[#5d6948]/10 bg-[#edf0e7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
                    {/* Decorative circles */}
                    <div className="reservation-circle reservation-circle-one pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full border border-[#5d6948]/10" />

                    <div className="reservation-circle reservation-circle-two pointer-events-none absolute -right-20 -bottom-32 h-96 w-96 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="reservation-content relative mx-auto max-w-4xl text-center"
                    >
                        <p className="reservation-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                            Reserveer
                        </p>

                        <h2 className="reservation-title mt-5 font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                            Zien we je
                            <span className="text-[#5d6948] italic">
                                {' '}
                                binnenkort?
                            </span>
                        </h2>

                        <p className="reservation-text mx-auto mt-6 max-w-lg text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Reserveer eenvoudig online en wij zorgen dat er een
                            tafel voor je klaarstaat.
                        </p>

                        <div className="reservation-button mt-9">
                            <Link
                                href="/reservation"
                                className="group inline-flex items-center gap-3 bg-[#5d6948] px-8 py-4 text-[10px] tracking-[0.25em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d] hover:shadow-[0_16px_35px_rgba(93,105,72,0.22)]"
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

            {/* MOBILE RESERVATION */}
            <div className="fixed right-4 bottom-4 left-4 z-40 lg:hidden">
                <Link
                    href="/reservation"
                    className="flex items-center justify-between bg-[#5d6948] px-6 py-4 text-[10px] tracking-[0.22em] text-white uppercase shadow-[0_15px_40px_rgba(32,35,31,0.2)]"
                >
                    Reserveer een tafel
                    <span>→</span>
                </Link>
            </div>

            <Footer />

            <style>{`
                html {
                    scroll-behavior: smooth;
                }

                @keyframes heroFade {
                    from {
                        opacity: 0;
                        transform: translateY(24px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes heroTitle {
                    from {
                        opacity: 0;
                        transform: translateY(75px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes scrollDot {
                    0% {
                        opacity: 0;
                        transform: translateY(0);
                    }

                    30% {
                        opacity: 1;
                    }

                    100% {
                        opacity: 0;
                        transform: translateY(18px);
                    }
                }

                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-50%);
                    }
                }

                .hero-fade {
                    opacity: 0;
                    animation: heroFade 0.9s cubic-bezier(0.16, 1, 0.3, 1)
                        forwards;
                }

                .hero-title {
                    opacity: 0;
                    animation: heroTitle 1.1s cubic-bezier(0.16, 1, 0.3, 1)
                        forwards;
                }

                .hero-delay-1 {
                    animation-delay: 0.1s;
                }

                .hero-delay-2 {
                    animation-delay: 0.22s;
                }

                .hero-delay-3 {
                    animation-delay: 0.42s;
                }

                .hero-delay-4 {
                    animation-delay: 0.58s;
                }

                .hero-delay-5 {
                    animation-delay: 0.75s;
                }

                .scroll-dot {
                    animation: scrollDot 1.8s ease-in-out infinite;
                }

                .marquee-track {
                    animation: marquee 25s linear infinite;
                }

                [data-reveal] {
                    opacity: 0;
                    transform: translateY(42px);
                    transition:
                        opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
                }

                [data-reveal][data-reveal-direction='left'] {
                    transform: translateX(-45px);
                }

                [data-reveal][data-reveal-direction='right'] {
                    transform: translateX(45px);
                }

                [data-reveal].reveal-visible {
                    opacity: 1;
                    transform: translate(0, 0);
                }

                @media (prefers-reduced-motion: reduce) {
                    html {
                        scroll-behavior: auto;
                    }

                    .hero-fade,
                    .hero-title,
                    [data-reveal] {
                        opacity: 1;
                        animation: none;
                        transform: none;
                        transition: none;
                    }

                    .scroll-dot,
                    .marquee-track {
                        animation: none;
                    }
                }
            `}</style>
        </>
    );
}
