<?php

namespace App\Http\Controllers;

use App\Models\Actualiteit;
use Inertia\Inertia;

class ActualiteitController extends Controller
{
    public function index()
    {
        $actualiteiten = Actualiteit::where('is_published', true)
            ->whereNotNull('published_at')
            ->orderByDesc('published_at')
            ->get();

        return Inertia::render('actualiteiten/index', [
            'actualiteiten' => $actualiteiten,
        ]);
    }

    public function show(Actualiteit $actualiteit)
    {
        abort_unless($actualiteit->is_published, 404);

        return Inertia::render('actualiteiten/show', [
            'actualiteit' => $actualiteit,
        ]);
    }
}
