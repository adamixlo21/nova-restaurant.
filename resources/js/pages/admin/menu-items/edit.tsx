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
}

interface Props {
    menuItem: MenuItem;
    categories: Category[];
}

export default function Edit({menuItem, categories}: Props) {
    const {data, setData, put, processing, errors} = useForm({
        category_id: String(menuItem.category_id),
        name: menuItem.name,
        slug: menuItem.slug,
        description: menuItem.description ?? '',
        price: menuItem.price,
        image: null as File | null,
        is_available: menuItem.is_available,
        is_featured: menuItem.is_featured,
        sort_order: menuItem.sort_order,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        put(`/admin/menu-items/${menuItem.id}`, {
            forceFormData: true,
        });
    }

    return (
        <>
            <Head title="Edit Menu Item"/>
            <div className="flex min-h-screen bg-[#f7f4ee]">
                <AdminSidebar />

                <main className="min-w-0 flex-1 px-4 py-10 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="min-h-screen bg-[#f7f4ee] px-6 py-10 text-[#20231f]">
                            <div className="mx-auto max-w-2xl">

                                <div className="mb-10">
                                    <Link
                                        href="/admin/menu-items"
                                        className="text-xs uppercase tracking-[0.15em] text-[#5d6948]"
                                    >
                                        ← Back to Menu Items
                                    </Link>

                                    <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#5d6948]">
                                        Admin
                                    </p>

                                    <h1 className="mt-2 font-serif text-4xl">
                                        Edit Menu Item
                                    </h1>
                                </div>

                                <form
                                    onSubmit={submit}
                                    className="border border-black/10 bg-white p-8"
                                >
                                    {/* Category */}
                                    <div className="mb-6">
                                        <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                            Category
                                        </label>

                                        <select
                                            value={data.category_id}
                                            onChange={(e) =>
                                                setData('category_id', e.target.value)
                                            }
                                            className="w-full border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#5d6948]"
                                        >
                                            <option value="">Select a category</option>

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
                                    <div className="mb-6">
                                        <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                            className="w-full border border-black/10 px-4 py-3 outline-none focus:border-[#5d6948]"
                                        />

                                        {errors.name && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Slug */}
                                    <div className="mb-6">
                                        <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                            Slug
                                        </label>

                                        <input
                                            type="text"
                                            value={data.slug}
                                            onChange={(e) =>
                                                setData('slug', e.target.value)
                                            }
                                            className="w-full border border-black/10 px-4 py-3 outline-none focus:border-[#5d6948]"
                                        />

                                        {errors.slug && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.slug}
                                            </p>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <div className="mb-6">
                                        <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                            Description
                                        </label>

                                        <textarea
                                            value={data.description}
                                            onChange={(e) =>
                                                setData('description', e.target.value)
                                            }
                                            rows={4}
                                            className="w-full border border-black/10 px-4 py-3 outline-none focus:border-[#5d6948]"
                                        />

                                        {errors.description && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                            Price
                                        </label>

                                        <input
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            value={data.price}
                                            onChange={(e) =>
                                                setData('price', e.target.value)
                                            }
                                            className="w-full border border-black/10 px-4 py-3 outline-none focus:border-[#5d6948]"
                                        />

                                        {errors.price && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.price}
                                            </p>
                                        )}
                                    </div>

                                    {/* Image */}
                                    <div className="mb-6">
                                        <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                            Image
                                        </label>

                                        {/* Current image */}
                                        {menuItem.image && (
                                            <div className="mb-4 overflow-hidden border border-black/10">
                                                <img
                                                    src={`/storage/${menuItem.image}`}
                                                    alt={menuItem.name}
                                                    className="h-48 w-full object-cover"
                                                />
                                            </div>
                                        )}

                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                                setData('image', e.target.files?.[0] ?? null)
                                            }
                                            className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none file:mr-4 file:border-0 file:bg-[#20231f] file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.15em] file:text-[#f7f4ee] hover:file:bg-[#5d6948]"
                                        />

                                        <p className="mt-2 text-xs text-[#20231f]/50">
                                            Leave empty to keep the current image. Upload JPG, PNG, or WebP.
                                        </p>

                                        {errors.image && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.image}
                                            </p>
                                        )}
                                    </div>

                                    {/* Available */}
                                    <div className="mb-6">
                                        <label className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                checked={data.is_available}
                                                onChange={(e) =>
                                                    setData(
                                                        'is_available',
                                                        e.target.checked
                                                    )
                                                }
                                                className="h-4 w-4"
                                            />

                                            <span className="text-xs uppercase tracking-[0.15em]">
                                    Available
                                </span>
                                        </label>

                                        {errors.is_available && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.is_available}
                                            </p>
                                        )}
                                    </div>
                                    {/* Featured */}
                                    <div className="mb-6">
                                        <label className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                checked={data.is_featured}
                                                onChange={(e) =>
                                                    setData('is_featured', e.target.checked)
                                                }
                                                className="h-4 w-4"
                                            />

                                            <span className="text-xs uppercase tracking-[0.15em]">
                                    Featured on homepage
                                </span>
                                        </label>

                                        {errors.is_featured && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.is_featured}
                                            </p>
                                        )}
                                    </div>

                                    {/* Sort Order */}
                                    <div className="mb-8">
                                        <label className="mb-2 block text-xs uppercase tracking-[0.15em]">
                                            Sort Order
                                        </label>

                                        <input
                                            type="number"
                                            value={data.sort_order}
                                            onChange={(e) =>
                                                setData(
                                                    'sort_order',
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full border border-black/10 px-4 py-3 outline-none focus:border-[#5d6948]"
                                        />

                                        {errors.sort_order && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.sort_order}
                                            </p>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex items-center justify-end gap-4">
                                        <Link
                                            href="/admin/menu-items"
                                            className="px-5 py-3 text-xs uppercase tracking-[0.15em] text-[#20231f]/60"
                                        >
                                            Cancel
                                        </Link>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="bg-[#20231f] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#f7f4ee] transition hover:bg-[#5d6948] disabled:opacity-50"
                                        >
                                            {processing ? 'Saving...' : 'Save Changes'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>


        </>
    );
}
