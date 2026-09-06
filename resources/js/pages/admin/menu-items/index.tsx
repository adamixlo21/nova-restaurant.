import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminSidebar from '@/components/AdminSidebar';

interface Menu {
    id: number;
    name: string;
    slug: string;
}

interface Category {
    id: number;
    name: string;
    menu: Menu | null;
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
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
    const [search, setSearch] = useState('');
    const filteredMenuItems = menuItems.filter((item) => {
        const query = search.toLowerCase().trim();

        const matchesSearch =
            !query ||
            item.name.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query) ||
            item.category.name.toLowerCase().includes(query) ||
            item.category.menu?.name.toLowerCase().includes(query);

        const matchesFeatured = !showFeaturedOnly || item.is_featured;

        return matchesSearch && matchesFeatured;
    });

    const { delete: destroy } = useForm();

    const [openMenus, setOpenMenus] = useState<Record<number, boolean>>({});
    const [openCategories, setOpenCategories] = useState<
        Record<number, boolean>
    >({});
    function toggleMenu(menuId: number) {
        setOpenMenus((current) => ({
            ...current,
            [menuId]: !current[menuId],
        }));
    }

    function toggleCategory(categoryId: number) {
        setOpenCategories((current) => ({
            ...current,
            [categoryId]: !current[categoryId],
        }));
    }

    function deleteMenuItem(id: number) {
        if (confirm('Weet je zeker dat je dit gerecht wilt verwijderen?')) {
            destroy(`/admin/menu-items/${id}`);
        }
    }

    function formatPrice(price: string) {
        return Number(price).toFixed(2).replace('.', ',');
    }
    const groupedMenus = filteredMenuItems.reduce<
        Record<
            string,
            {
                menu: Menu;
                categories: Record<
                    string,
                    {
                        category: Category;
                        items: MenuItem[];
                    }
                >;
            }
        >
    >((groups, item) => {
        const menu = item.category.menu;

        if (!menu) {
            return groups;
        }

        if (!groups[menu.id]) {
            groups[menu.id] = {
                menu,
                categories: {},
            };
        }

        if (!groups[menu.id].categories[item.category.id]) {
            groups[menu.id].categories[item.category.id] = {
                category: item.category,
                items: [],
            };
        }

        groups[menu.id].categories[item.category.id].items.push(item);

        return groups;
    }, {});

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
                                    className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#5d6948] uppercase"
                                >
                                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                        ←
                                    </span>
                                    Terug naar dashboard
                                </Link>

                                <p className="mt-7 text-[10px] tracking-[0.35em] text-[#5d6948] uppercase">
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
                                className="inline-flex items-center justify-center bg-[#20231f] px-6 py-4 text-[10px] tracking-[0.22em] text-[#f7f4ee] uppercase transition duration-300 hover:bg-[#5d6948]"
                            >
                                + Nieuw gerecht
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mb-8 grid gap-4 sm:grid-cols-3">
                            <div className="border border-black/10 bg-white p-5">
                                <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
                                    Totaal
                                </p>

                                <p className="mt-2 font-serif text-3xl">
                                    {menuItems.length}
                                </p>
                            </div>

                            <div className="border border-black/10 bg-white p-5">
                                <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
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
                                <p className="text-[9px] tracking-[0.25em] text-[#20231f]/35 uppercase">
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

                        {/* Search */}
                        <div className="mb-8">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        placeholder="Zoek gerecht, categorie of menu..."
                                        className="w-full border border-black/10 bg-white px-5 py-4 pr-12 text-sm text-[#20231f] transition outline-none placeholder:text-[#20231f]/30 focus:border-[#5d6948] focus:ring-2 focus:ring-[#5d6948]/10"
                                    />

                                    {search && (
                                        <button
                                            type="button"
                                            onClick={() => setSearch('')}
                                            className="absolute top-1/2 right-4 -translate-y-1/2 text-lg text-[#20231f]/35 transition hover:text-[#20231f]"
                                        >
                                            ×
                                        </button>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowFeaturedOnly(
                                            (current) => !current,
                                        )
                                    }
                                    className={`shrink-0 px-5 py-4 text-[9px] tracking-[0.2em] uppercase transition ${
                                        showFeaturedOnly
                                            ? 'bg-[#5d6948] text-white'
                                            : 'border border-black/10 bg-white text-[#20231f]/60 hover:border-[#5d6948]'
                                    }`}
                                >
                                    Uitgelicht
                                </button>

                                {(search || showFeaturedOnly) && (
                                    <div className="shrink-0 border border-black/10 bg-[#ebe7dc] px-4 py-3 text-[9px] tracking-[0.18em] text-[#20231f]/55 uppercase">
                                        {filteredMenuItems.length}{' '}
                                        {filteredMenuItems.length === 1
                                            ? 'resultaat'
                                            : 'resultaten'}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Items grouped by menu and category */}
                        {filteredMenuItems.length > 0 ? (
                            <div className="space-y-6">
                                {Object.values(groupedMenus).map(
                                    (menuGroup) => {
                                        const totalItems = Object.values(
                                            menuGroup.categories,
                                        ).reduce(
                                            (total, categoryGroup) =>
                                                total +
                                                categoryGroup.items.length,
                                            0,
                                        );

                                        const menuOpen =
                                            search.trim() !== '' ||
                                            (openMenus[menuGroup.menu.id] ??
                                                false);

                                        return (
                                            <section
                                                key={menuGroup.menu.id}
                                                className="overflow-hidden border border-black/10 bg-white shadow-[0_20px_60px_rgba(32,35,31,0.04)]"
                                            >
                                                {/* MENU HEADER */}
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        toggleMenu(
                                                            menuGroup.menu.id,
                                                        )
                                                    }
                                                    className="flex w-full flex-col gap-4 bg-[#20231f] px-6 py-6 text-left text-[#f7f4ee] transition hover:bg-[#2a2e29] sm:flex-row sm:items-center sm:justify-between"
                                                >
                                                    <div>
                                                        <p className="text-[9px] tracking-[0.28em] text-white/40 uppercase">
                                                            Menu
                                                        </p>

                                                        <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                                                            {
                                                                menuGroup.menu
                                                                    .name
                                                            }
                                                        </h2>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <span className="bg-white/10 px-4 py-2 text-[9px] tracking-[0.2em] text-white/60 uppercase">
                                                            {
                                                                Object.values(
                                                                    menuGroup.categories,
                                                                ).length
                                                            }{' '}
                                                            categorieën
                                                        </span>

                                                        <span className="bg-[#5d6948] px-4 py-2 text-[9px] tracking-[0.2em] text-white uppercase">
                                                            {totalItems}{' '}
                                                            gerechten
                                                        </span>

                                                        <span
                                                            className={`ml-2 text-xl transition-transform duration-300 ${
                                                                menuOpen
                                                                    ? 'rotate-180'
                                                                    : ''
                                                            }`}
                                                        >
                                                            ↓
                                                        </span>
                                                    </div>
                                                </button>

                                                {/* MENU CONTENT */}
                                                <div
                                                    className={`grid transition-all duration-300 ${
                                                        menuOpen
                                                            ? 'grid-rows-[1fr]'
                                                            : 'grid-rows-[0fr]'
                                                    }`}
                                                >
                                                    <div className="overflow-hidden">
                                                        <div className="divide-y divide-black/10">
                                                            {Object.values(
                                                                menuGroup.categories,
                                                            ).map(
                                                                (
                                                                    categoryGroup,
                                                                ) => {
                                                                    const categoryOpen =
                                                                        search.trim() !==
                                                                            '' ||
                                                                        (openCategories[
                                                                            categoryGroup
                                                                                .category
                                                                                .id
                                                                        ] ??
                                                                            false);

                                                                    return (
                                                                        <section
                                                                            key={
                                                                                categoryGroup
                                                                                    .category
                                                                                    .id
                                                                            }
                                                                        >
                                                                            {/* CATEGORY HEADER */}
                                                                            <button
                                                                                type="button"
                                                                                onClick={() =>
                                                                                    toggleCategory(
                                                                                        categoryGroup
                                                                                            .category
                                                                                            .id,
                                                                                    )
                                                                                }
                                                                                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-[#f7f4ee] sm:px-7"
                                                                            >
                                                                                <div>
                                                                                    <p className="text-[9px] tracking-[0.25em] text-[#5d6948] uppercase">
                                                                                        Categorie
                                                                                    </p>

                                                                                    <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                                                                                        {
                                                                                            categoryGroup
                                                                                                .category
                                                                                                .name
                                                                                        }
                                                                                    </h3>
                                                                                </div>

                                                                                <div className="flex items-center gap-4">
                                                                                    <span className="text-[9px] tracking-[0.2em] text-[#20231f]/35 uppercase">
                                                                                        {
                                                                                            categoryGroup
                                                                                                .items
                                                                                                .length
                                                                                        }{' '}
                                                                                        {categoryGroup
                                                                                            .items
                                                                                            .length ===
                                                                                        1
                                                                                            ? 'gerecht'
                                                                                            : 'gerechten'}
                                                                                    </span>

                                                                                    <span
                                                                                        className={`text-lg text-[#5d6948] transition-transform duration-300 ${
                                                                                            categoryOpen
                                                                                                ? 'rotate-180'
                                                                                                : ''
                                                                                        }`}
                                                                                    >
                                                                                        ↓
                                                                                    </span>
                                                                                </div>
                                                                            </button>

                                                                            {/* CATEGORY CONTENT */}
                                                                            <div
                                                                                className={`grid transition-all duration-300 ${
                                                                                    categoryOpen
                                                                                        ? 'grid-rows-[1fr]'
                                                                                        : 'grid-rows-[0fr]'
                                                                                }`}
                                                                            >
                                                                                <div className="overflow-hidden">
                                                                                    <div className="grid gap-4 px-5 pb-6 sm:px-7 xl:grid-cols-2">
                                                                                        {categoryGroup.items.map(
                                                                                            (
                                                                                                menuItem,
                                                                                            ) => (
                                                                                                <article
                                                                                                    key={
                                                                                                        menuItem.id
                                                                                                    }
                                                                                                    className="group border border-black/10 bg-[#f7f4ee] p-4 transition duration-200 hover:border-[#5d6948]/30"
                                                                                                >
                                                                                                    <div className="flex gap-4">
                                                                                                        {/* Image */}
                                                                                                        <div className="h-24 w-24 shrink-0 overflow-hidden bg-[#ebe7dc] sm:h-28 sm:w-28">
                                                                                                            {menuItem.image ? (
                                                                                                                <img
                                                                                                                    src={`/storage/${menuItem.image}`}
                                                                                                                    alt={
                                                                                                                        menuItem.name
                                                                                                                    }
                                                                                                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                                                                                />
                                                                                                            ) : (
                                                                                                                <div className="flex h-full items-center justify-center">
                                                                                                                    <span className="px-2 text-center text-[7px] tracking-[0.18em] text-[#20231f]/25 uppercase">
                                                                                                                        Geen
                                                                                                                        afbeelding
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </div>

                                                                                                        {/* Info */}
                                                                                                        <div className="min-w-0 flex-1">
                                                                                                            <div className="flex items-start justify-between gap-4">
                                                                                                                <div className="min-w-0">
                                                                                                                    <h4 className="font-serif text-xl leading-tight sm:text-2xl">
                                                                                                                        {
                                                                                                                            menuItem.name
                                                                                                                        }
                                                                                                                    </h4>

                                                                                                                    {menuItem.description && (
                                                                                                                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#20231f]/45 sm:text-sm sm:leading-6">
                                                                                                                            {
                                                                                                                                menuItem.description
                                                                                                                            }
                                                                                                                        </p>
                                                                                                                    )}
                                                                                                                </div>

                                                                                                                <div className="shrink-0 text-right">
                                                                                                                    {menuItem.price !==
                                                                                                                        null && (
                                                                                                                        <p className="text-sm font-medium text-[#5d6948]">
                                                                                                                            €
                                                                                                                            {formatPrice(
                                                                                                                                menuItem.price,
                                                                                                                            )}
                                                                                                                        </p>
                                                                                                                    )}

                                                                                                                    {menuItem.price ===
                                                                                                                        null &&
                                                                                                                        menuItem.price_text && (
                                                                                                                            <p className="text-sm font-medium text-[#5d6948]">
                                                                                                                                {
                                                                                                                                    menuItem.price_text
                                                                                                                                }
                                                                                                                            </p>
                                                                                                                        )}
                                                                                                                </div>
                                                                                                            </div>

                                                                                                            {/* Variant prices */}
                                                                                                            {menuItem
                                                                                                                .prices
                                                                                                                ?.length >
                                                                                                                0 && (
                                                                                                                <div className="mt-3 flex flex-wrap gap-2">
                                                                                                                    {menuItem.prices.map(
                                                                                                                        (
                                                                                                                            price,
                                                                                                                        ) => (
                                                                                                                            <span
                                                                                                                                key={
                                                                                                                                    price.id
                                                                                                                                }
                                                                                                                                className="bg-white px-2.5 py-1.5 text-[9px] text-[#20231f]/55"
                                                                                                                            >
                                                                                                                                {
                                                                                                                                    price.label
                                                                                                                                }{' '}
                                                                                                                                <strong className="font-medium text-[#5d6948]">
                                                                                                                                    €
                                                                                                                                    {formatPrice(
                                                                                                                                        price.price,
                                                                                                                                    )}
                                                                                                                                </strong>
                                                                                                                            </span>
                                                                                                                        ),
                                                                                                                    )}
                                                                                                                </div>
                                                                                                            )}

                                                                                                            {/* Status */}
                                                                                                            <div className="mt-4 flex flex-wrap items-center gap-2">
                                                                                                                {menuItem.is_featured && (
                                                                                                                    <span className="bg-[#5d6948]/10 px-2.5 py-1.5 text-[8px] tracking-[0.15em] text-[#5d6948] uppercase">
                                                                                                                        Uitgelicht
                                                                                                                    </span>
                                                                                                                )}

                                                                                                                <span
                                                                                                                    className={`px-2.5 py-1.5 text-[8px] tracking-[0.15em] uppercase ${
                                                                                                                        menuItem.is_available
                                                                                                                            ? 'bg-green-50 text-green-700'
                                                                                                                            : 'bg-red-50 text-red-600'
                                                                                                                    }`}
                                                                                                                >
                                                                                                                    {menuItem.is_available
                                                                                                                        ? 'Beschikbaar'
                                                                                                                        : 'Niet beschikbaar'}
                                                                                                                </span>

                                                                                                                <span className="px-2.5 py-1.5 text-[8px] tracking-[0.15em] text-[#20231f]/35 uppercase">
                                                                                                                    Volgorde{' '}
                                                                                                                    {
                                                                                                                        menuItem.sort_order
                                                                                                                    }
                                                                                                                </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    {/* Actions */}
                                                                                                    <div className="mt-4 flex items-center justify-end gap-4 border-t border-black/10 pt-4">
                                                                                                        <Link
                                                                                                            href={`/admin/menu-items/${menuItem.id}/edit`}
                                                                                                            className="text-[9px] tracking-[0.18em] text-[#5d6948] uppercase transition hover:text-[#20231f]"
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
                                                                                                            className="text-[9px] tracking-[0.18em] text-red-600 uppercase transition hover:text-red-800"
                                                                                                        >
                                                                                                            Verwijderen
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </article>
                                                                                            ),
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </section>
                                                                    );
                                                                },
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        );
                                    },
                                )}
                            </div>
                        ) : (
                            <div className="border border-black/10 bg-white px-6 py-20 text-center">
                                <p className="text-[10px] tracking-[0.3em] text-[#5d6948] uppercase">
                                    {search ? 'Zoeken' : 'Menu'}
                                </p>

                                <h2 className="mt-4 font-serif text-3xl">
                                    {search
                                        ? 'Geen gerechten gevonden'
                                        : 'Nog geen gerechten'}
                                </h2>

                                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#20231f]/50">
                                    {search
                                        ? `Geen resultaten gevonden voor "${search}".`
                                        : 'Voeg je eerste gerecht toe om het menu van Brasserie De Bank op te bouwen.'}
                                </p>

                                {search ? (
                                    <button
                                        type="button"
                                        onClick={() => setSearch('')}
                                        className="mt-7 inline-flex border border-[#20231f]/15 px-6 py-4 text-[10px] tracking-[0.2em] text-[#20231f] uppercase transition hover:border-[#20231f]"
                                    >
                                        Zoeken wissen
                                    </button>
                                ) : (
                                    <Link
                                        href="/admin/menu-items/create"
                                        className="mt-7 inline-flex bg-[#20231f] px-6 py-4 text-[10px] tracking-[0.2em] text-[#f7f4ee] uppercase transition hover:bg-[#5d6948]"
                                    >
                                        + Nieuw gerecht
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
