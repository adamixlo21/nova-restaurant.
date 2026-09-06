import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
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

    useEffect(() => {
        const elements =
            document.querySelectorAll<HTMLElement>('[data-reveal]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px',
            },
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const openingHours = [
        ['Maandag', '10:00 - 23:00'],
        ['Dinsdag', '10:00 - 23:00'],
        ['Woensdag', '10:00 - 23:00'],
        ['Donderdag', '10:00 - 23:00'],
        ['Vrijdag', '10:00 - 23:00'],
        ['Zaterdag', '10:00 - 23:00'],
        ['Zondag', '12:00 - 23:00'],
    ];

    const inputClass =
        'w-full border border-black/10 bg-[#f7f4ee] px-4 py-3.5 text-sm text-[#20231f] outline-none transition duration-300 placeholder:text-[#20231f]/30 focus:border-[#5d6948] focus:bg-white focus:ring-2 focus:ring-[#5d6948]/10';

    return (
        <>
            <Head title="Contact" />

            <Navbar />

            <main className="overflow-hidden bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
                    <div className="pointer-events-none absolute top-10 -right-24 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute bottom-0 -left-20 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <span className="pointer-events-none absolute right-0 -bottom-20 hidden font-serif text-[260px] leading-none text-[#5d6948]/[0.035] lg:block">
                        C
                    </span>

                    <div
                        data-reveal
                        className="contact-hero relative mx-auto max-w-5xl text-center"
                    >
                        <div className="contact-hero-label flex items-center justify-center gap-4">
                            <span className="h-px w-8 bg-[#5d6948]/40" />

                            <p className="text-[10px] tracking-[0.4em] text-[#5d6948] uppercase">
                                Brasserie De Bank
                            </p>

                            <span className="h-px w-8 bg-[#5d6948]/40" />
                        </div>

                        <h1 className="contact-hero-title mt-5 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                            Neem contact
                            <br />
                            <span className="text-[#5d6948] italic">
                                met ons op.
                            </span>
                        </h1>

                        <div className="contact-hero-line mx-auto mt-7 h-px w-16 bg-[#5d6948]/40" />

                        <p className="contact-hero-text mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                            Heb je een vraag, wil je iets met ons bespreken of
                            heb je een speciale wens? Neem gerust contact met
                            ons op.
                        </p>
                    </div>
                </section>

                {/* INTRO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-10 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">
                        {[
                            ['Persoonlijk', 'We denken graag mee'],
                            ['Bereikbaar', 'Bellen of mailen'],
                            ['Harderwijk', 'Smeepoortstraat 1'],
                        ].map(([title, subtitle], index) => (
                            <div
                                key={title}
                                data-reveal
                                style={{
                                    transitionDelay: `${index * 120}ms`,
                                }}
                                className={`contact-strip-item ${
                                    index === 1
                                        ? 'sm:border-x sm:border-black/10'
                                        : ''
                                }`}
                            >
                                <p className="font-serif text-2xl">{title}</p>

                                <p className="mt-2 text-[9px] tracking-[0.22em] text-[#20231f]/35 uppercase">
                                    {subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CONTACT + FORM */}
                <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute top-20 -left-24 h-52 w-52 rounded-full border border-[#5d6948]/8" />
                    <div className="pointer-events-none absolute -right-20 bottom-20 h-60 w-60 rounded-full border border-[#5d6948]/8" />

                    <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                        {/* INFO */}
                        <div
                            data-reveal
                            className="contact-info flex flex-col justify-between border border-black/10 bg-[#f7f4ee] p-8 sm:p-10"
                        >
                            <div>
                                <div className="contact-info-label flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#5d6948]/40" />

                                    <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                        Contact
                                    </p>
                                </div>

                                <h2 className="contact-info-title mt-4 max-w-sm font-serif text-4xl leading-tight sm:text-5xl">
                                    We helpen je graag verder.
                                </h2>

                                <p className="contact-info-text mt-5 max-w-md text-sm leading-7 text-[#20231f]/55">
                                    Voor vragen over reserveringen, groepen,
                                    menu&apos;s of andere wensen kun je ons
                                    bellen, mailen of het formulier gebruiken.
                                </p>
                            </div>

                            <div className="contact-info-details mt-12 space-y-8 border-t border-black/10 pt-8">
                                <div>
                                    <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
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

                                <div>
                                    <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
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
                                    <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
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
                                    <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
                                        Openingstijden
                                    </p>

                                    <div className="mt-4 space-y-3 text-sm text-[#20231f]/60">
                                        {openingHours.map(([day, time]) => (
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

                                <div className="flex flex-wrap gap-3 pt-2">
                                    <Link
                                        href="/reservation"
                                        className="group inline-flex items-center gap-3 bg-[#5d6948] px-5 py-3 text-[10px] tracking-[0.2em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d]"
                                    >
                                        Reserveer
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>

                                    <a
                                        href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="border border-[#5d6948]/25 bg-white/60 px-5 py-3 text-[10px] tracking-[0.2em] text-[#20231f] uppercase transition duration-300 hover:-translate-y-1 hover:border-[#5d6948] hover:bg-white"
                                    >
                                        Plan je route
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* FORM */}
                        <div data-reveal className="contact-form-wrap">
                            {flash.success && (
                                <div className="contact-success mb-6 flex items-start gap-4 border border-[#5d6948]/20 bg-[#edf0e7] px-6 py-5">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5d6948] text-white">
                                        ✓
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-medium tracking-[0.22em] text-[#5d6948] uppercase">
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
                                className="contact-form border border-[#5d6948]/15 bg-white p-7 shadow-[0_20px_60px_rgba(32,35,31,0.05)] sm:p-10"
                            >
                                <div className="mb-9">
                                    <div className="flex items-center gap-4">
                                        <span className="h-px w-8 bg-[#5d6948]/40" />

                                        <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                            Stuur een bericht
                                        </p>
                                    </div>

                                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                                        Waar kunnen we mee helpen?
                                    </h2>

                                    <p className="mt-3 max-w-lg text-sm leading-6 text-[#20231f]/50">
                                        Vul het formulier in en we nemen zo snel
                                        mogelijk contact met je op.
                                    </p>
                                </div>

                                {/* NAME */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-[11px] tracking-[0.18em] text-[#20231f]/65 uppercase"
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

                                {/* EMAIL */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-[11px] tracking-[0.18em] text-[#20231f]/65 uppercase"
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

                                {/* MESSAGE */}
                                <div className="mb-8">
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-[11px] tracking-[0.18em] text-[#20231f]/65 uppercase"
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
                                    className="group flex w-full items-center justify-center gap-3 bg-[#5d6948] px-6 py-4 text-[10px] tracking-[0.25em] text-white uppercase transition duration-300 hover:-translate-y-0.5 hover:bg-[#4f5a3d] hover:shadow-[0_14px_35px_rgba(93,105,72,0.18)] disabled:cursor-not-allowed disabled:opacity-50"
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

                {/* CINEMATIC */}
                <section className="contact-cinematic relative min-h-[50vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=90"
                        alt="Sfeer bij Brasserie De Bank"
                        className="contact-cinematic-image absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

                    <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-7xl items-end px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                        <div
                            data-reveal
                            className="contact-cinematic-content max-w-3xl text-white"
                        >
                            <p className="contact-cinematic-label text-[10px] tracking-[0.35em] text-white/60 uppercase">
                                Brasserie De Bank
                            </p>

                            <h2 className="contact-cinematic-title mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                                Een vraag?
                                <br />
                                <span className="text-[#dce2ce] italic">
                                    We denken graag mee.
                                </span>
                            </h2>

                            <p className="contact-cinematic-text mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                                Van reserveringen tot bijzondere gelegenheden:
                                neem gerust contact met ons op.
                            </p>
                        </div>
                    </div>
                </section>

                {/* EXTRA INFO */}
                <section className="relative bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    number: '01',
                                    title: 'Reserveringen',
                                    text: 'Vragen over een reservering? Neem gerust contact met ons op.',
                                },
                                {
                                    number: '02',
                                    title: 'Groepen',
                                    text: 'Voor groepen of bijzondere gelegenheden denken we graag mee.',
                                },
                                {
                                    number: '03',
                                    title: 'Algemene vragen',
                                    text: 'Ook voor andere vragen ben je altijd welkom om ons een bericht te sturen.',
                                },
                            ].map((item, index) => (
                                <div
                                    key={item.number}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 120}ms`,
                                    }}
                                    className={`contact-info-card group relative overflow-hidden border border-black/10 p-8 transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(32,35,31,0.06)] ${
                                        index === 1
                                            ? 'bg-[#ebe7dc]'
                                            : 'bg-white'
                                    }`}
                                >
                                    <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full border border-[#5d6948]/10 transition duration-700 group-hover:scale-150" />

                                    <p className="relative text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                        {item.number}
                                    </p>

                                    <h3 className="relative mt-5 font-serif text-3xl">
                                        {item.title}
                                    </h3>

                                    <p className="relative mt-4 text-sm leading-7 text-[#20231f]/55">
                                        {item.text}
                                    </p>

                                    <div className="relative mt-7 h-px w-full bg-black/10">
                                        <div className="h-px w-0 bg-[#5d6948] transition-all duration-500 group-hover:w-full" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MAP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div
                            data-reveal
                            className="contact-map-header mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
                        >
                            <div>
                                <div className="contact-map-label flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#5d6948]/40" />

                                    <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                        Locatie
                                    </p>
                                </div>

                                <h2 className="contact-map-title mt-4 font-serif text-4xl sm:text-5xl">
                                    Midden in Harderwijk
                                </h2>

                                <p className="contact-map-text mt-4 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                    Je vindt Brasserie De Bank aan de
                                    Smeepoortstraat 1 in het centrum van
                                    Harderwijk.
                                </p>
                            </div>

                            <a
                                href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-map-link group inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                            >
                                Open in Google Maps
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>

                        <div
                            data-reveal
                            className="contact-map-frame overflow-hidden border border-black/10 bg-[#f7f4ee]"
                        >
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
                <section className="relative overflow-hidden border-t border-[#5d6948]/10 bg-[#edf0e7] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="contact-cta relative mx-auto max-w-4xl text-center"
                    >
                        <p className="contact-cta-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                            Liever langskomen?
                        </p>

                        <h2 className="contact-cta-title mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Zien we je binnenkort
                            <br />
                            <span className="text-[#5d6948] italic">
                                bij De Bank?
                            </span>
                        </h2>

                        <p className="contact-cta-text mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Reserveer een tafel of plan je route naar
                            Smeepoortstraat 1 in Harderwijk.
                        </p>

                        <div className="contact-cta-buttons mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/reservation"
                                className="group inline-flex items-center gap-3 bg-[#5d6948] px-8 py-4 text-[10px] tracking-[0.25em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d]"
                            >
                                Reserveer een tafel
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <a
                                href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                target="_blank"
                                rel="noreferrer"
                                className="border border-[#5d6948]/25 bg-white/60 px-8 py-4 text-[10px] tracking-[0.25em] text-[#20231f] uppercase transition duration-300 hover:-translate-y-1 hover:border-[#5d6948] hover:bg-white"
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
