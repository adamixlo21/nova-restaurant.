<?php

namespace App\Http\Controllers;

use App\Models\Vacancy;
use Inertia\Inertia;

class VacancyController extends Controller
{
    public function index()
    {
        $vacancies = Vacancy::where('is_published', true)
            ->whereNotNull('published_at')
            ->orderByDesc('published_at')
            ->get();

        return Inertia::render('vacancies/index', [
            'vacancies' => $vacancies,
        ]);
    }

    public function show(Vacancy $vacancy)
    {
        abort_unless($vacancy->is_published, 404);

        return Inertia::render('vacancies/show', [
            'vacancy' => $vacancy,
        ]);
    }
}
