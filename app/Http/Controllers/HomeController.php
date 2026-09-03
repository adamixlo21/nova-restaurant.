<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\MenuItem;

class HomeController extends Controller
{
    public function index(): Response
    {
        $featuredDishes = MenuItem::with('category')
            ->where('is_available', true)
            ->where('is_featured', true)
            ->orderBy('sort_order')
            ->take(4)
            ->get();

        return Inertia::render('home', [
            'featuredDishes' => $featuredDishes,
        ]);
    }
}
