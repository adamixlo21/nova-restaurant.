<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class WineMenuSeeder extends Seeder
{
    public function run(): void
    {
        $wineMenu = Menu::where('slug', 'wijn')->firstOrFail();

        $menu = [

            /*
            |--------------------------------------------------------------------------
            | MOUSSEREND
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Mousserend',
                'sort_order' => 1,
                'items' => [
                    [
                        'name' => 'Carrasiñes Espumoso',
                        'description' => 'Druivenras: Verdejo. Een iets zachtere bubbel met meer groen fruit tonen.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 8.50],
                            ['label' => 'Fles', 'price' => 40.00],
                        ],
                    ],
                    [
                        'name' => 'Christoffe Leroy Martin - Brut Cuvée Reservé',
                        'description' => 'Eigen druiven, 36 maanden rijping in Allemant. De Brut Cuvée bestaat uit 35% chardonnay, 65% pinot noir en 5% meunier.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Fles', 'price' => 120.00],
                        ],
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | WIT
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Wit',
                'sort_order' => 2,
                'items' => [
                    [
                        'name' => 'La Forge Estate Viognier',
                        'description' => 'Pays d’Oc, Frankrijk. Een rijke en aromatische wijn met tonen van gedroogd fruit, bloemen en honing. Fluweelzacht in de mond met een frisse balans en een lange, elegante afdronk.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 6.50],
                            ['label' => 'Fles', 'price' => 32.50],
                        ],
                    ],
                    [
                        'name' => 'Nau Mai Sauvignon Blanc',
                        'description' => 'Marlborough, Nieuw-Zeeland. Een frisse en expressieve Sauvignon Blanc met aroma’s van groene appel, citrus en buxus. Strak droog, fruitig en levendig, met herkenbare tonen van limoen en kruisbes.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 6.50],
                            ['label' => 'Fles', 'price' => 32.50],
                        ],
                    ],
                    [
                        'name' => 'Pinot Grigio',
                        'description' => 'Sicilië, Italië. Biologische Pinot Grigio uit Sicilië. Fris met appel, peer en citrus. Ideaal bij vis, pasta of als aperitief. Vegan.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 6.50],
                            ['label' => 'Fles', 'price' => 32.50],
                        ],
                    ],
                    [
                        'name' => 'Wooded Chardonnay',
                        'description' => 'Frankrijk. Aurora uit Zuid-Frankrijk: elegant en zijdezacht, met witte bloemen, tropisch fruit en perzik. Lange afdronk, perfect bij vis en gevogelte.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 7.50],
                            ['label' => 'Fles', 'price' => 37.50],
                        ],
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | ZOET WIT
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Zoet Wit',
                'sort_order' => 3,
                'items' => [
                    [
                        'name' => 'Moscato',
                        'description' => 'Australië. Frisse, fruitige Moscato met tonen van citrus en nectarine. Licht sprankelend, zachtzoet en laag in alcohol. Heerlijk gekoeld op een ontspannen middag of als verfrissend aperitief.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 6.50],
                            ['label' => 'Fles', 'price' => 32.50],
                        ],
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | ROSÉ
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Rosé',
                'sort_order' => 4,
                'items' => [
                    [
                        'name' => 'Sainte Barthès Rosé',
                        'description' => 'Côtes de Provence, Frankrijk. Licht zalmroze rosé met aroma’s van aardbei, framboos en perzik. Fris en fruitig met een zachte, kruidige afdronk.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 6.50],
                            ['label' => 'Fles', 'price' => 32.50],
                        ],
                    ],
                    [
                        'name' => 'Cheval Imperial Grenache rosé',
                        'description' => 'Pays d’Oc, Frankrijk. Mooie roze kleur met oranje hints. Frisse en aromatische neus van frambozen en aardbeien. Frisse smaak en aanhoudende mond van rood fruit.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 7.50],
                            ['label' => 'Fles', 'price' => 35.50],
                        ],
                    ],
                ],
            ],

            /*
            |--------------------------------------------------------------------------
            | ROOD
            |--------------------------------------------------------------------------
            */
            [
                'category' => 'Rood',
                'sort_order' => 5,
                'items' => [
                    [
                        'name' => 'Elettra Primitivo-Negroamaro',
                        'description' => 'Puglia, Italië. Volle, rode wijn met tonen van braam, kers en lichte kruiden. Zacht en gebalanceerd met een lange, harmonieuze afdronk.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 6.50],
                            ['label' => 'Fles', 'price' => 32.50],
                        ],
                    ],
                    [
                        'name' => 'Sighardt Donabaum Blauer Portugieser Frischling',
                        'description' => 'Wachau, Oostenrijk. Een lichte, fruitige rode wijn met aroma’s van kersen, rode bessen en pruimen. Sappig en levendig met een zachte structuur.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 7.50],
                            ['label' => 'Fles', 'price' => 35.50],
                        ],
                    ],
                    [
                        'name' => 'Finca el Origin Malbec Reserva',
                        'description' => 'Valle de Uco, Argentinië. Krachtige Malbec met aroma’s van rood fruit, viooltjes en vanille. Vol en kruidig, met zachte tannines en een lange afdronk.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 6.50],
                            ['label' => 'Fles', 'price' => 32.50],
                        ],
                    ],
                    [
                        'name' => 'Rione del Falco Primitivo Rosso',
                        'description' => 'Puglia, Italië. Stevige maar soepele rode wijn met een krachtig karakter. Vol en rond van smaak, perfect bij varkensvlees en kazen.',
                        'price' => null,
                        'price_text' => null,
                        'prices' => [
                            ['label' => 'Glas', 'price' => 5.50],
                            ['label' => 'Fles', 'price' => 27.50],
                        ],
                    ],
                ],
            ],
        ];

        foreach ($menu as $categoryData) {
            $category = Category::updateOrCreate(
                [
                    'slug' => 'wijn-' . Str::slug($categoryData['category']),
                ],
                [
                    'menu_id' => $wineMenu->id,
                    'name' => $categoryData['category'],
                    'sort_order' => $categoryData['sort_order'],
                ]
            );

            foreach ($categoryData['items'] as $index => $item) {
                $menuItem = MenuItem::updateOrCreate(
                    [
                        'slug' => 'wijn-' . Str::slug($item['name']),
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
