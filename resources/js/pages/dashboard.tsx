import { Head, Link } from '@inertiajs/react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Dashboard() {
    const cards = [
        {
            eyebrow: 'Menu',
            title: 'Menu’s',
            description:
                'Beheer de verschillende kaarten zoals lunch, diner, drank en wijn.',
            href: '/admin/menus',
            action: 'Beheren',
        },
        {
            eyebrow: 'Menu',
            title: 'Categorieën',
            description:
                'Maak categorieën aan en bepaal hoe gerechten binnen de kaarten worden ingedeeld.',
            href: '/admin/categories',
            action: 'Beheren',
        },
        {
            eyebrow: 'Menu',
            title: 'Gerechten',
            description:
                'Voeg gerechten toe, pas prijzen aan en beheer beschikbaarheid en uitgelichte items.',
            href: '/admin/menu-items',
            action: 'Beheren',
        },
        {
            eyebrow: 'Reserveringen',
            title: 'Reserveringen',
            description:
                'Bekijk binnenkomende reserveringen en beheer de status van iedere aanvraag.',
            href: '/admin/reservations',
            action: 'Bekijken',
        },
        {
            eyebrow: 'Contact',
            title: 'Berichten',
            description:
                'Bekijk berichten die via het contactformulier op de website zijn verstuurd.',
            href: '/admin/contacts',
            action: 'Bekijken',
        },
        {
            eyebrow: 'Website',
            title: 'Actualiteiten',
            description:
                'Publiceer nieuws, evenementen en updates van Brasserie De Bank.',
            href: '/admin/actualiteiten',
            action: 'Beheren',
        },
        {
            eyebrow: 'Website',
            title: 'Vacatures',
            description:
                'Maak vacatures aan en beheer welke functies zichtbaar zijn op de website.',
            href: '/admin/vacancies',
            action: 'Beheren',
        },
    ];

    return (
        <>
            <Head title="Dashboard | Brasserie De Bank" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="mb-12">
                            <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Beheeromgeving
                            </p>

                            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                                Dashboard
                            </h1>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#20231f]/55">
                                Beheer de website, menukaarten, reserveringen,
                                berichten, actualiteiten en vacatures vanuit één
                                plek.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {cards.map((card) => (
                                <Link
                                    key={card.href}
                                    href={card.href}
                                    className="group flex min-h-[280px] flex-col justify-between border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#5d6948]/40 hover:shadow-[0_20px_60px_rgba(32,35,31,0.08)] sm:p-8"
                                >
                                    <div>
                                        <p className="text-[9px] tracking-[0.28em] text-[#5d6948] uppercase">
                                            {card.eyebrow}
                                        </p>

                                        <h2 className="mt-4 font-serif text-3xl leading-tight">
                                            {card.title}
                                        </h2>

                                        <p className="mt-4 text-sm leading-7 text-[#20231f]/50">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
                                        <span className="text-[9px] tracking-[0.2em] text-[#20231f]/70 uppercase">
                                            {card.action}
                                        </span>

                                        <span className="text-lg text-[#5d6948] transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Bottom quick links */}
                        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-[#20231f]/40">
                                Brasserie De Bank · Harderwijk
                            </p>

                            <Link
                                href="/"
                                className="text-[10px] tracking-[0.22em] text-[#5d6948] uppercase transition hover:text-[#20231f]"
                            >
                                Website bekijken →
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
