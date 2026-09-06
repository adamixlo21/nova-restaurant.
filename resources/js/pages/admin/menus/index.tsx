import { Head, Link, router } from '@inertiajs/react';
import AdminSidebar from '@/components/AdminSidebar';

interface Menu {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    sort_order: number;
    categories_count: number;
}

interface Props {
    menus: Menu[];
}

export default function Index({ menus }: Props) {
    function deleteMenu(menu: Menu) {
        if (confirm(`Weet je zeker dat je "${menu.name}" wilt verwijderen?`)) {
            router.delete(`/admin/menus/${menu.id}`);
        }
    }

    return (
        <>
            <Head title="Menu's beheren" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                            <Link
                                href="/dashboard"
                                className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                            >
                                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                        ←
                                    </span>
                                Terug naar dashboard
                            </Link>
                            <div>
                                <p className="text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                    Admin · Menu's
                                </p>

                                <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                                    Menu's
                                </h1>

                                <p className="mt-3 max-w-xl text-sm leading-6 text-[#20231f]/50">
                                    Beheer de verschillende kaarten van
                                    Brasserie De Bank, zoals lunch, diner,
                                    drank, wijn en tafelkaart.
                                </p>
                            </div>

                            <Link
                                href="/admin/menus/create"
                                className="w-fit bg-[#20231f] px-6 py-4 text-[10px] tracking-[0.22em] text-[#f7f4ee] uppercase transition hover:bg-[#5d6948]"
                            >
                                Nieuw menu
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mb-10 grid gap-4 sm:grid-cols-2">
                            <div className="border border-black/10 bg-white p-6">
                                <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
                                    Totaal menu's
                                </p>

                                <p className="mt-2 font-serif text-4xl">
                                    {menus.length}
                                </p>
                            </div>

                            <div className="border border-black/10 bg-white p-6">
                                <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
                                    Totaal categorieën
                                </p>

                                <p className="mt-2 font-serif text-4xl text-[#5d6948]">
                                    {menus.reduce(
                                        (total, menu) =>
                                            total + menu.categories_count,
                                        0,
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Content */}
                        {menus.length === 0 ? (
                            <div className="border border-black/10 bg-white px-6 py-20 text-center">
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Nog leeg
                                </p>

                                <h2 className="mt-4 font-serif text-3xl">
                                    Nog geen menu's
                                </h2>

                                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#20231f]/50">
                                    Maak het eerste menu aan om categorieën en
                                    gerechten aan toe te voegen.
                                </p>

                                <Link
                                    href="/admin/menus/create"
                                    className="mt-7 inline-flex bg-[#20231f] px-6 py-4 text-[10px] tracking-[0.22em] text-[#f7f4ee] uppercase transition hover:bg-[#5d6948]"
                                >
                                    Eerste menu toevoegen
                                </Link>
                            </div>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {menus.map((menu) => (
                                    <article
                                        key={menu.id}
                                        className="group flex min-h-[300px] flex-col justify-between border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(32,35,31,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#5d6948]/35 hover:shadow-[0_20px_60px_rgba(32,35,31,0.08)]"
                                    >
                                        <div>
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="text-[9px] tracking-[0.28em] text-[#5d6948] uppercase">
                                                        Menu
                                                    </p>

                                                    <h2 className="mt-3 font-serif text-3xl leading-tight">
                                                        {menu.name}
                                                    </h2>
                                                </div>

                                                <span className="bg-[#f7f4ee] px-3 py-2 text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                                    Volgorde {menu.sort_order}
                                                </span>
                                            </div>

                                            {menu.description && (
                                                <p className="mt-5 text-sm leading-7 text-[#20231f]/50">
                                                    {menu.description}
                                                </p>
                                            )}

                                            <div className="mt-7 border-t border-black/10 pt-5">
                                                <p className="text-[9px] tracking-[0.22em] text-[#20231f]/35 uppercase">
                                                    Categorieën
                                                </p>

                                                <p className="mt-2 font-serif text-3xl">
                                                    {menu.categories_count}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">
                                            <Link
                                                href={`/admin/menus/${menu.id}/edit`}
                                                className="flex-1 border border-[#20231f]/15 px-4 py-3 text-center text-[9px] tracking-[0.2em] uppercase transition hover:border-[#20231f]"
                                            >
                                                Bewerken
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() => deleteMenu(menu)}
                                                className="border border-red-200 px-4 py-3 text-[9px] tracking-[0.2em] text-red-600 uppercase transition hover:bg-red-50"
                                            >
                                                Verwijderen
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
