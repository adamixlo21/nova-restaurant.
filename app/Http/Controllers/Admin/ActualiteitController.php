<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Actualiteit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ActualiteitController extends Controller
{
    public function index()
    {
        $actualiteiten = Actualiteit::orderByDesc('published_at')
            ->orderByDesc('created_at')
            ->get();

        return Inertia::render('admin/actualiteiten/index', [
            'actualiteiten' => $actualiteiten,
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/actualiteiten/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:actualiteiten,slug'],
            'excerpt' => ['nullable', 'string'],
            'content' => ['nullable', 'string'],
            'image' => ['nullable', 'image', 'max:4096'],
            'is_published' => ['required', 'boolean'],
            'published_at' => ['nullable', 'date'],
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request
                ->file('image')
                ->store('actualiteiten', 'public');
        }

        Actualiteit::create($validated);

        return redirect()
            ->route('admin.actualiteiten.index')
            ->with('success', 'Actualiteit aangemaakt.');
    }

    public function edit(Actualiteit $actualiteit)
    {
        return Inertia::render('admin/actualiteiten/edit', [
            'actualiteit' => $actualiteit,
        ]);
    }

    public function update(Request $request, Actualiteit $actualiteit)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                'unique:actualiteiten,slug,' . $actualiteit->id,
            ],
            'excerpt' => ['nullable', 'string'],
            'content' => ['nullable', 'string'],
            'image' => ['nullable', 'image', 'max:4096'],
            'is_published' => ['required', 'boolean'],
            'published_at' => ['nullable', 'date'],
            'remove_image' => ['nullable', 'boolean'],
        ]);

        // Automatically set publication date.
        if (
            $validated['is_published'] &&
            empty($validated['published_at'])
        ) {
            $validated['published_at'] = now();
        }

        /*
         * IMPORTANT:
         * Do not overwrite the existing image when no new image
         * was uploaded.
         */
        unset($validated['image']);

        /*
         * Delete existing image only when the user explicitly
         * selected "remove image".
         */
        if (
            $request->boolean('remove_image') &&
            $actualiteit->image
        ) {
            Storage::disk('public')->delete($actualiteit->image);

            $validated['image'] = null;
        }

        /*
         * If a new image was uploaded, replace the old image.
         */
        if ($request->hasFile('image')) {
            if ($actualiteit->image) {
                Storage::disk('public')->delete($actualiteit->image);
            }

            $validated['image'] = $request
                ->file('image')
                ->store('actualiteiten', 'public');
        }

        unset($validated['remove_image']);

        $actualiteit->update($validated);

        return redirect()
            ->route('admin.actualiteiten.index')
            ->with('success', 'Actualiteit bijgewerkt.');
    }

    public function destroy(Actualiteit $actualiteit)
    {
        if ($actualiteit->image) {
            Storage::disk('public')->delete($actualiteit->image);
        }

        $actualiteit->delete();

        return redirect()
            ->route('admin.actualiteiten.index')
            ->with('success', 'Actualiteit verwijderd.');
    }
}
