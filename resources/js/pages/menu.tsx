import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';

interface MenuItem {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    price: string;
    image: string | null;
    is_available: boolean;
    sort_order: number;
}

interface Category {
    id: number;
    name: string;
    slug: string;
    menu_items: MenuItem[];
}

interface Props {
    categories: Category[];
}

export default function Menu({ categories }: Props) {
    return (
        <>
            <Head title="Menu" />

            <div className="min-h-screen bg-[#f7f4ee] text-[#20231f]">
                <Navbar />

                <main className="px-6 py-20">
                    <div className="mx-auto max-w-5xl">

                        {/* Header */}
                        <div className="mb-16 text-center">
                            <p className="text-xs uppercase tracking-[0.35em] text-[#5d6948]">
                                Our Menu
                            </p>

                            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
                                Mediterranean Flavours
                            </h1>

                            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#20231f]/60">
                                Fresh ingredients, honest flavours and
                                Mediterranean traditions.
                            </p>
                        </div>

                        {/* Categories */}
                        <div className="space-y-16">
                            {categories.map((category) => (
                                <section key={category.id}>

                                    {/* Category name */}
                                    <div className="mb-8 border-b border-black/10 pb-4">
                                        <h2 className="font-serif text-3xl">
                                            {category.name}
                                        </h2>
                                    </div>

                                    {/* Menu items */}
                                    <div className="space-y-6">
                                        {category.menu_items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex gap-6 border-b border-black/5 pb-6"
                                            >
                                                {/* Image */}
                                                {item.image && (
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-24 w-24 shrink-0 object-cover"
                                                    />
                                                )}

                                                {/* Information */}
                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <h3 className="font-serif text-xl">
                                                            {item.name}
                                                        </h3>

                                                        <span className="shrink-0 text-sm font-medium">
                                                            € {item.price}
                                                        </span>
                                                    </div>

                                                    {item.description && (
                                                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#20231f]/60">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </section>
                            ))}
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}
