import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";


interface MenuItem {
    id: number;
    name: string;
    description: string | null;
    price: string;
    image: string | null;
    is_featured: boolean;
}

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    menu_items: MenuItem[];
}

interface Props {
    category: Category;
}

export default function CategoryMenu({ category }: Props) {
    return (
        <>
            <Head title={category.name} />

            <Navbar />

            <main className="bg-[#f7f4ee] text-[#20231f]">

                {/* Hero */}
                <section className="px-6 py-24 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-4xl text-center">

                        <Link
                            href="/menus"
                            className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5d6948] transition hover:text-[#20231f]"
                        >
                            ← Back to Menu
                        </Link>

                        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                            Our Menu
                        </p>

                        <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">
                            {category.name}
                        </h1>

                        {category.description && (
                            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#20231f]/65">
                                {category.description}
                            </p>
                        )}

                    </div>
                </section>

                {/* Menu items */}
                <section className="border-t border-black/5 bg-[#ebe7dc] px-6 py-20 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-6xl">

                        {category.menu_items.length === 0 ? (
                            <div className="border border-[#5d6948]/20 bg-[#f7f4ee] px-6 py-16 text-center">
                                <h2 className="font-serif text-2xl">
                                    No items available
                                </h2>

                                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#20231f]/50">
                                    There are currently no available items in
                                    this category.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">

                                {category.menu_items.map((item) => (
                                    <article
                                        key={item.id}
                                        className="group border-b border-black/10 pb-8"
                                    >
                                        <div className="flex gap-6">

                                            {/* Image */}
                                                {item.image && (
                                                    <div
                                                        className="shrink-0 overflow-hidden bg-[#f7f4ee]"
                                                        style={{
                                                            width: '160px',
                                                            height: '160px',
                                                        }}
                                                    >
                                                        <img
                                                            src={`/storage/${item.image}`}
                                                            alt={item.name}
                                                            className="block h-full w-full object-contain"
                                                        />
                                                    </div>
                                                )}
                                            {}



                                            {/* Content */}
                                            <div className="min-w-0 flex-1">

                                                <div className="flex items-start justify-between gap-4">
                                                    <h2 className="font-serif text-2xl text-[#20231f]">
                                                        {item.name}
                                                    </h2>

                                                    <span className="shrink-0 text-sm text-[#5d6948]">
                                                        €{Number(item.price).toFixed(2)}
                                                    </span>
                                                </div>

                                                {item.description && (
                                                    <p className="mt-3 text-sm leading-6 text-[#20231f]/55">
                                                        {item.description}
                                                    </p>
                                                )}

                                                {item.is_featured && (
                                                    <span className="mt-4 inline-block text-[10px] uppercase tracking-[0.2em] text-[#5d6948]">
                                                        Chef's choice
                                                    </span>
                                                )}

                                            </div>

                                        </div>
                                    </article>
                                ))}

                            </div>
                        )}

                    </div>
                </section>

                {/* Back to menus */}
                <section className="px-6 py-16 text-center sm:px-10">
                    <Link
                        href="/menu"
                        className="inline-flex items-center gap-3 bg-[#20231f] px-8 py-4 text-xs uppercase tracking-[0.2em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                    >
                        ← View all categories
                    </Link>
                </section>

            </main>

            <Footer/>
        </>
    );
}
