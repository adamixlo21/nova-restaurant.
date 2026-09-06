import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

interface Vacancy {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    contract_type: string | null;
    hours: string | null;
    location: string | null;
    image: string | null;
    is_published: boolean;
    published_at: string | null;
}

interface Props {
    vacancy: Vacancy;
}

export default function Edit({ vacancy }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        title: vacancy.title,
        slug: vacancy.slug,
        excerpt: vacancy.excerpt ?? '',
        content: vacancy.content ?? '',
        contract_type: vacancy.contract_type ?? '',
        hours: vacancy.hours ?? '',
        location: vacancy.location ?? '',
        image: null as File | null,
        remove_image: false,
        is_published: vacancy.is_published,
        published_at: vacancy.published_at
            ? vacancy.published_at.slice(0, 16)
            : '',
        _method: 'put',
    });

    const [newImagePreview, setNewImagePreview] = useState<string | null>(null);

    useEffect(() => {
        if (!data.image) {
            setNewImagePreview(null);
            return;
        }

        const url = URL.createObjectURL(data.image);

        setNewImagePreview(url);

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [data.image]);

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

        post(`/admin/vacancies/${vacancy.id}`, {
            forceFormData: true,
        });
    }

    function selectNewImage(file: File | null) {
        setData('image', file);

        if (file) {
            setData('remove_image', false);
        }
    }

    function removeCurrentImage() {
        setData('remove_image', true);
        setData('image', null);
    }

    function undoRemoveImage() {
        setData('remove_image', false);
        setData('image', null);
    }

    const previewImage =
        data.image && newImagePreview
            ? newImagePreview
            : !data.remove_image && vacancy.image
              ? `/storage/${vacancy.image}`
              : null;

    const inputClass =
        'w-full border border-black/10 bg-[#f7f4ee] px-4 py-3.5 text-sm text-[#20231f] outline-none transition placeholder:text-[#20231f]/30 focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10';

    const labelClass =
        'mb-2 block text-[10px] uppercase tracking-[0.22em] text-[#20231f]/50';

    function formatPreviewDate() {
        if (!data.published_at) {
            return 'Geen datum ingesteld';
        }

        return new Date(data.published_at).toLocaleDateString('nl-NL', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }

    return (
        <>
            <Head title={`Vacature bewerken - ${vacancy.title}`} />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">


                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-6xl">
                        {/* Header */}
                        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <Link
                                    href="/admin/vacancies"
                                    className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                                >
                                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                        ←
                                    </span>
                                    Terug naar vacatures
                                </Link>

                                <p className="mt-7 text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
                                    Admin · Vacatures
                                </p>

                                <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                                    Vacature bewerken
                                </h1>

                                <p className="mt-3 max-w-xl text-sm leading-7 text-[#20231f]/50">
                                    Pas de functie, vacaturetekst, praktische
                                    informatie en publicatie-instellingen aan.
                                </p>
                            </div>

                            <div
                                className={`w-fit border px-4 py-2 text-[9px] tracking-[0.2em] uppercase ${
                                    data.is_published
                                        ? 'border-green-200 bg-green-50 text-green-700'
                                        : 'border-black/10 bg-white text-[#20231f]/45'
                                }`}
                            >
                                {data.is_published ? 'Gepubliceerd' : 'Concept'}
                            </div>
                        </div>

                        <form
                            onSubmit={submit}
                            className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]"
                        >
                            {/* LEFT */}
                            <div className="space-y-8">
                                {/* Content */}
                                <section className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-8">
                                    <div className="mb-8">
                                        <p className="text-[9px] tracking-[0.28em] text-[#5d6948] uppercase">
                                            Inhoud
                                        </p>

                                        <h2 className="mt-2 font-serif text-2xl">
                                            Vacaturegegevens
                                        </h2>
                                    </div>

                                    <div className="space-y-7">
                                        {/* Title */}
                                        <div>
                                            <label className={labelClass}>
                                                Titel
                                            </label>

                                            <input
                                                type="text"
                                                value={data.title}
                                                onChange={(e) => {
                                                    const value =
                                                        e.target.value;

                                                    setData('title', value);

                                                    setData(
                                                        'slug',
                                                        generateSlug(value),
                                                    );
                                                }}
                                                className={inputClass}
                                                placeholder="Bijvoorbeeld: Medewerker bediening"
                                            />

                                            {errors.title && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.title}
                                                </p>
                                            )}
                                        </div>

                                        {/* Slug */}
                                        <div>
                                            <label className={labelClass}>
                                                URL-slug
                                            </label>

                                            <div className="flex overflow-hidden border border-black/10 bg-[#f7f4ee] focus-within:border-[#5d6948] focus-within:ring-2 focus-within:ring-[#5d6948]/10">
                                                <span className="hidden items-center border-r border-black/10 px-4 text-xs text-[#20231f]/35 sm:flex">
                                                    /vacatures/
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
                                                />
                                            </div>

                                            <p className="mt-2 text-xs text-[#20231f]/35">
                                                Wordt gebruikt in de URL van de
                                                vacature.
                                            </p>

                                            {errors.slug && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.slug}
                                                </p>
                                            )}
                                        </div>

                                        {/* Excerpt */}
                                        <div>
                                            <div className="mb-2 flex items-center justify-between gap-4">
                                                <label className="text-[10px] tracking-[0.22em] text-[#20231f]/50 uppercase">
                                                    Korte omschrijving
                                                </label>

                                                <span className="text-xs text-[#20231f]/30">
                                                    {data.excerpt.length} tekens
                                                </span>
                                            </div>

                                            <textarea
                                                rows={4}
                                                value={data.excerpt}
                                                onChange={(e) =>
                                                    setData(
                                                        'excerpt',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`${inputClass} resize-none leading-7`}
                                                placeholder="Korte introductie die op de vacature-overzichtspagina wordt getoond..."
                                            />

                                            <p className="mt-2 text-xs text-[#20231f]/35">
                                                Deze tekst wordt gebruikt op de
                                                overzichtspagina.
                                            </p>

                                            {errors.excerpt && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.excerpt}
                                                </p>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <label className={labelClass}>
                                                Volledige vacaturetekst
                                            </label>

                                            <textarea
                                                rows={15}
                                                value={data.content}
                                                onChange={(e) =>
                                                    setData(
                                                        'content',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`${inputClass} resize-y leading-7`}
                                                placeholder="Beschrijf de functie, werkzaamheden, wat je zoekt en wat je biedt..."
                                            />

                                            {errors.content && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.content}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </section>

                                {/* Practical info */}
                                <section className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-8">
                                    <div className="mb-8">
                                        <p className="text-[9px] tracking-[0.28em] text-[#5d6948] uppercase">
                                            Functie
                                        </p>

                                        <h2 className="mt-2 font-serif text-2xl">
                                            Praktische informatie
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-[#20231f]/45">
                                            Voeg de belangrijkste details toe
                                            die direct bij de vacature worden
                                            getoond.
                                        </p>
                                    </div>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label className={labelClass}>
                                                Dienstverband
                                            </label>

                                            <input
                                                type="text"
                                                value={data.contract_type}
                                                onChange={(e) =>
                                                    setData(
                                                        'contract_type',
                                                        e.target.value,
                                                    )
                                                }
                                                className={inputClass}
                                                placeholder="Bijvoorbeeld: Parttime"
                                            />

                                            {errors.contract_type && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.contract_type}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className={labelClass}>
                                                Uren
                                            </label>

                                            <input
                                                type="text"
                                                value={data.hours}
                                                onChange={(e) =>
                                                    setData(
                                                        'hours',
                                                        e.target.value,
                                                    )
                                                }
                                                className={inputClass}
                                                placeholder="Bijvoorbeeld: 24–32 uur"
                                            />

                                            {errors.hours && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.hours}
                                                </p>
                                            )}
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label className={labelClass}>
                                                Locatie
                                            </label>

                                            <input
                                                type="text"
                                                value={data.location}
                                                onChange={(e) =>
                                                    setData(
                                                        'location',
                                                        e.target.value,
                                                    )
                                                }
                                                className={inputClass}
                                                placeholder="Bijvoorbeeld: Harderwijk"
                                            />

                                            {errors.location && (
                                                <p className="mt-2 text-sm text-red-600">
                                                    {errors.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </section>

                                {/* Media */}
                                <section className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-8">
                                    <div className="mb-7">
                                        <p className="text-[9px] tracking-[0.28em] text-[#5d6948] uppercase">
                                            Media
                                        </p>

                                        <h2 className="mt-2 font-serif text-2xl">
                                            Afbeelding
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-[#20231f]/45">
                                            Gebruik bij voorkeur een liggende
                                            afbeelding van goede kwaliteit.
                                        </p>
                                    </div>

                                    {/* Existing image */}
                                    {vacancy.image &&
                                        !data.remove_image &&
                                        !data.image && (
                                            <div className="mb-7">
                                                <div className="relative overflow-hidden border border-black/10 bg-[#ebe7dc]">
                                                    <img
                                                        src={`/storage/${vacancy.image}`}
                                                        alt={vacancy.title}
                                                        className="aspect-[16/9] w-full object-cover"
                                                    />

                                                    <div className="absolute top-4 left-4 bg-[#20231f]/85 px-3 py-2 text-[8px] tracking-[0.18em] text-white uppercase backdrop-blur-sm">
                                                        Huidige afbeelding
                                                    </div>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={removeCurrentImage}
                                                    className="mt-4 inline-flex border border-red-200 bg-red-50 px-4 py-3 text-[9px] tracking-[0.15em] text-red-700 uppercase transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                                                >
                                                    Afbeelding verwijderen
                                                </button>
                                            </div>
                                        )}

                                    {/* Remove notice */}
                                    {data.remove_image && vacancy.image && (
                                        <div className="mb-7 border border-red-200 bg-red-50 p-5">
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                                                    ×
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="text-sm font-medium text-red-700">
                                                        Afbeelding gemarkeerd
                                                        voor verwijderen
                                                    </p>

                                                    <p className="mt-1 text-xs leading-5 text-red-600/70">
                                                        De afbeelding wordt pas
                                                        verwijderd wanneer je de
                                                        wijzigingen opslaat.
                                                    </p>

                                                    <button
                                                        type="button"
                                                        onClick={
                                                            undoRemoveImage
                                                        }
                                                        className="mt-3 border border-red-200 bg-white px-4 py-2.5 text-[9px] tracking-[0.16em] text-red-700 uppercase transition hover:bg-red-100"
                                                    >
                                                        ↶ Ongedaan maken
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* New image */}
                                    {data.image && newImagePreview && (
                                        <div className="mb-7">
                                            <div className="relative overflow-hidden border border-black/10 bg-[#ebe7dc]">
                                                <img
                                                    src={newImagePreview}
                                                    alt="Nieuwe afbeelding"
                                                    className="aspect-[16/9] w-full object-cover"
                                                />

                                                <div className="absolute top-4 left-4 bg-[#5d6948] px-3 py-2 text-[8px] tracking-[0.18em] text-white uppercase">
                                                    Nieuwe afbeelding
                                                </div>
                                            </div>

                                            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                                <p className="truncate text-xs text-[#20231f]/45">
                                                    {data.image.name}
                                                </p>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        selectNewImage(null)
                                                    }
                                                    className="w-fit border border-black/10 px-4 py-2.5 text-[9px] tracking-[0.15em] text-[#20231f]/60 uppercase transition hover:border-[#20231f]"
                                                >
                                                    Selectie verwijderen
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <label className={labelClass}>
                                        {vacancy.image
                                            ? 'Nieuwe afbeelding kiezen'
                                            : 'Afbeelding kiezen'}
                                    </label>

                                    <div className="border border-dashed border-[#5d6948]/25 bg-[#f7f4ee] p-6">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                                selectNewImage(
                                                    e.target.files?.[0] ?? null,
                                                )
                                            }
                                            className="block w-full text-sm text-[#20231f]/60 file:mr-4 file:border-0 file:bg-[#20231f] file:px-5 file:py-3 file:text-[9px] file:tracking-[0.18em] file:text-white file:uppercase file:transition hover:file:bg-[#5d6948]"
                                        />

                                        <p className="mt-3 text-xs leading-5 text-[#20231f]/35">
                                            JPG, PNG of WebP. Maximaal 4 MB.
                                        </p>
                                    </div>

                                    {errors.image && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.image}
                                        </p>
                                    )}
                                </section>
                            </div>

                            {/* RIGHT */}
                            <aside className="space-y-7 lg:sticky lg:top-8 lg:self-start">
                                {/* Publication */}
                                <section className="border border-black/10 bg-[#20231f] p-6 text-[#f7f4ee]">
                                    <p className="text-[9px] tracking-[0.28em] text-white/40 uppercase">
                                        Publicatie
                                    </p>

                                    <h2 className="mt-2 font-serif text-2xl">
                                        Status
                                    </h2>

                                    <label className="mt-6 flex cursor-pointer items-start gap-4 border border-white/10 bg-white/5 p-4">
                                        <input
                                            type="checkbox"
                                            checked={data.is_published}
                                            onChange={(e) =>
                                                setData(
                                                    'is_published',
                                                    e.target.checked,
                                                )
                                            }
                                            className="mt-0.5 h-4 w-4 accent-[#5d6948]"
                                        />

                                        <div>
                                            <p className="text-sm font-medium">
                                                Gepubliceerd
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-white/40">
                                                De vacature is zichtbaar op de
                                                website.
                                            </p>
                                        </div>
                                    </label>

                                    <div className="mt-6">
                                        <label className="mb-2 block text-[9px] tracking-[0.2em] text-white/40 uppercase">
                                            Publicatiedatum
                                        </label>

                                        <input
                                            type="datetime-local"
                                            value={data.published_at}
                                            onChange={(e) =>
                                                setData(
                                                    'published_at',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white transition outline-none focus:border-[#5d6948]"
                                            style={{
                                                colorScheme: 'dark',
                                            }}
                                        />

                                        <p className="mt-2 text-xs leading-5 text-white/35">
                                            Bepaalt welke datum bij deze
                                            vacature wordt getoond.
                                        </p>

                                        {errors.published_at && (
                                            <p className="mt-2 text-sm text-red-300">
                                                {errors.published_at}
                                            </p>
                                        )}
                                    </div>
                                </section>

                                {/* Preview */}
                                <section className="overflow-hidden border border-black/10 bg-white shadow-[0_20px_60px_rgba(32,35,31,0.05)]">
                                    <div className="border-b border-black/10 px-5 py-4">
                                        <div className="flex items-center justify-between">
                                            <p className="text-[9px] tracking-[0.25em] text-[#5d6948] uppercase">
                                                Voorbeeld
                                            </p>

                                            <span className="text-[8px] tracking-[0.18em] text-[#20231f]/30 uppercase">
                                                Website
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe7dc]">
                                        {previewImage ? (
                                            <img
                                                src={previewImage}
                                                alt="Voorbeeld"
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <span className="text-[9px] tracking-[0.25em] text-[#20231f]/25 uppercase">
                                                    Geen afbeelding
                                                </span>
                                            </div>
                                        )}

                                        <div className="absolute top-4 left-4 bg-[#f7f4ee]/95 px-3 py-2 text-[8px] tracking-[0.18em] text-[#5d6948] uppercase backdrop-blur-sm">
                                            Vacature
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <p className="text-[9px] tracking-[0.22em] text-[#5d6948] uppercase">
                                            {formatPreviewDate()}
                                        </p>

                                        <h3 className="mt-3 font-serif text-2xl leading-tight">
                                            {data.title ||
                                                'Titel van de vacature'}
                                        </h3>

                                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#20231f]/50">
                                            {data.excerpt ||
                                                'Hier verschijnt de korte omschrijving van de vacature.'}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {data.contract_type && (
                                                <span className="bg-[#f7f4ee] px-3 py-2 text-[8px] tracking-[0.18em] uppercase">
                                                    {data.contract_type}
                                                </span>
                                            )}

                                            {data.hours && (
                                                <span className="bg-[#f7f4ee] px-3 py-2 text-[8px] tracking-[0.18em] uppercase">
                                                    {data.hours}
                                                </span>
                                            )}

                                            {data.location && (
                                                <span className="bg-[#f7f4ee] px-3 py-2 text-[8px] tracking-[0.18em] uppercase">
                                                    {data.location}
                                                </span>
                                            )}
                                        </div>

                                        <div className="mt-6 flex items-center gap-2 border-t border-black/10 pt-4 text-[9px] tracking-[0.2em] text-[#5d6948] uppercase">
                                            Bekijk vacature
                                            <span>→</span>
                                        </div>
                                    </div>
                                </section>

                                {/* Actions */}
                                <section className="border border-black/10 bg-white p-5">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-[#5d6948] px-6 py-4 text-[10px] tracking-[0.22em] text-white uppercase transition hover:bg-[#6c7954] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {processing
                                            ? 'Opslaan...'
                                            : 'Wijzigingen opslaan'}
                                    </button>

                                    <Link
                                        href="/admin/vacancies"
                                        className="mt-3 block w-full border border-black/10 px-6 py-4 text-center text-[10px] tracking-[0.2em] text-[#20231f]/60 uppercase transition hover:border-[#20231f] hover:text-[#20231f]"
                                    >
                                        Annuleren
                                    </Link>
                                </section>
                            </aside>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}
