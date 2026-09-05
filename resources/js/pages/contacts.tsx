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

                {/* Hero */}
                <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-5xl text-center">
                        <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-[#5d6948]">
                            Brasserie De Bank
                        </p>

                        <h1 className="font-serif text-5xl tracking-tight sm:text-6xl lg:text-7xl">
                            Neem contact op
                        </h1>

                        <div className="mx-auto mt-6 h-px w-14 bg-[#5d6948]/40" />

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                            Heb je een vraag, wil je iets met ons bespreken of heb
                            je een speciale wens? Neem gerust contact met ons op.
                        </p>
                    </div>
                </section>

                {/* Contact + Form */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">

                        {/* Information */}
                        <div className="flex flex-col justify-between bg-[#20231f] p-8 text-[#f7f4ee] sm:p-10">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#f7f4ee]/45">
                                    Contact
                                </p>

                                <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight">
                                    We helpen je graag verder
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-[#f7f4ee]/60">
                                    Voor vragen over reserveringen, groepen,
                                    menu&apos;s of andere wensen kun je ons bellen,
                                    mailen of het formulier gebruiken.
                                </p>
                            </div>

                            <div className="mt-12 space-y-8 border-t border-white/10 pt-8">

                                {/* Address */}
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
                                        Brasserie De Bank
                                        <br />
                                        Smeepoortstraat 1
                                        <br />
                                        3841 EG Harderwijk
                                    </a>
                                </div>

                                {/* Phone */}
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

                                {/* Email */}
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

                                {/* Opening hours */}
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

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    <Link
                                        href="/reservation"
                                        className="bg-[#f7f4ee] px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#20231f] transition hover:bg-white"
                                    >
                                        Reserveer
                                    </Link>

                                    <a
                                        href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="border border-white/25 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#f7f4ee] transition hover:border-white"
                                    >
                                        Plan je route
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            {flash.success && (
                                <div className="mb-6 flex items-start gap-4 border border-[#5d6948]/20 bg-[#f7f4ee] px-6 py-5 shadow-sm">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5d6948] text-[#f7f4ee]">
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
                                className="border border-[#5d6948]/15 bg-white p-7 shadow-[0_20px_50px_rgba(32,35,31,0.06)] sm:p-10"
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
                                    className="group flex w-full items-center justify-center gap-3 bg-[#20231f] px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee] transition hover:bg-[#5d6948] disabled:cursor-not-allowed disabled:opacity-50"
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

                {/* Map */}
                <section className="bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-6xl">

                        <div className="mb-10 max-w-xl">
                            <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                Locatie
                            </p>

                            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                                Midden in Harderwijk
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                Je vindt Brasserie De Bank aan de Smeepoortstraat 1
                                in het centrum van Harderwijk.
                            </p>
                        </div>

                        <div className="overflow-hidden border border-black/10 bg-[#ebe7dc]">
                            <iframe
                                title="Brasserie De Bank locatie"
                                src="https://www.google.com/maps?q=Smeepoortstraat+1,+3841+EG+Harderwijk&output=embed"
                                className="h-[420px] w-full border-0 sm:h-[500px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="mt-6">
                            <a
                                href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 bg-[#20231f] px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                            >
                                Plan je route
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}
