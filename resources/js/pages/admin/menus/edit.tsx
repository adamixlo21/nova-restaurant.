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
            <Head title="Nieuw menu aanmaken" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-5xl">
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

                            <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                                Nieuw menu aanmaken
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#20231f]/50">
                                Maak een nieuw menu aan voor bijvoorbeeld lunch,
                                diner, dranken, wijn of een speciale kaart.
                            </p>
                        </div>

                        <form
                            onSubmit={submit}
                            className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]"
                        >
                            {/* Main form */}
                            <div className="space-y-8">
                                <section className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-8">
                                    <div className="mb-7">
                                        <p className="text-[9px] tracking-[0.25em] text-[#5d6948] uppercase">
                                            Algemene informatie
                                        </p>

                                        <h2 className="mt-2 font-serif text-2xl">
                                            Menugegevens
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-[#20231f]/45">
                                            Geef het menu een duidelijke naam en
                                            omschrijving.
                                        </p>
                                    </div>

                                    <div className="space-y-7">
                                        {/* Name */}
                                        <div>
                                            <label className={labelClass}>
                                                Naam
                                            </label>

                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => {
                                                    const value =
                                                        e.target.value;

                                                    setData('name', value);
                                                    setData(
                                                        'slug',
                                                        generateSlug(value),
                                                    );
                                                }}
                                                className={inputClass}
                                                placeholder="Bijv. Lunch"
                                            />

                                            <p className="mt-2 text-xs leading-5 text-[#20231f]/35">
                                                De naam die bezoekers op de
                                                website zien.
                                            </p>

                                            {errors.name && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Slug */}
                                        <div>
                                            <label className={labelClass}>
                                                URL-slug
                                            </label>

                                            <div className="flex overflow-hidden border border-black/10 bg-[#f7f4ee] transition focus-within:border-[#5d6948] focus-within:ring-2 focus-within:ring-[#5d6948]/10">
                                                <span className="hidden items-center border-r border-black/10 px-4 text-xs text-[#20231f]/35 sm:flex">
                                                    /menus/
                                                </span>

                                                <input
                                                    type="text"
                                                    value={data.slug}
                                                    onChange={(e) =>
                                                        setData(
                                                            'slug',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm outline-none"
                                                    placeholder="lunch"
                                                />
                                            </div>

                                            <p className="mt-2 text-xs leading-5 text-[#20231f]/35">
                                                Wordt automatisch ingevuld op
                                                basis van de naam. Bijvoorbeeld:
                                                <span className="ml-1 font-medium text-[#5d6948]">
                                                    /menus/lunch
                                                </span>
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
                                                rows={6}
                                                className={`${inputClass} resize-none leading-7`}
                                                placeholder="Bijv. Bekijk onze lunchkaart met verse gerechten, klassiekers en seizoensspecials."
                                            />

                                            <p className="mt-2 text-xs leading-5 text-[#20231f]/35">
                                                Een korte introductie die
                                                bezoekers helpt begrijpen wat
                                                voor kaart dit is.
                                            </p>

                                            {errors.description && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </section>

                                {/* Sort order */}
                                <section className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-8">
                                    <div className="mb-7">
                                        <p className="text-[9px] tracking-[0.25em] text-[#5d6948] uppercase">
                                            Weergave
                                        </p>

                                        <h2 className="mt-2 font-serif text-2xl">
                                            Volgorde op de website
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-[#20231f]/45">
                                            Bepaal waar dit menu tussen de
                                            andere menu's verschijnt.
                                        </p>
                                    </div>

                                    <div className="max-w-xs">
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
                                            Een lager nummer verschijnt eerder
                                            op de website.
                                        </p>

                                        {errors.sort_order && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.sort_order}
                                            </p>
                                        )}
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar */}
                            <aside className="lg:sticky lg:top-8 lg:self-start">
                                <div className="border border-black/10 bg-[#20231f] p-6 text-[#f7f4ee]">
                                    <p className="text-[9px] tracking-[0.25em] text-white/40 uppercase">
                                        Nieuw menu
                                    </p>

                                    <h2 className="mt-3 font-serif text-2xl">
                                        {data.name || 'Naam van het menu'}
                                    </h2>

                                    <div className="mt-6 space-y-5 border-t border-white/10 pt-5">
                                        <div>
                                            <p className="text-[8px] tracking-[0.2em] text-white/35 uppercase">
                                                URL
                                            </p>

                                            <p className="mt-1 text-sm break-all text-white/70">
                                                /menus/{data.slug || 'slug'}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[8px] tracking-[0.2em] text-white/35 uppercase">
                                                Volgorde
                                            </p>

                                            <p className="mt-1 text-sm text-white/70">
                                                {data.sort_order}
                                            </p>
                                        </div>

                                        {data.description && (
                                            <div>
                                                <p className="text-[8px] tracking-[0.2em] text-white/35 uppercase">
                                                    Omschrijving
                                                </p>

                                                <p className="mt-1 line-clamp-4 text-sm leading-6 text-white/60">
                                                    {data.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-7 space-y-3">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full bg-[#5d6948] px-6 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition hover:bg-[#6c7954] disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {processing
                                                ? 'Menu opslaan...'
                                                : 'Menu aanmaken'}
                                        </button>

                                        <Link
                                            href="/admin/menus"
                                            className="block w-full border border-white/15 px-6 py-4 text-center text-[10px] tracking-[0.2em] text-white/60 uppercase transition hover:border-white/40 hover:text-white"
                                        >
                                            Annuleren
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-4 border border-black/10 bg-[#ebe7dc] p-5">
                                    <p className="text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                        Voorbeelden
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {[
                                            'Lunch',
                                            'Diner',
                                            'Dranken',
                                            'Wijn',
                                            'Tafelkaart',
                                        ].map((example) => (
                                            <button
                                                key={example}
                                                type="button"
                                                onClick={() => {
                                                    setData('name', example);
                                                    setData(
                                                        'slug',
                                                        generateSlug(example),
                                                    );
                                                }}
                                                className="border border-black/10 bg-white px-3 py-2 text-[9px] tracking-[0.15em] text-[#20231f]/60 uppercase transition hover:border-[#5d6948] hover:text-[#5d6948]"
                                            >
                                                {example}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
