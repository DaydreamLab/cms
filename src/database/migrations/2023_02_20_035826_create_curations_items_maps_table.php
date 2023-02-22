<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurationsItemsMapsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('curations_items_maps', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('curationId');
            $table->unsignedBigInteger('itemId');
            $table->string('itemType');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('curations_items_maps');
    }
}
