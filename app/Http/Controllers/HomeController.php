<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\MenuItem;
use App\Models\Actualiteit;

class HomeController extends Controller
{
    public function index(): Response
    {
        $featuredDishes = MenuItem::with([
            'category',
            'prices',
        ])
            ->where('is_available', true)
            ->where('is_featured', true)
            ->orderBy('sort_order')
            ->take(4)
            ->get();

        $actualiteiten = Actualiteit::where('is_published', true)
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now())
            ->orderByDesc('published_at')
            ->take(3)
            ->get();

        return Inertia::render('home', [
            'featuredDishes' => $featuredDishes,
            'actualiteiten' => $actualiteiten,

        ]);
    }
}
