import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Locatie() {
    return (
        <>
            <Head title="Locatie" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-5xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#5d6948]">
                            Brasserie De Bank
                        </p>

                        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                            Midden in
                            <br />
                            <span className="text-[#5d6948] italic">
                                Harderwijk.
                            </span>
                        </h1>

                        <div className="mx-auto mt-7 h-px w-16 bg-[#5d6948]/40" />

                        <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                            Je vindt Brasserie De Bank aan de Smeepoortstraat,
                            midden in Harderwijk. Kom langs voor koffie, lunch,
                            diner, een borrel of een goed glas wijn.
                        </p>
                    </div>
                </section>

                {/* INTRO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-9 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-5xl gap-6 text-center sm:grid-cols-3">
                        <div>
                            <p className="font-serif text-2xl">
                                Centraal
                            </p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Midden in Harderwijk
                            </p>
                        </div>

                        <div className="sm:border-x sm:border-black/10">
                            <p className="font-serif text-2xl">
                                Gastvrij
                            </p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Voor ieder moment
                            </p>
                        </div>

                        <div>
                            <p className="font-serif text-2xl">
                                Bereikbaar
                            </p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Plan eenvoudig je route
                            </p>
                        </div>
                    </div>
                </section>

                {/* INFO + IMAGE */}
                <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                        {/* INFO */}
                        <div className="border border-black/10 bg-[#f7f4ee] p-8 sm:p-10 lg:p-12">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                Contact & locatie
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                                Kom gezellig langs.
                            </h2>

                            <p className="mt-5 max-w-md text-sm leading-7 text-[#20231f]/55">
                                Voor koffie, lunch, diner of een goed glas wijn.
                                Je bent van harte welkom bij De Bank.
                            </p>

                            <div className="mt-10 space-y-8 border-t border-black/10 pt-8">
                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                        Adres
                                    </p>

                                    <a
                                        href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-2 block text-sm leading-6 text-[#20231f]/65 transition hover:text-[#5d6948]"
                                    >
                                        Smeepoortstraat 1
                                        <br />
                                        3841 EG Harderwijk
                                    </a>
                                </div>

                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                        Telefoon
                                    </p>

                                    <a
                                        href="tel:0341472582"
                                        className="mt-2 block text-sm text-[#20231f]/65 transition hover:text-[#5d6948]"
                                    >
                                        0341 - 472 582
                                    </a>
                                </div>

                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                        E-mail
                                    </p>

                                    <a
                                        href="mailto:info@brasseriedebank.nl"
                                        className="mt-2 block text-sm text-[#20231f]/65 transition hover:text-[#5d6948]"
                                    >
                                        info@brasseriedebank.nl
                                    </a>
                                </div>

                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                        Openingstijden
                                    </p>

                                    <div className="mt-4 space-y-3 text-sm text-[#20231f]/60">
                                        {[
                                            ['Maandag', '10:00 - 23:00'],
                                            ['Dinsdag', '10:00 - 23:00'],
                                            ['Woensdag', '10:00 - 23:00'],
                                            ['Donderdag', '10:00 - 23:00'],
                                            ['Vrijdag', '10:00 - 23:00'],
                                            ['Zaterdag', '10:00 - 23:00'],
                                            ['Zondag', '12:00 - 23:00'],
                                        ].map(([day, time]) => (
                                            <div
                                                key={day}
                                                className="flex justify-between gap-6 border-b border-black/5 pb-3 last:border-0 last:pb-0"
                                            >
                                                <span>{day}</span>
                                                <span>{time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-[#5d6948] px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition hover:bg-[#4f5a3d]"
                                >
                                    Plan je route
                                </a>

                                <Link
                                    href="/reservation"
                                    className="border border-[#5d6948]/25 bg-white/50 px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#20231f] transition hover:border-[#5d6948] hover:bg-white"
                                >
                                    Reserveren
                                </Link>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="relative min-h-[520px] overflow-hidden bg-[#ebe7dc]">
                            <img
                                src="https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362c6e6e698960f367cc8_DSC09155.avif"
                                alt="Brasserie De Bank in Harderwijk"
                                className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] hover:scale-[1.02]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                            <div className="absolute bottom-5 left-5 border border-black/10 bg-[#f7f4ee]/95 px-4 py-3 backdrop-blur-sm sm:bottom-7 sm:left-7">
                                <p className="text-[8px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                    Brasserie De Bank
                                </p>

                                <p className="mt-1 font-serif text-lg text-[#5d6948]">
                                    Smeepoortstraat 1
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAP */}
                <section className="bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Route
                                </p>

                                <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                                    Zo vind je ons
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                    Brasserie De Bank ligt aan de
                                    Smeepoortstraat 1 in Harderwijk.
                                </p>
                            </div>

                            <a
                                href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#5d6948]"
                            >
                                Open in Google Maps

                                <span className="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>

                        <div className="overflow-hidden border border-black/10 bg-[#ebe7dc]">
                            <iframe
                                title="Brasserie De Bank locatie"
                                src="https://www.google.com/maps?q=Smeepoortstraat+1,+3841+EG+Harderwijk&output=embed"
                                className="h-[450px] w-full border-0 sm:h-[560px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </section>

                {/* PHOTO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Proef de sfeer
                                </p>

                                <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                                    Beleef De Bank
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#20231f]/50">
                                Een warme plek voor koffie, lunch, diner en
                                gezellige momenten samen.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            <div className="group aspect-[4/5] overflow-hidden bg-[#d8d3c6]">
                                <img
                                    src="https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362c6e6e698960f367cc8_DSC09155.avif"
                                    alt="Sfeer bij Brasserie De Bank"
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                                />
                            </div>

                            <div className="group aspect-[4/5] overflow-hidden bg-[#d8d3c6]">
                                <img
                                    src="https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362cd6f6a2dce4ffe568e_DSC08793.avif"
                                    alt="Interieur Brasserie De Bank"
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                                />
                            </div>

                            <div className="group aspect-[4/5] overflow-hidden bg-[#d8d3c6]">
                                <img
                                    src="https://cdn.prod.website-files.com/684804488b7b526aefb97b88/68629b8a3fc5128c20bf8ac2_Mask%20group-1.avif"
                                    alt="Brasserie De Bank"
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXTRA INFO */}
                <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="border border-black/10 bg-[#f7f4ee] p-8">
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    01
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Lunch & diner
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Van een ontspannen lunch tot een uitgebreide
                                    avond aan tafel.
                                </p>
                            </div>

                            <div className="border border-black/10 bg-[#ebe7dc] p-8">
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    02
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Borrel
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Even bijkletsen met een hapje en een goed
                                    glas wijn.
                                </p>
                            </div>

                            <div className="border border-black/10 bg-[#f7f4ee] p-8">
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    03
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Reserveren
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Zeker zijn van een tafel? Reserveer eenvoudig
                                    online.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="border-t border-[#5d6948]/10 bg-[#edf0e7] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                            Kom langs
                        </p>

                        <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl">
                            Zien we je binnenkort?
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Reserveer eenvoudig online en kom genieten bij
                            Brasserie De Bank in Harderwijk.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/reservation"
                                className="bg-[#5d6948] px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition hover:bg-[#4f5a3d]"
                            >
                                Reserveer een tafel
                            </Link>

                            <a
                                href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                target="_blank"
                                rel="noreferrer"
                                className="border border-[#5d6948]/25 bg-white/60 px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-[#20231f] transition hover:border-[#5d6948] hover:bg-white"
                            >
                                Plan je route
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
