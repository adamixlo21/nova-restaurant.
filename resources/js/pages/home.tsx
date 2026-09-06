import { Head, Link, usePage } from '@inertiajs/react';
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

            <main className="bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden bg-[#f7f4ee]">
                    <div className="mx-auto grid min-h-[calc(100vh-4.75rem)] max-w-[1600px] lg:grid-cols-[0.95fr_1.05fr]">
                        {/* Left */}
                        <div className="relative flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24">
                            <div className="relative z-10 max-w-xl">
                                <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Brasserie De Bank · Harderwijk
                                </p>

                                <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-[82px]">
                                    Genieten
                                    <br />
                                    bij{' '}
                                    <span className="text-[#5d6948] italic">
                                        De Bank.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-md text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                    De huiskamer van Harderwijk. Een plek voor
                                    koffie, lunch, diner, borrel en een goed glas
                                    wijn.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-4">
                                    <Link
                                        href="/menus"
                                        className="group inline-flex items-center gap-3 bg-[#5d6948] px-7 py-4 text-[10px] uppercase tracking-[0.23em] text-white transition duration-300 hover:bg-[#4f5a3d]"
                                    >
                                        Bekijk onze kaarten

                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>

                                    <Link
                                        href="/reservation"
                                        className="inline-flex items-center border border-[#5d6948]/30 bg-white/40 px-7 py-4 text-[10px] uppercase tracking-[0.23em] transition duration-300 hover:border-[#5d6948] hover:bg-white"
                                    >
                                        Reserveer een tafel
                                    </Link>
                                </div>

                                <div className="mt-14 flex flex-wrap gap-x-12 gap-y-5 border-t border-black/10 pt-6">
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                            Locatie
                                        </p>

                                        <p className="mt-2 text-sm">
                                            Harderwijk
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                            Keuken
                                        </p>

                                        <p className="mt-2 text-sm">
                                            Lunch · Diner · Borrel
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <span className="pointer-events-none absolute -bottom-16 -left-10 font-serif text-[220px] leading-none text-[#5d6948]/[0.035]">
                                B
                            </span>
                        </div>

                        {/* Image */}
                        <div className="relative min-h-[520px] overflow-hidden lg:m-6 lg:ml-0 lg:min-h-[calc(100%-3rem)]">
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=90"
                                alt="Restaurant gerecht"
                                className="absolute inset-0 h-full w-full object-cover transition duration-[1500ms] hover:scale-[1.02]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 text-white sm:bottom-10 sm:left-10 sm:right-10">
                                <p className="text-[9px] uppercase tracking-[0.3em] text-white/65">
                                    Brasserie De Bank
                                </p>

                                <p className="mt-2 font-serif text-2xl">
                                    Smeepoortstraat 1
                                </p>

                                <p className="mt-1 text-xs text-white/60">
                                    3841 EG Harderwijk
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-10 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-3">
                        <div>
                            <p className="font-serif text-2xl">Lunch</p>

                            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#20231f]/40">
                                Ontspannen middag
                            </p>
                        </div>

                        <div className="sm:border-x sm:border-black/10">
                            <p className="font-serif text-2xl">Diner</p>

                            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#20231f]/40">
                                Avond bij De Bank
                            </p>
                        </div>

                        <div>
                            <p className="font-serif text-2xl">Borrel</p>

                            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#20231f]/40">
                                Hapje & drankje
                            </p>
                        </div>
                    </div>
                </section>

                {/* FEATURED */}
                <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Uit onze keuken
                                </p>

                                <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                                    Onze favorieten
                                </h2>

                                <p className="mt-4 max-w-lg text-sm leading-7 text-[#20231f]/50">
                                    Een selectie van gerechten die je bij
                                    Brasserie De Bank kunt ontdekken.
                                </p>
                            </div>

                            <Link
                                href="/menus"
                                className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#5d6948]"
                            >
                                Bekijk alle kaarten

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>

                        {featuredDishes.length === 0 ? (
                            <div className="border border-black/10 bg-[#f7f4ee] px-6 py-16 text-center">
                                <p className="font-serif text-2xl">
                                    Binnenkort meer gerechten
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                                {featuredDishes.map((dish) => (
                                    <article key={dish.id} className="group">
                                        <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe7dc]">
                                            {dish.image ? (
                                                <img
                                                    src={`/storage/${dish.image}`}
                                                    alt={dish.name}
                                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center">
                                                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#20231f]/25">
                                                        Brasserie De Bank
                                                    </span>
                                                </div>
                                            )}

                                            <div className="absolute left-4 top-4 bg-[#f7f4ee]/95 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[#5d6948]">
                                                {dish.category.name}
                                            </div>
                                        </div>

                                        <div className="pt-5">
                                            <div className="flex items-start justify-between gap-4">
                                                <h3 className="font-serif text-2xl leading-tight">
                                                    {dish.name}
                                                </h3>

                                                <div className="shrink-0 text-right text-sm text-[#5d6948]">
                                                    {dish.price !== null && (
                                                        <div className="font-medium">
                                                            €
                                                            {Number(dish.price)
                                                                .toFixed(2)
                                                                .replace(
                                                                    '.',
                                                                    ',',
                                                                )}

                                                            {dish.price_text &&
                                                                ` ${dish.price_text}`}
                                                        </div>
                                                    )}

                                                    {dish.price === null &&
                                                        dish.price_text && (
                                                            <div className="font-medium">
                                                                {
                                                                    dish.price_text
                                                                }
                                                            </div>
                                                        )}

                                                    {dish.prices?.length >
                                                        0 && (
                                                            <div className="mt-1 space-y-1">
                                                                {dish.prices.map(
                                                                    (price) => (
                                                                        <div
                                                                            key={
                                                                                price.id
                                                                            }
                                                                            className="flex items-center justify-end gap-2"
                                                                        >
                                                                        <span className="text-[10px] text-[#20231f]/40">
                                                                            {
                                                                                price.label
                                                                            }
                                                                        </span>

                                                                            <span>
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

                                            {dish.description && (
                                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#20231f]/55">
                                                    {dish.description}
                                                </p>
                                            )}

                                            <div className="mt-5 h-px bg-black/10" />
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* ABOUT */}
                <section className="bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                        <div className="relative">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85"
                                    alt="Restaurant interieur"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-8 -right-4 hidden bg-white px-8 py-7 shadow-[0_20px_60px_rgba(32,35,31,0.08)] sm:block">
                                <p className="font-serif text-3xl text-[#5d6948]">
                                    De Bank
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[#20231f]/40">
                                    Harderwijk
                                </p>
                            </div>
                        </div>

                        <div className="lg:pl-10">
                            <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                Over ons
                            </p>

                            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                Een plek waar je graag
                                <span className="text-[#5d6948] italic">
                                    {' '}
                                    blijft zitten.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                Bij Brasserie De Bank draait het om goed eten,
                                een ontspannen sfeer en gezellig samen zijn. Van
                                een kop koffie tot een uitgebreide avond aan
                                tafel.
                            </p>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                Onze kaarten bieden voor ieder moment iets
                                lekkers: klassiekers, seizoensgerechten, mooie
                                wijnen en borrelhapjes om samen te delen.
                            </p>

                            <Link
                                href="/about"
                                className="group mt-9 inline-flex items-center gap-3 border-b border-[#5d6948]/40 pb-2 text-[10px] uppercase tracking-[0.25em] text-[#5d6948]"
                            >
                                Lees ons verhaal

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* MOGELIJKHEDEN */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Mogelijkheden
                                </p>

                                <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                    Meer dan alleen
                                    <span className="text-[#5d6948] italic">
                                        {' '}
                                        een tafel.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                                    Voor een besloten diner, vergadering,
                                    feestelijke gelegenheid of wijnproeverij
                                    denken we graag met je mee.
                                </p>
                            </div>

                            <Link
                                href="/mogelijkheden"
                                className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#5d6948]"
                            >
                                Alle mogelijkheden

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    number: '01',
                                    title: 'Private dining',
                                    subtitle: 'Besloten genieten',
                                    detail: '8 – 20 personen',
                                },
                                {
                                    number: '02',
                                    title: 'Vergaderen',
                                    subtitle: 'Zakelijk & gastvrij',
                                    detail: 'Tot 20 personen',
                                },
                                {
                                    number: '03',
                                    title: 'Feestelijke gelegenheden',
                                    subtitle: 'Samen vieren',
                                    detail: 'Tot 50 personen',
                                },
                                {
                                    number: '04',
                                    title: 'Wijnproeverij',
                                    subtitle: 'Ontdek & proef',
                                    detail: '8 – 25 personen',
                                },
                            ].map((item) => (
                                <Link
                                    key={item.number}
                                    href="/mogelijkheden"
                                    className="group flex min-h-[285px] flex-col justify-between border border-black/10 bg-[#f7f4ee] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(32,35,31,0.06)]"
                                >
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-4xl text-[#5d6948]/20">
                                                {item.number}
                                            </span>

                                            <span className="text-lg text-[#5d6948] transition-transform group-hover:translate-x-1">
                                                →
                                            </span>
                                        </div>

                                        <p className="mt-10 text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                            {item.subtitle}
                                        </p>

                                        <h3 className="mt-3 font-serif text-3xl leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="mt-8 border-t border-black/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-[#20231f]/35">
                                        {item.detail}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* REVIEWS */}
                <section className="bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Dit zeggen onze gasten
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                    Gasten komen graag
                                    <br />
                                    <span className="text-[#5d6948] italic">
                                        terug naar De Bank.
                                    </span>
                                </h2>
                            </div>

                            <div className="lg:text-right">
                                <p className="text-lg tracking-[0.08em] text-[#5d6948]">
                                    ★★★★★
                                </p>

                                <p className="mt-2 text-sm text-[#20231f]/55">
                                    4,9 / 5 · 1303 reviews
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {[
                                {
                                    name: 'Niels',
                                    review:
                                        'Het eten was heerlijk en de service was top. Volgende keer zeker weer.',
                                },
                                {
                                    name: 'Lisa',
                                    review:
                                        'De lunch is heerlijk, de sfeer heel gezellig en de bediening erg vriendelijk.',
                                },
                                {
                                    name: 'Jort',
                                    review:
                                        'Heerlijk gegeten, verse bereiding en topbediening. Wij komen terug.',
                                },
                            ].map((review) => (
                                <article
                                    key={review.name}
                                    className="flex min-h-[290px] flex-col justify-between border border-[#5d6948]/15 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(32,35,31,0.05)] sm:p-10"
                                >
                                    <div>
                                        <p className="text-sm tracking-[0.15em] text-[#5d6948]">
                                            ★★★★★
                                        </p>

                                        <p className="mt-7 font-serif text-2xl leading-relaxed">
                                            “{review.review}”
                                        </p>
                                    </div>

                                    <div className="mt-8 border-t border-[#5d6948]/15 pt-5">
                                        <p className="text-sm font-medium">
                                            {review.name}
                                        </p>

                                        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#20231f]/35">
                                            Gast van De Bank
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-10 text-right">
                            <a
                                href="https://www.google.com/search?q=Brasserie+De+Bank+Harderwijk+reviews"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#5d6948]"
                            >
                                Bekijk meer reviews

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* ACTUALITEITEN */}
                <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Nieuws uit De Bank
                                </p>

                                <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                    Altijd iets nieuws
                                    <span className="text-[#5d6948] italic">
                                        {' '}
                                        aan tafel.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                                    Nieuwe gerechten, evenementen, updates en
                                    verhalen uit Brasserie De Bank.
                                </p>
                            </div>

                            <Link
                                href="/actualiteiten"
                                className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#5d6948]"
                            >
                                Alle actualiteiten

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>

                        {actualiteiten.length === 0 ? (
                            <div className="border border-black/10 bg-[#f7f4ee] px-6 py-16 text-center">
                                <p className="font-serif text-2xl">
                                    Binnenkort meer nieuws
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-6 lg:grid-cols-3">
                                {actualiteiten.slice(0, 3).map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/actualiteiten/${item.slug}`}
                                        className="group overflow-hidden border border-black/10 bg-[#f7f4ee] transition hover:bg-white hover:shadow-[0_20px_60px_rgba(32,35,31,0.06)]"
                                    >
                                        <div className="aspect-[16/10] overflow-hidden bg-[#ebe7dc]">
                                            {item.image ? (
                                                <img
                                                    src={`/storage/${item.image}`}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center">
                                                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/25">
                                                        De Bank
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6 sm:p-7">
                                            {item.published_at && (
                                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                                    {formatDate(
                                                        item.published_at,
                                                    )}
                                                </p>
                                            )}

                                            <h3 className="mt-3 font-serif text-2xl leading-tight">
                                                {item.title}
                                            </h3>

                                            {item.excerpt && (
                                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#20231f]/50">
                                                    {item.excerpt}
                                                </p>
                                            )}

                                            <div className="mt-6 border-t border-black/10 pt-4 text-[9px] uppercase tracking-[0.2em] text-[#5d6948]">
                                                Lees verder →
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* ATMOSPHERE */}
                <section className="bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid overflow-hidden bg-[#ebe7dc] lg:grid-cols-[1.25fr_0.75fr]">
                            <div className="relative min-h-[460px] overflow-hidden sm:min-h-[560px]">
                                <img
                                    src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=90"
                                    alt="Sfeer in het restaurant"
                                    className="absolute inset-0 h-full w-full object-cover transition duration-[1500ms] hover:scale-[1.02]"
                                />
                            </div>

                            <div className="flex items-center px-8 py-14 sm:px-12 lg:px-14">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                        Sfeer bij De Bank
                                    </p>

                                    <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                                        Goed eten.
                                        <br />
                                        Goed gezelschap.
                                    </h2>

                                    <p className="mt-6 text-sm leading-7 text-[#20231f]/55 sm:text-base">
                                        Voor een gezellige lunch, een uitgebreid
                                        diner of gewoon een drankje aan tafel.
                                    </p>

                                    <Link
                                        href="/locatie"
                                        className="group mt-8 inline-flex items-center gap-3 border-b border-[#5d6948]/40 pb-2 text-[10px] uppercase tracking-[0.25em] text-[#5d6948]"
                                    >
                                        Ontdek onze locatie

                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RESERVATION */}
                <section className="border-t border-[#5d6948]/10 bg-[#edf0e7] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                            Reserveer
                        </p>

                        <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                            Zien we je binnenkort?
                        </h2>

                        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Reserveer eenvoudig online en wij zorgen dat er een
                            tafel voor je klaarstaat.
                        </p>

                        <Link
                            href="/reservation"
                            className="group mt-9 inline-flex items-center gap-3 bg-[#5d6948] px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition hover:bg-[#4f5a3d]"
                        >
                            Reserveer een tafel

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
