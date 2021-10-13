<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class CreateProductsCategoriesMapTable extends Migration
{
    public function up()
    {
        Schema::create('products_categories_map', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('category_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('products_categories_map');
    }
}