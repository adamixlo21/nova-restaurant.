import { Head, Link, useForm } from '@inertiajs/react';
import AdminSidebar from '@/components/AdminSidebar';

interface Category {
    id: number;
    name: string;
    slug: string;
    sort_order: number;
}

interface Props {
    categories: Category[];
}

export default function Index({ categories }: Props) {
    const { delete: destroy } = useForm();

    function deleteCategory(category: Category) {
        if (
            confirm(`Weet je zeker dat je "${category.name}" wilt verwijderen?`)
        ) {
            destroy(`/admin/categories/${category.id}`);
        }
    }

    return (
        <>
            <Head title="Categorieën beheren" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <Link
                                    href="/dashboard"
                                    className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                                >
                                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                        ←
                                    </span>
                                    Terug naar dashboard
                                </Link>

                                <p className="mt-7 text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                    Admin · Categorieën
                                </p>

                                <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                                    Categorieën
                                </h1>

                                <p className="mt-3 max-w-xl text-sm leading-6 text-[#20231f]/50">
                                    Beheer de categorieën die gebruikt worden
                                    binnen de verschillende menukaarten.
                                </p>
                            </div>

                            <Link
                                href="/admin/categories/create"
                                className="w-fit bg-[#20231f] px-6 py-4 text-[10px] tracking-[0.22em] text-[#f7f4ee] uppercase transition hover:bg-[#5d6948]"
                            >
                                Nieuwe categorie
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mb-10 grid gap-4 sm:grid-cols-2">
                            <div className="border border-black/10 bg-white p-6">
                                <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
                                    Totaal categorieën
                                </p>

                                <p className="mt-2 font-serif text-4xl">
                                    {categories.length}
                                </p>
                            </div>

                            <div className="border border-black/10 bg-white p-6">
                                <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
                                    Laagste volgorde
                                </p>

                                <p className="mt-2 font-serif text-4xl text-[#5d6948]">
                                    {categories.length > 0
                                        ? Math.min(
                                              ...categories.map(
                                                  (category) =>
                                                      category.sort_order,
                                              ),
                                          )
                                        : 0}
                                </p>
                            </div>
                        </div>

                        {/* Cards */}
                        {categories.length > 0 ? (
                            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {categories.map((category) => (
                                    <article
                                        key={category.id}
                                        className="group flex min-h-[280px] flex-col justify-between border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(32,35,31,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#5d6948]/35 hover:shadow-[0_20px_60px_rgba(32,35,31,0.08)]"
                                    >
                                        <div>
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="text-[9px] tracking-[0.28em] text-[#5d6948] uppercase">
                                                        Categorie
                                                    </p>

                                                    <h2 className="mt-3 font-serif text-3xl leading-tight">
                                                        {category.name}
                                                    </h2>
                                                </div>

                                                <span className="bg-[#f7f4ee] px-3 py-2 text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                                    #{category.sort_order}
                                                </span>
                                            </div>

                                            <div className="mt-7 space-y-4 border-t border-black/10 pt-5">
                                                <div className="flex items-center justify-between gap-4">
                                                    <span className="text-[9px] tracking-[0.2em] text-[#20231f]/35 uppercase">
                                                        Slug
                                                    </span>

                                                    <span className="max-w-[60%] text-right text-sm break-all text-[#20231f]/65">
                                                        {category.slug}
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between gap-4">
                                                    <span className="text-[9px] tracking-[0.2em] text-[#20231f]/35 uppercase">
                                                        Volgorde
                                                    </span>

                                                    <span className="text-sm">
                                                        {category.sort_order}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex gap-3 border-t border-black/10 pt-5">
                                            <Link
                                                href={`/admin/categories/${category.id}/edit`}
                                                className="flex-1 border border-[#20231f]/15 px-4 py-3 text-center text-[9px] tracking-[0.2em] uppercase transition hover:border-[#20231f]"
                                            >
                                                Bewerken
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    deleteCategory(category)
                                                }
                                                className="flex-1 border border-red-200 px-4 py-3 text-[9px] tracking-[0.2em] text-red-600 uppercase transition hover:bg-red-50"
                                            >
                                                Verwijderen
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="border border-black/10 bg-white px-6 py-20 text-center">
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    Nog leeg
                                </p>

                                <h2 className="mt-4 font-serif text-3xl">
                                    Nog geen categorieën
                                </h2>

                                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#20231f]/50">
                                    Maak de eerste categorie aan om gerechten
                                    binnen een menu te organiseren.
                                </p>

                                <Link
                                    href="/admin/categories/create"
                                    className="mt-7 inline-flex bg-[#20231f] px-6 py-4 text-[10px] tracking-[0.22em] text-[#f7f4ee] uppercase transition hover:bg-[#5d6948]"
                                >
                                    Eerste categorie toevoegen
                                </Link>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
