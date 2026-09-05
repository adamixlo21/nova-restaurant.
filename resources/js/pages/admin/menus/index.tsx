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
    function deleteMenu(id: number) {
        if (confirm('Are you sure you want to delete this menus?')) {
            router.delete(`/admin/menus/${id}`);
        }
    }

    return (
        <>
            <Head title="Menus" />

            <div className="flex min-h-screen bg-[#f7f4ee]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-7xl">

                        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                                    Management
                                </p>

                                <h1 className="font-serif text-4xl text-[#20231f] sm:text-5xl">
                                    Menus
                                </h1>

                                <p className="mt-3 max-w-xl text-sm leading-6 text-[#20231f]/55">
                                    Manage Lunch, Dinner, Drinks, Wijn and other menu sections.
                                </p>
                            </div>

                            <Link
                                href="/admin/menus/create"
                                className="inline-flex items-center justify-center bg-[#20231f] px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                            >
                                Add Menu
                            </Link>
                        </div>

                        {menus.length === 0 ? (
                            <div className="border border-[#5d6948]/20 bg-white px-6 py-20 text-center">
                                <h2 className="font-serif text-2xl text-[#20231f]">
                                    No menus yet
                                </h2>

                                <p className="mt-3 text-sm text-[#20231f]/50">
                                    Create your first menu to get started.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {menus.map((menu) => (
                                    <article
                                        key={menu.id}
                                        className="border border-black/5 bg-white p-6 transition hover:-translate-y-1 hover:border-[#5d6948]/30 hover:shadow-lg"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5d6948]">
                                                    Menu
                                                </p>

                                                <h2 className="mt-2 font-serif text-3xl text-[#20231f]">
                                                    {menu.name}
                                                </h2>
                                            </div>

                                            <span className="text-xs text-[#20231f]/30">
                                                #{menu.sort_order}
                                            </span>
                                        </div>

                                        {menu.description && (
                                            <p className="mt-4 text-sm leading-6 text-[#20231f]/55">
                                                {menu.description}
                                            </p>
                                        )}

                                        <div className="mt-6 border-y border-black/5 py-4">
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#20231f]/35">
                                                Categories
                                            </p>

                                            <p className="mt-1 font-serif text-2xl text-[#20231f]">
                                                {menu.categories_count}
                                            </p>
                                        </div>

                                        <div className="mt-6 flex items-center justify-between">
                                            <Link
                                                href={`/admin/menus/${menu.id}/edit`}
                                                className="text-xs uppercase tracking-[0.15em] text-[#5d6948] transition hover:text-[#20231f]"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() => deleteMenu(menu.id)}
                                                className="text-xs uppercase tracking-[0.15em] text-red-500 transition hover:text-red-700"
                                            >
                                                Delete
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
