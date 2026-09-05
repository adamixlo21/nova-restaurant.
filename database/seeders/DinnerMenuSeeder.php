<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DinnerMenuSeeder extends Seeder
{
    public function run(): void
    {
        $dinnerMenu = Menu::where('slug', 'dinner')->firstOrFail();

        $menu = [
            [
                'category' => 'Voorgerechten',
                'sort_order' => 1,
                'items' => [
                    [
                        'name' => 'Breekbrood',
                        'description' => 'Breekbrood met boter en dips.',
                        'price' => 6.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Coquilles',
                        'description' => null,
                        'price' => 14.95,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Spitskool',
                        'description' => null,
                        'price' => 12.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Bruschetta',
                        'description' => null,
                        'price' => 10.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Pokebowl zalm',
                        'description' => null,
                        'price' => 12.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Carpaccio',
                        'description' => null,
                        'price' => 12.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Steak tartaar',
                        'description' => null,
                        'price' => 12.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Proeverij van de chef',
                        'description' => 'Een selectie van verschillende voorgerechten.',
                        'price' => 17.50,
                        'price_text' => 'p.p.',
                    ],
                ],
            ],

            [
                'category' => 'Oesters',
                'sort_order' => 2,
                'items' => [
                    [
                        'name' => 'Oester Klassiek',
                        'description' => 'Met citroen en sjalot vinaigrette.',
                        'price' => 4.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Oester Bereid',
                        'description' => 'Bereide oester met wisselende garnituur.',
                        'price' => 7.50,
                        'price_text' => null,
                    ],
                ],
            ],

            [
                'category' => 'Hoofdgerechten',
                'sort_order' => 3,
                'items' => [
                    [
                        'name' => 'Pasta paddenstoelen',
                        'description' => 'Ravioli met verse paddenstoelen, burrata en truffel-roomsaus.',
                        'price' => 19.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Vis van het seizoen',
                        'description' => 'Wisselende vis van het seizoen.',
                        'price' => null,
                        'price_text' => 'Dagprijs',
                    ],
                    [
                        'name' => 'Zeetong',
                        'description' => null,
                        'price' => null,
                        'price_text' => 'Dagprijs',
                    ],
                    [
                        'name' => 'Huisgerookte zalm',
                        'description' => 'Met beurre blanc en mosterd.',
                        'price' => 24.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Varkenshaas saté',
                        'description' => null,
                        'price' => 24.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Halve kip',
                        'description' => null,
                        'price' => 19.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Polderhoen',
                        'description' => null,
                        'price' => 24.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Hamburger',
                        'description' => null,
                        'price' => 24.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Spareribs',
                        'description' => null,
                        'price' => 24.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Steak de Bank',
                        'description' => 'Biefstuk met pepersaus.',
                        'price' => 31.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Tournedos Rossini',
                        'description' => null,
                        'price' => 42.50,
                        'price_text' => null,
                    ],
                ],
            ],

            [
                'category' => "Chef's Verrassingsmenu",
                'sort_order' => 4,
                'items' => [
                    [
                        'name' => 'Verrassingsmenu',
                        'description' => 'Verrassingsmenu van de chef.',
                        'price' => null,
                        'price_text' => null,
                    ],
                ],
            ],

            [
                'category' => 'Kindermenu',
                'sort_order' => 5,
                'items' => [
                    [
                        'name' => 'Frietje en Snack',
                        'description' => 'Frituursnack naar keuze met appelmoes en ketchup.',
                        'price' => 9.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Kinderijsje',
                        'description' => null,
                        'price' => 5.50,
                        'price_text' => null,
                    ],
                ],
            ],

            [
                'category' => 'Desserts',
                'sort_order' => 6,
                'items' => [
                    [
                        'name' => 'Dessert van de chef',
                        'description' => 'Wisselend dessert van de chef.',
                        'price' => null,
                        'price_text' => null,
                    ],
                ],
            ],

            [
                'category' => 'Salades',
                'sort_order' => 7,
                'items' => [
                    [
                        'name' => 'Salade Feta',
                        'description' => 'Feta met watermeloen, geserveerd met verse salade.',
                        'price' => 17.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Salade Vistrio',
                        'description' => 'Gerookte vis van het seizoen, kruidenemulsie, zoetzure groenten en croutons.',
                        'price' => 21.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Salade Ceasar',
                        'description' => 'Kip, bacon, gebakken eitje, parmazaanse kaas en ansjovis-dressing.',
                        'price' => 19.50,
                        'price_text' => null,
                    ],
                    [
                        'name' => 'Salade Carpaccio',
                        'description' => 'Rundercarpaccio met oude kaas en truffelmayonaise.',
                        'price' => 19.50,
                        'price_text' => null,
                    ],
                ],
            ],
        ];

        foreach ($menu as $categoryData) {
            $category = Category::updateOrCreate(
                [
                    'slug' => 'dinner-' . Str::slug($categoryData['category']),
                ],
                [
                    'menu_id' => $dinnerMenu->id,
                    'name' => $categoryData['category'],
                    'sort_order' => $categoryData['sort_order'],
                ]
            );

            foreach ($categoryData['items'] as $index => $item) {
                MenuItem::updateOrCreate(
                    [
                        'slug' => 'dinner-' . Str::slug($item['name']),
                    ],
                    [
                        'category_id' => $category->id,
                        'name' => $item['name'],
                        'description' => $item['description'],
                        'price' => $item['price'],
                        'price_text' => $item['price_text'],
                        'is_available' => true,
                        'is_featured' => false,
                        'sort_order' => $index + 1,
                    ]
                );
            }
        }
    }
}
