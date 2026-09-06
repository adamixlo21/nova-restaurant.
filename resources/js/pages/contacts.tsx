import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contacts() {
    const { flash } = usePage<{
        flash: {
            success?: string;
        };
    }>().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const inputClass =
        'w-full border border-black/10 bg-[#f7f4ee] px-4 py-3.5 text-sm text-[#20231f] outline-none transition focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10';

    return (
        <>
            <Head title="Contact" />

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
                            Neem contact
                            <br />
                            <span className="text-[#5d6948] italic">
                                met ons op.
                            </span>
                        </h1>

                        <div className="mx-auto mt-7 h-px w-16 bg-[#5d6948]/40" />

                        <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                            Heb je een vraag, wil je iets met ons bespreken of
                            heb je een speciale wens? Neem gerust contact met
                            ons op.
                        </p>
                    </div>
                </section>

                {/* INTRO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-9 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-5xl gap-6 text-center sm:grid-cols-3">
                        <div>
                            <p className="font-serif text-2xl">
                                Persoonlijk
                            </p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                We denken graag mee
                            </p>
                        </div>

                        <div className="sm:border-x sm:border-black/10">
                            <p className="font-serif text-2xl">
                                Bereikbaar
                            </p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Bellen of mailen
                            </p>
                        </div>

                        <div>
                            <p className="font-serif text-2xl">
                                Harderwijk
                            </p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Smeepoortstraat 1
                            </p>
                        </div>
                    </div>
                </section>

                {/* CONTACT + FORM */}
                <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                        {/* INFO */}
                        <div className="flex flex-col justify-between border border-black/10 bg-[#f7f4ee] p-8 sm:p-10">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                    Contact
                                </p>

                                <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight sm:text-5xl">
                                    We helpen je graag verder.
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-[#20231f]/55">
                                    Voor vragen over reserveringen, groepen,
                                    menu&apos;s of andere wensen kun je ons
                                    bellen, mailen of het formulier gebruiken.
                                </p>
                            </div>

                            <div className="mt-12 space-y-8 border-t border-black/10 pt-8">
                                {/* Address */}
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
                                        Brasserie De Bank
                                        <br />
                                        Smeepoortstraat 1
                                        <br />
                                        3841 EG Harderwijk
                                    </a>
                                </div>

                                {/* Phone */}
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

                                {/* Email */}
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

                                {/* Opening hours */}
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

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    <Link
                                        href="/reservation"
                                        className="bg-[#5d6948] px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#4f5a3d]"
                                    >
                                        Reserveer
                                    </Link>

                                    <a
                                        href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="border border-[#5d6948]/25 bg-white/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#20231f] transition hover:border-[#5d6948] hover:bg-white"
                                    >
                                        Plan je route
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* FORM */}
                        <div>
                            {flash.success && (
                                <div className="mb-6 flex items-start gap-4 border border-[#5d6948]/20 bg-[#edf0e7] px-6 py-5">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5d6948] text-white">
                                        ✓
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#5d6948]">
                                            Bericht ontvangen
                                        </p>

                                        <p className="mt-1 text-sm leading-6 text-[#20231f]/65">
                                            {flash.success}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();

                                    post('/contacts', {
                                        preserveScroll: true,
                                        onSuccess: () => {
                                            reset();
                                        },
                                    });
                                }}
                                className="border border-[#5d6948]/15 bg-white p-7 shadow-[0_20px_60px_rgba(32,35,31,0.05)] sm:p-10"
                            >
                                <div className="mb-9">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                        Stuur een bericht
                                    </p>

                                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                                        Waar kunnen we mee helpen?
                                    </h2>

                                    <p className="mt-3 max-w-lg text-sm leading-6 text-[#20231f]/50">
                                        Vul het formulier in en we nemen zo snel
                                        mogelijk contact met je op.
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#20231f]/65"
                                    >
                                        Naam
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        placeholder="Jouw naam"
                                        className={inputClass}
                                    />

                                    {errors.name && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#20231f]/65"
                                    >
                                        E-mail
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        placeholder="naam@email.nl"
                                        className={inputClass}
                                    />

                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-8">
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#20231f]/65"
                                    >
                                        Bericht
                                    </label>

                                    <textarea
                                        id="message"
                                        rows={7}
                                        value={data.message}
                                        onChange={(e) =>
                                            setData('message', e.target.value)
                                        }
                                        placeholder="Vertel ons waar we je mee kunnen helpen..."
                                        className={`${inputClass} resize-none`}
                                    />

                                    {errors.message && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="group flex w-full items-center justify-center gap-3 bg-[#5d6948] px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition hover:bg-[#4f5a3d] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {processing
                                        ? 'Bezig met versturen...'
                                        : 'Verstuur bericht'}

                                    {!processing && (
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* EXTRA INFO */}
                <section className="bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="border border-black/10 bg-white p-8">
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    01
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Reserveringen
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Vragen over een reservering? Neem gerust
                                    contact met ons op.
                                </p>
                            </div>

                            <div className="border border-black/10 bg-[#ebe7dc] p-8">
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    02
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Groepen
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Voor groepen of bijzondere gelegenheden
                                    denken we graag mee.
                                </p>
                            </div>

                            <div className="border border-black/10 bg-white p-8">
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    03
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Algemene vragen
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Ook voor andere vragen ben je altijd welkom
                                    om ons een bericht te sturen.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Locatie
                                </p>

                                <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                                    Midden in Harderwijk
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                    Je vindt Brasserie De Bank aan de
                                    Smeepoortstraat 1 in het centrum van
                                    Harderwijk.
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

                        <div className="overflow-hidden border border-black/10 bg-[#f7f4ee]">
                            <iframe
                                title="Brasserie De Bank locatie"
                                src="https://www.google.com/maps?q=Smeepoortstraat+1,+3841+EG+Harderwijk&output=embed"
                                className="h-[420px] w-full border-0 sm:h-[500px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="border-t border-[#5d6948]/10 bg-[#edf0e7] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                            Liever langskomen?
                        </p>

                        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Zien we je binnenkort
                            <br />
                            <span className="text-[#5d6948] italic">
                                bij De Bank?
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Reserveer een tafel of plan je route naar
                            Smeepoortstraat 1 in Harderwijk.
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
