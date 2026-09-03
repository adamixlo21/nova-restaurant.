import { Head, Link, useForm } from '@inertiajs/react';
import AdminSidebar from "@/components/AdminSidebar";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
        sort_order: 0,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/admin/categories');
    }

    return (
        <>
            <Head title="Create Category" />
            <div className="flex min-h-screen bg-[#f7f4ee]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-10 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-7xl">


                        <div className="min-h-screen bg-[#f7f4ee] px-6 py-10 text-[#20231f]">
                            <div className="mx-auto max-w-2xl">

                                <div className="mb-10">
                                    <Link
                                        href="/admin/categories"
                                        className="text-xs uppercase tracking-[0.15em] text-[#5d6948]"
                                    >
                                        ← Back to Categories
                                    </Link>

                                    <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                                        Admin
                                    </p>

                                    <h1 className="mt-2 font-serif text-4xl">
                                        Create Category
                                    </h1>
                                </div>

                                <form
                                    onSubmit={submit}
                                    className="border border-black/10 bg-white p-8"
                                >
                                    <div className="mb-6">
                                        <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                            className="w-full border border-black/10 px-4 py-3 outline-none focus:border-[#5d6948]"
                                            placeholder="e.g. Burgers"
                                        />

                                        {errors.name && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-6">
                                        <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                            Slug
                                        </label>

                                        <input
                                            type="text"
                                            value={data.slug}
                                            onChange={(e) =>
                                                setData('slug', e.target.value)
                                            }
                                            className="w-full border border-black/10 px-4 py-3 outline-none focus:border-[#5d6948]"
                                            placeholder="e.g. burgers"
                                        />

                                        {errors.slug && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.slug}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-8">
                                        <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                            Sort Order
                                        </label>

                                        <input
                                            type="number"
                                            value={data.sort_order}
                                            onChange={(e) =>
                                                setData(
                                                    'sort_order',
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full border border-black/10 px-4 py-3 outline-none focus:border-[#5d6948]"
                                        />

                                        {errors.sort_order && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.sort_order}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-end gap-4">
                                        <Link
                                            href="/admin/categories"
                                            className="px-5 py-3 text-xs uppercase tracking-[0.15em] text-[#20231f]/60"
                                        >
                                            Cancel
                                        </Link>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="bg-[#20231f] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#f7f4ee] transition hover:bg-[#5d6948] disabled:opacity-50"
                                        >
                                            {processing ? 'Saving...' : 'Create Category'}
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </main>
            </div>

        </>
    );
}
