<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\MenuItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class MenuItemController extends Controller
{
    public function index()
    {
        $menuItems = MenuItem::with([
            'category',
            'prices',
        ])
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('admin/menu-items/index', [
            'menuItems' => $menuItems,
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/menu-items/create', [
            'categories' => Category::orderBy('sort_order')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => ['required', 'exists:categories,id'],
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:menu_items,slug'],
            'description' => ['nullable', 'string'],
            'price' => ['nullable', 'numeric', 'min:0'],
            'price_text' => ['nullable', 'string', 'max:255'],
            'prices' => ['nullable', 'array'],
            'prices.*.label' => ['required_with:prices.*.price', 'nullable', 'string', 'max:255'],
            'prices.*.price' => ['required_with:prices.*.label', 'nullable', 'numeric', 'min:0'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
            'is_available' => ['boolean'],
            'is_featured' => ['boolean'],
            'sort_order' => ['required', 'integer'],
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')
                ->store('menus-items', 'public');
        }

        $prices = $validated['prices'] ?? [];

        unset($validated['prices']);

        $menuItem = MenuItem::create($validated);

        foreach ($prices as $index => $price) {
            $menuItem->prices()->create([
                'label' => $price['label'],
                'price' => $price['price'],
                'sort_order' => $index + 1,
            ]);
        }

        return redirect()
            ->route('admin.menu-items.index');
    }

    public function edit(MenuItem $menuItem)
    {
        $menuItem->load('prices');

        return Inertia::render('admin/menu-items/edit', [
            'menuItem' => $menuItem,
            'categories' => Category::orderBy('sort_order')->get(),
        ]);
    }

    public function update(Request $request, MenuItem $menuItem)
    {
        $validated = $request->validate([
            'category_id' => ['required', 'exists:categories,id'],
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:menu_items,slug,' . $menuItem->id],
            'description' => ['nullable', 'string'],
            'price' => ['nullable', 'numeric', 'min:0'],
            'price_text' => ['nullable', 'string', 'max:255'],
            'prices' => ['nullable', 'array'],
            'prices.*.label' => ['required_with:prices.*.price', 'nullable', 'string', 'max:255'],
            'prices.*.price' => ['required_with:prices.*.label', 'nullable', 'numeric', 'min:0'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
            'remove_image' => ['boolean'],
            'is_available' => ['boolean'],
            'is_featured' => ['boolean'],
            'sort_order' => ['required', 'integer'],
        ]);

        // Remove the current image
        if ($request->boolean('remove_image') && $menuItem->image) {
            Storage::disk('public')->delete($menuItem->image);

            $validated['image'] = null;
        }

        // Replace with a new image
        if ($request->hasFile('image')) {
            // Delete the old image first
            if ($menuItem->image) {
                Storage::disk('public')->delete($menuItem->image);
            }

            $validated['image'] = $request->file('image')
                ->store('menu-items', 'public');
        }

        $prices = $validated['prices'] ?? [];

        unset($validated['prices']);
        unset($validated['remove_image']);

        $menuItem->update($validated);

        $menuItem->prices()->delete();

        foreach ($prices as $index => $price) {
            $menuItem->prices()->create([
                'label' => $price['label'],
                'price' => $price['price'],
                'sort_order' => $index + 1,
            ]);
        }

        return redirect()
            ->route('admin.menu-items.index');
    }

    public function destroy(MenuItem $menuItem)
    {
        $menuItem->delete();

        return redirect()
            ->route('admin.menu-items.index');
    }

    public function publicMenu()
    {
        $categories = Category::with([
            'menuItems' => function ($query) {
                $query->where('is_available', true)
                    ->orderBy('sort_order');
            }
        ])
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('menus', [
            'categories' => $categories,
        ]);
    }

    public function categoryMenu(Category $category)
    {
        $category->load([
            'menuItems' => function ($query) {
                $query->where('is_available', true)
                    ->orderBy('sort_order');
            }
        ]);

        return Inertia::render('menu/category', [
            'category' => $category,
        ]);
    }
}
