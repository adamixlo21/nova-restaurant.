import { Head, Link, useForm } from '@inertiajs/react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
        description: '',
        sort_order: 0,
    });

    function generateSlug(value: string) {
        return value
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }

    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/admin/menus');
    }

    const inputClass =
        'w-full border border-black/10 bg-[#f7f4ee] px-4 py-3.5 text-sm text-[#20231f] outline-none transition placeholder:text-[#20231f]/30 focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10';

    const labelClass =
        'mb-2 block text-[10px] uppercase tracking-[0.22em] text-[#20231f]/50';

    return (
        <>
            <Head title="Nieuw menu" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-4xl">
                        {/* Header */}
                        <div className="mb-10">
                            <Link
                                href="/admin/menus"
                                className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                            >
                                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                    ←
                                </span>
                                Terug naar menu's
                            </Link>

                            <p className="mt-7 text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Admin · Menu's
                            </p>

                            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                                Nieuw menu
                            </h1>

                            <p className="mt-3 max-w-xl text-sm leading-6 text-[#20231f]/50">
                                Voeg een nieuwe kaart toe, zoals lunch, diner,
                                drank, wijn of een speciale tafelkaart.
                            </p>
                        </div>

                        <form
                            onSubmit={submit}
                            className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-8"
                        >
                            <div className="space-y-7">
                                {/* Name */}
                                <div>
                                    <label className={labelClass}>Naam</label>

                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            setData('name', value);
                                            setData(
                                                'slug',
                                                generateSlug(value),
                                            );
                                        }}
                                        className={inputClass}
                                        placeholder="Bijv. Lunch"
                                    />

                                    {errors.name && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Slug */}
                                <div>
                                    <label className={labelClass}>Slug</label>

                                    <div className="flex overflow-hidden border border-black/10 bg-[#f7f4ee] focus-within:border-[#5d6948]">
                                        <span className="hidden items-center border-r border-black/10 px-4 text-xs text-[#20231f]/35 sm:flex">
                                            /menus/
                                        </span>

                                        <input
                                            type="text"
                                            value={data.slug}
                                            onChange={(e) =>
                                                setData('slug', e.target.value)
                                            }
                                            className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm outline-none"
                                            placeholder="lunch"
                                        />
                                    </div>

                                    <p className="mt-2 text-xs text-[#20231f]/35">
                                        Wordt gebruikt in de URL, bijvoorbeeld
                                        /menus/lunch.
                                    </p>

                                    {errors.slug && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.slug}
                                        </p>
                                    )}
                                </div>

                                {/* Description */}
                                <div>
                                    <label className={labelClass}>
                                        Omschrijving
                                    </label>

                                    <textarea
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                'description',
                                                e.target.value,
                                            )
                                        }
                                        rows={5}
                                        className={`${inputClass} resize-none leading-7`}
                                        placeholder="Bijv. Bekijk onze lunchkaart met verse gerechten en klassiekers."
                                    />

                                    {errors.description && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>

                                {/* Sort order */}
                                <div>
                                    <label className={labelClass}>
                                        Volgorde
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
                                        className={inputClass}
                                    />

                                    <p className="mt-2 text-xs leading-5 text-[#20231f]/35">
                                        Een lager nummer verschijnt eerder op de
                                        website.
                                    </p>

                                    {errors.sort_order && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.sort_order}
                                        </p>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col-reverse gap-3 border-t border-black/10 pt-6 sm:flex-row sm:justify-end">
                                    <Link
                                        href="/admin/menus"
                                        className="border border-[#20231f]/15 px-6 py-3.5 text-center text-[10px] tracking-[0.2em] text-[#20231f]/60 uppercase transition hover:border-[#20231f]"
                                    >
                                        Annuleren
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-[#20231f] px-7 py-3.5 text-[10px] tracking-[0.22em] text-[#f7f4ee] uppercase transition hover:bg-[#5d6948] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {processing
                                            ? 'Opslaan...'
                                            : 'Menu aanmaken'}
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
