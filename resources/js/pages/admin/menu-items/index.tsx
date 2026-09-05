import { Head, Link, useForm } from '@inertiajs/react';
import AdminSidebar from '@/components/AdminSidebar';

interface Category {
    id: number;
    name: string;
}

interface MenuItemPrice {
    id: number;
    label: string;
    price: string;
    sort_order: number;
}

interface MenuItem {
    id: number;
    category_id: number;
    name: string;
    slug: string;
    description: string | null;
    price: string | null;
    price_text: string | null;
    prices: MenuItemPrice[];
    image: string | null;
    is_available: boolean;
    is_featured: boolean;
    sort_order: number;
    category: Category;
}

interface Props {
    menuItems: MenuItem[];
}

export default function Index({ menuItems }: Props) {
    const { delete: destroy } = useForm();

    function deleteMenuItem(id: number) {
        if (
            confirm(
                'Weet je zeker dat je dit gerecht wilt verwijderen?',
            )
        ) {
            destroy(`/admin/menu-items/${id}`);
        }
    }

    function formatPrice(price: string) {
        return Number(price)
            .toFixed(2)
            .replace('.', ',');
    }

    return (
        <>
            <Head title="Gerechten beheren" />

            <div className="flex min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
                    <div className="mx-auto max-w-7xl">

                        {/* Header */}
                        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <Link
                                    href="/dashboard"
                                    className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#5d6948]"
                                >
                                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                        ←
                                    </span>
                                    Terug naar dashboard
                                </Link>

                                <p className="mt-7 text-[10px] uppercase tracking-[0.35em] text-[#5d6948]">
                                    Admin · Menu
                                </p>

                                <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                                    Gerechten
                                </h1>

                                <p className="mt-3 max-w-xl text-sm leading-6 text-[#20231f]/50">
                                    Beheer alle gerechten, prijzen,
                                    beschikbaarheid en uitgelichte items van
                                    Brasserie De Bank.
                                </p>
                            </div>

                            <Link
                                href="/admin/menu-items/create"
                                className="inline-flex items-center justify-center bg-[#20231f] px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#f7f4ee] transition duration-300 hover:bg-[#5d6948]"
                            >
                                + Nieuw gerecht
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mb-8 grid gap-4 sm:grid-cols-3">
                            <div className="border border-black/10 bg-white p-5">
                                <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                    Totaal
                                </p>

                                <p className="mt-2 font-serif text-3xl">
                                    {menuItems.length}
                                </p>
                            </div>

                            <div className="border border-black/10 bg-white p-5">
                                <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                    Beschikbaar
                                </p>

                                <p className="mt-2 font-serif text-3xl text-[#5d6948]">
                                    {
                                        menuItems.filter(
                                            (item) => item.is_available,
                                        ).length
                                    }
                                </p>
                            </div>

                            <div className="border border-black/10 bg-white p-5">
                                <p className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/35">
                                    Uitgelicht
                                </p>

                                <p className="mt-2 font-serif text-3xl">
                                    {
                                        menuItems.filter(
                                            (item) => item.is_featured,
                                        ).length
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Items */}
                        {menuItems.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {menuItems.map((menuItem) => (
                                    <article
                                        key={menuItem.id}
                                        className="group overflow-hidden border border-black/10 bg-white shadow-[0_15px_45px_rgba(32,35,31,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(32,35,31,0.08)]"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe7dc]">
                                            {menuItem.image ? (
                                                <img
                                                    src={`/storage/${menuItem.image}`}
                                                    alt={menuItem.name}
                                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center">
                                                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#20231f]/25">
                                                        Geen afbeelding
                                                    </span>
                                                </div>
                                            )}

                                            <div className="absolute left-4 top-4 bg-[#f7f4ee]/95 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[#5d6948] backdrop-blur-sm">
                                                {menuItem.category.name}
                                            </div>

                                            <div className="absolute right-4 top-4 flex gap-2">
                                                {menuItem.is_featured && (
                                                    <span className="bg-[#5d6948] px-3 py-2 text-[8px] uppercase tracking-[0.18em] text-white">
                                                        Uitgelicht
                                                    </span>
                                                )}

                                                <span
                                                    className={`px-3 py-2 text-[8px] uppercase tracking-[0.18em] ${
                                                        menuItem.is_available
                                                            ? 'bg-white/95 text-[#5d6948]'
                                                            : 'bg-red-600 text-white'
                                                    }`}
                                                >
                                                    {menuItem.is_available
                                                        ? 'Beschikbaar'
                                                        : 'Niet beschikbaar'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="flex items-start justify-between gap-5">
                                                <div className="min-w-0">
                                                    <h2 className="font-serif text-2xl leading-tight">
                                                        {menuItem.name}
                                                    </h2>

                                                    {menuItem.description && (
                                                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#20231f]/50">
                                                            {
                                                                menuItem.description
                                                            }
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Price */}
                                                <div className="shrink-0 text-right">
                                                    {menuItem.price !== null && (
                                                        <p className="text-sm font-medium text-[#5d6948]">
                                                            €
                                                            {formatPrice(
                                                                menuItem.price,
                                                            )}

                                                            {menuItem.price_text &&
                                                                ` ${menuItem.price_text}`}
                                                        </p>
                                                    )}

                                                    {menuItem.price === null &&
                                                        menuItem.price_text && (
                                                            <p className="text-sm font-medium text-[#5d6948]">
                                                                {
                                                                    menuItem.price_text
                                                                }
                                                            </p>
                                                        )}

                                                    {menuItem.prices?.length >
                                                        0 && (
                                                            <div className="mt-2 space-y-1.5">
                                                                {menuItem.prices.map(
                                                                    (price) => (
                                                                        <div
                                                                            key={
                                                                                price.id
                                                                            }
                                                                            className="flex items-center justify-end gap-2 text-xs"
                                                                        >
                                                                        <span className="text-[#20231f]/40">
                                                                            {
                                                                                price.label
                                                                            }
                                                                        </span>

                                                                            <span className="text-[#5d6948]">
                                                                            €
                                                                                {formatPrice(
                                                                                    price.price,
                                                                                )}
                                                                        </span>
                                                                        </div>
                                                                    ),
                                                                )}
                                                            </div>
                                                        )}

                                                    {menuItem.price === null &&
                                                        !menuItem.price_text &&
                                                        (!menuItem.prices ||
                                                            menuItem.prices
                                                                .length ===
                                                            0) && (
                                                            <span className="text-[9px] uppercase tracking-[0.18em] text-[#20231f]/30">
                                                                Geen prijs
                                                            </span>
                                                        )}
                                                </div>
                                            </div>

                                            {/* Info */}
                                            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-black/10 pt-5">
                                                <div>
                                                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#20231f]/35">
                                                        Categorie
                                                    </p>

                                                    <p className="mt-1 text-sm">
                                                        {
                                                            menuItem.category
                                                                .name
                                                        }
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#20231f]/35">
                                                        Volgorde
                                                    </p>

                                                    <p className="mt-1 text-sm">
                                                        {menuItem.sort_order}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="mt-6 flex gap-3 border-t border-black/10 pt-5">
                                                <Link
                                                    href={`/admin/menu-items/${menuItem.id}/edit`}
                                                    className="flex-1 bg-[#20231f] px-4 py-3.5 text-center text-[9px] uppercase tracking-[0.18em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                                                >
                                                    Bewerken
                                                </Link>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        deleteMenuItem(
                                                            menuItem.id,
                                                        )
                                                    }
                                                    className="border border-red-200 px-4 py-3.5 text-[9px] uppercase tracking-[0.18em] text-red-600 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                                                >
                                                    Verwijderen
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="border border-black/10 bg-white px-6 py-20 text-center">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                    Menu
                                </p>

                                <h2 className="mt-4 font-serif text-3xl">
                                    Nog geen gerechten
                                </h2>

                                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#20231f]/50">
                                    Voeg je eerste gerecht toe om het menu van
                                    Brasserie De Bank op te bouwen.
                                </p>

                                <Link
                                    href="/admin/menu-items/create"
                                    className="mt-7 inline-flex bg-[#20231f] px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                                >
                                    + Nieuw gerecht
                                </Link>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
