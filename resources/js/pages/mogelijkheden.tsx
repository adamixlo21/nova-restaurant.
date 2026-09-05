import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const possibilities = [
    {
        number: '01',
        title: 'Private dining',
        subtitle: 'Besloten genieten',
        image:
            'https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362c6e6e698960f367cc8_DSC09155.avif',
        description:
            'Onze sfeervolle zaaltjes zijn te reserveren voor groepen vanaf 8 tot maximaal 20 personen. Ideaal voor een intiem diner met familie, vrienden of collega’s.',
        extra:
            'We stellen graag een diner op maat samen, eventueel met bijpassende wijnen.',
        detail: '8 – 20 personen',
    },
    {
        number: '02',
        title: 'Vergaderen',
        subtitle: 'Zakelijk in een warme sfeer',
        image:
            'https://cdn.prod.website-files.com/684804488b7b526aefb97b88/688362cd6f6a2dce4ffe568e_DSC08793.avif',
        description:
            'De Bank beschikt over twee sfeervolle zaaltjes voor vergaderingen en zakelijke bijeenkomsten. Een rustige omgeving, maar wel met de gastvrijheid van onze brasserie.',
        extra:
            'Combineer je bijeenkomst bijvoorbeeld met koffie, lunch, high tea, een snack of diner.',
        detail: 'Tot 20 personen per zaal',
    },
    {
        number: '03',
        title: 'Feestelijke gelegenheden',
        subtitle: 'Samen iets bijzonders vieren',
        image:
            'https://cdn.prod.website-files.com/684804488b7b526aefb97b88/68629b8a3fc5128c20bf8ac2_Mask%20group-1.avif',
        description:
            'Van een verjaardag of babyshower tot een bedrijfsborrel: onze ruimtes kunnen ook worden gebruikt voor feestelijke gelegenheden.',
        extra:
            'Het borrelarrangement stemmen we volledig af op jouw wensen en gezelschap.',
        detail: 'Tot 50 personen per zaal',
    },
    {
        number: '04',
        title: 'Wijnproeverij',
        subtitle: 'Ontdek, proef & geniet',
        image:
            'https://cdn.prod.website-files.com/684804488b7b526aefb97b88/6883754f448fcace0165e09f_food.avif',
        description:
            'Voor groepen organiseren we wijnproeverijen onder begeleiding van een professionele sommelier.',
        extra:
            'Proef zorgvuldig geselecteerde wijnen met bijpassende hapjes in een ontspannen sfeer.',
        detail: '8 – 25 personen',
    },
];

export default function Mogelijkheden() {
    return (
        <>
            <Head title="Mogelijkheden" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">

                {/* Hero */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
                    <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full border border-[#5d6948]/10" />

                    <div className="mx-auto max-w-5xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#5d6948]">
                            Brasserie De Bank
                        </p>

                        <h1 className="mt-5 font-serif text-5xl leading-none tracking-tight sm:text-6xl lg:text-7xl">
                            De mogelijkheden
                            <br />
                            <span className="italic text-[#5d6948]">
                                bij De Bank.
                            </span>
                        </h1>

                        <div className="mx-auto mt-7 h-px w-16 bg-[#5d6948]/40" />

                        <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/60 sm:text-base sm:leading-8">
                            Of het nu gaat om een vergadering, babyshower,
                            wijnproeverij of intiem diner: we combineren sfeer,
                            ruimte en persoonlijke aandacht om ieder moment
                            bijzonder te maken.
                        </p>
                    </div>
                </section>

                {/* Possibilities */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl space-y-20 lg:space-y-28">
                        {possibilities.map((item, index) => (
                            <article
                                key={item.title}
                                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
                            >
                                {/* Image */}
                                <div
                                    className={`relative ${
                                        index % 2 === 1
                                            ? 'lg:order-2'
                                            : ''
                                    }`}
                                >
                                    <div className="aspect-[4/3] overflow-hidden bg-[#d8d3c6]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                                        />
                                    </div>

                                    <div className="absolute bottom-0 right-0 bg-[#20231f] px-5 py-4 text-[#f7f4ee] sm:px-6">
                                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#f7f4ee]/50">
                                            Geschikt voor
                                        </p>

                                        <p className="mt-1 font-serif text-lg">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>

                                {/* Text */}
                                <div
                                    className={
                                        index % 2 === 1
                                            ? 'lg:order-1 lg:pr-10'
                                            : 'lg:pl-4'
                                    }
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="font-serif text-5xl text-[#5d6948]/20">
                                            {item.number}
                                        </span>

                                        <div className="h-px w-12 bg-[#5d6948]/30" />
                                    </div>

                                    <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                        {item.subtitle}
                                    </p>

                                    <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                                        {item.title}
                                    </h2>

                                    <p className="mt-6 max-w-xl text-sm leading-7 text-[#20231f]/65 sm:text-base">
                                        {item.description}
                                    </p>

                                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#20231f]/50">
                                        {item.extra}
                                    </p>

                                    <Link
                                        href="/contacts"
                                        className="group mt-8 inline-flex items-center gap-3 border-b border-[#5d6948]/40 pb-2 text-[10px] uppercase tracking-[0.25em] text-[#5d6948]"
                                    >
                                        Vraag naar de mogelijkheden

                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Small statement */}
                <section className="bg-[#f7f4ee] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-10 border-y border-[#5d6948]/15 py-12 sm:grid-cols-3 sm:text-center">
                            <div>
                                <p className="font-serif text-3xl">
                                    Persoonlijk
                                </p>

                                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#20231f]/40">
                                    Arrangement op maat
                                </p>
                            </div>

                            <div className="sm:border-x sm:border-[#5d6948]/15">
                                <p className="font-serif text-3xl">
                                    Sfeervol
                                </p>

                                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#20231f]/40">
                                    Midden in Harderwijk
                                </p>
                            </div>

                            <div>
                                <p className="font-serif text-3xl">
                                    Gastvrij
                                </p>

                                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#20231f]/40">
                                    De Bank denkt mee
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[#5d6948] px-6 py-24 text-[#f7f4ee] sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#f7f4ee]/60">
                            Interesse?
                        </p>

                        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Samen maken we er
                            <br />
                            iets moois van.
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#f7f4ee]/70 sm:text-base">
                            Vertel ons wat je in gedachten hebt en we kijken
                            graag samen naar een passende invulling.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contacts"
                                className="bg-[#f7f4ee] px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-[#20231f] transition hover:bg-white"
                            >
                                Neem contact op
                            </Link>

                            <a
                                href="tel:0341472582"
                                className="border border-[#f7f4ee]/50 px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-[#f7f4ee] transition hover:border-white"
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
