
import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';

export default function About() {
    return (
        <>
            <Head title="About" />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">

                {/* Hero */}
                <section className="px-6 py-24 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-5xl text-center">

                        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                            Brasserie De Bank
                        </p>

                        <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                            A place to eat,
                            <br />
                            drink & enjoy.
                        </h1>

                        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#20231f]/65">
                            A welcoming brasserie where good food, good drinks
                            and good company come together. Whether you are
                            stopping by for lunch, dinner or a drink, there is
                            always a place for you at the table.
                        </p>

                    </div>
                </section>

                {/* Image / Introduction */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">

                        {/* Image placeholder */}
                        <div className="aspect-[4/3] overflow-hidden bg-[#d8d3c6]">
                            <div className="flex h-full items-center justify-center">
                                <span className="text-xs uppercase tracking-[0.25em] text-[#20231f]/40">
                                    Brasserie De Bank
                                </span>
                            </div>
                        </div>

                        {/* Text */}
                        <div>

                            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                                Our Story
                            </p>

                            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                                More than
                                <br />
                                just a meal.
                            </h2>

                            <div className="mt-8 space-y-5 text-sm leading-7 text-[#20231f]/65">
                                <p>
                                    Brasserie De Bank is a place where people can
                                    come together and enjoy good food in a relaxed
                                    and welcoming atmosphere.
                                </p>

                                <p>
                                    From a casual lunch with friends to a relaxed
                                    dinner or an evening drink, our goal is to make
                                    every visit comfortable, enjoyable and worth
                                    coming back for.
                                </p>

                                <p>
                                    We believe that a good brasserie is not only
                                    about what is on the plate. It is about the
                                    atmosphere, the people around the table and
                                    the moments shared together.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

                {/* Experience */}
                <section className="px-6 py-20 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-6xl">

                        <div className="mx-auto mb-14 max-w-2xl text-center">

                            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                                The Experience
                            </p>

                            <h2 className="font-serif text-4xl sm:text-5xl">
                                Come as you are.
                            </h2>

                            <p className="mt-6 text-sm leading-7 text-[#20231f]/60">
                                Whether you are looking for something to eat,
                                somewhere to meet or simply a place to relax,
                                Brasserie De Bank is a place to slow down and
                                enjoy the moment.
                            </p>

                        </div>

                        <div className="grid gap-6 md:grid-cols-3">

                            {/* Lunch */}
                            <div className="border border-[#5d6948]/20 bg-white p-8 sm:p-10">

                                <p className="text-xs uppercase tracking-[0.2em] text-[#5d6948]">
                                    01
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Lunch
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#20231f]/60">
                                    Take a break and enjoy a relaxed lunch with
                                    something fresh and delicious from our menu.
                                </p>

                            </div>

                            {/* Dinner */}
                            <div className="border border-[#5d6948]/20 bg-white p-8 sm:p-10">

                                <p className="text-xs uppercase tracking-[0.2em] text-[#5d6948]">
                                    02
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Dinner
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#20231f]/60">
                                    Sit down, take your time and enjoy an evening
                                    with good food and good company.
                                </p>

                            </div>

                            {/* Drinks */}
                            <div className="border border-[#5d6948]/20 bg-white p-8 sm:p-10">

                                <p className="text-xs uppercase tracking-[0.2em] text-[#5d6948]">
                                    03
                                </p>

                                <h3 className="mt-5 font-serif text-3xl">
                                    Drinks
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#20231f]/60">
                                    Meet up for a drink, enjoy the atmosphere and
                                    make yourself comfortable.
                                </p>

                            </div>

                        </div>

                    </div>
                </section>

                {/* Closing section */}
                <section className="border-t border-black/5 bg-[#20231f] px-6 py-24 text-[#f7f4ee] sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-4xl text-center">

                        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#aeb69b]">
                            Welcome to Brasserie De Bank
                        </p>

                        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                            Good food is better
                            <br />
                            when shared.
                        </h2>

                        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#f7f4ee]/60">
                            Come by and discover the atmosphere for yourself.
                            We look forward to welcoming you.
                        </p>

                    </div>
                </section>

            </main>
        </>
    );
}
