<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DrinksMenuSeeder extends Seeder
{
    public function run(): void
    {
        $drinksMenu = Menu::where('slug', 'drinks')->firstOrFail();

        $menu = [

            /*
            |--------------------------------------------------------------------------
            | BIER VAN DE TAP
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Bier van de Tap',
                'sort_order' => 1,
                'items' => [
                    [
                        'name' => 'Heineken',
                        'description' => '5%',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => '22cl', 'price' => 3.30],
                            ['label' => '25cl', 'price' => 3.80],
                        ],
                    ],
                    [
                        'name' => 'Heineken 0.0',
                        'description' => '0% / 25cl.',
                        'price' => 3.80,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Texels Skuumkoppe',
                        'description' => '6% / 30cl.',
                        'price' => 5.90,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Affligem Blond',
                        'description' => '6.7% / 30cl.',
                        'price' => 5.90,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Weize Vos',
                        'description' => '5.4% / 30cl.',
                        'price' => 5.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Lagunitas IPA',
                        'description' => '6.2% / 30cl.',
                        'price' => 6.10,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Brand Weizen',
                        'description' => '5.1% / 30cl.',
                        'price' => 5.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Wisseltap',
                        'description' => '30cl.',
                        'price' => 6.10,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Speciaalbier bierkoelkast',
                        'description' => 'Bekijk ons speciaalbier in de bierkoelkast.',
                        'price' => 7.40,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Brand Weizen 0.0',
                        'description' => '0% / 30cl.',
                        'price' => 5.90,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Affligem Dubbel',
                        'description' => '6.7% / 30cl.',
                        'price' => 5.90,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Affligem Tripple',
                        'description' => '9% / 30cl.',
                        'price' => 6.00,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'STËLZ',
                        'description' => 'Limon / mango',
                        'price' => 5.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | BIER FLES / BLIK
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Bier Fles / Blik',
                'sort_order' => 2,
                'items' => [
                    [
                        'name' => 'Amstel Radler',
                        'description' => '2% of 0% / 30cl.',
                        'price' => 4.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Texels Skuumkoppe 0.0',
                        'description' => '0% / 30cl.',
                        'price' => 5.20,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Affligem Blond 0.0',
                        'description' => '0% / 30cl.',
                        'price' => 5.00,
                        'price_text' => null,
                        'prices' => [],
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | FRISDRANKEN
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Frisdranken',
                'sort_order' => 3,
                'items' => [
                    ['name' => 'Cola', 'description' => null, 'price' => 3.30, 'price_text' => null, 'prices' => []],
                    ['name' => 'Cola-Light', 'description' => null, 'price' => 3.30, 'price_text' => null, 'prices' => []],
                    ['name' => 'Sinas', 'description' => null, 'price' => 3.30, 'price_text' => null, 'prices' => []],
                    ['name' => 'Sprite', 'description' => null, 'price' => 3.80, 'price_text' => null, 'prices' => []],
                    ['name' => 'Tonic', 'description' => null, 'price' => 3.30, 'price_text' => null, 'prices' => []],
                    ['name' => 'Bitterlemon', 'description' => null, 'price' => 3.30, 'price_text' => null, 'prices' => []],
                    ['name' => 'Rivella', 'description' => null, 'price' => 3.30, 'price_text' => null, 'prices' => []],
                    ['name' => 'Appelsap', 'description' => null, 'price' => 3.80, 'price_text' => null, 'prices' => []],
                    ['name' => 'Fristi', 'description' => null, 'price' => 3.30, 'price_text' => null, 'prices' => []],
                    ['name' => 'Chocomelk', 'description' => null, 'price' => 3.30, 'price_text' => null, 'prices' => []],
                    ['name' => 'Ginger Ale', 'description' => null, 'price' => 3.40, 'price_text' => null, 'prices' => []],
                    ['name' => 'Ginger Beer', 'description' => null, 'price' => 3.60, 'price_text' => null, 'prices' => []],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | SAP & HUISGEMAAKT
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Sap & Huisgemaakt',
                'sort_order' => 4,
                'items' => [
                    [
                        'name' => 'Chaudfontaine Rood',
                        'description' => null,
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => '25cl', 'price' => 3.30],
                            ['label' => '75cl', 'price' => 7.50],
                        ],
                    ],
                    [
                        'name' => 'Chaudfontaine Blauw',
                        'description' => null,
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => '25cl', 'price' => 3.30],
                            ['label' => '75cl', 'price' => 7.50],
                        ],
                    ],
                    ['name' => 'Fuze Tea Sparkling', 'description' => null, 'price' => 3.40, 'price_text' => null, 'prices' => []],
                    ['name' => 'Fuze Tea Green', 'description' => null, 'price' => 3.40, 'price_text' => null, 'prices' => []],
                    ['name' => 'Verse Jus', 'description' => null, 'price' => 3.80, 'price_text' => null, 'prices' => []],
                    ['name' => 'Verse Jus Groot', 'description' => null, 'price' => 5.50, 'price_text' => null, 'prices' => []],
                    ['name' => 'Huisgemaakte Ice Tea', 'description' => null, 'price' => 4.50, 'price_text' => null, 'prices' => []],
                    ['name' => 'Huisgemaakte Limonade', 'description' => null, 'price' => 4.00, 'price_text' => null, 'prices' => []],
                    ['name' => 'Tomatensap', 'description' => null, 'price' => 3.40, 'price_text' => null, 'prices' => []],
                    ['name' => 'Cassis', 'description' => null, 'price' => 3.30, 'price_text' => null, 'prices' => []],
                    ['name' => 'Melk', 'description' => null, 'price' => 2.60, 'price_text' => null, 'prices' => []],
                    ['name' => 'Karnemelk', 'description' => null, 'price' => 2.60, 'price_text' => null, 'prices' => []],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | KOFFIE
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Koffie',
                'sort_order' => 5,
                'items' => [
                    ['name' => 'Koffie', 'description' => null, 'price' => 3.20, 'price_text' => null, 'prices' => []],
                    ['name' => 'Cappuccino', 'description' => null, 'price' => 3.60, 'price_text' => null, 'prices' => []],
                    ['name' => 'Espresso', 'description' => null, 'price' => 3.00, 'price_text' => null, 'prices' => []],
                    ['name' => 'Koffie Verkeerd', 'description' => null, 'price' => 3.60, 'price_text' => null, 'prices' => []],
                    ['name' => 'Flat White', 'description' => null, 'price' => 4.60, 'price_text' => null, 'prices' => []],

                    [
                        'name' => 'Latte',
                        'description' => null,
                        'price' => 4.50,
                        'price_text' => null,
                        'prices' => [
                            ['label' => '+ karamel', 'price' => 0.50],
                        ],
                    ],

                    ['name' => 'Haver Latte', 'description' => null, 'price' => 4.80, 'price_text' => null, 'prices' => []],
                    ['name' => 'Haver Cappuccino', 'description' => null, 'price' => 3.80, 'price_text' => null, 'prices' => []],

                    [
                        'name' => 'IJskoffie',
                        'description' => null,
                        'price' => 5.20,
                        'price_text' => null,
                        'prices' => [
                            ['label' => '+ slagroom', 'price' => 0.75],
                        ],
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | THEE & WARME DRANKEN
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Thee & Warme Dranken',
                'sort_order' => 6,
                'items' => [
                    ['name' => 'Thee', 'description' => null, 'price' => 3.30, 'price_text' => null, 'prices' => []],
                    ['name' => 'Gember thee', 'description' => null, 'price' => 3.50, 'price_text' => null, 'prices' => []],
                    ['name' => 'Verse Munt thee', 'description' => null, 'price' => 3.50, 'price_text' => null, 'prices' => []],

                    [
                        'name' => 'Chai Latte',
                        'description' => null,
                        'price' => 4.50,
                        'price_text' => null,
                        'prices' => [
                            ['label' => '+ shot Espresso', 'price' => 1.90],
                        ],
                    ],

                    [
                        'name' => 'Warme Chocomelk',
                        'description' => null,
                        'price' => 3.50,
                        'price_text' => null,
                        'prices' => [
                            ['label' => '+ slagroom', 'price' => 0.75],
                        ],
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | SPECIALE KOFFIES
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Speciale Koffies',
                'sort_order' => 7,
                'items' => [
                    ['name' => 'Irish Coffee', 'description' => null, 'price' => 8.00, 'price_text' => null, 'prices' => []],
                    ['name' => 'Espresso Martini', 'description' => null, 'price' => 11.00, 'price_text' => null, 'prices' => []],
                    ['name' => 'Spanish coffee met Licor 43', 'description' => null, 'price' => 8.00, 'price_text' => null, 'prices' => []],
                    ['name' => 'French coffee met Grand Marnier', 'description' => null, 'price' => 8.00, 'price_text' => null, 'prices' => []],
                    ['name' => 'Italian coffee met Amaretto', 'description' => null, 'price' => 8.00, 'price_text' => null, 'prices' => []],
                    ['name' => 'Jamaican coffee met Tia Maria', 'description' => null, 'price' => 8.00, 'price_text' => null, 'prices' => []],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | COCKTAILS
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Cocktails',
                'sort_order' => 8,
                'items' => [
                    [
                        'name' => 'Espresso Martini',
                        'description' => null,
                        'price' => 11.60,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Pornstar Martini',
                        'description' => null,
                        'price' => 11.60,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Cosmopolitan',
                        'description' => null,
                        'price' => 10.60,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Limoncello Spritz',
                        'description' => null,
                        'price' => 8.60,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Aperol Spritz',
                        'description' => null,
                        'price' => 8.60,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Campari Spritz',
                        'description' => null,
                        'price' => 8.60,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Gin Tonic',
                        'description' => null,
                        'price' => 11.60,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Roze gin',
                        'description' => null,
                        'price' => 11.60,
                        'price_text' => null,
                        'prices' => [],
                    ],
                ],
            ],
            /*
          |--------------------------------------------------------------------------
          | MOCKTAILS
          |--------------------------------------------------------------------------
          */
            [
                'category' => 'Mocktails',
                'sort_order' => 9,
                'items' => [
                    [
                        'name' => 'Signature Mocktail',
                        'description' => 'Een mocktail op basis van Est - Established Sparkling Tea. Lekker bloemige en kruidige cocktail.',
                        'price' => 9.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                ],
            ],



        ];

        foreach ($menu as $categoryData) {
            $category = Category::updateOrCreate(
                [
                    'slug' => 'drinks-' . Str::slug($categoryData['category']),
                ],
                [
                    'menu_id' => $drinksMenu->id,
                    'name' => $categoryData['category'],
                    'sort_order' => $categoryData['sort_order'],
                ]
            );

            foreach ($categoryData['items'] as $index => $item) {
                $menuItem = MenuItem::updateOrCreate(
                    [
                        'slug' => 'drinks-' . Str::slug($item['name']),
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

                $menuItem->prices()->delete();

                foreach ($item['prices'] as $priceIndex => $price) {
                    $menuItem->prices()->create([
                        'label' => $price['label'],
                        'price' => $price['price'],
                        'sort_order' => $priceIndex + 1,
                    ]);
                }
            }
        }
    }
}
