import { Head, Link } from '@inertiajs/react';
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
    return (
        <>
            <Head title="Mogelijkheden" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full border border-[#5d6948]/10" />
                    <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full border border-[#5d6948]/10" />

                    <div className="relative mx-auto max-w-5xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#5d6948]">
                            Brasserie De Bank
                        </p>

                        <h1 className="mt-5 font-serif text-5xl leading-none tracking-tight sm:text-6xl lg:text-7xl">
                            De mogelijkheden
                            <br />
                            <span className="text-[#5d6948] italic">
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

                {/* INTRO STRIP */}
                <section className="border-y border-black/5 bg-[#ebe7dc] px-6 py-9 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-5xl gap-6 text-center sm:grid-cols-3">
                        <div>
                            <p className="font-serif text-2xl">Persoonlijk</p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Arrangement op maat
                            </p>
                        </div>

                        <div className="sm:border-x sm:border-black/10">
                            <p className="font-serif text-2xl">Sfeervol</p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                Midden in Harderwijk
                            </p>
                        </div>

                        <div>
                            <p className="font-serif text-2xl">Gastvrij</p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                De Bank denkt mee
                            </p>
                        </div>
                    </div>
                </section>

                {/* POSSIBILITIES */}
                <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 max-w-3xl">
                            <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                Voor elk moment
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                Een passende setting
                                <span className="text-[#5d6948] italic">
                                    {' '}
                                    voor jouw gezelschap.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
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
                                    {/* Image */}
                                    <div
                                        className={`relative ${
                                            index % 2 === 1 ? 'lg:order-2' : ''
                                        }`}
                                    >
                                        <div className="aspect-[4/3] overflow-hidden bg-[#ebe7dc]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                                            />
                                        </div>

                                        <div className="absolute bottom-4 right-4 border border-black/10 bg-[#f7f4ee]/95 px-5 py-4 shadow-[0_12px_35px_rgba(32,35,31,0.08)] backdrop-blur-sm sm:px-6">
                                            <p className="text-[8px] uppercase tracking-[0.22em] text-[#20231f]/35">
                                                Geschikt voor
                                            </p>

                                            <p className="mt-1 font-serif text-lg text-[#5d6948]">
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
                                    Op maat
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    We denken mee over eten, drinken, planning en
                                    de indeling van de ruimte.
                                </p>
                            </div>

                            <div className="border border-black/10 bg-[#ebe7dc] p-8">
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    02
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Persoonlijk contact
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Samen bespreken we wat past bij jouw moment
                                    en gezelschap.
                                </p>
                            </div>

                            <div className="border border-black/10 bg-white p-8">
                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#5d6948]">
                                    03
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Gastvrij geregeld
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20231f]/55">
                                    Op de dag zelf zorgen wij dat alles klaarstaat
                                    zodat jij kunt genieten.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="border-t border-[#5d6948]/10 bg-[#edf0e7] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                            Interesse?
                        </p>

                        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Samen maken we er
                            <br />
                            <span className="text-[#5d6948] italic">
                                iets moois van.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/55 sm:text-base">
                            Vertel ons wat je in gedachten hebt en we kijken
                            graag samen naar een passende invulling.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contacts"
                                className="bg-[#5d6948] px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition hover:bg-[#4f5a3d]"
                            >
                                Neem contact op
                            </Link>

                            <a
                                href="tel:0341472582"
                                className="border border-[#5d6948]/30 bg-white/60 px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-[#20231f] transition hover:border-[#5d6948] hover:bg-white"
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
