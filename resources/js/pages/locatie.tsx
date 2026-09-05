import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Locatie() {
    return (
        <>
            <Head title="Locatie" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">

                {/* Hero */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-5xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#5d6948]">
                            Brasserie De Bank
                        </p>

                        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                            Midden in
                            <br />
                            <span className="italic text-[#5d6948]">
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

                {/* Info + image */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">

                        {/* Info */}
                        <div className="bg-[#20231f] p-8 text-[#f7f4ee] sm:p-10 lg:p-12">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f7f4ee]/40">
                                Contact & locatie
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                                Kom gezellig langs.
                            </h2>

                            <div className="mt-10 space-y-8 border-t border-white/10 pt-8">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee]/35">
                                        Adres
                                    </p>

                                    <a
                                        href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-2 block text-sm leading-6 text-[#f7f4ee]/75 transition hover:text-white"
                                    >
                                        Smeepoortstraat 1
                                        <br />
                                        3841 EG Harderwijk
                                    </a>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee]/35">
                                        Telefoon
                                    </p>

                                    <a
                                        href="tel:0341472582"
                                        className="mt-2 block text-sm text-[#f7f4ee]/75 transition hover:text-white"
                                    >
                                        0341 - 472 582
                                    </a>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee]/35">
                                        E-mail
                                    </p>

                                    <a
                                        href="mailto:info@brasseriedebank.nl"
                                        className="mt-2 block text-sm text-[#f7f4ee]/75 transition hover:text-white"
                                    >
                                        info@brasseriedebank.nl
                                    </a>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee]/35">
                                        Openingstijden
                                    </p>

                                    <div className="mt-3 space-y-2 text-sm text-[#f7f4ee]/70">
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
                                                className="flex justify-between gap-6"
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
                                    className="bg-[#f7f4ee] px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#20231f] transition hover:bg-white"
                                >
                                    Plan je route
                                </a>

                                <Link
                                    href="/reservation"
                                    className="border border-white/30 px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#f7f4ee] transition hover:border-white"
                                >
                                    Reserveren
                                </Link>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="min-h-[500px] overflow-hidden bg-[#d8d3c6]">
                            <img
                                src="https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362c6e6e698960f367cc8_DSC09155.avif"
                                alt="Brasserie De Bank in Harderwijk"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Map */}
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
                                    Brasserie De Bank ligt aan de Smeepoortstraat 1
                                    in Harderwijk.
                                </p>
                            </div>

                            <a
                                href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#5d6948]"
                            >
                                Open in Google Maps
                                <span>→</span>
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

                {/* Photo strip */}
                <section className="bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 text-center">
                            <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                Proef de sfeer
                            </p>

                            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                                Beleef De Bank
                            </h2>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src="https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362c6e6e698960f367cc8_DSC09155.avif"
                                    alt="Sfeer bij Brasserie De Bank"
                                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                                />
                            </div>

                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src="https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362cd6f6a2dce4ffe568e_DSC08793.avif"
                                    alt="Interieur Brasserie De Bank"
                                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                                />
                            </div>

                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src="https://cdn.prod.website-files.com/684804488b7b526aefb97b88/68629b8a3fc5128c20bf8ac2_Mask%20group-1.avif"
                                    alt="Brasserie De Bank"
                                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[#5d6948] px-6 py-24 text-[#f7f4ee] sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#f7f4ee]/60">
                            Kom langs
                        </p>

                        <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl">
                            Zien we je binnenkort?
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#f7f4ee]/70 sm:text-base">
                            Reserveer eenvoudig online en kom genieten bij
                            Brasserie De Bank in Harderwijk.
                        </p>

                        <Link
                            href="/reservation"
                            className="mt-9 inline-flex items-center gap-3 border border-[#f7f4ee] px-8 py-4 text-[10px] uppercase tracking-[0.25em] transition hover:bg-[#f7f4ee] hover:text-[#5d6948]"
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
