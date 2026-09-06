import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const possibilities = [
    {
        number: '01',
        title: 'Private dining',
        subtitle: 'Besloten genieten',
        image: 'https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362c6e6e698960f367cc8_DSC09155.avif',
        description:
            'Onze sfeervolle zaaltjes zijn te reserveren voor groepen vanaf 8 tot maximaal 20 personen. Ideaal voor een intiem diner met familie, vrienden of collega’s.',
        extra: 'We stellen graag een diner op maat samen, eventueel met bijpassende wijnen.',
        detail: '8 – 20 personen',
    },
    {
        number: '02',
        title: 'Vergaderen',
        subtitle: 'Zakelijk in een warme sfeer',
        image: 'https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362cd6f6a2dce4ffe568e_DSC08793.avif',
        description:
            'De Bank beschikt over twee sfeervolle zaaltjes voor vergaderingen en zakelijke bijeenkomsten. Een rustige omgeving, maar wel met de gastvrijheid van onze brasserie.',
        extra: 'Combineer je bijeenkomst bijvoorbeeld met koffie, lunch, high tea, een snack of diner.',
        detail: 'Tot 20 personen per zaal',
    },
    {
        number: '03',
        title: 'Feestelijke gelegenheden',
        subtitle: 'Samen iets bijzonders vieren',
        image: 'https://cdn.prod.website-files.com/684804488b7b526aefb97b88/68629b8a3fc5128c20bf8ac2_Mask%20group-1.avif',
        description:
            'Van een verjaardag of babyshower tot een bedrijfsborrel: onze ruimtes kunnen ook worden gebruikt voor feestelijke gelegenheden.',
        extra: 'Het borrelarrangement stemmen we volledig af op jouw wensen en gezelschap.',
        detail: 'Tot 50 personen per zaal',
    },
    {
        number: '04',
        title: 'Wijnproeverij',
        subtitle: 'Ontdek, proef & geniet',
        image: 'https://cdn.prod.website-files.com/684804488b7b526aefb97b88/6883754f448fcace0165e09f_food.avif',
        description:
            'Voor groepen organiseren we wijnproeverijen onder begeleiding van een professionele sommelier.',
        extra: 'Proef zorgvuldig geselecteerde wijnen met bijpassende hapjes in een ontspannen sfeer.',
        detail: '8 – 25 personen',
    },
];

