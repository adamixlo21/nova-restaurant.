import { Head, Link, useForm } from '@inertiajs/react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
        description: '',
        sort_order: 0,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/admin/menus');
    }

    return (
        <>
            <Head title="Add Menu" />

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
                                Add Menu
                            </h1>
                        </div>

                        <form
                            onSubmit={submit}
                            className="border border-black/5 bg-white p-6 sm:p-8"
                        >
                            <div className="space-y-7">

                                <div>
                                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#20231f]/60">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => {
                                            const name = e.target.value;

                                            setData((current) => ({
                                                ...current,
                                                name,
                                                slug: name
                                                    .toLowerCase()
                                                    .trim()
                                                    .replace(/[^a-z0-9]+/g, '-')
                                                    .replace(/^-+|-+$/g, ''),
                                            }));
                                        }}
                                        className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 outline-none transition focus:border-[#5d6948] text-black"
                                        placeholder="Lunch"
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
                                        placeholder="lunch"
                                    />

                                    <p className="mt-2 text-xs text-[#20231f]/40 text-black" >
                                        Used in the URL, for example /menu/lunch
                                    </p>
                                    <br/>

                                    {errors.slug && (
                                        <p className="mt-2 text-sm text-red-500 ">
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
                                        placeholder="Bekijk onze lunchkaart."
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

                                <div className="flex justify-end gap-4 border-t border-black/5 pt-6 ">
                                    <Link
                                        href="/admin/menus"
                                        className="px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#20231f]/60 transition hover:text-[#20231f]"
                                    >
                                        Cancel
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-[#20231f] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#f7f4ee] transition hover:bg-[#5d6948] disabled:opacity-50"
                                    >
                                        {processing ? 'Saving...' : 'Create Menu'}
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
