import { Head, Link, useForm } from '@inertiajs/react';
import AdminSidebar from '@/components/AdminSidebar';

interface Menu {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    sort_order: number;
}

interface Props {
    menu: Menu;
}

export default function Edit({ menu }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: menu.name,
        slug: menu.slug,
        description: menu.description ?? '',
        sort_order: menu.sort_order,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        put(`/admin/menus/${menu.id}`);
    }

    return (
        <>
            <Head title={`Edit ${menu.name}`} />

            <div className="flex min-h-screen bg-[#f7f4ee]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-3xl">

                        <div className="mb-10">
                            <Link
                                href="/admin/menus"
                                className="text-xs uppercase tracking-[0.2em] text-[#5d6948] transition hover:text-[#20231f]"
                            >
                                ← Back to Menus
                            </Link>

                            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                                Management
                            </p>

                            <h1 className="mt-3 font-serif text-4xl text-[#20231f] sm:text-5xl">
                                Edit Menu
                            </h1>
                        </div>

                        <form
                            onSubmit={submit}
                            className="border border-black/5 bg-white p-6 sm:p-8"
                        >
                            <div className="space-y-7">

                                <div>
                                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#20231f]/60 text-black">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 outline-none transition focus:border-[#5d6948] text-black"
                                    />

                                    {errors.name && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#20231f]/60 text-black">
                                        Slug
                                    </label>

                                    <input
                                        type="text"
                                        value={data.slug}
                                        onChange={(e) =>
                                            setData('slug', e.target.value)
                                        }
                                        className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 outline-none transition focus:border-[#5d6948] text-black"
                                    />

                                    <p className="mt-2 text-xs text-[#20231f]/40 text-black">
                                        Example: /menu/{data.slug || 'lunch'}
                                    </p>

                                    {errors.slug && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {errors.slug}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#20231f]/60 text-black">
                                        Description
                                    </label>

                                    <textarea
                                        value={data.description}
                                        onChange={(e) =>
                                            setData('description', e.target.value)
                                        }
                                        rows={4}
                                        className="w-full resize-none border border-black/10 bg-[#f7f4ee] px-4 py-3 outline-none transition focus:border-[#5d6948] text-black"
                                    />

                                    {errors.description && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#20231f]/60 text-black">
                                        Sort Order
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        value={data.sort_order}
                                        onChange={(e) =>
                                            setData(
                                                'sort_order',
                                                Number(e.target.value),
                                            )
                                        }
                                        className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 outline-none transition focus:border-[#5d6948] text-black"
                                    />

                                    {errors.sort_order && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {errors.sort_order}
                                        </p>
                                    )}
                                </div>

                                <div className="flex justify-end gap-4 border-t border-black/5 pt-6 text-black">
                                    <Link
                                        href="/admin/menus"
                                        className="px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#20231f]/60 transition hover:text-[#20231f] text-black "
                                    >
                                        Cancel
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-[#20231f] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#f7f4ee] transition hover:bg-[#5d6948] disabled:opacity-50 "
                                    >
                                        {processing ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </main>
            </div>
        </>
    );
}
