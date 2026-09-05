<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::withCount('categories')
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('admin/menus/index', [
            'menus' => $menus,
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/menus/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:menus,slug'],
            'description' => ['nullable', 'string'],
            'sort_order' => ['required', 'integer', 'min:0'],
        ]);

        Menu::create($validated);

        return redirect()
            ->route('admin.menus.index');
    }

    public function edit(Menu $menu)
    {

        return Inertia::render('admin/menus/edit', [
            'menu' => $menu,
        ]);
    }

    public function update(Request $request, Menu $menu)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                'unique:menus,slug,' . $menu->id,
            ],
            'description' => ['nullable', 'string'],
            'sort_order' => ['required', 'integer', 'min:0'],
        ]);

        $menu->update($validated);

        return redirect()
            ->route('admin.menus.index');
    }

    public function destroy(Menu $menu)
    {
        $menu->delete();

        return redirect()
            ->route('admin.menus.index');
    }
    public function publicIndex()
    {
        $menus = Menu::withCount('categories')
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('menu', [
            'menus' => $menus,
        ]);
    }
    public function publicShow(Menu $menu)
    {
        $menu->load([
            'categories' => function ($query) {
                $query->orderBy('sort_order')
                    ->with([
                        'menuItems' => function ($query) {
                            $query->where('is_available', true)
                                ->orderBy('sort_order')
                                ->with('prices');
                        },
                    ]);
            },
        ]);

        return Inertia::render('menu/show', [
            'menu' => $menu,
        ]);
    }
}