export default function Mogelijkheden() {
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

    return (
        <>
            <Head title="Mogelijkheden" />

            <Navbar />

            <main className="overflow-hidden bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
                    <div className="pointer-events-none absolute top-0 -right-20 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute bottom-0 -left-20 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="possibilities-hero relative mx-auto max-w-5xl text-center"
                    >
                        <p className="possibilities-hero-label text-[10px] tracking-[0.4em] text-[#5d6948] uppercase">
                            Brasserie De Bank
                        </p>

                        <h1 className="possibilities-hero-title mt-5 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                            De mogelijkheden
                            <br />
                            <span className="text-[#5d6948] italic">
                                bij De Bank.
                            </span>
                        </h1>

                        <div className="possibilities-hero-line mx-auto mt-7 h-px w-16 bg-[#5d6948]/40" />

                        <p className="possibilities-hero-text mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                            Of het nu gaat om een vergadering, babyshower,
                            wijnproeverij of intiem diner: we combineren sfeer,
                            ruimte en persoonlijke aandacht om ieder moment
                            bijzonder te maken.
                        </p>
                    </div>
                </section>

                {/* INTRO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-10 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">
                        {[
                            ['Persoonlijk', 'Arrangement op maat'],
                            ['Sfeervol', 'Midden in Harderwijk'],
                            ['Gastvrij', 'De Bank denkt mee'],
                        ].map(([title, text], index) => (
                            <div
                                key={title}
                                data-reveal
                                style={{
                                    transitionDelay: `${index * 120}ms`,
                                }}
                                className={`possibility-intro-item ${
                                    index === 1
                                        ? 'sm:border-x sm:border-black/10'
                                        : ''
                                }`}
                            >
                                <p className="font-serif text-2xl">{title}</p>

                                <p className="mt-2 text-[9px] tracking-[0.22em] text-[#20231f]/35 uppercase">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* POSSIBILITIES */}
                <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute top-32 -left-20 h-44 w-44 rounded-full border border-[#5d6948]/8" />
                    <div className="pointer-events-none absolute -right-24 bottom-32 h-64 w-64 rounded-full border border-[#5d6948]/8" />

                    <div className="relative mx-auto max-w-7xl">
                        <div
                            data-reveal
                            className="possibilities-intro mb-16 max-w-3xl"
                        >
                            <div className="possibilities-intro-label flex items-center gap-4">
                                <span className="h-px w-8 bg-[#5d6948]/40" />

                                <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                    Voor elk moment
                                </p>
                            </div>

                            <h2 className="possibilities-intro-title mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                Een passende setting
                                <span className="text-[#5d6948] italic">
                                    {' '}
                                    voor jouw gezelschap.
                                </span>
                            </h2>

                            <p className="possibilities-intro-text mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                                Van klein en intiem tot feestelijk en zakelijk:
                                we denken graag mee over de invulling.
                            </p>
                        </div>

                        <div className="space-y-20 lg:space-y-28">
                            {possibilities.map((item, index) => (
                                <article
                                    key={item.title}
                                    className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
                                >
                                    {/* IMAGE */}
                                    <div
                                        data-reveal
                                        className={`possibility-image ${
                                            index % 2 === 1
                                                ? 'possibility-image-right lg:order-2'
                                                : 'possibility-image-left'
                                        }`}
                                    >
                                        <div className="group relative aspect-[4/3] overflow-hidden bg-[#ebe7dc]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full w-full scale-[1.04] object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.08]"
                                            />

                                            <div className="absolute inset-0 bg-black/5 transition duration-700 group-hover:bg-transparent" />

                                            <span className="absolute top-5 left-5 font-serif text-5xl text-white/25">
                                                {item.number}
                                            </span>
                                        </div>

                                        <div className="absolute right-4 bottom-4 border border-black/10 bg-[#f7f4ee]/95 px-5 py-4 shadow-[0_12px_35px_rgba(32,35,31,0.08)] backdrop-blur-sm sm:px-6">
                                            <p className="text-[8px] tracking-[0.22em] text-[#20231f]/35 uppercase">
                                                Geschikt voor
                                            </p>

                                            <p className="mt-1 font-serif text-lg text-[#5d6948]">
                                                {item.detail}
                                            </p>
                                        </div>
                                    </div>

                                    {/* TEXT */}
                                    <div
                                        data-reveal
                                        className={`possibility-content ${
                                            index % 2 === 1
                                                ? 'lg:order-1 lg:pr-10'
                                                : 'lg:pl-4'
                                        }`}
                                    >
                                        <div className="possibility-number flex items-center gap-5">
                                            <span className="font-serif text-5xl text-[#5d6948]/20">
                                                {item.number}
                                            </span>

                                            <div className="h-px w-12 bg-[#5d6948]/30" />
                                        </div>

                                        <p className="possibility-subtitle mt-5 text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                            {item.subtitle}
                                        </p>

                                        <h2 className="possibility-title mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                                            {item.title}
                                        </h2>

                                        <p className="possibility-description mt-6 max-w-xl text-sm leading-7 text-[#20231f]/65 sm:text-base">
                                            {item.description}
                                        </p>

                                        <p className="possibility-extra mt-4 max-w-xl text-sm leading-7 text-[#20231f]/50">
                                            {item.extra}
                                        </p>

                                        <Link
                                            href="/contacts"
                                            className="possibility-link group mt-8 inline-flex items-center gap-3 border-b border-[#5d6948]/40 pb-2 text-[10px] tracking-[0.25em] text-[#5d6948] uppercase"
                                        >
                                            Vraag naar de mogelijkheden
                                            <span className="transition-transform duration-300 group-hover:translate-x-2">
                                                →
                                            </span>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CINEMATIC BREAK */}
                <section className="possibilities-cinematic relative min-h-[52vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=90"
                        alt="Gezelschap bij Brasserie De Bank"
                        className="possibilities-cinematic-image absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />

                    <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-7xl items-end px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                        <div
                            data-reveal
                            className="possibilities-cinematic-content max-w-3xl text-white"
                        >
                            <p className="possibilities-cinematic-label text-[10px] tracking-[0.35em] text-white/60 uppercase">
                                Samen bij De Bank
                            </p>

                            <h2 className="possibilities-cinematic-title mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                                Jouw moment.
                                <br />
                                <span className="text-[#dce2ce] italic">
                                    Onze gastvrijheid.
                                </span>
                            </h2>
                        </div>
                    </div>
                </section>

                {/* EXTRA INFO */}
                <section className="bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    number: '01',
                                    title: 'Op maat',
                                    text: 'We denken mee over eten, drinken, planning en de indeling van de ruimte.',
                                },
                                {
                                    number: '02',
                                    title: 'Persoonlijk contact',
                                    text: 'Samen bespreken we wat past bij jouw moment en gezelschap.',
                                },
                                {
                                    number: '03',
                                    title: 'Gastvrij geregeld',
                                    text: 'Op de dag zelf zorgen wij dat alles klaarstaat zodat jij kunt genieten.',
                                },
                            ].map((item, index) => (
                                <div
                                    key={item.number}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 120}ms`,
                                    }}
                                    className={`possibility-info-card group relative overflow-hidden border border-black/10 p-8 transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(32,35,31,0.06)] ${
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

                {/* CTA */}
                <section className="relative overflow-hidden border-t border-[#5d6948]/10 bg-[#edf0e7] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full border border-[#5d6948]/10" />

                    <div className="pointer-events-none absolute -right-24 -bottom-28 h-80 w-80 rounded-full border border-[#5d6948]/10" />

                    <div
                        data-reveal
                        className="possibilities-cta relative mx-auto max-w-4xl text-center"
                    >
                        <p className="possibilities-cta-label text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                            Interesse?
                        </p>

                        <h2 className="possibilities-cta-title mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Samen maken we er
                            <br />
                            <span className="text-[#5d6948] italic">
                                iets moois van.
                            </span>
                        </h2>

                        <p className="possibilities-cta-text mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Vertel ons wat je in gedachten hebt en we kijken
                            graag samen naar een passende invulling.
                        </p>

                        <div className="possibilities-cta-buttons mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contacts"
                                className="group inline-flex items-center gap-3 bg-[#5d6948] px-8 py-4 text-[10px] tracking-[0.25em] text-white uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#4f5a3d]"
                            >
                                Neem contact op
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <a
                                href="tel:0341472582"
                                className="border border-[#5d6948]/30 bg-white/60 px-8 py-4 text-[10px] tracking-[0.25em] text-[#20231f] uppercase transition duration-300 hover:-translate-y-1 hover:border-[#5d6948] hover:bg-white"
                            >
                                Bel 0341 - 472 582
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
