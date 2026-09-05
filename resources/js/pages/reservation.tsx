import { Head, useForm } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Reservation() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        message: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/reservation');
    }

    const inputClass =
        'w-full border border-black/10 bg-[#f7f4ee] px-4 py-3.5 text-sm text-[#20231f] outline-none transition focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10';

    return (
        <>
            <Head title="Reserveren" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">

                {/* Hero */}
                <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-5xl text-center">
                        <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-[#5d6948]">
                            Brasserie De Bank
                        </p>

                        <h1 className="font-serif text-5xl tracking-tight sm:text-6xl lg:text-7xl">
                            Reserveer een tafel
                        </h1>

                        <div className="mx-auto mt-6 h-px w-14 bg-[#5d6948]/40" />

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                            Kies een datum, tijd en het aantal gasten.
                            Wij zorgen dat er een tafel voor je klaarstaat.
                        </p>
                    </div>
                </section>

                {/* Reservation section */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                        {/* Left information */}
                        <div className="flex flex-col justify-between bg-[#20231f] p-8 text-[#f7f4ee] sm:p-10">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#f7f4ee]/45">
                                    Reserveren
                                </p>

                                <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight">
                                    Een gezellige tafel bij De Bank
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-[#f7f4ee]/60">
                                    Of je nu komt lunchen, dineren of gezellig
                                    borrelen, reserveer eenvoudig jouw tafel
                                    via het formulier.
                                </p>
                            </div>

                            <div className="mt-12 space-y-7 border-t border-white/10 pt-8">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee]/35">
                                        Locatie
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[#f7f4ee]/75">
                                        Smeepoortstraat 1
                                        <br />
                                        3841 EG Harderwijk
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee]/35">
                                        Contact
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[#f7f4ee]/75">
                                        0341 - 472 582
                                        <br />
                                        info@brasseriedebank.nl
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee]/35">
                                        Grote groep?
                                    </p>

                                    <p className="mt-2 max-w-sm text-sm leading-6 text-[#f7f4ee]/60">
                                        Voor grotere gezelschappen kun je ook
                                        telefonisch contact met ons opnemen.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={submit}
                            className="border border-[#5d6948]/15 bg-white p-7 shadow-[0_20px_50px_rgba(32,35,31,0.06)] sm:p-10"
                        >
                            <div className="mb-9">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                    Jouw gegevens
                                </p>

                                <h2 className="mt-3 font-serif text-3xl">
                                    Reserveer hieronder
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-[#20231f]/50">
                                    Vul je gegevens in en verstuur je reserveringsaanvraag.
                                </p>
                            </div>

                            {/* Name */}
                            <div className="mb-6">
                                <label className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#20231f]/65">
                                    Naam
                                </label>

                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className={inputClass}
                                    placeholder="Jouw naam"
                                />

                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email + Phone */}
                            <div className="mb-6 grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#20231f]/65">
                                        E-mail
                                    </label>

                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        className={inputClass}
                                        placeholder="naam@email.nl"
                                    />

                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#20231f]/65">
                                        Telefoon
                                    </label>

                                    <input
                                        type="tel"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData('phone', e.target.value)
                                        }
                                        className={inputClass}
                                        placeholder="06 12345678"
                                    />

                                    {errors.phone && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Date + Time */}
                            <div className="mb-6 grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#20231f]/65">
                                        Datum
                                    </label>

                                    <input
                                        type="date"
                                        value={data.date}
                                        onChange={(e) =>
                                            setData('date', e.target.value)
                                        }
                                        className={inputClass}
                                        style={{ colorScheme: 'light' }}
                                    />

                                    {errors.date && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.date}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#20231f]/65">
                                        Tijd
                                    </label>

                                    <input
                                        type="time"
                                        value={data.time}
                                        onChange={(e) =>
                                            setData('time', e.target.value)
                                        }
                                        className={inputClass}
                                        style={{ colorScheme: 'light' }}


                                    />

                                    {errors.time && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.time}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="mb-6">
                                <label className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#20231f]/65">
                                    Aantal gasten
                                </label>

                                <input
                                    type="number"
                                    min="1"
                                    max="20"
                                    value={data.guests}
                                    onChange={(e) =>
                                        setData(
                                            'guests',
                                            Number(e.target.value),
                                        )
                                    }
                                    className={inputClass}
                                />

                                {errors.guests && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.guests}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div className="mb-8">
                                <label className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#20231f]/65">
                                    Opmerking
                                </label>

                                <textarea
                                    rows={5}
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    className={`${inputClass} resize-none`}
                                    placeholder="Bijvoorbeeld allergieën, kinderstoel of andere wensen..."
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
                                className="group flex w-full items-center justify-center gap-3 bg-[#20231f] px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[#f7f4ee] transition hover:bg-[#5d6948] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {processing
                                    ? 'Bezig met versturen...'
                                    : 'Reservering aanvragen'}

                                {!processing && (
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
