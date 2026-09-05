import { Head, Link, useForm } from '@inertiajs/react';
import AdminSidebar from '@/components/AdminSidebar';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        image: null as File | null,
        is_published: false,
        published_at: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/admin/actualiteiten', {
            forceFormData: true,
        });
    }

    function generateSlug(value: string) {
        return value
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }

    const inputClass =
        'w-full border border-black/10 bg-[#f7f4ee] px-4 py-3.5 text-sm text-[#20231f] outline-none transition duration-200 placeholder:text-[#20231f]/30 focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10';

    const labelClass =
        'mb-2 block text-[10px] uppercase tracking-[0.22em] text-[#20231f]/50';

    return (
        <>
            <Head title="Actualiteit toevoegen" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-6xl">

                        {/* Header */}
                        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <Link
                                    href="/admin/actualiteiten"
                                    className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#5d6948]"
                                >
                                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                        ←
                                    </span>

                                    Terug naar actualiteiten
                                </Link>

                                <p className="mt-7 text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Admin · Actualiteiten
                                </p>

                                <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                                    Nieuw bericht
                                </h1>

                                <p className="mt-3 max-w-xl text-sm leading-6 text-[#20231f]/50">
                                    Voeg nieuws, evenementen of updates toe aan
                                    de website van Brasserie De Bank.
                                </p>
                            </div>

                            <div
                                className={`w-fit px-4 py-2 text-[9px] uppercase tracking-[0.2em] ${
                                    data.is_published
                                        ? 'bg-[#5d6948]/10 text-[#5d6948]'
                                        : 'bg-black/5 text-[#20231f]/45'
                                }`}
                            >
                                {data.is_published
                                    ? 'Wordt gepubliceerd'
                                    : 'Concept'}
                            </div>
                        </div>

                        <form
                            onSubmit={submit}
                            className="grid gap-7 lg:grid-cols-[1fr_330px]"
                        >
                            {/* Main */}
                            <div className="space-y-7">

                                {/* Content */}
                                <section className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-8">
                                    <div className="mb-8">
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                            Inhoud
                                        </p>

                                        <h2 className="mt-2 font-serif text-2xl">
                                            Berichtgegevens
                                        </h2>
                                    </div>

                                    {/* Title */}
                                    <div className="mb-6">
                                        <label className={labelClass}>
                                            Titel
                                        </label>

                                        <input
                                            type="text"
                                            value={data.title}
                                            onChange={(e) => {
                                                const value = e.target.value;

                                                setData('title', value);
                                                setData(
                                                    'slug',
                                                    generateSlug(value),
                                                );
                                            }}
                                            className={inputClass}
                                            placeholder="Bijvoorbeeld: Nieuwe kaart gelanceerd"
                                        />

                                        {errors.title && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.title}
                                            </p>
                                        )}
                                    </div>

                                    {/* Slug */}
                                    <div className="mb-6">
                                        <label className={labelClass}>
                                            Slug
                                        </label>

                                        <div className="flex overflow-hidden border border-black/10 bg-[#f7f4ee] focus-within:border-[#5d6948]">
                                            <span className="hidden items-center border-r border-black/10 px-4 text-xs text-[#20231f]/35 sm:flex">
                                                /actualiteiten/
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
                                                placeholder="nieuwe-kaart-gelanceerd"
                                            />
                                        </div>

                                        <p className="mt-2 text-xs text-[#20231f]/35">
                                            Wordt automatisch gemaakt op basis
                                            van de titel.
                                        </p>

                                        {errors.slug && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.slug}
                                            </p>
                                        )}
                                    </div>

                                    {/* Excerpt */}
                                    <div className="mb-6">
                                        <div className="mb-2 flex items-center justify-between gap-4">
                                            <label className="text-[10px] uppercase tracking-[0.22em] text-[#20231f]/50">
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
                                            className={`${inputClass} resize-none`}
                                            placeholder="Korte introductie die op de overzichtspagina wordt getoond..."
                                        />

                                        {errors.excerpt && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.excerpt}
                                            </p>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <label className={labelClass}>
                                            Inhoud
                                        </label>

                                        <textarea
                                            rows={14}
                                            value={data.content}
                                            onChange={(e) =>
                                                setData(
                                                    'content',
                                                    e.target.value,
                                                )
                                            }
                                            className={`${inputClass} resize-y leading-7`}
                                            placeholder="Schrijf hier het volledige nieuwsbericht..."
                                        />

                                        {errors.content && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.content}
                                            </p>
                                        )}
                                    </div>
                                </section>

                                {/* Image */}
                                <section className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)] sm:p-8">
                                    <div className="mb-7">
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                            Media
                                        </p>

                                        <h2 className="mt-2 font-serif text-2xl">
                                            Afbeelding
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-[#20231f]/45">
                                            Gebruik bij voorkeur een liggende
                                            afbeelding voor de beste weergave.
                                        </p>
                                    </div>

                                    <label className={labelClass}>
                                        Upload afbeelding
                                    </label>

                                    <div className="border border-dashed border-[#5d6948]/25 bg-[#f7f4ee] p-6">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                                setData(
                                                    'image',
                                                    e.target.files?.[0] ?? null,
                                                )
                                            }
                                            className="block w-full text-sm text-[#20231f]/60 file:mr-4 file:border-0 file:bg-[#20231f] file:px-5 file:py-3 file:text-[9px] file:uppercase file:tracking-[0.18em] file:text-[#f7f4ee] file:transition hover:file:bg-[#5d6948]"
                                        />

                                        <p className="mt-3 text-xs leading-5 text-[#20231f]/35">
                                            JPG, PNG of WebP. Maximaal 4 MB.
                                        </p>
                                    </div>

                                    {data.image && (
                                        <div className="mt-4 border border-[#5d6948]/15 bg-[#5d6948]/5 px-4 py-3">
                                            <p className="text-xs text-[#5d6948]">
                                                Geselecteerd: {data.image.name}
                                            </p>
                                        </div>
                                    )}

                                    {errors.image && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.image}
                                        </p>
                                    )}
                                </section>
                            </div>

                            {/* Right Sidebar */}
                            <aside className="space-y-7 lg:sticky lg:top-28 lg:self-start">

                                {/* Publication */}
                                <section className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(32,35,31,0.04)]">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                        Publicatie
                                    </p>

                                    <h2 className="mt-2 font-serif text-2xl">
                                        Status
                                    </h2>

                                    <div className="mt-6">
                                        <label className="flex cursor-pointer items-start gap-4 border border-black/10 bg-[#f7f4ee] p-4">
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
                                                    Direct publiceren
                                                </p>

                                                <p className="mt-1 text-xs leading-5 text-[#20231f]/40">
                                                    Het bericht wordt zichtbaar
                                                    op de website.
                                                </p>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="mt-6">
                                        <label className={labelClass}>
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
                                            className={inputClass}
                                            style={{
                                                colorScheme: 'light',
                                            }}
                                        />

                                        <p className="mt-2 text-xs leading-5 text-[#20231f]/35">
                                            Kies wanneer dit bericht
                                            gepubliceerd moet worden.
                                        </p>

                                        {errors.published_at && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.published_at}
                                            </p>
                                        )}
                                    </div>
                                </section>

                                {/* Preview */}
                                <section className="border border-black/10 bg-[#ebe7dc] p-6">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                        Voorbeeld
                                    </p>

                                    {data.image && (
                                        <div className="mt-5 flex aspect-[16/9] items-center justify-center overflow-hidden bg-[#d8d3c6]">
                                            <span className="px-4 text-center text-[10px] uppercase tracking-[0.2em] text-[#20231f]/35">
                                                {data.image.name}
                                            </span>
                                        </div>
                                    )}

                                    <h3 className="mt-5 font-serif text-2xl leading-tight">
                                        {data.title || 'Titel van het bericht'}
                                    </h3>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#20231f]/50">
                                        {data.excerpt ||
                                            'Hier verschijnt de korte omschrijving van het bericht.'}
                                    </p>

                                    <div className="mt-5 text-[9px] uppercase tracking-[0.2em] text-[#5d6948]">
                                        Lees verder →
                                    </div>
                                </section>

                                {/* Actions */}
                                <section className="border border-black/10 bg-white p-5">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-[#20231f] px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#f7f4ee] transition duration-300 hover:bg-[#5d6948] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {processing
                                            ? 'Opslaan...'
                                            : 'Bericht opslaan'}
                                    </button>

                                    <Link
                                        href="/admin/actualiteiten"
                                        className="mt-3 block w-full border border-[#20231f]/15 px-6 py-4 text-center text-[10px] uppercase tracking-[0.22em] text-[#20231f]/60 transition hover:border-[#20231f]"
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
