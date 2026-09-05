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

export default function Home({
                                 featuredDishes,
                                 actualiteiten,
                             }: Props) {
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
                <div className="bg-[#5d6948] px-6 py-4 text-[#f7f4ee]">
                    <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 text-center">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f7f4ee] text-sm text-[#5d6948]">
                            ✓
                        </span>

                        <p className="text-sm">
                            {flash.success}
                        </p>
                    </div>
                </div>
            )}

            <main className="bg-[#f7f4ee] text-[#20231f]">

                {/* HERO */}
                <section className="relative overflow-hidden">
                    <div className="mx-auto grid min-h-[calc(100vh-4.75rem)] max-w-[1600px] lg:grid-cols-2">

                        {/* Left */}
                        <div className="relative flex items-center px-6 py-24 sm:px-10 lg:px-16 lg:py-28 xl:px-24">
                            <div className="relative z-10 max-w-xl">

                                <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Brasserie De Bank · Harderwijk
                                </p>

                                <h1 className="font-serif text-5xl leading-[0.94] tracking-tight sm:text-6xl lg:text-7xl xl:text-[82px]">
                                    Genieten
                                    <br />
                                    bij{' '}
                                    <span className="italic text-[#5d6948]">
                                        De Bank.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-md text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                    De huiskamer van Harderwijk. Een plek voor
                                    koffie, lunch, diner, borrel en een goed
                                    glas wijn.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-4">
                                    <Link
                                        href="/menus"
                                        className="group inline-flex items-center gap-3 bg-[#20231f] px-7 py-4 text-[10px] uppercase tracking-[0.23em] text-[#f7f4ee] transition duration-300 hover:bg-[#5d6948]"
                                    >
                                        Bekijk onze kaarten

                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>

                                    <Link
                                        href="/reservation"
                                        className="inline-flex items-center border border-[#20231f]/20 px-7 py-4 text-[10px] uppercase tracking-[0.23em] transition duration-300 hover:border-[#20231f] hover:bg-[#20231f] hover:text-[#f7f4ee]"
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

                        {/* Right image */}
                        <div className="relative min-h-[520px] overflow-hidden lg:min-h-full">
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=90"
                                alt="Restaurant gerecht"
                                className="absolute inset-0 h-full w-full object-cover transition duration-[1500ms] hover:scale-[1.02]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white sm:bottom-10 sm:left-10 sm:right-10">
                                <div>
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

                                <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/40 text-lg sm:flex">
                                    ↓
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-10 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-3">
                        <div>
                            <p className="font-serif text-2xl">
                                Lunch
                            </p>

                            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#20231f]/40">
                                Ontspannen middag
                            </p>
                        </div>

                        <div className="sm:border-x sm:border-black/10">
                            <p className="font-serif text-2xl">
                                Diner
                            </p>

                            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#20231f]/40">
                                Avond bij De Bank
                            </p>
                        </div>

                        <div>
                            <p className="font-serif text-2xl">
                                Borrel
                            </p>

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
                                    <article
                                        key={dish.id}
                                        className="group"
                                    >
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

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

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

                                                    {dish.prices?.length > 0 && (
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

                                            <div className="mt-5 h-px w-full bg-black/10" />
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

                            <div className="absolute -bottom-8 -right-4 hidden bg-[#5d6948] px-8 py-7 text-[#f7f4ee] sm:block">
                                <p className="font-serif text-3xl">
                                    De Bank
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[#f7f4ee]/60">
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
                                <span className="italic text-[#5d6948]">
                                    {' '}
                                    blijft zitten.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                Bij Brasserie De Bank draait het om goed eten,
                                een ontspannen sfeer en gezellig samen zijn.
                                Van een kop koffie tot een uitgebreide avond
                                aan tafel.
                            </p>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                Onze kaarten bieden voor ieder moment iets
                                lekkers: klassiekers, seizoensgerechten,
                                mooie wijnen en borrelhapjes om samen te delen.
                            </p>

                            <Link
                                href="/about"
                                className="group mt-9 inline-flex items-center gap-3 border-b border-[#5d6948]/50 pb-2 text-[10px] uppercase tracking-[0.25em] text-[#5d6948]"
                            >
                                Lees ons verhaal

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* REVIEWS */}
                <section className="bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">

                        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Dit zeggen onze gasten
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                    Gasten komen graag
                                    <br />

                                    <span className="italic text-[#5d6948]">
                                        terug naar De Bank.
                                    </span>
                                </h2>
                            </div>

                            <div className="lg:text-right">
                                <div className="flex items-center gap-2 lg:justify-end">
                                    <span className="text-lg tracking-[0.08em] text-[#5d6948]">
                                        ★★★★★
                                    </span>
                                </div>

                                <p className="mt-2 text-sm text-[#20231f]/55">
                                    4,9 / 5 · 1303 reviews
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">

                            <article className="flex min-h-[300px] flex-col justify-between border border-[#5d6948]/15 bg-[#f7f4ee] p-8 transition duration-300 hover:-translate-y-1 sm:p-10">
                                <div>
                                    <div className="text-sm tracking-[0.15em] text-[#5d6948]">
                                        ★★★★★
                                    </div>

                                    <p className="mt-7 font-serif text-2xl leading-relaxed">
                                        “Het eten was heerlijk en de service
                                        was top. Volgende keer zeker weer.”
                                    </p>
                                </div>

                                <div className="mt-8 border-t border-[#5d6948]/15 pt-5">
                                    <p className="text-sm font-medium">
                                        Niels
                                    </p>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#20231f]/35">
                                        Gast van De Bank
                                    </p>
                                </div>
                            </article>

                            <article className="flex min-h-[300px] flex-col justify-between bg-[#20231f] p-8 text-[#f7f4ee] transition duration-300 hover:-translate-y-1 sm:p-10">
                                <div>
                                    <div className="text-sm tracking-[0.15em] text-[#aeb69b]">
                                        ★★★★★
                                    </div>

                                    <p className="mt-7 font-serif text-2xl leading-relaxed">
                                        “De lunch is heerlijk, de sfeer heel
                                        gezellig en de bediening erg
                                        vriendelijk.”
                                    </p>
                                </div>

                                <div className="mt-8 border-t border-white/10 pt-5">
                                    <p className="text-sm font-medium">
                                        Lisa
                                    </p>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#f7f4ee]/35">
                                        Gast van De Bank
                                    </p>
                                </div>
                            </article>

                            <article className="flex min-h-[300px] flex-col justify-between border border-[#5d6948]/15 bg-[#f7f4ee] p-8 transition duration-300 hover:-translate-y-1 sm:p-10">
                                <div>
                                    <div className="text-sm tracking-[0.15em] text-[#5d6948]">
                                        ★★★★★
                                    </div>

                                    <p className="mt-7 font-serif text-2xl leading-relaxed">
                                        “Heerlijk gegeten, verse bereiding en
                                        topbediening. Wij komen terug.”
                                    </p>
                                </div>

                                <div className="mt-8 border-t border-[#5d6948]/15 pt-5">
                                    <p className="text-sm font-medium">
                                        Jort
                                    </p>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#20231f]/35">
                                        Gast van De Bank
                                    </p>
                                </div>
                            </article>
                        </div>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="max-w-xl text-sm leading-7 text-[#20231f]/50">
                                Nieuwsgierig naar meer ervaringen? Bekijk wat
                                andere gasten over Brasserie De Bank vertellen.
                            </p>

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

                                <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                    Altijd iets nieuws
                                    <span className="italic text-[#5d6948]">
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

                                <p className="mt-3 text-sm text-[#20231f]/45">
                                    Houd onze actualiteiten in de gaten voor
                                    nieuws uit De Bank.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-7 lg:grid-cols-12">

                                {/* Main story */}
                                {actualiteiten[0] && (
                                    <Link
                                        href={`/actualiteiten/${actualiteiten[0].slug}`}
                                        className="group relative overflow-hidden bg-[#20231f] lg:col-span-7"
                                    >
                                        <div className="relative min-h-[470px] overflow-hidden sm:min-h-[560px]">
                                            {actualiteiten[0].image ? (
                                                <img
                                                    src={`/storage/${actualiteiten[0].image}`}
                                                    alt={
                                                        actualiteiten[0].title
                                                    }
                                                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-[#5d6948]" />
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                                            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                                                {actualiteiten[0]
                                                    .published_at && (
                                                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/55">
                                                        {formatDate(
                                                            actualiteiten[0]
                                                                .published_at,
                                                        )}
                                                    </p>
                                                )}

                                                <h3 className="mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                                                    {actualiteiten[0].title}
                                                </h3>

                                                {actualiteiten[0].excerpt && (
                                                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                                                        {
                                                            actualiteiten[0]
                                                                .excerpt
                                                        }
                                                    </p>
                                                )}

                                                <div className="mt-7 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]">
                                                    Lees verder

                                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                                        →
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )}

                                {/* Side stories */}
                                <div className="flex flex-col gap-7 lg:col-span-5">
                                    {actualiteiten
                                        .slice(1, 3)
                                        .map((item) => (
                                            <Link
                                                key={item.id}
                                                href={`/actualiteiten/${item.slug}`}
                                                className="group grid flex-1 overflow-hidden border border-black/10 bg-[#f7f4ee] sm:grid-cols-[190px_1fr] lg:grid-cols-[170px_1fr]"
                                            >
                                                <div className="relative min-h-[220px] overflow-hidden bg-[#ebe7dc] sm:min-h-full">
                                                    {item.image ? (
                                                        <img
                                                            src={`/storage/${item.image}`}
                                                            alt={item.title}
                                                            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full min-h-[220px] items-center justify-center">
                                                            <span className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/25">
                                                                De Bank
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex flex-col justify-between p-6">
                                                    <div>
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
                                                            <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#20231f]/50">
                                                                {
                                                                    item.excerpt
                                                                }
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="mt-5 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                                        Lees verder

                                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                                            →
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}

                                    {actualiteiten.length === 1 && (
                                        <div className="flex flex-1 items-center justify-center border border-black/10 bg-[#f7f4ee] px-8 py-16 text-center">
                                            <div>
                                                <p className="text-[9px] uppercase tracking-[0.3em] text-[#5d6948]">
                                                    Binnenkort
                                                </p>

                                                <p className="mt-4 font-serif text-2xl">
                                                    Meer nieuws uit De Bank
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* ATMOSPHERE */}
                <section className="bg-[#20231f] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative min-h-[500px] overflow-hidden sm:min-h-[580px]">

                            <img
                                src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=90"
                                alt="Sfeer in het restaurant"
                                className="absolute inset-0 h-full w-full object-cover transition duration-[1500ms] hover:scale-[1.02]"
                            />

                            <div className="absolute inset-0 bg-black/50" />

                            <div className="relative flex min-h-[500px] items-center justify-center px-6 text-center sm:min-h-[580px]">
                                <div className="max-w-3xl text-white">
                                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                                        Brasserie De Bank
                                    </p>

                                    <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-7xl">
                                        Goed eten.
                                        <br />
                                        Goed gezelschap.
                                    </h2>

                                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                                        Voor een gezellige lunch, een
                                        uitgebreid diner of gewoon een drankje
                                        aan tafel.
                                    </p>

                                    <Link
                                        href="/locatie"
                                        className="group mt-8 inline-flex items-center gap-3 border-b border-white/50 pb-2 text-[10px] uppercase tracking-[0.25em]"
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

                {/* RESERVATION CTA */}
                <section className="bg-[#5d6948] px-6 py-20 text-[#f7f4ee] sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#f7f4ee]/60">
                            Reserveer
                        </p>

                        <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                            Zien we je binnenkort?
                        </h2>

                        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#f7f4ee]/70 sm:text-base">
                            Reserveer eenvoudig online en wij zorgen dat er
                            een tafel voor je klaarstaat.
                        </p>

                        <Link
                            href="/reservation"
                            className="group mt-9 inline-flex items-center gap-3 border border-[#f7f4ee]/70 px-8 py-4 text-[10px] uppercase tracking-[0.25em] transition duration-300 hover:bg-[#f7f4ee] hover:text-[#5d6948]"
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
