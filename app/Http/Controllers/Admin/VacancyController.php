<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class VacancyController extends Controller
{
    public function index()
    {
        $vacancies = Vacancy::orderByDesc('published_at')
            ->orderByDesc('created_at')
            ->get();

        return Inertia::render('admin/vacancies/index', [
            'vacancies' => $vacancies,
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/vacancies/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:vacancies,slug'],
            'excerpt' => ['nullable', 'string'],
            'content' => ['nullable', 'string'],
            'contract_type' => ['nullable', 'string', 'max:255'],
            'hours' => ['nullable', 'string', 'max:255'],
            'location' => ['nullable', 'string', 'max:255'],
            'image' => ['nullable', 'image', 'max:4096'],
            'is_published' => ['required', 'boolean'],
            'published_at' => ['nullable', 'date'],
        ]);

        if (
            $validated['is_published'] &&
            empty($validated['published_at'])
        ) {
            $validated['published_at'] = now();
        }

        if ($request->hasFile('image')) {
            $validated['image'] = $request
                ->file('image')
                ->store('vacancies', 'public');
        }

        Vacancy::create($validated);

        return redirect()
            ->route('admin.vacancies.index')
            ->with('success', 'Vacature aangemaakt.');
    }

    public function edit(Vacancy $vacancy)
    {
        return Inertia::render('admin/vacancies/edit', [
            'vacancy' => $vacancy,
        ]);
    }

    public function update(Request $request, Vacancy $vacancy)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                'unique:vacancies,slug,' . $vacancy->id,
            ],
            'excerpt' => ['nullable', 'string'],
            'content' => ['nullable', 'string'],
            'contract_type' => ['nullable', 'string', 'max:255'],
            'hours' => ['nullable', 'string', 'max:255'],
            'location' => ['nullable', 'string', 'max:255'],
            'image' => ['nullable', 'image', 'max:4096'],
            'is_published' => ['required', 'boolean'],
            'published_at' => ['nullable', 'date'],
            'remove_image' => ['nullable', 'boolean'],
        ]);

        if (
            $validated['is_published'] &&
            empty($validated['published_at'])
        ) {
            $validated['published_at'] = now();
        }

        /*
         * Keep existing image when no new image is uploaded.
         */
        unset($validated['image']);

        if (
            $request->boolean('remove_image') &&
            $vacancy->image
        ) {
            Storage::disk('public')->delete($vacancy->image);
            $validated['image'] = null;
        }

        if ($request->hasFile('image')) {
            if ($vacancy->image) {
                Storage::disk('public')->delete($vacancy->image);
            }

            $validated['image'] = $request
                ->file('image')
                ->store('vacancies', 'public');
        }

        unset($validated['remove_image']);

        $vacancy->update($validated);

        return redirect()
            ->route('admin.vacancies.index')
            ->with('success', 'Vacature bijgewerkt.');
    }

    public function destroy(Vacancy $vacancy)
    {
        if ($vacancy->image) {
            Storage::disk('public')->delete($vacancy->image);
        }

        $vacancy->delete();

        return redirect()
            ->route('admin.vacancies.index')
            ->with('success', 'Vacature verwijderd.');
    }
}
