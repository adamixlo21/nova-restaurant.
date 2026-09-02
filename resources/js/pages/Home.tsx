import Navbar from '@/components/Navbar';
import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <>
                <div className="min-h-screen bg-[#f7f4ee] text-[#20231f]">
                    <Navbar />
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
                                            <br />
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
                                    <div className="absolute inset-0 bg-black/10" />

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
                </div>
            </>
        </>
    );
}
