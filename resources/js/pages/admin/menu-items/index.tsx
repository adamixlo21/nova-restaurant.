import {Head, Link, useForm} from '@inertiajs/react';
import AdminSidebar from "@/components/AdminSidebar";

interface Category {
    id: number;
    name: string;
}

interface MenuItem {
    id: number;
    category_id: number;
    name: string;
    slug: string;
    description: string | null;
    price: string;
    image: string | null;
    is_available: boolean;
    is_featured: boolean;
    sort_order: number;
    category: Category;
}

interface Props {
    menuItems: MenuItem[];
}

export default function Index({menuItems}: Props) {
    const {delete: destroy} = useForm();

    function deleteMenuItem(id: number) {
        if (confirm('Are you sure you want to delete this menu item?')) {
            destroy(`/admin/menu-items/${id}`);
        }
    }

    return (
        <>
            <Head title="Menu Items"/>
            <div className="flex min-h-screen bg-[#f7f4ee]">
                <AdminSidebar/>

                <main className="min-w-0 flex-1 px-4 py-10 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="min-h-screen bg-[#f7f4ee] px-4 py-8 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-7xl">

                                {/* Back */}
                                <Link
                                    href="/dashboard"
                                    className="text-xs uppercase tracking-[0.15em] text-[#5d6948]"
                                >
                                    ← Back to Dashboard
                                </Link>

                                {/* Page heading */}
                                <div className="mb-10 mt-6 flex items-end justify-between gap-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.35em] text-[#5d6948]">
                                            Admin
                                        </p>

                                        <h1 className="mt-3 font-serif text-4xl text-[#20231f] sm:text-5xl">
                                            Menu Items
                                        </h1>

                                        <p className="mt-3 text-sm text-[#20231f]/60">
                                            Manage the dishes displayed on the restaurant menu.
                                        </p>
                                    </div>

                                    <Link
                                        href="/admin/menu-items/create"
                                        className="shrink-0 bg-[#20231f] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                                    >
                                        Add Menu Item
                                    </Link>
                                </div>

                                {/* Menu item cards */}
                                {menuItems.length > 0 ? (
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {menuItems.map((menuItem) => (
                                            <div
                                                key={menuItem.id}
                                                className="group border border-[#5d6948]/20 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5d6948]/40 hover:shadow-lg"
                                            >
                                                {/* Top */}
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6948]">
                                                            {menuItem.category.name}
                                                        </p>

                                                        <h2 className="mt-2 font-serif text-2xl text-[#20231f]">
                                                            {menuItem.name}
                                                        </h2>
                                                    </div>

                                                    <span className="shrink-0 font-serif text-lg text-[#20231f]">
                                                                € {menuItem.price}
                                                    </span>

                                                </div>

                                                {/* Divider */}
                                                <div className="my-6 border-t border-[#5d6948]/10"/>

                                                {/* Information */}
                                                <div className="space-y-4">

                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                            Available
                                                        </span>

                                                        <span
                                                            className={`text-xs uppercase tracking-[0.1em] ${
                                                                menuItem.is_available
                                                                    ? 'text-green-700'
                                                                    : 'text-red-600'
                                                                }
                                                            `}
                                                        >
                                                                {menuItem.is_available
                                                                    ? 'Yes'
                                                                    : 'No'
                                                                }
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                            Featured
                                                        </span>

                                                        <span
                                                            className={`text-xs uppercase tracking-[0.1em] ${
                                                                menuItem.is_featured
                                                                    ? 'text-green-700'
                                                                    : 'text-[#20231f]/50'
                                                                }
                                                            `}
                                                        >
                                                                {menuItem.is_featured
                                                                    ? 'Yes'
                                                                    : 'No'
                                                                }
                                                        </span>

                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <span
                                                            className="text-xs uppercase tracking-[0.15em] text-[#5d6948]">
                                                            Order
                                                        </span>

                                                        <span className="text-sm text-[#20231f]">
                                                            {menuItem.sort_order}
                                                        </span>
                                                    </div>

                                                </div>
                                                {/* Image */}
                                                <div className="aspect-[4/3] overflow-hidden bg-[#ebe7dc]">
                                                    {menuItem.image ? (
                                                        <img
                                                            src={`/storage/${menuItem.image}`}
                                                            alt={menuItem.name}
                                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full items-center justify-center">
                                                            <span className="text-xs uppercase tracking-[0.2em] text-[#20231f]/40">
                                                                No Image
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Actions */}
                                                <div className="mt-6 flex gap-3">

                                                    <Link
                                                        href={`/admin/menu-items/${menuItem.id}/edit`}
                                                        className="flex-1 border border-[#20231f] px-4 py-3 text-center text-xs uppercase tracking-[0.15em] text-[#20231f] transition hover:bg-[#20231f] hover:text-[#f7f4ee]"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            deleteMenuItem(menuItem.id)
                                                        }
                                                        className="flex-1 border border-red-600 px-4 py-3 text-xs uppercase tracking-[0.15em] text-red-600 transition hover:bg-red-600 hover:text-white"
                                                    >
                                                        Delete
                                                    </button>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="border border-[#5d6948]/20 bg-white px-6 py-16 text-center">
                                        <p className="font-serif text-2xl text-[#20231f]">
                                            No menu items yet
                                        </p>

                                        <p className="mt-2 text-sm text-[#20231f]/50">
                                            Create your first menu item.
                                        </p>

                                        <Link
                                            href="/admin/menu-items/create"
                                            className="mt-6 inline-block bg-[#20231f] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#f7f4ee] transition hover:bg-[#5d6948]"
                                        >
                                            Add Menu Item
                                        </Link>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </main>
            </div>


        </>
    );
}
