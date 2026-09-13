import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Reservation() {
    return (
        <>
            <Head title="Reserveren" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">
                {/* Hero */}
                <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-5xl text-center">
                        <p className="mb-4 text-[11px] tracking-[0.35em] text-[#5d6948] uppercase">
                            Brasserie De Bank
                        </p>

                        <h1 className="font-serif text-5xl tracking-tight sm:text-6xl lg:text-7xl">
                            Reserveer een tafel
                        </h1>

                        <div className="mx-auto mt-6 h-px w-14 bg-[#5d6948]/40" />

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                            Reserveer eenvoudig jouw tafel via Zenchef.
                        </p>
                    </div>
                </section>

                {/* Reservation section */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                        {/* Left */}
                        <div className="flex flex-col justify-between bg-[#20231f] p-8 text-[#f7f4ee] sm:p-10">
                            <div>
                                <p className="text-[10px] tracking-[0.3em] text-[#f7f4ee]/45 uppercase">
                                    Reserveren
                                </p>

                                <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight">
                                    Een gezellige tafel bij De Bank
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-[#f7f4ee]/60">
                                    Of je nu komt lunchen, dineren of gezellig
                                    borrelen, reserveer eenvoudig jouw tafel via
                                    Zenchef.
                                </p>
                            </div>

                            <div className="mt-12 space-y-7 border-t border-white/10 pt-8">
                                <div>
                                    <p className="text-[10px] tracking-[0.25em] text-[#f7f4ee]/35 uppercase">
                                        Locatie
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[#f7f4ee]/75">
                                        Smeepoortstraat 1
                                        <br />
                                        3841 EG Harderwijk
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] tracking-[0.25em] text-[#f7f4ee]/35 uppercase">
                                        Contact
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[#f7f4ee]/75">
                                        0341 - 472 582
                                        <br />
                                        info@brasseriedebank.nl
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] tracking-[0.25em] text-[#f7f4ee]/35 uppercase">
                                        Grote groep?
                                    </p>

                                    <p className="mt-2 max-w-sm text-sm leading-6 text-[#f7f4ee]/60">
                                        Voor grotere gezelschappen kun je ook
                                        telefonisch contact met ons opnemen.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Zenchef */}
                        <div className="flex flex-col items-center justify-center border border-[#5d6948]/15 bg-white p-8 text-center shadow-[0_20px_50px_rgba(32,35,31,0.06)] sm:p-12">

                            <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                Online reserveren
                            </p>

                            <h2 className="mt-4 font-serif text-4xl">
                                Reserveer via Zenchef
                            </h2>

                            <p className="mt-5 max-w-md text-sm leading-7 text-[#20231f]/55">
                                Kies het aantal gasten, een beschikbare datum en
                                tijd. Je reservering wordt direct via Zenchef
                                verwerkt.
                            </p>

                            <button
                                type="button"
                                data-zc-action="open"
                                className="group mt-9 flex items-center justify-center gap-3 bg-[#20231f] px-8 py-4 text-[11px] tracking-[0.22em] text-[#f7f4ee] uppercase transition hover:bg-[#5d6948]"
                            >
                                Reserveer een tafel

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
