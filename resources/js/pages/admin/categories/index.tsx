import { Head, Link, useForm } from '@inertiajs/react';
import AdminSidebar from "@/components/AdminSidebar";

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

    function deleteCategory(id: number) {
        if (confirm('Are you sure you want to delete this category?')) {
            destroy(`/admin/categories/${id}`);
        }
    }


    return (
        <>
            <Head title="Categories" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-10 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="min-h-screen bg-[#f7f4ee] px-4 py-8 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-7xl">

                                {/* Back */}
                                <Link
                                    href="/dashboard"
                                    className="text-xs uppercase tracking-[0.15em] text-[#5d6948]"
                                >
                                    ← Back to Dashboard
                                </Link>

                                {/* Page heading */}
                                <div className="mb-10 mt-6 flex items-end justify-between gap-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.35em] text-[#5d6948]">
                                            Admin
                                        </p>

                                        <h1 className="mt-3 font-serif text-4xl text-[#20231f] sm:text-5xl">
                                            Categories
                                        </h1>

                                        <p className="mt-3 text-sm text-[#20231f]/60">
                                            Manage the categories used throughout the menu.
                                        </p>
                                    </div>

                                    <Link
                                        href="/admin/categories/create"
                                        className="shrink-0 bg-[#20231f] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                                    >
                                        Add Category
                                    </Link>
                                </div>

                                {/* Category cards */}
                                {categories.length > 0 ? (
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {categories.map((category) => (
                                            <div
                                                key={category.id}
                                                className="group border border-[#5d6948]/20 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5d6948]/40 hover:shadow-lg"
                                            >
                                                {/* Top */}
                                                <div>
                                                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                                        Category
                                                    </p>

                                                    <h2 className="mt-2 font-serif text-2xl text-[#20231f]">
                                                        {category.name}
                                                    </h2>
                                                </div>

                                                {/* Divider */}
                                                <div className="my-6 border-t border-[#5d6948]/10" />

                                                {/* Information */}
                                                <div className="space-y-4">

                                                    <div className="flex items-center justify-between">
                                        <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                            Slug
                                        </span>

                                                        <span className="text-sm text-[#20231f]/70">
                                            {category.slug}
                                        </span>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                        <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                            Order
                                        </span>

                                                        <span className="text-sm text-[#20231f]">
                                            {category.sort_order}
                                        </span>
                                                    </div>

                                                </div>

                                                {/* Actions */}
                                                <div className="mt-6 flex gap-3">

                                                    <Link
                                                        href={`/admin/categories/${category.id}/edit`}
                                                        className="flex-1 border border-[#20231f] px-4 py-3 text-center text-xs uppercase tracking-[0.15em] text-[#20231f] transition hover:bg-[#20231f] hover:text-[#f7f4ee]"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            deleteCategory(category.id)
                                                        }
                                                        className="flex-1 border border-red-600 px-4 py-3 text-xs uppercase tracking-[0.15em] text-red-600 transition hover:bg-red-600 hover:text-white"
                                                    >
                                                        Delete
                                                    </button>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="border border-[#5d6948]/20 bg-white px-6 py-16 text-center">
                                        <p className="font-serif text-2xl text-[#20231f]">
                                            No categories yet
                                        </p>

                                        <p className="mt-2 text-sm text-[#20231f]/50">
                                            Create your first menu category.
                                        </p>

                                        <Link
                                            href="/admin/categories/create"
                                            className="mt-6 inline-block bg-[#20231f] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                                        >
                                            Add Category
                                        </Link>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </main>            </div>
        </>

    );
}
