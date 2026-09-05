import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface MenuItemPrice {
    id: number;
    label: string;
    price: string;
    sort_order: number;
}

interface MenuItem {
    id: number;
    name: string;
    description: string | null;
    price: string | null;
    price_text: string | null;
    image: string | null;
    is_featured: boolean;
    prices: MenuItemPrice[];
}

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    menu_items: MenuItem[];
}

interface Menu {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    categories: Category[];
}

interface Props {
    menu: Menu;
}

export default function Show({ menu }: Props) {
    return (
        <>
            <Head title={menu.name} />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">

                {/* Hero */}
                <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <Link
                            href="/menus"
                            className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5d6948] transition hover:text-[#20231f]"
                        >
                            ← Terug naar menu
                        </Link>

                        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                            Brasserie De Bank
                        </p>

                        <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">
                            {menu.name}
                        </h1>

                        {menu.description && (
                            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#20231f]/60">
                                {menu.description}
                            </p>
                        )}
                    </div>
                </section>

                {/* Menu */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                    <div className="mx-auto max-w-5xl space-y-20">

                        {menu.categories.length === 0 ? (
                            <div className="border border-[#5d6948]/20 bg-[#f7f4ee] px-6 py-16 text-center">
                                <h2 className="font-serif text-2xl">
                                    Nog geen gerechten beschikbaar
                                </h2>

                                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#20231f]/50">
                                    Deze kaart wordt momenteel bijgewerkt.
                                </p>
                            </div>
                        ) : (
                            menu.categories.map((category) => (
                                <section key={category.id}>

                                    {/* Category heading */}
                                    <div className="mb-10 border-b border-[#5d6948]/20 pb-5">
                                        <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#5d6948]">
                                            {menu.name}
                                        </p>

                                        <h2 className="font-serif text-3xl text-[#20231f] sm:text-4xl">
                                            {category.name}
                                        </h2>

                                        {category.description && (
                                            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#20231f]/50">
                                                {category.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Items */}
                                    {category.menu_items.length === 0 ? (
                                        <p className="text-sm text-[#20231f]/40">
                                            Geen items beschikbaar.
                                        </p>
                                    ) : (
                                        <div className="space-y-8">
                                            {category.menu_items.map((item) => (
                                                <article
                                                    key={item.id}
                                                    className="border-b border-black/10 pb-8"
                                                >
                                                    <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">

                                                        {/* Image */}
                                                        {item.image && (
                                                            <div
                                                                className="shrink-0 overflow-hidden bg-[#f7f4ee]"
                                                                style={{
                                                                    width: '140px',
                                                                    height: '140px',
                                                                }}
                                                            >
                                                                <img
                                                                    src={`/storage/${item.image}`}
                                                                    alt={item.name}
                                                                    className="block h-full w-full object-contain"
                                                                />
                                                            </div>
                                                        )}

                                                        {/* Content */}
                                                        <div className="min-w-0 flex-1">
                                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                                                                <div className="min-w-0">
                                                                    <h3 className="font-serif text-2xl leading-tight text-[#20231f]">
                                                                        {item.name}
                                                                    </h3>

                                                                    {item.description && (
                                                                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#20231f]/55">
                                                                            {item.description}
                                                                        </p>
                                                                    )}

                                                                    {item.is_featured && (
                                                                        <span className="mt-4 inline-block border border-[#5d6948]/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#5d6948]">
                                                                            Chef's choice
                                                                        </span>
                                                                    )}
                                                                </div>

                                                                {/* Prices */}
                                                                <div className="shrink-0 text-left text-sm text-[#5d6948] sm:min-w-32 sm:text-right">
                                                                    {item.price !== null && (
                                                                        <div className="font-medium">
                                                                            €
                                                                            {Number(item.price)
                                                                                .toFixed(2)
                                                                                .replace('.', ',')}

                                                                            {item.price_text &&
                                                                                ` ${item.price_text}`}
                                                                        </div>
                                                                    )}

                                                                    {item.price === null &&
                                                                        item.price_text && (
                                                                            <div className="font-medium">
                                                                                {item.price_text}
                                                                            </div>
                                                                        )}

                                                                    {item.prices?.length > 0 && (
                                                                        <div className="mt-2 space-y-1.5">
                                                                            {item.prices.map(
                                                                                (price) => (
                                                                                    <div
                                                                                        key={
                                                                                            price.id
                                                                                        }
                                                                                        className="flex items-center gap-4 sm:justify-end"
                                                                                    >
                                                                                        <span className="text-xs text-[#20231f]/45">
                                                                                            {
                                                                                                price.label
                                                                                            }
                                                                                        </span>

                                                                                        <span className="font-medium">
                                                                                            €
                                                                                            {Number(
                                                                                                price.price,
                                                                                            )
                                                                                                .toFixed(
                                                                                                    2,
                                                                                                )
                                                                                                .replace(
                                                                                                    '.',
                                                                                                    ',',
                                                                                                )}
                                                                                        </span>
                                                                                    </div>
                                                                                ),
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            ))
                        )}
                    </div>
                </section>

                {/* Back */}
                <section className="px-6 py-14 text-center sm:px-10">
                    <Link
                        href="/menus"
                        className="inline-flex items-center gap-3 bg-[#20231f] px-8 py-4 text-xs uppercase tracking-[0.2em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                    >
                        ← Alle kaarten
                    </Link>
                </section>
            </main>

            <Footer />
        </>
    );
}
