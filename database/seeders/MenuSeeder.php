<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    public function run(): void
    {
        $menus = [
            [
                'name' => 'Lunch',
                'slug' => 'lunch',
                'description' => 'Bekijk onze lunchkaart.',
                'sort_order' => 1,
            ],
            [
                'name' => 'Dinner',
                'slug' => 'dinner',
                'description' => 'Bekijk onze dinerkaart.',
                'sort_order' => 2,
            ],
            [
                'name' => 'Drinks',
                'slug' => 'drinks',
                'description' => 'Bekijk onze drankenkaart.',
                'sort_order' => 3,
            ],
            [
                'name' => 'Wijn',
                'slug' => 'wijn',
                'description' => 'Bekijk onze wijnkaart.',
                'sort_order' => 4,
            ],
            [
                'name' => 'Tafelkaart',
                'slug' => 'tafelkaart',
                'description' => 'Bekijk onze tafelkaart.',
                'sort_order' => 5,
            ],
        ];

        foreach ($menus as $menu) {
            Menu::updateOrCreate(
                ['slug' => $menu['slug']],
                $menu
            );
        }
    }
}
