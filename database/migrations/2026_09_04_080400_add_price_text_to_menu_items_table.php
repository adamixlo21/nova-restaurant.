<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('menu_items', function (Blueprint $table) {
            $table->decimal('price', 8, 2)
                ->nullable()
                ->change();

            $table->string('price_text')
                ->nullable()
                ->after('price');
        });
    }

    public function down(): void
    {
        Schema::table('menu_items', function (Blueprint $table) {
            $table->dropColumn('price_text');

            $table->decimal('price', 8, 2)
                ->nullable(false)
                ->change();
        });
    }
};
