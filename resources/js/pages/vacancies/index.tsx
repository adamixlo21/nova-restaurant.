import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Vacancy {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    contract_type: string | null;
    hours: string | null;
    location: string | null;
    image: string | null;
    published_at: string | null;
}

interface Props {
    vacancies: Vacancy[];
}

export default function Index({ vacancies }: Props) {
    return (
        <>
            <Head title="Vacatures | Brasserie De Bank" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">
                <section className="px-6 pt-28 pb-20 sm:px-10 sm:pt-32 lg:px-16 lg:pb-28">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                            Werken bij De Bank
                        </p>

                        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                            Vacatures
                            <span className="text-[#5d6948] italic">.</span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-sm leading-7 text-[#20231f]/55 sm:text-base sm:leading-8">
                            Zin om onderdeel te worden van Brasserie De Bank?
                            Bekijk onze openstaande functies en ontdek of er een
                            plek voor jou tussen zit.
                        </p>
                    </div>
                </section>

                <section className="border-t border-black/5 bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        {vacancies.length === 0 ? (
                            <div className="border border-black/10 bg-[#f7f4ee] px-6 py-20 text-center">
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Momenteel
                                </p>

                                <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                                    Geen openstaande vacatures
                                </h2>

                                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#20231f]/50">
                                    Op dit moment hebben we geen openstaande
                                    functies, maar een open sollicitatie is
                                    altijd welkom.
                                </p>

                                <a
                                    href="mailto:info@brasseriedebank.nl"
                                    className="mt-7 inline-flex bg-[#20231f] px-6 py-4 text-[10px] tracking-[0.22em] text-[#f7f4ee] uppercase transition hover:bg-[#5d6948]"
                                >
                                    Open sollicitatie
                                </a>
                            </div>
                        ) : (
                            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                                {vacancies.map((vacancy) => (
                                    <article
                                        key={vacancy.id}
                                        className="group overflow-hidden border border-black/10 bg-[#f7f4ee]"
                                    >
                                        <Link
                                            href={`/vacatures/${vacancy.slug}`}
                                            className="block"
                                        >
                                            <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe7dc]">
                                                {vacancy.image ? (
                                                    <img
                                                        src={`/storage/${vacancy.image}`}
                                                        alt={vacancy.title}
                                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center">
                                                        <span className="text-[9px] tracking-[0.25em] text-[#20231f]/25 uppercase">
                                                            Brasserie De Bank
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center bg-[#f7f4ee] text-[#5d6948] transition duration-300 group-hover:bg-[#20231f] group-hover:text-white">
                                                    →
                                                </div>
                                            </div>

                                            <div className="p-6 sm:p-7">
                                                <div className="flex flex-wrap gap-2">
                                                    {vacancy.contract_type && (
                                                        <span className="bg-white px-3 py-2 text-[8px] tracking-[0.18em] text-[#5d6948] uppercase">
                                                            {
                                                                vacancy.contract_type
                                                            }
                                                        </span>
                                                    )}

                                                    {vacancy.hours && (
                                                        <span className="bg-white px-3 py-2 text-[8px] tracking-[0.18em] text-[#20231f]/60 uppercase">
                                                            {vacancy.hours}
                                                        </span>
                                                    )}
                                                </div>

                                                <h2 className="mt-5 font-serif text-3xl leading-tight">
                                                    {vacancy.title}
                                                </h2>

                                                {vacancy.excerpt && (
                                                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#20231f]/50">
                                                        {vacancy.excerpt}
                                                    </p>
                                                )}

                                                {vacancy.location && (
                                                    <p className="mt-5 text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                                        {vacancy.location}
                                                    </p>
                                                )}

                                                <div className="mt-6 border-t border-black/10 pt-4 text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                                    Bekijk vacature
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                <section className="bg-[#5d6948] px-6 py-20 text-[#f7f4ee] sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-[10px] tracking-[0.3em] text-[#f7f4ee]/55 uppercase">
                                Open sollicitatie
                            </p>

                            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                                Staat jouw functie er niet tussen?
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#f7f4ee]/65">
                                Denk je dat je goed bij Brasserie De Bank past?
                                Stuur dan gerust een open sollicitatie.
                            </p>
                        </div>

                        <a
                            href="mailto:info@brasseriedebank.nl"
                            className="w-fit bg-[#20231f] px-7 py-4 text-[10px] tracking-[0.22em] text-[#f7f4ee] uppercase transition hover:bg-[#f7f4ee] hover:text-[#20231f]"
                        >
                            Solliciteer
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
