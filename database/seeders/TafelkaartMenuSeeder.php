<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TafelkaartMenuSeeder extends Seeder
{
    public function run(): void
    {
        $tableMenu = Menu::where('slug', 'tafelkaart')->firstOrFail();

        $menu = [
            [
                'category' => 'Borrel Bites',
                'sort_order' => 1,
                'items' => [
                    [
                        'name' => 'Kaas & worst plankje',
                        'description' => null,
                        'price' => 14.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Bittergarnituur 20st.',
                        'description' => null,
                        'price' => 21.00,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Bittergarnituur 12st.',
                        'description' => null,
                        'price' => 13.00,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Camembert uit de oven',
                        'description' => null,
                        'price' => 15.00,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Brood etagère met dips',
                        'description' => null,
                        'price' => 12.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Kaasplankje',
                        'description' => '5 kazen',
                        'price' => 14.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Charcuterie',
                        'description' => '5 soorten vlees',
                        'price' => 14.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Bitterballen 10st.',
                        'description' => null,
                        'price' => 10.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Bitterballen 6st.',
                        'description' => null,
                        'price' => 6.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                ],
            ],

            [
                'category' => 'Zoete Hapjes',
                'sort_order' => 2,
                'items' => [
                    [
                        'name' => 'Chocoladetaart',
                        'description' => null,
                        'price' => 4.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Macaron met rood fruit',
                        'description' => null,
                        'price' => 4.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Wisselende zoete bites',
                        'description' => null,
                        'price' => 4.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Appeltaart',
                        'description' => null,
                        'price' => 4.50,
                        'price_text' => null,
                        'prices' => [
                            [
                                'label' => '+ slagroom',
                                'price' => 0.80,
                            ],
                        ],
                    ],
                    [
                        'name' => 'American Cookie',
                        'description' => null,
                        'price' => 4.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Mergpijp',
                        'description' => null,
                        'price' => 4.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Scone',
                        'description' => 'Met clotted cream, jam en lemon curd.',
                        'price' => 4.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                    [
                        'name' => 'Boterkoek',
                        'description' => null,
                        'price' => 4.50,
                        'price_text' => null,
                        'prices' => [],
                    ],
                ],
            ],
        ];

        foreach ($menu as $categoryData) {
            $category = Category::updateOrCreate(
                [
                    'slug' => 'tafelkaart-' . Str::slug($categoryData['category']),
                ],
                [
                    'menu_id' => $tableMenu->id,
                    'name' => $categoryData['category'],
                    'sort_order' => $categoryData['sort_order'],
                ]
            );

            foreach ($categoryData['items'] as $index => $item) {
                $menuItem = MenuItem::updateOrCreate(
                    [
                        'slug' => 'tafelkaart-' . Str::slug($item['name']),
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
