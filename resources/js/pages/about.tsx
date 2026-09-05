import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
    return (
        <>
            <Head title="Over ons" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">

                {/* Hero */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-5xl text-center">
                        <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-[#5d6948]">
                            Brasserie De Bank
                        </p>

                        <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                            Over De Bank
                        </h1>

                        <div className="mx-auto mt-6 h-px w-14 bg-[#5d6948]/40" />

                        <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                            Een warme, laagdrempelige en gastvrije plek in Harderwijk
                            waar goed eten, gezelligheid en ontspannen samenkomen.
                        </p>
                    </div>
                </section>

                {/* Story */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">

                        <div className="aspect-[4/5] overflow-hidden bg-[#d8d3c6]">
                            <img
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85"
                                alt="Sfeer bij Brasserie De Bank"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div>
                            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                Ons verhaal
                            </p>

                            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                                Van passie voor koken
                                <br />
                                naar De Bank.
                            </h2>

                            <div className="mt-8 space-y-5 text-sm leading-7 text-[#20231f]/65 sm:text-base sm:leading-8">
                                <p>
                                    Patrick Elzinga en Robert Poel zijn jeugdvrienden
                                    met een gedeelde passie voor koken. Door de jaren
                                    heen deden zij ruime ervaring op als chef-koks in
                                    verschillende keukens, van grand cafés tot
                                    restaurants met een Michelinster.
                                </p>

                                <p>
                                    Voor De Bank begonnen zij met Savage in Harderwijk,
                                    waar kwaliteit en verfijning centraal stonden.
                                    Die ervaring en aandacht voor kwaliteit nemen zij
                                    mee naar Brasserie De Bank.
                                </p>

                                <p>
                                    Bij De Bank draait het om toegankelijke
                                    brasseriegerechten, een ontspannen sfeer en
                                    gastvrijheid. Een plek waar je graag nog wat
                                    langer blijft zitten.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quality */}
                <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                Kwaliteit
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                                Vers, ambachtelijk
                                <br />
                                en met aandacht.
                            </h2>

                            <p className="mt-7 max-w-xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                De gerechten worden ambachtelijk bereid met liefde
                                en passie. Ingrediënten worden zorgvuldig geselecteerd
                                en dagelijks vers geleverd.
                            </p>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                                De menukaart beweegt mee met de seizoenen, zodat er
                                regelmatig ruimte is voor nieuwe smaken en variatie.
                            </p>

                            <Link
                                href="/menus"
                                className="group mt-8 inline-flex items-center gap-3 border-b border-[#5d6948]/50 pb-2 text-[10px] uppercase tracking-[0.25em] text-[#5d6948]"
                            >
                                Bekijk onze kaarten

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div className="border border-[#5d6948]/15 bg-white p-8">
                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                    01
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Dagvers
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Ingrediënten worden zorgvuldig gekozen en
                                    dagelijks vers geleverd.
                                </p>
                            </div>

                            <div className="border border-[#5d6948]/15 bg-white p-8">
                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                    02
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Seizoenen
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    De menukaart wisselt regelmatig mee met het seizoen.
                                </p>
                            </div>

                            <div className="border border-[#5d6948]/15 bg-white p-8 sm:col-span-2">
                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                    03
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Verrassingsgerecht
                                </h3>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                    Naast de vaste kaart is er ook ruimte voor
                                    verrassingsgerechten en wisselende creaties uit de keuken.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="bg-[#20231f] px-6 py-20 text-[#f7f4ee] sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-6xl">

                        <div className="mx-auto mb-14 max-w-2xl text-center">
                            <p className="text-[10px] uppercase tracking-[0.35em] text-[#aeb69b]">
                                De Bank
                            </p>

                            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                                Voor iedereen.
                            </h2>

                            <p className="mt-6 text-sm leading-7 text-[#f7f4ee]/60 sm:text-base">
                                Van jong tot oud: De Bank wil een warme,
                                toegankelijke en gezellige plek zijn waar iedereen
                                zich welkom voelt.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">

                            <div className="border border-white/10 p-8 sm:p-10">
                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#aeb69b]">
                                    Ontspannen
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Neem de tijd
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#f7f4ee]/55">
                                    Lees de krant aan de stamtafel, praat bij met
                                    vrienden of geniet rustig van een kop koffie.
                                </p>
                            </div>

                            <div className="border border-white/10 p-8 sm:p-10">
                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#aeb69b]">
                                    Sfeer
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Warm & gastvrij
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#f7f4ee]/55">
                                    Van de open keuken tot kunst aan de muur:
                                    sfeer, warmte en gastvrijheid staan centraal.
                                </p>
                            </div>

                            <div className="border border-white/10 p-8 sm:p-10">
                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#aeb69b]">
                                    Terras
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Buiten genieten
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#f7f4ee]/55">
                                    Ook op het terras kun je ontspannen genieten van
                                    eten, drinken en de sfeer van Harderwijk.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Possibilities */}
                <section className="bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-12 max-w-2xl">
                            <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                Meer dan een brasserie
                            </p>

                            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                                Ook voor bijzondere momenten.
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="bg-[#f7f4ee] p-8">
                                <h3 className="font-serif text-3xl">
                                    Private dining
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Besloten dineren voor groepen, eventueel met
                                    een menu en bijpassende wijnen op maat.
                                </p>
                            </div>

                            <div className="bg-[#f7f4ee] p-8">
                                <h3 className="font-serif text-3xl">
                                    Vergaderen
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Sfeervolle ruimtes voor zakelijke bijeenkomsten,
                                    met arrangementen voor lunch, high tea of diner.
                                </p>
                            </div>

                            <div className="bg-[#f7f4ee] p-8">
                                <h3 className="font-serif text-3xl">
                                    Feestelijk
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Ook geschikt voor bijvoorbeeld een bedrijfsborrel,
                                    verjaardag of babyshower.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing */}
                <section className="bg-[#5d6948] px-6 py-24 text-[#f7f4ee] sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#f7f4ee]/60">
                            Kom langs
                        </p>

                        <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Ervaar De Bank zelf.
                        </h2>

                        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#f7f4ee]/70 sm:text-base">
                            Voor koffie, lunch, diner, een goed glas wijn
                            of gewoon een gezellig moment samen.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/reservation"
                                className="border border-[#f7f4ee] px-8 py-4 text-[10px] uppercase tracking-[0.25em] transition hover:bg-[#f7f4ee] hover:text-[#5d6948]"
                            >
                                Reserveer een tafel
                            </Link>

                            <Link
                                href="/contacts"
                                className="border border-[#f7f4ee]/35 px-8 py-4 text-[10px] uppercase tracking-[0.25em] transition hover:border-[#f7f4ee]"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}
