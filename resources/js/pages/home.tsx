import Navbar from '@/components/Navbar';
import {Head, Link, usePage} from '@inertiajs/react';
import {dashboard, login} from '@/routes';
import {register} from '@/routes';

interface MenuItem {
    id: number;
    name: string;
    description: string | null;
    price: string;
    image: string | null;
    category: {
        id: number;
        name: string;
    };
}

interface Props {
    featuredDishes: MenuItem[];
}

export default function Home({featuredDishes}: Props) {
    const {auth} = usePage().props;

    return (
        <>
            <Head title="Home"/>
            <>
                <div className="min-h-screen bg-[#f7f4ee] text-[#20231f]">
                    <Navbar/>
                    {/* Hero */}
                    <main className="pt-20">
                        <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
                            <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 lg:grid-cols-2">

                                {/* Text */}
                                <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-0">
                                    <div className="max-w-xl">

                                        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#5d6948]">
                                            Mediterranean Kitchen
                                        </p>

                                        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                                            Taste the
                                            <br/>
                                            <span className="italic">
                                                Mediterranean.
                                            </span>
                                        </h1>

                                        <p className="mt-8 max-w-md text-base leading-7 text-[#20231f]/65">
                                            Fresh ingredients, honest flavours and
                                            Mediterranean traditions brought together
                                            in a warm and modern setting.
                                        </p>

                                        <div className="mt-10 flex flex-wrap items-center gap-4">
                                            <a
                                                href="/menu"
                                                className="bg-[#20231f] px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                                            >
                                                Explore Menu
                                            </a>

                                            <a
                                                href="/reservation"
                                                className="border border-[#20231f]/30 px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-[#20231f] transition hover:border-[#20231f] hover:bg-[#20231f] hover:text-[#f7f4ee]"
                                            >
                                                Reserve a Table
                                            </a>
                                        </div>

                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative min-h-[500px] lg:min-h-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
                                        alt="Mediterranean food served at a restaurant"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />

                                    {/* Image overlay */}
                                    <div className="absolute inset-0 bg-black/10"/>

                                    {/* Decorative text */}
                                    <div className="absolute bottom-8 left-8 hidden text-white sm:block">
                                        <p className="text-xs uppercase tracking-[0.3em]">
                                            Est. 2026
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </main>
                    {/* Featured Dishes */}
                    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">
                        <div className="mx-auto max-w-7xl">

                            <div className="mb-12 flex items-end justify-between">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#5d6948]">
                                        From our kitchen
                                    </p>

                                    <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                                        Featured Dishes
                                    </h2>
                                </div>

                                <a
                                    href="/menu"
                                    className="hidden text-xs uppercase tracking-[0.18em] text-[#5d6948] sm:block"
                                >
                                    View Full Menu →
                                </a>
                            </div>

                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                {featuredDishes.map((dish) => (
                                    <article key={dish.id}>

                                        {/* Image */}
                                        <div className="aspect-[4/3] overflow-hidden bg-[#f7f4ee]">
                                            {dish.image ? (
                                                <img
                                                    src={dish.image}
                                                    alt={dish.name}
                                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                                />
                                            ) : (
                                                <div
                                                    className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-[#20231f]/30">
                                                    No Image
                                                </div>
                                            )}
                                        </div>

                                        {/* Information */}
                                        <div className="pt-5">
                                            <div className="flex items-start justify-between gap-4">
                                                <h3 className="font-serif text-xl">
                                                    {dish.name}
                                                </h3>

                                                <span className="shrink-0 text-sm">
                                € {dish.price}
                            </span>
                                            </div>

                                            {dish.description && (
                                                <p className="mt-2 text-sm leading-6 text-[#20231f]/60">
                                                    {dish.description}
                                                </p>
                                            )}

                                            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#5d6948]">
                                                {dish.category.name}
                                            </p>
                                        </div>

                                    </article>
                                ))}
                            </div>

                            <div className="mt-10 sm:hidden">
                                <a
                                    href="/menu"
                                    className="text-xs uppercase tracking-[0.18em] text-[#5d6948]"
                                >
                                    View Full Menu →
                                </a>
                            </div>

                        </div>
                    </section>
                    {/* About */}
                    <section className="bg-[#f7f4ee] px-6 py-24 sm:px-10 lg:px-16">
                        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

                            <div>
                                <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#5d6948]">
                                    Our Story
                                </p>

                                <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                                    Simple food.
                                    <br/>
                                    Mediterranean soul.
                                </h2>

                                <p className="mt-6 max-w-xl text-sm leading-7 text-[#20231f]/60">
                                    We believe great food starts with fresh ingredients,
                                    traditional flavours and the people you share it with.
                                </p>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-[#20231f]/60">
                                    Our kitchen brings together the warmth and simplicity
                                    of Mediterranean cooking, creating dishes made to be
                                    enjoyed slowly and shared together.
                                </p>

                                <Link
                                    href="/menu"
                                    className="mt-8 inline-block border-b border-[#5d6948] pb-1 text-xs uppercase tracking-[0.18em] text-[#5d6948]"
                                >
                                    Discover Our Menu →
                                </Link>
                            </div>

                            <div className="aspect-[4/3] overflow-hidden bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
                                    alt="Mediterranean restaurant table"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                        </div>
                    </section>
                    {/* Restaurant Atmosphere */}
                    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">
                        <div className="mx-auto max-w-7xl">
                            <div className="relative aspect-[16/7] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=80"
                                    alt="Mediterranean restaurant atmosphere"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-black/35"/>

                                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                                    <div className="text-white">
                                        <p className="text-xs uppercase tracking-[0.35em]">
                                            The NOVA experience
                                        </p>

                                        <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
                                            Good food.
                                            <br/>
                                            Good company.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Reservation CTA */}
                    <section className="bg-[#5d6948] px-6 py-24 text-[#f7f4ee] sm:px-10 lg:px-16">
                        <div className="mx-auto max-w-4xl text-center">

                            <p className="text-xs uppercase tracking-[0.35em] text-[#f7f4ee]/70">
                                Join us
                            </p>

                            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
                                A table is waiting.
                            </h2>

                            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#f7f4ee]/70">
                                Come together over fresh Mediterranean flavours,
                                warm hospitality and an evening worth remembering.
                            </p>

                            <Link
                                href="/reservation"
                                className="mt-8 inline-block border border-[#f7f4ee] px-8 py-4 text-xs uppercase tracking-[0.18em] transition hover:bg-[#f7f4ee] hover:text-[#5d6948]"
                            >
                                Reserve a Table
                            </Link>

                        </div>
                    </section>
                </div>
            </>
        </>
    );
}
