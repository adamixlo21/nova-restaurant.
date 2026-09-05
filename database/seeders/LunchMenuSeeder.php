<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class LunchMenuSeeder extends Seeder
{
    public function run(): void

    {
        $lunchMenu = Menu::where('slug', 'lunch')->firstOrFail();
        $menu = [

            /*
            |--------------------------------------------------------------------------
            | BROODJES
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Broodjes',
                'sort_order' => 1,
                'items' => [
                    [
                        'name' => '12 uurtje',
                        'description' => 'Soep van de chef, kroket en uitsmijter.',
                        'price' => 15.50,
                    ],
                    [
                        'name' => 'Uitsmijter',
                        'description' => 'Twee plakken brood met 3 spiegeleitjes, keuze uit ham en/of kaas.',
                        'price' => 10.50,
                    ],
                    [
                        'name' => 'Kroketten op brood',
                        'description' => 'Keuze uit rundvleeskroketten of groentekroketten met mosterd.',
                        'price' => 11.50,
                    ],
                    [
                        'name' => 'Broodje Carpaccio',
                        'description' => 'Rundercarpaccio met oude kaas en truffelmayonaise.',
                        'price' => 14.50,
                    ],
                    [
                        'name' => 'Broodje Bank',
                        'description' => 'Wisselend broodje van de chef.',
                        'price' => 12.50,
                    ],
                    [
                        'name' => 'Broodje Feta',
                        'description' => 'Watermeloen, feta en dille.',
                        'price' => 12.50,
                    ],
                    [
                        'name' => 'Broodje Champignon',
                        'description' => 'Brioche brood, parmazaanse kaas, champignon en truffel.',
                        'price' => 11.50,
                    ],
                    [
                        'name' => 'Broodje Kaassoufflé',
                        'description' => 'Een brioche bol met een huisgemaakte kaassoufflé van Fourmé d’Ambert. Met een garnituur van zoetzure ui.',
                        'price' => 12.50,
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | CLASSICS
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Classics',
                'sort_order' => 2,
                'items' => [
                    [
                        'name' => 'Broodje pulled chicken',
                        'description' => 'Op ciabatta geserveerd met zoetzure komkommer, krokante ui en pittige mayonaise.',
                        'price' => 16.50,
                    ],
                    [
                        'name' => 'Broodje Vistrio',
                        'description' => 'Met gerookte vis van het seizoen, zoetzure groenten en kruidenemulsie.',
                        'price' => 16.50,
                    ],
                    [
                        'name' => 'Club Ceasar',
                        'description' => 'Kip, bacon, gebakken eitje, parmazaanse kaas en ansjovis-dressing.',
                        'price' => 16.50,
                    ],
                    [
                        'name' => 'Broodje gerookte ribeye',
                        'description' => 'Gerookte ribeye met een coullie van roodfruit geserveerd op brioche.',
                        'price' => 16.50,
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | CHEF'S KISS
            |--------------------------------------------------------------------------
            */
            [
                'category' => "Chef's Kiss",
                'sort_order' => 3,
                'items' => [
                    [
                        'name' => 'Verrassings-lunch',
                        'description' => 'Twee gangen verrassings-lunch van de chef. Met koffie inbegrepen.',
                        'price' => 32.50,
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | SALADES
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Salades',
                'sort_order' => 4,
                'items' => [
                    [
                        'name' => 'Salade Feta',
                        'description' => 'Feta met watermeloen, geserveerd met verse salade.',
                        'price' => 17.50,
                    ],
                    [
                        'name' => 'Salade Vistrio',
                        'description' => 'Gerookte vis van seizoen, kruidenemulsie, zoetzure groenten en croutons.',
                        'price' => 21.50,
                    ],
                    [
                        'name' => 'Salade Ceasar',
                        'description' => 'Kip, bacon, gebakken eitje, parmazaanse kaas en ansjovis-dressing.',
                        'price' => 19.50,
                    ],
                    [
                        'name' => 'Salade Carpaccio',
                        'description' => 'Rundercarpaccio met oude kaas en truffelmayonaise.',
                        'price' => 19.50,
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | EIERGERECHTEN
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Eiergerechten',
                'sort_order' => 5,
                'items' => [
                    [
                        'name' => 'Eggs Benedict Tomaat',
                        'description' => 'Brioche met tomaat, gepocheerde eieren en hollandaise saus.',
                        'price' => 15.90,
                    ],
                    [
                        'name' => 'Eggs Benedict Zalm',
                        'description' => 'Brioche met huisgerookte zalm, gepocheerde eieren en hollandaise saus.',
                        'price' => 15.90,
                    ],
                    [
                        'name' => 'Eggs Benedict Steak Tartaar',
                        'description' => 'Brioche met steak tartaar, gepocheerde eieren en hollandaise saus.',
                        'price' => 15.90,
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | SOEP
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Soep',
                'sort_order' => 6,
                'items' => [
                    [
                        'name' => 'Soep van de Bank',
                        'description' => 'Verse soep van de chef.',
                        'price' => 10.00,
                    ],
                    [
                        'name' => 'Tomaten soep',
                        'description' => 'Huisgemaakte tomatensoep.',
                        'price' => 8.50,
                    ],
                    [
                        'name' => 'Vis soep',
                        'description' => 'Wisselende vis garnituur.',
                        'price' => 12.50,
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | PLATE SERVICE
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Plate Service',
                'sort_order' => 7,
                'items' => [
                    [
                        'name' => 'Pasta Paddenstoel',
                        'description' => 'Ravioli met verse paddenstoelen, burrata en een truffel-roomsaus.',
                        'price' => 19.50,
                    ],
                    [
                        'name' => 'Vis van het seizoen',
                        'description' => 'Wisselende vis van het seizoen.',
                        'price' => 0.00,
                    ],
                    [
                        'name' => 'Huisgerookte Zalm',
                        'description' => 'Met beurre blanc en mosterd.',
                        'price' => 24.50,
                    ],
                    [
                        'name' => 'Steak de Bank',
                        'description' => 'Biefstuk met pepersaus.',
                        'price' => 31.50,
                    ],
                    [
                        'name' => 'Halve Kip',
                        'description' => 'Met Jean vignard saus.',
                        'price' => 19.50,
                    ],
                    [
                        'name' => 'Polderhoen',
                        'description' => 'Bereid op Mexicaanse wijze.',
                        'price' => 24.50,
                    ],
                    [
                        'name' => 'Spare ribs',
                        'description' => 'Spare ribs met mais.',
                        'price' => 24.50,
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | CHEF'S ETAGERE
            |--------------------------------------------------------------------------
            */
            [
                'category' => "Chef's Etagere",
                'sort_order' => 8,
                'items' => [
                    [
                        'name' => 'Etagere Lunchproeverij',
                        'description' => 'Een selectie van kleine lunchgerechten. Vanaf 2 personen. Prijs per persoon.',
                        'price' => 19.50,
                    ],
                    [
                        'name' => 'Etagere High Tea',
                        'description' => 'Verschillende hapjes, taartjes en sandwiches. Vanaf 2 personen. Prijs per persoon.',
                        'price' => 25.50,
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | KINDERMENU
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Kindermenu',
                'sort_order' => 9,
                'items' => [
                    [
                        'name' => 'Frietje en Snack',
                        'description' => 'Frituursnack naar keuze met appelmoes en ketchup.',
                        'price' => 9.50,
                    ],
                    [
                        'name' => 'Tosti',
                        'description' => 'Kaas of ham-kaas, met ketchup.',
                        'price' => 7.50,
                    ],
                    [
                        'name' => 'American Pancakes',
                        'description' => 'Dikke Amerikaanse pannenkoekjes met stroop.',
                        'price' => 8.00,
                    ],
                    [
                        'name' => 'Meloen met ham',
                        'description' => 'Watermeloen met ham.',
                        'price' => 9.50,
                    ],
                    [
                        'name' => 'Kinderijsje',
                        'description' => null,
                        'price' => 5.50,
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | OESTERS
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Oesters',
                'sort_order' => 10,
                'items' => [
                    [
                        'name' => 'Oester Klassiek',
                        'description' => 'Met citroen en sjalot vinaigrette.',
                        'price' => 4.50,
                    ],
                    [
                        'name' => 'Oester Bereid',
                        'description' => 'Een bereide oester met wisselende garnituur.',
                        'price' => 7.50,
                    ],
                ],
            ],
        ];

        foreach ($menu as $categoryData) {
            $category = Category::updateOrCreate(
                [
                    'slug' => Str::slug($categoryData['category']),
                ],
                [
                    'menu_id' => $lunchMenu->id,
                    'name' => $categoryData['category'],
                    'sort_order' => $categoryData['sort_order'],
                ]
            );

            foreach ($categoryData['items'] as $index => $item) {
                MenuItem::updateOrCreate(
                    [
                        'slug' => Str::slug($item['name']),
                    ],
                    [
                        'category_id' => $category->id,
                        'name' => $item['name'],
                        'description' => $item['description'],
                        'price' => $item['price'],
                        'is_available' => true,
                        'is_featured' => false,
                        'sort_order' => $index + 1,
                    ]
                );
            }
        }
    }
}
