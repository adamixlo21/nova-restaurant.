import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Locatie() {
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

    const gallery = [
        {
            image: 'https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362c6e6e698960f367cc8_DSC09155.avif',
            alt: 'Sfeer bij Brasserie De Bank',
        },
        {
            image: 'https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362cd6f6a2dce4ffe568e_DSC08793.avif',
            alt: 'Interieur Brasserie De Bank',
        },
        {
            image: 'https://cdn.prod.website-files.com/684804488b7b526aefb97b88/68629b8a3fc5128c20bf8ac2_Mask%20group-1.avif',
            alt: 'Brasserie De Bank',
        },
    ];

    return (
        <>
            <Head title="Locatie" />

            <Navbar />

            <main className="overflow-hidden bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
                    <div className="pointer-events-none absolute top-10 -right-24 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute bottom-0 -left-20 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <span className="pointer-events-none absolute right-0 -bottom-20 hidden font-serif text-[260px] leading-none text-[#5d6948]/[0.035] lg:block">
                        H
                    </span>

                    <div
                        data-reveal
                        className="location-hero relative mx-auto max-w-5xl text-center"
                    >
                        <div className="location-hero-label flex items-center justify-center gap-4">
                            <span className="h-px w-8 bg-[#5d6948]/40" />

                            <p className="text-[10px] tracking-[0.4em] text-[#5d6948] uppercase">
                                Brasserie De Bank
                            </p>

                            <span className="h-px w-8 bg-[#5d6948]/40" />
                        </div>

                        <h1 className="location-hero-title mt-5 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                            Midden in
                            <br />
                            <span className="text-[#5d6948] italic">
                                Harderwijk.
                            </span>
                        </h1>

                        <div className="location-hero-line mx-auto mt-7 h-px w-16 bg-[#5d6948]/40" />

                        <p className="location-hero-text mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                            Je vindt Brasserie De Bank aan de Smeepoortstraat,
                            midden in Harderwijk. Kom langs voor koffie, lunch,
                            diner, een borrel of een goed glas wijn.
                        </p>
                    </div>
                </section>

                {/* INTRO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-10 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">
                        {[
                            ['Centraal', 'Midden in Harderwijk'],
                            ['Gastvrij', 'Voor ieder moment'],
                            ['Bereikbaar', 'Plan eenvoudig je route'],
                        ].map(([title, subtitle], index) => (
                            <div
                                key={title}
                                data-reveal
                                style={{
                                    transitionDelay: `${index * 120}ms`,
                                }}
                                className={`location-strip-item ${
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

                {/* INFO + IMAGE */}
                <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute top-20 -left-24 h-52 w-52 rounded-full border border-[#5d6948]/8" />

                    <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                        {/* INFO */}
                        <div
                            data-reveal
                            className="location-info border border-black/10 bg-[#f7f4ee] p-8 sm:p-10 lg:p-12"
                        >
                            <div className="location-info-label flex items-center gap-4">
                                <span className="h-px w-8 bg-[#5d6948]/40" />

                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Contact & locatie
                                </p>
                            </div>

                            <h2 className="location-info-title mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                                Kom gezellig langs.
                            </h2>

                            <p className="location-info-text mt-5 max-w-md text-sm leading-7 text-[#20231f]/55">
                                Voor koffie, lunch, diner of een goed glas wijn.
                                Je bent van harte welkom bij De Bank.
                            </p>

                            <div className="location-info-details mt-10 space-y-8 border-t border-black/10 pt-8">
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
                            </div>

                            <div className="location-info-buttons mt-10 flex flex-wrap gap-3">
                                <a
                                    href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-3 bg-[#5d6948] px-6 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d]"
                                >
                                    Plan je route
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>

                                <Link
                                    href="/reservation"
                                    className="border border-[#5d6948]/25 bg-white/50 px-6 py-4 text-[10px] tracking-[0.22em] text-[#20231f] uppercase transition duration-300 hover:-translate-y-1 hover:border-[#5d6948] hover:bg-white"
                                >
                                    Reserveren
                                </Link>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div
                            data-reveal
                            className="location-main-image group relative min-h-[520px] overflow-hidden bg-[#ebe7dc]"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362c6e6e698960f367cc8_DSC09155.avif"
                                alt="Brasserie De Bank in Harderwijk"
                                className="location-main-image-photo absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.06]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                            <div className="absolute bottom-5 left-5 border border-black/10 bg-[#f7f4ee]/95 px-4 py-3 backdrop-blur-sm sm:bottom-7 sm:left-7">
                                <p className="text-[8px] tracking-[0.22em] text-[#20231f]/35 uppercase">
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
                <section className="relative bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div
                            data-reveal
                            className="location-map-header mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
                        >
                            <div>
                                <div className="location-map-label flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#5d6948]/40" />

                                    <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                        Route
                                    </p>
                                </div>

                                <h2 className="location-map-title mt-4 font-serif text-4xl sm:text-5xl">
                                    Zo vind je ons
                                </h2>

                                <p className="location-map-text mt-4 max-w-xl text-sm leading-7 text-[#20231f]/55">
                                    Brasserie De Bank ligt aan de
                                    Smeepoortstraat 1 in Harderwijk.
                                </p>
                            </div>

                            <a
                                href="https://www.google.com/maps/place/Smeepoortstraat+1,+3841+EG+Harderwijk"
                                target="_blank"
                                rel="noreferrer"
                                className="location-map-link group inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                            >
                                Open in Google Maps
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>

                        <div
                            data-reveal
                            className="location-map-frame overflow-hidden border border-black/10 bg-[#ebe7dc]"
                        >
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
                        <div
                            data-reveal
                            className="location-gallery-header mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
                        >
                            <div>
                                <p className="location-gallery-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                    Proef de sfeer
                                </p>

                                <h2 className="location-gallery-title mt-4 font-serif text-4xl sm:text-5xl">
                                    Beleef De Bank
                                </h2>
                            </div>

                            <p className="location-gallery-text max-w-md text-sm leading-7 text-[#20231f]/50">
                                Een warme plek voor koffie, lunch, diner en
                                gezellige momenten samen.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {gallery.map((item, index) => (
                                <div
                                    key={item.image}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 120}ms`,
                                    }}
                                    className="location-gallery-card group relative aspect-[4/5] overflow-hidden bg-[#d8d3c6]"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="h-full w-full scale-[1.03] object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.09]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                    <span className="absolute top-5 left-5 font-serif text-5xl text-white/20">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EXTRA INFO */}
                <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    number: '01',
                                    title: 'Lunch & diner',
                                    text: 'Van een ontspannen lunch tot een uitgebreide avond aan tafel.',
                                },
                                {
                                    number: '02',
                                    title: 'Borrel',
                                    text: 'Even bijkletsen met een hapje en een goed glas wijn.',
                                },
                                {
                                    number: '03',
                                    title: 'Reserveren',
                                    text: 'Zeker zijn van een tafel? Reserveer eenvoudig online.',
                                },
                            ].map((item, index) => (
                                <div
                                    key={item.number}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 120}ms`,
                                    }}
                                    className={`location-info-card group relative overflow-hidden border border-black/10 p-8 transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(32,35,31,0.06)] ${
                                        index === 1
                                            ? 'bg-[#ebe7dc]'
                                            : 'bg-[#f7f4ee]'
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

                {/* CTA */}
                <section className="relative overflow-hidden border-t border-[#5d6948]/10 bg-[#edf0e7] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="location-cta relative mx-auto max-w-4xl text-center"
                    >
                        <p className="location-cta-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                            Kom langs
                        </p>

                        <h2 className="location-cta-title mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl">
                            Zien we je
                            <span className="text-[#5d6948] italic">
                                {' '}
                                binnenkort?
                            </span>
                        </h2>

                        <p className="location-cta-text mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Reserveer eenvoudig online en kom genieten bij
                            Brasserie De Bank in Harderwijk.
                        </p>

                        <div className="location-cta-buttons mt-9 flex flex-wrap justify-center gap-4">
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
