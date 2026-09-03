
import { Head, Link } from '@inertiajs/react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Dashboard() {
    return (
        <>
            <Head title="Admin Dashboard" />

            <div className="flex min-h-screen bg-[#f7f4ee]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-10 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-7xl">


                        <main className="min-h-screen bg-[#f7f4ee] px-4 py-28 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-7xl">

                                {/* Header */}
                                <div className="mb-12">
                                    <p className="text-xs uppercase tracking-[0.35em] text-[#5d6948]">
                                        Admin
                                    </p>

                                    <h1 className="mt-3 font-serif text-4xl text-[#20231f] sm:text-5xl">
                                        Dashboard
                                    </h1>

                                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#20231f]/60">
                                        Manage the restaurant, menu and incoming
                                        reservations from one place.
                                    </p>
                                </div>

                                {/* Admin sections */}
                                <div className="grid gap-6 md:grid-cols-3">

                                    {/* Categories */}
                                    <Link
                                        href="/admin/categories"
                                        className="group border border-[#5d6948]/20 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#5d6948]/40 hover:shadow-lg"
                                    >
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                            Menu
                                        </p>

                                        <h2 className="mt-3 font-serif text-3xl text-[#20231f]">
                                            Categories
                                        </h2>

                                        <p className="mt-4 text-sm leading-6 text-[#20231f]/60">
                                            Create and manage the categories used
                                            throughout the menu.
                                        </p>

                                        <div className="mt-8 flex items-center justify-between border-t border-[#5d6948]/10 pt-5">
                                <span className="text-xs uppercase tracking-[0.15em] text-[#20231f]">
                                    Manage
                                </span>

                                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                                        </div>
                                    </Link>

                                    {/* Menu Items */}
                                    <Link
                                        href="/admin/menu-items"
                                        className="group border border-[#5d6948]/20 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#5d6948]/40 hover:shadow-lg"
                                    >
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                            Menu
                                        </p>

                                        <h2 className="mt-3 font-serif text-3xl text-[#20231f]">
                                            Menu Items
                                        </h2>

                                        <p className="mt-4 text-sm leading-6 text-[#20231f]/60">
                                            Add, edit and organize dishes that appear
                                            on the restaurant menu.
                                        </p>

                                        <div className="mt-8 flex items-center justify-between border-t border-[#5d6948]/10 pt-5">
                                <span className="text-xs uppercase tracking-[0.15em] text-[#20231f]">
                                    Manage
                                </span>

                                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                                        </div>
                                    </Link>

                                    {/* Reservations */}
                                    <Link
                                        href="/admin/reservations"
                                        className="group border border-[#5d6948]/20 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#5d6948]/40 hover:shadow-lg"
                                    >
                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                            Bookings
                                        </p>

                                        <h2 className="mt-3 font-serif text-3xl text-[#20231f]">
                                            Reservations
                                        </h2>

                                        <p className="mt-4 text-sm leading-6 text-[#20231f]/60">
                                            View incoming reservations and manage
                                            their status.
                                        </p>

                                        <div className="mt-8 flex items-center justify-between border-t border-[#5d6948]/10 pt-5">
                                <span className="text-xs uppercase tracking-[0.15em] text-[#20231f]">
                                    View
                                </span>

                                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </main>
                    </div>
                </main>
            </div>


        </>
    );
}
