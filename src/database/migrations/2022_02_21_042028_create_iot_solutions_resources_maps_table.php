<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIotSolutionsResourcesMapsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('iot_solutions_resources_maps', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('solution_id');
            $table->unsignedBigInteger('resource_id');
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
        Schema::dropIfExists('iot_solutions_resources_maps');
    }
}
