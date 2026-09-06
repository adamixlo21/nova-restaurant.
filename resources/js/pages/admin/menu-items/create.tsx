import { Head, Link, useForm } from '@inertiajs/react';
import AdminSidebar from '@/components/AdminSidebar';

interface Category {
    id: number;
    name: string;
}

interface Props {
    categories: Category[];
}

export default function Create({ categories }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        category_id: '',
        name: '',
        slug: '',
        description: '',

        price: '',
        price_text: '',
        prices: [] as {
            label: string;
            price: string;
        }[],
        image: null as File | null,
        is_available: true,
        is_featured: false,
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

        post('/admin/menu-items', {
            forceFormData: true,
        });
    }

    const inputClass =
        'w-full border border-black/10 bg-[#f7f4ee] px-4 py-3.5 text-sm text-[#20231f] outline-none transition placeholder:text-[#20231f]/30 focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10';

    const labelClass =
        'mb-2 block text-[10px] uppercase tracking-[0.22em] text-[#20231f]/50';

    return (
        <>
            <Head title="Nieuw gerecht" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-6xl">
                        {/* Header */}
                        <div className="mb-10">
                            <Link
                                href="/admin/menu-items"
                                className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                            >
                                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                    ←
                                </span>
                                Terug naar gerechten
                            </Link>

                            <p className="mt-7 text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                Admin · Gerechten
                            </p>

                            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                                Nieuw gerecht
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#20231f]/50">
                                Voeg een nieuw gerecht toe en koppel het aan de
                                juiste categorie. Stel prijzen, beschikbaarheid
                                en uitgelichte weergave in.
                            </p>
                        </div>

                        <form
                            onSubmit={submit}
                            className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]"
                        >
                            {/* LEFT */}
                            <div className="space-y-8">
                                {/* Basis */}
                                <section className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-8">
                                    <div className="mb-7">
                                        <p className="text-[9px] tracking-[0.25em] text-[#5d6948] uppercase">
                                            Algemene informatie
                                        </p>

                                        <h2 className="mt-2 font-serif text-2xl">
                                            Gerechtgegevens
                                        </h2>
                                    </div>

                                    <div className="space-y-7">
                                        {/* Category */}
                                        <div>
                                            <label className={labelClass}>
                                                Categorie
                                            </label>

                                            <select
                                                value={data.category_id}
                                                onChange={(e) =>
                                                    setData(
                                                        'category_id',
                                                        e.target.value,
                                                    )
                                                }
                                                className={inputClass}
                                            >
                                                <option value="">
                                                    Selecteer een categorie
                                                </option>

                                                {categories.map((category) => (
                                                    <option
                                                        key={category.id}
                                                        value={category.id}
                                                    >
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>

                                            {errors.category_id && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.category_id}
                                                </p>
                                            )}
                                        </div>

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
                                                placeholder="Bijv. Carpaccio"
                                            />

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

                                            <input
                                                type="text"
                                                value={data.slug}
                                                onChange={(e) =>
                                                    setData(
                                                        'slug',
                                                        e.target.value,
                                                    )
                                                }
                                                className={inputClass}
                                                placeholder="carpaccio"
                                            />

                                            <p className="mt-2 text-xs text-[#20231f]/35">
                                                Wordt automatisch ingevuld op
                                                basis van de naam.
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
                                                placeholder="Bijv. Rundercarpaccio met truffelmayonaise, Parmezaanse kaas en pijnboompitten."
                                            />

                                            {errors.description && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </section>

                                {/* Pricing */}
                                <section className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-8">
                                    <div className="mb-7">
                                        <p className="text-[9px] tracking-[0.25em] text-[#5d6948] uppercase">
                                            Prijzen
                                        </p>

                                        <h2 className="mt-2 font-serif text-2xl">
                                            Prijsinstellingen
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-[#20231f]/45">
                                            Je kunt een standaardprijs,
                                            prijstekst en extra prijsopties
                                            combineren.
                                        </p>
                                    </div>

                                    <div className="space-y-7">
                                        {/* Base price */}
                                        <div>
                                            <label className={labelClass}>
                                                Basisprijs
                                            </label>

                                            <div className="flex overflow-hidden border border-black/10 bg-[#f7f4ee] focus-within:border-[#5d6948] focus-within:ring-2 focus-within:ring-[#5d6948]/10">
                                                <span className="flex items-center border-r border-black/10 px-4 text-sm text-[#20231f]/40">
                                                    €
                                                </span>

                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    value={data.price}
                                                    onChange={(e) =>
                                                        setData(
                                                            'price',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm outline-none"
                                                    placeholder="14.50"
                                                />
                                            </div>

                                            <p className="mt-2 text-xs leading-5 text-[#20231f]/35">
                                                Laat leeg als dit gerecht geen
                                                vaste basisprijs heeft.
                                            </p>

                                            {errors.price && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.price}
                                                </p>
                                            )}
                                        </div>

                                        {/* Price text */}
                                        <div>
                                            <label className={labelClass}>
                                                Prijstekst
                                            </label>

                                            <input
                                                type="text"
                                                value={data.price_text}
                                                onChange={(e) =>
                                                    setData(
                                                        'price_text',
                                                        e.target.value,
                                                    )
                                                }
                                                className={inputClass}
                                                placeholder="Bijv. Dagprijs of p.p."
                                            />

                                            <p className="mt-2 text-xs leading-5 text-[#20231f]/35">
                                                Optioneel. Bijvoorbeeld
                                                “Dagprijs”, “p.p.” of andere
                                                prijsinformatie.
                                            </p>

                                            {errors.price_text && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.price_text}
                                                </p>
                                            )}
                                        </div>

                                        {/* Extra prices */}
                                        <div>
                                            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                                                <div>
                                                    <label
                                                        className={labelClass}
                                                    >
                                                        Extra prijsopties
                                                    </label>

                                                    <p className="text-xs leading-5 text-[#20231f]/35">
                                                        Bijvoorbeeld Glas /
                                                        Fles, 25cl / 50cl of
                                                        andere varianten.
                                                    </p>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setData('prices', [
                                                            ...data.prices,
                                                            {
                                                                label: '',
                                                                price: '',
                                                            },
                                                        ])
                                                    }
                                                    className="shrink-0 bg-[#20231f] px-4 py-3 text-[9px] tracking-[0.18em] text-white uppercase transition hover:bg-[#5d6948]"
                                                >
                                                    + Prijs toevoegen
                                                </button>
                                            </div>

                                            <div className="space-y-3">
                                                {data.prices.map(
                                                    (priceOption, index) => (
                                                        <div
                                                            key={index}
                                                            className="grid gap-3 border border-black/10 bg-[#f7f4ee] p-4 sm:grid-cols-[1fr_1fr_auto]"
                                                        >
                                                            <div>
                                                                <label className="mb-2 block text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                                                    Optie
                                                                </label>

                                                                <input
                                                                    type="text"
                                                                    value={
                                                                        priceOption.label
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) => {
                                                                        const prices =
                                                                            [
                                                                                ...data.prices,
                                                                            ];

                                                                        prices[
                                                                            index
                                                                        ] = {
                                                                            ...prices[
                                                                                index
                                                                            ],
                                                                            label: e
                                                                                .target
                                                                                .value,
                                                                        };

                                                                        setData(
                                                                            'prices',
                                                                            prices,
                                                                        );
                                                                    }}
                                                                    placeholder="Bijv. Glas"
                                                                    className={
                                                                        inputClass
                                                                    }
                                                                />
                                                            </div>

                                                            <div>
                                                                <label className="mb-2 block text-[9px] tracking-[0.18em] text-[#20231f]/40 uppercase">
                                                                    Prijs
                                                                </label>

                                                                <div className="flex overflow-hidden border border-black/10 bg-white focus-within:border-[#5d6948]">
                                                                    <span className="flex items-center border-r border-black/10 px-3 text-sm text-[#20231f]/40">
                                                                        €
                                                                    </span>

                                                                    <input
                                                                        type="number"
                                                                        step="0.01"
                                                                        min="0"
                                                                        value={
                                                                            priceOption.price
                                                                        }
                                                                        onChange={(
                                                                            e,
                                                                        ) => {
                                                                            const prices =
                                                                                [
                                                                                    ...data.prices,
                                                                                ];

                                                                            prices[
                                                                                index
                                                                            ] =
                                                                                {
                                                                                    ...prices[
                                                                                        index
                                                                                    ],
                                                                                    price: e
                                                                                        .target
                                                                                        .value,
                                                                                };

                                                                            setData(
                                                                                'prices',
                                                                                prices,
                                                                            );
                                                                        }}
                                                                        placeholder="6.50"
                                                                        className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm outline-none"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    setData(
                                                                        'prices',
                                                                        data.prices.filter(
                                                                            (
                                                                                _,
                                                                                priceIndex,
                                                                            ) =>
                                                                                priceIndex !==
                                                                                index,
                                                                        ),
                                                                    )
                                                                }
                                                                className="self-end px-3 py-3.5 text-[9px] tracking-[0.15em] text-red-600 uppercase transition hover:text-red-800"
                                                            >
                                                                Verwijderen
                                                            </button>
                                                        </div>
                                                    ),
                                                )}
                                            </div>

                                            {data.prices.length === 0 && (
                                                <div className="border border-dashed border-black/10 bg-[#f7f4ee] px-5 py-8 text-center">
                                                    <p className="text-sm text-[#20231f]/40">
                                                        Nog geen extra
                                                        prijsopties toegevoegd.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>

                                {/* Image */}
                                <section className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-8">
                                    <div className="mb-6">
                                        <p className="text-[9px] tracking-[0.25em] text-[#5d6948] uppercase">
                                            Afbeelding
                                        </p>

                                        <h2 className="mt-2 font-serif text-2xl">
                                            Foto van het gerecht
                                        </h2>
                                    </div>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            setData(
                                                'image',
                                                e.target.files?.[0] ?? null,
                                            )
                                        }
                                        className="w-full border border-black/10 bg-[#f7f4ee] px-4 py-3 text-sm file:mr-4 file:border-0 file:bg-[#20231f] file:px-4 file:py-2 file:text-[9px] file:tracking-[0.15em] file:text-white file:uppercase hover:file:bg-[#5d6948]"
                                    />

                                    <p className="mt-2 text-xs text-[#20231f]/35">
                                        JPG, PNG of WebP. Gebruik bij voorkeur
                                        een liggende foto.
                                    </p>

                                    {errors.image && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.image}
                                        </p>
                                    )}
                                </section>
                            </div>

                            {/* RIGHT SIDEBAR */}
                            <aside className="lg:sticky lg:top-8 lg:self-start">
                                <div className="border border-black/10 bg-[#20231f] p-6 text-[#f7f4ee]">
                                    <p className="text-[9px] tracking-[0.25em] text-white/40 uppercase">
                                        Instellingen
                                    </p>

                                    <h2 className="mt-3 font-serif text-2xl">
                                        Publicatie
                                    </h2>

                                    <div className="mt-6 space-y-6 border-t border-white/10 pt-6">
                                        <label className="flex cursor-pointer items-start gap-3">
                                            <input
                                                type="checkbox"
                                                checked={data.is_available}
                                                onChange={(e) =>
                                                    setData(
                                                        'is_available',
                                                        e.target.checked,
                                                    )
                                                }
                                                className="mt-1 h-4 w-4"
                                            />

                                            <span>
                                                <span className="block text-[10px] tracking-[0.18em] uppercase">
                                                    Beschikbaar
                                                </span>

                                                <span className="mt-1 block text-xs leading-5 text-white/45">
                                                    Toon dit gerecht op het
                                                    openbare menu.
                                                </span>
                                            </span>
                                        </label>

                                        <label className="flex cursor-pointer items-start gap-3">
                                            <input
                                                type="checkbox"
                                                checked={data.is_featured}
                                                onChange={(e) =>
                                                    setData(
                                                        'is_featured',
                                                        e.target.checked,
                                                    )
                                                }
                                                className="mt-1 h-4 w-4"
                                            />

                                            <span>
                                                <span className="block text-[10px] tracking-[0.18em] uppercase">
                                                    Uitgelicht
                                                </span>

                                                <span className="mt-1 block text-xs leading-5 text-white/45">
                                                    Toon dit gerecht als
                                                    uitgelicht item op de
                                                    homepage.
                                                </span>
                                            </span>
                                        </label>

                                        <div>
                                            <label className="mb-2 block text-[9px] tracking-[0.2em] text-white/40 uppercase">
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
                                                className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#5d6948]"
                                            />

                                            <p className="mt-2 text-xs leading-5 text-white/35">
                                                Een lager nummer verschijnt
                                                eerder.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-3">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full bg-[#5d6948] px-6 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition hover:bg-[#6c7954] disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {processing
                                                ? 'Gerecht opslaan...'
                                                : 'Gerecht aanmaken'}
                                        </button>

                                        <Link
                                            href="/admin/menu-items"
                                            className="block border border-white/15 px-6 py-4 text-center text-[10px] tracking-[0.2em] text-white/60 uppercase transition hover:border-white/40 hover:text-white"
                                        >
                                            Annuleren
                                        </Link>
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
