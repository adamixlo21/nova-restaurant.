<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\MenuItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuItemController extends Controller
{
    public function index()
    {
        $menuItems = MenuItem::with('category')
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
            'price' => ['required', 'numeric', 'min:0'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
            'is_available' => ['boolean'],
            'is_featured' => ['boolean'],
            'sort_order' => ['required', 'integer'],
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')
                ->store('menu-items', 'public');
        }

        MenuItem::create($validated);

        return redirect()
            ->route('admin.menu-items.index');
    }

    public function edit(MenuItem $menuItem)
    {
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
            'price' => ['required', 'numeric', 'min:0'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
            'is_available' => ['boolean'],
            'is_featured' => ['boolean'],
            'sort_order' => ['required', 'integer'],
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')
                ->store('menu-items', 'public');
        } else {
            unset($validated['image']);
        }

        $menuItem->update($validated);

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

        return Inertia::render('menu', [
            'categories' => $categories,
        ]);
    }
}
