import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    return (
        <>
            <Head title="Menu" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">

                {/* Hero */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
                    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-5xl text-center">
                        <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-[#5d6948]">
                            Brasserie De Bank
                        </p>

                        <h1 className="font-serif text-5xl leading-none tracking-tight sm:text-6xl lg:text-7xl">
                            Onze kaarten
                        </h1>

                        <div className="mx-auto mt-7 h-px w-14 bg-[#5d6948]/50" />

                        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                            Van lunch tot diner, van een goed glas wijn tot een borrel
                            aan tafel. Bekijk hieronder onze verschillende kaarten.
                        </p>
                    </div>
                </section>

                {/* Menu cards */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-6xl">

                        {menus.length === 0 ? (
                            <div className="border border-[#5d6948]/20 bg-[#f7f4ee] px-6 py-20 text-center">
                                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
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
                                        className={`
                                            group relative flex min-h-[300px] flex-col justify-between
                                            overflow-hidden border border-[#5d6948]/15
                                            bg-[#f7f4ee] p-7
                                            transition-all duration-500
                                            hover:-translate-y-1.5
                                            hover:border-[#5d6948]/35
                                            hover:shadow-[0_20px_50px_rgba(32,35,31,0.10)]
                                            sm:p-8
                                            ${
                                            menus.length === 5 &&
                                            index >= 3
                                                ? 'lg:col-span-3'
                                                : 'lg:col-span-2'
                                        }
                                        `}
                                    >
                                        {/* Background number */}
                                        <span className="pointer-events-none absolute -right-2 -top-6 font-serif text-[110px] leading-none text-[#5d6948]/5 transition duration-500 group-hover:text-[#5d6948]/10">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        {/* Top */}
                                        <div className="relative flex items-start justify-between gap-5">
                                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                                Kaart {String(index + 1).padStart(2, '0')}
                                            </span>

                                            <span className="text-right text-[10px] uppercase tracking-[0.18em] text-[#20231f]/35">
                                                {menu.categories_count}{' '}
                                                {menu.categories_count === 1
                                                    ? 'categorie'
                                                    : 'categorieën'}
                                            </span>
                                        </div>

                                        {/* Bottom */}
                                        <div className="relative mt-16">
                                            <div className="mb-5 h-px w-10 bg-[#5d6948]/40 transition-all duration-500 group-hover:w-16" />

                                            <h2 className="font-serif text-3xl leading-tight transition-colors duration-300 group-hover:text-[#5d6948] sm:text-4xl">
                                                {menu.name}
                                            </h2>

                                            {menu.description && (
                                                <p className="mt-4 max-w-sm text-sm leading-6 text-[#20231f]/55">
                                                    {menu.description}
                                                </p>
                                            )}

                                            <div className="mt-7 flex items-center justify-between">
                                                <span className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                                    Bekijk kaart
                                                </span>

                                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5d6948]/25 text-[#5d6948] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#5d6948] group-hover:bg-[#5d6948] group-hover:text-[#f7f4ee]">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="px-6 py-16 text-center sm:px-10 sm:py-20">
                    <div className="mx-auto max-w-xl">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                            Een tafel reserveren?
                        </p>

                        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                            Kom gezellig bij ons eten
                        </h2>

                        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#20231f]/55">
                            Reserveer eenvoudig online en wij zorgen dat er een tafel
                            voor je klaarstaat.
                        </p>

                        <Link
                            href="/reservation"
                            className="mt-8 inline-flex items-center gap-3 bg-[#20231f] px-7 py-4 text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                        >
                            Reserveer een tafel
                            <span>→</span>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
