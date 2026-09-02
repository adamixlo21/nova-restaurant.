<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\MenuItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class MenuItemSeeder extends Seeder
{
    public function run(): void
    {
        $starters = Category::where('slug', 'starters')->firstOrFail();
        $mainCourses = Category::where('slug', 'main-courses')->firstOrFail();
        $desserts = Category::where('slug', 'desserts')->firstOrFail();
        $drinks = Category::where('slug', 'drinks')->firstOrFail();

        $items = [
            [
                'category_id' => $starters->id,
                'name' => 'Burrata & Heirloom Tomatoes',
                'description' => 'Creamy burrata, heirloom tomatoes, basil oil and sea salt.',
                'price' => 12.50,
            ],
            [
                'category_id' => $starters->id,
                'name' => 'Grilled Prawns',
                'description' => 'Mediterranean prawns with garlic, lemon and fresh herbs.',
                'price' => 14.50,
            ],
            [
                'category_id' => $starters->id,
                'name' => 'Charred Eggplant',
                'description' => 'Smoky eggplant, tahini, pomegranate and fresh mint.',
                'price' => 10.50,
            ],

            [
                'category_id' => $mainCourses->id,
                'name' => 'Mediterranean Sea Bass',
                'description' => 'Grilled sea bass with roasted vegetables, lemon and herbs.',
                'price' => 24.50,
            ],
            [
                'category_id' => $mainCourses->id,
                'name' => 'Lamb Kofta',
                'description' => 'Grilled lamb kofta with couscous, herbs and yogurt sauce.',
                'price' => 22.50,
            ],
            [
                'category_id' => $mainCourses->id,
                'name' => 'Truffle Mushroom Pasta',
                'description' => 'Fresh pasta with wild mushrooms, parmesan and truffle oil.',
                'price' => 19.50,
            ],

            [
                'category_id' => $desserts->id,
                'name' => 'Classic Tiramisu',
                'description' => 'Espresso-soaked mascarpone cream, cocoa and delicate biscuits.',
                'price' => 8.50,
            ],
            [
                'category_id' => $desserts->id,
                'name' => 'Baklava',
                'description' => 'Crisp filo pastry, pistachio, honey and orange blossom.',
                'price' => 7.50,
            ],

            [
                'category_id' => $drinks->id,
                'name' => 'Fresh Mint Lemonade',
                'description' => 'Freshly squeezed lemon, mint and sparkling water.',
                'price' => 5.50,
            ],
            [
                'category_id' => $drinks->id,
                'name' => 'Mediterranean Iced Tea',
                'description' => 'Cold brewed tea with citrus, mint and a touch of honey.',
                'price' => 5.00,
            ],
        ];

        foreach ($items as $index => $item) {
            MenuItem::create([
                ...$item,
                'slug' => Str::slug($item['name']),
                'sort_order' => $index,
            ]);
        }
    }
}
